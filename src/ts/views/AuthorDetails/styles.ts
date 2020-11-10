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
    width: 65%;
    @media (max-width: 700px) {
        width: 80%;
    }
`;

export const Text = styled.p<{header?: boolean}>`
    margin: 5px 0;
    font-size: ${({header}) => (header ? "20px" : "12px")};
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
`;