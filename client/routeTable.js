import App from './components/layout/App'

import Dashboard from './components/dashboard'
import About from './components/about'
import Terms from './components/terms'

import NewsList from './components/newsList'
import News from './components/newsList'
import TodoPage from './components/todoPage'

import Login from './components/login'
import Signup from './components/signup'

export default {
	path: '/',
	component: App,
	indexRoute: { 
		component: Dashboard 
	},
	childRoutes: [
		{ 
			path: 'about', 
			component: About 
		},
		{ 
			path: 'terms', 
			component: Terms 
		},
		{ 
			path: 'login', 
			component: Login 
		},
		{ 
			path: 'signup', 
			component: Signup 
		},
		{ 
			path: 'change', 
			component: About 
		},
		{ 
			path: 'forgot', 
			component: About 
		},
		{ 
			path: 'reset', 
			component: About 
		},
		{ 
			path: 'chatt', 
			component: About 
		},
		{ 
			path: 'news', 
			component: NewsList, 
			childRoutes: [
				{ 
					path: 'news/:id', 
					component: News
				}
			]
		},
		{ 
			path: 'todos', 
			component: TodoPage
		},
	]
}
