import React from 'react';
import UserListItem from './userListItem';
export default class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cleaners: []
        };
    }

    componentDidMount() {
        fetch('/mock/availableCleaners.json')
	        .then(res => res.json())
	        .then(data => {
	            this.setState({
	                cleaners: data
	            });
	        })
	        .catch (err => console.error(err));
    }

    render() {
    	let list = this.state.cleaners.map(
    		user => <li><UserListItem name={user.name} /></li>
    	);
        return (
        	<ul> { list } </ul>
		);
	}
}