import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { createHead } from '@vueuse/head';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        primary: '#3498db',
        secondary: '#2ecc71',
        accent: '#e74c3c',
        background: '#ecf0f1',
        text: '#2c3e50',
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

// デバッグモードを有効にする
const app = createApp(App);

app.config.devtools = true;
app.config.performance = true;

app.use(router)
   .use(store)
   .use(createHead())
   .use(vuetify)
   .mount('#app');

console.log('Vue app mounted');  // ログを追加
