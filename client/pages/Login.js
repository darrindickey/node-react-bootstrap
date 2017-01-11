import React from 'react'
import LoginForm from 'client/components/LoginForm'

export default class Login extends React.Component {

	render() {
		return (
			<div class="bb-page bb-page-login">
				<h1 class="bb-h1">Login</h1>
				<LoginForm />
			</div>
		)
	}
}