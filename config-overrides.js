// @ts-nocheck

const webpack = require('webpack');

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    assert: require.resolve('assert/'),
    os: require.resolve('os-browserify/browser'),
    path: require.resolve('path-browserify'),
    crypto: require.resolve('crypto-browserify'),
    url: require.resolve('url/'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    stream: require.resolve('stream-browserify'),
    zlib: require.resolve('browserify-zlib'),

    fs: false,
  });
  config.resolve.fallback = fallback;

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);

  config.resolve.extensions.push('.mjs');
  config.module.rules.push({
    type: 'javascript/auto',
    test: /\.mjs$/,
    include: /node_modules/,
  });

  config.module.rules.push({
    type: 'javascript/auto',
    test: /\.js$/,
    include: /node_modules/,
  });

  return config;
};
