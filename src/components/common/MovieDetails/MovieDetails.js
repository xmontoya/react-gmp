import styles from './MovieDetails.scss';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMovieById } from 'redux/actions/movieActions';

const mapStateToProps = state => ({ movie: state.movie });

const COMPONENT_PROPS = {
    getMovieById: PropTypes.func.isRequired,
    movie: PropTypes.shape({
        genres: PropTypes.arrayOf(PropTypes.string),
        overview: PropTypes.string,
        posterPath: PropTypes.string,
        releaseDate: PropTypes.string,
        runtime: PropTypes.number,
        voteAverage: PropTypes.number,
        title: PropTypes.string
    }),
    movieId: PropTypes.number.isRequired
};

const DEFAULT_PROPS = {
    movie: {}
};

const DetailsContainer = ({ getMovieById, movie, movieId }) => {
    const { genres = [], overview, posterPath, releaseDate = '', runtime, title, voteAverage } = movie;

    const [releaseYear] = releaseDate.split('-');
    const genresList = genres.join(', ');

    useEffect(() => {
        if (movieId) {
            getMovieById(movieId);
        }
    }, [getMovieById, movieId]);

    return (
        <div className={styles.detailsContainer}>
            <div className={styles.detailsImage}>
                <img className={styles.image} src={posterPath} alt="" />
            </div>
            <div className={styles.detailsInfo}>
                <div className={styles.titleSection}>
                    <div className={styles.titleContainer}>
                        <span className={styles.title}>{title}</span>
                    </div>
                    <div className={styles.scoreContainer}>
                        <span className={styles.score}>{voteAverage}</span>
                    </div>
                </div>
                <div className={styles.genresSection}>
                    <span>{genresList}</span>
                </div>
                <div className={styles.infoSection}>
                    <span>{releaseYear}</span>
                    <span className={styles.duration}>{runtime} min</span>
                </div>
                <div className={styles.overviewSection}>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    );
};

DetailsContainer.propTypes = COMPONENT_PROPS;
DetailsContainer.defaultProps = DEFAULT_PROPS;

const MovieDetails = connect(mapStateToProps, { getMovieById })(DetailsContainer);

export default MovieDetails;
