import styles from './Modal.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/common/Button';

const COMPONENT_PROPS = {
    show: PropTypes.bool.isRequired,
    onCloseModal: PropTypes.func.isRequired
};

const Modal = ({ children, show, onCloseModal }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={styles.modal}>
            <section className={styles.modalMain}>
                <Button className={styles.closeButton} onClick={onCloseModal}>
                    <FontAwesomeIcon icon="times" />
                </Button>
                <div className={styles.modalBody}>
                    {children}
                </div>
            </section>
        </div>
    );
};

Modal.propTypes = COMPONENT_PROPS;

export default Modal;
