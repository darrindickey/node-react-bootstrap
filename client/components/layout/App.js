import React from 'react';

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default class App extends React.Component {
	
	render() {
		return (
			<div class="bb-page">
				<div class="bb-sidebar">
					<Sidebar />
				</div>

				<div class="bb-main">
					<div class="bb-navbar">
						<Navbar router={ this.props.router } />
					</div>

					<div class="bb-content">
						{ this.props.children }
					</div>

					<footer class="bb-footer">
						<Footer />
					</footer>
				</div>
			</div>
		);
	}
}