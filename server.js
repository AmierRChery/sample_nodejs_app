var http = require('http');

var fs = require('fs');
var server = http.createServer( function(req,resp) {

    if (req.url === "/demo"){
    fs.readFile("views/demo.html", function (error, pgResp){
        if (error){
            resp.writeHead(404);
            resp.write('Content not found');
        }
        else {
            resp.writeHead(200, { 'Content-Type': 'text/html'});
            resp.write(pgResp);
        }
        resp.end();
    });
    }else{
        resp.writeHead(302, {'Location': '/demo'});
        resp.end();
    }
});
server.listen(8000);
console.log('Server started listening on port 8000');