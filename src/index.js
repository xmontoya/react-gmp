import 'assets/styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

import App from './components/App';

library.add(faEllipsisV, faPlus, faTimes);

ReactDOM.render(
    <App />,
    document.getElementById('application')
);
