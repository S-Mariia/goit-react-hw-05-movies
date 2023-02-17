import { useState, useEffect } from 'react';

import { getPopularMovies } from 'shared/servises/api-servise';

import MoviesList from 'shared/components/MoviesList/MoviesList';
import Loader from 'shared/components/Loader/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async number => {
      try {
        setIsLoading(true);
        const { results, page, total_pages } = await getPopularMovies(number);
        if (results.length === 0) {
          throw new Error('Something went wropng. Try to reload the page.');
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

    fetchMovies(page);
  }, [page]);

  return (
    <>
      <h2>Trending today</h2>
      {isLoading === true && <Loader />}
      <MoviesList items={movies} />
      {error && <p>{error}</p>}
      {showLoadMore && (
        <button type="button" onClick={() => setPage(prevPage => prevPage + 1)}>
          Load more
        </button>
      )}
    </>
  );
};

export default HomePage;
