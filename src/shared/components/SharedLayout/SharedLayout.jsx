import { Outlet } from 'react-router-dom';
import { Suspense } from "react";

import { Container } from './SharedLayout.styled';
import NavBar from 'modules/NavBar/NavBar';

const SharedLayout = () => {
  return (
    <Container>
      <NavBar />

      <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
