# Epola Space — Nextra Site

## About This Project

This is a Nextra-based website containing a transcription of **"The Electron-Positron Lattice Space: Cause of Relativity and Quantum Effects"** by Menahem Simhony (Hebrew University, Jerusalem, 1990). The book proposes that vacuum space is a dense face-centered cubic lattice of bound electrons and positrons (the "epola") with a lattice constant of ~4.4 fm.

## Project Structure

- `pages/` — Book content as `.mdx` files (Introduction, Chapters 1-13, Bibliography, Publications)
- `components/` — React components for figures, callouts, and the lattice visualization
- `public/` — Static assets
- `SUMMARY.md` — Chapter-by-chapter summary of the book's content and arguments

## Key Concepts

- **Epola**: Electron-positron lattice — the proposed structure of vacuum space
- **Binding energy**: 511 keV per particle (= mₑc²), NOT creation energy
- **Lattice constant**: l₀ = 4.4 ± 0.5 fm
- **Core claim**: Electromagnetic radiation = bulk deformation waves in the epola; c = (E_b/mₑ)^½
- **Avotons**: Dense particles (elementary particles + nuclei) that can move through epola channels

## Future Goals

1. **Magnetism derivation**: The book acknowledges magnetism as inadequately explained (Ch. 12.5). A separate source derives magnetic force entirely from electrostatics in a crystalline lattice medium — this needs to be integrated.
2. **Simulation**: Build a computer simulation of small epola lattice regions to validate predicted effects (wave propagation, particle motion, deformation clusters).

## Tech Stack

- Next.js with Nextra (docs theme)
- MDX for content with KaTeX math rendering
- React components for figures and interactive elements
