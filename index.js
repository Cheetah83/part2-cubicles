const express = require('express');
const hbs = require('express-handlebars').create({
  extname: '.hbs'
});

const { init: storage } = require('./models/storage');

const { catalog } = require('./controllers/catalog');
const { about } = require('./controllers/about');
const { create, post } = require('./controllers/create');
const { details } = require('./controllers/details');
const { edit, editPost } = require('./controllers/edit');
const { notFound } = require('./controllers/notFound');

start();

async function start() {
    const port = 3000;
    const app = express();

    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.use(express.urlencoded({ extended: false }));
    app.use('/static', express.static('static'));
    app.use('/js', express.static('js'));
    app.use(await storage());

    app.get('/', catalog);
    app.get('/about', about);
    app.get('/details/:id', details);

    app.get('/create', create);
    app.post('/create', post);

    app.get('/edit/:id', edit);
    app.post('/edit/:id', editPost);

    app.all('*', notFound);

    app.listen(port, () => console.log(`Server is listening on port ${port}`));
}