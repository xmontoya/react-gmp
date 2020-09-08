import styles from './DeleteMovieModal.scss';

import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/common/Button';
import Modal from 'components/common/Modal';

import { CONFIRM, DELETE_MOVIE } from 'constants/Labels';

const COMPONENT_PROPS = {
    show: PropTypes.bool.isRequired,
    onCloseModal: PropTypes.func.isRequired
};

const EditMovieModal = ({ show, onCloseModal }) => (
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

EditMovieModal.propTypes = COMPONENT_PROPS;

export default EditMovieModal;
