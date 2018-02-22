<template>
  <div class="scr-content" v-html="contents">
    {{ contents }}
  </div>
</template>
<script>
export default {
  name: 'mainContent',
  props: ['contents']
}
</script>
<style lang='scss' scope>
  .scr-content {
    margin-bottom: 10px;
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
