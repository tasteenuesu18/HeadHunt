<template>
    <div class="tag-area">
      <div v-for="(subcategory, subIndex) in tags" :key="subIndex">
        <h3>{{ subcategory.name }}</h3>
        <v-chip-group column>
          <div v-for="(tag, tagIndex) in subcategory.tags" :key="tagIndex">
            <v-tooltip bottom :content="tag.description" attach="body">
              <template v-slot:activator="{ on, attrs }">
                <v-chip
                  color="primary"
                  text-color="white"
                  v-bind="attrs"
                  v-on="on"
                  @click="showTooltip(tag.description)"
                  @mouseover="showTooltip(tag.description)"
                  @mouseleave="hideTooltip"
                >
                  {{ tag.name }}
                </v-chip>
              </template>
            </v-tooltip>
          </div>
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
    data() {
      return {
        tooltipText: '',
      };
    },
    methods: {
      showTooltip(description) {
        this.tooltipText = description;
      },
      hideTooltip() {
        this.tooltipText = '';
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
  
  .v-tooltip {
    z-index: 2000 !important; /* ツールチップのz-indexを設定して前面に表示 */
  }
  </style>
  