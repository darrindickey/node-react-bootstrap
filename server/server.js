import express from 'express'
import bodyParser from 'body-parser'
import favicon from 'serve-favicon'
import session from 'express-session'
import connectRedis from 'connect-redis'
import redis from 'server/resources/redis'

import passport from 'server/resources/passport'
import { dd } from 'server/resources/logger'
import { PATHS, APP_KEY } from './constants'
import { redis as redisConf } from './env'

import UserController from 'server/controllers/UserController'
import SessionController from 'server/controllers/SessionController'
import PasswordController from 'server/controllers/PasswordController'
import TodoController from 'server/controllers/TodoController'
import FacebookController from 'server/controllers/FacebookController'
import DefaultController from 'server/controllers/DefaultController'

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
			host: redisConf.host,
			port: redisConf.port
		}),
		secret: APP_KEY,
		resave: false,
		saveUninitialized: false,
		//cookie: { secure: true }
	}))
	.use(passport.initialize())
	.use(passport.session())

	.get('/session', (req, res) => {
		res.send({
			session: req.session,
			isAuthenticated: req.isAuthenticated(),
		})
	})

	.get('/redis', (req, res) => {
		
		redis.hmsetAsync('foo::bar::baz', {
			'time': 123,
			'attempts': 2
		}).then((status) => {
			if (status === 'OK') {
				redis.hgetallAsync('foo::bar::baz').then((result) => {
					res.send({ data: result })	
				})
			}
		})
	})

	.use('/api/users', UserController)
	.use('/api/sessions', SessionController)
	.use('/api/passwords', PasswordController)
	.use('/api/todos', TodoController)
	.use('/auth/facebook', FacebookController)
	.use(DefaultController)
	.listen(PORT, () => {
		dd(`Server running on port ${PORT}`)
	})