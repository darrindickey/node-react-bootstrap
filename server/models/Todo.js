import Bookshelf from 'server/resources/bookshelf'

import User from './User'

class Todo extends Bookshelf.Model {
	
	get tableName() {
		return 'todos'
	}

	get hasTimestamps() {
		return true
	}

	user() {
		return this.belongsTo('User')
	}
}

export default Bookshelf.model('Todo', Todo)