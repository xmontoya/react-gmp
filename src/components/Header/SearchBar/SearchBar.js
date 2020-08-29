import styles from './SearchBar.scss';

import React, { Fragment } from 'react';

import Button from 'components/common/Button';

const SearchBar = () => {
    return (
        <Fragment>
            <span className={styles.searchTitle}>FIND YOUR MOVIE</span>
            <div className={styles.searchSection}>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="What do you want to watch?" />
                </div>
                <Button className={styles.searchMoviesButton} label="SEARCH" />
            </div>
        </Fragment>
    );
};

export default SearchBar;
