const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: []
		},

		actions: {
			
			displayPeople: () => {
				
				fetch("https://www.swapi.tech/api//people/")
					.then(res => res.json())
					.then((data) => {
						console.log("*******", data)
						setStore({people: data.results})
					});
					},

			displayPlanets: () => {
						
				fetch("https://www.swapi.tech/api//planets/")
					.then(res => res.json())
					.then((data) => {
						console.log("*******", data)
						setStore({planets: data.results})
					});
					},

			displayVehicles: () => {
					
				fetch("https://www.swapi.tech/api//vehicles/")
					.then(res => res.json())
					.then((data) => {
						console.log("*******", data)
						setStore({vehicles: data.results})
					});
					},
			
		}
	};
};

export default getState;
