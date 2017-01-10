import React from 'react';
import { logout } from '../../actions/sessionActions'

export default class Navbar extends React.Component {
	
	navigate(path) {
		this.props.router.push(path)
	}

	render() {
		return (
			<div class="bb-navbar-content">
				<div class="bb-navbar__logo" onClick={ () => this.navigate('/') }>
					<h1>Node <span class="bb-navbar__logo-react">React</span></h1>
				</div>

				<div class="bb-navbar__actions">
					<div>
						<button class="bb-button bb-button--red" onClick={ logout }>Logout</button>	
					</div>
					
					<div>
						<button class="bb-button bb-button--green" onClick={ () => this.navigate('/login') }>Login</button>
					</div>

					<div>
						<button class="bb-button bb-button--green" onClick={ () => this.navigate('/signup') }>Signup</button>
					</div>	
				</div>
			</div>
		);
	}
}