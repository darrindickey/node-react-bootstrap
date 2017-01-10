import bcrypt from 'bcrypt-nodejs'
import { dd } from '../logger'
import db from '../db'
import User from '../models/User'
import Login from '../models/Login'

const TABLE = 'users';

class UserRepository {

	constructor() {
		this.error = this.error.bind(this)
	}

	login({ email, password }) {
		return User.where({email}).fetch().then((user) => {
			if (! user) {
				return Promise.resolve(null)	
			}

			if (bcrypt.compareSync(password, user.get('password'))) {
				return Promise.resolve(user);
			}
			return Promise.resolve(null)
		}, (err) => {
			return Promise.reject(err)
		})
	}

	signup({ email, firstName, lastName, password }) {
		return new User({
			email, 
			first_name: firstName, 
			last_name: lastName, 
			password: bcrypt.hashSync(password)
		}).save()
	}

	resetPassword() {

	}

	changePassword() {

	}

	forgotPassword() {

	}

	getById(id) {
		return User.where({id}).fetch()
	}

	registerSuccessfulLogin({ user, ip }) {
		new Login({ 
			user_id: user.get('id'), 
			created_at: new Date(),
			ip
		}).save()
	}

	error(err) {
		dd(err)
		throw new Error('ERROR')
	}
}

export default new UserRepository()