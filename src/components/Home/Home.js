import styles from './Home.scss';

import React, { useState } from 'react';

import Menu from 'components/common/Menu';

import MovieList from 'components/MovieList';

import movies from 'data/mocks/movies';

const sortMovies = property => {
    return (a, b) => {
        if(a[property] < b[property]){
                return -1;
        }else if(a[property] > b[property]){
                return 1;
        }else{
                return 0;
        }
    };
};

const Home = () => {
    const [sorting, setSorting] = useState('release_date');
    const handleSortingChange = sortingValue => {
        setSorting(sortingValue);
    };

    movies.sort(sortMovies(sorting));

    return (
        <div className={styles.container}>
            <Menu sorting={sorting} onSortingChange={handleSortingChange} />
            <div className={styles.movieCount}>
                <span className={styles.movieCountLabel}><b>39</b> movies found</span>
            </div>
            <MovieList movies={movies} />
        </div>
    );
};

export default Home;
