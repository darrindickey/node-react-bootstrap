
exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', function (table) {
		table.increments()
		
		table.string('email', 200).unique().notNull()
		table.string('first_name', 100)
		table.string('last_name', 100)
		table.string('password', 100)
		
		table.boolean('is_admin').default(false)
		table.boolean('is_active').default(true)
		
		table.timestamps()
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('users')
};