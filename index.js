const express = require('express'), //allows http request response, defines routing and render required content
      fs = require('fs'),//works with file system
      http = require('http'),//http server
      path = require('path'),//directory utility
      xml2js = require('xml2js'),//xml to js converter
      xmlParse = require('xslt-processor').xmlParse,//xml parsing
      xsltProcess = require('xslt-processor').xsltProcess;//process xslt


const router = express(),
      server = http.createServer(router);

router.use(express.static(path.resolve(_dirname,'views'))); //serve static content from 'views' folder

router.get('/', function(req, res){

res.writeHead(200, {'Content-Type' : 'text/html'});

let xml = fs.readFileSync('PaddysCafe.xml', 'utf8'),
    xsl = fs.readFileSync('PaddysCafe.xsl', 'utf8');

    console.log(xml);
    console.log(xsl);

    let doc = xmlParse(xml),
        stylesheet = xmlParse(xsl);

    let result = xsltProcess(doc, stylesheet);

    console.log(result);

    res.end(result.toString());

});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    const addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port)

});

