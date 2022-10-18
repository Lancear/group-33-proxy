const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');

// Configuration
const PORT = 3000;
const HOST = 'localhost';
const PROXY_TARGET = 'https://lit-inlet-05101.herokuapp.com/'

const app = express();
app.use(morgan('dev'));
app.use(createProxyMiddleware({
  target: PROXY_TARGET,
  changeOrigin: true,
}));

app.listen(PORT, HOST, () => console.log(
  `Proxy server is up and running at http://${HOST}:${PORT}`
));
