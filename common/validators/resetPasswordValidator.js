import Validator from 'validatorjs'

export default function validator(data) {
	const rules = {
		password: 'required|min:6'
	}
 
	return new Validator(data, rules);
}