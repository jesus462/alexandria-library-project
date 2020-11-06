import styled from "styled-components";

export const Card = styled.div`
	margin: 15px;
	width: 210px;
	height: 320px;
	border: 1px solid #a2986a;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	background: #F4F1EA;
	align-items: center;
	@media (max-width: 605px) {
		width: 130px;
		height: 210px;
		margin: 10px 10px;
	}
`;

export const Text = styled.p<{bold?: boolean}>`
    text-align: center;
    font-weight: ${({ bold }) => (bold ? "700" : "400")};
    margin: 5px 0;
    font-size: 15px;
`;

export const Image = styled.img`
	height: 40%;
	width: 80%;
`;

export const Container = styled.div`
    height: 25%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;