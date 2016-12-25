import React from 'react';
import { Link } from 'react-router'

export default class Footer extends React.Component {

	render() {
		return (
			<div>
				<ul>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/terms">Terms</Link></li>
				</ul>
			</div>
		);
	}
}