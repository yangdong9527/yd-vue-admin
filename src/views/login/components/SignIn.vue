<template>
  <div class="sign-wrap">
    <el-form ref="form" :model="form" label-width="60px" size="small">
      <el-form-item label="邮 箱 :">
        <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密 码 :">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-button size="small" type="primary" class="btn" @click="login">登 录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$emit('login', this.form)
    }
  }
};
</script>

<style scoped lang="scss">
.sign-wrap .btn {
  position: absolute;
  bottom: 20px;
  width: 310px;
}
</style>
