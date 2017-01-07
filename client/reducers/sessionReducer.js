import { SESSION } from '../constants/actionKeys'

const handlers = {
	[`${SESSION.API_CREATE}_FULFILLED`]: apiLoginHandler,
	[`${SESSION.API_DELETE}_FULFILLED`]: apiLogoutHandler,
	[`${SESSION.API_SIGNUP}_FULFILLED`]: apiSignupHandler
}

const initialState = {
	loading: false,
	isLogedIn: false,
	user: {
		id: undefined,
		email: undefined,
		first_name: undefined,
		last_name: undefined,
		is_active: false,
		is_admin: false
	}
}

function apiLoginHandler(state, action) {
	const newState = cloneState(state)
	const payload = getPayload(action)

	newState.user = payload.data
	newState.isLogedIn = true

	newState.loading = false
	return newState
}

function apiLogoutHandler(state, action) {
	const newState = cloneState(state)
	const payload = getPayload(action)

	newState.user = initialState.user
	newState.isLogedIn = false

	newState.loading = false
	return newState
}

function apiSignupHandler(state, action) {
	const newState = cloneState(state)
	const payload = getPayload(action)

	newState.user = payload.data
	newState.isLogedIn = true

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
	console.log('SESSION::apiRejected [action] ', action)

	newState.loading = false
	return newState
}

function cloneState(prevState) {
	const newState = {...prevState}
	
	newState.user = {...prevState.user}
		
	return newState
}

function getPayload(action) {
	return action.hasOwnProperty('payload') ? action.payload : undefined
}

function reducer(state = initialState, action) {
	if (handlers.hasOwnProperty(action.type)) {
		return handlers[action.type](state, action)
	}

	if (action.type.indexOf('SESSION_API_') === 0) {
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