import axios from 'axios'
import store from '../store'
import * as TODO from '../constants/todoActionTypes'

const baseUrl = '/api/todos'

function fetchAllTodos() {
	store.dispatch({
		type: TODO.FETCH_TODOS_PREFIX,
		payload: axios.get(baseUrl)
	});
}

function createTodo(text) {
	store.dispatch({
		type: TODO.CREATE_TODO_PREFIX,
		payload: axios.post(baseUrl, {text})
	});
}

function updateTodo(todo) {
	store.dispatch({
		type: TODO.UPDATE_TODO_PREFIX,
		payload: axios.put(`${baseUrl}/${todo.id}`, todo)
	});
}

function deleteTodo(todo) {
	store.dispatch({
		type: TODO.DELETE_TODO_PREFIX,
		payload: axios.delete(`${baseUrl}/${todo.id}`)
	});
}

function deleteCompletedTodos() {
	store.dispatch({
		type: TODO.DELETE_COMPLETED_TODOS_PREFIX,
		payload: axios.delete(`${baseUrl}/completed`)
	});
}

function updateSearchQuery(query) {
	store.dispatch({
		type: TODO.UPDATE_SEARCH_QUERY,
		payload: {query}
	});
}

function updateDoneFilter(showCompleted) {
	store.dispatch({
		type: TODO.UPDATE_DONE_FILTER,
		payload: {showCompleted}
	});
}

export {
	fetchAllTodos,
	createTodo,
	updateTodo,
	deleteTodo,
	deleteCompletedTodos,
	updateSearchQuery,
	updateDoneFilter
}
