import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getMovieByName } from 'shared/servises/api-servise';

import MoviesSearchForm from './MoviesSearchForm/MoviesSearchForm';
import MoviesList from '../../shared/components/MoviesList/MoviesList';
import Loader from 'shared/components/Loader/Loader';

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

  const onFormSubmit = query => {
    setError(null);
    if (query.trim() === '') {
      setError('Please enter something');
      return;
    }
    setSearchParam({ query });
  };

  return (
    <div>
      <MoviesSearchForm onSubmit={onFormSubmit} />
      {movies.length > 0 && <MoviesList items={movies} />}
      {showLoadMore && <button onClick={()=>setPage(prevPage => prevPage + 1)} type="button">Load more</button> }
      {isLoading && <Loader />}
      {error && toast.error(error)}
      <ToastContainer position="top-right" autoClose={3500} />
    </div>
  );
};

export default MoviesPage;
