const MovieCard = ({ movieDetails }) => {
  if (!movieDetails) {
    return;
  }
  const { title, poster, overview, rating, genres } = movieDetails;
  return (
    <div>
      <img src={poster} alt={title} width={300} />
      <h2>{title}</h2>
      <p>Rating: {rating}</p>
      <p>Overview: {overview}</p>
      {genres && <p>Genres: {genres}</p>}
    </div>
  );
};

export default MovieCard;
