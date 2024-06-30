<template>
    <v-card>
      <v-card-title>購入リンク</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            :href="link.url"
            target="_blank"
            rel="noopener"
          >
            <v-list-item-content>
              <v-list-item-title>{{ link.site }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon>mdi-open-in-new</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'PurchaseLinks',
    props: {
      links: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* 必要に応じてカスタムスタイルを追加 */
  </style>
  