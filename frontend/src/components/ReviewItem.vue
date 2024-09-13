<template>
  <div class="my-4">
    <div class="d-flex align-center">
      <v-avatar size="small" :color="color" class="mr-2">
        <v-icon size="small">mdi-account</v-icon>
      </v-avatar>
      <v-rating
        class="rating mx-2"
        :value="review.rating"
        half-increments
        density="compact"
        size="small"
        readonly
      ></v-rating>
      <span class="review-date">{{ review.date }}</span>
    </div>
    <div class="review-text py-2">{{ review.text }}</div>
  </div>
    
  </template>
  
  <script>
  export default {
    name: 'ReviewItem',
    props: {
      review: {
        type: Object,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .review-item {
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .rating {
    margin-right: 10px;
    display: flex;
    flex-wrap: nowrap;
  }

  .review-date {
    font-size: 0.8em;
    color: gray;
    margin-left: auto; /* 右端に配置 */
  }

  </style>
  