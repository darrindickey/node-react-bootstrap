import bookshelf from 'bookshelf'
import db from 'server/resources/db'

const bookshelfInstance = bookshelf(db)

// To be able to define relations using string. i.e resolve circular dependencies. 
bookshelfInstance.plugin('registry') 

export default bookshelfInstance