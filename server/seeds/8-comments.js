
exports.seed = function(knex, Promise) {
	const today = new Date()
	
	const yesterday = new Date(today.getTime()) 
	yesterday.setDate(yesterday.getDate() - 1);

	const earlier = new Date(today.getTime()) 
	earlier.setDate(earlier.getDate() - 2);

	return Promise.all([
		knex('comments').insert({id: 1, user_id: 2, news_id: 1, text: 'comment 1', created_at: earlier}),
		knex('comments').insert({id: 2, user_id: 3, news_id: 1, text: 'comment 2', created_at: yesterday}),
		knex('comments').insert({id: 3, user_id: 2, news_id: 1, text: 'comment 3', created_at: today}),
		knex('comments').insert({id: 4, user_id: 2, news_id: 2, text: 'comment 1', created_at: yesterday}),
		knex('comments').insert({id: 5, user_id: 3, news_id: 3, text: 'comment 2', created_at: today}),
		
	]);
};