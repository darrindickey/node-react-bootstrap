import { dd } from '../logger'
import db from '../db'
import Todo from '../models/Todo'
import User from '../models/User'

const TABLE = 'todos';

class TodoRepository {

	constructor() {
		this.error = this.error.bind(this)
	}

	all() {
		return db(TABLE);
	}	

	get(id) {
		return db(TABLE).where('id', id).first();
	}

	create(params) {
		const {text} = params

		// TODO(homan) get user form session
		return db(TABLE).insert({user_id: 1, text}).then((id) => {
			return this.get(id)
		}, this.error)
	}

	update(id, params) {
		const { text, is_completed } = params;

		return db(TABLE).where('id', id).update({text, is_completed}).then((affectedRows) => {
			if (affectedRows !== 1) {
				this.error(new Error('sql error'))
			}
			return this.get(id)	
		}, this.error)
	}

	remove(id) {
		return db(TABLE).where('id', id).del()
	}

	removeCompleted() {
		return db(TABLE).where('is_completed', true).del()
	}

	error(err) {
		dd(err)
		throw new Error('ERROR')
	}
}

export default new TodoRepository()