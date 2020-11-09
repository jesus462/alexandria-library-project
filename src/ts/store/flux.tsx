import { parse } from "fast-xml-parser";

// Here we have the data hub of our App (store) and the actions that affect it.
const getState = ({ getStore, getActions, setStore }: {getStore: any, getActions: any, setStore: any}) => {

	return {
		store: {
			books: [],
			author: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchBooks: async (search: string = "") => {
				const APIurl = "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml";
				const APIkey = "4EYpWI4bpd5MwEKoRxNbg";

				if (search) {
					try {
						let response = await fetch(
							`${APIurl}?key=${APIkey}&q=${search}`,
							{
								method: "GET"
							}
						);
						if (response.ok) {
							let toText = await response.text();
							let xmlToJSON =  parse(toText);
							let results =  xmlToJSON.GoodreadsResponse.search.results.work;
							let totalResults = xmlToJSON.GoodreadsResponse.search["total-results"];
							if (totalResults===0){
								setStore({
									books: [],
								});
							} else if (totalResults>1) {
								setStore({
									books: results,
								});	
							} else {
								setStore({
									books: [results],
								});	
							}		
						} else {
							console.log(response.status);
						}
					} catch (err) {
						console.log(err);
					}
				}
			},
			fetchAuthor: async (id: number) => {
				const APIurl = "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/author/show.xml";
				const APIkey = "4EYpWI4bpd5MwEKoRxNbg";

				try {
					let response = await fetch(
						`${APIurl}?key=${APIkey}&id=${id}`,
						{
							method: "GET"
						}
					);

					if (response.ok) {
						let toText = await response.text();
						let xmlToJSON =  parse(toText);
						let results =  xmlToJSON.GoodreadsResponse.author;

						setStore({
							author: [results],
						});
					} else {
						console.log(response.status);
					}
				} catch (err) {
					console.log(err);
				}
			}
		}
	};
};

export default getState;