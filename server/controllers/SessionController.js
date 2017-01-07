import express from 'express'
import userRepo from '../repositories/UserRepository'
import { dd } from '../logger'

const SessionController = express.Router()

// Login
.post('/', (req, res, next) => {
	
	userRepo.login().then(() => {
		console.log('login success')
		res.send({message: 'login success'})
	}, next)
})

// Logout
.delete('/', (req, res, next) => {

	userRepo.logout().then(() => {
		console.log('logout success')
		res.send({message: 'logout success'})
	}, next)
})

// Signup
.post('/signup', (req, res, next) => {

	userRepo.signup().then((user) => {
		console.log('signup success')
		res.send({message: 'signup success'})
	}, next)
})

export default SessionController