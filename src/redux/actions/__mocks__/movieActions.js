import {
    ADD_MOVIE,
    DELETE_MOVIE,
    EDIT_MOVIE,
    GET_MOVIE,
    GET_MOVIES
} from 'constants/actions';

import {
    PULP_FICTION,
    INSIDE_OUT,
    KILL_BILL_V2,
    AVENGERS_INFINITY_WAR,
    INCEPTION,
    RESERVOIR_DOGS } from 'data/mocks/movies';

const movieList = {
    data: [
        PULP_FICTION,
        INSIDE_OUT,
        KILL_BILL_V2,
        AVENGERS_INFINITY_WAR,
        INCEPTION,
        RESERVOIR_DOGS
    ]
};

export const addMovie = () => ({ type: ADD_MOVIE, payload: PULP_FICTION });

export const editMovie = () => ({ type: EDIT_MOVIE, payload: KILL_BILL_V2 });

export const deleteMovie = id => ({ type: DELETE_MOVIE, payload: { id } });

export const getMovies = () => ({ type: GET_MOVIES, payload: movieList });

export const getMovieById = () => ({ type: GET_MOVIE, payload: KILL_BILL_V2 });
