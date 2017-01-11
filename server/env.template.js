const mysql = {
	client: 'mysql',
	connection: {
		host: 'your-host',
		user: 'your-user',
		database: 'your-database'
	}
}

const mail = {
	driver: 'your-driver', 
	host: 'your-host',
	port: 'your-port',
	username: 'your-username',
	password: 'your-password',
	encryption: 'your-encryption',
}

const redis = {
	host: '127.0.0.1',
	port: 6379
}

const facebook = {
	FACEBOOK_APP_ID: '',
	FACEBOOK_APP_SECRET: '',
	FACEBOOK_APP_REDIRECT: ''
}

export {
	mysql,
	mail,
	redis
}