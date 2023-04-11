import { defineConfig } from 'umi';
import path from 'path';
import router from './src/routers';

export default defineConfig({
  layout: {
    title: 'xiaoreya-home',
    headerRender: false, 
    footerRender:false, 
    menuRender:false,
  },
  targets: {
    ie: 11,
  },
  hash: true,
  // react配置
  antd: {
   
  },
  dva: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: router,
  ignoreMomentLocale: true, // 忽略moment 中的locale
  theme: {
    "@primary-color": "#2196F3",
    "@body-background": "#ffffff",
  },
  lessLoader: {
    javascriptEnabled: true,
  },
  define: {
    'process.env.ENV_SECURE': false,
    'process.env.PUB_TIME': new Date(),
  },
});
