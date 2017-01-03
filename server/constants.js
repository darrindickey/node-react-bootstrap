import path from 'path'

const publicPath = path.join(__dirname, '../', 'public');

const PATHS = {
	PUBLIC: publicPath,
	FAVICON: `${publicPath}/favicon.ico`,
	VIEWS: `${__dirname}/views`
}

const APP_KEY = 'eb24b28ddcb55be277dbbb9bec49b9f7'

export {
	PATHS,
	APP_KEY
}