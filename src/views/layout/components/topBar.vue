<template>
  <div class="top-bar">
    <div class="left-wrap">
      <i class="el-icon-s-fold" @click="handleClick"></i>
    </div>
    <div class="right-wrap">
      <el-dropdown trigger="click" size="medium">
        <span class="el-dropdown-link">
          {{info.nickName}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="loginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-bar",
  methods: {
    handleClick() {
      this.$store.dispatch("set_isCollapse", !this.isCollapse);
    },
    loginOut() {
      this.$store.dispatch('loginOut').then(res => {
        location.reload()
      })
    }
  },
  computed: {
    isCollapse() {
      return this.$store.getters.isCollapse;
    },
    info() {
      return this.$store.getters.info.info;
    }
  }
};
</script>

<style scoped lang="scss">
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-wrap,
  .right-wrap {
    padding: 0 15px;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left-wrap {
    font-size: 22px;
    i {
      margin-right: 20px;
    }
  }
}
</style>
