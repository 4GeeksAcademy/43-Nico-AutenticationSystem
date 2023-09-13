import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/Login">
					<button className="btn btn-primary">Iniciar sesión</button>
				</Link>
				<div className="ml-auto">
					<Link to="/Registro">
						<button className="btn btn-primary">Registro</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
