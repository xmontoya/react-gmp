import styles from './MovieCard.scss';

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/common/Button';

import MovieMenu from './MovieMenu';

const MOVIE_IMAGE_DEFAULT = 'src/assets/images/not-found.png';

const COMPONENT_PROPS = {
    movie: PropTypes.shape({
        id: PropTypes.number,
        genres: PropTypes.array,
        posterPath: PropTypes.string,
        releaseDate: PropTypes.string,
        title: PropTypes.string
    }),
    onMovieIdChange: PropTypes.func.isRequired,
    onShowDeleteModal: PropTypes.func.isRequired,
    onShowEditModal: PropTypes.func.isRequired
};

const DEFAULT_PROPS = {
    movie: null
};

const MovieCard = ({ movie, onMovieIdChange, onShowDeleteModal, onShowEditModal }) => {
    const { id, genres, posterPath, title, releaseDate } = movie;
    const [showMenu, setShowMenu] = useState(false);
    const [moviePosterPath, setMoviePosterPath] = useState(posterPath);

    const handleShowEditModal = useCallback(() => {
        onShowEditModal(id);
        setShowMenu(false);
    }, [id, onShowEditModal, setShowMenu]);

    const handleShowDeleteModal = useCallback(() => {
        onShowDeleteModal(id);
        setShowMenu(false);
    }, [id, onShowDeleteModal, setShowMenu]);

    const handleMovieClick = useCallback(() => {
        onMovieIdChange(id);
    }, [id, onMovieIdChange]);

    const handleShowMenu = useCallback(() => {
        setShowMenu(true);
    }, [setShowMenu]);

    const handleCloseMenu = useCallback(() => {
        setShowMenu(false);
    }, [setShowMenu]);

    const handleImageError = useCallback(() => {
        setMoviePosterPath(MOVIE_IMAGE_DEFAULT);
    }, [setMoviePosterPath]);

    const [releaseYear] = releaseDate.split('-');
    const genresList = genres.join(', ');

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardBody}>
                <div className={styles.cardImage}>
                    <Button className={styles.movieMenuButton} onClick={handleShowMenu}>
                        <FontAwesomeIcon icon="ellipsis-v" />
                    </Button>
                    <MovieMenu
                        show={showMenu}
                        onCloseMenu={handleCloseMenu}
                        onDelete={handleShowDeleteModal}
                        onEdit={handleShowEditModal} />
                    <Button className={styles.movieSelectButton} onClick={handleMovieClick}>
                        <img className={styles.image} src={moviePosterPath} alt="" onError={handleImageError} />
                    </Button>
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
        </div>
    );
};

MovieCard.propTypes = COMPONENT_PROPS;
MovieCard.defaultProps = DEFAULT_PROPS;

export default MovieCard;
