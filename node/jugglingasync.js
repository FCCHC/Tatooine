var http = require('http');
var bl = require('bl');

var url1 =process.argv[2];
var url2= process.argv[3];
var url3= process.argv[4];

var p = new Promise (function(resolve, reject){
  http.get(url1,function(response){
    response.setEncoding('utf8');
    response.pipe(bl(function (err,data) {
      if(err){
       return console.error(err);
      }
       resolve(data.toString());
    }))
  });
});

var p2 = new Promise (function(resolve, reject){
  http.get(url2,function(response){
    response.setEncoding('utf8');
    response.pipe(bl(function (err,data) {
      if(err){
       return console.error(err);
      }
       resolve(data.toString());
    }))
  });
});

var p3 =new Promise (function(resolve, reject){
  http.get(url3,function(response){
    response.setEncoding('utf8');
    response.pipe(bl(function (err,data) {
      if(err){
       return console.error(err);
      }
       resolve(data.toString());
    }))
  });
});

p.then(function(result){
  console.log(result);
});

p2.then(function(result){
  console.log(result);
});

p3.then(function(result){
  console.log(result);
});
