
exports.up = function(knex, Promise) {
	return knex.schema.createTable('logins', function (table) {
		table.increments()
		
		table.integer('user_id').unsigned().notNull()
		table.foreign('user_id').references('users.id').onDelete('CASCADE')

		table.string('ip', 200).notNull()
		
		table.timestamp('created_at').defaultTo(knex.fn.now())
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('logins')
};