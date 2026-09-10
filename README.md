# DynPalettes ??

**DynPalettes** is a modern, ultra-fast, and feature-packed Dynamic Color Palette Generator built with **Next.js 15+ (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## ? Key Features

- ? **Instant Palette Generation**: Press `Spacebar` or click generate to produce harmonic, aesthetically pleasing palettes dynamically.
- ?? **12 Color Harmonies**:
  - Random / Dynamic
  - Analogous
  - Monochromatic
  - Complementary
  - Split Complementary
  - Triadic
  - Tetradic
  - Pastel Dream
  - Cyberpunk Neon
  - Warm Sunset
  - Cool Ocean
  - Earthy Forest
- ?? **Locking System**: Lock individual color swatches while generating new palettes for the remaining slots.
- ?? **Tailwind 50-950 Shade Generator**: Expand any color into a full 11-step tint and shade scale (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950) with 1-click Tailwind JSON copy.
- ??? **Image Palette Extractor**: Upload your own image or choose built-in presets to extract dominant colors using canvas pixel sampling.
- ?? **Live UI Mockup Playground**: Preview active palettes on realistic mockups:
  - SaaS Dashboard (Stats, Revenue, Active users)
  - Landing Page Hero (CTA buttons, Gradient titles, Badges)
  - Mobile App (DynPay credit card, Music widget)
- ? **WCAG 2.1 Contrast Matrix**: Accessibility scores (AAA, AA, AA+) and contrast ratios between every color pair in the active palette.
- ??? **Color Blindness Simulator**: Test palettes across Protanopia, Deuteranopia, Tritanopia, and Achromatopsia vision modes.
- ?? **Favorites Library**: Save, name, and restore palettes with LocalStorage persistence.
- ?? **Multi-Format Export**:
  - Tailwind CSS (`tailwind.config.js` extend colors)
  - CSS Variables (`:root { ... }`)
  - SCSS (`$color-1: ...`)
  - JSON Objects & Arrays
  - SVG Image export
  - Shareable URL link with hash sync (`#HEX1-HEX2-HEX3...`)

---

## ??? Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Canvas Confetti

---

## ?? Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/dynsimulationofficial/dyn_palettes.git
cd dyn_palettes
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ?? Keyboard Shortcuts

- `Spacebar`: Generate new color palette
- `Ctrl + Z`: Undo palette change
- `Ctrl + Y`: Redo palette change
- `Click on HEX`: Copy HEX code to clipboard

---

## ?? License
MIT License. Built with ?? for designers and developers.
