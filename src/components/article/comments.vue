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
          <div><CommentBox v-on:marked="commentMarked"></CommentBox></div>
        </div>
    </div>
    <div class="commenand clearfix" v-for="(item, index) in words" :key="index">
      <div><img :src="item.imgUrl"></div>
      <div class="reply">
        <p class="clearfix"><span>{{ item.name }}</span><span>{{ item.date }}</span></p>

        <mainContent :contents="item.content | emojiContent"></mainContent>

        <div v-if="item.children">
          <div class="commentreply clearfix" v-for="(items, element) in item.children" :key="element">
            <h4><span>{{ items.maxName }}</span><span v-if="items.minName">@{{ items.minName }}:</span><span v-else>:</span></h4>

            <mainContent :contents="items.content | emojiContent"></mainContent>

          </div>
        </div>
        <div class="iconfonts clearfix">
          <div class="clearfix">
            <span class="iconfont icon-huifu"></span>
            <span>回复</span>
          </div>
          <div class="clearfix">
            <span class="iconfont icon-shoucang"></span>
            <span>赞</span>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import CommentBox from './CommentBox'
import mainContent from './content'
export default {
  name: 'comment',
  data () {
    return {
    }
  },
  methods: {
    target (event) {
      console.log(1)
      console.log(event)
    },
    commentMarked (data) {
      this.$store.dispatch('marked', data)
    }
  },
  components: {
    CommentBox,
    mainContent
  },
  computed: {
    words () {
      return this.$store.state.article.words
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
        > div:nth-child(2) {
          width: calc(100% - 90px) ;
          float: right;
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
        border-radius: 5px;
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
      }
    }
    .iconfonts {
      width: 100%;
      margin-top: 10px;
      div {
        cursor: pointer;
        span {
          float: left;
          display: block;
          margin-left: 5px;
        }
        .icon-huifu {
          margin-top: -3px;
          font-size: 22px;
        }
        height: 20px;
        float: left;
        margin-right: 10px;
      }
    }
    .commentreply {
      widows: 100%;
      min-height: 30px;
      border-radius: 2px;
      margin-bottom: 10px;
      background-color: rgba(209, 208, 204, .3);
      word-break:break-all;
      line-height: 30px;
      box-sizing: border-box;
      padding-left: 20px;
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
