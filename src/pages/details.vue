<template>
    <div class="clearfix">
      <div class="detail">
        <div class="triangle">
          <div></div>
          <div>2017年11月23日</div>
        </div>
          <h1>web前端学习之路</h1>
          <h5>js html css vue.js react python node.js</h5>
          <p>字数<span>1002</span> · 阅读<span> 100 </span>次 · 点赞<span> 10 </span>次 · 评论<span> 20 </span>条</p>
          <div class="content">
            <img src="../assets/image/articleimages.jpg" alt="">
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

      </div>
    </div>
</template>
<script>
import comment from '../components/article/comments'
import search from '../components/sidebar/search'
import hot from '../components/sidebar/hot'
import labels from './../components/sidebar/label'
import mainContent from './../components/article/content'
export default {
  name: 'detail',
  data () {
    return {
      all: false
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
    mainContent
  }
}
</script>
<style lang='scss' scoped>
  .detail {
    float: left;
    max-width: 750px;
    margin-top: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-left: 30px;
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
    width: 346.55px;
    float: left;
    margin-top: 40px;
    margin-left: 93px;
  }
</style>
