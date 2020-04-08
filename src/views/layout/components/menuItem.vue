<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowChildren() && (!oneShowItem.children || oneShowItem.noShowChildren) && !item.allwasShow">
      <el-menu-item :index="routePath(oneShowItem.path)">{{oneShowItem.meta.title}}</el-menu-item>
    </template>

    <el-submenu v-else :index="routePath(item.path)">
      <template slot="title">
        <span>{{item.meta.title}}</span>
      </template>
      <menu-item v-for="v in item.children" :key="v.path" :item="v" :basePath="routePath(item.path)"></menu-item>
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
  data() {
    this.oneShowItem = null
    return {}
  },
  methods: {
    hasOneShowChildren() {
      // 展示一项的条件
      // 如果当前项有没有两个可展示的子项 通过 hasoneshowchildren 判断
      // 没有的情况下, 定义常量记录要展示的是哪一项
      // 如果是 有一个 那这个常量为这个, 如果 没有 则为当前项
      // 判断 要展示的项 没有子集 或者 是当前项
      // 判断 当前项 allwasShow 为 false 
      const itemChildren = this.item.children.filter(item => {
        if(item.hidden){
          return false
        } else {
          this.oneShowItem = item
          return  true
        }
      })
      if(itemChildren.length === 1) {
        return true
      }

      if(itemChildren.length  === 0){
        this.oneShowItem = {...this.item, noShowChildren: true}
        return true
      }

      return false
    },
    routePath(url) {
      return path.resolve(this.basePath, url)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
