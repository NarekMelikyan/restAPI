var express     = require('express');
var router      = express.Router();
var db          = require('./db.js');
var mongoClient = require("mongodb").MongoClient;

// router.post('/list', function (req, res) {
//     var query = {};
//     mongoClient.connect(db.mongourl, function (err, client) {
//         if (err) {
//             res.send(err)
//         } else {
//             db.findDocs(client.db('db-task'), "devices", query, function (dat) {
//                 res.send(dat);
//             });
//         }
//     });
// })
//
module.exports = router;