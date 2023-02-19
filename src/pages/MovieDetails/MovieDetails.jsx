import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'shared/servises/api-servise';
import { StyledLink, Button, Section, List } from './MovieDetails.styled';
import { Subtitle } from './MovieCard/MovieCard.styled';


import MovieCard from './MovieCard/MovieCard';
import Loader from 'shared/components/Loader/Loader';

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
          <Subtitle>Additional information:</Subtitle>
          <List>
            <li>
              <StyledLink to="cast">Cast</StyledLink>
            </li>
            <li>
              <StyledLink to="reviews">Reviews</StyledLink>
            </li>
          </List>
          <Outlet />
        </>
      )}
    </Section>
  );
};

export default MovieDetails;
