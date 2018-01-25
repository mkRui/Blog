<template>
    <div class="hot">
        <h2>热门文章(<span v-html="skills"></span>)</h2>
        <ul>
          <li class="clear">
            <div class="banner"><img src=""></div>
            <div class="font">
              <h3>web前端学习之路</h3>
              <h5>js html css </h5>
            </div>
          </li>
          <li class="clear">
            <div class="banner"><img src=""></div>
            <div class="font">
              <h3>web前端学习之路</h3>
              <h5>js html css </h5>
            </div>
          </li>
          <li class="clear">
            <div class="font">
              <h3>web前端学习之路</h3>
              <h5>js html css </h5>
            </div>
          </li>
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      technology: ['react.js', 'javascript', 'vue.js', 'node.js', 'python', 'html', 'css'],
      str: 'abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ1234567890',
      index: -1,
      indas: -1,
      timer: null,
      skills: ''
    }
  },
  methods: {
    increase () {
      this.index++
      if (this.index > this.technology.length - 1) {
        this.index = 0
      }
    },
    teration () {
      this.increase()
      var crr = this.technology[this.index].split('')
      this.timer = setInterval(() => {
        this.indas++
        if (crr[this.indas]) {
          this.skills += crr[this.indas]
        }
        if (this.indas > crr.length - 1) {
          clearInterval(this.timer)
          setTimeout(() => {
            this.backward(crr)
          }, 1000)
        }
      }, 200)
    },
    backward (data) {
      var brr = []
      var index = data.length
      var timer = null
      for (var i = 0; i < data.length; i++) {
        brr.push(this.str.split('')[Math.floor(Math.random() * (63 - 0) + 0)])
      }
      timer = setInterval(() => {
        index--
        data.splice(index, 1)
        data.splice(index, 0, brr[index])
        this.skills = ''
        for (var i = 0; i < data.length; i++) {
          if (data[i]) {
            var span = document.createElement('i')
            span.innerHTML = data[i]
            this.skills += span.outerHTML
          }
        }
        if (index === 0) {
          clearInterval(timer)
          this.terations(data)
        }
      }, 100)
    },
    terations (data) {
      this.increase()
      var crr = this.technology[this.index].split('')
      var indea = 0
      var brr = data.length
      var timer = null
      timer = setInterval(() => {
        if (indea < brr) {
          data.splice(indea, 1)
        }
        if (indea === crr.length - 1) {
          data.splice(indea)
        }
        data.splice(indea, 0, crr[indea])
        this.skills = ''
        for (var i = 0; i < data.length; i++) {
          if (data[i]) {
            var span = document.createElement('i')
            span.innerHTML = data[i]
            this.skills += span.outerHTML
          }
        }
        indea++
        if (indea > crr.length - 1) {
          clearInterval(timer)
          setTimeout(() => {
            this.backward(data)
          }, 600)
        }
      }, 400)
    }
  },
  mounted () {
    this.teration()
  }
}
</script>
<style scoped lang='scss'>
  .hot {
    h2 {
        font-size: 18px;
        letter-spacing: 3px;
        color: rgba(0,0,0,.54);
        margin-bottom: 10px;
        span {
          padding-left: 5px;
          padding-right: 5px;
        }
    }
    ul {
      width: 100%;
      li {
        margin-top: 15px;
        margin-bottom: 15px;
        height: 70px;
        border: 1px solid #cdcdcd;
        box-sizing: border-box;
        padding: 10px;

        .banner {
          float: left;
          width: 50px;
          height: 50px;
          background-color: #cdcdcd;
          padding-right: 10px;
        }
        .font {
          float: left;
          margin-left: 20px;
          line-height: 1.6;
        }
      }
    }
  }
</style>
