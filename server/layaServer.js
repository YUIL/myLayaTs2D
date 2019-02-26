var express = require('express');
var layaCompile=require('./layaCompile');
var app = express();
app.use(express.static('../bin/'));

 
//  POST 请求
app.get('/compile', function (req, res) {
   console.log("compile 请求");
   res.send(layaCompile());
})

app.get('/layaCompile.html', function (req, res) {
   console.log("/layaCompile.html 请求");
   res.sendFile( __dirname + "/" + "layaCompile.html" );
})

 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})