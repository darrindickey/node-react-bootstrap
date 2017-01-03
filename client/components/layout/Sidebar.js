import React from 'react';
import { Link } from 'react-router'

export default class Sidebar extends React.Component {
	
	render() {
		return (
			<div class="bb-sidebar-content">
				<ul class="bb-sidebar-list">
					<li><Link to="/news">News</Link></li>
					<li><Link to="/todos">Todos</Link></li>
				</ul>

				<ul class="bb-sidebar-list">
					<li><Link to="/change">Change password</Link></li>
					<li><Link to="/forgot">Forgot password</Link></li>
					<li><Link to="/reset">Reset password</Link></li>
				</ul>

				<ul class="bb-sidebar-list">
					<li><Link to="/chatt">Chatt</Link></li>
				</ul>
			</div>
		);
	}
}