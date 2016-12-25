
exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('news-tag').insert({news_id: 1, tag_id: 1}),
		knex('news-tag').insert({news_id: 1, tag_id: 2}),
		knex('news-tag').insert({news_id: 1, tag_id: 3}),
		knex('news-tag').insert({news_id: 2, tag_id: 3}),
		knex('news-tag').insert({news_id: 3, tag_id: 4}),
	]);
};