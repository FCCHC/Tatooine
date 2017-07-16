var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){

var urlData= url.parse(request.url,true);
var pathname= urlData.pathname;
var time= urlData.query.iso;

var d = new Date(time);

if(pathname =='/api/parsetime'){

   var obj1={
    'hour':d.getHours(),
    'minute':d.getMinutes(),
    'second':d.getSeconds()
   }
  response.writeHead(200,{'content-type':'application/json'});
  response.end(JSON.stringify(obj1));

}

if(pathname =='/api/unixtime'){
  var obj2={
   'unixtime':d.getTime()
   }
 response.writeHead(200,{'content-type':'application/json'});
 response.end(JSON.stringify(obj2));
}
   response.end();
});
server.listen(process.argv[2]);
