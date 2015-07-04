import React from 'react';
import UserListItem from './userListItem';
import {getAvailableCleanersList} from '../../config/api';

export default class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cleaners: []
        };
    }

    componentDidMount() {
        getAvailableCleanersList()
	        .then(data => {
	            this.setState({
	                cleaners: data
	            });
	        })
	        .catch (err => console.error(err));
    }

    render() {
    	let list = this.state.cleaners.map(
    		user => <li key={user.id}><UserListItem name={user.name} /></li>
    	);
        return (
        	<ul> { list } </ul>
		);
	}
}