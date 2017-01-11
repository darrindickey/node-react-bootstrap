import { dd } from 'server/resources/logger'
import db from 'server/resources/db'

import News from 'server/models/News'


const TABLE = 'news';

class NewsRepository {

	constructor() {
		this.error = this.error.bind(this)
	}

	all() {
		return db(TABLE);
	}	

	get(id) {
		return db(TABLE).where('id', id).first();
	}

	error(err) {
		dd(err)
		throw new Error('ERROR')
	}
}

export default new NewsRepository()

