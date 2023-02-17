import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
color: #000;
text-decoration: none;

&.active {
    color: red;
}
`;

export const List = styled.ul`
list-style: none;
display: flex;
gap: 15px;
`;

export const Item = styled.li`

`;