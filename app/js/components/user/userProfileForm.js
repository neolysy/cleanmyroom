import React from 'react';
import {getUserProfile} from '../../config/api';

export default class UserProfileForm extends React.Component {

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
                <h3>Edit Profile</h3>
                <label><input type="text" name="name" /> Name</label><br />
                <label><input type="checkbox" name="available" /> Available</label><br />
                <label><textarea name="about"></textarea> About</label><br /><br />
                <button>Save</button>
            </div>
		);
	}
}