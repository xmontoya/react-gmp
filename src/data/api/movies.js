const {
    PULP_FICTION,
    INSIDE_OUT,
    KILL_BILL_V2,
    AVENGERS_INFINITY_WAR,
    INCEPTION,
    RESERVOIR_DOGS } = require('../mocks/movies');

const { movieListTransform, movieTransform } = require('../transforms/movies');

const movieList = [
    PULP_FICTION,
    INSIDE_OUT,
    KILL_BILL_V2,
    AVENGERS_INFINITY_WAR,
    INCEPTION,
    RESERVOIR_DOGS
];

const movies = movieListTransform(movieList);

const getMovie = id => {
    const [selectedMovie] = movieList.filter(movie => movie.id === id);

    return movieTransform(selectedMovie);
};

module.exports = {
    movies,
    getMovie
};
