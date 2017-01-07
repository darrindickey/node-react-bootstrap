import { PASSWORD } from '../constants/actionKeys'

const handlers = {
	[`${PASSWORD.API_CHANGE}_FULFILLED`]: apiChangeHandler,
	[`${PASSWORD.API_FORGOT}_FULFILLED`]: apiForgotHandler,
	[`${PASSWORD.API_RESET}_FULFILLED`]: apiResetHandler
}

const initialState = {
	loading: false
}

function apiChangeHandler(state, action) {
	const newState = cloneState(state)
	const payload = getPayload(action)

	// TODO(homan)
	console.log('apiChangeHandler [action] ', action)

	newState.loading = false
	return newState
}

function apiForgotHandler(state, action) {
	const newState = cloneState(state)
	const payload = getPayload(action)

	// TODO(homan)
	console.log('apiForgotHandler [action] ', action)

	newState.loading = false
	return newState
}

function apiResetHandler(state, action) {
	const newState = cloneState(state)
	const payload = getPayload(action)

	// TODO(homan)
	console.log('apiResetHandler [action] ', action)

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
	console.log('PASSWORD::apiRejected [action] ', action)

	newState.loading = false
	return newState
}

function cloneState(prevState) {
	const newState = {...prevState}
		
	return newState
}

function getPayload(action) {
	return action.hasOwnProperty('payload') ? action.payload : undefined
}

function reducer(state = initialState, action) {
	if (handlers.hasOwnProperty(action.type)) {
		return handlers[action.type](state, action)
	}

	if (action.type.indexOf('PASSWORD_API_') === 0) {
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