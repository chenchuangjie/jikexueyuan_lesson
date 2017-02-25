var express = require('express');
var router = express.Router();
var xss = require('xss');
/*引入myqla*/
var mysql = require('mysql');
/*连接数据库*/
var dbconfig = require('./db');
var connection = mysql.createConnection(dbconfig);
/* 后台路由页面 */
// 获取所有新闻列表
router.get('/getnews', function(req, res, next) {
    connection.query('SELECT * FROM `news` order by id desc', function(err, rows) {
        res.json(rows);
    });
});

// 将修改的新数据发送到服务器
router.post('/update', function(req, res) {
    var newsid = req.body.id,
        newstype = req.body.newstype,
        newsimg = req.body.newsimg,
        newstitle = req.body.newstitle,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc;
        connection.query('UPDATE `news` SET `newstitle` = ?,`newstype` = ?,`newsimg` = ?,`newstime` = ?,`newssrc` = ? WHERE `id`=?', [newstitle, newstype, newsimg, newstime, newssrc, newsid], function(err, rows) {
        console.log(rows.changedRows);
        // res.write("ok");
        res.json(rows);
    });
});

// 修改模态框取值
router.get('/curnews', function(req, res, next) {
    var newsid = req.query.newsid;
    connection.query('SELECT * FROM `news` WHERE `id`=?', [newsid], function(err, rows) {
        res.json(rows);
    });
});

// 删除新闻功能
router.post('/delete', function(req, res, next) {
    var newsid = req.body.newsid;
    connection.query('DELETE FROM `news` WHERE `news`.`id`=?', [newsid], function(err, result) {

        // res.json("ok");
        console.log(result.affectedRows);
        res.json(result);
    });
});


// 添加新闻
router.post('/insert', function(req, res) {
    var newstype = req.body.newstype,
        newsimg = req.body.newsimg,
        newstitle = req.body.newstitle,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc;
    connection.query('INSERT INTO `news`(`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES(?,?,?,?,?)', [newstitle, newstype, newsimg, newstime, newssrc], function(err, result) {
        if (!err) {

            console.log(result.insertId);
            res.json(result);
        }
    });
});

// 获取所有新闻头条
router.get('/gethead', function(req, res, next) {
    connection.query('SELECT * FROM `headnews`', function(err, rows) {
        res.json(rows);
    });
});

// 新闻头条将修改的新数据发送到服务器
router.post('/updateHead', function(req, res) {
    var newsid = req.body.id,
        headtitle = req.body.headtitle,
        headimg = req.body.headimg;
    connection.query('UPDATE `headnews` SET `headtitle` = ?,`headimg` = ? WHERE `id`=?', [headtitle, headimg, newsid], function(err, rows) {
        console.log(rows.changedRows);
        // res.write("ok");
        res.json(rows);
    });
});

// 新闻头条修改模态框取值
router.get('/headlines', function(req, res, next) {
    var newsid = req.query.newsid;
    connection.query('SELECT * FROM `headnews` WHERE `id`=?', [newsid], function(err, rows) {
        res.json(rows);
    });
});
module.exports = router;
