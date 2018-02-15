<template>
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
      <transition name="list" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <div class="scrollB el-icon-arrow-up" v-scroll @click="scroll"></div>
    <div class="footer">
      <div class="dearm">In the name of dreams</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      nav: ['技术', '读书', '娱乐', '电子'],
      distance: 0
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
  }
}
</script>

<style lang='scss' scoped>
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
</style>
