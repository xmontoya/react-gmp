import styles from './MovieList.scss';

import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'components/common/Button';
import EditMovieModal from 'components/common/EditMovieModal';
import DeleteMovieModal from 'components/common/DeleteMovieModal';

import MovieCard from 'components/common/MovieCard';

import { getMovies } from 'redux/actions/movieActions';

import { NEXT, PREVIOUS, NO_MOVIES_FOUND } from 'constants/Labels';

const mapStateToProps = state => ({ movies: state.movies });

const COMPONENT_PROPS = {
    getMovies: PropTypes.func.isRequired,
    movies: PropTypes.arrayOf(PropTypes.shape({
        genres: PropTypes.array,
        posterPath: PropTypes.string,
        title: PropTypes.string,
        releaseDate: PropTypes.string
    })),
    filter: PropTypes.string,
    query: PropTypes.string,
    sorting: PropTypes.string
};

const DEFAULT_PROPS = {
    movies: [],
    filter: '',
    query: '',
    sorting: 'release_date'
};

const ListContainer = ({ getMovies, movies, filter, query, sorting }) => {
    const [movieId, setMovieId] = useState(null);
    const [offset, setOffset] = useState(0);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        getMovies(10, filter, offset, query, sorting);
    }, [getMovies, filter, offset, query, sorting]);

    const handleShowEditModal = useCallback(selectedMovieId => {
        setMovieId(selectedMovieId);
        setShowEditModal(true);
    }, [setMovieId, setShowEditModal]);

    const handleCloseEditModal = useCallback(() => {
        setMovieId(null);
        setShowEditModal(false);
    }, [setMovieId, setShowEditModal]);

    const handleShowDeleteModal = useCallback(selectedMovieId => {
        setMovieId(selectedMovieId);
        setShowDeleteModal(true);
    }, [setMovieId, setShowDeleteModal]);

    const handleCloseDeleteModal = useCallback(() => {
        setMovieId(null);
        setShowDeleteModal(false);
    }, [setMovieId, setShowDeleteModal]);

    const handleClickPrevious = useCallback(() => {
        const provOffset = offset > 10 ? offset - 10 : 0;
        setOffset(provOffset);
    }, [offset, setOffset]);

    const handleClickNext = useCallback(() => {
        setOffset(offset + 10);
    }, [offset, setOffset]);

    const movieList = movies.map(movie => (
        <MovieCard
            key={movie.id}
            movie={movie}
            onShowDeleteModal={handleShowDeleteModal}
            onShowEditModal={handleShowEditModal} />
    ));

    const noMoviesFound = !movies.length && (
        <div className={styles.noMoviesFound}>
            <p>{NO_MOVIES_FOUND}</p>
        </div>
    );

    const previousButton = offset > 0 && (
        <Button className={styles.pagination} onClick={handleClickPrevious}>
            {PREVIOUS}
        </Button>
    );

    const nextButton = Boolean(movies.length) && (
        <Button className={styles.pagination} onClick={handleClickNext}>
            {NEXT}
        </Button>
    );

    return (
        <Fragment>
            {noMoviesFound}
            <div className={styles.list}>
                {movieList}
            </div>
            <div>
                {previousButton}
                {nextButton}
            </div>
            <EditMovieModal
                movieId={movieId}
                show={showEditModal}
                onCloseModal={handleCloseEditModal} />
            <DeleteMovieModal
                movieId={movieId}
                show={showDeleteModal}
                onCloseModal={handleCloseDeleteModal} />
        </Fragment>
    );
};

ListContainer.propTypes = COMPONENT_PROPS;
ListContainer.defaultProps = DEFAULT_PROPS;

const MovieList = connect(mapStateToProps, { getMovies })(ListContainer);

export default MovieList;
