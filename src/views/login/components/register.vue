<template>
  <div class="register-wrap">
    <el-form ref="form" :model="form" label-width="60px" size="small">
      <el-form-item label="邮 箱 :">
        <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="昵 称 :">
        <el-input v-model="form.nickName" placeholder="请输入昵称"></el-input>
      </el-form-item>
      <el-form-item label="密 码 :">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-button class="btn" size="small" type="primary" @click="register">注 册</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      form: {
        email: "",
        password: "",
        nickName: ''
      }
    };
  },
  methods: {
    register() {
      this.$emit('register', this.form)
    }
  }
};
</script>

<style scoped lang="scss">
.register-wrap .btn {
  position: absolute;
  bottom: 20px;
  width: 310px;
}
</style>
