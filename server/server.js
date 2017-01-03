import express from 'express'
import bodyParser from 'body-parser'
import favicon from 'serve-favicon'
import session from 'express-session'
import passport from './passport'
import { dd } from './logger'
import { PATHS, APP_KEY } from './constants'

import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'
import PasswordController from './controllers/PasswordController'
import TodoController from './controllers/TodoController'
import DefaultController from './controllers/DefaultController'

const PORT = 3000

express()
	.set('views', PATHS.VIEWS)
	.set('view engine', 'hjs')
	.use(express.static(PATHS.PUBLIC))
	.use(favicon(PATHS.FAVICON))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}))

	.use(session({
		secret: APP_KEY,
		resave: false,
		saveUninitialized: false,
		//cookie: { secure: true }
	}))
	.use(passport.initialize())
	.use(passport.session())

	.use('/api/users', UserController)
	.use('/api/sessions', SessionController)
	.use('/api/passwords', PasswordController)
	.use('/api/todos', TodoController)
	.use(DefaultController)
	.listen(PORT, () => {
		dd(`Server running on port ${PORT}`)
	})