<template>
  <div class="layout-wrap">
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
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">

</style>
