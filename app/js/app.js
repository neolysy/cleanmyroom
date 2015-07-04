import React from 'react';

import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import HomeRoute from './routes/home';
import ProfileRoute from './routes/profile';
import ProfileEditRoute from './routes/profileEdit';

class App extends React.Component {
	render() {
		return (<RouteHandler />);
	}
}



React.render(<Router history={history}>
    <Route path="/" component={HomeRoute}/>
    <Route path="/profile/:profileId" component={ProfileRoute}/>
    <Route path="/profile/:profileId/edit" component={ProfileEditRoute}/>
  </Router>, document.getElementById('appContainer'));