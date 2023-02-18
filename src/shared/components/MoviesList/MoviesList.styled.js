import { Link } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: stretch;
align-content: stretch;
gap: 15px;
`;

export const Item = styled.li`
height: 100%;
display: flex;
flex-direction: column;
// justify-content: stretch;
box-shadow: 0px 0px 2px 2px rgba(128,123,128,1)
`;

export const StyledLink = styled(Link)`
width: calc((100% - 60px) / 5);
text-decoration: none;
`