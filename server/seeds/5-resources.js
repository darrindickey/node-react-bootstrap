
exports.seed = function(knex, Promise) {
	return Promise.all([
		knex('resources').insert({id: 1, news_id: 1, url: 'img/news/aoisdfao32nds.jpg', alt: 'Road Sign'}),
		knex('resources').insert({id: 2, news_id: 2, url: 'img/news/afsdagr34234d.jpg', alt: 'City of Iran'})
	]);
};