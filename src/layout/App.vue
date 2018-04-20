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
    '$route': (to, form) => {
      console.log(to)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
