import styles from './EditMovieModal.scss';

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import Button from 'components/common/Button';
import FormInput from 'components/common/FormInput';
import Modal from 'components/common/Modal';

import * as Labels from 'constants/Labels';

const COMPONENT_PROPS = {
    movie: PropTypes.object,
    show: PropTypes.bool,
    onCloseModal: PropTypes.func
};

const DEFAULT_PROPS = {
    movie: {
        id: 0,
        title: '',
        release_date: '',
        poster_path: '',
        genres: [],
        overview: '',
        runtime: ''
    }
};

const EditMovieModal = ({ movie, show, onCloseModal }) => {
    const isEdit = Boolean(movie && movie.id);

    const formTitle = isEdit ? Labels.EDIT_MOVIE : Labels.ADD_MOVIE;

    const movieId = isEdit && (
        <Fragment>
            <span className={styles.movieIdLabel} >{Labels.MOVIE_ID}</span>
            <span className={styles.movieIdValue} >{movie.id}</span>
        </Fragment>
    );

    return (
        <Modal show={show} onCloseModal={onCloseModal}>
            <section className={styles.editCard}>
                <span className={styles.title}>{formTitle}</span>
                <div>
                    {movieId}
                    <FormInput label={Labels.TITLE} name='title' placeholder="Title here" value={movie.title} />
                    <FormInput label={Labels.RELEASE_DATE} name='release_date' placeholder="Select Date" value={movie.release_date} />
                    <FormInput label={Labels.MOVIE_URL} name='poster_path' placeholder="Movie URL here" value={movie.poster_path} />
                    <FormInput label={Labels.GENRE} name='genre' placeholder="Select Genre" value={movie.genres[0]} />
                    <FormInput label={Labels.OVERVIEW} name='overview' placeholder="Overview here" value={movie.overview} />
                    <FormInput label={Labels.RUNTIME} name='runtime' placeholder="Runtime here" type="number" value={movie.runtime} />
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
