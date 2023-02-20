import { useParams } from 'react-router-dom';
import { useState, useEffect, lazy } from 'react';
import { getMovieReviews } from 'shared/servises/api-servise';
import { Item, Title, Text, List, StyledError } from './MovieReviews.styled';

const Loader = lazy(() => import('shared/components/Loader/Loader'));

const MovieReviews = () => {
  const params = useParams();
  const movieId = Number(params.movieID);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async id => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getMovieReviews(id);

        if (response.length === 0) {
          throw new Error('There are no reviews.');
        }
        setReviews(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading === true && <Loader />}
      {error && <StyledError>{error}</StyledError>}
      {reviews.length > 0 && (
        <List>
          {reviews.map(({ author, content }, idx) => {
            return (
              <Item key={idx}>
                <Title>{author}</Title>
                <Text>{content}</Text>
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};

export default MovieReviews;
