<template>
  <v-form>
    <v-expansion-panels>
      <!-- 機能フィルター -->
      <v-expansion-panel>
        <v-expansion-panel-header>機能フィルター</v-expansion-panel-header>
        <svg-icon type="mdi" :path="path"></svg-icon>
        <v-expansion-panel-content>
          <v-checkbox
            v-for="(feature, index) in featureOptions"
            :key="index"
            :label="feature"
            :value="feature"
            v-model="selectedFeatures"
          ></v-checkbox>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <!-- 価格フィルター -->
      <v-expansion-panel>
        <v-expansion-panel-header>価格フィルター</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-checkbox
            v-for="(price, index) in priceOptions"
            :key="index"
            :label="price.label"
            :value="price.value"
            v-model="selectedPriceRange"
          ></v-checkbox>
          <v-text-field
            v-model="minPrice"
            label="最低価格"
            type="number"
            outlined
            dense
            clearable
          ></v-text-field>
          <v-text-field
            v-model="maxPrice"
            label="最高価格"
            type="number"
            outlined
            dense
            clearable
          ></v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <!-- メーカーフィルター -->
      <v-expansion-panel>
        <v-expansion-panel-header>メーカー</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-checkbox
            v-for="(manufacturer, index) in manufacturerOptions"
            :key="index"
            :label="manufacturer"
            :value="manufacturer"
            v-model="selectedManufacturers"
          ></v-checkbox>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-btn color="primary" @click="applyFilters">検索</v-btn>
  </v-form>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiFilterMenu } from '@mdi/js';

export default {
  name: 'SearchForm',
  components: {
    SvgIcon
  },
  data() {
    return {
      selectedFeatures: [],
      selectedManufacturers: [],
      selectedPriceRange: [],
      minPrice: '',
      maxPrice: '',
      featureOptions: ['Bluetooth', 'ノイズキャンセリング', '防水'],
      manufacturerOptions: ['Sony', 'Panasonic', 'Bose'],
      priceOptions: [
        { label: '0～5000円', value: [0, 5000] },
        { label: '5000～10000円', value: [5000, 10000] },
        { label: '10000～20000円', value: [10000, 20000] },
      ],
      path: mdiFilterMenu,
    };
  },
  methods: {
    applyFilters() {
      this.$emit('search', {
        selectedFeatures: this.selectedFeatures,
        selectedManufacturers: this.selectedManufacturers,
        selectedPriceRange: this.selectedPriceRange,
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
      });
    },
  },
};
</script>

<style scoped>
/* 必要に応じてカスタムスタイルを追加 */
</style>
