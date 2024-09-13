<template>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <ProductCard :product="product" @open-dialog="openDialog" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import ProductCard from './ProductCard.vue';
  
  export default {
    name: 'ProductList',
    components: { ProductCard },
    props: {
      products: {
        type: Array,
        required: true,
      },
    },
    methods: {
      openDialog(productId) {
        this.$emit('open-dialog', productId);
      },
    },
  };
  </script>
  