import React, { useState, useContext, useEffect, FunctionComponent } from "react";
import { Context } from "../../store/Context";

import { Nav, Logo, SearchBar, LinkStyledLogo } from "./styles";

export const Navbar: FunctionComponent = () => {
	const { actions } = useContext(Context);
	const [search, setSearch] = useState("");
	
	useEffect(() => {
		console.log(search);
		actions.fetchBooks(search);
	}, [search]);
	
	return (
		<Nav>
			<LinkStyledLogo to="/">
				<Logo
					src="https://res.cloudinary.com/duu99bl6f/image/upload/v1604628907/Alexandria/alexandria-logo-color.png"
					alt="Alexandria logo"
				/>
			</LinkStyledLogo>
				<SearchBar
					value={search}
					onChange={(e)=>setSearch(e.target.value)}
					type="text"
					className="fas fa-search"
					placeholder="Search"
				/>
		</Nav>
	);
};