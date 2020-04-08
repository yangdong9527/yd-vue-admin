<template>
  <div>
    首页
    <my-card></my-card>
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
