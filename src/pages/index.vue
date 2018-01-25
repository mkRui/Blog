<template>
  <div class="blogs">
      <ul>
        <li>
          <div class="triangle">
            <div></div>
            <div>2017年11月20日</div>
          </div>
          <h3>web前端学习之路</h3>
          <h4><span>0</span> 条评论 · <span>0</span> 人阅读 · <span>0</span> 人点赞</h4>
          <div class="clearfix">
            <div class="contentText">撒开的飞机上看绝代风华就开始的方式点击发货风欢快的健身房就开始电话客服快速的减肥还是收到回复即可收到就发黄金时代和反馈就是地方斯巴达克见风使舵简咖啡机可视电话房贷首付看就是倒海翻江可视电话房间就看到舒服</div>
            <div class="mores"><router-link :to="{name:'details',params:{id: 234324324324}}">Read More</router-link></div>
          </div>
        </li>
        <li>
          <div class="triangle">
            <div></div>
            <div>2017年11月21日</div>
          </div>
          <h3>web前端学习之路</h3>
          <h4><span>0</span> 条评论 · <span>0</span> 人阅读 · <span>0</span> 人点赞</h4>
          <div class="clearfix">
            <div class="image"></div>
            <div class="content">撒开的飞机上看绝代风华就开始的方式点击发货风欢快的健身房就开始电话客服快速的减肥还是收到回复即可收到就发黄金时代和反馈就是地方斯巴达克见风使舵简咖啡机可视电话房贷首付看就是倒海翻江可视电话房间就看到舒服</div>
            <div class="more"><router-link :to="{name:'details',query:{id: 234324324324}}">Read More</router-link></div>
          </div>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'blogs',
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
  .blogs{
    float: left;
    max-width: 697px;
    margin-top: 40px;
    box-sizing: border-box;
    padding-left: 30px;
    ul {
      li{
        max-width: 697px;
        min-height: 200px;
        position: relative;
        background-color: #fff;
        border: 1px solid #cdcdcd;
        box-sizing: border-box;
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
            background-color: #1C6E8C;
          }
          div:nth-child(1) {
            float: left;
            width: 0px;
            height: 0px;
            border-top: solid 10px transparent;
            border-right: solid 10px  #1C6E8C;
            color: #ffffff;
          }
        }
        h3 {
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
          width: 350px;
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
          width: 350px;
          height: 40px;

          a {
            width:95px;
            height: 33px;
            display: inline-block;
            text-align: center;
            line-height: 33px;
            color: #fff;
            background-color: #1C6E8C;
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
            display: inline-block;
            text-align: center;
            line-height: 33px;
            color: #fff;
            background-color: #1C6E8C;
          }
        }
      }
    }
  }
</style>
