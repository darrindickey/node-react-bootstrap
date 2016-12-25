
exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('tags').insert({id: 1, text: 'Sign', is_active: 1}),
		knex('tags').insert({id: 2, text: 'Road', is_active: 1}),
		knex('tags').insert({id: 3, text: 'City', is_active: 1}),
		knex('tags').insert({id: 4, text: 'Iran', is_active: 1}),
		knex('tags').insert({id: 5, text: 'INACTIVE tag', is_active: 0}),
	]);
};
