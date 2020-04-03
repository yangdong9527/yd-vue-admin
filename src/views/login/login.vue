<template>
  <div class="login-wrap">
    <div class="form-wrap">
      <h3>Y-D-ADMIN</h3>
      <div class="com-wrap">
      </div>
    </div>
  </div>
</template>

<script>
import Register from './components/register'
import SignIn from './components/SignIn'
export default {
  name: "login",
  components: {
    Register,
    SignIn
  },
  data() {
    return {
      
    };
  },
  
};
</script>

<style scoped lang="scss">
.login-wrap {
  position: relative;
  height: 100%;
  background: url("../../assets/images/bg1.jpg") no-repeat top;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-wrap {
    box-sizing: border-box;
    width: 450px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 3px;
  }
}
</style>
