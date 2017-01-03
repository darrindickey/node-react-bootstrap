import bcrypt from 'bcrypt-nodejs'
import { dd } from '../logger'
import db from '../db'
import User from '../models/User'

const TABLE = 'users';

class UserRepository {

	constructor() {
		this.error = this.error.bind(this)
	}

	login(email, password) {
		return User.where({email}).first().then((user) => {
			if (bcrypt.compareSync(password, user.password)) {
				this.registerSuccessfulLogin(user)
				return Promise.resolve(user);
			}

			return Promise.resolve(null);
		}, (err) => {
			return Promise.reject(err)
		})
	}

	logout() {

	}

	resetPassword() {

	}

	changePassword() {

	}

	forgotPassword() {

	}

	getById(id) {
		return db(TABLE).where('id', id).first();
	}

	registerSuccessfulLogin(user) {
		dd(`UserRepository::registerSuccessfulLogin - User ${user.email} loged in successfully, add entry to logins table`)
	}

	error(err) {
		dd(err)
		throw new Error('ERROR')
	}
}

export default new UserRepository()