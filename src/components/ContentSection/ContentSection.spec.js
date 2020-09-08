import React from 'react';
import { render } from '@testing-library/react';

import ContentSection from './ContentSection';

const props = {
    onMovieIdChange: jest.fn()
};

describe('ContentSection Component', () => {
    it('should render the correct structure', () => {
        const { asFragment } = render(<ContentSection {...props} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
