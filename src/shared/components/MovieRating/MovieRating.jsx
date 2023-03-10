import ReactStars from "react-rating-stars-component";
import PropTypes from 'prop-types';
import { Span, Wrapper } from "./MovieRating.styled";

const MovieRating = ({ value }) => {
  return <Wrapper>
  <Span>Rating:</Span>
  <ReactStars
    count={5}
    size={24}
    value={value}
    a11y={false}
    isHalf={true}
    edit={false}
    activeColor="#ffd700"
  />
  </Wrapper>
  
};

MovieRating.propTypes = {
  value: PropTypes.number.isRequired,
}

export default MovieRating;

