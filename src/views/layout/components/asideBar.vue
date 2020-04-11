<template>
  <div class="aside-wrap">
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :default-active="defaultPath"
      :router="true"
      :background-color="menuColor.menubgc"
      :text-color="menuColor.menutext"
      :collapse-transition="false"
      :active-text-color="menuColor.activeTC">
      <menu-item v-for="(item) in menus" :key="item.name"  :item="item" basePath="/"></menu-item>
    </el-menu>
  </div>
</template>

<script>
import menuItem from './menuItem'
import menuColor from '@/assets/styles/variables.scss'
export default {
  name: 'asideBar',
  components: {
    menuItem
  },
  computed: {
    menus() {
      return this.$store.getters.menus
    },
    defaultPath() {
      return this.$route.path
    },
    menuColor() {
      return menuColor
    },
    isCollapse() {
      return this.$store.getters.isCollapse
    }
  }
}
</script>

<style scoped lang="scss">

</style>
