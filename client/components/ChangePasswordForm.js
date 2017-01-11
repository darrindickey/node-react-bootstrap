import React from 'react'
import { change } from 'client/actions/passwordActions'

export default class ChangePassword extends React.Component {

	constructor() {
		super()
		this.submitHandler = this.submitHandler.bind(this)
	}
	
	submitHandler(e) {
		e.preventDefault()

		const currentPassword = this.currentPasswordInput.value
		const newPassword = this.newPasswordInput.value

		if (currentPassword && newPassword) {
			change({currentPassword, newPassword})

			this.currentPasswordInput.value = ''
			this.newPasswordInput.value = ''
		}
	}

	render() {
		return (
			<div class="bb-form-container bb-change-password">
				<form onSubmit={this.submitHandler} class="bb-form">
					<input 
						class="bb-input bb-input--password" 
						placeholder="current password"
						type="password"
						ref={(input) => this.currentPasswordInput = input} />

					<input 
						class="bb-input bb-input--password" 
						placeholder="new password"
						type="password"
						ref={(input) => this.newPasswordInput = input} />

					<button type="submit" class="bb-button bb-button--green bb-button--submit">Save</button>
				</form>
			</div>
		)
	}
}
