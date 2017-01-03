import express from 'express'
import userRepo from '../repositories/UserRepository'
import { dd } from '../logger'

const SessionController = express.Router()

// Login
.post('/', (req, res, next) => {
	
	userRepo.login().then(() => {

	}, next)
})

// Logout
.delete('/', (req, res, next) => {

	userRepo.logout().then(() => {
		
	}, next)
})

export default SessionController