var mymodule = require('./module.js');


var dir= process.argv[2];
var ext= process.argv[3];

mymodule(dir,ext,function(err,list){

list.forEach(function(item) {
  console.log(item);
})
});
