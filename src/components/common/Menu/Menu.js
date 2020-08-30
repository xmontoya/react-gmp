import styles from './Menu.scss';

import React from 'react';
import PropTypes from 'prop-types';

import FormDropdown from 'components/common/FormDropdown';

import {RELEASE_DATE, TITLE} from 'constants/Labels';

const COMPONENT_PROPS = {
    sorting: PropTypes.string,
    onSortingChange: PropTypes.func
};

const LEFT_SECTION = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];
const SORT_OPTIONS = [{
    label: RELEASE_DATE,
    value: 'release_date'
}, {
    label: TITLE,
    value: 'title'
}];

const leftSection = LEFT_SECTION.map((section, index) => <p key={index}>{section}</p>);

const Menu = ({ sorting, onSortingChange}) => {
    return (
        <div className={styles.mainMenu}>
            <div className={styles.leftSection}>
                {leftSection}
            </div>
            <div className={styles.rightSection}>
                <p style={{float: 'left' }} >SORT BY</p>
                <FormDropdown name="sortBy" options={SORT_OPTIONS} value={sorting} onChange={onSortingChange} />
            </div>
        </div>
    );
};

Menu.propTypes = COMPONENT_PROPS;

export default Menu;
