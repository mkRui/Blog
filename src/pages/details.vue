<template>
    <div class="clearfix">
      <div class="detail">
        <div class="triangle">
          <div></div>
          <div>2017年11月23日</div>
        </div>
          <h1>web前端学习之路</h1>
          <h5>js html css vue.js react python node.js</h5>
          <p>字数<span>1002</span> · 阅读<span> 100 </span>次 · 点赞<span> 10 </span>次 · 评论<span> 20 </span>条</p>
          <div class="content">
            <img src="../assets/image/articleimages.jpg" alt="">
          </div>
          <div class="comments">
            <div class="header">
              <div class="comment"><span>0</span>条评论</div>
              <div class="commentline"></div>
            </div>
            <div class="commentbox">
              <div class="commentpeople clearfix">
                <div><img src="../assets/image/people.jpeg"></div>
                <div class="theinput">
                    <div></div>
                    <div></div>
                    <div contenteditable="true"></div>
                    <div class="submit clearfix">
                      <div><i class="iconfont icon-buoumaotubiao49"></i><i class="iconfont icon-tupian"></i><i class="iconfont icon-lianjieguanlian"></i><i class="iconfont icon-msnui-code"></i></div>
                      <div class="iconfont icon-fasong">发送</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="side">

        <transition name="slide-up" mode="out-in">
          <search v-show="all"></search>
        </transition>

        <transition name="slide-up" mode="out-in">
          <hot v-show="all"></hot>
        </transition>

        <transition name="slide-up" mode="out-in">
          <labels v-show="all"></labels>
        </transition>

      </div>
    </div>
</template>
<script>
import search from '../components/search'
import hot from '../components/hot'
import labels from './../components/label'
export default {
  name: 'detail',
  data () {
    return {
      all: false
    }
  },
  mounted () {
    this.all = true
    console.log(this.$route.query)
  },
  components: {
    search,
    hot,
    labels
  }
}
</script>
<style lang='scss' scoped>
@import url('./../iconfont/iconfont.css');
  .detail {
    float: left;
    max-width: 750px;
    margin-top: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-left: 30px;
    width: 730px;
    min-height: 600px;
    position: relative;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 40px;
    > .triangle {
      width: 140px;
      height: 24px;
      position: absolute;
      top: -10px;
      left: 20px;
      div:nth-child(2) {
        float: left;
        width: 130px;
        height: 24px;
        color: #fff;
        line-height: 24px;
        text-align: center;
        font-weight: bolder;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background-color: #1C6E8C;
      }
      div:nth-child(1) {
        float: left;
        width: 0px;
        height: 0px;
        border-top: solid 10px transparent;
        border-right: solid 10px  #1C6E8C;
        color: #ffffff;
      }
    }
    h1 {
      line-height: 2.2;
      font-weight: 500;
    }
    h5{
      line-height: 2;
      font-size: 15px;
      font-weight: 500;
    }
    p {
      font-size: 14px;
      line-height: 2;
    }
    .content {
      img {
        width: 100%;
      }
    }
    .comments {
      margin-top: 30px;
      .header {
        height: 30px;
        overflow: hidden;
        position: relative;
        .comment {
          width: 80px;
          height: 30px;
          position: absolute;
          left:0;
          background-color: #fff;
          z-index: 1;
          letter-spacing: 4px;
        }
        .commentline {
          width: 100%;
          height: 2px;
          background-color: #1C6E8C;
          position: absolute;
          top: 10px;
        }
      }
      .commentbox {
        margin-top: 20px;
        width: 100%;
        .commentpeople {
          width: 100%;

          >div:nth-child(1) {
            float: left;
            width: 50px;
            height: 50px;
            border-radius: 5px;
            border: 1px solid #f0f0f0;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .theinput {
            float: right;
            position: relative;
            width: calc(100% - 90px) ;
            height: 130px;
            margin-bottom: 20px;
            > div {
              position: absolute;
            }
            > div:nth-child(1) {
              width: 0;
              height: 0;
              border-top: 11px solid transparent;
              border-bottom: 11px solid transparent;
              border-right: 15px solid #1C6E8C;
              top: 7px;
              left: -15px;
            }
            > div:nth-child(2) {
              width: 0;
              height: 0;
              border-top: 11px solid transparent;
              border-bottom: 11px solid transparent;
              border-right: 15px solid #ffffff;
              top: 7px;
              left: -13px;
              z-index: 1;
            }
            > div:nth-child(3) {
              width: 100%;
              height: 100px;
              overflow: auto;
              outline: none;
              padding: 10px;
              top: 0;
              left: 0;
              border: 1px solid #1C6E8C;
            }
            > .submit {
              position: absolute;
              width: 100%;
              height: 25px;
              bottom: 0;
              left: 0;
              div:nth-child(1) {
                float: left;
                i {
                  margin-right: 20px;
                  font-size: 18px;
                  color: #D0CCD0;
                }
              }
              div:nth-child(2) {
                float: right;
                letter-spacing: 2px;
                color: #D0CCD0;
              }
            }
          }
        }
      }
    }
  }
  .side {
    width: 346.55px;
    float: left;
    margin-top: 40px;
    margin-left: 93px;
  }
</style>
