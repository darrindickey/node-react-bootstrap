import axios from 'axios'
import store from '../store'
import { USER } from '../constants/actionKeys'

const baseUrl = '/api/users'

function fetchAll() {
	store.dispatch({
		type: USER.API_FETCH_ALL,
		payload: axios.get(baseUrl)
	});
}

function fetch(id) {
	store.dispatch({
		type: USER.API_FETCH,
		payload: axios.get(`${baseUrl}/${id}`)
	});
}

function create(fields) {
	store.dispatch({
		type: USER.API_CREATE,
		payload: axios.post(baseUrl, fields)
	});
}

function update(user) {
	store.dispatch({
		type: USER.API_UPDATE,
		payload: axios.put(`${baseUrl}/${user.id}`, user)
	});
}

function destroy(id) {
	store.dispatch({
		type: USER.API_DELETE,
		payload: axios.delete(`${baseUrl}/${user.id}`)
	});
}

export {
	fetchAll,
	fetch,
	create,
	update,
	destroy
}
