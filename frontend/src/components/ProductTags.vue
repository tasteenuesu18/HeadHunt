<template>
    <div class="tag-area">
      <div v-for="(subcategory, subIndex) in tags" :key="subIndex">
        <h4>{{ subcategory.name }}</h4>
        <v-chip-group column>
          <v-chip
            v-for="(tag, tagIndex) in subcategory.tags"
            :key="tagIndex"
            color="primary"
            text-color="white"
            class="non-clickable-chip"
          >
            {{ tag.name }}
          </v-chip>
        </v-chip-group>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductTags',
    props: {
      tags: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .tag-area {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .tag-area h3 {
    margin-bottom: 8px;
  }
  
  .v-chip {
    margin: 4px;
  }

  .v-chip.v-chip--size-default {
    font-size: 0.7rem;
  }
  
  .non-clickable-chip {
    pointer-events: none; /* クリックを無効化 */
    cursor: default; /* ホバー時にカーソルが変わらないようにする */
  }
  </style>
  