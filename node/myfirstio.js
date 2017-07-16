var fs = require('fs');

var obj=fs.readFile(process.argv[2]);

console.log(obj.toString().split('\n').length-1);
