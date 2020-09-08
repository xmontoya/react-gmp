import styles from './DeleteMovieModal.scss';

import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'components/common/Button';
import Modal from 'components/common/Modal';

import { deleteMovie } from 'redux/actions/movieActions';

import { CONFIRM, DELETE_MOVIE } from 'constants/Labels';

const mapStateToProps = state => ({ movies: state.movies });

const COMPONENT_PROPS = {
    deleteMovie: PropTypes.func.isRequired,
    movieId: PropTypes.number,
    show: PropTypes.bool.isRequired,
    onCloseModal: PropTypes.func.isRequired
};

const DEFAULT_PROPS = {
    movieId: null
};

const ModalContainer = ({ deleteMovie, movieId, show, onCloseModal }) => {
    const handleConfirmClick = useCallback(() => {
        deleteMovie(movieId);
        onCloseModal();
    }, [deleteMovie, movieId, onCloseModal]);

    return (
        <Modal show={show} onCloseModal={onCloseModal}>
            <section className={styles.deleteMessage}>
                <span className={styles.title}>{DELETE_MOVIE}</span>
                <div className={styles.body}>
                    <span>Are you sure you want to delete this movie?</span>
                </div>
                <div className={styles.footer}>
                    <Button className={styles.confirmButton} onClick={handleConfirmClick}>
                        {CONFIRM}
                    </Button>
                </div>
            </section>
        </Modal>
    );
};

ModalContainer.propTypes = COMPONENT_PROPS;
ModalContainer.defaultProps = DEFAULT_PROPS;

const DeleteMovieModal = connect(mapStateToProps, { deleteMovie })(ModalContainer);

export default DeleteMovieModal;
