<template>
  <div>
    <transition name="list" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  watch: {
    '$route' (to, form) {
      if (to.path === '/details') {
        this.$store.dispatch('detailLike', true)
      } else {
        this.$store.dispatch('detailLike', false)
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang='scss' scoped>
</style>
