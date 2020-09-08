import styles from './Menu.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FormDropdown from 'components/common/FormDropdown';

import { RATING, RELEASE_DATE, TITLE } from 'constants/Labels';

const COMPONENT_PROPS = {
    filter: PropTypes.string.isRequired,
    sorting: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
    onSortingChange: PropTypes.func.isRequired
};

const MOVIE_FILTERS = [{
    label: 'ALL',
    value: ''
}, {
    label: 'ACTION',
    value: 'Action'
}, {
    label: 'COMEDY',
    value: 'Comedy'
}, {
    label: 'ANIMATION',
    value: 'Animation'
}];

const SORT_OPTIONS = [{
    label: RELEASE_DATE,
    value: 'release_date'
}, {
    label: TITLE,
    value: 'title'
}, {
    label: RATING,
    value: 'vote_average'
}];

const Menu = ({ filter, sorting, onFilterChange, onSortingChange }) => {
    const movieFilters = MOVIE_FILTERS.map(({ label, value }) => {
        const selectedClass = filter === value ? styles.selected : null;
        return (
            <button
                className={classnames(styles.filterButton, selectedClass)}
                key={label}
                type="button"
                onClick={() => onFilterChange(value)}>
                {label}
            </button>
        );
    });

    return (
        <div className={styles.mainMenu}>
            <div className={styles.leftSection}>
                {movieFilters}
            </div>
            <div className={styles.rightSection}>
                <p style={{ float: 'left' }}>SORT BY</p>
                <FormDropdown name="sortBy" options={SORT_OPTIONS} value={sorting} onChange={onSortingChange} />
            </div>
        </div>
    );
};

Menu.propTypes = COMPONENT_PROPS;

export default Menu;
