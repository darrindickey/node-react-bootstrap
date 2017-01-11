import Bookshelf from 'server/resources/bookshelf'

import News from './News'

class Tag extends Bookshelf.Model {
	
	get tableName() {
		return 'tags'
	}

	get hasTimestamps() {
		return true
	}

	news() {
		return this.belongsToMany('News', 'news-tag')
	}
}

export default Bookshelf.model('Tag', Tag)