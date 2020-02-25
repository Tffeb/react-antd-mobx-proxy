const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'http://49.234.235.193:8888',
    changeOrigin: true
  }));
};