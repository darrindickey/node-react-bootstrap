import { combineReducers } from 'redux'

import news from './newsReducer'
import password from './passwordReducer'
import session from './sessionReducer'
import todo from './todoReducer'
import user from './userReducer'

const reducers = combineReducers({
	news,
	password,
	session,
	user,
	todo
})

export default reducers