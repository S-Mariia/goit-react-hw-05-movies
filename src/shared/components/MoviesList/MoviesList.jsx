import { Link, useLocation } from "react-router-dom";
import MovieItem from "./MovieItem/MovieItem";
import { List, Wrapper } from "./MoviesList.styled";

const MoviesList = ({ items }) => {
    const location = useLocation();
    
    return (
        <List>
            {items.map(item => {
                return <Wrapper key={item.id}><Link to={`/movies/${item.id}`} state={{ from: location }}><MovieItem info={item} /></Link></Wrapper>
            })}
        </List>
    )
};

export default MoviesList; 