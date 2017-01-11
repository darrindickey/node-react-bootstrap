import passport from 'passport'
import { facebook } from 'server/env'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as FacebookStrategy } from 'passport-facebook'
import userRepo from 'server/repositories/UserRepository'


passport.use(new LocalStrategy({ 
	usernameField: 'email' 
}, authenticate))

passport.use(new FacebookStrategy({
    clientID: facebook.FACEBOOK_APP_ID,
    clientSecret: facebook.FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    profileFields: ['id', 'emails', 'name']

}, facebookAuthenticate))


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

function facebookAuthenticate(accessToken, refreshToken, profile, done) {
	const { id, email, first_name, last_name } = profile._json

	userRepo.facebookLogin({ id, email, first_name, last_name }).then((user) => {
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