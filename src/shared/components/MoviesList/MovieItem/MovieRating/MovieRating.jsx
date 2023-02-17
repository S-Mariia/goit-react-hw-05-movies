import ReactStars from "react-rating-stars-component";

const MovieRating = ({ value }) => {
  return <ReactStars
    count={5}
    size={24}
    value={value}
    a11y={false}
    isHalf={true}
    edit={false}
    activeColor="#ffd700"
  />
};

export default MovieRating;

