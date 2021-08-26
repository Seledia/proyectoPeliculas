import React from 'react';
import styles from './Busqueda.css';


const Busqueda = () => {
	return (
		     <div className="busquedavanzada" align="center">
		     	<p className= "Busqueda_titulo">Búsqueda avanzada </p>	     	
					<form name= "Busqueda"  className="formularioBusqueda" > 	
						<div className="label_busqueda">
							<div className="campo_input"> Título:</div>
							<input type="text" className="caja_gris" />
						</div>
				
						<div className="label_busqueda">
							<div className="campo_input">Genero: </div>
							<input type="text"  className="caja_gris" />
						</div>

						<div className="label_busqueda">
							<div className="campo_input">Director: </div>
							<input type="text"  className="caja_gris" />
						</div>

						<div className="label_busqueda">
							<div className="campo_input">
							<button type="submit" autofocus="" className="boton_form"><strong>Enviar</strong></button>
						</div>
					
				</div>

			</form>
			
		</div>
	);
}

export default Busqueda;