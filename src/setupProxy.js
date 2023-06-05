const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/students',
      createProxyMiddleware({
        target: 'http://161.35.9.51',
        
        changeOrigin: true,
        headers: {
            Host: '161.35.9.51',  // Replace with the IP address of your Rails app
          },
      })
    );

    app.use(
        '/excel',
        createProxyMiddleware({
          target: 'http://161.35.9.51',
          changeOrigin: true,
          headers: {
            Host: '161.35.9.51',  // Replace with the IP address of your Rails app
          },
        })
      );

      app.use(
        '/users',
        createProxyMiddleware({
          target: 'http://161.35.9.51/',
          changeOrigin: true,
          headers: {
            Host: '161.35.9.51',  // Replace with the IP address of your Rails app
          },
        })
      );

      app.use(
        '/excel_graduados',
        createProxyMiddleware({
          target: 'http://161.35.9.51',
          changeOrigin: true,
          headers: {
            Host: '161.35.9.51',  // Replace with the IP address of your Rails app
          },
        })
      );

      app.use(
        '/auth',
        createProxyMiddleware({
          target: 'http://161.35.9.51',
          changeOrigin: true,
          headers: {
            Host: '161.35.9.51',  // Replace with the IP address of your Rails app
          },
        })
      );

      app.use(
        '/graduates',
        createProxyMiddleware({
          target: 'http://161.35.9.51',
          changeOrigin: true,
          headers: {
            Host: '161.35.9.51',  // Replace with the IP address of your Rails app
          },
        })
      );

   
  };

  
  
  
  
  
  
  