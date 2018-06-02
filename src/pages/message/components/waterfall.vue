<template>
  <div class="leave">
    <div class="leaveMain">
      <ul v-for="(item, index) in message" :key="index" ref="ul">
        <li v-for="(elem, info) in item" :key="info">
          <h5 class="date">{{elem.date}}</h5>
          <contents :contents="elem.content | emojiContent"></contents>
          <h5 class="right">{{elem.name ? elem.name : '好懒呐！'}}</h5>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import contents from './content'
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
      info: []
    }
  },
  components: {
    contents
  },
  props: ['msgConten'],
  watch: {
    async msgConten (data) {
      this.info.push(data)
      for (var i = 0; i < this.info.length; i++) {
        await this.calc()
        await this.message[this.index].push(this.info[i])
      }
      this.info = []
    }
  },
  methods: {
    calc () {
      this.$refs.ul.forEach((item, elem) => {
        this.compare.push(item.offsetHeight)
      })
      console.log(this.compare)
      this.num = Math.min.apply(Math, this.compare)
      console.log(this.num)
      console.log('_________')
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
        width: 230px;
        float: left;
        margin-right: 26px;
        li {
          position: relative;
          background: #E3E3E3;
          width: 100%;
          min-height: 100px;
          margin-bottom: 20px;
          box-sizing: border-box;
          padding: 10px;
          padding-bottom: 30px;
          word-wrap:break-word;
          border-radius: 4px;
          border: 1px solid $border;
          h5 {
            font-size: 15px;
            font-weight: normal;
          }
          .date {
            margin-bottom: 10px;
          }
          .right {
            position: absolute;
            right: 5px;
            bottom: 5px;
          }
        }
        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
</style>
