
exports.up = function(knex, Promise) {
	return knex.schema.createTable('todos', function (table) {
		table.increments()

		table.integer('user_id').unsigned().notNull()
		table.foreign('user_id').references('users.id').onDelete('CASCADE')

		table.string('text', 200).notNull()
		table.boolean('is_completed').default(false)

		table.timestamps()
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('todos')
}
