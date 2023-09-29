import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
				<button type="button" className="btn btn-primary dropdown-toggle me-5 py-2 px-4" data-bs-toggle="dropdown" aria-expanded="false">
    			Favorites <button className="btn-secondary">0</button>
				</button>
				<ul className="dropdown-menu dropdown-menu-end me-5">
					<li className="dropdown-item" href="#">Menu item</li>
				</ul>
				</Link>
			</div>
		</nav>
	);
};
