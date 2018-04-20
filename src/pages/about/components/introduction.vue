<template>
  <div class="Introduction">
    <div class="theOne clearfix">
      <ul>
          <li v-for="(item, index) in aboutMe" :key="index">
          <span :class="'iconfont '+item.icon"></span>
          <span>{{ item.content }}</span>
          </li>
      </ul>
      <div class="peopleImg">
          <img src="@/assets/image/123.jpg" alt="">
      </div>
    </div>
    <div class="discourse">
      <h2>{{ title }}</h2>
      <p>{{ mintitle }}</p>
      <p>{{ content }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Introduction',
  data () {
    return {
      aboutMe: [
        {icon: 'icon-chilun', content: 'Hi Guy'},
        {icon: 'icon-character', content: '聪sir 帅sir'},
        {icon: 'icon-yingpian', content: '猫鼠游戏'},
        {icon: 'icon-yinyue', content: '女朋友'},
        {icon: 'icon-zuixihuandefavorites3', content: '看电影 and 编程'},
        {icon: 'icon-fasong', content: 'web Engineer is me'}
      ],
      title: 'Hello Everyone',
      mintitle: 'hi welcome to our blog',
      content: '这是我和朋友们一起写的博客，我们非常喜欢技术带来的便利和这种酷的感觉，在书写的过程中受到了很多人的建议以便我们能向跟好的方向修改～，在这个过程中我们更能感受到自己技能的提升，我们对此充满喜悦，同时也欢迎各位来此留言让我们共同成长！最后 以梦想为名（In the name of dreams）'
    }
  }
}
</script>
<style lang='scss' scoped>
  @import url('./../../../iconfont/iconfont.css');
  .Introduction {
      width: 578px;
      float: left;
    > .theOne {
      margin-bottom: 64px;
      padding-top: 12px;
      padding-bottom: 68px;
      border-bottom: 1px solid $border;
      ul {
        float: left;
        margin-left: 10px;
        li {
          line-height: 2.5;
          span{
            font-size: 18px;
            margin-right: 4px;
            margin-left: 4px;
          }
        }
      }
      > .peopleImg {
        float: right;
        img {
          width: 200px;
          height: 250px;
          margin-right: 10px;
          margin-top: 10px;
        }
      }
    }
    > .discourse {
      padding:20px;
      text-align: center;
      box-sizing: border-box;
      margin-top: 30px;
      h2 {
        letter-spacing: 2px;
        margin-bottom: 10px;
        font-weight: normal;
      }
      p:nth-child(2){
        margin-bottom: 10px;
      }
      p:nth-child(3){
        margin-bottom: 10px;
        line-height:2;
      }
    }
  }
</style>
