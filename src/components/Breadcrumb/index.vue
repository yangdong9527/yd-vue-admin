<template>
  <div class="bread-crumb">
    <h3>{{routerArr[routerArr.length - 1].title}}</h3>
    <el-breadcrumb>
      <el-breadcrumb-item v-for="(item, index) in routerArr" :key="index">{{item.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  computed: {
    routerArr() {
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title).map(v => {
        return {
          title: v.meta.title,
          path: v.path
        }
      })
      return matched
    }
  }
}
</script>

<style scoped lang="scss">
</style>
