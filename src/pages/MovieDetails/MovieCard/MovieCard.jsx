import { Section, Description, Image, Title, FlexContainer, Subtitle } from "./MovieCard.styled";

import MovieRating from "shared/components/MovieRating/MovieRating";

const MovieCard = ({ movieDetails }) => {
  if (!movieDetails) {
    return;
  }
  const { title, poster, overview, rating, genres } = movieDetails;
  return (
    <Section>
      <Image src={poster} alt={title} />
      <Description>
      <Title>{title}</Title>
      <MovieRating value={rating} />
      <FlexContainer>
      <Subtitle>Overview:</Subtitle> <p>{overview}</p> 
      </FlexContainer>
      
      {genres &&  <FlexContainer><Subtitle>Genres:</Subtitle> <p> {genres}.</p></FlexContainer> }
      </Description>
    </Section>
  );
};

export default MovieCard;
