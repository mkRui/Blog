<template>
  <div>
    <div class="scr-content" v-html="contents"></div>
  </div>
</template>
<script>
export default {
  name: 'mainContent',
  props: ['contents'],
  data () {
    return {
      mainContens: ''
    }
  },
  mounted () {
  }
}
</script>
<style lang='scss' scope>
  .scr-content {
    font-size: 16px;
    p {
      font-size: 17px;
      width: 100%;
      word-wrap:break-word;
    }
    pre {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 10px;
      display: block;
      overflow-x: auto;
      padding: 0.5em;
      color: #333;
      background: #f8f8f8;
      code {
        display: block;
        max-height: 19em;
        padding: 1em;
        overflow-y: auto;
        overflow-x: hidden;
      }
    }
    img {
      width: 100%;
      margin: 10px 0px;
    }
  }
</style>
