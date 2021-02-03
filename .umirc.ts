import { defineConfig } from 'umi';
// import { chainWebpackConfig } from './webpack.config.js';

export default defineConfig({
  layout: {},
  targets: {
    ie: 11,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  // chainWebpackConfig: chainWebpackConfig,
});
