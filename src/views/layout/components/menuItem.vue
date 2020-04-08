<template>
  <div v-if="!item.hidden">
    <template v-if="item.children && item.children.length === 0">
      <el-menu-item :index="routePath">{{item.meta.title}}</el-menu-item>
    </template>

    <el-submenu v-else :index="routePath">
      <template slot="title">
        <span>{{item.meta.title}}</span>
      </template>
      <menu-item v-for="v in item.children" :key="v.path" :item="v" :basePath="routePath"></menu-item>
    </el-submenu>
  </div>
</template>

<script>
const path = require('path')
export default {
  name: 'menuItem',
  props: {
    basePath: {
      type: String,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    routePath() {
      return path.resolve(this.basePath, this.item.path)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
