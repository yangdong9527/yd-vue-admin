<template>
  <div class="card-wrap">
    <div class="card-title">
      <slot name="title">
        <div class="default-title">
          <h3>标题</h3>
          <div class="icon-wrap">
            <div class="icon-item">1</div>
            <div class="icon-item" @click="switchCon">消失</div>
            <div class="icon-item">1</div>
          </div>
        </div>
      </slot>
    </div>
    <collapse>
      <div class="container" v-show="showContent">
        <slot name="content">
          1
          <br />1
          <br />1
          <br />1
          <br />1
          <br />
        </slot>
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
  data() {
    return {
      showContent: true
    };
  },
  methods: {
    switchCon() {
      this.showContent = !this.showContent;
    }
  }
};
</script>

<style scoped lang="scss">
.card-wrap {
  width: 100%;
  border-radius: 3px 3px 0 0;
  box-sizing: border-box;
  user-select: none;
  .card-title {
    height: 40px;
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
  }
}
</style>
