import 'assets/styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV, faPlus, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import movieStore from 'redux/store/movieStore';

import App from './components/App';

library.add(faEllipsisV, faPlus, faSearch, faTimes);

ReactDOM.render(
    <Provider store={movieStore}>
        <App />
    </Provider>,
    document.getElementById('application'),
);
