const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Specify the base URL for your backend API
    createProxyMiddleware({
      target: 'http://localhost:YOUR_BACKEND_PORT', // Replace YOUR_BACKEND_PORT with the port your Java backend is running on
      changeOrigin: true,
    })
  );
};
