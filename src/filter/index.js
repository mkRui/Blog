import emojis from './../plugins/emoji-data'

/**
 * @export
 * @param {string} content 传入的内容
 * @return 返回的带有表情的内容
 */

export function emojiContent (content) {
  emojis.forEach((item, index) => {
    content = content.replace(item.name, item.icon)
  })
  return content
}
