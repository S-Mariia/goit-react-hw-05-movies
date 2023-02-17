const MovieItem = ({ info }) => {
  const { title, poster_path, vote_average } = info;
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width={150}
      />
      <p>{title}</p>
      <p>Rating: {vote_average}</p>
    </div>
  );
};

export default MovieItem;
