
exports.seed = function(knex, Promise) {

	const now = new Date()

	const teaser1 = 'Nunc finibus lectus non nisi ullamcorper lobortis. Duis magna mi, fringilla vitae interdum eget, efficitur eget lacus. Vestibulum a tincidunt tortor.'
	const body1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id neque massa. Donec quis lorem purus. Aenean dapibus leo quis enim porta, sed dictum nunc rutrum. Nam lobortis dolor sed consectetur scelerisque. Praesent in suscipit ipsum. Vivamus ornare nulla quis ante viverra, vel malesuada mauris fringilla. Fusce mi ante, vehicula eu euismod et, imperdiet nec ante. Nunc quis condimentum urna. Ut placerat eu ante ut condimentum. Nunc finibus lectus non nisi ullamcorper lobortis. Duis magna mi, fringilla vitae interdum eget, efficitur eget lacus. Vestibulum a tincidunt tortor.'

	const teaser2 = 'Maecenas vestibulum cursus mi. Ut aliquam fermentum risus, vel tincidunt libero vulputate tristique.'
	const body2 = 'Duis eu ipsum libero. Mauris ut porttitor sem, non lacinia lectus. Nunc ornare tempus felis, sed tempus ipsum. Nunc sollicitudin lectus quis nisi ullamcorper dapibus. Cras ultrices eros ut purus pellentesque, ac ullamcorper lectus mattis. Sed ullamcorper sollicitudin nisi facilisis finibus. Curabitur sed sem nunc. Praesent nec sagittis urna. Aenean eros nibh, ornare ut pulvinar a, semper a ex. Vestibulum varius condimentum elit sit amet condimentum. Donec imperdiet libero quam, mollis commodo libero vulputate sed. Quisque venenatis, felis vitae venenatis auctor, massa diam condimentum nunc, eu mollis tellus mauris mollis mi. Maecenas vestibulum cursus mi. Ut aliquam fermentum risus, vel tincidunt libero vulputate tristique.'

	const teaser3 = 'Mauris dapibus risus volutpat tincidunt dignissim. Curabitur ligula nisi, eleifend non ligula sed, tristique consequat sem.'
	const body3 = 'Pellentesque scelerisque, nunc at facilisis scelerisque, orci justo vestibulum odio, in ultricies tellus lacus non augue. Sed purus risus, ullamcorper ac arcu et, ultricies ultricies odio. Aliquam eget sem quis orci pharetra ultrices. Integer lacinia ante quis ultrices sollicitudin. Praesent nec lorem tristique, rhoncus risus eget, elementum justo. Proin auctor enim ut iaculis vestibulum. Vestibulum non rutrum turpis, ac fermentum enim. Donec nec risus varius, consectetur libero in, gravida risus. Mauris dapibus risus volutpat tincidunt dignissim. Curabitur ligula nisi, eleifend non ligula sed, tristique consequat sem.'

	const teaser4 = 'Phasellus pellentesque pharetra tortor, sit amet commodo massa euismod at. Aliquam sit amet vulputate erat.'
	const body4 = 'Nam ullamcorper, nibh a gravida porta, felis lorem aliquet ex, finibus volutpat nibh lectus non sapien. Mauris ultricies eget lacus in ullamcorper. Pellentesque iaculis quam eu diam sagittis, vel faucibus arcu aliquet. Nullam pharetra ante eget magna venenatis, sed dignissim velit facilisis. Ut ut felis auctor, ullamcorper nibh in, aliquet elit. Phasellus pellentesque pharetra tortor, sit amet commodo massa euismod at. Aliquam sit amet vulputate erat.'

	return Promise.all([
		knex('news').insert({
			id: 1, 
			user_id: 1, 
			title: 'title 1', 
			teaser: teaser1, 
			body: body1, 
			is_active: 1, 
			publish_at: now, updated_at: now, created_at: now
		}),
		knex('news').insert({
			id: 2, 
			user_id: 1, 
			title: 'title 2', 
			teaser: teaser2, 
			body: body2, 
			is_active: 1, 
			publish_at: now, updated_at: now, created_at: now
		}),
		knex('news').insert({
			id: 3, 
			user_id: 1, 
			title: 'title 3', 
			teaser: teaser3, 
			body: body3, 
			is_active: 0, 
			publish_at: now, updated_at: now, created_at: now
		}),
		knex('news').insert({
			id: 4, 
			user_id: 1, 
			title: 'title 4', 
			teaser: teaser4, 
			body: body4, 
			is_active: 1,
			publish_at: now, updated_at: now, created_at: now
		})
	]);
};