<template>
  <div :style="{'width': width, 'height': height}"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'barChard',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: ''
    }
  },
  mounted() {
    this.init()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    init() {
      this.chart = echarts.init(this.$el)

      this.chart.setOption({
        title: {
          text: '一周消费',
        },
        legend: {
          top: 10,
          data: ['收入', '支出']
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}元'
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '收入',
            type: 'bar',
            data: [30,25,33,22,15,18,26],
          },
          {
            name: '支出',
            type: 'bar',
            data: [20,10,15,16,22,18,5]
          }
        ]
      })
    },
    handleResize() {
      this.chart.resize()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
