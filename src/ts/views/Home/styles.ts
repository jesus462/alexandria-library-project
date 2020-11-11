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