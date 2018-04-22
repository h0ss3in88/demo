const express = require('express'),
    _ = require('lodash'),
    async = require('async'),
    _router = express.Router();
module.exports = () => {
    _router
    .route('/signin')
        .get((req,res,next) => {
            res.send('singIn');
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