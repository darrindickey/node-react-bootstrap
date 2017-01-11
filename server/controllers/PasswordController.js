import express from 'express'
import userRepo from 'server/repositories/UserRepository'

import authMiddleware from 'server/middlewares/auth'
import guestMiddleware from 'server/middlewares/guest'

import { HTTP_STATUS } from 'server/constants'

import forgotPasswordValidator from 'common/validators/forgotPasswordValidator'
import resetPasswordValidator from 'common/validators/resetPasswordValidator'
import changePasswordValidator from 'common/validators/changePasswordValidator'

const PasswordController = express.Router()

.post('/forgot', guestMiddleware, (req, res, next) => {
	const { email } = req.body
	const validation = forgotPasswordValidator({ email })

	if (validation.fails()) {
		return res.status(HTTP_STATUS.UNPROCESSABLE).send(validation.errors)
	}

	userRepo.forgotPassword({ email }).then(() => {
		res.send({message: 'Email with instruction has been sent'})
	}, next)
})

.put('/reset', guestMiddleware, (req, res, next) => {
	const { password, token } = req.body
	const validation = resetPasswordValidator({ password })

	if (validation.fails()) {
		return res.status(HTTP_STATUS.UNPROCESSABLE).send(validation.errors)
	}

	userRepo.resetPassword({ password, token }).then(() => {
		res.send({message: 'Your password has been updated'})
	}, next)
})

.put('/change', authMiddleware, (req, res, next) => {
	const { currentPassword, newPassword } = req.body
	const validation = changePasswordValidator({ currentPassword, newPassword })

	if (validation.fails()) {
		return res.status(HTTP_STATUS.UNPROCESSABLE).send(validation.errors)
	}

	userRepo.changePassword({ currentPassword, newPassword }).then(() => {
		res.send({message: 'Your password has been updated'})
	}, next)
})

export default PasswordController