/**
 * Created by admin on 2015/11/18.
 */
/*
* url模块

 处理HTTP请求时url模块使用率超高，因为该模块允许解析URL、生成URL，以及拼接URL。*/

//首先引入url模块
var url = require("url");

console.log(url);
/*
打印出来我们可以看到url常用的几个方法，下面会用实例来依次使用这些方法。
* { parse: [Function: urlParse],
 resolve: [Function: urlResolve],
 resolveObject: [Function: urlResolveObject],
 format: [Function: urlFormat],
 Url: [Function: Url] }
 */


// 1.   url.parse(urlStr, [parseQueryString], [slashesDenoteHost])
/*
* 接收参数：
 urlStr                             url字符串
 parseQueryString                   为true时将使用查询模块分析查询字符串，默认为false
 slashesDenoteHost
 默认为false，//foo/bar 形式的字符串将被解释成 { pathname: ‘//foo/bar' }
 如果设置成true，//foo/bar 形式的字符串将被解释成  { host: ‘foo', pathname: ‘/bar' }

 第二个参数等于true时，该方法返回的URL对象中，query字段不再是一个字符串，而是一个经过querystring模块转换后的参数对象。第三个参数等于true时，该方法可以正确解析不带协议头的URL，例如//www.example.com/foo/bar。
* */

var a = url.parse('http://example.com:8080/one?a=index&t=article&m=default');
console.log(a);

//输出结果：

/*
    protocol: 请求协议
 　　host: URL主机名已全部转换成小写, 包括端口信息
 　　auth:URL中身份验证信息部分
 　　hostname:主机的主机名部分, 已转换成小写
 　　port: 主机的端口号部分
 　　pathname: URL的路径部分,位于主机名之后请求查询之前
 　　search: URL 的“查询字符串”部分，包括开头的问号。
 　　path: pathname 和 search 连在一起。
 　　query: 查询字符串中的参数部分（问号后面部分字符串），或者使用 querystring.parse() 解析后返回的对象。
 　　hash: URL 的 “#” 后面部分（包括 # 符号）

{
    protocol : 'http' ,
    auth : null ,
    host : 'example.com:8080' ,
    port : '8080' ,
    hostname : 'example.com' ,
    hash : null ,
    search : '?a=index&t=article&m=default',
    query : 'a=index&t=article&m=default',
    pathname : '/one',
    path : '/one?a=index&t=article&m=default',
    href : 'http://example.com:8080/one?a=index&t=article&m=default'}*/

//那么我们加上后两个参数呢？大家可以看到query中被格式化了。
var a2 = url.parse('http://example.com:8080/one?a=index&t=article&m=default',true,true);
console.log(a2);
/*
* Url {
 protocol: 'http:',
 slashes: true,
 auth: null,
 host: 'example.com:8080',
 port: '8080',
 hostname: 'example.com',
 hash: null,
 search: '?a=index&t=article&m=default',
 query: { a: 'index', t: 'article', m: 'default' },
 pathname: '/one',
 path: '/one?a=index&t=article&m=default',
 href: 'http://example.com:8080/one?a=index&t=article&m=default' }
* */

//2 url.format()   将我们解析的url重新拼接回完整的url

console.log(url.format(a2))
/*输出http://example.com:8080/one?a=index&t=article&m=default*/


//3 url.resolve(from, to) 为URL或 href 插入 或 替换原有的标签。接收参数：from   源地址  to    需要添加或替换的标签
var a = url.resolve('/one/two/three', 'four') ,
    b = url.resolve('http://example.com/', '/one'),
    c = url.resolve('http://example.com/one', '/two');
console.log(a +","+ b +","+ c);
/*
* /one/two/four,
* http://example.com/one,
* http://example.com/two
* */

//4 Query String  querystring模块用于实现URL参数字符串与参数对象的互相转换，示例如下。
//引入querystring模块
    var querystring = require("querystring");
    var test = querystring.parse('foo=bar&baz=qux&baz=quux&corge');
    console.log(test)
/*
 { foo: 'bar', baz: ['qux', 'quux'], corge: '' }
 */
    var test2 =  querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
    console.log(test2)
/*
 'foo=bar&baz=qux&baz=quux&corge='
 */

//querystring.escape()  对字符串进行转移，对应的是反转义
console.log(  querystring.escape("<哈哈>")   );
/*%3C%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BD%3E*/


console.log(  querystring.unescape("%3C%E5%93%88%E5%93%88%3E")  );
/*<哈哈>*/
