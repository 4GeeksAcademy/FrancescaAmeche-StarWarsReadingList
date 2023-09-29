import { useParams } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: []
		},

		actions: {
			
			displayPeople: () => {
				
				fetch("https://swapi.dev/api//people/")
					.then(res => res.json())
					.then((data) => {
						setStore({people: data.results})
					});
					},

			displayPlanets: () => {
						
				fetch("https://swapi.dev/api//planets/")
					.then(res => res.json())
					.then((data) => {
						setStore({planets: data.results})
					});
					},

		}
	};
};

export default getState;
