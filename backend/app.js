const express = require('express');
const app = express();
const sequelize = require('./sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./middelwares/error-handler');
const { routeRegistration, routeLogin, routeUser } = require('./routes');

app.use(bodyParser.json());
app.use(cors());
app.listen(3000);

app.use('/registration', routeRegistration);
app.use('/login', routeLogin);
app.use('/user', routeUser);

app.use(errorHandler);

module.exports = app;
