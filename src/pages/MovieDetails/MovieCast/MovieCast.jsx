import { useParams } from 'react-router-dom';
import { useState, useEffect, lazy } from 'react';
import { getMovieCast } from 'shared/servises/api-servise';
import { List, Item, Description, Image } from './MovieCast.styled';
import { StyledError } from '../MovieReviews/MovieReviews.styled';
import personPlaceholder from '../../../shared/images/placeholder-image.jpg';

const Loader = lazy(() => import('shared/components/Loader/Loader'));

const MovieCast = () => {
  const params = useParams();
  const movieId = Number(params.movieID);
  const [cast, setCast] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async id => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getMovieCast(id);

        if (response.length === 0) {
          throw new Error("Sorry we can't get the cast.");
        }
        setCast(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading === true && <Loader />}
      {error && <StyledError>{error}</StyledError>}

      {cast.length > 0 && (
        <List>
          {cast.map(({ name, profile_path }, idx) => {
            return (
              <Item key={idx}>
                <Image 
                  src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : personPlaceholder}
                  alt={name}
                />
                <Description>{name}</Description>
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};

export default MovieCast;
