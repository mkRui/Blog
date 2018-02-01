<template>
<div>
    <div class="comments" @click="target">
        <div class="header">
            <div class="comment"><span>0</span>条评论</div>
            <div class="commentline"></div>
        </div>
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
    <div class="commenand clearfix">
      <div><img src="../assets/image/people.jpeg"></div>
      <div class="reply">
        <p class="clearfix"><span>师聪瑞</span><span>2017年12月13日</span></p>
        <p>sdhfjkasfdkjashdkjashdjasjkd</p>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'comment',
  methods: {
    target (event) {
      console.log(1)
      console.log(event)
    }
  }
}
</script>
<style lang='scss' scoped>
@import url('./../iconfont/iconfont.css');
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
              i:hover {
                color: #274156;
              }
            }
            div:nth-child(2) {
              float: right;
              letter-spacing: 2px;
              color: #D0CCD0;
            }
            div:nth-child(2):hover {
              color: #274156;
            }
          }
        }
      }
    }
    .commenand {
      width: 100%;
      margin-top: 30px;

      > div:nth-child(1) {
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
      .reply {
        width: calc(100% - 83px);
        float: right;
        min-height: 70px;
        >p:nth-child(1) {
          margin-bottom: 10px;
          color: rgb(133, 128, 128);
          span:nth-child(1) {
            float: left;
          }
          span:nth-child(2) {
            float: right;
          }
        }
        >p:nth-child(2) {
          letter-spacing: 2px;
          color: #000;
          font-weight: 600;
        }
      }
    }
</style>
