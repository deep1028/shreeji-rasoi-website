# Shreeji Rasoi 🍛

A premium, editorial-style frontend for a luxury Gujarati restaurant website. Built with semantic HTML, modern CSS (custom properties and responsive layout), and lightweight vanilla JavaScript — the project focuses on elegant typography, purposeful spacing, and smooth micro-interactions to present a refined restaurant experience online.

## Live Demo
Coming Soon

## Features
- Luxury editorial visual system and typographic hierarchy
- Responsive layout across desktop, tablet, and mobile breakpoints
- Page-load curtain entrance animation for a polished first impression
- Scroll-triggered animations using AOS for subtle, performant motion
- Persistent WhatsApp floating action button for quick reservations
- Dedicated Events & Catering section with service highlights and CTA
- Contact form (HTML structure) and contact details with map link
- Testimonial slider with navigation controls and dots
- Clean, minimal footer with quick links and studio credit
- Single-file deployable HTML/CSS/JS (no build step required)

## Design Philosophy
Shreeji Rasoi is designed to communicate calm confidence and culinary craftsmanship. The UI emphasizes:
- Thoughtful typography and editorial spacing
- A restrained color palette with a saffron accent for brand warmth
- Minimal, content-forward layouts that let the food and experience lead
- Motion used sparingly for clarity and delight — not decoration

## Tech Stack
- HTML5 — semantic markup and accessible structure
- CSS3 — custom properties, responsive utilities, layout with grid & flex
- JavaScript — vanilla ES6 modules / scripts for interactions
- AOS (Animate On Scroll) — included via CDN for scroll animations
- No build tools — ready to deploy as static assets

## Sections Included
- Hero / Intro
- USP (unique selling points)
- Menu highlights
- About / Story
- Testimonials (slider)
- Gallery
- Events / Catering
- Contact (form + info + map link)
- Footer (brand, quick links, visit info)

## Responsive Design
The site is built mobile-first and adapts across common breakpoints:
- Large / desktop — wide layout with multi-column grids
- Tablet — adjusted grid columns and typography scaling
- Mobile — stacked columns, touch-friendly controls, compact navigation
Key responsive behaviors are implemented using CSS media queries that preserve the visual system while optimizing layout for each viewport width.

## Animations & Interactions
- Page curtain: full-screen saffron overlay that splits and reveals the site on load for a premium reveal.
- AOS: scroll-based reveal animations (fade-up, fade-left, fade-right, zoom-in) initialized with deliberate offsets and durations for a cohesive rhythm.
- WhatsApp float: persistent CTA with subtle pulse and hover scale for emphasis.
- Testimonial slider: manual controls (prev/next) and dot indicators with simple auto-advance logic.
- Mobile menu: accessible toggle with focus/aria management and backdrop close.

## Folder Structure
A compact, production-ready static structure:

- `index.html` — single-page markup and content
- `style.css` — site stylesheet (variables, layout, components, responsive rules)
- `script.js` — interactive behaviors (menu, slider, AOS init, curtain)
- `image/` — image assets (hero, gallery, about, etc.)

Example:
```
shreeji_rasoi_demo/
├─ index.html
├─ style.css
├─ script.js
└─ image/
   ├─ about.jpg
   ├─ gallery1.jpg
   ├─ gallery2.jpg
   └─ ...
```

## Installation / Run Locally
This is a static project — open locally or serve with a simple static server.

1. Clone or copy the project folder to your machine.
2. Open `index.html` in your browser, or serve with a lightweight HTTP server:

Using Python 3:
```bash
cd shreeji_rasoi_demo
python -m http.server 8000
# then open http://localhost:8000
```

Using Node (http-server):
```bash
npm install --global http-server
http-server .
# then open the provided local URL
```

## Future Improvements
- Wire up the contact form to a serverless function or third-party form service (Netlify Forms, Formspree, etc.)
- Expand menu CMS or JSON-driven menu data for maintainability
- Add analytics and structured data (JSON-LD) for SEO and local search visibility
- Improve accessibility audit (ARIA landmarks, focus management, keyboard testing)
- Small performance gains: image optimization, lazy-loading, critical CSS extraction if bundling for production

## Credits
Designed & Developed by CoreEdge Studio

## License
MIT License — see the `LICENSE` file or include the following notice:

```
MIT License

Copyright (c) 2025 CoreEdge Studio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

(Adjust the license text or choose another license if you prefer.)
