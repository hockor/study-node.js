
## events

events是node.js 最重要的模块，events模块只提供了一个对象events.EventEmitter，EventEmitter 的核心是事件发射与事件监听器。
Node.js中大部分的模块，都继承自Event模块。
与DOM树上事件不同，不存在事件冒泡、逐层捕获等行为。
EventEmitter 支持若干个事件监听器。当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。

## 如何访问：

    require('events');

/*
    调用events模块，获取events.EventEmitter对象
*/
### emitter.on(event,listener)
```javascript
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();
```
/*
    EventEmitter.on(event, listener) 为事件注册一个监听
    参数1：event  字符串，事件名
    参数2：回调函数
*/
```javascript
ee.on('some_events', function(foo, bar) {
    console.log("第1个监听事件,参数foo=" + foo + ",bar="+bar );
});

console.log('第一轮');
ee.emit('some_events', 'Wilson', 'Zhong');

console.log('第二轮');
ee.emit('some_events', 'Wilson', 'Z');
```
### emitter.emit(event, [arg1], [arg2], [...])
```javascript
var EventEmitter = require('events').EventEmitter;   
var ee = new EventEmitter();

ee.on('some_events', function(foo, bar) {         
    console.log("第1个监听事件,参数foo=" + foo + ",bar="+bar );
});

/*
    EventEmitter.emit(event, [arg1], [arg2], [...])   触发指定事件
    参数1：event  字符串，事件名
    参数2：可选参数，按顺序传入回调函数的参数
    返回值：该事件是否有监听
*/
var isSuccess = ee.emit('some_events', 'Wilson', 'Zhong');

ee.on('some_events', function(foo, bar) {         
    console.log("第2个监听事件,参数foo=" + foo + ",bar="+bar );
});

ee.emit('some_events', 'zhong', 'wei');

var isSuccess2 = ee.emit('other_events', 'Wilson', 'Zhong');

console.log(isSuccess);
console.log(isSuccess2);
```
### emitter.once(event, listener)
emitter.once注册监听是一次性监听，当触发一次后，会移除该监听！当然，从名字上就看就比较明显了^_^!