const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const { merge } = require('webpack-merge');
const mf = withModuleFederationPlugin({ name: 'dim-asignacion', filename: 'remoteEntry.js', exposes: { './Routes': './projects/dim-asignacion/src/app/exposed.routes.ts' }, shared: { ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }) } });
module.exports = function webpackConfig(config) {
  const merged = merge(config, mf);
  merged.output = merged.output || {};
  merged.output.scriptType = 'module';
  function patchPostcssLoaders(rules) {
    if (!rules) return;
    for (const rule of rules) {
      if (rule.rules) patchPostcssLoaders(rule.rules);
      if (rule.oneOf) patchPostcssLoaders(rule.oneOf);
      if (Array.isArray(rule.use)) { for (const use of rule.use) { if (use && typeof use === 'object' && typeof use.loader === 'string' && use.loader.includes('postcss-loader')) { use.options = use.options || {}; use.options.postcssOptions = use.options.postcssOptions || {}; use.options.postcssOptions.plugins = [require('tailwindcss'), require('autoprefixer')]; } } }
    }
  }
  patchPostcssLoaders(merged.module?.rules);
  return merged;
};
