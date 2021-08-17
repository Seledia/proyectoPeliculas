import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MoviesGrid from '../MoviesGrid/MoviesGrid';
import "./Navbar.css";

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
							<li className ="menu__item"><NavLink to = "/" className = "menu__Link"> Log in </NavLink></li>
							<li className ="menu__item"><NavLink to = "/" className = "menu__Link"> Mis datos </NavLink></li>
						</ul>
					</nav>
					<div className = "Buscador">
					</div>
						
				</div>
			</header>	
			<MoviesGrid/>
		</div>
	);

}
export default Navbar;