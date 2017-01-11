import React from 'react'
import ChangePasswordForm from 'client/components/ChangePasswordForm'

export default class ChangePassword extends React.Component {

	render() {
		return (
			<div class="bb-page bb-page-change-password">
				<h1 class="bb-h1">Change password</h1>
				<ChangePasswordForm />
			</div>
		)
	}
}