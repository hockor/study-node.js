/**
 * Created by admin on 2015/11/10.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('usesession', { title: 'session' });
});

module.exports = router;
