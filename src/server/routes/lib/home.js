const express = require('express'),
    _router = express.Router();
module.exports = () => {
    _router.route('/')
        .get((req,res,next) => {
            return res.json({ 'hello' : 'world' });    
        });
    return _router;
};