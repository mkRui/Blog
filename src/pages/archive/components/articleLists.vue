<template>
  <div class="articleLists">
    <ul>
      <li v-for="(item, index) in archive" :key="index">
        <h4>{{ item.date }}</h4>
        <div v-for="(elem, logo) in item.children" :key="logo">
          <p>{{ elem.date }}月</p>
          <div v-for="data in elem.children" :key="data.id" class="listContent">
            <span></span>
            <span>{{ data.time | format('dd') }}</span>
            <router-link :to="{path: '/details', query: {id: data.id}}">{{ data.name }}</router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'articleLists',
  data () {
    return {
      article: [
        {name: 'web前端历练之路', id: 2344123, time: 1524160804167},
        {name: 'python学习指南', id: 234153, time: 1514860804167},
        {name: 'java10的发布', id: 234128, time: 1424560504167},
        {name: 'vue和react的组件化开发', id: 234123, time: 1524360804167},
        {name: 'nodejs构建项目', id: 234123, time: 1424360804167}
      ],
      archive: []
    }
  },
  mounted () {
    var year = []
    this.article.forEach(item => {
      year.push(new Date(item.time).getFullYear())
    })
    year = Array.from(new Set(year))
    year.forEach(item => {
      this.archive.push({date: item, children: []})
    })
    year.forEach(item => {
      var arr = []
      this.article.forEach(items => {
        if (item === new Date(items.time).getFullYear()) {
          arr.push(new Date(items.time).getMonth() + 1)
        }
      })
      arr = Array.from(new Set(arr))
      this.archive.forEach(items => {
        if (item === items.date) {
          items.children = arr.map(item => {
            var obj = {}
            obj.date = item
            obj.children = []
            return obj
          })
        }
      })
    })
    this.archive.forEach(items => {
      this.article.forEach(item => {
        if (new Date(item.time).getFullYear() === items.date) {
          items.children.forEach(elem => {
            if (new Date(item.time).getMonth() + 1 === elem.date) {
              elem.children.push(item)
            }
          })
        }
      })
    })
  }
}
</script>
<style lang='scss' scoped>
.articleLists {
  width: 100%;
  ul {
    li {
      margin-bottom: 20px;
      > h4 {
        font-size: 22px;
        font-weight: normal;
        letter-spacing: 3px;
        color: rgba(0,0,0,.6);
        margin-bottom: 10px;
        margin-top: 10px;
      }
      > h4 ~ div {
        margin-left: 20px;
        font-weight: normal;
        letter-spacing: 3px;
        color: rgba(0,0,0,.64);
        margin-bottom: 10px;
        margin-top: 10px;
      }
    }
  }
  .listContent {
    margin: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > span {
      &:nth-child(1) {
        display: block;
        width: 10px;
        height: 10px;
        background: #ccc;
        border: 1px solid #E3E3E3;
        border-radius: 50%;
        margin-right: 10px;
      }
      &:nth-child(2) {
        font-size: 12px;
        display: block;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}
</style>
