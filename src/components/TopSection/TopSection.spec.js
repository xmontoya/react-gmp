import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import movieStore from 'redux/store/movieStore';

import TopSection from './TopSection';

jest.mock('redux/actions/MovieActions');

const defaultProps = {
    moveId: null,
    onMovieIdChange: jest.fn()
};

describe('TopSection Component', () => {
    const setup = props => {
        const mockProps = {
            ...defaultProps,
            ...props
        };

        return render(<Provider store={movieStore}><TopSection {...mockProps} /></Provider>);
    };

    it('should render the correct structure', () => {
        const { asFragment } = setup();

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render Search bar when no movie Id is selected.', () => {
        const { getByText } = setup();

        expect(getByText('FIND YOUR MOVIE')).toBeInTheDocument();
        expect(getByText('SEARCH')).toBeInTheDocument();
    });

    it('should render movie info for selected movie Id.', async () => {
        const { getByText } = setup({ movieId: 393 });

        expect(getByText('Kill Bill: Vol. 2')).toBeInTheDocument();
        expect(getByText('Action, Crime, Thriller')).toBeInTheDocument();
    });
});
