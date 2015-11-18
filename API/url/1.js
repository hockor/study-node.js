/**
 * Created by admin on 2015/11/18.
 */
/*
* urlģ��

 ����HTTP����ʱurlģ��ʹ���ʳ��ߣ���Ϊ��ģ���������URL������URL���Լ�ƴ��URL��*/

//��������urlģ��
var url = require("url");

console.log(url);
/*
��ӡ�������ǿ��Կ���url���õļ����������������ʵ��������ʹ����Щ������
* { parse: [Function: urlParse],
 resolve: [Function: urlResolve],
 resolveObject: [Function: urlResolveObject],
 format: [Function: urlFormat],
 Url: [Function: Url] }
 */


// 1.   url.parse(urlStr, [parseQueryString], [slashesDenoteHost])
/*
* ���ղ�����
 urlStr                             url�ַ���
 parseQueryString                   Ϊtrueʱ��ʹ�ò�ѯģ�������ѯ�ַ�����Ĭ��Ϊfalse
 slashesDenoteHost
 Ĭ��Ϊfalse��//foo/bar ��ʽ���ַ����������ͳ� { pathname: ��//foo/bar' }
 ������ó�true��//foo/bar ��ʽ���ַ����������ͳ�  { host: ��foo', pathname: ��/bar' }

 �ڶ�����������trueʱ���÷������ص�URL�����У�query�ֶβ�����һ���ַ���������һ������querystringģ��ת����Ĳ������󡣵�������������trueʱ���÷���������ȷ��������Э��ͷ��URL������//www.example.com/foo/bar��
* */

var a = url.parse('http://example.com:8080/one?a=index&t=article&m=default');
console.log(a);

//��������

/*
    protocol: ����Э��
 ����host: URL��������ȫ��ת����Сд, �����˿���Ϣ
 ����auth:URL�������֤��Ϣ����
 ����hostname:����������������, ��ת����Сд
 ����port: �����Ķ˿ںŲ���
 ����pathname: URL��·������,λ��������֮�������ѯ֮ǰ
 ����search: URL �ġ���ѯ�ַ��������֣�������ͷ���ʺš�
 ����path: pathname �� search ����һ��
 ����query: ��ѯ�ַ����еĲ������֣��ʺź��沿���ַ�����������ʹ�� querystring.parse() �����󷵻صĶ���
 ����hash: URL �� ��#�� ���沿�֣����� # ���ţ�

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

//��ô���Ǽ��Ϻ����������أ���ҿ��Կ���query�б���ʽ���ˡ�
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

//2 url.format()   �����ǽ�����url����ƴ�ӻ�������url

console.log(url.format(a2))
/*���http://example.com:8080/one?a=index&t=article&m=default*/


//3 url.resolve(from, to) ΪURL�� href ���� �� �滻ԭ�еı�ǩ�����ղ�����from   Դ��ַ  to    ��Ҫ��ӻ��滻�ı�ǩ
var a = url.resolve('/one/two/three', 'four') ,
    b = url.resolve('http://example.com/', '/one'),
    c = url.resolve('http://example.com/one', '/two');
console.log(a +","+ b +","+ c);
/*
* /one/two/four,
* http://example.com/one,
* http://example.com/two
* */

//4 Query String  querystringģ������ʵ��URL�����ַ������������Ļ���ת����ʾ�����¡�

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
