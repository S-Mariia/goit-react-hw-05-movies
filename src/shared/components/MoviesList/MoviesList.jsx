import { Link, useLocation } from "react-router-dom";
import MovieItem from "./MovieItem/MovieItem";

const MoviesList = ({ items }) => {
    const location = useLocation();
    
    return (
        <ul>
            {items.map(item => {
                return <li key={item.id}><Link to={`/movies/${item.id}`} state={{ from: location }}><MovieItem info={item} /></Link></li>
            })}
        </ul>
    )
};

export default MoviesList; 