import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Context } from "../store/appContext";


	export const Planets = () => {
		const { store, actions } = useContext(Context);
			return (
				<div className="planetsPage container">
					<h3>Planets</h3>
					<div className="row row-cols-1 row-cols-md-3 g-4 d-flex flex-row flex-nowrap" >
							{store.planets.map((item, index) => {
								return (
									
										<div className="col" key={item.id}>
											<div className="card">
												<img src="..." className="card-img-top" alt="..."/>
												<div className="card-body">
													<h5 className="card-title">{item.name}</h5>
													<p className="card-text">Population: {item.population}</p>
													<p className="card-text">Terrain: {item.terrain}</p>
												</div>
												<div class="card-footer">
													<button>Learn more!</button>
													<button><FontAwesomeIcon icon={faHeart}/></button>
												</div>
											</div>
										</div>
									
										);
									})}	
					</div>
				</div>
		);
		};
