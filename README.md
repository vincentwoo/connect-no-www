connect-no-www
--------------

Connect middleware to redirect clients from www.yourhost.com to yourhost.com

Usage:

    nowww = require('connect-no-wwww');
    nowww(secure); //true if https, false or optional otherwise
    
Example:

    var connect = require('connect')
      , nowww = require('connect-no-www')
      , fs = require('fs')
      , http = require('http')
      , https = require('https')
      , options = {
          key: fs.readFileSync('ryans-key.pem'),
          cert: fs.readFileSync('ryans-cert.pem')
        };

    connect.createServer(options, 
      nowww(true)
    ).listen(8080);

    connect.createServer(
      nowww(false)
    ).listen(8000);
