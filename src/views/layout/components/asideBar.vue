<template>
  <div class="aside-wrap">
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="defaultPath"
      :router="true"
      :background-color="menuColor.menubgc"
      :text-color="menuColor.menutext"
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
  data() {
    return {
      
    }
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
    }
  }
}
</script>

<style scoped lang="scss">

</style>
