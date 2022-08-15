import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '@/views/login/LoginView.vue';
import Layout from '@/views/layout/LayoutMain.vue';

const routes = [
  {
    path: '/login',
    component: Layout,
    redirect: '/login/index',
    children: [
      {
        path: '/login/index',
        component: Login,
      },
    ],
  },
  {
    path: '/',
    component: Layout,
    redirect: '/login',
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export const resetRouter = () => {};

export const setupRouter = (app) => {
  app.use(router);
};
