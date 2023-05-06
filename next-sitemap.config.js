//** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://shu00011.vercel.app/',
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
        additionalSitemaps:['https://shu00011.vercel.app/server-sitemap.xml'],
    },
}

module.exports = config