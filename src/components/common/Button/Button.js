import styles from './Button.scss';

import React from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

const COMPONENT_PROPS = {
    className: PropTypes.string,
    label: PropTypes.string
};

const DEFAULT_PROPS = {
    className: ''
};

const Button = ({className, label}) => {
    return (
        <button className={classnames(styles.button, className)}>
            {label}
        </button>
    );
};

Button.propTypes = COMPONENT_PROPS;
Button.defaultProps = DEFAULT_PROPS;

export default Button;
