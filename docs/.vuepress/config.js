const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'ZhengSC',
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
    ['link', {
      rel: 'icon',
      href: 'http://img14.360buyimg.com/ee/jfs/t1/7092/17/2002/12001/5bd12a07E4f5495c1/32472c5783faf459.png'
    }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    ['meta', { name: 'theme-color', content: '#272727' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    title:'郑世超',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    base:'/',
    logo: 'http://img14.360buyimg.com/ee/jfs/t1/7092/17/2002/12001/5bd12a07E4f5495c1/32472c5783faf459.png',
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '编程',
        link: '/blog/'
      },
      {
        text: '爱好',
        link: '/hobby/'
      },
      {
        text: '关于我',
        link: '/about/'
      },
      {
        text: 'Github',
        link: 'https://github.com/ZhengscDev'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ['code-copy',{
      selector:'div[class*="language-"]',
      color:'#ffffff',
      backgroundTransition:false,
      successText:'复制成功!'
    }],
    // ref: https://github.com/webmasterish/vuepress-plugin-feed
    ['feed', {
      canonical_base: 'https://richlab.design/',
      feeds: {
        rss2: { enable: true },
        atom1: { enable: false },
        json1: { enable: false },
      },
      posts_directories: [
        '/blog/_posts',
        '/hobby/_posts'
      ]
    }],
    ['@vuepress/google-analytics', {
      ga: 'UA-128189152-2'
    }],
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/html-redirect', {
      countdown: 0
    }
    ],
    ['@vuepress-reco/comments', {
      solution: 'valine',
      options: {
        appId: 'yPsaft2cSPtwnXW6UiXBS4ld-gzGzoHsz',
        appKey: 'AYI4KeXQloUWsuebDElj8A67',
      }
    }],
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'blog',
            // Target directory
            dirname: 'blog/_posts',
            // Path of the `entry page` (or `list page`)
            path: '/blog/',
            itemPermalink: '/blog/:year/:month/:day/:slug',
            // layout: 'Layout',
            pagination: {
              lengthPerPage: 20,
            },
          },
          {
            // Unique ID of current classification
            id: 'hobby',
            // Target directory
            dirname: 'hobby/_posts',
            // Path of the `entry page` (or `list page`)
            path: '/hobby/',
            itemPermalink: '/hobby/:year/:month/:day/:slug',
            // layout: 'Layout',
            pagination: {
              lengthPerPage: 20,
            },
          },
        ],
      },
    ],
  ]
}
