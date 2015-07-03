import React from 'react';
import UserList from './components/home/main';

class App extends React.Component {
	render() {
		return (<UserList />);
	}
}

React.render(<App />, document.getElementById('appContainer'));