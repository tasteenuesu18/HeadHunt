<template>
    <v-card-text>{{ description }}</v-card-text>
  </template>
  
  <script>
  export default {
    name: 'ProductDescription',
    props: {
      description: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* 必要に応じてカスタムスタイルを追加 */
  </style>
  