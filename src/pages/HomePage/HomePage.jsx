import { useState, useEffect, lazy } from 'react';
import { Title, Button, BtnWrapper } from './HomePage.styled';

import { getPopularMovies } from 'shared/servises/api-servise';

const MoviesList = lazy(() => import('shared/components/MoviesList/MoviesList'));
const Loader = lazy(() => import('shared/components/Loader/Loader'));

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
    <section>
      <Title>Trending today</Title>
      {isLoading === true && <Loader />}
      <MoviesList items={movies} />
      {error && <p>{error}</p>}
      {showLoadMore && (
        <BtnWrapper>
          <Button type="button" onClick={() => setPage(prevPage => prevPage + 1)}>
          Load more
        </Button>
        </BtnWrapper>
      )}
    </section>
  );
};

export default HomePage;
