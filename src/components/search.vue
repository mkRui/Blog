<template>
  <div class="retrieve">
      <h2>Search</h2>
      <div class="search clearfix">
        <el-input
          placeholder="请输入内容"
          size="small"
          v-model="search"
          clearable>
        </el-input>
        <button class='el-icon-search'></button>
     </div>
  </div>
</template>
<script>
export default {
  name: 'search',
  data () {
    return {
      search: ''
    }
  }
}
</script>
<style scoped lang='scss'>
  .retrieve {
    margin-bottom: 20px;

    h2 {
        color: rgba(0,0,0,.54);
        margin-bottom: 10px;
    }
    .search {
      .el-input {
        width: 80%;
        float: left;
      }
      button {
        float: right;
        width: 18%;
        height: 31px;
        background-color: #1C6E8C;
        color: #fff;
      }
    }
  }
</style>
