import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '7996fe522bdd7da96dc1490e5f962396',
    }
})


export const getPopularMovies = async (page = 1) => {
    const data = await instance.get('/trending/movie/week', { params: {page} });
    return data.data;
}

export const getMovieByName = async (query, page = 1) => {
    const data = await instance.get('/search/movie', {
        params: {
            query,
            page
        }
    });
    return data.data;
}

export const getMovieDetails = async id => {
    const data = await instance.get(`/movie/${id}`);
    return data.data;
}

export const getMovieCast = async id => {
    const data = await instance.get(`/movie/${id}/credits`);
    console.log(data.data.cast);
    return data.data.cast;
}

export const getMovieReviews = async id => {
    const data = await instance.get(`/movie/${id}/reviews`);
    return data.data.results;
}