import React from 'react';
import {getUserProfile} from '../../config/api';

export default class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        };
    }

    componentDidMount() {
        getUserProfile()
	        .then(data => {
	            this.setState({
	                profile: data
	            });
	        })
	        .catch (err => console.error(err));
    }

    render() {
        let profile = this.state.profile;

        return (
        	<div>
                <h3>Profile</h3>
                {profile.name}, {profile.phone}
            </div>
		);
	}
}