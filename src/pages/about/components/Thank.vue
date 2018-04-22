<template>
  <div class="tanks clearfix">
    <h3>{{ title }}</h3>
    <ul>
      <li class="clearfix" v-for="(item, index) in hot" :key='index'>
        <div class="font">
          <span>{{ item.title }}</span>
          <span>----------</span>
          <span>{{ item.min }}</span>
        </div>
      </li>
    </ul>
    <div class="address">
      <router-link to="/index">回到主页</router-link>
      <span>···</span>
      <router-link to="/message">留言墙</router-link>
      <div>···</div>
      <div class='thislink'><router-link to="/archive">归档</router-link></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tanks',
  data () {
    return {
      title: '最新链接',
      hot: [
        {title: 'web前端学习之路', min: 'js html css', image: true, url: 'dasdasdasdad', id: '42345t5'},
        {title: '开始了 现在', min: 'js hl css', image: false, id: '3242345'},
        {title: 'nodeJS后台', min: 'js html css', image: true, url: 'dasdasdasdad', id: '32445t5'},
        {title: 'java8开始', min: 'js html css', image: false, id: '32425t5'},
        {title: '开始了 现在', min: 'js hl css', image: false, id: '3242345'},
        {title: 'nodeJS后台', min: 'js html css', image: true, url: 'dasdasdasdad', id: '32445t5'},
        {title: 'java8开始', min: 'js html css', image: false, id: '32425t5'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.tanks {
  float: right;
  width: 345px;
  height: 432px;
  border-left: 1px solid $border;
  margin-top: 10px;
  box-sizing: border-box;
  padding:10px;
  padding-left: 20px;
  h3 {
    font-weight: normal;
  }
  ul {
    width: 100%;
    li {
      box-sizing: border-box;
      padding: 7px;
      padding-left: 16px;
      .font {
        float: left;
        line-height:2.5;
      }
    }
  }
  .address {
    margin-top: 20px;
    margin-left: 5px;
    a {
      font-size: 13px;
    }
  }
}
</style>
