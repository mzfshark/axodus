const path = require('path');

module.exports = {
  mode: 'production', // Modo de produção
  devtool: false, // Desabilita source maps em produção
  resolve: {
    alias: {
      // Se necessário, adicione aliases para facilitar a resolução de módulos.
      // Exemplo:
      '@components': path.resolve(__dirname, 'src/components/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
//        exclude: /@reown\/appkit/, // Ignora os arquivos de source map do pacote @reown/appkit
      },
      {
        test: /\.jsx?$/, // Trata arquivos JS e JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Usando Babel para transpilar o código
        },
      },
      {
        test: /\.tsx?$/, // Para TypeScript (se necessário)
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader', // Usando o ts-loader para TypeScript
        },
      },
    ],
  },
  optimization: {
    minimize: true, // Ativa a minificação em produção
    splitChunks: {
      chunks: 'all', // Divida os chunks grandes (se necessário)
    },
  },
  stats: {
    warningsFilter: [
      /Failed to parse source map/, // Ignora warnings de source map
    ],
  },
  performance: {
    hints: false, // Desabilita os avisos de performance, como "asset size too large"
  },
  plugins: [
    // Se necessário, adicione plugins aqui. Exemplo:
    // new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};
