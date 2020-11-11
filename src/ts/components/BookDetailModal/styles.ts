import styled from "styled-components";

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1040;
	width: 100%;
	height: 100%;
	background-color: #000;
	opacity: 0.5;
`;

export const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1050;
	width: 100%;
	height: 100%;
	outline: 0;
	display: flex;
`;

export const Modal = styled.div`
	z-index: 100;
	position: relative;
	margin: auto;
	border-radius: 10px;
    width: 350px;
    background: #F4F1EA;
	height: 60%;
	overflow-y: scroll;
	@media (max-width: 400px) {
		width: 90%;
	}
`;

export const Header = styled.div`
	position: sticky;
	top: 0;
	background-color: white;
	width: 100%;
	display: flex;
	align-items: center;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.11);
`;

export const Main = styled.div`
	width: 95%;
	margin: 0 auto;
`;

export const Title = styled.p`
	font-size: 16px;
	font-weight: bold;
	margin: 5px 20px;
	width: 80%;
	text-align: justify;
`;

export const Button = styled.button`
	height: 90%;
    margin: auto 0;
    background: #F4F1EA;
	font-size: 15px;
	font-weight: bold;
	margin-right: 8px;
	:hover,
	:active {
		opacity: 0.8;
		cursor: pointer;
	}
`;

export const DividerHorizontal = styled.hr`
    background-color: #a2986a;
    height: 1px;
    width: 95%;
`;

export const Text = styled.p<{justify?: boolean}>`
    font-size: 14px;
    margin: 5px 0;
    text-align: ${({ justify }) => (justify ? "justify" : "start")};
`;

export const BookImage = styled.img`
	width: 10%;
	margin-left: 10px;
    border-radius: 10px;
`;