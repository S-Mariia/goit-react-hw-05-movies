import { useState, useEffect } from 'react';

import { getPopularMovies } from 'shared/servises/api-servise';

import MoviesList from 'shared/components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    const fetchMovies = async number => {
      const { results, page, total_pages } = await getPopularMovies(number);
      if (page < total_pages) {
        setShowLoadMore(true);
      } else {
        setShowLoadMore(false);
      }
   
      setMovies(prevMovies => [...prevMovies, ...results]);
    };

    fetchMovies(page);
  }, [page]);

  return (
    <>
      <h2>Trending today</h2>
      <MoviesList items={movies} />
      {showLoadMore && <button type='button' onClick={()=>setPage(prevPage => prevPage + 1)}>Load more</button>}
    </>
  );
};

export default HomePage;
