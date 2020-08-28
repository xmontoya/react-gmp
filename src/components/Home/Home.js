import styles from './Home.scss';

import React from 'react';

import Menu from 'components/common/Menu';

import MovieList from 'components/MovieList';

import movies from 'data/mocks/movies';
console.log(movies);
const Home = () => {
    return (
        <div className={styles.container}>
            <Menu />
            <div className={styles.movieCount}>
                <span className={styles.movieCountLabel}><b>39</b> movies found</span>
            </div>
            <MovieList movies={movies} />
        </div>
    );
};

export default Home;
