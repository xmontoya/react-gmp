import styles from './SearchBar.scss';

import React, { Fragment, useCallback, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from 'components/common/Button';

import { SEARCH } from 'constants/Labels';

const COMPONENT_PROPS = {
    // eslint-disable-next-line react/forbid-prop-types
    history: PropTypes.object.isRequired
};

const SearchBar = ({ history }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchValueChange = useCallback(e => {
        setSearchValue(e.target.value);
    }, [setSearchValue]);

    const handleSearchClick = () => {
        const searchUrl = `/search/${encodeURI(searchValue)}`;
        history.push(searchUrl);
    };

    return (
        <Fragment>
            <span className={styles.searchTitle}>FIND YOUR MOVIE</span>
            <div className={styles.searchSection}>
                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="What do you want to watch?"
                        value={searchValue}
                        onChange={handleSearchValueChange} />
                </div>
                <Button className={styles.searchMoviesButton} onClick={handleSearchClick}>
                    {SEARCH}
                </Button>
            </div>
        </Fragment>
    );
};

SearchBar.propTypes = COMPONENT_PROPS;

export default withRouter(SearchBar);
