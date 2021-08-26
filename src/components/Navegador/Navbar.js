import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MoviesGrid from '../MoviesGrid/MoviesGrid';
import Login from '../../Paginas/Login/Login.js';
import Busqueda from '../Busqueda/Busqueda.js';
import "./Navbar.css";
import Search from '../Search/Search';

const Navbar = () => {
	return (
		<div>
			<header className = "contenedor">
				<div className = "Navegador">
					<NavLink to = "/">
						<div className = "divlogo">
							<h1 className = "glow">
								<p className = "logo">
									<span className = "parte1"> Film
									</span>
									<span className = "parte2"> o
									</span>
								</p>
							</h1>
						</div>
					</NavLink>
					<nav className ="nav">
						<ul className= "menu">
							<li className ="menu__item"><NavLink to = "/components/Login/Login" className = "menu__Link"> Log in </NavLink></li>
							<li className ="menu__item"><NavLink to = "/components/Misdatos/MisDatos" className = "menu__Link"> Clientes </NavLink></li>
							<li className ="menu__item"><NavLink to = "/components/Busqueda/Busqueda" className = "menu__Link"> Busqueda </NavLink></li>
						</ul>
					</nav>
					<div className = "Buscador">
						<Search/>
					</div>
						
				</div>
			</header>	
			
		</div>
	);

}
export default Navbar;