import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./components/index.css";
import Navbar from './components/Navegador/Navbar';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Home from './Paginas/Home';
import Login from './Paginas/Login';






const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div className = "App">
					<Navbar/>
						<Switch>
							<Route exact path = '/'> <Home/> </Route>
							<Route exact path ="/movie/:movieId"><MovieDetails/></Route>
							<Route exact path = "/components/Login"> <Login/> </Route>
						
						
						</Switch>
				</div>
			</BrowserRouter>
		</div>
	);

}


export default App;