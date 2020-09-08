import { GET_MOVIE, GET_MOVIES } from 'constants/actions';

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

export const getMovies = () => ({ type: GET_MOVIES, payload: movieList });

export const getMovieById = () => ({ type: GET_MOVIE, payload: KILL_BILL_V2 });
