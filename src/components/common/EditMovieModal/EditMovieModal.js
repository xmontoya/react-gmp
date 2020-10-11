import styles from './EditMovieModal.scss';

import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import Button from 'components/common/Button';
import FormInput from 'components/common/FormInput';
import Modal from 'components/common/Modal';

import { addMovie, editMovie, getMovieById } from 'redux/actions/movieActions';

import * as Labels from 'constants/Labels';

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

    const handleChange = useCallback(event => {
        const { name, value } = event.target;
        let inputValue = value;

        if (name === 'genres') {
            inputValue = [value];
        }

        if (name === 'runtime') {
            inputValue = parseInt(value, 10);
        }

        setFormValues({ ...formValues, [name]: inputValue });
    }, [formValues, setFormValues]);

    const handleSubmit = useCallback(() => {
        if (movieId) {
            editMovie(formValues);
        } else {
            addMovie(formValues);
        }

        onCloseModal();
    }, [addMovie, editMovie, formValues, movieId, onCloseModal]);

    const formTitle = isEdit ? Labels.EDIT_MOVIE : Labels.ADD_MOVIE;

    const movieIdLabel = isEdit && (
        <Fragment>
            <span className={styles.movieIdLabel}>{Labels.MOVIE_ID}</span>
            <span className={styles.movieIdValue}>{movieId}</span>
        </Fragment>
    );

    const gender = formValues.genres.length ? formValues.genres[0] : '';

    return (
        <Modal show={show} onCloseModal={onCloseModal}>
            <section className={styles.editCard}>
                <span className={styles.title}>{formTitle}</span>
                <div>
                    {movieIdLabel}
                    <FormInput label={Labels.TITLE} name="title" placeholder="Title here" value={formValues.title} onChange={handleChange} />
                    <FormInput label={Labels.RELEASE_DATE} name="releaseDate" placeholder="Select Date" value={formValues.releaseDate} onChange={handleChange} />
                    <FormInput label={Labels.MOVIE_URL} name="posterPath" placeholder="Movie URL here" value={formValues.posterPath} onChange={handleChange} />
                    <FormInput label={Labels.GENRE} name="genres" placeholder="Select Genre" value={gender} onChange={handleChange} />
                    <FormInput label={Labels.OVERVIEW} name="overview" placeholder="Overview here" value={formValues.overview} onChange={handleChange} />
                    <FormInput label={Labels.RUNTIME} name="runtime" placeholder="Runtime here" type="number" value={formValues.runtime} onChange={handleChange} />
                </div>
                <div className={styles.footer}>
                    <Button
                        className={classnames(styles.footerButton, styles.resetButton)}>
                        {Labels.RESET}
                    </Button>
                    <Button
                        className={classnames(styles.footerButton, styles.submitButton)}
                        onClick={handleSubmit}>
                        {Labels.SUBMIT}
                    </Button>
                </div>
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
