<template>
  <div class="card-wrap" v-if="show">
    <div class="card-title" :style="`height: ${titleHeight}px`">
      <slot name="title">
        <div class="default-title">
          <h3>{{title}}</h3>
          <div class="icon-wrap">
            <svg-icon icon="shuaxin" class="icon-item" @click.native="reset"></svg-icon>
            <svg-icon icon="suoxiao" class="icon-item" @click.native="switchCon"></svg-icon>
            <svg-icon icon="guanbi" class="icon-item" @click.native="close"></svg-icon>
          </div>
        </div>
      </slot>
    </div>
    <collapse>
      <div class="container" v-show="showContent">
        <div class="header">
          <slot name="header"></slot>
        </div>
        <slot name="content">
        </slot>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </collapse>
  </div>
</template>

<script>
import collapse from "@/components/collapse/index";
export default {
  name: "myCard",
  components: {
    collapse
  },
  props: {
    title: {
      type: String,
      default: "标题"
    },
    titleHeight: {
      default: 40
    }
  },
  data() {
    return {
      showContent: true,
      show: true
    };
  },
  methods: {
    switchCon() {
      this.$emit("collapse");
      this.showContent = !this.showContent;
    },
    close() {
      this.$emit("close");
      this.show = false;
    },
    reset() {
      this.$emit("reset");
    }
  }
};
</script>

<style scoped lang="scss">
.card-wrap {
  position: relative;
  width: 100%;
  border-radius: 3px 3px 0 0;
  box-sizing: border-box;
  user-select: none;
  overflow: hidden;
  .card-title {
    background-color: #242a30;
    padding: 0 15px;
    box-sizing: border-box;
    .default-title {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      h3 {
        font-size: 14px;
      }
      .icon-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        .icon-item {
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }
  }
  .container {
    background-color: #fff;
    border-radius: 0 0 3px 3px;
    border: 1px solid rgba(0,0,0,.2);
    box-sizing: border-box;
    .header {
      box-sizing: border-box;
    }
  }
}
</style>
