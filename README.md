[![build status](https://secure.travis-ci.org/vincentwoo/connect-no-www.png)](http://travis-ci.org/vincentwoo/connect-no-www)
connect-no-www
--------------

Connect middleware to redirect clients from www.yourhost.com to yourhost.com

Usage:

    npm install connect-no-www

    nowww = require('connect-no-www');
    nowww(secure); // returns middlware, true if https, false or optional otherwise
    
Example:

    var connect = require('connect')
      , nowww = require('connect-no-www')
      , fs = require('fs')
      , options = {
          key: fs.readFileSync('ryans-key.pem'),
          cert: fs.readFileSync('ryans-cert.pem')
        };

    // https
    connect.createServer(options, 
      nowww(true)
    ).listen(443);

    // http
    connect.createServer(
      nowww(false)
    ).listen(80);
