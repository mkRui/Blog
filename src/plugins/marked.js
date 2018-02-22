import marked from 'marked'
import Hljs from './highlight.js'
var render = new marked.Renderer()
marked.setOptions({
  renderer: render,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return Hljs.highlightAuto(code).value
  }
})

const imagesPage = function (href, title, alt) {
  return `<img src=${href} class='images'>`
}

render.image = imagesPage

export default (content) => {
  var html = marked(content, { render })
  return html
}
