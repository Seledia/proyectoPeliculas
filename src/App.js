import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./components/index.css";
import Navbar from './components/Navegador/Navbar';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Home from './Paginas/Home';
import Login from './Paginas/Login/Login';
import MisDatos from './Paginas/Misdatos/MisDatos';






const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div className = "App">
					<Navbar/>
						<Switch>
							<Route exact path = '/'> <Home/> </Route>
							<Route exact path ="/movie/:movieId"><MovieDetails/></Route>
							<Route exact path = "/components/Login/Login"> <Login/> </Route>
							<Route exact path = "/components/Misdatos/MisDatos"> <MisDatos/> </Route>
						
						
						</Switch>
				</div>
			</BrowserRouter>
		</div>
	);

}


export default App;