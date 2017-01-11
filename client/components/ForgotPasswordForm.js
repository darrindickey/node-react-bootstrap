import React from 'react'
import { forgot } from 'client/actions/passwordActions'

export default class ForgotPassword extends React.Component {

	constructor() {
		super()
		this.submitHandler = this.submitHandler.bind(this)
	}
	
	submitHandler(e) {
		e.preventDefault()

		const email = this.emailInput.value

		if (email) {
			forgot({email})

			this.emailInput.value = ''
		}
	}

	render() {
		return (
			<div class="bb-form-container bb-forgot-password">
				<form onSubmit={this.submitHandler} class="bb-form">
					<input 
						class="bb-input bb-input--text" 
						placeholder="email"
						ref={(input) => this.emailInput = input} />

					<button type="submit" class="bb-button bb-button--green bb-button--submit">Send</button>
				</form>
			</div>
		)
	}
}
