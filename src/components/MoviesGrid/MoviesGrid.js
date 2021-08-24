import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useQuery from '../../hooks/useQuery';
import httpClient from '../../utils/httpClient';
import "../index.css";
import movies from "../movies.json";
import MovieCard from "../MovieCard/MovieCard";
import Grid from "./Grid.css"



const MoviesGrid = () => {
	const[movie, setMovie] = useState([]);

	const query = useQuery();
	const search = query.get("search");
	
	

		useEffect(() => {
			const searchUrl = search 
			? "/search/movie?query=" + search
			: "/discover/movie";
			httpClient (searchUrl).then((data) => {
				setMovie (data.results);
			});
			}, [search]);
			return (
				<ul className="GridDisplay">
					{movie.map((movie) => (
	        		<MovieCard key={movie.id} movie={movie} />
						
					))}
				</ul>

			);
	
}

export default MoviesGrid;