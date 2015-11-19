/**
 * Created by admin on 2015/11/19.
 */

//首先引入filesystem
var fs= require("fs");

console.log(fs)
//我们可以打印出fs的主要方法查看
console.log("************************分隔符*********************");

//第二个参数是编码方式，默认是buffer
fs.readFile("test.txt","UTF-8",function(err,data){
    console.log(data)
})
//  正确输出txt的内容


//  对于读取文件内容来说，最需要注意的一点就是异步与同步之间控制执行流程的问题~
/*
var data1 = fs.readFile("test.txt")
console.log(data1)
*/
//这样就会保错，因为是异步读取文件 ，在console的时候数据还未读取出来

/*

var data2 = fs.readFileSync("test.txt","UTF-8")
console.log(data2)

*/
//这样就不会报错了，因为是同步执行，不是异步的回调



//常用API

//先创建delete.txt和delete2.txt

// 删除文件
fs.unlink('delete.txt', function(){
    console.log('success');
});

// 修改文件名称
fs.rename('delete2.txt','anew.txt',function(err){
    console.log('rename success');

    // 查看文件状态
    fs.stat('anew.txt', function(err, stat){
        console.log(stat);
    });
});

// 判断文件是否存在
fs.exists('a.txt', function( exists ){
    console.log( exists ); //false
});

fs.open( path, flags,  [mode], callback );

/*flags为：
'r' - 以只读方式打开文件，当文件不存在的时候发生异常
'r+' - 以读写方式打开文件，当文件不存在的时候发生异常
'rs' - 以只读方式同步打开文件，绕过本地缓存文件进行系统操作
'rs+' - 以读写方式同步打开文件 ，绕过本地缓存文件进行系统操作
'w' - 以只写方式打开文件，当文件不存在时创建文件，或者存在的时候覆盖文件
'wx' - 与'w'一致，但只适用于文件不存在的时候( 测试的时候,，node版本为v0.10.26，如果文件不存在则正常创建文件并且写入数据，但是当文件不存在的时候，报错为必须要写上callback，加上callback后不报错但是不执行任何操作。 )
'w+' - 以读写方式打开文件
'ws+' - 与'w+'一致，但只适用于文件不存在的时候
'a' - 以添加数据的方式打开文件，文件不存在则创建
'a+' - 以添加和读取的方式打开文件，文件不存在则创建
'ax+' - 与'a+'一致，但是存在的时候会失败

mode为：
设置文件的模式，默认为 0666，可读可写。

callback：
给出了两个参数 (  err, data )
*/
