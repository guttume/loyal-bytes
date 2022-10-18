/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://learning.loyalbytes.com',
    generateRobotsTxt: true, // (optional)
    generateIndexSitemap: false,
    outDir: "out",
    transform: async (config, path) => {
        if (path !== '/') {
            path = `${path}.html`
        }

        if (path === '/course/windows-server-hybrid-administrator-associate-az-800-&-az-801')
        {
            path = `/course/windows-server-hybrid-administrator-associate-az-800-&-az-801.html`
        }

        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    }
    // ...other options
}