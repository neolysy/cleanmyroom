import React from 'react';

import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import HomeRoute from './routes/home';
import ProfileRoute from './routes/profile';

class App extends React.Component {
	render() {
		return (<RouteHandler />);
	}
}



React.render(<Router history={history}>
    <Route path="/app/" component={HomeRoute}/>
    <Route path="/app/profile" component={ProfileRoute}/>
  </Router>, document.getElementById('appContainer'));