var express = require('express');
var router = express.Router();

/* GET signUp listing. */
router.get('/', function(req, res, next) {
    res.render('signUp');
});

module.exports = router;

