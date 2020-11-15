import movieReducer from './movieReducer';

import { movieListTransform, movieTransform } from 'data/transforms/movies';

import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, GET_MOVIE, GET_MOVIES } from 'constants/actions';

import { PULP_FICTION } from 'data/mocks/movies';

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

describe('movieReducer', () => {
    const setup = (state, action) => movieReducer(state, action);

    it('should return the initial state', () => {
        expect(setup(undefined, {})).toEqual(initialState);
    });

    it('should handle ADD_MOVIE', () => {
        const action = {
            type: ADD_MOVIE,
            payload: { data: PULP_FICTION }
        };

        const movies = [movieTransform({ data: PULP_FICTION })];

        expect(setup(undefined, action)).toEqual({ ...initialState, movies });
    });

    it('should handle EDIT_MOVIE', () => {
        const action = {
            type: EDIT_MOVIE,
            payload: PULP_FICTION
        };

        const movie = movieTransform(PULP_FICTION);

        expect(setup(undefined, action)).toEqual({ ...initialState, movie });
    });

    it('should handle DELETE_MOVIE', () => {
        const testState = {
            ...initialState,
            movies: movieListTransform({ data: [PULP_FICTION] })
        };

        const action = {
            type: DELETE_MOVIE,
            payload: { id: PULP_FICTION.id }
        };

        expect(setup(testState, action)).toEqual({ ...initialState, movies: [] });
    });

    it('should handle GET_MOVIE', () => {
        const action = {
            type: GET_MOVIE,
            payload: PULP_FICTION
        };

        const movie = movieTransform(PULP_FICTION);

        expect(setup(undefined, action)).toEqual({ ...initialState, movie });
    });

    it('should handle GET_MOVIES', () => {
        const action = {
            type: GET_MOVIES,
            payload: { data: [PULP_FICTION] }
        };

        const movies = movieListTransform({ data: [PULP_FICTION] });

        expect(setup(undefined, action)).toEqual({ ...initialState, movies });
    });
});
