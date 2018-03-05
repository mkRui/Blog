const state = {
  words: [
    {imgUrl: 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=9d6eeb457f310a55c471d6f082756f9f/a71ea8d3fd1f4134fd5274c8231f95cad1c85e1a.jpg', name: '师聪瑞', date: '2017年12月13日', content: '<h1 class="scr-h1">hello!这篇文章还行[酷]我还是挺喜欢的</h1>', switch: false, id: 1, children: [], parentId: 0},
    {imgUrl: 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=9d6eeb457f310a55c471d6f082756f9f/a71ea8d3fd1f4134fd5274c8231f95cad1c85e1a.jpg',
      name: '曹帅',
      date: '2017年12月12日',
      content: 'hello!这篇文章还行',
      children: [
        {maxName: '师聪瑞', content: '你说的没错  把我想说的都说了 <img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=9d6eeb457f310a55c471d6f082756f9f/a71ea8d3fd1f4134fd5274c8231f95cad1c85e1a.jpg">', parentId: 2, dateCom: '2018/3/2 上午9:56:44', switch: false, id: 3},
        {maxName: '曹帅', minName: '师聪瑞', content: '666666666', parentId: 2, dateCom: '2018/3/2 上午9:56:44', switch: false, id: 4}
      ],
      switch: false,
      id: 2,
      parentId: 0}
  ]
}

const getters = {

}

const actions = {
  marked ({ commit }, data) {
    commit('MARKED', data)
  },
  comments ({ commit }, data) {
    commit('COMMENTS', data)
  }
}

const mutations = {
  MARKED (state, data) {
    state.words.push({imgUrl: 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=9d6eeb457f310a55c471d6f082756f9f/a71ea8d3fd1f4134fd5274c8231f95cad1c85e1a.jpg', name: '师聪瑞', date: '2017年12月13日', content: data[0], switch: false, id: data[1], children: [], parentId: 0})
  },
  COMMENTS (state, data) {
    state.words.forEach(element => {
      if (element.id === data.parentId) {
        element.children.push(data)
      }
    })
  }
}

export default ({
  state,
  getters,
  actions,
  mutations
})
