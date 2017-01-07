import React from 'react'
import { reset } from '../actions/passwordActions'

export default class ResetPassword extends React.Component {

	constructor() {
		super()
		this.submitHandler = this.submitHandler.bind(this)
	}
	
	submitHandler(e) {
		e.preventDefault()

		const password = this.passwordInput.value

		if (password) {
			const token = '123456asd' // TODO(homan) 
			reset({password, token})

			this.passwordInput.value = ''
		}
	}

	render() {
		return (
			<div class="bb-form-container bb-reset-password">
				<form onSubmit={this.submitHandler} class="bb-form">
					<input 
						class="bb-input bb-input--password" 
						placeholder="new password"
						type="password"
						ref={(input) => this.passwordInput = input} />

					<button type="submit" class="bb-button bb-button--green">Save</button>
				</form>
			</div>
		)
	}
}
