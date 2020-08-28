import styles from './MovieCard.scss';

import React from 'react';
import PropTypes from 'prop-types'

const COMPONENT_PROPS = {
    movie: PropTypes.shape({
        categories: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.number
    })
};

const DEFAULT_PROPS = {
    movie: null
};

const MovieCard = ({ movie }) => {
    const { categories, image, title, year } = movie;
    
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
            <div className={styles.info}>
                <div className={styles.titleSection}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.year}>{year}</span>
                </div>
                <div className={styles.footer}>
                    <p className={styles.categories}>{categories}</p>
                </div>
            </div>
        </div>
    );
};

MovieCard.propTypes = COMPONENT_PROPS;
MovieCard.defaultProps = DEFAULT_PROPS;

export default MovieCard;
