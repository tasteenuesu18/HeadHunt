<template>
    <v-container class="d-flex py-0">
      <v-container class="d-none d-md-flex justify-center flex-column align-center pa-0" style="width: 100px;">
        <svg-icon type="mdi" :path="filterSVG" class="mx-2"></svg-icon>
        <span>ソート</span>
      </v-container>
      <v-container class="border-dotted pa-5">
        <v-row>
          <!-- 発売日・価格・人気・レビュー -->
          <v-col cols="3" class="d-flex justify-center pa-0">
            <v-list-item link class="rounded-lg w-100" @click="toggleSort('releaseDateAsc')">
              <v-list-item-content class="d-flex flex-column align-center">
                <svg-icon type="mdi" :path="sortOrders.releaseDateAsc ? dateAsc : dateDesc" class="mx-2"></svg-icon>
                <span class="text-caption">発売日</span>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="3" class="d-flex justify-center pa-0">
            <v-list-item link class="rounded-lg w-100" @click="toggleSort('priceAsc')">
              <v-list-item-content class="d-flex flex-column align-center">
                <svg-icon type="mdi" :path="sortOrders.priceAsc ? priceAsc : priceDesc" class="mx-2"></svg-icon>
                <span class="text-caption">価格</span>

              </v-list-item-content>
            </v-list-item></v-col>
          <v-col cols="3" class="d-flex justify-center pa-0">
            <v-list-item link class="rounded-lg w-100" @click="toggleSort('popularAsc')">
              <v-list-item-content class="d-flex flex-column align-center">
                <svg-icon type="mdi" :path="sortOrders.popularAsc ? sort_asc : sort_desc" class="ml-1 mr-2"></svg-icon>
                <span class="text-caption">人気</span>

              </v-list-item-content>
            </v-list-item></v-col>
          <v-col cols="3" class="d-flex justify-center pa-0">
            <v-list-item link class="rounded-lg w-100" @click="toggleSort('reviewAsc')">
              <v-list-item-content class="d-flex flex-column align-center">
                <svg-icon type="mdi" :path="sortOrders.reviewAsc ? sort_asc : sort_desc" class="ml-1 mr-2"></svg-icon>
                <span class="text-caption">レビュー</span>

              </v-list-item-content>
            </v-list-item></v-col>
        </v-row>
      </v-container>

    </v-container>
  
  </template>
  
  <script>
  import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiSortCalendarAscending, mdiSortCalendarDescending, mdiSortNumericAscending, mdiSortNumericDescending,
  mdiPodium, mdiCommentAccountOutline, mdiSortAscending, mdiSortDescending, mdiFilterCog
} from '@mdi/js';


export default {
  name: 'ProductListView',
  components: {
    SvgIcon
  },
  data: () => ({
    dateAsc: mdiSortCalendarAscending,
    dateDesc: mdiSortCalendarDescending,
    priceAsc: mdiSortNumericAscending,
    priceDesc: mdiSortNumericDescending,
    ranking: mdiPodium,
    review: mdiCommentAccountOutline,
    sort_asc: mdiSortAscending,
    sort_desc: mdiSortDescending,
    filterSVG: mdiFilterCog,

    // 各ソート条件ごとに昇順(true)または降順(false)を管理するオブジェクト
    sortOrders: {
      releaseDateAsc: true, // 昇順
      priceAsc: true,
      popularAsc: true,
      reviewAsc: true,
    },

  }),
  methods: {
    toggleSort(sortType) {
      // 指定されたソート条件の昇順/降順を切り替える
      this.sortOrders[sortType] = !this.sortOrders[sortType];
    },
  },
};
  </script>
  
  <style scoped>
  /* 必要に応じてカスタムスタイルを追加 */
  </style>