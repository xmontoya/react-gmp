import styles from './DeleteMovieModal.scss';

import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/common/Button';
import Modal from 'components/common/Modal';

import { CONFIRM, DELETE_MOVIE } from 'constants/Labels';

const COMPONENT_PROPS = {
    movie: PropTypes.object,
    show: PropTypes.bool,
    onCloseModal: PropTypes.func
};

const DEFAULT_PROPS = {
    movie: null
};

const EditMovieModal = ({ movie, show, onCloseModal }) => {
    return (
        <Modal show={show} onCloseModal={onCloseModal}>
            <section className={styles.deleteMessage}>
                <span className={styles.title}>{DELETE_MOVIE}</span>
                <div className={styles.body}>
                    <span>Are you sure you want to delete this movie?</span>
                </div>
                <div className={styles.footer}>
                    <Button className={styles.confirmButton}>
                        {CONFIRM}
                    </Button>
                </div>
            </section>
        </Modal>
    );
};

EditMovieModal.propTypes = COMPONENT_PROPS;
EditMovieModal.defaultProps = DEFAULT_PROPS;

export default EditMovieModal;
