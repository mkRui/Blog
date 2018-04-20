<template>
  <div class="curtain">
    <h2>Welcome to come in</h2>
    <p>我们可以为您筛选一些内容，不过这其中少不了需要您的帮助</p>
    <p class="overall" @click="this.$router.push('/index')">当然如果您想大致的浏览我们 那么请点击这里</p>
    <p>以下的选项可以帮助您进行筛选</p>
    <p>祝您可以在这里找到自己想要的东西</p>
    <div class="clearfix">
        <el-select
        v-model="choose"
        multiple
        style="margin-top: 20px; float: left;"
        collapse-tags
        placeholder="请选择">
          <el-option
            v-for="(item, index) in options"
            :key="index"
            :label="item.label"
            :value="item.label">
          </el-option>
      </el-select>
      <button style="margin-top: 20px; margin-left:10px; height: 40px; float: left;">完成</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'custom',
  data () {
    return {
      options: [{
        label: '编程'
      }, {
        label: '技术'
      }, {
        label: '读书'
      }, {
        label: '娱乐'
      }, {
        label: '电子'
      }],
      choose: []
    }
  },
  watch: {
    choose (item) {
      console.log(item)
    }
  }
}
</script>
<style scoped lang='scss'>
  .curtain {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 100px;
    color: #d3d1d1;
    background: url('./../assets/image/initial.jpg') no-repeat;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    text-align: left;
    p {
      margin-top: 10px;
      padding-left:5px;
    }
    h2 {
      font-size: 25px;
    }
    .overall {
      cursor:pointer;
    }
  }
</style>
