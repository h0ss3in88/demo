let home = require('./lib/home');

module.exports = (app) => {
    app.use('/',home());
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