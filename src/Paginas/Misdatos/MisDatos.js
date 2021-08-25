import React from 'react';
import styles from './MisDatos.css';
import Delete from '../../components/assets/deletes.png';
import Edit from '../../components/assets/useredits.png';

const MisDatos = () => {
	return (
		<div>
			<form name= "Contacto" method="post"  >
	     <div className="container-table" align="center">   
	    	 <div className="table__title"><h1> Datos usuarios</h1></div>
	     	 	
				<div className="table__heather"> Id Cliente </div>
				<div className="table__heather"> Película </div>
				<div className="table__heather"> Id</div>
				<div className="table__heather"> Estado</div>
				<div className="table__heather"> Fecha </div>
				<div className="table__heather"> Acción </div>
					
					<div className="table__item"></div>
					<div className="table__item"></div>
					<div className="table__item"></div>
					<div className="table__item"></div>
					<div className="table__item"></div> 					
					<div className="table__item">
						<button type= "submit" className="datoboton"> <img src = { Delete }/></button>
						<button type= "submit"className="datoboton"><img src = { Edit }/></button> 
					</div>
					
						
				</div>

			</form>
		</div>
		     
	);
}

export default MisDatos;