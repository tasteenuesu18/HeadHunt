<template>
    <v-card class="mx-auto my-2" max-width="344" outlined @click="openDialog">
      <v-img :src="product.image" height="200px"></v-img>
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-subtitle>価格: ¥{{ product.price }}</v-card-subtitle>
      <v-card-subtitle>発売日: {{ product.releaseDate }}</v-card-subtitle>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    methods: {
      openDialog() {
        this.$emit('open-dialog', this.product.id);
      },
    },
  };
  </script>
  