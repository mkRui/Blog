<template>
  <div class="scr-content" v-html="contents"></div>
</template>
<script>
import emoji from '@/plugins/emoji-data'
export default {
  name: 'mainContent',
  props: ['contents'],
  data () {
    return {
      mainContens: ''
    }
  },
  mounted () {
    console.log(emoji)
  }
}
</script>
<style lang='scss' scope>
  .scr-content {
    margin-bottom: 10px;
    p {
      width: 100%;
      word-wrap:break-word;
    }
    pre {
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
    }
  }
</style>
