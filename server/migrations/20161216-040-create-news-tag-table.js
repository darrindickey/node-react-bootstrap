
exports.up = function(knex, Promise) {
	return knex.schema.createTable('news-tag', function (table) {
		table.integer('news_id').unsigned().notNull()
		table.foreign('news_id').references('news.id').onDelete('CASCADE')

		table.integer('tag_id').unsigned().notNull()
		table.foreign('tag_id').references('tags.id').onDelete('CASCADE')
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('news-tag')
}
