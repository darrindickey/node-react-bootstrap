
exports.up = function(knex, Promise) {
	return knex.schema.createTable('password_resets', function (table) {
		table.string('email', 255).unique().notNull()
		table.string('token', 255).notNull()
		table.timestamp('created_at').defaultTo(knex.fn.now())
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('password_resets')
};
