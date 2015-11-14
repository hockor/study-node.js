/**
 * Created by admin on 2015/11/10.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('usecookies', { title: 'cookies' });
});

module.exports = router;
