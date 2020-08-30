import styles from './Modal.scss';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/common/Button';

const COMPONENT_PROPS = {
    show: PropTypes.bool,
    onCloseModal: PropTypes.func
};

const Modal = ({ children, show, onCloseModal }) => {
    const showHideClassName = show ? styles.displayBlock : styles.displayNone;

    return (
        <div className={classnames(styles.modal, showHideClassName)}>
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