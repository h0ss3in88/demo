const pg = require('pg'),
    _ = require('lodash'),
    pgCamelCase = require('pg-camelcase');
let Client = pg.Pool;
class Db{
    constructor(args)
    {
        this.args = args || {};
    }
    connect(callback) {
        this.client = new Client({ connectionString : this.args.connectionString });
        this.client.connect(callback);
    }
    query(text,arrayParams,callback) {
        this.client.query(text,arrayParams,(err,result) => {
            if(err) return callback(err,null);
            else if(result == null){
                return callback(null,null);
            }
            return callback(null,res);
            this.client.end();
        });
    }
    getAll(tableName,callback) {
        this.connect((err) => {
            if(err) return callback(err,null);
            else {
                this.query(`select * from ${tableName} order by ${tableName}_id;`,[],(err,result) => {
                    if(err) return callback(err,null);
                    return callback(null,result.rows);
                });
            }
        });
    }
    count (tableName,callback) {
       this.query(`select count(*) from ${tableName};`,(err,result) => {
            if(err) return callback(err,null);
            else{
                return callback(null,result.rows[0]);
            }
       }); 
    }
    insert (tableName,object,callback) {
        let keys,values = [];
        var keysCount = _.keys(object).length;
        keys = _.keys(object);
        for (let i = 1; i < keysCount; i++) {
            values.push(`$${i.toString()}`);
            
        }
        let mappedKeys = _.map(keys,(item) => {
            return _.snakeCase(item);
        });
        let sql = `insert into ${tableName} (${mappedKeys.join(',')}) values(${values.join(',')}) returning *;`;
        this.query(sql,_.values(object),(err,result) => {
            if(err) return callback(err,null);
            else {
                return callback(null,result);
            }
        });
    }
    delete (tableName , id , callback) {
        let sql = `delete from ${tableName} where ${tableName}_id =  $1 returning *;`;
        this.query(sql,[id],(err,result) => {
            if(err) return callback(err,null);
            return callback(null,result);
        });
    }
    findOne (tableName,id,callback) {
        let sql = `select * from ${tableName} where ${tableName}_id = $1;`;
        this.query(sql,[id],(err,result) => {
            if(err) return callback(err,null);
            return callback(null,result);
        });
    }
}

module.exports = Db;
