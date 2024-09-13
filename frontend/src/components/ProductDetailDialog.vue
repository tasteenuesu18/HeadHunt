<template>
  <v-dialog v-model="dialog" :width="dialogWidth" @click:outside="closeDialog">
    <v-card class="scrollable-dialog">
      <v-card-title class="sticky-header">
        <v-toolbar flat class="no-background">
          <v-toolbar-title>{{ productTitle }}</v-toolbar-title>
          <v-spacer></v-spacer>
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
      productTitle: '製品名',
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
      this.productTitle = `Product title for ID: ${this.productId}`;
      this.productDescription = `Product description for ID: ${this.productId}`;
      this.productImages = [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
      ];
      this.productTags = [
        {
          name: '機能',
          tags: [
            { name: 'Bluetooth 5.0' },
            { name: 'ノイズキャンセリング' },
            { name: '防水' },
          ],
        },
      ];
      this.productReviews = [
        {
          reviewer: 'ユーザー1',
          rating: 4.5,
          comment: '素晴らしい製品です。',
          date: '2023-06-01',
        },
        {
          reviewer: 'ユーザー2',
          rating: 3.0,
          comment: '普通の製品です。',
          date: '2023-06-02',
        },
        {
          reviewer: 'ユーザー3',
          rating: 5.0,
          comment: '最高です。',
          date: '2023-06-03',
        },
        {
          reviewer: 'ユーザー4',
          rating: 2.0,
          comment: '期待外れです。',
          date: '2023-06-04',
        },
        {
          reviewer: 'ユーザー5',
          rating: 4.0,
          comment: '良い製品です。',
          date: '2023-06-05',
        },
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
  overflow-y: auto;
  border-radius: 12px;
}

.scrollable-dialog::-webkit-scrollbar {
  width: 12px;
}

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
}

.no-background {
  background-color: transparent !important;
}

.v-dialog > .v-overlay__content > .v-card {
  border-radius: 12px;
}
</style>
