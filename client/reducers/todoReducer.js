import { TODO } from '../constants/actionKeys'

const handlers = {
	[`${TODO.API_FETCH_ALL}_FULFILLED`]: apiFetchAllHandler,
	[`${TODO.API_CREATE}_FULFILLED`]: apiCreateHandler,
	[`${TODO.API_UPDATE}_FULFILLED`]: apiUpdateHandler,
	[`${TODO.API_DELETE}_FULFILLED`]: apiDeleteHandler,
	[`${TODO.API_DELETE_COMPLETED}_FULFILLED`]: apiDeleteCompletedHandler,

	[TODO.UPDATE_SEARCH_QUERY]: updateQuery,
	[TODO.UPDATE_DONE_FILTER]: updateDoneFilter,
}

// item: { id: Number, text: String, is_completed: Boolean }
const initialState = {
	items: [],
	fetched: false,
	loading: false,
	showCompleted: false,
	query: ''
}

function apiFetchAllHandler(state, action) {
	const newState = cloneState(state)
	const payload = getPayload(action)

	newState.items = payload.data

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

function apiDeleteCompletedHandler(state, action) {
	const newState = cloneState(state)
	const payload = getPayload(action)

	newState.items = newState.items.filter((todo) => {
		return Boolean(todo.is_completed) === false
	})
	
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
	console.log('TODO::apiRejected [action] ', action)

	newState.loading = false
	return newState
}

// Non API actions
function updateQuery(state, action) {
	const newState = cloneState(state)
	const payload = getPayload(action)

	newState.query = payload.query
	return newState
}

function updateDoneFilter(state, action) {
	const newState = cloneState(state)
	const payload = getPayload(action)

	newState.showCompleted = payload.showCompleted
	return newState
}

function cloneState(prevState) {
	const newState = {...prevState}
	
	newState.items = prevState.items.map((todo) => {
		return {...todo}
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

	if (action.type.indexOf('TODO_API_') === 0) {
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
