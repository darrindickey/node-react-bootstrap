import { combineReducers } from 'redux'

import user from './userReducer'
import todos from './todosReducer'
import news from './newsReducer'

const reducers = combineReducers({
	user,
	todos,
	news
})

export default reducers