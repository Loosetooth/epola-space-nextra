import LatticeImage from "./components/LatticeImage"

export default {
  docsRepositoryBase: 'https://github.com/violentpositron/epola-space-nextra/tree/master/',
  logo: <>
    <LatticeImage width="50px"/>
    <span style={{ marginLeft: '1rem', fontWeight: 800 }}>
      The Electron-Positron Lattice Space
    </span>
  </>,
  project: {
    link: 'https://github.com/violentpositron/epola-space-nextra'
  },
  footer: {
    text: (
      <span style={{margin: "auto"}}>
        Copyright © M. Simhony
      </span>
    )
  }
  // ... other theme options
}