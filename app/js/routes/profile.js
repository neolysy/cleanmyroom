import React from 'react';
import UserProfile from '../components/user/userProfile';
import {getProfile} from '../config/api';

export default class ProfileRoute extends React.Component {
	render() {
		return ( <UserProfile profileId={this.props.routeParams.profileId} /> );
	}
}