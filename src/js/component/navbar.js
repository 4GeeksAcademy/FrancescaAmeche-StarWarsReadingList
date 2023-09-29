import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 fixed-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-4">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
				<button type="button" className="btn btn-primary dropdown-toggle me-5 py-2 px-4" data-bs-toggle="dropdown" aria-expanded="false">
    			Favorites 
				</button>
				<ul className="dropdown-menu dropdown-menu-end me-3">
					<li className="dropdown-item" href="#">Menu item</li>
				</ul>
				</Link>
			</div>
		</nav>
	);
};
