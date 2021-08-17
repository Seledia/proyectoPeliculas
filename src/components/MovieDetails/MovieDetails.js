import React from 'react';
import Navbar from '../Navegador/Navbar';
import movie from '../../Paginas/movie.json';
import styles from './MovieDetails.css';

const MovieDetails =() => {
	const imageUrl ="https://image.tmdb.org/t/p/w500" + movie.poster_path;{
		return (
			<div className="detailsContainer"> 
				<Navbar/>
				<div>
					<p> 
						<img src = { imageUrl } alt= { movie.title } /> 
					</p>
					<p>
						<strong> Título: { movie.title } </strong>
					</p> 
					<p>
						<strong> Género:  {movie.genres.map(genre => genre.name).join (", ")} </strong>
					</p>
					<p>
						<strong> Descripción: { movie.overview } </strong>
					</p>
				</div> 
			</div>
			);
	}
}


export default MovieDetails;