module.exports = {
	development: {
		client: 'mysql',
		connection: {
			host: '127.0.0.1',
			user: 'root',
			database: 'node'
		}
	},
	production: {
		client: 'mysql',
		connection: {
			host: 'some_ip',
			user: 'some_user',
			database: 'node'
		}
	},
}