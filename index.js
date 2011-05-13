module.exports = function(secure) {
  return function(req, res, next) {
    if (/^www\./.exec(req.headers.host)) {
      var host = req.headers.host.substring(req.headers.host.indexOf('.') + 1)
        , url  = (secure ? 'https://' : 'http://') + host + req.url
      res.writeHead(301, { 'Location': url });
      return res.end();
    }
    return next();
  };
};