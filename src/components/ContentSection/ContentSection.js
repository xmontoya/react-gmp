import styles from './ContentSection.scss';

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import Menu from 'components/common/Menu';
import MovieList from 'components/common/MovieList';

const COMPONENT_PROPS = {
    onMovieIdChange: PropTypes.func.isRequired
};

const ContentSection = ({ onMovieIdChange }) => {
    const [sorting, setSorting] = useState('release_date');

    const handleSortingChange = useCallback(sortingValue => {
        setSorting(sortingValue);
    }, [setSorting]);

    return (
        <div className={styles.mainContent}>
            <div className={styles.container}>
                <Menu sorting={sorting} onSortingChange={handleSortingChange} />
                <div className={styles.movieCount}>
                    <span className={styles.movieCountLabel}>
                        39 movies found
                    </span>
                </div>
                <MovieList sorting={sorting} onMovieIdChange={onMovieIdChange} />
            </div>
        </div>
    );
};

ContentSection.propTypes = COMPONENT_PROPS;

export default ContentSection;
