import styles from './App.scss';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ErrorBoundary from 'components/common/ErrorBoundary';
import FooterSection from 'components/common/FooterSection';
import NotFoundPage from 'components/common/NotFoundPage';

import SearchPage from 'components/SearchPage';
import MoviePage from 'components/MoviePage';

const App = () => (
    <BrowserRouter>
        <div className={styles.app}>
            <ErrorBoundary>
                <Switch>
                    <Route path="/" exact component={SearchPage} />
                    <Route path="/search/:query?" component={SearchPage} />
                    <Route path="/film/:id?" component={MoviePage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </ErrorBoundary>
            <FooterSection />
        </div>
    </BrowserRouter>
);

export default App;
