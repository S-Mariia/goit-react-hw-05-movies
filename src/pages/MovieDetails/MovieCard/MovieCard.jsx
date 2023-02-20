import { lazy } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { Section, Description, Image, Title, FlexContainer,Text, Subtitle } from "./MovieCard.styled";
import { StyledLink, List } from '../MovieDetails.styled';
import posterPlaceholder from '../../../shared/images/poster-placeholder.png';

const MovieRating = lazy(() => import("shared/components/MovieRating/MovieRating"));

const MovieCard = ({ movieDetails }) => {
  const location = useLocation();
  const prevLocation = location?.state?.from || "/";
  if (!movieDetails) {
    return;
  }
  const { title, poster, overview, rating, genres } = movieDetails;
  return (
    <Section>
      <Image src={poster === "https://image.tmdb.org/t/p/w500null" ? posterPlaceholder : poster} alt={title} />
      <Description>
      <Title>{title}</Title>
      <MovieRating value={rating} />
      <FlexContainer>
      <Subtitle>Overview:</Subtitle> <Text>{overview}</Text> 
      </FlexContainer>
      
      {genres &&  <FlexContainer><Subtitle>Genres:</Subtitle> <p> {genres}.</p></FlexContainer> }
      <List>
            <li>
              <StyledLink to="cast" state={{ from: prevLocation }}>Cast</StyledLink>
            </li>
            <li>
              <StyledLink to="reviews" state={{ from: prevLocation }}>Reviews</StyledLink>
            </li>
          </List>
      </Description>
    </Section>
  );
};

MovieCard.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string,
    poster: PropTypes.string,
    overview: PropTypes.string,
    rating: PropTypes.number,
    genres: PropTypes.string,
  })
}

export default MovieCard;
