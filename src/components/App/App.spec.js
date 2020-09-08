import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import App from './App';

import movieStore from 'redux/store/movieStore';

jest.mock('redux/actions/MovieActions');

describe('App Component', () => {
    const setup = () => render(<Provider store={movieStore}><App /></Provider>);

    it('should render the correct structure', () => {
        const { asFragment } = setup();

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render FIND YOUR MOVIE section.', async () => {
        const { findByText } = setup();

        expect(await findByText('FIND YOUR MOVIE')).toBeInTheDocument();
    });
});
