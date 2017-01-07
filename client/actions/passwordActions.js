import axios from 'axios'
import store from '../store'
import { PASSWORD } from '../constants/actionKeys'

const baseUrl = '/api/passwords'

function change({currentPassword, newPassword}) {
	store.dispatch({
		type: PASSWORD.API_CHANGE,
		payload: axios.put(`${baseUrl}/change`, {currentPassword, newPassword})
	});
}

function forgot({email}) {
	store.dispatch({
		type: PASSWORD.API_FORGOT,
		payload: axios.post(`${baseUrl}/forgot`, {email})
	});
}

function reset({password, token}) {
	store.dispatch({
		type: PASSWORD.API_RESET,
		payload: axios.put(`${baseUrl}/reset`, {password, token})
	});
}

export {
	change,
	forgot,
	reset
}