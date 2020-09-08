import styles from './FormInput.scss';

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const COMPONENT_PROPS = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func
};

const DEFAULT_PROPS = {
    placeholder: '',
    type: 'text',
    value: '',
    onChange: null
};

const FormInput = ({ label, name, placeholder, type, value, onChange }) => {
    const handleChange = useCallback(e => {
        e.preventDefault();

        if (onChange) {
            onChange(e);
        }
    }, [onChange]);

    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor={name}>
                {label}
            </label>
            <input
                className={styles.inputField}
                name={name}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={handleChange} />
        </div>
    );
};

FormInput.propTypes = COMPONENT_PROPS;
FormInput.defaultProps = DEFAULT_PROPS;

export default FormInput;
