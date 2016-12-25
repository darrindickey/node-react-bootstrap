import path from 'path'

const publicPath = path.join(__dirname, '../', 'public');

const PATHS = {
	PUBLIC: publicPath,
	FAVICON: `${publicPath}/favicon.ico`,
	VIEWS: `${__dirname}/views`
}

export {
	PATHS,
}