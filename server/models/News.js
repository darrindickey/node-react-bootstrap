import Bookshelf from '../bookshelf'
import User from './User'
import Tag from './Tag'
import Comment from './Comment'
import Resource from './Resource'

class News extends Bookshelf.Model {
	
	get tableName() {
		return 'news'
	}

	get hasTimestamps() {
		return true
	}

	author() {
		return this.belongsTo('User')
	}
	
	tags() {
		return this.belongsToMany('Tag', 'news-tag')
	}

	comments() {
		return this.hasMany('Comment')
	}

	image() {
		return this.hasOne('Resource')
	}
}

export default Bookshelf.model('News', News)