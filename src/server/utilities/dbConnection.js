module.exports = (Db) => {
    return (req,res,next) => {
        let db = new Db({ connectionString : 'postgresql://hussein:123456@localhost:5432/demo'});
        db.connect((err,client,releaseCallback) => {
            if(err) return next(err); 
            else {
                let self = this;
                self.client = client;
                self.releaseCallback = releaseCallback;
                req.db = db;
                return next();
            }
        });
    }
};