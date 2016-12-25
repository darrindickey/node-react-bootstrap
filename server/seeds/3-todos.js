
exports.seed = function(knex, Promise) {
	const today = new Date()
	
	const yesterday = new Date(today.getTime()) 
	yesterday.setDate(yesterday.getDate() - 1);

	const earlier = new Date(today.getTime()) 
	earlier.setDate(earlier.getDate() - 2);

	return Promise.all([
		knex('todos').insert({id: 1, user_id: 1, text: 'Hit the gym 1', is_completed: 0, updated_at: today}),
		knex('todos').insert({id: 2, user_id: 1, text: 'Pay bills 2', is_completed: 0, updated_at: yesterday}),
		knex('todos').insert({id: 3, user_id: 1, text: 'Meet George 3', is_completed: 0, updated_at: today}),
		knex('todos').insert({id: 4, user_id: 1, text: 'Buy eggs 4', is_completed: 1, updated_at: yesterday}),
		knex('todos').insert({id: 5, user_id: 1, text: 'Read a book 5', is_completed: 0, updated_at: today}),
		knex('todos').insert({id: 6, user_id: 1, text: 'Organize office 6', is_completed: 0, updated_at: today}),
		knex('todos').insert({id: 7, user_id: 1, text: 'todo 7', is_completed: 0, updated_at: yesterday}),
		knex('todos').insert({id: 8, user_id: 2, text: 'todo 8', is_completed: 0, updated_at: today}),
		knex('todos').insert({id: 9, user_id: 2, text: 'todo 9', is_completed: 0, updated_at: earlier}),
		knex('todos').insert({id: 10, user_id: 3, text: 'todo 10', is_completed: 0, updated_at: today}),
		knex('todos').insert({id: 11, user_id: 3, text: 'todo 11', is_completed: 0, updated_at: earlier}),
		knex('todos').insert({id: 12, user_id: 3, text: 'todo 12', is_completed: 1, updated_at: today}),
	]);
};
