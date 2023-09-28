const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			people2: [],
			planets: [],
			vehicles: []

		},

		actions: {
			
			displayPeople: () => {
				
				fetch("https://swapi.dev/api//people/")
					.then(res => res.json())
					.then((data) => {
						setStore({people: data.results})
					});
					},

			displayPeople2: () => {
				
				fetch("https://www.swapi.tech/api//people/" + "1")
					.then(res => res.json())
					.then((data) => {
						setStore({people2: data.result})
					});
					},

			displayPlanets: () => {
						
				fetch("https://swapi.dev/api//planets/")
					.then(res => res.json())
					.then((data) => {
						setStore({planets: data.results})
					});
					},

			displayVehicles: () => {
					
				fetch("https://swapi.dev/api//vehicles/")
					.then(res => res.json())
					.then((data) => {
						setStore({vehicles: data.results})
					});
					},
			
		
		}
	};
};

export default getState;
