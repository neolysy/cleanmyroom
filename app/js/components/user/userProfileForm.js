import React from 'react';
import {getUserProfile} from '../../config/api';

export default class UserProfileForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: '',
                available: '',
                about: ''
            }
        };
    }

    componentDidMount() {
        getUserProfile(1)
	        .then(data => {
	            this.setState({
	                fields: data[0]
	            });
	        })
	        .catch (err => console.error(err));
    }

    render() {
        let fields = this.state.fields;

        return (
        	<div>
                <h3>Edit Profile</h3>
                <label><input type="text" ref="name" value={fields.name} onChange={this.changeNameHandler.bind(this)} /> Name</label><br />
                <label><input type="checkbox" ref="available" checked={fields.available} onChange={this.changeAvailableHandler.bind(this)} /> Available</label><br />
                <label><textarea ref="about" value={fields.about} onChange={this.changeAboutHandler.bind(this)}></textarea> About</label><br /><br />
                <button onClick={this.save.bind(this)}>Save</button>
            </div>
		);
	}

    changeNameHandler(event) {
        this.setState({fields: Object.assign(this.state.fields, {name: event.currentTarget.value})});
    }

    changeAvailableHandler(event) {
        this.setState({fields: Object.assign(this.state.fields, {available: event.currentTarget.checked})});
    }

    changeAboutHandler(event) {
        this.setState({fields: Object.assign(this.state.fields, {about: event.currentTarget.value})});
    }

    save() {
        let fields = {
            'name': this.refs.name.value,
            'available': this.refs.available.checked,
            'about': this.refs.about.value
        }
        //Object.assign({}, this.state.fields, this.refs);
        console.log(fields);
    }
}