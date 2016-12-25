import db from './db'
import bookshelf from 'bookshelf'

const bookshelfInstance = bookshelf(db)

// To be able to define relations using string. i.e resolve circular dependencies. 
bookshelfInstance.plugin('registry') 

export default bookshelfInstance