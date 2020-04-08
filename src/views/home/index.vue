<template>
  <div>
    首页
    <my-card></my-card>
    <svg-icon icon="arrow_down"></svg-icon>
  </div>
</template>

<script>
import myCard from '@/components/myCard/index.vue'
export default {
  name: 'home',
  components: {
    myCard
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">

</style>
