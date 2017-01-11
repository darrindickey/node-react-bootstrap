import Validator from 'validatorjs'

export default function validator(data) {
	const rules = {
		currentPassword: 'required|min:6',
		newPassword: 'required|min:6'
	}
 
	return new Validator(data, rules);
}