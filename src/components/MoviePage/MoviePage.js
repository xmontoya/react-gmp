import styles from './MoviePage.scss';

import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MovieDetails from 'components/common/MovieDetails';
import TopSection from 'components/common/TopSection';

const MoviePage = () => {
    const { id: movieId } = useParams();

    const searchTopAction = (
        <Link className={styles.buttonTop} to="/">
            <FontAwesomeIcon icon="search" />
        </Link>
    );

    return (
        <Fragment>
            <TopSection action={searchTopAction} headerCls={styles.headerDetails}>
                <MovieDetails movieId={movieId} />
            </TopSection>
            <div className={styles.container} />
        </Fragment>
    );
};

export default MoviePage;
