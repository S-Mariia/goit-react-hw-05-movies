import { useState } from "react";


const MoviesSearchForm = ({onSubmit}) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(search);
        setSearch('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={search} type="text" name="search" placeholder="Enter movie title" />
            <button type="submit">Search</button>
        </form>
    )
}

export default MoviesSearchForm;