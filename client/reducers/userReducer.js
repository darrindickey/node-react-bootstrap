import { USER } from 'client/constants/actionKeys'

const handlers = {
	[`${USER.API_FETCH_ALL}_FULFILLED`]: apiFetchAllHandler,
	[`${USER.API_FETCH}_FULFILLED`]: apiFetchHandler,
	[`${USER.API_CREATE}_FULFILLED`]: apiCreateHandler,
	[`${USER.API_UPDATE}_FULFILLED`]: apiUpdateHandler,
	[`${USER.API_DELETE}_FULFILLED`]: apiDeleteHandler
}

// item: { id: Integer, email: String, first_name: String, last_name: String, is_active: Boolean, is_admin: Boolean }
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
	console.log('USER::apiRejected [action] ', action)

	newState.loading = false
	return newState
}

function cloneState(prevState) {
	const newState = {...prevState}
	
	newState.items = prevState.items.map((user) => {
		return {...user}
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

	if (action.type.indexOf('USER_API_') === 0) {
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
