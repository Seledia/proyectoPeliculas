import React from 'react';
import search from '../assets/search4.png';
import styles from './Search.css';

const Search = () => {
	const handleSubmit = (e) => {
		
	}
	return (
		<div >
			<form>
				<input type= "text" className="buscadorinput"/>
				<button type= "submit" className="searchbutton" onSubmit = {handleSubmit}><img src = { search }/></button>	
			</form>
		</div>
	);
	
}
export default Search;