<template>
  <div class="layout-wrap" :class="isCollapse ? 'close' : ''">
    <aside-bar></aside-bar>
    <div class="layout-main">
      <top-bar></top-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import asideBar from './components/asideBar'
import topBar from './components/topBar'
export default {
  name: 'layout',
  components: {
    asideBar,
    topBar
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
