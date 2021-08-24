import React from 'react';
import searcher from '../assets/search4.png';
import styles from './Search.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useQuery from '../../hooks/useQuery';

const Search = () => {
	const query = useQuery();
	const search = query.get("search");

	const [searchText, setSearchText] = useState ("");
	const history = useHistory();


	useEffect(() => {
		setSearchText(search || "");
	}, [search]);


	const handleSubmit = (e) => {
		e.preventDefault();
		history.push("/?search=" + searchText);
		
	};
	return (
		<div >
			<form onSubmit = {handleSubmit}>
				<input type= "text" className="buscadorinput" value = { searchText } 
				onChange = {(e) => setSearchText(e.target.value)} />
				<button type= "submit" className="searchbutton" ><img src = { searcher }/></button>	
			</form>
		</div>
	);
	
}
export default Search;