const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api/users', {
            target: 'http://localhost:8062/beta/fintlabs-no', // API endpoint 1
            changeOrigin: true,
            //pathRewrite: {"^/api1": ""},
            headers: {
                Connection: "keep-alive"
            }
        })
    );

}