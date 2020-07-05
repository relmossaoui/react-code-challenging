import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

// import views/components
import Home from './views/home/Home'
import PokemonType from './views/pokemonType/PokemonType.js';
import PokemonView from './views/pokemonView/PokemonView.js';
import PokemonAbility from './views/pokemonAbility/PokemonAbility.js'
import Header from './components/header/Header'

import { PK_ABILITY_FILTER_NAME, PK_TYPE_FILTER_NAME } from './http.js'

import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<header> 
					<Header /> 
				</header>

				<div className=" c-flex c-flex-sp-around">
					<div className="content">
						<Switch >
							<Route exact path="/">
								<Home />
							</Route>

							<Route exact path={"/type/:" + PK_TYPE_FILTER_NAME}>
								<PokemonType />
							</Route>

							<Route exact path="/detail/:name">
								<PokemonView />
							</Route>

							<Route exact path={"/ability/:" + PK_ABILITY_FILTER_NAME}>
								<PokemonAbility />
							</Route>
						</Switch>
					</div>
				</div>
      		</Router>
		</div>
	);
}

export default App;
