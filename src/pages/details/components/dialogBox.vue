<template>
  <div class="dialogs">
    <transition name="slide-up" mode="out-in">
      <div class="dialog" v-show="dialog">
        <div class="dialogBox">
          <i class="el-icon-close close" @click="masBox"></i>
          <slot name="fragment"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'dialogs',
  props: ['dialogControl'],
  data () {
    return {
      dialog: false
    }
  },
  watch: {
    dialogControl (item) {
      console.log(item)
      this.dialog = item
    }
  },
  methods: {
    masBox () {
      this.dialog = false
      this.$emit('controlClosed')
    }
  }
}
</script>
<style lang="scss" scoped>
  .dialogs {
    .dialog {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 101;
      background-color: rgba(0,0,0,0.3);
      .dialogBox {
        width: 640px;
        height: 300px;
        position: inherit;
        top: 150px;
        left: 50%;
        margin-left: -320px;
        background: #fff;
        z-index: 102;
        box-sizing: border-box;
        padding: 30px;
        border-radius: 5px;
        h2 {
          text-align: center;
        }
        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 30px;
          color: #ccc;
          cursor: pointer;
        }
      }
      .name {
        margin-top: 20px;
        margin-bottom: 30px;
      }
    }
  }
</style>
