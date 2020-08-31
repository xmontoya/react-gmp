import styles from './MovieDetails.scss';

import React from 'react';
import PropTypes from 'prop-types';

const COMPONENT_PROPS = {
    movie: PropTypes.shape({
        genres: PropTypes.arrayOf(PropTypes.string),
        overview: PropTypes.string,
        posterPath: PropTypes.string,
        releaseDate: PropTypes.string,
        runtime: PropTypes.number,
        voteAverage: PropTypes.number,
        title: PropTypes.string
    }).isRequired
};

const MovieDetails = ({ movie }) => {
    const { genres = [], overview, posterPath, releaseDate = '', runtime, title, voteAverage } = movie;

    const [releaseYear] = releaseDate.split('-');
    const genresList = genres.join(', ');

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

MovieDetails.propTypes = COMPONENT_PROPS;

export default MovieDetails;
