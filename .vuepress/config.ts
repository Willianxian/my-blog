import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: 'Joey Ma',
  head:[
    ['link',{rel:'icon',href:'./yezi.svg'}],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  description: 'Just playing around',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.jpg',
    author: 'Joey Ma',
    authorAvatar: '/logo.jpg',
    docsRepo: 'https://github.com/Willianxian/willianxian.github.io',
    docsBranch: 'gh-pages2.0',
    lastUpdatedText: '最后更新',
    // series 为原 sidebar
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
      { text: '归档', link: '/categories/Notes/1/' },
      { text: '标签', link: '/tags/jieshao/1/' },
      { text: '关于',link: '/blogs/other/aboutBlog'},
    ],
    valineConfig: {
      appId: 'rIcSknoiSLO9yS24fnq3NYXo-gzGzoHsz',
      appKey: 'epi9OdWGu1jSKNNPJ6jMR4cP',
      placeholder: '填写邮箱可以收到回复提醒哦！',
      // verify: true, // 验证码服务，已废弃
      // notify: true,//通知功能，已废弃
      recordIP: true,
      avatar:'robohash'
      // hideComments: true // 隐藏评论
    },
  }),
  // debug: true,
})
