
exports.up = function(knex, Promise) {
	return knex.schema.createTable('comments', function (table) {
		table.increments()

		table.integer('user_id').unsigned()
		table.foreign('user_id').references('users.id').onDelete('SET NULL')

		table.integer('news_id').unsigned().notNull()
		table.foreign('news_id').references('news.id').onDelete('CASCADE')

		table.string('text').notNull()

		table.timestamp('created_at').defaultTo(knex.fn.now())
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('comments')
}
