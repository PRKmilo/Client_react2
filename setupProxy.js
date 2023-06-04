const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/students',
      createProxyMiddleware({
        target: 'http://161.35.9.51',
        changeOrigin: true,
      })
    );

    app.use(
        '/excel_graduado',
        createProxyMiddleware({
          target: 'http://161.35.9.51',
          changeOrigin: true,
        })
      );

      app.use(
        '/users',
        createProxyMiddleware({
          target: 'http://161.35.9.51/',
          changeOrigin: true,
        })
      );

      app.use(
        '/excel',
        createProxyMiddleware({
          target: 'http://161.35.9.51',
          changeOrigin: true,
        })
      );

      app.use(
        '/auth',
        createProxyMiddleware({
          target: 'http://161.35.9.51',
          changeOrigin: true,
        })
      );

      app.use(
        '/graduates',
        createProxyMiddleware({
          target: 'http://161.35.9.51',
          changeOrigin: true,
        })
      );

   
  };

  
  
  
  
  
  
  