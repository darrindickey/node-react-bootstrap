import { HTTP_STATUS } from 'server/constants'

export default function adminMiddleware(req, res, next) {
	if (! req.isAuthenticated()) {
		res.status(HTTP_STATUS.FORBIDDEN).send({message: 'This action is forbidden since you are not signed in'})
	}

	else if (! reg.user.get('is_admin')) {
		res.status(HTTP_STATUS.FORBIDDEN).send({message: 'Not authorized'})
	}

	else {
		next()	
	}	
}