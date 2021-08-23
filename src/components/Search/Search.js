import React from 'react';
import search from '../assets/search4.png';
import styles from './Search.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
	const [searchText, setSearchText] = useState ("");
	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		history.push("/?search=" + searchText);
		
	};
	return (
		<div >
			<form onSubmit = {handleSubmit}>
				<input type= "text" className="buscadorinput" value = { searchText } onChange = {(e) => setSearchText(e.target.value)} />
				<button type= "submit" className="searchbutton" ><img src = { search }/></button>	
			</form>
		</div>
	);
	
}
export default Search;