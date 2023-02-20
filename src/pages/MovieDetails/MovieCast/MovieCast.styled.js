import styled from "styled-components";

export const List = styled.ul`
margin-top: 32px;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 16px;
`;

export const Item = styled.li`
width: calc((100% - 5*16px) / 6);
display: flex;
gap: 8px;
flex-direction: column;
`;

export const Image = styled.img`
width: 173px;
height: 250px;
// flex-grow: 1;
object-fit: cover;
`;

export const Description = styled.h3`
color: #B2AAA9;
`;