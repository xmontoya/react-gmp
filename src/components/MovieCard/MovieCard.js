import styles from './MovieCard.scss';

import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/common/Button';
import EditMovieModal from 'components/common/EditMovieModal';
import DeleteMovieModal from 'components/common/DeleteMovieModal';

import MovieMenu from './MovieMenu';

const COMPONENT_PROPS = {
    movie: PropTypes.shape({
        genres: PropTypes.array,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        title: PropTypes.string
    })
};

const DEFAULT_PROPS = {
    movie: null
};

const MovieCard = ({ movie }) => {
    const { genres, poster_path, title, release_date } = movie;
    const [showMenu, setShowMenu ] = useState(false);
    const [showDeleteModal, setShowDeleteModal ] = useState(false);

    const [showEditModal, setShowEditModal ] = useState(false);

    const handleShowEditModal = () => {
        setShowEditModal(true);
        setShowMenu(false);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    const handleShowDeleteModal = () => {
        setShowDeleteModal(true);
        setShowMenu(false);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const handleShowMenu = () => {
        setShowMenu(true);
    };

    const handleCloseMenu = () => {
        setShowMenu(false);
    };

    const [releaseYear] = release_date.split('-');
    const genresList = genres.join(', ');

    return (
        <Fragment>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Button className={styles.movieMenuButton} onClick={handleShowMenu}>
                        <FontAwesomeIcon icon="ellipsis-v" />
                    </Button>
                    <MovieMenu show={showMenu} onCloseMenu={handleCloseMenu} onDelete={handleShowDeleteModal} onEdit={handleShowEditModal}/>
                    <img src={poster_path} />
                </div>
                <div className={styles.info}>
                    <div className={styles.titleSection}>
                        <span className={styles.title}>{title}</span>
                        <span className={styles.year}>{releaseYear}</span>
                    </div>
                    <div className={styles.footer}>
                        <p className={styles.categories}>{genresList}</p>
                    </div>
                </div>
            </div>
            <EditMovieModal movie={movie} show={showEditModal} onCloseModal={handleCloseEditModal} />
            <DeleteMovieModal show={showDeleteModal} onCloseModal={handleCloseDeleteModal} />
        </Fragment>
    );
};

MovieCard.propTypes = COMPONENT_PROPS;
MovieCard.defaultProps = DEFAULT_PROPS;

export default MovieCard;
