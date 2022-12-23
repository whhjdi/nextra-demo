const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  basePath: '/docs',
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "zh",
  },
})
