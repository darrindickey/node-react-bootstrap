import Bookshelf from 'server/resources/bookshelf'

import Todo from './Todo'
import News from './News'
import Login from './Login'
import Comment from './Comment'

class User extends Bookshelf.Model {
	
	get tableName() {
		return 'users'
	}

	get hasTimestamps() {
		return true
	}

	todos() {
		return this.hasMany('Todo')
	}

	news() {
		return this.hasMany('News')
	}

	logins() {
		return this.hasMany('Login')
	}

	comments() {
		return this.hasMany('Comment')
	}
}

export default Bookshelf.model('User', User)