<template>
  <v-app>
    <AppHeader />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'App',
  
  components: {
    AppHeader,
  },
};

</script>

<style>
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --accent-color: #e74c3c;
  --background-color: #ecf0f1;
  --text-color: #2c3e50;
}

body {
  /* font-family: "Noto Sans JP", sans-serif; */
  background-color: var(--background-color);
  color: var(--text-color);
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
