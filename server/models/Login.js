import Bookshelf from '../bookshelf'
import User from './User'

class Login extends Bookshelf.Model {
	
	get tableName() {
		return 'logins'
	}

	get hasTimestamps() {
		return false
	}

	user() {
		return this.belongsTo('User')
	}
}

export default Bookshelf.model('Login', Login)