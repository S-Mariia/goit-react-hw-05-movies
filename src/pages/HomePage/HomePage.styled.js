import styled from "styled-components";

export const Title = styled.h2`
color: #C07043;
text-transform: uppercase;
font-size: 32px;
text-align: center;
margin-bottom: 16px;
margin-top: 16px;
`;

export const Button = styled.button`
margin: 15px auto;
padding: 6px 10px;
text-transform: uppercase;
background-color: #C8C1C0;
border-radius: 3px;
font-weight: 500;
cursor: pointer;
transition: background-color 200ms linear;

&:hover {
    background-color: #C07043;
}
`;

export const BtnWrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 16px;
`;