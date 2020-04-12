<template>
  <div class="register-wrap">
    <h3>用户注册</h3>
    <el-form ref="form" :model="form" size="small" :rules="rules">
      <el-form-item label="邮 箱 :" prop="email">
        <el-input v-model="form.email" placeholder="请输入邮箱" @keyup.enter.native="register"></el-input>
      </el-form-item>
      <el-form-item label="昵 称 :" prop="nickName">
        <el-input v-model="form.nickName" placeholder="请输入昵称" @keyup.enter.native="register"></el-input>
      </el-form-item>
      <el-form-item label="密 码 :" prop="password">
        <el-input v-model="form.password" type="password" placeholder="请输入密码" @keyup.enter.native="register"></el-input>
      </el-form-item>
      <p class="to-login" ><span @click="change">去登录</span></p>
      <el-button class="btn" type="primary" @click="register" :loading="loading">{{loading ? '注册中...' : '注 册'}}</el-button>
    </el-form>
    <div class="tip">
      <p>提示: 该界面注册用户默认给予游客角色,仅拥有所有查看权限</p>
    </div>
  </div>
</template>

<script>
import { registerAPI } from "@/api/login.js";
export default {
  name: "register",
  data() {
    return {
      form: {
        email: "",
        password: "",
        nickName: ''
      },
      rules: {
        email: { type: 'email', required: true, message: '请输入邮箱', trigger: 'blur' },
        nickName: { required: true, message: '请输入昵称', trigger: 'blur' },
        password: { required: true, message: '请输入密码', trigger: 'blur' }
      },
      loading: false
    };
  },
  methods: {
    register() {
      this.$refs.form.validate(async bool => {
        if(bool) {
          this.loading = true
          try {
            const res = await registerAPI(this.form)
            this.$notify.success({
              title: res.message
            })
            this.currCompoent = 'SignIn'
          } catch (error) {
            console.log(error)
          }
          this.loading = false
        }
      })
      
    },
    change() {
      this.$emit('change', 'SignIn')
    }
  }
};
</script>

<style scoped lang="scss">
.register-wrap {
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
  .tip {
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
    
  }
  .to-login {
    font-size: 12px;
    color: #2878ff;
    text-align: right;
    margin-top: 5px;
    span {
      cursor: pointer;
    }
  }
}
</style>
