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
export default {
  name: "collapse",
  data() {
    return {
      height: ""
    };
  },
  methods: {
    beforeEnter(el) {
      el.classList.add("trans");
      el.style.height = "0px";
    },
    enter(el, done) {
      el.style.overflow = "hidden";
      el.style.height = this.height + "px";
    },
    afterEnter(el) {},
    beforeLeave(el) {
      this.height = el.scrollHeight;
      el.style.height = 90 + "px";
      el.style.overflow = el.offsetHeight+"hidden";
    },
    leave(el, done) {
      el.classList.add("trans");
      el.style.height = 0;
    }
  }
};
</script>

<style scoped lang="scss">
.collapse-wrap {
  transition: all 0.3s;
}
.trans {
  transition: all 0.3s;
}
</style>

