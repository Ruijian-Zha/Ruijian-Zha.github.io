const { description } = require('../../package')

module.exports = {
  theme: 'reco',
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
    subSidebar: 'auto',
    authorAvatar: '/tou_xiang.png',
    type: 'blog',
    author: 'Ruijian_Zha',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Algorithm',
        link: '/algorithm/',
        icon: 'reco-tag'
      },
      {
        text: '读书笔记',
        link: '/categories/得到/',
        icon: 'reco-category'
      },
      {
        text: '学习路线',
        link: '/learning_path/',
        icon: 'reco-api'
      },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      {
        text: '留言',
        link: '/comment/',
        icon: 'reco-suggestion'
      },
      {
        text: '小专题',
        link: 'https://www.yuque.com/nageaihuanxiangdeshaonian/gu0ogy',
        icon: 'reco-document'
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
              'data_structure/字典树',
              'data_structure/并查集',
              'data_structure/堆',
              'data_structure/哈希表'
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
              'graph/最短路目录',
              'graph/朴素的Dijkstra算法',
              'graph/堆优化版的Dijkstra算法',
              'graph/Bellman-Ford算法',
              'graph/spfa算法',
              'graph/Floyd-Warshall算法',
              'graph/最小生成树',
              'graph/Prim算法',
              'graph/Kruskal算法',
              'graph/二分图'
            ]
          },
          {
            title: '动态规划',   // 必要的
            path: '/algorithm/', 
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              'dp/dp理论讲义',
              'dp/背包dp'
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
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      width: '300px', // 默认 260px
      title: '消息提示',
      body: [
        {
          type: 'title',
          content: '欢迎加入QQ交流群 🎉🎉🎉',
          style: 'text-aligin: center;'
        },
        {
          type: 'image',
          src: '/public/wechat.png'
        }
      ],
      footer: [
        {
          type: 'button',
          text: '打赏',
          link: '/donate'
        },
        {
          type: 'button',
          text: '打赏',
          link: '/donate'
        }
      ]
    }]
  ]
}
