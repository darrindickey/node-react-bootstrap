import express from 'express'
import userRepo from '../repositories/UserRepository'
import { dd } from '../logger'

const PasswordController = express.Router()

.post('/forgot', (req, res, next) => {
	
	userRepo.forgotPassword().then(() => {

	}, next)
})

.put('/reset', (req, res, next) => {
	
	userRepo.resetPassword().then(() => {

	}, next)
})

.put('/change', (req, res, next) => {
	
	userRepo.changePassword().then(() => {

	}, next)
})

export default PasswordController