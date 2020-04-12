<template>
  <div class="login-wrap">
    <transition name="xzty" mode="out-in">
      <component :is="currCompoent" @change="changeCom"></component>
    </transition>
  </div>
</template>

<script>
import Register from "./components/register";
import SignIn from "./components/SignIn";
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
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables.scss";
.login-wrap {
  position: relative;
  overflow: hidden;
  height: 100%;
  background: url("../../assets/images/bg1.jpg") no-repeat top;
  background-size: cover;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
