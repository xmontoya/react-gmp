import styles from './EditMovieModal.scss';

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import Button from 'components/common/Button';
import FormInput from 'components/common/FormInput';
import Modal from 'components/common/Modal';

import useMovie from 'hooks/useMovie';

import * as Labels from 'constants/Labels';

const COMPONENT_PROPS = {
    movieId: PropTypes.number,
    show: PropTypes.bool.isRequired,
    onCloseModal: PropTypes.func.isRequired
};

const DEFAULT_PROPS = {
    movieId: null
};

const EditMovieModal = ({ movieId, show, onCloseModal }) => {
    const { movie } = useMovie(movieId);
    const isEdit = Boolean(movieId);
    const {
        genres = [],
        overview,
        posterPath,
        releaseDate,
        runtime,
        title
    } = show && isEdit && movie;

    const formTitle = isEdit ? Labels.EDIT_MOVIE : Labels.ADD_MOVIE;

    const movieIdLabel = isEdit && (
        <Fragment>
            <span className={styles.movieIdLabel}>{Labels.MOVIE_ID}</span>
            <span className={styles.movieIdValue}>{movieId}</span>
        </Fragment>
    );

    return (
        <Modal show={show} onCloseModal={onCloseModal}>
            <section className={styles.editCard}>
                <span className={styles.title}>{formTitle}</span>
                <div>
                    {movieIdLabel}
                    <FormInput label={Labels.TITLE} name="title" placeholder="Title here" value={title} />
                    <FormInput label={Labels.RELEASE_DATE} name="releaseDate" placeholder="Select Date" value={releaseDate} />
                    <FormInput label={Labels.MOVIE_URL} name="posterPath" placeholder="Movie URL here" value={posterPath} />
                    <FormInput label={Labels.GENRE} name="genre" placeholder="Select Genre" value={genres[0]} />
                    <FormInput label={Labels.OVERVIEW} name="overview" placeholder="Overview here" value={overview} />
                    <FormInput label={Labels.RUNTIME} name="runtime" placeholder="Runtime here" type="number" value={runtime} />
                </div>
                <div className={styles.footer}>
                    <Button className={classnames(styles.footerButton, styles.resetButton)}>
                        {Labels.RESET}
                    </Button>
                    <Button className={classnames(styles.footerButton, styles.submitButton)}>
                        {Labels.SUBMIT}
                    </Button>
                </div>
            </section>
        </Modal>
    );
};

EditMovieModal.propTypes = COMPONENT_PROPS;
EditMovieModal.defaultProps = DEFAULT_PROPS;

export default EditMovieModal;
