import express from 'express'
import passport from 'server/resources/passport'
import userRepo from 'server/repositories/UserRepository'
import guestMiddleware from 'server/middlewares/guest'

function getIp(req) {
	return req.headers['x-forwarded-for'] || req.connection.remoteAddress
}

const FacebookController = express.Router()

.get('/', guestMiddleware, passport.authenticate('facebook', { scope : ['email'] }))

.get('/callback', guestMiddleware, (req, res, next) => { 
	passport.authenticate('facebook', { failureRedirect: '/login' }, function(error, user, info) {
		if (error) {
			return res.redirect('/login')
		}

		if (user) {
			req.login(user, (err) => {
				if (err) {
					return res.redirect('/login')
				}
				else {
					const ip = getIp(req)
			
					userRepo.registerSuccessfulLogin({ user, ip })

					// Successful authentication, redirect to dashboard.	
					return res.redirect('/')
				} 
			})
		}
		else {
			return res.redirect('/login')
		}
	})(req, res, next)
})

export default FacebookController
