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

    // deduce from request (looks at req.connection.encrypted or forwarded header)
    connect.createServer(
      nowww()
    ).listen(80);

    // https always
    connect.createServer(options,
      nowww(true)
    ).listen(443);

    // http always
    connect.createServer(
      nowww(false)
    ).listen(80);
