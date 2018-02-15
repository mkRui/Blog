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
        <div><img src="../../assets/image/people.jpeg"></div>
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
    <div class="commenand clearfix" v-for="(item, index) in words" :key="index">
      <div><img :src="item.imgUrl"></div>
      <div class="reply">
        <p class="clearfix"><span>{{ item.name }}</span><span>{{ item.date }}</span></p>
        <p>{{ item.content }}</p>
        <div v-if="item.children">
          <div class="commentreply clearfix" v-for="(items, element) in item.children" :key="element">
            <h4><span>{{ items.maxName }}</span><span v-if="items.minName">@{{ items.minName }}:</span><span v-else>:</span></h4>
            <p>{{ items.content }}</p>
          </div>
        </div>
        <div class="iconfonts clearfix">
          <div>
            <span class="iconfont icon-huifu"></span>
            <span>回复</span>
          </div>
          <div>
            <span class="iconfont icon-shoucang"></span>
            <span>赞</span>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'comment',
  data () {
    return {
      words: [
        {imgUrl: 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=9d6eeb457f310a55c471d6f082756f9f/a71ea8d3fd1f4134fd5274c8231f95cad1c85e1a.jpg', name: '师聪瑞', date: '2017年12月13日', content: 'hello!这篇文章还行 我还是挺喜欢的'},
        {imgUrl: 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=9d6eeb457f310a55c471d6f082756f9f/a71ea8d3fd1f4134fd5274c8231f95cad1c85e1a.jpg',
          name: '曹帅',
          date: '2017年12月12日',
          content: 'hello!这篇文章还行',
          children: [
            {maxName: '师聪瑞', content: '你说的没错  把我想说的都说了'},
            {maxName: '曹帅', minName: '师聪瑞', content: '666666666'}
          ]}
      ]
    }
  },
  methods: {
    target (event) {
      console.log(1)
      console.log(event)
    }
  }
}
</script>
<style lang='scss' scoped>
@import url('./../../iconfont/iconfont.css');
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
        background-color: $border;
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
            border-right: 15px solid $border;
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
            border: 1px solid $border;
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
                color: $head;
              }
            }
            div:nth-child(2) {
              float: right;
              letter-spacing: 2px;
              color: #D0CCD0;
            }
            div:nth-child(2):hover {
              color: $head;
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
        min-height: 80px;
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
          min-height: 50px;
        }
      }
    }
    .iconfonts {
      width: 100%;
      margin-top: 10px;
      div {
        span {
          vertical-align: middle;
          line-height: 20px;
        }
        height: 20px;
        float: left;
        margin-right: 10px;
      }
      div:nth-child(1) {
        span:nth-child(1) {
          margin-top: 20px;
          font-size: 19px;
        }
      }
      div:nth-child(2) {
        span:nth-child(1) {
          font-size:14px;
        }
      }
    }
    .commentreply {
      widows: 100%;
      min-height: 30px;
      padding: 5px;
      border-radius: 10px;
      margin-bottom: 10px;
      background-color: rgba(209, 208, 204, .5);
      word-break:break-all;
      h4 {
        font-weight: 400;
        float: left;
        margin-right: 10px;
      }
      p {
        float: left;
      }
    }
</style>
