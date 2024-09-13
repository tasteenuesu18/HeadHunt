<template>

  <v-vontainer class="">

    <v-layout>
      <v-navigation-drawer permanent>
        <v-list v-model:opened="open">
          <v-list-item title="Home"></v-list-item>

          <v-list-group value="Users">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="Users"></v-list-item>
            </template>

            <v-list-group value="Admin">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Admin"></v-list-item>
              </template>

              <v-list-item v-for="([title, icon], i) in admins" :key="i" :prepend-icon="icon" :title="title"
                :value="title"></v-list-item>
            </v-list-group>

            <v-list-group value="Actions">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Actions"></v-list-item>
              </template>

              <v-list-item v-for="([title, icon], i) in cruds" :key="i" :prepend-icon="icon" :title="title"
                :value="title"></v-list-item>
            </v-list-group>
          </v-list-group>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main class="h-screen">
        <!-- Title用 -->
        <v-container class="">
          <p class="text-h4">製品一覧</p>
        </v-container>
        <ProductSort />
      </v-main>
    </v-layout>




  </v-vontainer>



</template>


<script>

import ProductSort from '@/components/product/ProductSort.vue';


export default {
  name: 'ProductListView',
  components: {
    ProductSort,
  },
  data: () => ({
    open: ['Users'],
    admins: [
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline'],
    ],
    cruds: [
      ['Create', 'mdi-plus-outline'],
      ['Read', 'mdi-file-outline'],
      ['Update', 'mdi-update'],
      ['Delete', 'mdi-delete'],
    ],
  }),
};
</script>

<style scoped></style>
