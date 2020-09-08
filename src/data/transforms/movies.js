const movieListTransform = movies => movies.map(movie => ({
    id: movie.id,
    genres: movie.genres,
    posterPath: movie.poster_path,
    title: movie.title,
    releaseDate: movie.release_date
}));

const movieTransform = movie => {
    const {
        id,
        title,
        release_date: releaseDate,
        poster_path: posterPath,
        genres,
        overview,
        runtime,
        vote_average: voteAverage
    } = movie;

    return {
        id,
        title,
        releaseDate,
        posterPath,
        genres,
        overview,
        runtime,
        voteAverage
    };
};

module.exports = {
    movieListTransform,
    movieTransform
};
