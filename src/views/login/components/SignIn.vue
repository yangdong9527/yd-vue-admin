<template>
  <div class="sign-wrap">
    <h3>用户登录</h3>
    <el-form ref="form" :model="form" size="small" :rules="rules">
      <el-form-item label="邮 箱 :" prop="email">
        <el-input v-model="form.email" placeholder="请输入邮箱" @keyup.enter.native="login"></el-input>
      </el-form-item>
      <el-form-item label="密 码 :" prop="password">
        <el-input v-model="form.password" type="password" placeholder="请输入密码" @keyup.enter.native="login"></el-input>
      </el-form-item>
      <p><span @click="change">没有账号,去注册</span></p>
      <el-button class="btn" type="primary" :loading="loading" @click="login">{{loading ? '登录中...' : '登 录'}}</el-button>
    </el-form>
  </div>
</template>

<script>
import { loginAPI } from "@/api/login.js";
export default {
  name: "SignIn",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      rules: {
        email: { type: 'email', required: true, message: '请输入邮箱', trigger: 'blur' },
        password: { required: true, message: '请输入登录密码', trigger: 'blur' }
      },
      loading: false
    };
  },
  methods: {
    login(params) {
      this.$refs.form.validate(async bool => {
        if(bool) {
          this.loading = true
          try {
            const res = await this.$store.dispatch('Login', this.form)
            this.$notify.success({
              title: res.message
            })
            this.$router.push({name: 'home'})
          } catch (error) {
            console.log(error)
          }
          this.loading = false
        }
      })
      
    },
    change() {
      this.$emit('change', 'Register')
    }
  }
};
</script>

<style scoped lang="scss">
.sign-wrap {
  width: 400px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 30px 20px;
  h3 {
    margin-bottom: 15px;
  }
  .btn {
    margin-top: 10px;
    width: 100%;
  }
  p {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 12px;
    text-align: right;
    span {
      color: #2878ff;
      cursor: pointer;
    }
  }
}
</style>
