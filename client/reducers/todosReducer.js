import * as TODO from '../constants/todoActionTypes'

const handlers = {
	[TODO.FETCH_TODOS_PENDING]: fetchTodosPending,
	[TODO.FETCH_TODOS_FULFILLED]: fetchTodosFulfilled,
	[TODO.FETCH_TODOS_REJECTED]: fetchTodosRejected,

	[TODO.CREATE_TODO_PENDING]: createTodoPending,
	[TODO.CREATE_TODO_FULFILLED]: createTodoFulfilled,
	[TODO.CREATE_TODO_REJECTED]: createTodoRejected,

	[TODO.UPDATE_TODO_PENDING]: updateTodoPending,
	[TODO.UPDATE_TODO_FULFILLED]: updateTodoFulfilled,
	[TODO.UPDATE_TODO_REJECTED]: updateTodoRejected,

	[TODO.DELETE_TODO_PENDING]: deleteTodoPending,
	[TODO.DELETE_TODO_FULFILLED]: deleteTodoFulfilled,
	[TODO.DELETE_TODO_REJECTED]: deleteTodoRejected,

	[TODO.DELETE_COMPLETED_TODOS_PENDING]: deleteCompletedTodosPending,
	[TODO.DELETE_COMPLETED_TODOS_FULFILLED]: deleteCompletedTodosFulfilled,
	[TODO.DELETE_COMPLETED_TODOS_REJECTED]: deleteCompletedTodosRejected,

	[TODO.UPDATE_SEARCH_QUERY]: updateQuery,
	[TODO.UPDATE_DONE_FILTER]: updateDoneFilter,
}

function fetchTodosPending(state, payload) {

	return state
}

function fetchTodosFulfilled(state, payload) {
	state.items = payload.data
	return state
}

function fetchTodosRejected(state, payload) {

	return state
}

function createTodoPending(state, payload) {

	return state
}

function createTodoFulfilled(state, payload) {
	state.items.push(payload.data)
	return state
}

function createTodoRejected(state, payload) {

	return state
}

function updateTodoPending(state, payload) {

	return state
}

function updateTodoFulfilled(state, payload) {
	const { data } = payload
	const todo = state.items.find((todo) => todo.id === data.id)
	todo.text = data.text
	todo.is_completed = data.is_completed
	return state
}

function updateTodoRejected(state, payload) {

	return state
}

function deleteTodoPending(state, payload) {


	return state
}

function deleteTodoFulfilled(state, payload) {

	return state
}

function deleteTodoRejected(state, payload) {

	return state
}

function deleteCompletedTodosPending(state, payload) {

	return state
}

function deleteCompletedTodosFulfilled(state, payload) {
	state.items = state.items.filter((todo) => {
		return Boolean(todo.is_completed) === false
	})
	return state
}

function deleteCompletedTodosRejected(state, payload) {

	return state
}

function updateQuery(state, payload) {
	state.query = payload.query
	return state
}

function updateDoneFilter(state, payload) {
	state.showCompleted = payload.showCompleted
	return state
}

// item: {
// 	  id: Number,
// 	  text: String
// 	  is_completed: Boolean
// }

const initialState = {
	items: [],
	fetched: false,
	loading: false,
	disableActions: false,
	showCompleted: false,
	query: ''
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
