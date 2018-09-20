var express = require('express');
var router = express.Router();

// home page
router.get('/', function (req, res, next) {
    res.send('Hello ! This is restful api task with nodeJS<br>' +
        '<a href="/events">Go to event list</a>');
});

module.exports = router;
