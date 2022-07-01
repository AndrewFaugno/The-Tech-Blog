// adds dependencies 
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// enable cookies to save user session
const sess = {
    secret: 'Super secret secret',
    cookies: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// added express-handlebars
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ extname: '.hbs', helpers });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(session(sess));

app.engine('.hbs', hbs.engine);
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});