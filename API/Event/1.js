/**
 * Created by admin on 2015/11/16.
 */
var enevntemitter = require("event").EventEmitter;

var ev = new enevntemitter();

ev.on("first_event",function(foo,bar){
    console.log("第一个事件监听，参数foo="+foo+",bar= "+bar);
})

var isSuccess = ev.emit("")
