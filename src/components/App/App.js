import styles from './App.scss';

import React from 'react';

import ErrorBoundary from 'components/common/ErrorBoundary';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'components/Home';

const App = () => {
    return (
        <ErrorBoundary>
            <div className={styles.app}>
                <Header />
                <div className={styles.mainContent}>
                    <Home />
                </div>
                <Footer />
            </div>
        </ErrorBoundary>
    );
}

export default App;