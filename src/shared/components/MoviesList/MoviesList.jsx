import { useLocation } from "react-router-dom";
import MovieItem from "./MovieItem/MovieItem";
import { List, Item, StyledLink } from "./MoviesList.styled";

const MoviesList = ({ items }) => {
    const location = useLocation();
    
    return (
        <List>
            {items.map(item => {
                return <StyledLink key={item.id} to={`/movies/${item.id}`} state={{ from: location }}><Item><MovieItem info={item} /></Item></StyledLink>
            })}
        </List>
    )
};

export default MoviesList; 