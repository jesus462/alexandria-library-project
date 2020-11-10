import styled from "styled-components";

export const LoadingStyled = styled.i`
    background-color: #F4F1EA;
    border-radius: 15px;
    border: 1px solid #a2986a;
    padding: 10px;
    font-size: 25px;
    margin: 15px 0;
    transition: opacity 04s ease-in-out;
    transition-property: opacity;
    animation-name: loading;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    @media (max-width: 700px) {
        font-size: 20px;
    }
    @keyframes loading {
        0% {
            color: #212529;
        }
        33% {
            color: #737373;
        }
        66% {
            color: #212529;
        }
        100% {
            color: #737373;
        }
    }
`;