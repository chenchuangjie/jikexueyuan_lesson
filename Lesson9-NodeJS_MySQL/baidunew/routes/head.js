var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/*连接数据库*/
var dbconfig = require('./db');
/*头条路由页面*/
router.get('/', function(req, res, next) {
    var connection = mysql.createConnection(dbconfig);

    connection.connect();
    connection.query('SELECT * FROM headnews', function(err, rows, fields) {
        console.log(rows);
        res.json(rows);
    });

});

module.exports = router;
