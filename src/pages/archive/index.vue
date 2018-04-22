<template>
  <div class="archive">
    <label-tag></label-tag>

    <div class="archivBody">
      <h2>文章</h2>
      <div>
        <list></list>
      </div>
    </div>
  </div>
</template>
<script>
import labelTag from './components/label'
import list from './components/articleLists'
export default {
  name: 'archive',
  components: {
    labelTag,
    list
  }
}
</script>
<style lang='scss' scoped>
  .archive {
    width: 1000px;
    margin: 0 auto;
    margin-top: 30px;
    .archivBody {
      width: 100%;
      margin-top: 20px;
      border-top: 3px solid #E3E3E3;
      > h2 {
      font-size: 14px;
      font-weight: normal;
      letter-spacing: 3px;
      color: rgba(0,0,0,.54);
      margin-top: 10px;
      }
      > h2 + div {
        width: 100%;
        padding: 10px;
        margin-left: 20px;
      }
    }
  }
</style>
