import React from 'react'
import ResetPasswordForm from '../components/ResetPasswordForm'

export default class ResetPassword extends React.Component {

	render() {
		return (
			<div class="bb-page bb-page-reset-password">
				<h1 class="bb-h1">Reset Password</h1>
				<ResetPasswordForm />
			</div>
		)
	}
}
