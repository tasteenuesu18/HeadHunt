<template>
  <v-app-bar app color="darken-3" dark scroll-behavior="hide">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-toolbar-title>HeadHunt</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field label="検索" single-line hide-details></v-text-field>
    <v-btn icon="mdi-magnify"></v-btn>
    <v-btn text>
      製品一覧
    </v-btn>
    <v-btn text>
      新着トピックス
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBarNav',
  mounted() {
    console.log('AppBarNav component mounted');
  },
};
</script>

<style scoped>
/* 必要に応じてカスタムスタイルを追加 */
</style>