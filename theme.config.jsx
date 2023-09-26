import LatticeImage from "./components/LatticeImage"

export default {
  docsRepositoryBase: 'https://github.com/loosetooth/epola-space-nextra/tree/main/',
  logo: <>
    <LatticeImage width="50px"/>
    <span style={{ marginLeft: '1rem', fontWeight: 800 }}>
      The Electron-Positron Lattice Space
    </span>
  </>,
  project: {
    link: 'https://github.com/loosetooth/epola-space-nextra'
  },
  footer: {
    text: (
      <span style={{margin: "auto"}}>
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
  }
  // ... other theme options
}