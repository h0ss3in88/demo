/// <reference path="../../../../typings/node_modules/@types/express/index.d.ts" />

const express = require('express'),
    _router = express.Router();

module.exports = () => {
    _router
        .route('/')
        .get((req,res,next) => {
            res.send('channels');
        });
    return _router;
};