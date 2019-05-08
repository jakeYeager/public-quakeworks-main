module.exports = {
    plugins: [
        '@vuepress/clean-urls',
        '@vuepress/back-to-top',
        '@vuepress/google-analytics'
    ],
    chainMarkdown(config) {
        // Add extra markdown-it plugin
        config
            .plugin('footnote')
            .use(require('markdown-it-footnote'))
    },
    'ga': 'UA-99759012-15',
    head: [
        ['link', { rel: 'icon', href: `/hero-logo.png` }],
        ['meta', { name: 'theme-color', content: '#3366cc' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `/icons/apple-touch-icon.png` }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `/icons/favicon-32x32.png` }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `/icons/favicon-16x16.png` }],
        ['link', { rel: 'manifest', href: '/icons/site.webmanifest' }]
    ],
    title: 'QuakeWorks FAQ', // default page/site title
    description: 'The Quake Works support site.', // default page meta tag
    themeConfig: {
        theme: '@vuepress/theme-default',
        lastUpdated: 'Page Updated',
        // displayAllHeaders: true,
        sidebar: [
            '/',
            '/tutorials/',
            '/almanacs/',
            '/subscriptions/',
            '/glossary/',
            '/credits/',
            '/about/'
        ],
        nav: [
            {
                text: 'QW Sites',
                items: [
                    { text: 'Main', link: 'https://quake.works' },
                    { text: 'The Flux', link: 'https://flux.quake.works' },
                    { text: 'Flux Data', link: 'https://github.com/jakeYeager/qw-data-flux' }
                ]
            },
            { text: 'USGS Map', link: 'https://earthquake.usgs.gov/earthquakes/map/' }
        ]
    }
};
