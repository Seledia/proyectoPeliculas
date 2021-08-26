import React from 'react';
import styles from './Login.css';


const Login = () => {
	return (
		     <div className="contenedor2" align="center">
		     	<h1> Acceso </h1>		     	
					<form name= "Login"  className="formulario" > 	
						<div className="input_field">
							<div className="label"> Dni </div>
							<input type="e-mail" className="caja_gris" required="" />
						</div>
				
						<div className="input_field">
							<div className="label">Contraseña:</div>
							<input type="password" name="Contraseña" className="caja_gris" />
						</div>
						<div className="input_field">
							<div className="label">
							<button type="submit" autofocus="" className="boton_form"><strong>Enviar</strong></button></div>
						<div className="label">
		 					<button type="reset" className="boton_form"><strong>Restablecer</strong></button></div>
					
				</div>

			</form>
			
		</div>
	);
}

export default Login;