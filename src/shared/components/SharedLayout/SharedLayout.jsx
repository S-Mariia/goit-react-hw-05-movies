import { Outlet } from 'react-router-dom';

import { Container } from './SharedLayout.styled';
import NavBar from 'modules/NavBar/NavBar';

const SharedLayout = () => {
  return (
    <Container>
      <NavBar />
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
