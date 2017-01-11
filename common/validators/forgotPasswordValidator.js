import Validator from 'validatorjs'

export default function validator(data) {
	const rules = {
		email: 'required|email'
	}
 
	return new Validator(data, rules);
}