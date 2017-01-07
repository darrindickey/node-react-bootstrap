import App from './components/layout/App'

import About from './pages/About'
import ChangePassword from './pages/ChangePassword'
import Chatt from './pages/Chatt'
import Dashboard from './pages/Dashboard'
import ForgotPassword from './pages/ForgotPassword'
import Login from './pages/Login'
import News from './pages/News'
import NewsList from './pages/NewsList'
import ResetPassword from './pages/ResetPassword'
import Signup from './pages/Signup'
import Terms from './pages/Terms'
import TodoList from './pages/TodoList'

export default {
	path: '/',
	component: App,
	indexRoute: { 
		component: Dashboard 
	},
	childRoutes: [
		{ path: 'about', component: About },
		{ path: 'change', component: ChangePassword },
		{ path: 'chatt', component: Chatt },
		{ path: 'forgot', component: ForgotPassword },
		{ path: 'login', component: Login },
		{ path: 'news', component: NewsList, 
			childRoutes: [
				{ path: 'news/:id', component: News }
			]
		},
		{ path: 'reset', component: ResetPassword },
		{ path: 'signup', component: Signup },
		{ path: 'terms', component: Terms },
		{ path: 'todos', component: TodoList }
	]
}
