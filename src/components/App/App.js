import styles from './App.scss';

import React, { useState } from 'react';

import ErrorBoundary from 'components/common/ErrorBoundary';

import ContentSection from 'components/ContentSection';
import FooterSection from 'components/FooterSection';
import TopSection from 'components/TopSection';

const App = () => {
    const [movieId, setMovieId] = useState(null);

    const handleMovieIdChange = selectedMovieId => {
        setMovieId(selectedMovieId);
    };

    return (
        <div className={styles.app}>
            <ErrorBoundary>
                <TopSection movieId={movieId} onMovieIdChange={handleMovieIdChange} />
                <ContentSection onMovieIdChange={handleMovieIdChange} />
                <FooterSection />
            </ErrorBoundary>
        </div>
    );
};

export default App;
