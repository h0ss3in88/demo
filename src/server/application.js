const express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    compression = require('compression'),
    responseTime = require('response-time'),
    fs = require('fs'),
    Db = require('./utilities/db');
let app = express();

app.use(logger('dev'));

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(cookieParser());
app.use(require('./utilities/dbConnection')(Db));
app.use(responseTime());

app.set('port',process.env.PORT || 3000);
app.set('x-powered-by',false);

require('./routes')(app);

module.exports = app;
