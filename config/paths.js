'use strict';

const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../');

module.exports = {
    APP_ASSETS: '/',
    APP_INDEX_JS: path.resolve(ROOT_DIR, 'src/client.js'),
    APP_DIST: path.resolve(ROOT_DIR, 'dist'),
    APP_SRC: path.resolve(ROOT_DIR, 'src'),
    NODE_MODULES_DIR: path.resolve(ROOT_DIR, './node_modules'),
    APP_HTML: path.resolve(ROOT_DIR, 'src/index.html'),
};
