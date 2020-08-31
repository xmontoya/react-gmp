import styles from './MovieList.scss';

import React, { Fragment, useCallback, useState } from 'react';

import PropTypes from 'prop-types';

import EditMovieModal from 'components/common/EditMovieModal';
import DeleteMovieModal from 'components/common/DeleteMovieModal';

import MovieCard from 'components/common/MovieCard';

const COMPONENT_PROPS = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        genres: PropTypes.array,
        posterPath: PropTypes.string,
        title: PropTypes.string,
        releaseDate: PropTypes.string
    })),
    onMovieIdChange: PropTypes.func.isRequired
};

const DEFAULT_PROPS = {
    movies: []
};

const MovieList = ({ movies, onMovieIdChange }) => {
    const [movieId, setMovieId] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [showEditModal, setShowEditModal] = useState(false);

    const handleShowEditModal = useCallback(selectedMovieId => {
        setMovieId(selectedMovieId);
        setShowEditModal(true);
    }, [setMovieId, setShowEditModal]);

    const handleCloseEditModal = useCallback(() => {
        setMovieId(null);
        setShowEditModal(false);
    }, [setMovieId, setShowEditModal]);

    const handleShowDeleteModal = useCallback(() => {
        setShowDeleteModal(true);
    }, [setShowDeleteModal]);

    const handleCloseDeleteModal = useCallback(() => {
        setShowDeleteModal(false);
    }, [setShowDeleteModal]);

    const movieList = movies.map(movie => (
        <MovieCard
            key={movie.id}
            movie={movie}
            onMovieIdChange={onMovieIdChange}
            onShowDeleteModal={handleShowDeleteModal}
            onShowEditModal={handleShowEditModal} />
    ));

    return (
        <Fragment>
            <div className={styles.list}>
                {movieList}
            </div>
            <EditMovieModal
                movieId={movieId}
                show={showEditModal}
                onCloseModal={handleCloseEditModal} />
            <DeleteMovieModal
                show={showDeleteModal}
                onCloseModal={handleCloseDeleteModal} />
        </Fragment>
    );
};

MovieList.propTypes = COMPONENT_PROPS;
MovieList.defaultProps = DEFAULT_PROPS;

export default MovieList;
