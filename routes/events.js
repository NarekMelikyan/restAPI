var express = require('express');
var router = express.Router();
var db = require('./db.js');
var mongoClient = require("mongodb").MongoClient;
var ObjectId = require('mongodb').ObjectID;


// get events list
router.get('/', function (req, res) {
    var query = {};
    mongoClient.connect(db.mongourl, function (err, client) {
        if (err) {
            res.send(err)
        } else {
            db.findDocs(client.db('db-task'), "events", query, function (data) {
                res.send(data);
            });
        }
    });
})

// create new event
router.post('/', function (req, res) {
    var query = {
        name: req.body.name,
        description: req.body.description,
        pictures: req.body.pictures
    };
    mongoClient.connect(db.mongourl, function (err, client) {
        if (err) {
            res.send(err)
        } else {
            db.findDocs(client.db('db-task'), "events", query, function (dat) {
                db.insert(client.db('db-task'), "events", query);
                res.send({success: true});
            })
        }
    });
})

// event detailed page
router.get('/:id', function (req, res) {
    var id = req.params.id;
    var query = {_id: ObjectId(id)};
    mongoClient.connect(db.mongourl, function (err, client) {
        if (err) {
            res.send(err)
        } else {
            db.findDocs(client.db('db-task'), "events", query, function (dat) {
                if (dat.length == 1) {
                    res.send(dat[0])
                }
            })
        }
    });
})

// update event
router.patch('/:id', function (req, res) {
    var id = req.params.id;
    var finderQuery = {_id: ObjectId(id)};

    mongoClient.connect(db.mongourl, function (err, client) {
        if (err) {
            res.send(err)
        } else {
            db.findDocs(client.db('db-task'), "events", finderQuery, function (dat) {
                if (dat.length == 1) {
                    dat[0].name = req.body.name;
                    dat[0].description = req.body.description;
                    dat[0].pictures = req.body.pictures;
                    db.update(client.db('db-task'), "events", finderQuery, dat[0], function (dat) {
                        res.send({success: true});
                    })
                }
            })
        }
    });

})

// remove event
router.delete('/:id', function (req, res) {
    var id = req.params.id;
    var query = {_id: ObjectId(id)};

    mongoClient.connect(db.mongourl, function (err, client) {
        if (err) {
            res.send(err)
        } else {
            db.remove(client.db('db-task'), "events",query)
            res.send({success: true})
        }
    });


})


module.exports = router;

