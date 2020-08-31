import styles from './FormInput.scss';

import React from 'react';
import PropTypes from 'prop-types';

const COMPONENT_PROPS = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any
};

const DEFAULT_PROPS = {
    placeholder: '',
    type: 'text',
    value: '',
};

const FormInput = ({ label, name, placeholder, type, value }) => {

    const handleChange = e => {
        e.preventDefault();
    };

    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor={name} >
                {label}
            </label>
            <input className={styles.inputField} name={name} placeholder={placeholder} type={type} value={value} onChange={handleChange} />
        </div>
    );
};

FormInput.propTypes = COMPONENT_PROPS;
FormInput.defaultProps = DEFAULT_PROPS;

export default FormInput;
