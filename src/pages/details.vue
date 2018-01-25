<template>
    <div class="detail">
        <h1>详情</h1>
    </div>
</template>
<script>
export default {
  name: 'detail',
  data () {
    return {}
  },
  mounted () {
    console.log(this.$route.params)
  }
}
</script>
<style>

</style>
