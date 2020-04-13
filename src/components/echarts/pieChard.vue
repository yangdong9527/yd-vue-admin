<template>
  <div :style="{'width': width, 'height': height}"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'pieChard',
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
          text: '今日支出',
          left: 10,
          top: 10,
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}元 ({d}%)'
        },
        legend: {
          right: '10',
          bottom: '10',
          data: ['早饭', '中饭', '晚饭', '其他']
        },
        series: [
          {
            name: '今日支出',
            type: 'pie',
            roseType: false,
            radius: [30, 95],
            center: ['50%', '50%'],
            data: [
              { value: 5, name: '早饭' },
              { value: 18, name: '中饭' },
              { value: 12, name: '晚饭' },
              { value: 2, name: '其他' },
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 1000
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
