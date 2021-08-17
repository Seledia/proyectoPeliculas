import React from 'react';
import "../index.css";
import movies from "../movies.json";
import MovieCard from "../MovieCard/MovieCard";
import Grid from "./Grid.css"

const MoviesGrid = () => {
		return (
			<ul className="GridDisplay">
				{movies.map((movie) => (
        		<MovieCard key={movie.id} movie={movie} />
					
				))}
			</ul>

		);
	
}

export default MoviesGrid;