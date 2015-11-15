

var bf = new Buffer('hockor');
console.log( bf.toString() );
console.log( bf.toString('utf-8', 1, 3) );

var bf2 = new Buffer('中国');
console.log(bf2);
console.log( bf2.toString('utf-8', 1) );


console.log( bf.toJSON() );
