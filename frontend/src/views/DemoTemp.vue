<template>
  <v-app>
    <v-main>

      <v-container>
        <h1>Demo Temp</h1>
        <p>このページでコンポーネントの確認を行います。</p>
      </v-container>

      <h2>Container Grid</h2>
      <v-container>
        <v-row>
          <v-col cols="12" md="8">
            <CommonCard title="カードのタイトル" text="これはカードのテキストです。" :image="imageBlob" cardHeight="300px" cardWidth="" />
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="pa-4">
              <v-card-title>Contents 2</v-card-title>
              <v-card-text>
                コンテンツ1の詳細情報をここに記載します。補足情報はこちらに記載をします。補足情報はこちらに記載をします。補足情報はこちらに記載をします。補足情報はこちらに記載をします。
              </v-card-text>
            </v-card>
          </v-col>


        </v-row>

      </v-container>

      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-btn color="primary" @click="openDialog('12345')">製品詳細を表示</v-btn>
          </v-col>
        </v-row>
        <ProductDetailDialog :value="showDialog" :productId="selectedProductId" @input="updateDialog($event)"
          @close="closeDialog" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import log from '@/logger';
import CommonCard from '@/components/CommonCard.vue';
import ProductDetailDialog from '@/components/ProductDetailDialog.vue';

export default {
  name: 'DemoTemp',
  components: {
    CommonCard,
    ProductDetailDialog,
  },
  data() {
    return {
      showDialog: false,
      selectedProductId: null,
    };
  },
  methods: {
    openDialog(productId) {
      log.debug('Opening dialog with productId:', productId);
      this.selectedProductId = productId;
      this.showDialog = true;
      log.debug('showDialog after opening:', this.showDialog);
    },
    closeDialog() {
      log.debug('Closing dialog');
      this.showDialog = false;
      log.debug('showDialog after closing:', this.showDialog);
    },
    updateDialog(val) {
      this.showDialog = val;
      if (!val) {
        this.selectedProductId = null;
      }
    },
  },
};
</script>

<style scoped>
/* 必要に応じてカスタムスタイルを追加 */
</style>