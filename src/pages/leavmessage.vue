<template>
  <div class="leaveMessage">
    <transition name="slide-up" mode="out-in">
      <div class="dialog" v-show="dialog">
        <div class="dialogBox">
          <h2>无拘无束的留言墙，大家发泄吧！</h2>
            <i class="el-icon-close close" @click="masBox"></i>
          <el-row class="name">
            <el-col :span="4">
              留下你的称呼
            </el-col>
            <el-col :span="20">
              <el-input  v-model="call" placeholder="请输入称呼"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              我的2333事
            </el-col>
            <el-col :span="20">
              <leave-msg :borderColor="'#dcdfe6'" v-on:marked="msgLeave"></leave-msg>
            </el-col>
          </el-row>
        </div>
      </div>
    </transition>
    <div class="title">
      <el-button @click="messageBox" type="info" plain>我要留言</el-button>
    </div>
    <waterfall :msgConten="content"></waterfall>
  </div>
</template>
<script>
import waterfall from './../components/leave/waterfall'
import leaveMsg from './../components/article/CommentBox'
export default {
  name: 'leaveMessage',
  data () {
    return {
      dialog: false,
      call: '',
      content: {}
    }
  },
  components: {
    waterfall,
    leaveMsg
  },
  watch: {
    content (data) {
      console.log(data)
    }
  },
  methods: {
    messageBox () {
      this.dialog = true
    },
    masBox () {
      this.dialog = false
    },
    msgLeave (data) {
      var json = {}
      json.name = this.call
      json.content = data
      json.date = new Date().toLocaleString()
      this.call = ''
      this.content = json
    }
  },
  mounted () {
  }
}
</script>
<style lang='scss' scoped>
  .leaveMessage {
    .title {
      text-align: center;
      width: 100%;
      margin: 70px auto;
      button {
        width: 137px;
        height: 50px;
        font-size: 19px;
        color: #fff;
        background: url('./../assets/image/transforma.gif') no-repeat;
        background-size: cover;
      }
    }
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
