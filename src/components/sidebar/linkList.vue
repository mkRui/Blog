<template>
  <div class="linkList">
      <div class='thislink'><router-link to="/aboutme">关于作者</router-link></div>
      <div>···</div>
      <div class='thislink'><router-link to="/message">留言墙</router-link></div>
  </div>
</template>
<script>
export default {
  name: 'linkList',
  mounted () {
  }
}
</script>
<style scoped lang='scss'>
  .linkList {
    div {
      float: left;
      margin-left: 10px;
      margin-right: 10px;
    }
    .thislink {
      margin-left: 0px;
      margin-right: 0px;
    }
  }
</style>
