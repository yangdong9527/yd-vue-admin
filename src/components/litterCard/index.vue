<template>
  <div class="litter-card" :class="className" :style="styleObj">
    <p>{{title}}</p>
    <h3>{{number}}</h3>
    <div class="mask">
      <slot name="img"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'litterCard',
  props: {
    className: {
      type: String,
      default: ''
    },
    styleObj: {
      type: Object,
      default() {
        return {}
      }
    },
    title: {
      type: String,
      default: ''
    },
    number: {
      type: Number,
      default: 123
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.litter-card {
  position: relative;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  p {
    font-size: 15px;
    color: rgba(255,255,255,.6);
    margin-bottom: 10px;
  }
  h3 {
    font-size: 22px;
    color: #fff;
  }
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    &:hover {
      background-color: rgba(0,0,0,.6);
    }
    img {
      position: absolute;
      bottom: 0;
      right: 10%;
      height: 60px;
    }
  }
}
</style>
