import { movieListTransform, movieTransform } from 'data/transforms/movies';

import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, GET_MOVIE, GET_MOVIES } from 'constants/actions';

const initialState = {
    movie: {
        genres: [],
        overview: '',
        posterPath: '',
        releaseDate: '',
        runtime: 0,
        title: ''
    },
    movies: []
};

const movieReducer = (state = initialState, action) => {
    if (action.type === ADD_MOVIE) {
        return {
            ...state,
            movies: state.movies.concat(movieTransform(action.payload))
        };
    }

    if (action.type === EDIT_MOVIE) {
        return {
            ...state,
            movie: movieTransform(action.payload)
        };
    }

    if (action.type === DELETE_MOVIE) {
        return {
            ...state,
            movies: state.movies.filter(movie => movie.id !== action.payload.id)
        };
    }

    if (action.type === GET_MOVIE) {
        return {
            ...state,
            movie: movieTransform(action.payload)
        };
    }

    if (action.type === GET_MOVIES) {
        return {
            ...state,
            movies: movieListTransform(action.payload)
        };
    }

    return state;
};

export default movieReducer;
