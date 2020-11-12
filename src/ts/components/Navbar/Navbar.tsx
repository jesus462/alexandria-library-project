import React, { useContext, FunctionComponent } from "react";
import { Context } from "../../store/Context";
import { useKey, useSearch } from "../../hooks"

import { Nav, Logo, SearchBar, LinkStyledLogo, LinkStyled } from "./styles";

export const Navbar: FunctionComponent = () => {
	const { actions } = useContext(Context);
	const { search, handleSearch } = useSearch();

	const handleEnter = () => {
		actions.setSearching(search);
		actions.fetchBooks(search);
	}
	useKey(13, handleEnter);

	return (
		<Nav>
			<LinkStyledLogo to="/">
				<Logo
					src="https://res.cloudinary.com/duu99bl6f/image/upload/v1604628907/Alexandria/alexandria-logo-color.png"
					alt="Alexandria logo"
				/>
			</LinkStyledLogo>
				<LinkStyled to="/">
					<SearchBar
						value={search}
						onChange={(e)=>handleSearch(e)}
						type="text"
						placeholder="Search"
					/>
				</LinkStyled>
		</Nav>
	);
};