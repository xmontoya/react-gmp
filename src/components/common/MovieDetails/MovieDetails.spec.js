import React from 'react';
import { render } from '@testing-library/react';

import MovieDetails from './MovieDetails';

import { KILL_BILL_V2 } from 'data/mocks/movies';
import { movieTransform } from 'data/transforms/movies';

const mockMovie = movieTransform(KILL_BILL_V2);

describe('MovieDetails Component', () => {
    const setup = () => render(<MovieDetails movie={mockMovie} />);

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
