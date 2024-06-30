<template>
    <v-card>
      <v-card-title>価格変動グラフ</v-card-title>
      <v-card-text>
        <line-chart :data="priceData" />
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  import { Line } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);
  
  export default {
    name: 'PriceChart',
    components: {
      LineChart: Line,
    },
    props: {
      priceData: {
        type: Array,
        required: true,
      },
    },
    computed: {
      chartData() {
        return {
          labels: this.priceData.map(entry => entry.date),
          datasets: [
            {
              label: '最安値価格',
              data: this.priceData.map(entry => entry.price),
              borderColor: '#42A5F5',
              backgroundColor: '#42A5F5',
              fill: false,
            },
          ],
        };
      },
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };
  </script>
  
  <style scoped>
  /* 必要に応じてカスタムスタイルを追加 */
  </style>
  