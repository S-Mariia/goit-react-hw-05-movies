import MovieRating from "./MovieRating/MovieRating";

const MovieItem = ({ info }) => {
  const handleRating = rating => {
    return ((rating / 2) - Math.floor(rating / 2)) >= 0.5 ? Math.floor(rating / 2) + 0.5 : Math.floor(rating / 2);
  }


  const { title, poster_path, vote_average } = info;
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width={150}
      />
      <p>{title}</p>
      <MovieRating value={handleRating(vote_average)} />
    </div>
  );
};

export default MovieItem;
