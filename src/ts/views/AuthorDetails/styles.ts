import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
	padding-top: 54px;
    display: flex;
    flex-direction: column;
	align-items: center;
`;

export const DetailsContainer = styled.div`
    display: flex;
    margin: 15px 0;
    padding: 10px;
    width: 90%;
    background-color: #F4F1EA;
    border-radius: 15px;
    border: 1px solid #a2986a;
    @media (max-width: 700px) {
        flex-direction: column;
	    align-items: center;
    }
`;

export const AuthorImage = styled.img`
    width: 30%;
    height: 350px;
    border-radius: 10px;
    @media (max-width: 700px) {
        margin: 10px auto;
        width: 60%;
        height: 40%;
    }
`;

export const DividerVertical = styled.hr`
    background-color: #a2986a;
    width: 1px;
    @media (max-width: 700px) {
        display: none;
    }
`;

export const DividerHorizontal = styled.hr`
    background-color: #a2986a;
    height: 1px;
    width: 95%;
`;

export const Details = styled.div`
    width: 60%;
    @media (max-width: 700px) {
        width: 80%;
    }
`;

export const Text = styled.p<{header?: boolean}>`
    margin: ${({header}) => (header ? "10px 0" : "5px 0")};
    font-size: ${({header}) => (header ? "20px" : "14px")};
    text-align: ${({header}) => (header ? "center" : "justify")};
`;

export const BooksList = styled.div`
    height: 200px;
    display: flex;
    flex-wrap: nowrap;
    padding: 5px;
    overflow-x: scroll;
    background-color: #a2986a;
    border-radius: 5px;
    align-items: center;
`;

export const BookImage = styled.img`
    margin: 0 5px;
    height: 95%;
    border-radius: 15px;
    :hover,
	:active {
		color: #595959;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
		cursor: pointer;
	}
`;

export const Title = styled.p`
    margin: 10px 0 0 0;
    font-size: 20px;
    text-align: center;
`;

export const Subtitle = styled.p`
    margin: 0 0 10px 0;
    font-size: 14px;
    text-align: center;
`;

export const LinkBack = styled(Link)<{absolute?: boolean}>`
color: black;
font-size: 25px;
margin: ${({absolute}) => (absolute ? "0 5px" : "0 auto")};
text-align: center;
text-decoration: none;
@media (max-width: 700px) {
    position: ${({absolute}) => (absolute ? "absolute" : "static")};
    font-size: 20px;
    left: 5.5%;
    margin-top: 10px;
}
:hover,
:active {
    text-decoration: underline;
    opacity: 0.8;
}
`;