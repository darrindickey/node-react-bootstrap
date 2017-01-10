import React from 'react'
import SignupForm from '../components/SignupForm'

export default class Signup extends React.Component {

	render() {
		return (
			<div class="bb-page bb-page-signup">
				<h1 class="bb-h1">Signup</h1>
				<SignupForm />
			</div>
		)
	}
}
