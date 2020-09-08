import React from 'react';
import { render } from '@testing-library/react';

import TopSection from './TopSection';

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

        return render(<TopSection {...mockProps} />);
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
        const { getByText } = setup({ movieId: 150540 });

        expect(getByText('Inside Out')).toBeInTheDocument();
        expect(getByText('Drama, Comedy, Animation, Family')).toBeInTheDocument();
    });
});
