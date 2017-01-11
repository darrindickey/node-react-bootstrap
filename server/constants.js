import path from 'path'

const publicPath = path.join(__dirname, '../', 'public');

const PATHS = {
	PUBLIC: publicPath,
	FAVICON: `${publicPath}/favicon.ico`,
	VIEWS: `${__dirname}/views`
}

const APP_KEY = 'eb24b28ddcb55be277dbbb9bec49b9f7'

const LOGIN_THROTTLING = {
	PREFIX: 'LOGIN_ATTEMPT',
	MAX_ATTEMPTS: 3,
	LOCK_TIME: 60 // in sec
}

const HTTP_STATUS = {
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	CONFLICT: 409,
	UNPROCESSABLE: 422,
	SERVER_ERROR: 500
}

export {
	PATHS,
	APP_KEY,
	LOGIN_THROTTLING,
	HTTP_STATUS
}