import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
padding: 4px 8px;
color: #C8C1C0;
text-decoration: none;
text-transform: uppercase;
cusor: pointer;

&.active {
    color: #C07043;
}
`;

export const Navigation = styled.nav`
list-style: none;
display: flex;
gap: 16px;
margin-top: 1px;
margin-bottom: 16px;
`;

export const Section = styled.section`
border-bottom: 1px dashed #C8C1C0;
display: flex;
justify-content: flex-end;
`;