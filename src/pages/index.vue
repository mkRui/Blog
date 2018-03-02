<template>
  <div class="clearfix">
    <div class="blogs">
      <ul>
        <li v-for="(item, index) in article" :key="index">
          <div class="triangle">
            <div></div>
            <div>{{ item.date }}</div>
          </div>
          <h3>{{ item.title }}</h3>
          <h4><span>{{ item.comments }}</span> 条评论 · <span>{{ item.read }}</span> 人阅读 · <span>{{ item.praise }}</span> 人点赞</h4>
          <div class="clearfix" v-if='!item.image'>
            <div class="contentText">{{ item.content }}</div>
            <div class="mores"><router-link :to="{name:'details',query:{id: item.id}}">Read More</router-link></div>
          </div>
          <div class="clearfix" v-else>
            <div class="image"></div>
            <div class="content">{{ item.content }}</div>
            <div class="more"><router-link :to="{name:'details',query:{id: item.id}}">Read More</router-link></div>
          </div>
        </li>
      </ul>
      <div class="there" v-if='show'>More</div>
      <div class="theres el-icon-loading" v-else></div>
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
import search from '../components/sidebar/search'
import hot from '../components/sidebar/hot'
import labels from './../components/sidebar/label'
import linkList from './../components/sidebar/linkList'
export default {
  name: 'blogs',
  data () {
    return {
      show: true,
      all: false,
      article: [
        {title: 'web前端学习之路', read: '0', comments: '0', praise: '3', content: '撒开的飞机上看绝代风华就开始的方式点击客服快速的减肥还是收到回复即可收到就发黄金时代和反馈就是地方斯巴达克见风使舵简咖啡机可视电话房贷首付看就是倒海翻江可视电话房间就看到舒服', date: '2017年11月21日', id: '1478943266', image: true, url: 'dasdasdasdasda'},
        {title: '安卓8今日更新', read: '4', comments: '4', praise: '0', content: '撒开的飞机上看绝代风华就开始的方式点击发货风欢快的健身房就开始电话客服快速的减肥还是收到发黄金时代和反馈就是地方斯巴达克见风使舵简咖啡机可视电话房贷首付看就是倒海翻江可视电话房间就看到舒服', date: '2017年11月22日', id: '14783466', image: false},
        {title: 'pathon 机器学习', read: '0', comments: '0', praise: '0', content: '撒开的飞机上看绝代风华就开始的方式点击发货风欢快的健身房就开始电话客服快速的减肥还是收到回复即可收到就发黄金时代和反馈就是地方斯巴达克见风使舵简咖啡机可视电话房贷首付看就是倒海翻江可视电话房间就看到舒服', date: '2017年11月23日', id: '14789266', image: true, url: 'dasdasdasdasda'},
        {title: 'vue.js学习曲线', read: '4', comments: '0', praise: '0', content: '撒开的飞机上看绝代风华就开始的方式点击发货风欢快的健身还是收到回复即可收到就发黄金时代和反馈就是地方斯巴达克见风使舵简咖啡机可视电话房贷首付看就是倒海翻江可视电话房间就看到舒服', date: '2017年11月24日', id: '14783266', image: false},
        {title: '电脑玩家 与 人工智能', read: '0', comments: '0', praise: '2', content: '撒开的飞机上看绝代风华就开始的方式点击发货风欢快的健身房就开始电话客服快速的减肥还是收到回复即可f发挥空间收到回复开始的开发第三方收到就发黄金时代和反馈就是地方斯巴达克见风使舵简咖啡机可视电话房贷首付看就是倒海翻江可视电话房间就看到舒服', date: '2017年11月11日', id: '1478943268', image: true, url: 'dasdasdasdasda'},
        {title: '电脑玩家 与 人工智能', read: '0', comments: '0', praise: '2', content: '撒开的飞机上看绝代风华就开始的方式点击发货风欢快的健身房就开始电话客服快速的减肥还是收到回复即可f发挥空间收到回复开始的开发第三方收到就发黄金时代和反馈就是地方斯巴达克见风使舵简咖啡机可视电话房贷首付看就是倒海翻江可视电话房间就看到舒服', date: '2017年11月11日', id: '1478943268', image: true, url: 'dasdasdasdasda'},
        {title: '电脑玩家 与 人工智能', read: '0', comments: '0', praise: '2', content: '撒开的飞机上看绝代风华就开始的方式点击发货风欢快的健身房就开始电话客服快速的减肥还是收到回复即可f发挥空间收到回复开始的开发第三方收到就发黄金时代和反馈就是地方斯巴达克见风使舵简咖啡机可视电话房贷首付看就是倒海翻江可视电话房间就看到舒服', date: '2017年11月11日', id: '1478943268', image: true, url: 'dasdasdasdasda'}
      ]
    }
  },
  components: {
    search,
    hot,
    labels,
    linkList
  },
  mounted () {
    this.all = true
  },
  created () {
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY > document.body.offsetHeight - 100) {
        this.show = false
      } else {
        this.show = true
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  .blogs{
    float: left;
    max-width: 750px;
    margin-top: 40px;
    box-sizing: border-box;
    padding-left: 30px;
    ul {
      li{
        max-width: 730px;
        min-height: 200px;
        position: relative;
        background-color: #fff;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 20px;
        padding-left: 40px;
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
        h3 {
          font-weight: 500;
          font-size: 25px;
          padding-top: 13px;
          padding-bottom:10px;
        }
         h4 {
          padding-bottom:10px;
        }
        .image {
          float: left;
          width: 200px;
          height:200px;
          background: #f0f0f0;
          margin-right: 20px;
        }
        .content {
          float: left;
          width: 440px;
          min-height:159px;
          max-height: 160px;
          line-height: 2;
          font-weight:bolder;
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
        .more {
          float: left;
          text-align: right;
          width: 440px;
          height: 40px;

          a {
            width:95px;
            height: 33px;
            border-radius: 4px;
            display: inline-block;
            text-align: center;
            line-height: 33px;
            color: #fff;
            background-color: $border;
          }
        }
        .contentText {
          min-height:90px;
          max-height: 100px;
          line-height: 2;
          font-weight:bolder;
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
        .mores {
          height: 40px;
          text-align: right;
          a {
            width:95px;
            height: 33px;
            border-radius: 4px;
            display: inline-block;
            text-align: center;
            line-height: 33px;
            color: #fff;
            background-color: $border;
          }
        }
      }
    }
    .there {
      margin-bottom: 30px;
    }
    .theres {
      font-size: 30px;
      margin-bottom: 30px;
    }
  }
  .side {
    width: 346.55px;
    float: left;
    margin-top: 40px;
    margin-left: 93px;
  }
</style>
