import express from 'express'
import bodyParser from 'body-parser'
import favicon from 'serve-favicon'
import session from 'express-session'
import connectRedis from 'connect-redis'
import passport from './passport'
import { dd } from './logger'
import { PATHS, APP_KEY } from './constants'

import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'
import PasswordController from './controllers/PasswordController'
import TodoController from './controllers/TodoController'
import DefaultController from './controllers/DefaultController'

const PORT = 3000

const RedisStore = connectRedis(session)

express()
	.set('views', PATHS.VIEWS)
	.set('view engine', 'hjs')
	.use(express.static(PATHS.PUBLIC))
	.use(favicon(PATHS.FAVICON))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}))

	.use(session({
		store: new RedisStore({
			host: '127.0.0.1',
			port: 6379
		}),
		secret: APP_KEY,
		resave: false,
		saveUninitialized: false,
		//cookie: { secure: true }
	}))
	.use(passport.initialize())
	.use(passport.session())


	.get('/info', (req, res) => {
		res.send({
			session: req.session,
			isAuthenticated: req.isAuthenticated(),
		})
	})


	.use('/api/users', UserController)
	.use('/api/sessions', SessionController)
	.use('/api/passwords', PasswordController)
	.use('/api/todos', TodoController)
	.use(DefaultController)
	.listen(PORT, () => {
		dd(`Server running on port ${PORT}`)
	})