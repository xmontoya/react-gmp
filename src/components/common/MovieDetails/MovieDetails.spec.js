import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import movieStore from 'redux/store/movieStore';

import MovieDetails from './MovieDetails';

jest.mock('redux/actions/MovieActions');

describe('MovieDetails Component', () => {
    const setup = () => render(
        <Provider store={movieStore}>
            <MovieDetails movieId={393} />
        </Provider>
    );

    it('should render the correct structure', () => {
        const { asFragment } = setup();

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render correct info for selected movie.', () => {
        const { getByText } = setup();

        expect(getByText('Kill Bill: Vol. 2')).toBeInTheDocument();
        expect(getByText('7.7')).toBeInTheDocument();
        expect(getByText('Action, Crime, Thriller')).toBeInTheDocument();
        expect(getByText('2004')).toBeInTheDocument();
        expect(getByText('136 min')).toBeInTheDocument();
    });
});
