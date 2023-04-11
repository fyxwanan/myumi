const path = require('path');

export function chainWebpackConfig(config: any, { webpack }: any) {
  config.resolve.alias.
  set('@', path.resolve(__dirname, 'src'));
}
