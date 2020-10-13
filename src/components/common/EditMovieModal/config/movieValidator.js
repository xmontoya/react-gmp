export const validateRules = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required';
    }

    if (!values.releaseDate) {
        errors.releaseDate = 'Required';
    }

    if (!values.posterPath) {
        errors.posterPath = 'Required';
    }

    if (!values.genres || !values.genres.length) {
        errors.genres = 'Required';
    }

    if (!values.overview) {
        errors.overview = 'Required';
    }

    if (!values.runtime) {
        errors.runtime = 'Runtime must be a number greater than zero';
    }

    return errors;
};
