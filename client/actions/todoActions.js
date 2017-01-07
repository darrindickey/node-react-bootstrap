import axios from 'axios'
import store from '../store'
import { TODO } from '../constants/actionKeys'

const baseUrl = '/api/todos'

function fetchAll() {
	store.dispatch({
		type: TODO.API_FETCH_ALL,
		payload: axios.get(baseUrl)
	});
}

function create(fields) {
	store.dispatch({
		type: TODO.API_CREATE,
		payload: axios.post(baseUrl, fields)
	});
}

function update(todo) {
	store.dispatch({
		type: TODO.API_UPDATE,
		payload: axios.put(`${baseUrl}/${todo.id}`, todo)
	});
}

function destroy(id) {
	store.dispatch({
		type: TODO.API_DELETE,
		payload: axios.delete(`${baseUrl}/${id}`)
	});
}

function deleteCompleted() {
	store.dispatch({
		type: TODO.API_DELETE_COMPLETED,
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
	fetchAll,
	create,
	update,
	destroy,
	deleteCompleted,
	updateSearchQuery,
	updateDoneFilter
}
