import * as NEWS from '../constants/newsActionTypes'

const handlers = {
	[NEWS.FETCH_ALL_NEWS_PENDING]: fetchAllNewsPending,
	[NEWS.FETCH_ALL_NEWS_FULFILLED]: fetchAllNewsFulfilled,
	[NEWS.FETCH_ALL_NEWS_REJECTED]: fetchAllNewsRejected
}

function fetchAllNewsPending(state, payload) {

	return state
}

function fetchAllNewsFulfilled(state, payload) {

	return state
}

function fetchAllNewsRejected(state, payload) {

	return state
}

/*------------------------
item: Object
	id: Number
	titel: String
	teaser: String
	body: String	
-------------------------*/

const initialState = {
	items: [],
	disableActions: false,
	fetched: false
}

function reducer(prevState = initialState, action) {
	if (handlers.hasOwnProperty(action.type)) {
		const payload = action.hasOwnProperty('payload') ? action.payload : undefined
		const state = {...prevState}
		
		state.items = prevState.items.map((todo) => {
			return {...todo}
		})

		return handlers[action.type](state, payload)
	}

	return prevState
}

export default reducer
