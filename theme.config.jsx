import LatticeImage from "./components/LatticeImage"

export default {
  docsRepositoryBase: 'https://github.com/loosetooth/epola-space-nextra/tree/main/',
  logo: <>
    <LatticeImage width="50px" />
    <span style={{ marginLeft: '1rem', fontWeight: 800 }}>
      The Electron-Positron Lattice Space
    </span>
  </>,
  project: {
    link: 'https://github.com/loosetooth/epola-space-nextra'
  },
  footer: {
    text: (
      <span style={{ margin: "auto" }}>
        Copyright © M. Simhony
      </span>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 2
  },
  toc: {
    float: true
  },
  search: {
    placeholder: "Search"
  },
  head: (
    <>
      <meta name="google-site-verification" content="fNUF_FP-Kmd0lXV0E8uBslSH2igwf0hrkj06EmoDOOs" />
      <meta property="og:title" content="The Electron-Positron Lattice Space" />
      <meta property="og:description" content="This book is designed for readers with a basic understanding of physics. It offers an alternative approach to contemporary physics, focusing on the electron-positron lattice model. This model helps explain complex physical phenomena, derive fundamental laws, and perform calculations that may seem challenging in traditional presentations. If you're looking for a more accessible way to explore these topics and understand the 'whys' behind them, this book might be a valuable resource for you." />
      <meta property="og:image" content="https://loosetooth.github.io/epola-space-nextra/meta-image.png" />
      <link rel="icon" type="image/png" href="/favicon.png"></link>
    </>
  )
  // ... other theme options
}