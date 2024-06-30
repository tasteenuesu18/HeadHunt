<template>
    <div>
        <!-- メイン画像のカルーセル -->
        <v-carousel v-model="currentIndex" hide-delimiters :show-arrows="!isMobile" class="custom-carousel">
            <v-carousel-item v-for="(image, index) in images" :key="index">
                <v-img :src="image" class="main-image"></v-img>
            </v-carousel-item>
        </v-carousel>

        <!-- サムネイル画像のリスト -->
        <div class="thumbs-container">
            <div class="thumbs-wrapper">
                <v-img v-for="(image, index) in images" :key="index" :src="image" class="thumbnail-image"
                    :class="{ active: currentIndex === index }" @click="changeImage(index)"></v-img>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCarousel',
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      isMobile: window.innerWidth <= 600
    };
  },
  methods: {
    changeImage(index) {
      this.currentIndex = index;
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 600;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style scoped>

@media (max-width: 600px) {
    .custom-carousel {
        height: auto !important;
    }
}

.main-image {
    width: 100%;
    height: auto;
}

.thumbs-container {
    margin-top: 10px;
    overflow-x: auto;
    /* 横スクロールを有効にする */
    display: flex;
}

.thumbs-wrapper {
    display: flex;
    flex-wrap: nowrap;
}

.thumbnail-image {
    width: 60px;
    height: 60px;
    margin: 5px;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 6px;
    /* サムネイル画像の角を丸くする */
    transition: border-color 0.3s;
}

.thumbnail-image.active {
    border-color: #1976d2;
    /* Vuetifyのプライマリカラーを使用 */
}

/* カスタムスクロールバーのスタイル */
.thumbs-container::-webkit-scrollbar {
    height: 8px;
}

.thumbs-container::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.thumbs-container::-webkit-scrollbar-thumb {
    background: #1976d2;
    border-radius: 4px;
}

.thumbs-container::-webkit-scrollbar-thumb:hover {
    background: #024180;
}
</style>