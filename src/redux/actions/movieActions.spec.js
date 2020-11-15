import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { addMovie, getMovies, getMovieById, deleteMovie, editMovie } from './movieActions';

import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, GET_MOVIE, GET_MOVIES } from 'constants/actions';
import { API_URL } from 'constants/http';

import {
    PULP_FICTION,
    INSIDE_OUT,
    KILL_BILL_V2
} from 'data/mocks/movies';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('MovieActions', () => {
    afterEach(() => fetchMock.restore());

    it('should handle addMovie', () => {
        fetchMock.postOnce(`${API_URL}movies`, { body: PULP_FICTION });

        const movie = {
            genres: PULP_FICTION.genres,
            overview: PULP_FICTION.overview,
            posterPath: PULP_FICTION.poster_path,
            releaseDate: PULP_FICTION.release_date,
            voteAverage: PULP_FICTION.vote_average,
            runtime: PULP_FICTION.runtime,
            title: PULP_FICTION.title
        };
        const response = { type: ADD_MOVIE, payload: PULP_FICTION };
        const store = mockStore({});

        return store.dispatch(addMovie(movie)).then(() => {
            expect(store.getActions()).toEqual([response]);
        });
    });

    it('should handle editMovie', () => {
        fetchMock.putOnce(`${API_URL}movies`, { body: KILL_BILL_V2 });

        const movie = {
            id: KILL_BILL_V2.id,
            genres: KILL_BILL_V2.genres,
            overview: KILL_BILL_V2.overview,
            posterPath: KILL_BILL_V2.poster_path,
            releaseDate: KILL_BILL_V2.release_date,
            voteAverage: KILL_BILL_V2.vote_average,
            runtime: KILL_BILL_V2.runtime,
            title: KILL_BILL_V2.title
        };
        const response = { type: EDIT_MOVIE, payload: KILL_BILL_V2 };
        const store = mockStore({});

        return store.dispatch(editMovie(movie)).then(() => {
            expect(store.getActions()).toEqual([response]);
        });
    });

    it('should handle deleteMovie', async () => {
        fetchMock.deleteOnce(`${API_URL}movies/${INSIDE_OUT.id}`, {});

        const response = { type: DELETE_MOVIE, payload: { id: INSIDE_OUT.id } };
        const store = mockStore({});

        return store.dispatch(deleteMovie(INSIDE_OUT.id)).then(() => {
            expect(store.getActions()).toEqual([response]);
        });
    });

    it('should handle getMovieById', () => {
        fetchMock.getOnce(`${API_URL}movies/${INSIDE_OUT.id}`, { body: INSIDE_OUT });

        const response = { type: GET_MOVIE, payload: INSIDE_OUT };
        const store = mockStore({});

        return store.dispatch(getMovieById(INSIDE_OUT.id)).then(() => {
            expect(store.getActions()).toEqual([response]);
        });
    });

    it('should handle getMovies', () => {
        fetchMock.getOnce(
            `${API_URL}movies?limit=2&offset=0&sortBy=release_date&sortOrder=desc`,
            { body: { data: [PULP_FICTION, INSIDE_OUT] } }
        );

        const response = { type: GET_MOVIES, payload: { data: [PULP_FICTION, INSIDE_OUT] } };
        const store = mockStore({});

        return store.dispatch(getMovies(2, undefined, 0)).then(() => {
            expect(store.getActions()).toEqual([response]);
        });
    });

    it('should handle getMovies with no results', () => {
        fetchMock.getOnce(
            `${API_URL}movies?limit=1&offset=0&sortBy=release_date&sortOrder=desc`,
            { body: { data: [] } }
        );

        const response = { type: GET_MOVIES, payload: { data: [] } };
        const store = mockStore({});

        return store.dispatch(getMovies(1, undefined, 0)).then(() => {
            expect(store.getActions()).toEqual([response]);
        });
    });
});
