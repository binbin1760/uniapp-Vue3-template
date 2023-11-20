// #ifdef VUE3
import { createSSRApp } from 'vue';
import App from './App.vue';
import './mock/mock';

import uviewPlus from 'uview-plus';

export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus);
  return {
    app,
  };
}
// #endif
