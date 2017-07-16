var fs = require('fs');
var path = require('path');

 module.exports=function(dir,ext,callback){
   fs.readdir(dir,function (err,list){
    if(err) return callback (err, null);

    var fil= list.filter(function(l){
     return path.extname(l)=='.'+ext;
   });

  return callback(null,fil);
   });
   }
