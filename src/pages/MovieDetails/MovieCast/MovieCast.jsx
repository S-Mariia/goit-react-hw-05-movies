import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'shared/servises/api-servise';
import Loader from 'shared/components/Loader/Loader';

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
          throw new Error("Sorry we can't reach cast");
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

  //default img
  return (
    <>
      {isLoading === true && <Loader />}
      {error && <p>{error}</p>}

      {cast.length > 0 && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  width={150}
                  alt={name}
                />
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MovieCast;
