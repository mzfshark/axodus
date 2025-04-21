// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      // Modificando a configuração do Webpack
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /@reown\/appkit/, // Ignora os source maps do appKit
      });
  
      // Configuração adicional, se necessário
      if (!isServer) {
        config.devtool = false; // Desabilita source maps no cliente em produção
      }
  
      return config;
    },
  };
  