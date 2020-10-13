import styles from './EditMovieModal.scss';

import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import { useFormik } from 'formik';

import Button from 'components/common/Button';
import FormInput from 'components/common/FormInput';
import Modal from 'components/common/Modal';

import { addMovie, editMovie, getMovieById } from 'redux/actions/movieActions';

import * as Labels from 'constants/Labels';

import { validateRules } from './config/movieValidator';

const mapStateToProps = state => ({ movie: state.movie });

const COMPONENT_PROPS = {
    addMovie: PropTypes.func.isRequired,
    editMovie: PropTypes.func.isRequired,
    getMovieById: PropTypes.func.isRequired,
    movie: PropTypes.shape({
        id: PropTypes.number,
        genres: PropTypes.array,
        overview: PropTypes.string,
        posterPath: PropTypes.string,
        releaseDate: PropTypes.string,
        runtime: PropTypes.number,
        title: PropTypes.string
    }).isRequired,
    movieId: PropTypes.number,
    show: PropTypes.bool.isRequired,
    onCloseModal: PropTypes.func.isRequired
};

const DEFAULT_PROPS = {
    movieId: null
};

const ModalContainer = props => {
    const {
        addMovie,
        editMovie,
        getMovieById,
        movie,
        movieId,
        show,
        onCloseModal
    } = props;
    const [formValues, setFormValues] = useState(movie);
    const isEdit = Boolean(movieId);

    useEffect(() => {
        if (movieId && show) {
            getMovieById(movieId);
        }
    }, [getMovieById, movieId, show]);

    useEffect(() => {
        if (movieId && movie) {
            setFormValues(movie);
        }
    }, [movie, movieId, setFormValues]);

    const formTitle = isEdit ? Labels.EDIT_MOVIE : Labels.ADD_MOVIE;

    const movieIdLabel = isEdit && (
        <Fragment>
            <span className={styles.movieIdLabel}>{Labels.MOVIE_ID}</span>
            <span className={styles.movieIdValue}>{movieId}</span>
        </Fragment>
    );

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: formValues,
        validate: validateRules,
        onSubmit: values => {
            if (movieId) {
                editMovie(values);
            } else {
                addMovie(values);
            }

            onCloseModal();
        }
    });

    return (
        <Modal show={show} onCloseModal={onCloseModal}>
            <section className={styles.editCard}>
                <span className={styles.title}>{formTitle}</span>
                <form>
                    <div>
                        {movieIdLabel}
                        <FormInput
                            error={formik.errors.title}
                            id="title"
                            label={Labels.TITLE}
                            name="title"
                            placeholder="Title here"
                            value={formik.values.title}
                            onChange={formik.handleChange} />
                        <FormInput
                            error={formik.errors.releaseDate}
                            id="releaseDate"
                            label={Labels.RELEASE_DATE}
                            name="releaseDate"
                            placeholder="Select Date"
                            value={formik.values.releaseDate}
                            onChange={formik.handleChange} />
                        <FormInput
                            error={formik.errors.posterPath}
                            id="posterPath"
                            label={Labels.MOVIE_URL}
                            name="posterPath"
                            placeholder="Movie URL here"
                            value={formik.values.posterPath}
                            onChange={formik.handleChange} />
                        <FormInput
                            error={formik.errors.genres}
                            id="genres"
                            label={Labels.GENRE}
                            name="genres"
                            placeholder="Genres"
                            value={formik.values.genres}
                            onChange={formik.handleChange} />
                        <FormInput
                            error={formik.errors.overview}
                            id="overview"
                            label={Labels.OVERVIEW}
                            name="overview"
                            placeholder="Overview here"
                            value={formik.values.overview}
                            onChange={formik.handleChange} />
                        <FormInput
                            error={formik.errors.runtime}
                            id="runtime"
                            label={Labels.RUNTIME}
                            name="runtime"
                            placeholder="Runtime here"
                            type="number"
                            value={formik.values.runtime}
                            onChange={formik.handleChange} />
                    </div>
                    <div className={styles.footer}>
                        <Button
                            className={classnames(styles.footerButton, styles.resetButton)}>
                            {Labels.RESET}
                        </Button>
                        <Button
                            className={classnames(styles.footerButton, styles.submitButton)}
                            type="submit"
                            onClick={formik.handleSubmit}>
                            {Labels.SUBMIT}
                        </Button>
                    </div>
                </form>
            </section>
        </Modal>
    );
};

ModalContainer.propTypes = COMPONENT_PROPS;
ModalContainer.defaultProps = DEFAULT_PROPS;

const EditMovieModal = connect(
    mapStateToProps,
    { addMovie, editMovie, getMovieById }
)(ModalContainer);

export default EditMovieModal;
