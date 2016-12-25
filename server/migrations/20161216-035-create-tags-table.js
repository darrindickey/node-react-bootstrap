
exports.up = function(knex, Promise) {
	return knex.schema.createTable('tags', function (table) {
		table.increments()

		table.string('text', 200).notNull()
		
		table.boolean('is_active').default(true)

		table.timestamps()
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('tags')
}
