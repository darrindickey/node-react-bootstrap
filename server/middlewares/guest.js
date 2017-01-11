import { HTTP_STATUS } from 'server/constants'

export default function guestMiddleware(req, res, next) {
	if (req.isAuthenticated()) {
		res.status(HTTP_STATUS.FORBIDDEN).send({message: 'This action is forbidden since you have already signed in'})
	}

	else {
		next()	
	}
}