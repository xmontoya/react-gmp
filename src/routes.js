import NotFoundPage from 'components/common/NotFoundPage';
import SearchPage from 'components/SearchPage';
import MoviePage from 'components/MoviePage';

const routes = [{
    path: '/',
    exact: true,
    component: SearchPage
}, {
    path: '/search/:query',
    component: SearchPage
}, {
    path: '/film/:id',
    component: MoviePage
}, {
    path: '*',
    component: NotFoundPage
}];

export default routes;
