import * as USER from '../constants/userActionTypes'

const handlers = {
	[USER.FETCH_USERS_PENDING]: fetchUsersPending,
	[USER.FETCH_USERS_FULFILLED]: fetchUsersFulfilled,
	[USER.FETCH_USERS_REJECTED]: fetchUsersRejected
}

function fetchUsersPending(state, payload) {

	return state
}

function fetchUsersFulfilled(state, payload) {

	return state
}

function fetchUsersRejected(state, payload) {

	return state
}


const initialState = {
	item: {
		id: undefined,
		email: undefined,
		first_name: undefined,
		last_name: undefined,
		is_active: false
	},
	disableActions: false,
	fetched: false
}

function reducer(prevState = initialState, action) {
	if (handlers.hasOwnProperty(action.type)) {
		const payload = action.hasOwnProperty('payload') ? action.payload : undefined
		const state = {...prevState}

		return handlers[action.type](state, payload)
	}

	return prevState
}

export default reducer
