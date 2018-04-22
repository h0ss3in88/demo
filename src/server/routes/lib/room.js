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
    })
    .post((req,res,next) => {
        //TODO : creation operation
    })
    .put((req,res,next) => {
        //TODO : update operations
    })
    .delete((req,res,next) => {
        //TODO : delete operations
    });
    return _router;
}