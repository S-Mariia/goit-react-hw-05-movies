import PropTypes from 'prop-types';
import MovieRating from "../../MovieRating/MovieRating";
import {  Poster, Title, Description } from "./MovieItem.styled";
import posterPlaceholder from '../../../images/poster-placeholder.png';

const MovieItem = ({ info }) => {
  const handleRating = rating => {
    return ((rating / 2) - Math.floor(rating / 2)) >= 0.5 ? Math.floor(rating / 2) + 0.5 : Math.floor(rating / 2);
  }

  const { title, poster_path, vote_average } = info;
  return (<>
      <Poster
        src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : posterPlaceholder}
        alt={title}
      />
      <Description>
      <Title>{title}</Title>
      <MovieRating value={handleRating(vote_average)} />
    </Description>
    </>
  );
};

MovieItem.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
  }),
}

export default MovieItem;
