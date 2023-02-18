import MovieRating from "./MovieRating/MovieRating";
import {  Poster, Title, Description } from "./MovieItem.styled";

const MovieItem = ({ info }) => {
  const handleRating = rating => {
    return ((rating / 2) - Math.floor(rating / 2)) >= 0.5 ? Math.floor(rating / 2) + 0.5 : Math.floor(rating / 2);
  }


  const { title, poster_path, vote_average } = info;
  return (<>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <Description>
      <Title>{title}</Title>
      <MovieRating value={handleRating(vote_average)} />
    </Description>
    </>
  );
};

export default MovieItem;
