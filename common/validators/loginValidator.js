import Validator from 'validatorjs'


export default function validate(data) {
	const rules = {
		email: 'required|email',
		password: 'required|min:6'
	}
 
	return new Validator(data, rules);
}