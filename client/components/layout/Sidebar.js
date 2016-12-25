import React from 'react';
import { Link } from 'react-router'

export default class Sidebar extends React.Component {
	
	render() {
		return (
			<div class="bb-sidebar-content">
				<ul>
					<li><Link to="/news">News</Link></li>
					<li><Link to="/todos">Todos</Link></li>
				</ul>
			</div>
		);
	}
}