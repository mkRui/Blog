import axios from './axios'

// 初始接口测试
export function listArticle (data) {
  return axios.get('/article/listArticle?categoryId=1&pageNo=1&pageSize=20').then(res => res.data)
}
