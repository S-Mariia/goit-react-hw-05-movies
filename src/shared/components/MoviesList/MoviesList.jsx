import { lazy } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { List, Item, StyledLink } from "./MoviesList.styled";

const MovieItem = lazy(() => import("./MovieItem/MovieItem"));

const MoviesList = ({ items }) => {
    const location = useLocation();
    
    return (
        <List>
            {items.map((item, idx) => {
                return <StyledLink key={idx} to={`/movies/${item.id}`} state={{ from: location }}><Item><MovieItem info={item} /></Item></StyledLink>
            })}
        </List>
    )
};

MoviesList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string,
            vote_average: PropTypes.number.isRequired,
        }),
    ),
}

export default MoviesList; 