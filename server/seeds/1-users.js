const bcrypt = require('bcrypt-nodejs')

const password = bcrypt.hashSync('123123')

exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('users').insert({id: 1, email: 'user1@gamil.com', 'is_admin': 1, password}),
		knex('users').insert({id: 2, email: 'user2@gamil.com', password}),
		knex('users').insert({id: 3, email: 'user3@gamil.com', password})
	]);
};
