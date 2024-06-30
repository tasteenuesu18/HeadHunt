import { createRouter, createWebHistory } from 'vue-router';

import DemoTemp from '@/views/DemoTemp.vue';

const routes = [
  {
    path: '/demo',
    name: 'DemoTemp',
    component: DemoTemp, // DemoTemp へのルートを追加
  },
  // 他のルート設定
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
