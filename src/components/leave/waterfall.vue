<template>
  <div class="leave">
    <div class="leaveMain">
      <ul v-for="(item, index) in message" :key="index" ref="ul">
        <li v-for="(elem, info) in item" :key="info">{{ elem }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'leave',
  data () {
    return {
      message: [
        [],
        [],
        [],
        []
      ],
      compare: [],
      num: 0,
      index: 0,
      info: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    }
  },
  methods: {
    calc () {
      this.$refs.ul.forEach((item, elem) => {
        this.compare.push(item.offsetHeight)
      })
      this.num = Math.min.apply(Math, this.compare)
      for (var i = 0; i < this.$refs.ul.length; i++) {
        if (this.$refs.ul[i].offsetHeight === this.num) {
          this.index = i
          break
        }
      }
      this.compare = []
    }
  },
  async mounted () {
    // 定时器的写法
    // var index = 0
    // var timer = null
    // timer = setInterval(() => {
    //   this.calc()
    //   this.message[this.index].push(this.info[index])
    //   index++
    //   if (index === this.info.length) {
    //     clearInterval(timer)
    //   }
    // }, 2)
    for (var i = 0; i < this.info.length; i++) {
      await this.calc()
      await this.message[this.index].push(this.info[i])
    }
  }
}
</script>
<style lang='scss' scoped>
  .leave {
    > .leaveMain {
      ul {
        width: 250px;
        float: left;
        background: #444;
        margin-left: 25px;
        margin-right: 25px;
        li {
          width: 100%;
          min-height: 40px;
        }
      }
    }
  }
</style>
