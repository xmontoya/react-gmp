const movieListTransform = ({ data }) => {
    if (!data) {
        return [];
    }

    return data.map(movie => ({
        id: movie.id,
        genres: movie.genres,
        posterPath: movie.poster_path,
        title: movie.title,
        releaseDate: movie.release_date
    }));
};

const movieTransform = movie => {
    const {
        id,
        title,
        release_date: releaseDate,
        poster_path: posterPath,
        genres,
        overview,
        runtime: minutes,
        vote_average: average
    } = movie;

    const runtime = minutes || 0;
    const voteAverage = average || 0;

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
