import { useParams } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: []
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

			displayFavorites: (name) => {
				const store = getStore();
				if(store.favorites.includes(name)){
					setStore({favorites: store.favorites.filter((item) => item != name)})
				}
				else {
					setStore({favorites: [...store.favorites, name]})
					console.log(store.favorites)
				}
			},

			deleteFavorites: (name) => {
				const store = getStore();
				console.log(name)
				setStore({favorites: store.favorites.filter((item) => item != name)})
			}

		}
	};
};

export default getState;
