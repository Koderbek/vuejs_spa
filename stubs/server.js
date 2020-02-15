const hotClient = require('webpack-hot-client');
const middleware = require('webpack-dev-middleware');
const express = require("express");
const webpack = require('webpack');
const config = require('../webpack.config.js');

const app = express();
const compiler = webpack(config);
const { publicPath } = config.output;
const options = {
 autoConfigure: true
};

const client = hotClient(compiler, options);
const { server } = client;

server.on('listening', () => {
 // eslint-disable-next-line no-undef
 app.use(middleware(compiler, { publicPath }));
});