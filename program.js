
var fs = require('fs')

var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString()

var arr = str.split()

console.log(buf);
