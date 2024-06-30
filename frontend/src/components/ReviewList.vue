<template>
    <v-list>
      <v-list-item
        v-for="(review, index) in reviews"
        :key="index"
      >
        <v-list-item-avatar>
          <v-icon>mdi-account-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ review.user }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-rating
              v-model="review.rating"
              background-color="yellow"
              color="yellow darken-2"
              readonly
              half-increments
              size="20"
            ></v-rating>
          </v-list-item-subtitle>
          <v-list-item-text>
            {{ review.comment }}
          </v-list-item-text>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </template>
  
  <script>
  export default {
    name: 'ReviewList',
    props: {
      reviews: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* 必要に応じてカスタムスタイルを追加 */
  </style>
  