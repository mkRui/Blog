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
    <div class="blank"></div>
    <div class="main clearfix">
      <transition name="list" mode="out-in">
        <router-view></router-view>
      </transition>
      <div class="side">
        <search></search>
        <hot></hot>
      </div>
    </div>
  </div>
</template>

<script>
import search from '../components/search'
import hot from '../components/hot'
export default {
  name: 'App',
  data () {
    return {
      nav: ['技术', '读书', '娱乐', '电子']
    }
  },
  methods: {
    routs (item) {
      console.log(item)
    }
  },
  watch: {
    scroll () {
      console.log(this.scroll)
    }
  },
  components: {
    search,
    hot
  },
  directives: {
    fix: {
      inserted: function (el, option) {
        var scroll = 0
        var arr = []
        window.addEventListener('scroll', () => {
          scroll++
          arr.push(window.scrollY)
          console.log(window.scrollY)
          if (window.scrollY > 30) {
            var boola = window.scrollY > arr[scroll - 2] ? 1 : 0
            if (boola) {
              el.classList.add('hide')
              // el.addClass('hide')sq
            } else {
              setTimeout(() => {
                el.classList.remove('hide')
              }, 500)
              // el.removeClass('hide')
            }
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
    .head {
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 99;
    }
    .blank {
      width: 100%;
      height: 124px;
      img {
        width: 124px;
        height: 100%;
        display: block;
        margin: 0 auto;
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
      background-color: rgb(235,235,235);
      h2 {
        color: #444;
        font-size: 40px;
        font-weight: bolder;
        span {
          color: #1C6E8C;
        }
      }

      p {
        color: #444444;
        font-size: 14px;
      }
    }

    .nav {
      width: 100%;
      height: 40px;
      background-color: #274156;

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
            background-color: #1C6E8C;
          }
        }
      }
    }
    .main {
      width: 1024px;
      margin: 0 auto;
      background-color: rgb(235,235,235);
      > .side {
        width: 299.55px;
        float: right;
        margin-top: 40px;
      }
    }
    .hide {
      transform: translateY(-124px);
      transition: .8s cubic-bezier(0.36,-0.07, 0.3, 1.13);
    }
  }
</style>
