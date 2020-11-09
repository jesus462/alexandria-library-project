import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
	padding-top: 54px;
    display: flex;
    flex-direction: column;
	align-items: center;
`;

export const DetailsContainer = styled.div`
    display: flex;
    margin: 15px 0;
    padding: 10px;
    width: 95%;
    background-color: #F4F1EA;
    border-radius: 15px;
    border: 1px solid #a2986a;
`;

export const AuthorImage = styled.img`
    width: 40%;
    height: 65%;
    border-radius: 10px;
    @media (max-width: 700px) {
        margin: 10px auto;
        width: 60%;
        height: 40%;
    }
`;

export const Divider = styled.hr`
    background-color: #a2986a;
    width: 1px;
`

export const Details = styled.div`
    width: 55%;
`;

export const Text = styled.p`
    margin: 5px 0;
    font-size: 14px;
`;

export const BooksList = styled.div`
    height: 200px;
    display: flex;
    flex-wrap: nowrap;
    padding: 5px;
    overflow-x: scroll;
    background-color: #a2986a;
    border-radius: 5px;
`;