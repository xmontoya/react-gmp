import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App Component', () => {
    it('should render the correct structure', () => {
        const { asFragment } = render(<App />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render FIND YOUR MOVIE section.', async () => {
        const { findByText } = render(<App />);

        expect(await findByText('FIND YOUR MOVIE')).toBeInTheDocument();
    });
});
