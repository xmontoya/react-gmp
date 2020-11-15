import styles from './App.scss';

import 'isomorphic-fetch';
import 'babel-polyfill';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import ErrorBoundary from 'components/common/ErrorBoundary';
import FooterSection from 'components/common/FooterSection';
import NotFoundPage from 'components/common/NotFoundPage';

import SearchPage from 'components/SearchPage';
import MoviePage from 'components/MoviePage';

const COMPONENT_PROPS = {
    Router: PropTypes.func.isRequired,
    location: PropTypes.string,
    context: PropTypes.shape({
        url: PropTypes.string
    }),
    store: PropTypes.shape({
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired
    }).isRequired
};

const DEFAULT_PROPS = {
    location: null,
    context: null
};

const App = ({ context, location, store, Router }) => (
    <Provider store={store}>
        <Router location={location} context={context}>
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
        </Router>
    </Provider>
);

App.propTypes = COMPONENT_PROPS;
App.defaultProps = DEFAULT_PROPS;

export default hot(module)(App);
