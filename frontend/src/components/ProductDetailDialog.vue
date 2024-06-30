<template>
  <v-dialog v-model="dialog" :width="dialogWidth" @click:outside="closeDialog">
    <v-card class="scrollable-dialog">
      <v-card-title class="sticky-header">
        <v-toolbar flat class="no-background">
          <v-toolbar-title>{{ productTitle }}</v-toolbar-title>
          <!-- <v-spacer></v-spacer> -->
          <v-btn icon @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card-title>
      <v-card-text>
        <ProductCarousel :images="productImages" />
        <ProductDescription :description="productDescription" />
        <ProductTags :tags="productTags" />
        <ReviewList :reviews="productReviews" />
        <PurchaseLinks :links="purchaseLinks" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import log from '@/logger';
import ProductCarousel from '@/components/ProductCarousel.vue';
import ProductDescription from '@/components/ProductDescription.vue';
import ProductTags from '@/components/ProductTags.vue';
import ReviewList from '@/components/ReviewList.vue';
import PurchaseLinks from '@/components/PurchaseLinks.vue';

export default {
  name: 'ProductDetailDialog',
  props: {
    productId: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      productTitle: '製品名', // ここに製品名を設定する
      productImages: [],
      productDescription: '',
      productTags: [],
      productReviews: [],
      purchaseLinks: [],
    };
  },
  computed: {
    dialogWidth() {
      return window.innerWidth <= 600 ? '90%' : '70%';
    },
  },
  watch: {
    productId() {
      log.debug('Product ID changed:', this.productId);
      this.fetchProductDetails();
    },
    value(val) {
      this.dialog = val;
    },
    dialog(val) {
      this.$emit('input', val);
      if (!val) {
        this.clearData();
      }
    },
  },
  methods: {
    fetchProductDetails() {
      log.debug('Fetching product details for ID:', this.productId);
      this.dialog = true;
      this.productTitle = `Product title for ID: ${this.productId}`; // ダミータイトル
      this.productDescription = `Product description for ID: ${this.productId}`;
      this.productImages = [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
      ];
      this.productTags = [
      {
          name: '基本仕様',
          tags: [
            { name: 'Bluetooth 5.0', description: 'Bluetooth 5.0規格は高速通信と低消費電力を特徴とします。' },
            { name: 'ワイヤレス', description: 'ケーブルなしで音楽を楽しめます。' },
            { name: '有線', description: 'ケーブル接続により安定した音質を提供します。' },
          ],
        },
        {
          name: '機能',
          tags: [
            { name: 'ノイズキャンセリング', description: '周囲の音を遮断し、クリアな音質を提供します。' },
            { name: '防水', description: 'IPX7等級の防水性能を持ち、雨や汗にも耐えます。' },
            { name: '高音質', description: 'ハイレゾ音源対応で高音質を楽しめます。' },
          ],
        },
      ];
      this.productReviews = [
        { user: 'ユーザー1', rating: 4.5, comment: '素晴らしい製品です。' },
        { user: 'ユーザー2', rating: 3.0, comment: '普通の製品です。' },
      ];
      this.purchaseLinks = [
        { site: 'Amazon', url: 'https://amazon.com' },
        { site: '楽天', url: 'https://rakuten.co.jp' },
      ];
    },
    closeDialog() {
      log.debug('Dialog closed');
      this.dialog = false;
    },
    clearData() {
      this.productImages = [];
      this.productDescription = '';
      this.productTags = [];
      this.productReviews = [];
      this.purchaseLinks = [];
    },
  },
  components: {
    ProductCarousel,
    ProductDescription,
    ProductTags,
    ReviewList,
    PurchaseLinks,
  },
  mounted() {
    log.debug('ProductDetailDialog mounted');
  },
};
</script>

<style scoped>
.scrollable-dialog {
  max-height: 90vh;
  /* ダイアログの高さを制限 */
  overflow-y: auto;
  /* 縦スクロールを有効にする */
  border-radius: 12px;
  /* ダイアログ全体の角を丸くする */
}

/* カスタムスクロールバーのスタイル */
.scrollable-dialog::-webkit-scrollbar {
  width: 12px;
}

/* .scrollable-dialog::-webkit-scrollbar-track {
  background: #f1f1f1;
} */

.scrollable-dialog::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 8px;
}

.scrollable-dialog::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.sticky-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
  /* 必要に応じて背景色を設定 */
}

.no-background {
  background-color: transparent !important;
}

/* ダイアログ全体の角を丸くする */
.v-dialog>.v-overlay__content>.v-card {
  border-radius: 12px;
}
</style>
