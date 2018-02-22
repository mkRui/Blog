<template>
    <div class="aboutme">
        <div class="triangle">
          <div></div>
          <div>{{ title }}</div>
        </div>
        <div class="titimg">
          <img src="./../assets/image/timg.jpeg">
        </div>
        <div class="aboutMe">
          <header>
            <h4><span>abotMe</span><span></span></h4>
          </header>
          <div class="ismy clearfix">
            <introduction></introduction>
            <thank></thank>
            <development></development>
          </div>
        </div>
    </div>
</template>
<script>
import introduction from './../components/aboutme/introduction'
import thank from './../components/aboutme/Thank'
import development from './../components/aboutme/development'
export default {
  name: 'aboutme',
  data () {
    return {
      title: '嘿 嘿 嘿～ 关于作者'
    }
  },
  components: {
    introduction,
    thank,
    development
  }
}
</script>
<style lang='scss' scoped>
    .aboutme {
      position: relative;
      width: 1000px;
      height: 1072px;
      min-height: 800px;
      background:#fff;
      margin: 0 auto;
      margin-top: 70px;
      border-radius: 5px;
      box-sizing: border-box;
      padding: 30px;
      > .triangle {
        height: 24px;
        position: absolute;
        top: -10px;
        left: 20px;
        div:nth-child(2) {
          float: left;
          padding-left: 10px;
          padding-right: 10px;
          height: 24px;
          color: #fff;
          line-height: 24px;
          text-align: center;
          font-weight: bolder;
          font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          background-color: $border;
        }
        div:nth-child(1) {
            float: left;
            width: 0px;
            height: 0px;
            border-top: solid 10px transparent;
            border-right: solid 10px $border;
            color: #ffffff;
        }
      }
      > .titimg {
        width: 100%;
        height: 300px;
        border-radius: 5px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      > .aboutMe {
        width: 100%;
        header {
          height: 30px;
          margin-top: 20px;
          position: relative;
          span:nth-child(1) {
            font-weight: normal;
            position: absolute;
            z-index: 1;
            color: #444;
            background-color: #fff;
            padding-right: 10px;
          }
          span:nth-child(2) {
            display: inline-block;
            position: absolute;
            width: 100%;
            height: 1px;
            background-color: $border;
            top: 10px;
            left: 0;
          }
        }
        > .ismy {
          height: 543px;
        }
      }
    }
</style>
