const proxy = require('http-proxy-middleware');
const morgan = require('morgan');

// Creating a proxy to access ViaPlay content
// The intention with this is to avois CORS errors in development environment
// Because when running with a localhost server, CORS will block the request
module.exports = function(app) {
    app.use(morgan('combined'));
  
    app.use(
    '/serier',
    proxy({
      target: 'https://content.viaplay.se/pc-se',
      changeOrigin: true,
      logLevel: 'debug'
    })
  );
};