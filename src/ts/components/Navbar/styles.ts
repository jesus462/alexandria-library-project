import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding: 2px 12px;
	border-bottom: 1px solid #a2986a;
	position: fixed;
	top: 0;
	background-color: #F4F1EA;
	z-index: 100;
`;

export const Logo = styled.img`
	width: 50px;
	margin-right: 10px;
`;

export const SearchBar = styled.input`
	width: 95%;
	border: none;
	outline: none;
	font-size: 20px;
	border-radius: 10px;
	margin-right: 20px;
	:active {
		border: none;
	}
	::-webkit-input-placeholder {
		font-size: 20px;
		color: #505050;
	}
`;

export const LinkStyledLogo = styled(Link)`
	display: flex;
	align-items: center;
`;

export const LinkStyled = styled(Link)`
	width: 100%;
	cursor: default;
`;