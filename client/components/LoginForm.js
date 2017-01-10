import React from 'react'
import { login } from '../actions/sessionActions'

export default class Login extends React.Component {

	constructor() {
		super()
		this.handleLogin = this.handleLogin.bind(this)
	}
	
	handleLogin(e) {
		e.preventDefault()

		const email = this.emailInput.value
		const password = this.passwordInput.value

		if (email && password) {
			login({email, password})

			this.passwordInput.value = ''
		}
	}

	render() {
		return (
			<div class="bb-form-container bb-login">
				<form onSubmit={this.handleLogin} class="bb-form">
					<input 
						class="bb-input bb-input--text" 
						placeholder="email"
						ref={(input) => this.emailInput = input} />

					<input 
						class="bb-input bb-input--password" 
						placeholder="password"
						type="password"
						ref={(input) => this.passwordInput = input} />

					<button type="submit" class="bb-button bb-button--green bb-button--submit">Sign in</button>
				</form>
			</div>
		)
	}
}
