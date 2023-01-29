const { catalog } = require('../controllers/catalog');
const { about } = require('../controllers/about');
const { create, post } = require('../controllers/create');
const { details } = require('../controllers/details');
const { edit, editPost } = require('../controllers/edit');
const { notFound } = require('../controllers/notFound');

module.exports = (app) => {
    app.get('/', catalog);
    app.get('/about', about);
    app.get('/details/:id', details);

    app.get('/create', create);
    app.post('/create', post);

    app.get('/edit/:id', edit);
    app.post('/edit/:id', editPost);

    app.all('*', notFound);
};