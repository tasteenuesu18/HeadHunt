import { createRouter, createWebHistory } from 'vue-router';

import indexView from '@/views/indexView.vue';
import DemoTemp from '@/views/DemoTemp.vue';
import ProductListView from '@/views/ProductListView.vue';

const routes = [
  {
    path: '/',
    name: 'indexView',
    component: indexView,
  },
  {
    path: '/demo',
    name: 'DemoTemp',
    component: DemoTemp,
  },
  {
    path: '/products',
    name: 'ProductListView',
    component: ProductListView,
  },
  // 他のルート設定
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
