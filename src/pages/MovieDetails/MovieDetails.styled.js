import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
color: #B2AAA9;
text-transform: uppercase;
padding: 4px 8px 4px 0;
font-weight: 500;
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
margin-top: 20px;
`;