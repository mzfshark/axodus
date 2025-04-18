module.exports = function override(config, env) {
    // Disable source map warnings for specific node modules
    const sourceMapLoader = config.module.rules.find(rule => rule.loader && rule.loader.includes('source-map-loader'));
    if (sourceMapLoader) {
      sourceMapLoader.exclude = [/node_modules\/@walletconnect/];  // Exclude @walletconnect module
    }
    return config;
  };
  