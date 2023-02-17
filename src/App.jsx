import { Routes, Route } from "react-router-dom";

import NavBar from "modules/NavBar/NavBar";
import HomePage from "pages/HomePage/HomePage";
import MoviesPage from "pages/MoviesPage/MoviesPage";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import MovieCast from "pages/MovieDetails/MovieCast/MovieCast";
import MovieReviews from "pages/MovieDetails/MovieReviews/MovieReviews";

export const App = () => {
 
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieID' element={<MovieDetails />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
      </Routes>
      
      
    </>
  );
};
