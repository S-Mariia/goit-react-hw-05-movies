import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'shared/servises/api-servise';
import Loader from 'shared/components/Loader/Loader';

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
          throw new Error('There are no reviews');
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
      {error && <p>{error}</p>}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;
