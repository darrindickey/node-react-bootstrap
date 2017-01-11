import React from 'react';
import { Link } from 'react-router'

export default class Sidebar extends React.Component {
	
	render() {
		return (
			<div class="bb-sidebar-content">
				<ul class="bb-sidebar-list">
					<li>
						<Link to="/news" 
							class="bb-sidebar-list__link" 
							activeClassName="bb-sidebar-list__link--active">News</Link>
					</li>
					<li>
						<Link to="/todos" 
							class="bb-sidebar-list__link" 
							activeClassName="bb-sidebar-list__link--active">Todos</Link>
					</li>
				</ul>

				<ul class="bb-sidebar-list">
					<li>
						<Link to="/change" 
							class="bb-sidebar-list__link" 
							activeClassName="bb-sidebar-list__link--active">Change password</Link>
					</li>
					<li>
						<Link to="/reset" 
							class="bb-sidebar-list__link" 
							activeClassName="bb-sidebar-list__link--active">Reset password</Link>
					</li>
				</ul>

				<ul class="bb-sidebar-list">
					<li>
						<Link to="/chatt" 
							class="bb-sidebar-list__link" 
							activeClassName="bb-sidebar-list__link--active">Chatt</Link>
					</li>
				</ul>
			</div>
		);
	}
}