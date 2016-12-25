import Bookshelf from '../bookshelf'
import News from './News'
import User from './User'

class Comment extends Bookshelf.Model {
	
	get tableName() {
		return 'comments'
	}

	get hasTimestamps() {
		return false
	}

	news() {
		return this.belongsTo('News')
	}

	author() {
		return this.belongsTo('User')
	}
}

export default Bookshelf.model('Comment', Comment)