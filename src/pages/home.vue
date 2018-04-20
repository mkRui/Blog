<template>
<div>
  <div id="app">
    <div class="head" v-fix>
      <div class="header">
        <h2>he<span>llo</span>  world </h2>
        <p>hi Welcome to the blog</p>
      </div>
      <div class="nav">
        <div>
            <ul class="clearfix">
              <li v-for="i in nav" :key="i" @click="routs(i)"> {{ i }} </li>
            </ul>
        </div>
      </div>
    </div>
    <div class="blank">
      <div class="surprised">
        <img src="../assets/image/blankground.png">
      </div>
    </div>
    <div class="main clearfix">
      <div class="login">
        <div class="userLogin" @click="dialogVisible = true">
          <i class="iconfont icon-character"></i>
        </div>
      </div>
      <transition name="list" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <div class="scrollB el-icon-arrow-up" v-scroll @click="scroll"></div>
    <div class="footer">
      <div class="dearm">In the name of dreams</div>
    </div>
  </div>
  <el-dialog
    :visible.sync="dialogVisible"
    width="400px">
    <div class="headImg">
        <div>
          <img src="./../assets/image/loginOne.png" v-if="!focusPass">
          <img src="./../assets/image/loginTwo.png" v-else>
          <span>hi~</span>
        </div>
    </div>
    <div class="mainBody">
      <el-input v-model="userNmae" placeholder="请输入用户名"></el-input>
      <el-input v-model="password" @focus="focusPass = true" @blur="focusPass = false" placeholder="请输入密码"></el-input>
      <transition name="list" mode="out-in">
        <el-input v-model="email" placeholder="请输入邮箱" v-if="registered"></el-input>
      </transition>
    </div>
    <div slot="footer" class="footBtn">
      <div v-if="!registered">
        <el-button  type="primary" >登录</el-button>
        <el-button @click="registered = true; userNmae = ''; password = ''; email = ''">注册</el-button>
      </div>
      <div v-else>
        <el-button  type="primary" @click="registered = false; userNmae = ''; password = ''; email = ''" >返回</el-button>
        <el-button >确认</el-button>
      </div>
    </div>
  </el-dialog>
</div>
</template>

<script>
// import service from './../api/index'
export default {
  name: 'App',
  data () {
    return {
      nav: ['技术', '读书', '娱乐', '电子'],
      distance: 0,
      dialogVisible: false,
      registered: false,
      userNmae: '',
      password: '',
      email: '',
      focusPass: false
    }
  },
  methods: {
    routs (item) {
      console.log(item)
    },
    scroll () {
      var timer = null
      this.distance = window.scrollY
      timer = setInterval(() => {
        this.distance -= 20
        window.scrollTo(0, this.distance)
        if (this.distance < 0) {
          clearInterval(timer)
        }
      }, 20)
    }
  },
  directives: {
    fix: {
      inserted: function (el, option) {
        var scroll = 0
        var arr = []
        window.addEventListener('scroll', () => {
          scroll++
          arr.push(window.scrollY)
          if (window.scrollY > 30) {
            var boola = window.scrollY > arr[scroll - 2] ? 1 : 0
            if (boola) {
              el.classList.add('hide')
            } else {
              setTimeout(() => {
                el.classList.remove('hide')
              }, 500)
            }
          }
        })
      }
    },
    scroll: {
      inserted: function (el, option) {
        window.addEventListener('scroll', () => {
          if (window.scrollY > 400) {
            el.classList.add('show')
          } else {
            el.classList.remove('show')
          }
        })
      }
    }
  },
  async mounted () {
    // const login = await service.login()
    // const Cat = await service.CatagoryList()
    // console.log(Cat)
    // const checkList = await service.checkList()
    // console.log(checkList)
    // const tagList = await service.TagList()
    // console.log(tagList)
  }
}
</script>

<style lang='scss' scoped>
@import url('./../iconfont/iconfont.css');
  #app {
    width: 100%;
    min-width: 1200px;
    .head {
      width: 100%;
      min-width: 1200px;
      position: fixed;
      top: 0;
      z-index: 99;
      background-color: rgb(235,235,235);
    }
    .blank {
      width: 100%;
      height: 124px;
      min-width: 1200px;
      overflow: hidden;
      > .surprised {
        height: 124px;
        width: 1200px;
        margin:0 auto;
        position: relative;
        img {
          position: absolute;
          top: -511px;
          left: -257px;
        }
      }
    }
    .header {
      width: 1024px;
      height: 84px;
      margin: 0 auto;
      font-family: 'Monda', sans-serif;
      text-transform: uppercase;
      box-sizing: border-box;
      padding-left: 30px;
      background-image: url('../assets/image/back.png');
      background-position-y: -515px;
      background-position-x: -170px;
      h2 {
        color: #444;
        font-size: 40px;
        font-weight: bolder;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

        span {
          color: $border;
        }
      }

      p {
        color: #444444;
        font-size: 14px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
    }

    .nav {
      width: 100%;
      height: 40px;
      background-color: $head;

      div {
        width: 1024px;
        height: 40px;
        margin: 0 auto;

        ul {
          li {
            width: 100px;
            height: 40px;
            color: #fff;
            float: left;
            text-align: center;
            line-height: 40px;
            font-weight: bolder;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          }
          li:hover {
            background-color: $border;
          }
        }
      }
    }
    .main {
      width: 1200px;
      min-height: calc(100vh - 50px);
      margin: 0 auto;
      position: relative;
      .login {
        width: 100px;
        position: fixed;
        top: 180px;
        .userLogin {
          cursor: pointer;
          width: 60px;
          height: 60px;
          border: 1px solid #ccc;
          background: #fff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bolder;
          i {
           font-size: 20px;
          }
          transition: .35s;
          &:hover {
            box-shadow: 0 0 10px 3px rgba(0,0,0,0.1);
          }
        }
      }
    }
    .hide {
      transform: translateY(-124px);
      transition: .8s cubic-bezier(0.36,-0.07, 0.3, 1.13);
    }
    .scrollB {
      position: fixed;
      bottom: 70px;
      right: 35px;
      width: 45px;
      height: 45px;
      text-align: center;
      line-height: 45px;
      font-size: 20px;
      color: #fff;
      border-radius: 50%;
      box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
      background-color: #1C6E8C;
      transform: translateX(300px);
    }
    .show {
      transform: translateX(0);
      -webkit-transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition:  all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    .footer {
      width: 100%;
      min-width: 1200px;
      height: 43px;
      background-color: $head;
      > .dearm {
        width: 1024px;
        color: #fff;
        height: 100%;
        line-height: 43px;
        margin: 0 auto;
        text-align: center;
        font-size: 20px;
        font-weight: border;
      }
    }
  }
  .headImg {
      >div {
        width: 70px;
        height: 70px;
        margin: 0 auto;
        border-radius: 50%;
        border: 1px solid $border;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        span {
          position: absolute;
          top: 0;
          right: -20px;
          background: $border;
          color: #fff;
          padding: 0px 5px;
          width:40px;
          border-radius: 8px;
        }
      }
    }
  .mainBody {
    div {
      margin: 15px 0px;
    }
  }
  .footBtn {
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        width: 49%;
      }
    }
  }
</style>
