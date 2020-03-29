module.exports = {
    title: 'Welcom My Blog',
    description: '一起学习，一起进步',
    base: '/',
    markdown: {
        // lineNumbers: true,
        // markdown-it-anchor 的选项
        anchor: {permalink: false},
        // markdown-it-toc 的选项
        toc: {includeLevel: [2, 3]},
    },
    plugins: [

    ],

    theme: '@vuepress/theme-blog',
    themeConfig: {
        dateFormat: 'YYYY-MM-DD',
        sidebar: true,
        nav: [],
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/vuejs/vuepress',
                },
            ],
            copyright: [
                {
                    text: 'Privacy Policy',
                    link: 'https://policies.google.com/privacy?hl=en-US',
                },
                {
                    text: 'MIT Licensed | Copyright © 2018-present Vue.js',
                    link: '',
                },
            ],
        },
    }
}
