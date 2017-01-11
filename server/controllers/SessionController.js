import express from 'express'
import passport from 'server/resources/passport'
import LoginThrottler from 'server/resources/loginThrottler'
import userRepo from 'server/repositories/UserRepository'

import authMiddleware from 'server/middlewares/auth'
import guestMiddleware from 'server/middlewares/guest'

import { HTTP_STATUS } from 'server/constants'

import loginValidator from 'common/validators/loginValidator'
import signupValidator from 'common/validators/signupValidator'

function getUserData(user) {
	return {
		id: user.get('id'),
		email: user.get('email'),
		firstName: user.get('first_name'),
		lastName: user.get('last_name'),
		isAdmin: Boolean(user.get('is_admin'))
	}
}

function getIp(req) {
	return req.headers['x-forwarded-for'] || req.connection.remoteAddress
}

const SessionController = express.Router()

// Login
.post('/', guestMiddleware, (req, res, next) => { 
	const { email, password } = req.body
	const validation = loginValidator({ email, password })

	if (validation.fails()) {
		return res.status(HTTP_STATUS.UNPROCESSABLE).send(validation.errors)
	}
	
	const ip = getIp(req)

	const throttler = new LoginThrottler(email, ip)

	throttler.validate().then(() => {
		passport.authenticate('local', function(error, user, info) {
			if (error) {
				return res.status(HTTP_STATUS.SERVER_ERROR).send()
			}
			
			if (user) {
				userRepo.registerSuccessfulLogin({ user, ip })

				return throttler.reset().then(() => {
					// need to do this in order for the session to be set.
					// i.e serializeUser to be run..
					req.login(user, (err) => {
						if (err) {
							return res.status(HTTP_STATUS.SERVER_ERROR).send()
						} 
						
						return res.send(getUserData(user))
					})
				})
			}
			else {
				return throttler.increment().then(() => {
					return res.status(HTTP_STATUS.UNPROCESSABLE).send(info)	
				})
			}
		})(req, res, next)
	}, (err) => {
		return throttler.getMessage().then((message) => {
			return res.status(HTTP_STATUS.FORBIDDEN).send({ message })
		})
	}) 
})

// Logout
.delete('/', authMiddleware, (req, res, next) => {
	req.session.destroy((err) => {
		return res.send({message: 'logout success'})
	})
})

// Signup
.post('/signup', guestMiddleware, (req, res, next) => {
	const { email, firstName, lastName, password } = req.body
	const validation = signupValidator({ email, firstName, lastName, password })

	if (validation.fails()) {
		return res.status(HTTP_STATUS.UNPROCESSABLE).send(validation.errors)
	}

	userRepo.getByEmail(email).then((user) => {
		if (user) {
			return res.status(HTTP_STATUS.CONFLICT).send({message: 'User already exists'})
		}

		userRepo.signup({ email, firstName, lastName, password }).then((user) => {
			req.login(user, (err) => {
				if (err) {
					return res.status(HTTP_STATUS.SERVER_ERROR).send()
				} 
				
				return res.send(getUserData(user))
			})
		}, next)
	}, next)
})

export default SessionController
