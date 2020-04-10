<template>
  <div class="collapse-wrap">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      v-bind:css="false"
    >
      <slot></slot>
    </transition>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  name: "collapse",
  props: {
    duration:{
      type: Number,
      default: 300
    }
  },
  data() {
    return {
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.height = '0';
    },
    enter(el,done) {
      el.style.overflow = "hidden";
      Velocity(el, {height: el.scrollHeight+'px'}, {duration: this.duration,complete: done})
    },
    afterEnter(el) {
      el.style.height = ''
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave(el, done) {
      Velocity(el, {height: 0}, {duration: this.duration}, {complete: done})
    }
  }
};
</script>

<style scoped lang="scss">

</style>

