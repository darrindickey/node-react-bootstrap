require('./main.scss') // Load all style, will be extracted by webpack

import React from 'react'
import ReactDOM from 'react-dom'

import { Router, browserHistory } from 'react-router'
import routeTable from './routeTable'

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ browserHistory } routes={ routeTable } />
	</Provider>
, document.getElementById('root'));