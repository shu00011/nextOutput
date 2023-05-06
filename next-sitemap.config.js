//** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: '',
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
        additionalSitemaps:[''],
    },
}

module.exports = config