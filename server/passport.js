import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import userRepo from './repositories/UserRepository'

passport.use(new LocalStrategy({ usernameField: 'email' }, authenticate))

function authenticate(email, password, done) {
	userRepo.login({email, password}).then((user) => {
		if (user) {
			done(null, user)
		}
		else {
			done(null, false, {message: 'Invalid credentials'})	
		}
	}, done)
}

passport.serializeUser((user, done) => {
	done(null, user.get('id'))
})

passport.deserializeUser((id, done) => {
	userRepo.getById(id).then((user) => {
		done(null, user)
	}, done)
})

export default passport