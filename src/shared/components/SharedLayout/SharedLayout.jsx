import { Outlet } from 'react-router-dom';
import { Suspense } from "react";

import { Container } from './SharedLayout.styled';
import NavBar from 'modules/NavBar/NavBar';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <NavBar />

      <Suspense fallback={<Loader />}>
      <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
