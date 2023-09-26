import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Context } from "../store/appContext";


	export const Vehicles = () => {
		const { store, actions } = useContext(Context);
			return (
				<div className="vehiclesPage container">
					<h3>Vehicles</h3>
					<div className="row row-cols-1 row-cols-md-3 g-4 d-flex flex-row flex-nowrap" >
							{store.vehicles.map((item, index) => {
								return (
									
										<div className="col" key={item.id}>
											<div className="card">
												<img src="..." className="card-img-top" alt="..."/>
												<div className="card-body">
													<h5 className="card-title">{item.name}</h5>
													<p className="card-text">Model: {item.model}</p>
													<p className="card-text">Passengers: {item.passengers}</p>
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