import { createSSRApp } from 'vue';
import App from './App.vue';
import './mock/mock'

export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
