let home = require('./lib/home'),
    channels = require('./lib/channel'),
    rooms = require('./lib/room'),
    singIn = require('./lib/signIn'),
    signUp = require('./lib/signUp');

module.exports = (app) => {
    app.use('/',home());
    app.use('/channels',channels());
    app.use('/rooms',rooms());    
    app.use('/account',singIn());
    app.use('/account',signUp());    
    app.use((req,res,next) => {
        let error = new Error();
        error.message = 'Not Found!';
        error.statusCode = 404;
        return next(error);
    });
    app.use((err,req,res,next) => {
        if(!err.statusCode || err.statusCode == null || err.status == '')
        {
            err.statusCode = 500;
            err.message = 'Internal Error';
        }
        return res.json(err.message);
    });
};