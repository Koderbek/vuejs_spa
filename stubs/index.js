const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const config = require('../webpack.config.js');
const express = require('express');

const compiler = webpack(config);
const app = express();

app.use(
    middleware(compiler, {  })
);

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Example app listening on port 3000!'));

module.exports = app;