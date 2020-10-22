import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import EditMovieModal from './EditMovieModal';

import movieStore from 'redux/store/movieStore';

import * as Labels from 'constants/Labels';

import { KILL_BILL_V2 } from 'data/mocks/movies';

const mockOnCloseModal = jest.fn();

const defaultProps = {
    show: true,
    onCloseModal: mockOnCloseModal
};

jest.mock('redux/actions/MovieActions');

describe('EditMovieModal Component', () => {
    const setup = props => {
        const testProps = {
            ...defaultProps,
            ...props
        };

        return render(<Provider store={movieStore}><EditMovieModal {...testProps} /></Provider>);
    };

    it('should render the correct structure', () => {
        const { asFragment } = setup();

        expect(asFragment()).toMatchSnapshot();
    });

    it('should show error when Submit is clicked with empty fields', async () => {
        const { findAllByText, findByText, getByText } = setup();

        const submitBtn = getByText(Labels.SUBMIT);

        expect(submitBtn).toBeInTheDocument();
        userEvent.click(submitBtn);

        const errorMessages = await findAllByText('Required');

        expect(errorMessages[0]).toBeInTheDocument();

        const runtimeError = await findByText('Runtime must be a number greater than zero');

        expect(runtimeError).toBeInTheDocument();
    });

    it('should render movie values when id prop is passed', async () => {
        const { getByLabelText } = setup({ movieId: KILL_BILL_V2.id });

        const titleInput = getByLabelText(Labels.TITLE);

        expect(titleInput).toBeInTheDocument();
        expect(titleInput.value).toBe(KILL_BILL_V2.title);
    });

    it('should call onCloseModal when x is clicked', async () => {
        const { getAllByRole } = setup({ movieId: KILL_BILL_V2.id });

        const modalButtons = getAllByRole('button');

        userEvent.click(modalButtons[0]);
        expect(mockOnCloseModal).toHaveBeenCalled();
    });
});
