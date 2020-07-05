import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

// import views/components
import Home from './views/home/Home'
import Header from './components/header/Header'

import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<header> 
					<Header /> 
				</header>

				<div>
					<div className="content">
						<Switch >
							<Route exact path="/">
								<Home />
							</Route>
						</Switch>
					</div>
				</div>
      		</Router>
		</div>
	);
}

export default App;
