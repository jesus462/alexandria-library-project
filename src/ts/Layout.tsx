import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/Home";
import { AuthorDetails } from "./views/AuthorDetails";
import { Navbar } from "./components";
import injectContext from "./store/Context";


// This is where with the react-router-dom we stablish the Routes of our App and inject the context to 
// each view, so  we nay have a global state in reach for our use.
const Layout: FunctionComponent = () => {

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/author">
						<AuthorDetails />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);