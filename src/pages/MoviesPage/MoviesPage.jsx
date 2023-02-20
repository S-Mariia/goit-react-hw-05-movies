import { useState, useEffect, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getMovieByName } from 'shared/servises/api-servise';
import { Button, BtnWrapper } from '../HomePage/HomePage.styled';

const Loader = lazy(() => import('shared/components/Loader/Loader'));
const MoviesSearchForm = lazy(() => import('./MoviesSearchForm/MoviesSearchForm'));
const MoviesList = lazy(() => import('../../shared/components/MoviesList/MoviesList'));

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);

  const [searchParam, setSearchParam] = useSearchParams('');
  const query = searchParam.get('query');

  useEffect(() => {
    const fetchMovies = async (query, number) => {
      try {
        if (!query || query.trim() === '') {
          return;
        }
        setIsLoading(true);

        const { results, page, total_pages } = await getMovieByName(
          query,
          number
        );
        if (results.length === 0) {
          throw new Error(
            "Sorry we haven't found anything. Please try to find something else😌"
          );
        }

        if (page < total_pages) {
          setShowLoadMore(true);
        } else {
          setShowLoadMore(false);
        }

        setMovies(prevMovies => [...prevMovies, ...results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies(query, page);
  }, [query, page]);

  const onFormSubmit = title => {
    if(title === query){
      return;
    }
    setMovies([]);
    setError(null);
    if (title.trim() === '') {
      setError('Please enter something');
      return;
    }
    setSearchParam({ query: title });
  };

  return (
    <div>
      <MoviesSearchForm onSubmit={onFormSubmit} />
      {movies.length > 0 && <MoviesList items={movies} />}
      {showLoadMore && (<BtnWrapper><Button onClick={()=>setPage(prevPage => prevPage + 1)} type="button">Load more</Button></BtnWrapper>) }
      {isLoading && <Loader />}
      {error && toast.error(error)}
      <ToastContainer position="top-right" autoClose={3500} />
    </div>
  );
};

export default MoviesPage;
