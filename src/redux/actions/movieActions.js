import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, GET_MOVIE, GET_MOVIES } from 'constants/actions';
import { API_URL, HEADER, DELETE, GET, POST, PUT } from 'constants/http';

const getRequestMovie = data => {
    const {
        posterPath,
        releaseDate,
        voteAverage,
        genres,
        ...otherData
    } = data;

    const genresList = typeof genres === 'string' ? genres.split(',') : genres;

    return {
        ...otherData,
        genres: genresList,
        poster_path: posterPath,
        release_date: releaseDate,
        vote_average: voteAverage
    };
};

export const addMovie = data => {
    const url = `${API_URL}movies`;
    const bodyData = getRequestMovie(data);

    return async dispatch => {
        const response = await fetch(url, {
            method: POST,
            headers: HEADER,
            body: JSON.stringify(bodyData)
        });
        const json = await response.json();

        return dispatch({ type: ADD_MOVIE, payload: json });
    };
};

export const editMovie = data => {
    const url = `${API_URL}movies`;
    const bodyData = getRequestMovie(data);

    return async dispatch => {
        const response = await fetch(url, {
            method: PUT,
            headers: HEADER,
            body: JSON.stringify(bodyData)
        });
        const json = await response.json();

        return dispatch({ type: EDIT_MOVIE, payload: json });
    };
};

export const deleteMovie = id => {
    const url = `${API_URL}movies/${id}`;

    return async dispatch => {
        await fetch(url, { method: DELETE });

        return dispatch({ type: DELETE_MOVIE, payload: { id } });
    };
};

export const getMovies = (limit = 10, filter = '', offset = 0, sortBy = 'release_date') => {
    const MovieFilter = filter ? `&filter=${filter}` : '';
    const url = `${API_URL}movies?limit=${limit}&offset=${offset}&sortBy=${sortBy}&sortOrder=desc${MovieFilter}`;

    return async dispatch => {
        const response = await fetch(url, { method: GET });
        const json = await response.json();

        return dispatch({ type: GET_MOVIES, payload: json });
    };
};

export const getMovieById = id => {
    const url = `${API_URL}movies/${id}`;

    return async dispatch => {
        const response = await fetch(url, { method: GET });
        const json = await response.json();

        return dispatch({ type: GET_MOVIE, payload: json });
    };
};
