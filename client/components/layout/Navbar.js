import React from 'react';

export default class Navbar extends React.Component {
	
	navigate(path) {
		this.props.router.push(path)
	}

	render() {
		return (
			<div class="bb-navbar-content">
				<div class="bb-navbar__logo" onClick={ () => this.navigate('/') }>
					<span class="bb-navbar__logo-text bb-navbar__logo-text--main">Node</span>
					<span class="bb-navbar__logo-text">Test</span>
				</div>

				<div class="bb-navbar__actions">
					<button class="bb-navbar__actions-button bb-button bb-button--green" onClick={ () => this.navigate('/login') }>
						Login
					</button>
					<button class="bb-navbar__actions-button bb-button bb-button--green" onClick={ () => this.navigate('/signup') }>
						Signup
					</button>
				</div>
			</div>
		);
	}
}