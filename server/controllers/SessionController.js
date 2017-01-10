import express from 'express'
import passport from '../passport'
import userRepo from '../repositories/UserRepository'
import { dd } from '../logger'

function getUserData(user) {
	return {
		id: user.get('id'),
		email: user.get('email'),
		firstName: user.get('first_name'),
		lastName: user.get('last_name'),
		isAdmin: Boolean(user.get('is_admin'))
	}
}

const SessionController = express.Router()

// Login
.post('/', (req, res, next) => {

	passport.authenticate('local', function(error, user, info) {
		if (error) {
			return res.status(500).send()
		}
		
		if (! user) {
			return res.status(401).send(info)
		}

		userRepo.registerSuccessfulLogin({
			user: user,
			ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
		})

		// need to do this in order for the session to be set.
		// i.e serializeUser to be run..
		req.login(user, (err) => {
			if (err) {
				return res.status(500).send()
			} 
			
			res.send(getUserData(user))
		})

	})(req, res, next)
})

// Logout
.delete('/', (req, res, next) => {
	if (req.hasOwnProperty('session')) {
		req.session.destroy((err) => {
			res.send({message: 'logout success'})
		})
	}
	else {
		res.send({message: 'logout success'})	
	}
})

// Signup
.post('/signup', (req, res, next) => {
	const { email, firstName, lastName, password } = req.body

	userRepo.signup({ email, firstName, lastName, password }).then((user) => {
		req.login(user, (err) => {
			if (err) {
				return res.status(500).send()
			} 
			
			res.send(getUserData(user))
		})
	}, next)
})

export default SessionController