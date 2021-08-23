import React from 'react';
import Loading from '../assets/spinner.gif';


const Spinner =() => {
	return (
		<div className="contenedorload">
		<img src = { Loading } className="loading"/>
		</div>
		);
}

export default Spinner;