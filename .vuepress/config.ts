import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
import {mediumZoomPlugin} from '@vuepress/plugin-medium-zoom'


export default defineUserConfig({
 
  title: 'JoeyMa`s Blog',
  head:[
    ['link',{rel:'icon',href:'/yezi.svg'}],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  description: 'Just playing around',
  lang: 'zh-CN',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/head_portrait.jpg',
    author: 'Joey Ma',
    authorAvatar: '/head_portrait.jpg',
    editLink:false,
    lastUpdatedText: '最后更新',
    // series 为原 sidebar
    // componentsDir: '/.vuepress/components',
    series: {
      '/docs/theme-reco/': [
        {
          text: 'module one',
          children: ['home', 'theme']
        },
        {
          text: 'module two',
          children: ['api', 'plugin']
        }
      ],
      '/blogs/other/':[
        {
          text:'关于',
          children:['aboutBlog','aboutMe']
        }
      ]
    },
    navbar:
    [
      { text: '主页', link: '/' },
      { text: '分类', link: '/categories/Notes/1/' },
      { text: '标签', link: '/tags/introduce/1/' },
      { text: '关于',link: '/blogs/other/aboutBlog'},
    ],
    valineConfig: {
      appId: 'rIcSknoiSLO9yS24fnq3NYXo-gzGzoHsz',
      appKey: 'epi9OdWGu1jSKNNPJ6jMR4cP',
      placeholder: '支持markdown语法形式',
      // verify: true, // 验证码服务，已废弃
      // notify: true,//通知功能，已废弃
      recordIP: true,
      avatar:'robohash'
      // hideComments: true // 隐藏评论
    },
  }),
  // debug: true,
  plugins:[
    mediumZoomPlugin({
      zoomOptions:{
      margin: 24,
      background: '#22272e',
      scrollOffset: 0,
     }
    }),
    
  ]
})
