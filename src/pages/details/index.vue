<template>
    <div class="clearfix detailContent">
      <div class="login" v-if="!ifDetail">
        <div class="userLogin" @click="like = !like">
          <i class="iconfont icon-shoucang" :style="{color: like ? 'red' : '' }"></i>
        </div>
      </div>
      <div class="detail">
        <div class="triangle">
          <div></div>
          <div>2017年11月23日</div>
        </div>
          <h1>web前端学习之路</h1>
          <h5>js html css vue.js react python node.js</h5>
          <p>字数<span>1002</span> · 阅读<span> 100 </span>次 · 点赞<span> 10 </span>次 · 评论<span> 20 </span>条</p>
          <div class="content">
            <img src="@/assets/image/articleimages.jpg" alt="">
          </div>
          <comment></comment>
      </div>
      <div class="side">

        <transition name="slide-up" mode="out-in">
          <search v-show="all"></search>
        </transition>

        <transition name="slide-up" mode="out-in">
          <hot v-show="all"></hot>
        </transition>

        <transition name="slide-up" mode="out-in">
          <labels v-show="all"></labels>
        </transition>

        <transition name="slide-up" mode="out-in">
          <link-list v-show="all"></link-list>
        </transition>

      </div>
    </div>
</template>
<script>
import comment from './components/comments'
import search from './components/search'
import hot from './components/hot'
import labels from './components/label'
import mainContent from './components/content'
import linkList from './components/linkList'
export default {
  name: 'detail',
  data () {
    return {
      all: false,
      like: false
    }
  },
  mounted () {
    this.all = true
    console.log(this.$route.query)
  },
  components: {
    search,
    hot,
    labels,
    comment,
    mainContent,
    linkList
  }
}
</script>
<style lang='scss' scoped>
@import url('./../../iconfont/iconfont.css');
.detailContent {
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
  .detail {
    float: left;
    max-width: 650px;
    margin-top: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-left: 120px;
    width: 730px;
    min-height: 600px;
    position: relative;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 40px;
    > .triangle {
      width: 140px;
      height: 24px;
      position: absolute;
      top: -10px;
      left: 20px;
      div:nth-child(2) {
        float: left;
        width: 130px;
        height: 24px;
        color: #fff;
        line-height: 24px;
        text-align: center;
        font-weight: bolder;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background-color: $border;
      }
      div:nth-child(1) {
        float: left;
        width: 0px;
        height: 0px;
        border-top: solid 10px transparent;
        border-right: solid 10px $border;
        color: #ffffff;
      }
    }
    h1 {
      line-height: 2.2;
      font-weight: 500;
    }
    h5{
      line-height: 2;
      font-size: 15px;
      font-weight: 500;
    }
    p {
      font-size: 14px;
      line-height: 2;
    }
    .content {
      img {
        width: 100%;
      }
    }
  }
  .side {
    width: 330.55px;
    float: right;
    margin-top: 40px;
    margin-left: 93px;
  }
}
</style>
