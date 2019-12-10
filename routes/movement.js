var express = require('express');
var router = express.Router();

/* GEt users listing. */
router.get('/', function(req, res, next) {
    res.io.emit("socketToMe", "movement");
    res.send('respond with a resource');
});

module.exports = router;