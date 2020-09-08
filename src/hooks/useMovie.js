import { useState, useEffect } from 'react';

import { getMovie } from 'data/api/movies';

function useMovie(movieId) {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        if (!movieId) {
            return;
        }

        setMovie(getMovie(movieId));
    }, [movieId]);

    return { movie, setMovie };
}

export default useMovie;
