import styles from './FormDropdown.scss';

import React from 'react';
import PropTypes from 'prop-types';

const COMPONENT_PROPS = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func
};

const DEFAULT_PROPS = {
    label: '',
    value: '',
    onChange: null
};

const FormDropdown = ({ label, name, options, value, onChange }) => {
    const handleChange = e => {
        e.preventDefault();

        if (!onChange) {
            return;
        }

        onChange(e.target.value);
    };

    const dropdownLabel = label && (
        <label className={styles.inputLabel} htmlFor={name}>
            {label}
        </label>
    );

    const dropdownOptions = options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
    ));

    return (
        <div className={styles.inputContainer}>
            {dropdownLabel}
            <select className={styles.inputField} value={value} onChange={handleChange}>
                {dropdownOptions}
            </select>
        </div>
    );
};

FormDropdown.propTypes = COMPONENT_PROPS;
FormDropdown.defaultProps = DEFAULT_PROPS;

export default FormDropdown;
