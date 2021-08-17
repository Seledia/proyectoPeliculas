import React from 'react';
import Card from "./Card.css";
import { Link, NavLink } from 'react-router-dom';

const MovieCard = ({ movie }) => {
	const imageUrl ="https://image.tmdb.org/t/p/w300" + movie.poster_path;{
		return(
			<NavLink to = {"/movies/" + movie.id}>
				<li className="MovieDisplay">
					<img src ={ imageUrl } alt= { movie.title } className="movieCard" width= {230}
					height={345}/>
					<div> { movie.title } </div>
				</li>
			</NavLink>							
		);
	}
}

export default MovieCard;