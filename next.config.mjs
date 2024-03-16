import nextra from 'nextra'
import remarkMdxDisableExplicitJsx from 'remark-mdx-disable-explicit-jsx'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true,
  mdxOptions: {
    remarkPlugins: [
      [
        remarkMdxDisableExplicitJsx,
        { whiteList: ['table', 'thead', 'tbody', 'tr', 'th', 'td'] }
      ]
    ]
  }
})

export default withNextra({
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
  basePath: '/epola',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/epola',
        basePath: false,
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
        {
            source: '/js/script.js',
            destination: 'https://plausible.craftadoc.com/js/script.js'
        },
        {
            source: '/api/event', // Or '/api/event/' if you have `trailingSlash: true` in this config
            destination: 'https://plausible.craftadoc.com/api/event'
        }
    ];
},
})