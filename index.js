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
