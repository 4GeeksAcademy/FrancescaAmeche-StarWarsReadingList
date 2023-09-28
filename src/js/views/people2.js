import React, {useContext, useState, useParams, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const People2 = () => {
    const { store, actions } = useContext(Context);
    const [people, setPeople] = useState();
    useEffect(()=> {
        fetch("https://www.swapi.tech/api//people/" + "1")
        .then(res => res.json())
        .then((data) => setPeople(data.result.properties));
    },[])
    return (
        <div className="peoplePage container">
            <div className="row">
                <div className="col">
                    <img src="https://www.brighterbites.org/wp-content/uploads/2016/04/placeholder-800x600.png" className="card-img-top" alt="..."/>
                </div>
                <div className="col">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Name</p>
                </div>
                <div className="col">
                    <p>Birth Year</p>
                </div>
                <div className="col">
                    <p>Gender</p>
                </div>
                <div className="col">
                    <p>Height</p>
                </div>
                <div className="col">
                    <p>Skin Color</p>
                </div>
                <div className="col">
                    <p>Eye Color</p>
                </div>
            </div>
        </div>
   
);
};
