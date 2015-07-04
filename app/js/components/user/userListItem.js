import React from 'react';
import {Link} from 'react-router';

export default class UserListItem extends React.Component {
	render() {
		return (
			<div>
				<Link to={`/profile/${this.props.user.id}`}>{this.props.user.name}</Link>
			</div>
		);
	}
}