import axios from 'axios'
import store from '../store'
import { NEWS } from '../constants/actionKeys'

const baseUrl = '/api/news'

function fetchAll() {
	store.dispatch({
		type: NEWS.API_FETCH_ALL,
		payload: axios.get(baseUrl)
	});
}

function fetch(news) {
	store.dispatch({
		type: NEWS.API_FETCH,
		payload: axios.get(`${baseUrl}/${news.id}`)
	});
}

function create(fields) {
	store.dispatch({
		type: NEWS.API_CREATE,
		payload: axios.post(baseUrl, fields)
	});
}

function update(news) {
	store.dispatch({
		type: NEWS.API_UPDATE,
		payload: axios.put(`${baseUrl}/${news.id}`, news)
	});
}

function destroy(news) {
	store.dispatch({
		type: NEWS.API_DELETE,
		payload: axios.delete(`${baseUrl}/${news.id}`)
	});
}

export {
	fetchAll,
	fetch,
	create,
	update,
	destroy
}
