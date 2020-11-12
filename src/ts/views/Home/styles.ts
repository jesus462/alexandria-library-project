import styled from "styled-components";

export const Container = styled.div`
    padding-top: 54px;
    width: 93%;
	margin: 0 auto ;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	@media (max-width: 605px) {
		width: 97%;
	}
`;

export const NoMatchStyled = styled.p`
	background-color: #F4F1EA;
    border-radius: 15px;
    border: 1px solid #a2986a;
    padding: 10px;
    font-size: 25px;
    margin: 15px 0;
    @media (max-width: 700px) {
        font-size: 20px;
    }
`;

export const LandingContainer = styled.div`
    background-color: #F4F1EA;
    border-radius: 15px;
    border: 1px solid #a2986a;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 100%;
    margin: 15px 0;
    @media (max-width: 700px) {
        font-size: 20px;
    }
`;

export const LandingImage = styled.img`
    width: 80%; 
    border-radius: 15px;
    @media (max-width: 700px) {
        width: 100%; 
    }
`;

export const Title = styled.p`
    font-size: 25px;
    margin: 10px 0;
    font-weight: 700;
    text-align: center;
    @media (max-width: 700px) {
        font-size: 20px;
    }
`;

export const Text = styled.p<{quote?: boolean}>`
    width: 80%;
    margin: 5px 0;
    font-size: 16px;
    font-weight: 700;
    text-align: ${({quote}) => quote ? "center" : "justify"};
    @media (max-width: 700px) {
        font-size: 14px;
    }
`;