import styles from './SearchBar.scss';

import React, { Fragment } from 'react';

import Button from 'components/common/Button';

import { SEARCH } from 'constants/Labels';

const SearchBar = () => (
    <Fragment>
        <span className={styles.searchTitle}>FIND YOUR MOVIE</span>
        <div className={styles.searchSection}>
            <div className={styles.searchBar}>
                <input type="text" placeholder="What do you want to watch?" />
            </div>
            <Button className={styles.searchMoviesButton}>
                {SEARCH}
            </Button>
        </div>
    </Fragment>
);

export default SearchBar;
