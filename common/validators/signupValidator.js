import Validator from 'validatorjs'

export default function validator(data) {
	const rules = {
		firstName: 'required',
		lastName: 'required',
		email: 'required|email',
		password: 'required|min:6'
	}
 
	return new Validator(data, rules);
}