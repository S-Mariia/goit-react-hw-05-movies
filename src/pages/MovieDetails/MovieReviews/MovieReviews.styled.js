import styled from "styled-components";

export const Item = styled.li`
width: 85%;
margin-left: auto;
margin-right: auto;

&:not(:last-child) {
    margin-bottom: 16px;
}
`;

export const Title = styled.h4`
text-transform: uppercase;
color: #C07043;
margin-bottom: 8px;
`;

export const Text = styled.p`
color: #B2AAA9;
text-align: justify;
`;

export const List = styled.ul`
margin-top: 32px;
`;

export const StyledError = styled.p`
margin-top: 32px;
font-size: 16px;
text-align: center;
color: #B2AAA9;
`;