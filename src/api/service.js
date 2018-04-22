import axios from './axios'
import querystring from 'querystring'

// 注册
export function register (data) {
  return axios.post('/usher/register', data).then(res => res.data)
}

// 登陆
export function login (data) {
  return axios.post('/usher/login', data).then(res => res.data)
}

// 推出登陆
export function logout (data) {
  return axios.post('/usher/logout', querystring.stringify({
    account: '1102163949',
    password: '123456'
  })).then(res => res.data)
}

// 文章发布接口
export function checkList (data) {
  return axios.post('/article/postArticle', querystring.stringify({
    categoryId: 1, // 分类id
    title: '1234', // 标题
    shortcut: '23456', // 内容缩略
    content: 'dsadasmfdbkjasbfjkbasfj', // 内容
    tags: '标签1,标签2,标签3'
  })).then(res => res.data)
}

// 获取文章列表
export function listArticle (data) {
  return axios.get('/public/listArticle').then(res => res.data)
}

// 获取分类列表
export function CatagoryList (data) {
  return axios.get('/article/getCatagoryList').then(res => res.data)
}

// 标签获取 根据文章数量排序
export function TagList (data) {
  return axios.get('/article/getTagList').then(res => res.data)
}
