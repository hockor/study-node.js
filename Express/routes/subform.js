/**
 * Created by admin on 2015/11/10.
 */
var express = require("express");
var router = express.Router();
var crypto = require("crypto");
router.get("/",function(req,res){
    res.render("subform",{
        title: "put/post"
    })
})

router.post('/',function(req, res){
    var username = req.body.username,
        pass = req.body.pass,
        username2 = req.param("username"),
        pass2 = req.param("pass");

    console.log('req.body用户名:'+username);
    console.log('req.body密码:'+pass);
    console.log('req.param用户名:'+username2);
    console.log('req.param密码:'+pass2);

    //生成口令的散列值
    var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列
    var en_upwd = md5.update(pass).digest('hex');

    console.log('加密后的密码:'+en_upwd);
});
module.exports = router;
