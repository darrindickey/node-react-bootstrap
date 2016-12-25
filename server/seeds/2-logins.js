
exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('logins').insert({id: 1, user_id: 1, ip: '134.53.543.1'}),
		knex('logins').insert({id: 2, user_id: 1, ip: '134.53.543.1'}),
		knex('logins').insert({id: 3, user_id: 2, ip: '134.53.543.1'}),
		knex('logins').insert({id: 4, user_id: 2, ip: '134.53.764.2'}),
		knex('logins').insert({id: 5, user_id: 3, ip: '134.53.123.6'})
	]);
};
