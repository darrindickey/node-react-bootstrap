import express from 'express'
import bodyParser from 'body-parser'
import favicon from 'serve-favicon'
import { dd } from './logger'
import { PATHS } from './constants'

import DefaultController from './controllers/DefaultController'
import TodoController from './controllers/TodoController'
import UserController from './controllers/UserController'

const PORT = 9000

express()
	.set('views', PATHS.VIEWS)
	.set('view engine', 'hjs')
	.use(express.static(PATHS.PUBLIC))
	.use(favicon(PATHS.FAVICON))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}))
	.use('/api/users', UserController)
	.use('/api/todos', TodoController)
	.use(DefaultController)
	.listen(PORT, () => {
		dd(`Server running on port ${PORT}`)
	})