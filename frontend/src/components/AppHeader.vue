<template>
  <v-app-bar color="grey-darken-1" flat scroll-behavior="hide" density="comfortable" class="border-xs">

    <!-- モバイル用ハンバーガアイコンここから -->
    <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <!-- モバイル用ハンバーガアイコンここまで -->

    <v-app-bar-title class="pr-12">HeadHunt</v-app-bar-title>

    <v-row class="d-none d-md-flex justify-end align-center">
      <v-col cols="5">
        <v-list-item>
          <v-text-field append-inner-icon="mdi-magnify" density="compact" label="あいまいけんさく" variant="solo" hide-details
            single-line></v-text-field>
        </v-list-item>
      </v-col>
      <v-col cols="auto" justify="center">
        <v-list-item link class="rounded-lg">
          <v-list-item-content class="d-flex">
            <v-list-item-title>製品一覧</v-list-item-title>
            <svg-icon type="mdi" :path="product" class="mx-2"></svg-icon>
          </v-list-item-content>
        </v-list-item>

      </v-col>
      <v-col cols="auto">
        <v-list-item link class="rounded-lg">
          <v-list-item-content class="d-flex">
            <v-list-item-title>新着トピックス</v-list-item-title>
            <svg-icon type="mdi" :path="news" class="mx-2"></svg-icon>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-app-bar>

  <!-- モバイル用メニューここから -->
  <v-navigation-drawer v-model="drawer" temporary width="400">
    <v-text-field hint="商品名、機能など" label="あいまいけんさく" variant="outlined" persistent-hint append-inner-icon="mdi-magnify"
      class="py-10 px-4 border-b-lg"></v-text-field>
    <v-list-item link class="py-6">
      <v-list-item-content class="d-flex justify-center">
        <v-list-item-title>製品一覧</v-list-item-title>
        <svg-icon type="mdi" :path="product" class="mx-2"></svg-icon>
      </v-list-item-content>
    </v-list-item>
    <v-list-item link class="py-6">
      <v-list-item-content class="d-flex justify-center">
        <v-list-item-title>新着トピックス</v-list-item-title>
        <svg-icon type="mdi" :path="news" class="mx-2"></svg-icon>
      </v-list-item-content>
    </v-list-item>
  </v-navigation-drawer>
  <!-- モバイル用メニューここまで -->

</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHeadphones, mdiNewBox } from '@mdi/js';


export default {
  name: 'AppHeader',
  components: {
    SvgIcon
  },
  data: () => ({
    drawer: false,
    group: null,
    product: mdiHeadphones,
    news: mdiNewBox,
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },

}
</script>

<style scoped>
/* 必要に応じてカスタムスタイルを追加 */
</style>