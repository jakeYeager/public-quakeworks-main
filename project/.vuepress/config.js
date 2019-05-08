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
    'ga': 'UA-99759012-13',
    head: [
        ['link', { rel: 'icon', href: `/hero-logo.png` }],
        ['meta', { name: 'theme-color', content: '#3366cc' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: './icons/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: './icons/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: './icons/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: './icons/site.webmanifest' }]
    ],
    title: 'Quake Works', // default page/site title
    description: 'Quake works is a data-centric research project by Jake Yeager, which focuses on creating fault system status and indicator models, rather than chasing triggers and predictions.', // default page meta tag
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
            { text: 'Shop', link: 'https://shop.quake.works' },
            {
                text: 'QW Sites',
                items: [
                    { text: 'Flux Site', link: 'https://flux.quake.works' },
                    { text: 'Flux Data', link: 'https://github.com/jakeYeager/qw-data-flux' }
                ]
            },
            {
                text: 'USGS Data',
                items: [

                    { text: 'Live Map', link: 'https://earthquake.usgs.gov/earthquakes/map/' },
                    { text: 'Event Search', link: 'https://earthquake.usgs.gov/earthquakes/search/'}
                ]
            }
        ]
    }
};
