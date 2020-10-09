const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Algorithm && Life Hacker Tips',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Algorithm',
        link: '/algorithm/',
      },
      {
        text: '文章',
        link: 'https://www.yuque.com/nageaihuanxiangdeshaonian/gu0ogy',
      },
      {
        text: '学习路线',
        link: '/learning_path/',
      },
      {
        text: '留言',
        link: '/comment/'
      },
      {
        text: 'Github',
        link: 'https://github.com/Ruijian-Zha'
      }
    ],
    sidebar: {
        '/algorithm/':[
          {
            title: '算法目录',   // 必要的
            path: '/algorithm/', 
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              ''
            ]
          },
          {
            title: '基础算法',   // 必要的
            path: '/algorithm/', 
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              'basic_algorithm/排序',
              'basic_algorithm/二分',
              'basic_algorithm/前缀和',
              'basic_algorithm/差分数组',
              'basic_algorithm/双指针',
              'basic_algorithm/位运算',
              'basic_algorithm/离散化'
            ]
          },
          {
            title: '数据结构',   // 必要的
            path: '/algorithm/', 
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              'data_structure/链表',
              'data_structure/单调栈',
              'data_structure/滑动窗口',
              'data_structure/KMP',
              'data_structure/字典树'
            ]
          },
          {
            title: '图论',   // 必要的
            path: '/algorithm/', 
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              'graph/DFS',
              'graph/BFS',
              'graph/朴素的Dijkstra算法',
              'graph/堆优化版的Dijkstra算法',
              'graph/Bellman-Ford算法',
              'graph/spfa算法',
              'graph/Floyd算法',
              'graph/Prim算法',
              'graph/Kruskal算法',
              'graph/二分图'
            ]
          }
        ]
      }
  },
  

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/register-components',
      {
        componentsDir: './components'
      }
    ],
  ]
}
