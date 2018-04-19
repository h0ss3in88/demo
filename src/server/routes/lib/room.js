/// <reference path="../../../../typings/node_modules/@types/express/index.d.ts" />
/// <reference path="../../../../typings/node_modules/@types/lodash/index.d.ts" />

const express = require('express'),
    _ = require('lodash'),
    async = require('async'),
    _router = express.Router();
module.exports = () => {
    _router
    .route('/')
    .get((req,res,next) => {
        res.send('rooms');
    });
    return _router;
}