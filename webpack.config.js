module.exports = {
    // Outras configurações do Webpack
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: /@reown\/appkit/,
        },
      ],
    },
  };
  