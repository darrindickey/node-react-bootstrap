import axios from 'axios'
import store from '../store'
import { SESSION } from '../constants/actionKeys'

const baseUrl = '/api/sessions'

function login(email, password) {
	store.dispatch({
		type: SESSION.API_CREATE,
		payload: axios.post(baseUrl, {email, password})
	});
}

function logout() {
	store.dispatch({
		type: SESSION.API_DELETE,
		payload: axios.delete(baseUrl)
	});
}

function signup(fields) {
	store.dispatch({
		type: SESSION.API_SIGNUP,
		payload: axios.post(`${baseUrl}/signup`, fields)
	});
}

export {
	login,
	logout,
	signup
}