# Kaviya A — Portfolio

A hand-coded, single-page portfolio. Vanilla HTML, CSS and JavaScript only — no
build step, no framework, no dependencies beyond Google Fonts. Drops straight
onto GitHub Pages.

## Structure

```
portfolio/
├── index.html
├── README.md
└── assets/
    ├── styles.css
    ├── script.js
    ├── image-slot.js      ← drag-and-drop image placeholder component
    ├── logos/
    │   ├── aa.png         ← Analytics Avenue
    │   └── ats.png        ← Aalan Tech Soft
    └── self/
        └── me.png         ← portrait
```

## Replacing assets

- **Portrait** — drop `me.png` into `assets/self/`. The `<image-slot>` element
  in the portrait section will also accept a drag-and-drop image right in the
  browser, which it caches in `localStorage`.
- **Company logos** — drop transparent PNGs into `assets/logos/`. If a file is
  missing the page automatically falls back to a styled monogram (e.g. `AA`),
  so the section never breaks while you're sourcing logos.

## Sections

1. Hero
2. Professional summary (with stats strip)
3. Portrait + at-a-glance details
4. About / brief
5. Experience timeline
6. Company logos (grayscale → color on hover)
7. Skill matrix
8. Projects / problems solved
9. CTA contact band
10. Footer with social links (open in new tabs)

## Deploy to GitHub Pages

1. Create a public repo, push the contents of `portfolio/` to the root.
2. In repo *Settings → Pages*, set **Source = main / root**.
3. Visit `https://<username>.github.io/<repo>/`.

## Editing

- Colors live in `:root` at the top of `assets/styles.css`.
- All copy is in `index.html`. Section IDs map to the nav links.
- The skill bars use a CSS variable `--lv` (0–1) per row — edit inline.

## Credits

Type: Instrument Serif, Space Grotesk, JetBrains Mono (Google Fonts).
Designed and coded by Kaviya A.
