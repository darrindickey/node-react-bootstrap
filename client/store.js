import { applyMiddleware, createStore, compose } from 'redux'

import reduxPromiseMiddleware from 'redux-promise-middleware' // register with call, payload must be a promise
import reduxThunk from 'redux-thunk' // runs when action is a function

import reducers from './reducers'

// TODO(homan) use ENV to exclude in production ..
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = applyMiddleware(reduxPromiseMiddleware(), reduxThunk)

const store = createStore(reducers, composeEnhancers(middlewares))

export default store
