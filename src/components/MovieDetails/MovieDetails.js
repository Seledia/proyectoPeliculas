import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import httpClient from '../../utils/httpClient';
import movie from '../../Paginas/movie.json';
import styles from './MovieDetails.css';
import cart from '../assets/cart.png';
import heart from '../assets/heart.png';
import Spinner from '../Spinner/Spinner';
import Recomendados from '../Recomendados/Recomendados';


const MovieDetails =() => {
	const { movieId } = useParams();
	const [isLoading, setIsLoading] = useState (true); 
	const [movie, setMovie ] = useState(null);



	useEffect(() => {
		setIsLoading(true);
		httpClient("/movie/ " + movieId).then(data => {
			setIsLoading(false);
			setMovie(data);
		})

	}, [movieId]);
	if (isLoading) {
		return( <Spinner/> );
	}
	if (!movie) {
		return null;
	}

	const imageUrl ="https://image.tmdb.org/t/p/w500" + movie.poster_path;{
		return (
			<div>
				<div className="detailsContainer"> 
						<img className="cartel" src = { imageUrl } alt= { movie.title } /> 
						<div className= "col">	
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
				<div className ="botones">
					<button className = " Alquilar "><img src = { cart }/> </button>
					<button className = "Megusta"> <img src = { heart }/></button>
				</div>


				<div className ="Recomendados">
				<Recomendados/>
				</div>
			</div>
		);
	}
}


export default MovieDetails;