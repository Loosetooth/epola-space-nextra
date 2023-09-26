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
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: '/epola-space-nextra'
})