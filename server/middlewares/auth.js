import { HTTP_STATUS } from 'server/constants'

export default function authMiddleware(req, res, next) {
	if (! req.isAuthenticated()) {
		res.status(HTTP_STATUS.FORBIDDEN).send({message: 'This action is forbidden since you are not signed in'})
	}

	else {
		next()
	}
}