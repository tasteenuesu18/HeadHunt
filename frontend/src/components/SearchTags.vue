<template>
    <div class="search-tags">
      <v-chip
        v-for="(tag, index) in tags"
        :key="index"
        close
        @click:close="removeTag(index)"
        class="ma-1"
        outlined
        color="primary"
      >
        {{ tag }}
      </v-chip>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchTags',
    props: {
      tags: {
        type: Array,
        required: true,
      },
    },
    methods: {
      removeTag(index) {
        this.$emit('remove-tag', index);
      },
    },
  };
  </script>
  
  <style scoped>
  .search-tags {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  