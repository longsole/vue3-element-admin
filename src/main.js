import { createApp } from 'vue';
import App from '@/App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { setupRouter } from '@/router';
import { setupI18n } from '@/locales';
import { setupStore } from './store';

const app = createApp(App);

const startApp = () => {
  app.use(ElementPlus);

  setupRouter(app);
  setupI18n(app);
  setupStore(app);

  app.mount('#root');
};

startApp();
