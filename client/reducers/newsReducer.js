import { NEWS } from 'client/constants/actionKeys'

const handlers = {
	[`${NEWS.API_FETCH_ALL}_FULFILLED`]: apiFetchAllHandler,
	[`${NEWS.API_FETCH}_FULFILLED`]: apiFetchHandler,
	[`${NEWS.API_CREATE}_FULFILLED`]: apiCreateHandler,
	[`${NEWS.API_UPDATE}_FULFILLED`]: apiUpdateHandler,
	[`${NEWS.API_DELETE}_FULFILLED`]: apiDeleteHandler
}

// item: { id: Number, titel: String, teaser: String, body: String }
const initialState = {
	items: [],
	fetched: false,
	loading: false
}

function apiFetchAllHandler(state, action) {
	const newState = cloneState(state)
	const payload = getPayload(action)

	newState.items = payload.data

	newState.loading = false
	return newState
}

function apiFetchHandler(state, action) {
	const newState = cloneState(state)
	const payload = getPayload(action)

	const index = newState.items.findIndex((todo) => todo.id === payload.data.id)

	if (index !== -1) {
		newState.items.splice(index, 1, payload.data)
	}
	else {
		newState.items.push(payload.data)
	}

	newState.loading = false
	return newState
}

function apiCreateHandler(state, action) {
	const newState = cloneState(state)
	const payload = getPayload(action)

	newState.items.push(payload.data)

	newState.loading = false
	return newState
}

function apiUpdateHandler(state, action) {
	const newState = cloneState(state)
	const payload = getPayload(action)

	const index = newState.items.findIndex((todo) => todo.id === payload.data.id)

	if (index !== -1) {
		newState.items.splice(index, 1, payload.data)
	}

	newState.loading = false
	return newState
}

function apiDeleteHandler(state, action) {
	const newState = cloneState(state)
	const payload = getPayload(action)

	const index = newState.items.findIndex((todo) => todo.id === payload.data)

	if (index !== -1) {
		newState.items.splice(index, 1)
	}

	newState.loading = false
	return newState
}

function apiPending(state) {
	const newState = cloneState(state)

	newState.loading = true;
	return newState
}

function apiRejected(state, action) {
	const newState = cloneState(state)
	console.log('NEWS::apiRejected [action] ', action)

	newState.loading = false
	return newState
}

function cloneState(prevState) {
	const newState = {...prevState}
	
	newState.items = prevState.items.map((news) => {
		return {...news}
	})

	return newState
}

function getPayload(action) {
	return action.hasOwnProperty('payload') ? action.payload : undefined
}

function reducer(state = initialState, action) {
	if (handlers.hasOwnProperty(action.type)) {
		return handlers[action.type](state, action)
	}

	if (action.type.indexOf('NEWS_API_') === 0) {
		if (action.type.includes('_PENDING')) {
			return apiPending(state)
		}

		if (action.type.includes('_REJECTED')) {
			return apiRejected(state, action)
		}
	}

	return state
}

export default reducer