<template>
    <div class="labels" v-fixed>
        <h2>标签</h2>
        <ul class="clearfix">
          <li v-for="(item, index) in bookmarks" :key="index"><span>{{ item.title }}</span> <span v-if='item.num !== 1'>({{ item.num }})</span></li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'labels',
  data () {
    return {
      bookmarks: [
        {title: 'vue.js', num: 2},
        {title: 'mac 使用指南', num: 2},
        {title: 'node', num: 1},
        {title: 'python', num: 2},
        {title: 'vue.js', num: 2},
        {title: 'linux', num: 1},
        {title: 'java', num: 2},
        {title: 'linux', num: 5},
        {title: 'js', num: 2}
      ]
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
<style lang='scss' scoped>
    .labels {
      transform: .35s;
      margin-top: 40px;
      margin-bottom: 10px;
      h2 {
      font-size: 14px;
      font-weight: normal;
      letter-spacing: 3px;
      color: rgba(0,0,0,.54);
      margin-bottom: 10px;
        span {
          padding-left: 5px;
          padding-right: 5px;
        }
      }
      ul {
        line-height: 2;
        li {
          float: left;
          background: #fff;
          border: 1px solid #cdcdcd;
          border-radius: 3px;
          margin-right: 13px;
          margin-bottom: 10px;
          text-align: center;
          min-width:80px;
          box-sizing: border-box;
          padding: 5px;
          color: #000;
          &:hover {
            cursor: pointer;
            background: $border;
            color: #fff;
          }
        }
      }
    }
  .fixeds {
    width: 346.55px;
    max-width: 346.55px;
    transform: .35s;
    position: fixed;
    top: 160px;
    transform: translateY(20px);
    transition: .35s;
  }
</style>
