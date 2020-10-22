import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import ContentSection from './ContentSection';

import movieStore from 'redux/store/movieStore';

jest.mock('redux/actions/MovieActions');

const props = {
    onMovieIdChange: jest.fn()
};

describe('ContentSection Component', () => {
    it('should render the correct structure', () => {
        const {
            asFragment
        } = render(<Provider store={movieStore}><ContentSection {...props} /></Provider>);

        expect(asFragment()).toMatchSnapshot();
    });
});
