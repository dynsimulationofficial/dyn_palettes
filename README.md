# DYN PALLETS — Industrial Packaging Website

Premium multi-page Next.js website for DYN PALLETS.

## Included pages

- Home
- About
- Products + 13 product detail pages
- Services + 8 service detail pages
- Industries
- Custom Solutions
- Gallery
- Catalogue
- FAQ
- Contact / Quote

## Design system

The UI uses an industrial premium direction: obsidian/charcoal surfaces, warm timber tones, amber accents, layered timber grain, brushed/noise overlays, animated scan lines, moving blueprint grids, 3D-style product models, scroll reveals, spotlight hover states and a minimal six-item responsive navigation.

## Important: this ZIP preserves the existing Git repository

The `.git` directory from the original project is intentionally preserved. The existing remote remains:

```text
https://github.com/dynsimulationofficial/dyn_palettes.git
```

The original history with commits by Prashik Shivgan and Danish Khan is preserved. The website changes are left **uncommitted** so you can review them and then create your own commit.

After extracting the ZIP, open the **folder that directly contains `.git` and `package.json`** in VS Code.

Then run:

```powershell
git status
git remote -v
git log --oneline --all --decorate -n 10
npm install
npm run dev
```

When ready to push:

```powershell
git add .
git commit -m "Build premium DYN PALLETS website"
git push origin main
```

If VS Code Source Control says **No source control providers registered**, Git itself may still be fine. Open Extensions, search `@builtin git`, enable the built-in **Git** extension, then run `Developer: Reload Window` from the Command Palette.

## Business details before production

Edit this one file:

```text
src/data/config.ts
```

Replace the placeholder phone number, WhatsApp number, email and location with the final DYN PALLETS details.

## Final visual polish

- Approx. 80% dark industrial surfaces with limited warm-light contrast sections
- Centered header navigation: Home, About Us, Products, Services, Gallery, Contact Us
- Separate right-side **Enquire Now** CTA
- Tactile timber/grain hover treatment on buttons, cards and service rows
- Medico-style home conversion flow: Why Choose, clear requirement routing, How It Works, FAQ and strong enquiry CTAs
- Industrial pallet / warehouse / freight photography integrated with the technical 3D-style visual system
- Custom DYN PALLETS brand mark and app favicon
- Existing cursor glow, technical scan, blueprint and scroll animations retained and refined

Photography used in the demo layout is loaded remotely from free Unsplash source images. Replace those URLs with DYN PALLETS' own factory/product photography before final production launch whenever available.
