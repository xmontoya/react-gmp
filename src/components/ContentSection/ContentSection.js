import styles from './ContentSection.scss';

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import Menu from 'components/common/Menu';
import MovieList from 'components/common/MovieList';

import { movies } from 'data/api/movies';

const sortMovies = property => (a, b) => {
    if (a[property] < b[property]) {
        return -1;
    } else if (a[property] > b[property]) {
        return 1;
    }

    return 0;
};

const COMPONENT_PROPS = {
    onMovieIdChange: PropTypes.func.isRequired
};

const ContentSection = ({ onMovieIdChange }) => {
    const [sorting, setSorting] = useState('release_date');

    const handleSortingChange = useCallback(sortingValue => {
        setSorting(sortingValue);
    }, [setSorting]);

    movies.sort(sortMovies(sorting));

    return (
        <div className={styles.mainContent}>
            <div className={styles.container}>
                <Menu sorting={sorting} onSortingChange={handleSortingChange} />
                <div className={styles.movieCount}>
                    <span className={styles.movieCountLabel}>
                        39 movies found
                    </span>
                </div>
                <MovieList movies={movies} onMovieIdChange={onMovieIdChange} />
            </div>
        </div>
    );
};

ContentSection.propTypes = COMPONENT_PROPS;

export default ContentSection;
