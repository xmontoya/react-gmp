import styles from './MovieList.scss';

import React from 'react';

import PropTypes from 'prop-types'

import MovieCard from "./MovieCard";

const COMPONENT_PROPS = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        categories: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.number
    }))
};

const DEFAULT_PROPS = {
    movies: []
};

const MovieList = ({ movies }) => {
    const movieList = movies.map((movie, index) => <MovieCard key={index} movie={movie} />);

    return (
        <div className={styles.list}>
            {movieList}
        </div>
    );
}

MovieList.propTypes = COMPONENT_PROPS;
MovieList.defaultProps = DEFAULT_PROPS;

export default MovieList;
