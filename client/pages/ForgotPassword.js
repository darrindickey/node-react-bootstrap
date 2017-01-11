import React from 'react'
import ForgotPasswordForm from 'client/components/ForgotPasswordForm'

export default class ForgotPassword extends React.Component {

	render() {
		return (
			<div class="bb-page bb-page-forgot-password">
				<h1 class="bb-h1">Forgot password</h1>
				<ForgotPasswordForm />
			</div>
		)
	}
}
