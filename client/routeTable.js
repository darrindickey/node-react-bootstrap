import App from 'client/components/layout/App'

import About from 'client/pages/About'
import ChangePassword from 'client/pages/ChangePassword'
import Chatt from 'client/pages/Chatt'
import Dashboard from 'client/pages/Dashboard'
import ForgotPassword from 'client/pages/ForgotPassword'
import Login from 'client/pages/Login'
import News from 'client/pages/News'
import NewsList from 'client/pages/NewsList'
import ResetPassword from 'client/pages/ResetPassword'
import Signup from 'client/pages/Signup'
import Terms from 'client/pages/Terms'
import TodoList from 'client/pages/TodoList'

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
