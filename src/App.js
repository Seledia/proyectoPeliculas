import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./components/index.css";
import Navbar from './components/Navegador/Navbar';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Home from './components/Home';






const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div className = "App">
					<Navbar/>
					<Switch>
						<Route exact path = '/' component = { Home } />
						<Route exact path ="/movies/:movieId"><MovieDetails/></Route>
						
						
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);

}


export default App;