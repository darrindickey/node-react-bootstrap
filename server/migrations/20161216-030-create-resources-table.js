
exports.up = function(knex, Promise) {
	return knex.schema.createTable('resources', function (table) {
		table.increments()

		table.integer('news_id').unsigned().notNull()
		table.foreign('news_id').references('news.id').onDelete('CASCADE')

		table.string('url').notNull()
		table.string('alt').notNull()

		table.timestamp('created_at').defaultTo(knex.fn.now())
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('resources')
}
