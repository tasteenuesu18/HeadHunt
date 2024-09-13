<template>
    <v-expansion-panels>
      <v-expansion-panel
      class="my-4 rounded-lg elevation-0">
        <v-expansion-panel-title>
          <span class="text-subtitle-2 font-weight-bold">レビュー</span>
          <v-icon class="mx-3" >mdi-comment-multiple</v-icon>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div v-if="loading">読み込み中...</div>
          <div v-else>
            <ReviewItem
              v-for="(review, index) in paginatedReviews"
              :key="index"
              :review="review"
              :color="userColors[index % userColors.length]"
            />
            <v-pagination
              v-model="currentPage"
              :length="totalPages"
              @input="fetchReviews"
            ></v-pagination>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </template>
  
  <script>
  import ReviewItem from './ReviewItem.vue';
  
  export default {
    name: 'ReviewList',
    components: { ReviewItem },
    data() {
      return {
        currentPage: 1,
        itemsPerPage: 5,
        totalReviews: 0,
        userColors: ['red', 'blue', 'green', 'orange', 'purple'],
        localReviews: [],
        loading: false,
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.totalReviews / this.itemsPerPage);
      },
      paginatedReviews() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.localReviews.slice(start, end);
      },
    },
    methods: {
      async fetchReviews() {
        this.loading = true;
        try {
          // Simulate an API call
          await new Promise((resolve) => setTimeout(resolve, 500));
          const start = (this.currentPage - 1) * this.itemsPerPage;
          const end = start + this.itemsPerPage;
          this.localReviews = Array.from({ length: 15 }, (_, index) => ({
            id: index + 1,
            reviewer: `Reviewer ${index + 1}`,
            rating: Math.floor(Math.random() * 5) + 1,
            text: 'これはサンプルのレビューです。',
            date: new Date().toLocaleDateString(),
          })).slice(start, end);
          this.totalReviews = 15; // Simulated total number of reviews
        } catch (error) {
          console.error('Failed to fetch reviews', error);
        } finally {
          this.loading = false;
        }
      },
    },
    mounted() {
      // Fetch reviews when the panel is opened for the first time
      this.$nextTick(() => {
        if (!this.localReviews.length) {
          this.fetchReviews();
        }
      });
    },
  };
  </script>
  
  <style scoped>
  /* 必要に応じてカスタムスタイルを追加 */
  </style>
  