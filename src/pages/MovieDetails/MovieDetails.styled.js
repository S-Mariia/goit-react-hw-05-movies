import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
text-decoration: none;
color: #B2AAA9;
`;

export const Button = styled(Link)`
text-decoration: none;
color: #B2AAA9;
padding: 6px 8px;
transition: color 200ms linear;

&:hover {
    color: #C07043;
}
`;

export const Section = styled.section`
padding: 16px 0;
`;

export const List = styled.ul`
display: flex;
gap: 16px;
`;