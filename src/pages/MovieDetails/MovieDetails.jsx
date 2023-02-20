import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, lazy } from 'react';
import { getMovieDetails } from 'shared/servises/api-servise';
import { Button, Section } from './MovieDetails.styled';

const Loader = lazy(() => import('shared/components/Loader/Loader'));
const MovieCard = lazy(() => import('./MovieCard/MovieCard'));

const MovieDetails = () => {
  const params = useParams();
  const movieId = Number(params.movieID);

  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  const location = useLocation();
  const backLinkHref = location?.state?.from || "/";
  
  useEffect(() => {
    const fetchMovie = async id => {
      try {
        setIsLoading(true);

        const resp = await getMovieDetails(id);
        const { title, overview, genres, vote_average, poster_path } = resp;
        const listOfGenres = genres.map(({ name }) => name).join(', ');
        setMovieDetails({
          title,
          overview,
          rating: vote_average,
          poster: `https://image.tmdb.org/t/p/w500${poster_path}`,
          genres: listOfGenres,
        });
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie(movieId);

    return () => {
      setMovieDetails(null);
    }
  }, [movieId]);

  return (
    <Section>
      {isLoading === true && <Loader />}
      {movieDetails && (
        <>
          <Button to={backLinkHref}>Go back</Button>
          <MovieCard movieDetails={movieDetails} />
          <Outlet />
        </>
      )}
    </Section>
  );
};

export default MovieDetails;
