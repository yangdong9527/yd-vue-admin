<template>
  <div class="layout-wrap" :class="isCollapse ? 'close' : ''">
    <aside-bar></aside-bar>
    <div class="layout-main">
      <top-bar></top-bar>
      <Breadcrumb></Breadcrumb>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import asideBar from './components/asideBar'
import topBar from './components/topBar'
import Breadcrumb from '@/components/Breadcrumb/index'
export default {
  name: 'layout',
  components: {
    asideBar,
    topBar,
    Breadcrumb
  },
  computed: {
    isCollapse() {
      return this.$store.getters.isCollapse
    }
  }
}
</script>

<style scoped lang="scss">

</style>
