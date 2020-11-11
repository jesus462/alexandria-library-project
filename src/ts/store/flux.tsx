import { parse } from "fast-xml-parser";

// Here we have the data hub of our App (store) and the actions that affect it.
const getState = ({ getStore, getActions, setStore }: {getStore: any, getActions: any, setStore: any}) => {

	return {
		store: {
			books: [],
			author: [],
			loading: {
				books: false,
				author: false,
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchBooks: async (search: string = "") => {
				const APIurl = "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml";
				const APIkey = "4EYpWI4bpd5MwEKoRxNbg";
				const store = getStore();

				if (search) {
					setStore({
						loading: {...store.loading, books: true}
					});
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
									loading: {...store.loading, books: false}
								});
							} else if (totalResults>1) {
								setStore({
									books: results,
									loading: {...store.loading, books: false}
								});	
							} else {
								setStore({
									books: [results],
									loading: {...store.loading, books: false}
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
				const store = getStore();

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
						console.log(xmlToJSON);
						let results =  xmlToJSON.GoodreadsResponse.author;
						console.log(results);
						setStore({
							author: [results],
							loading: { ...store.loading, author: false }
						});
					} else {
						console.log(response.status);
					}
				} catch (err) {
					console.log(err);
				}
			},
			setLoading: (value: boolean, type: string) => {
				const store = getStore();

				if (type === "books") {
					setStore({
						loading: { ...store.loading, books:!value },
					});
				} else if (type === "author") {
					setStore({
						loading: { ...store.loading, author:!value },
					});
				}
			}
		}
	};
};

export default getState;