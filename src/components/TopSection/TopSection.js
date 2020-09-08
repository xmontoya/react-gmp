import styles from './TopSection.scss';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

import Button from 'components/common/Button';
import Logo from 'components/common/Logo';
import EditMovieModal from 'components/common/EditMovieModal';
import MovieDetails from 'components/common/MovieDetails';

import SearchBar from 'components/TopSection/SearchBar';

import * as Labels from 'constants/Labels';

const COMPONENT_PROPS = {
    movieId: PropTypes.number,
    onMovieIdChange: PropTypes.func.isRequired
};

const DEFAULT_PROPS = {
    movieId: null
};

const TopSection = ({ movieId, onMovieIdChange }) => {
    const [showHideModal, setShowHideModal] = useState(false);

    const handleShowModal = () => {
        setShowHideModal(true);
    };

    const handleCloseModal = () => {
        setShowHideModal(false);
    };

    const handleSearchClick = () => {
        onMovieIdChange(null);
    };

    const buttonCls = movieId ? styles.buttonSearch : styles.buttonAddMovie;

    const addMovieAction = !movieId && (
        <Button className={classnames(styles.buttonTop, buttonCls)} onClick={handleShowModal}>
            <FontAwesomeIcon icon="plus" />
            { ' ' }
            {Labels.ADD_MOVIE}
        </Button>
    );

    const searchBar = !movieId && (
        <SearchBar />
    );

    const searchTopAction = movieId && (
        <Button className={classnames(styles.buttonTop, buttonCls)} onClick={handleSearchClick}>
            <FontAwesomeIcon icon="search" />
        </Button>
    );

    const movieDetails = movieId && (
        <MovieDetails movieId={movieId} />
    );

    const headerDetailsCls = movieId ? styles.headerDetails : null;

    return (
        <header className={classnames(styles.header, headerDetailsCls)}>
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <div className={styles.topSection}>
                        <Logo />
                        {addMovieAction}
                        {searchTopAction}
                    </div>
                    <div className={styles.mainSection}>
                        {searchBar}
                        {movieDetails}
                    </div>
                </div>
            </div>
            <EditMovieModal show={showHideModal} onCloseModal={handleCloseModal} />
        </header>
    );
};

TopSection.propTypes = COMPONENT_PROPS;
TopSection.defaultProps = DEFAULT_PROPS;

export default TopSection;
