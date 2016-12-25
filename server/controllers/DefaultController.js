
function DefaultController(req, res, next) {
	if (req.url.includes('api/')) {
		return res.status(404).send({message: 'Route not found.'})
	}
	
	/*
	const title = 'My App'
	const tweets = ['tweet-1', 'tweet-2', 'tweet-3', 'tweet-4', 'tweet-5', 'tweet-6']
	const showTweets = true

	
	return res.render('index', {
		title, 
		tweets, 
		showTweets,
		partials: {
			header: 'header', 
			tweets: 'tweets'
		}
	})
	*/

	// TODO(homan) add csrf and user (if logedin)

	return res.render('index', {
		title: 'node-react'
	})
}

export default DefaultController