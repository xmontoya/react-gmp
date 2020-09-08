import { applyMiddleware, createStore, compose } from 'redux';
import movieReducer from 'redux/reducers/movieReducer';
import thunk from 'redux-thunk';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    movieReducer,
    storeEnhancers(applyMiddleware(thunk))
);

export default store;
