<template>
    <div class="theinput">
        <div
          :style="{border:'1px solid ' + borderColor}"
          ref="markEditor"
          contenteditable="true"
          @focus="focus"
          @blur="blur">这一刻,请写下你的想法.....
        </div>
        <div class="submit clearfix">
            <div class="iconBtn">
              <i class="iconop iconfont icon-buoumaotubiao49">
                <div class="emoji">
                  <ul class="clearfix">
                    <li v-for="(item, index) in emoji" :key="index" @click="emojiClick(item)" >{{ item.icon }}</li>
                  </ul>
                </div>
              </i>
              <i v-for="(item, index) in icon" :class="'iconfont '+item.icon" :key="index" @click="marked(item.name)"></i>
            </div>
            <div class="subimt iconfont icon-fasong" @click="submit">发送</div>
        </div>
    </div>
</template>
<script>
import emoji from '@/plugins/emoji-data'
import marked from '@/plugins/marked'
export default {
  name: 'CommentBox',
  props: ['borderColor', 'info', 'people'],
  data () {
    return {
      emoji: [],
      icon: [{icon: 'icon-tupian', name: 'picture'}, {icon: 'icon-lianjieguanlian', name: 'link'}, {icon: 'icon-msnui-code', name: 'code'}]
    }
  },
  watch: {
    content (item) {
      if (item === '') {
      }
    }
  },
  methods: {
    marked (item) {
      const grammar = {
        picture: {
          start: '![](',
          end: ')'
        },
        link: {
          start: '[](',
          end: ')'
        },
        code: {
          start: '\n```javascript\n',
          end: '\n```'
        }
      }
      this.editor(grammar[item])
    },
    // 向可编辑评论框 添加markdown 语法
    editor ({ start = '', end = '' } = '') {
      if (!start && !end) return false
      var selected = (window.getSelection || document.getSelection)().toString()
      var markedContent = this.$refs.markEditor.innerText
      if (selected) {
        if (start === '') {
          let selectCon = markedContent.replace(selected, end)
          this.$refs.markEditor.innerText = selectCon
        } else {
          let selectCon = markedContent.replace(selected, start + selected + end)
          this.$refs.markEditor.innerText = selectCon
        }
      } else {
        if (this.$refs.markEditor.innerText === '这一刻,请写下你的想法.....') {
          this.$refs.markEditor.innerText = ''
          this.$refs.markEditor.innerText += start + end
          this.$refs.markEditor.scrollBy(0, this.$refs.markEditor.scrollHeight)
        } else {
          this.$refs.markEditor.innerText += start + end
          this.$refs.markEditor.scrollBy(0, this.$refs.markEditor.scrollHeight)
        }
      }
    },
    // 下面这两个函数 只是造成placeholder的效果
    focus () {
      if (this.$refs.markEditor.innerText === '这一刻,请写下你的想法.....') {
        this.$refs.markEditor.innerText = ''
      }
    },
    blur () {
      if (this.$refs.markEditor.innerText === '') {
        this.$refs.markEditor.innerText = '这一刻,请写下你的想法.....'
      }
    },
    emojiClick (item) {
      this.editor({end: item.name})
    },
    submit () {
      if (this.$refs.markEditor.innerText !== '这一刻,请写下你的想法.....') {
        let text = this.$refs.markEditor.innerText
        let html = marked(text)
        if (this.info) {
          if (this.people) {
            this.$emit('marked', html, this.info, this.people)
          } else {
            this.$emit('marked', html, this.info)
          }
        } else {
          this.$emit('marked', html)
        }
        this.$refs.markEditor.innerText = '这一刻,请写下你的想法.....'
      }
    }
  },
  async mounted () {
    this.emoji = await emoji
  }
}
</script>
<style lang='scss' scoped>
@import url('./../../../iconfont/iconfont.css');
    .theinput {
      float: right;
      position: relative;
      width: 100%;
      height: 130px;
      margin-bottom: 20px;
    > div {
      position: absolute;
    }
    > div:nth-child(1) {
      width: 100%;
      height: 100px;
      overflow: auto;
      outline: none;
      padding: 10px;
      top: 0;
      left: 0;
      border: 1px solid $border;
      border-radius: 5px;
    }
    > .submit {
      position: absolute;
      width: 100%;
      height: 25px;
      bottom: 0;
      left: 0;
      > .iconBtn {
          float: left;
        i {
          margin-right: 20px;
          font-size: 18px;
          color: #D0CCD0;
        }
        i:hover {
          color: $head;
          cursor: pointer;
        }
        .iconop:hover .emoji {
          display: block;
        }
      }
      > .subimt {
        float: right;
        letter-spacing: 2px;
        color: #D0CCD0;
        cursor: pointer;
      }
      > .subimt:hover {
          color: $head;
        }
        .emoji {
          display: none;
          position: absolute;
          top: -4px;
          width: 270px;
          background: #ffffff;
          li {
            font-size: 20px;
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            float: left;
          }
          li:hover {
            background: #D0CCD0;
          }
        }
      }
    }
</style>
