import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Context } from "../store/appContext";


	export const People = () => {
		const { store, actions } = useContext(Context);
			return (
				<div className="peoplePage container-fluid">
					<h3 className="text-danger ms-3 mb-4">People</h3>
					<div className="row g-4 d-flex flex-row flex-nowrap" >
							{store.people.map((item, index) => {
								return (
										<div className="col" key={item.url}>
											<div className="card ms-1 mb-4" style={{width: "400px"}}>
												<img src="https://fakeimg.pl/400x200" className="card-img-top" alt="..."/>
												<div className="card-body">
													<h5 className="card-title">{item.name}</h5>
													<p className="card-text">Gender: {item.gender}</p>
													<p className="card-text">Hair color: {item.hair_color}</p>
                                                    <p className="card-text">Eye color: {item.eye_color}</p>
												</div>
												<div className="card-footer">
													<Link to={"/people/" + (index + 1)}>
													<button className="btn btn-outline-primary me-3">Learn more!</button>
													</Link>
													<button className="btn btn-outline-warning"><FontAwesomeIcon icon={faHeart}/></button>
												</div>
											</div>
										</div>
										);
									})}	
					</div>
				</div>
		);
		};
