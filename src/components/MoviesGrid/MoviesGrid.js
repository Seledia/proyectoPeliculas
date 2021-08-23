import React from 'react';
import { useEffect, useState } from 'react';
import httpClient from '../../utils/httpClient';
import "../index.css";
import movies from "../movies.json";
import MovieCard from "../MovieCard/MovieCard";
import Grid from "./Grid.css"

const MoviesGrid = () => {
	
	const[movie, setMovie] = useState([]);
	

		useEffect(() => {
			httpClient("/discover/movie").then(data => {
				setMovie (data.results);
			});
			}, []);
			return (
				<ul className="GridDisplay">
					{movie.map((movie) => (
	        		<MovieCard key={movie.id} movie={movie} />
						
					))}
				</ul>

			);
	
}

export default MoviesGrid;