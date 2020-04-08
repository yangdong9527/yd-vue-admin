<template>
  <div class="login-wrap">
    <div class="form-wrap">
      <h3>Y-D-ADMIN</h3>
      <div class="select">
        <div :class="{'active': currCompoent === 'SignIn'}" @click="changeCom('SignIn')">登录</div>
        <div :class="{'active': currCompoent === 'Register'}" @click="changeCom('Register')">注册</div>
      </div>
      <div class="com-wrap">
        <component :is="currCompoent" @login="login" @register="register"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Register from "./components/register";
import SignIn from "./components/SignIn";
import { loginAPI, registerAPI } from "@/api/login.js";
export default {
  name: "login",
  components: {
    Register,
    SignIn
  },
  data() {
    return {
      currCompoent: "SignIn"
    };
  },
  methods: {
    changeCom(v) {
      if (v === this.currCompoent) return;
      this.currCompoent = v;
    },
    async login(params) {
      try {
        const res = await this.$store.dispatch('Login', params)
        this.$notify.success({
          title: res.message
        })
        this.$router.push({name: 'home'})
      } catch (error) {
        console.log(error)
      }
    },
    async register(params) {
      try {
        const res = await registerAPI(params)
        this.$notify.success({
          title: res.message
        })
        this.currCompoent = 'SignIn'
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables.scss";
.login-wrap {
  position: relative;
  height: 100%;
  background: url("../../assets/images/bg1.jpg") no-repeat top;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  .form-wrap {
    box-sizing: border-box;
    width: 380px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 3px;
    h3 {
      text-align: center;
      margin-bottom: 10px;
    }
    .select {
      display: flex;
      text-align: center;
      height: 40px;
      line-height: 40px;
      div {
        flex: 1;
        border-radius: 8px 8px 0 0;
        background-color: #dcdfe6;
        transition: all 0.1s;
        cursor: pointer;
        &.active {
          font-weight: 700;
          background-color: #fff;
          font-size: 16px;
        }
      }
    }
    .com-wrap {
      position: relative;
      height: 250px;
      background-color: #fff;
      border-radius: 0 0 8px 8px;
      padding: 20px 15px;
      box-sizing: border-box;
    }
  }
}
</style>
