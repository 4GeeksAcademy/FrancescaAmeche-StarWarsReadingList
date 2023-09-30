import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import "../../styles/home.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 fixed-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-4">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<button type="button" className="btn btn-primary dropdown-toggle me-5 py-2 px-4" data-bs-toggle="dropdown" aria-expanded="false">
    			Favorites {store.favorites.length}
				</button>
				<ul className="dropdown-menu dropdown-menu-end me-3">
					{store.favorites.map((item, index) => (<li key={index} className="dropdown-item">{item}<button className="trashButton" onClick={() => actions.deleteFavorites(item)}><FontAwesomeIcon icon={faTrashCan} /></button></li>))}
				</ul>
			</div>
		</nav>
	);
};
