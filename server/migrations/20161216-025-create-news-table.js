
exports.up = function(knex, Promise) {
	return knex.schema.createTable('news', function (table) {
		table.increments()

		table.integer('user_id').unsigned()
		table.foreign('user_id').references('users.id').onDelete('SET NULL')

		table.string('title').notNull()
		table.string('teaser').notNull()
		table.text('body').notNull()

		table.boolean('is_active').default(false)

		table.timestamp('publish_at')

		table.timestamps()
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('news')
}
