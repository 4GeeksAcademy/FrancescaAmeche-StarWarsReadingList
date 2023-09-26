import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Planets} from "./planets"
import {People} from "./people"
import {Vehicles} from "./vehicles"

export const Home = () => (
	<div>
		<People></People>
		<Planets></Planets>
		<Vehicles></Vehicles>
	</div>
);
