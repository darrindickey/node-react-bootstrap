
exports.seed = function(knex, Promise) {

	// Deletes ALL existing entries
	return Promise.join(
		knex('users').del(),
		knex('logins').del(),
		knex('todos').del(),
		knex('news').del(),
		knex('resources').del(),
		knex('tags').del(),
		knex('news-tag').del(),
		knex('comments').del()
	);
};
