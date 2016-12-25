import Bookshelf from '../bookshelf'
import News from './News'

class Resource extends Bookshelf.Model {
	
	get tableName() {
		return 'resources'
	}

	get hasTimestamps() {
		return false
	}

	news() {
		return this.belongsTo('News')
	}

	
}

export default Bookshelf.model('Resource', Resource)