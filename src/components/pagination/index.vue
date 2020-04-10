<template>
  <div>
    <el-pagination
      :current-page="currentPage"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[10,20,50,100]"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    pageNum: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('pagination', { pageNum: this.pageNum, pageSize: val })
    },
    handleCurrentChange(val) {
      this.$emit('pagination', { pageNum: val, pageSize: this.pageSize })
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.pageNum
      }
    },
    size: {
      get() {
        return this.pageSize
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
