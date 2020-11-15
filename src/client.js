import 'assets/styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV, faPlus, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import movieStore from 'redux/store/movieStore';

import App from './components/App';

library.add(faEllipsisV, faPlus, faSearch, faTimes);

const app = (
    <App
        Router={BrowserRouter}
        store={movieStore} />
);

ReactDOM.render(app, document.getElementById('application'));
