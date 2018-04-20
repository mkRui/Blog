<template>
  <div class="retrieve" v-fixed>
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
  },
  directives: {
    fixed: {
      inserted: function (el) {
        window.addEventListener('scroll', () => {
          if (window.scrollY > 840) {
            el.classList.add('fixeds')
          } else {
            el.classList.remove('fixeds')
          }
        })
      }
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
        background-color: $border;
        color: #fff;
      }
    }
  }
  .fixeds {
    width: 346.55px;
    max-width: 346.55px;
    position: fixed;
    top: 128px;
    transform: translateY(10px);
    transition: .35s;
  }
</style>
