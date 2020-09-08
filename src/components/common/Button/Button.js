import styles from './Button.scss';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

const COMPONENT_PROPS = {
    className: PropTypes.string,
    onClick: PropTypes.func
};

const DEFAULT_PROPS = {
    className: '',
    onClick: null
};

const Button = ({ children, className, onClick }) => {
    const cls = classnames([styles.default, className]);

    const handleClick = e => {
        e.preventDefault();

        if (!onClick) {
            return;
        }

        onClick();
    };

    return (
        <button className={cls} type="button" onClick={handleClick}>
            {children}
        </button>
    );
};

Button.propTypes = COMPONENT_PROPS;
Button.defaultProps = DEFAULT_PROPS;

export default Button;
