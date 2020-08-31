import styles from './MovieMenu.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/common/Button';

import { DELETE, EDIT } from 'constants/Labels';

const COMPONENT_PROPS = {
    show: PropTypes.bool,
    onCloseMenu: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
};

const DEFAULT_PROPS = {
    show: true
};

const MovieMenu = ({ show, onCloseMenu, onDelete, onEdit }) => {
    const showCls = !show ? styles.menuDisplayNone : null;

    return (
        <div className={classnames(styles.default, showCls)}>
            <Button className={styles.closeButton} onClick={onCloseMenu}>
                <FontAwesomeIcon icon="times" />
            </Button>
            <ul className={styles.menuList}>
                <li className={styles.menuElement}>
                    <Button className={styles.menuButton} onClick={onEdit}>
                        {EDIT}
                    </Button>
                </li>
                <li className={styles.menuElement}>
                    <Button className={styles.menuButton} onClick={onDelete}>
                        {DELETE}
                    </Button>
                </li>
            </ul>
        </div>
    );
};

MovieMenu.propTypes = COMPONENT_PROPS;
MovieMenu.defaultProps = DEFAULT_PROPS;

export default MovieMenu;
