# FINCAPES — Project Website

**Flood Impacts, Carbon Pricing & Ecosystem Sustainability**
A University of Waterloo Research Initiative in partnership with IPB University, KLHK Indonesia, WWF, and more.

---

## Live Demo

**[https://wahyudiramadhan.github.io/fincape-project/](https://wahyudiramadhan.github.io/fincape-project/)**

> Hosted via GitHub Pages — auto-deploys on every push to `main`.

---

### Run Locally

> Open `index.html` in your browser — no build step, no server required.

```bash
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

Or use VS Code Live Server / any static file server:

```bash
npx serve .
# → http://localhost:3000
```

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, impact stats, focus overview, news, partners, interactive map |
| About | `pages/about.html` | Project background, mission, team |
| Focus | `pages/focus.html` | Three thematic pillars: Flood Risk, NbS, Climate Finance |
| Impact | `pages/impact.html` | Animated KPI counters — hectares, CO₂, communities, finance |
| Where We Work | `pages/where-we-work.html` | Interactive Leaflet map with province & component filters |
| Repository | `pages/repository.html` | Searchable knowledge products with type/location/year/theme filters |
| News | `pages/news.html` | Latest news cards and research updates |
| Partners | `pages/partners.html` | Strategic partner badges |

---

## Project Structure

```
fincape/
├── index.html          # Home page
├── styles.css          # Global stylesheet
├── map.js              # Leaflet map, scroll animations, counter animations
├── repo.js             # Mobile nav (toggleMobileNav / closeMobileNav)
├── main.js             # Hero particle animation
├── pages/
    ├── about.html
    ├── focus.html
    ├── impact.html
    ├── where-we-work.html
    ├── repository.html
    ├── news.html
    └── partners.html

```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic, multi-page) |
| Styling | CSS3 — custom properties, Grid, Flexbox, responsive |
| Interactivity | Vanilla JavaScript (ES6+) |
| Map | [Leaflet.js](https://leafletjs.com) + OpenStreetMap tiles |
| Icons | [Font Awesome 6](https://fontawesome.com) |
| Fonts | Montserrat + Poppins via Google Fonts |
| Analytics | Google Analytics 4 (`gtag`) |

---

## Features

- **Responsive** — fully mobile-friendly; filter chips convert to dropdown selects on mobile
- **Animated counters** — KPI numbers count up when scrolled into view
- **Scroll reveal** — sections fade/slide in via IntersectionObserver (`.rv`, `.rv-l`, `.rv-r`)
- **Interactive map** — province + component filters, fly-to on marker click
- **Repository filters** — multi-dimensional filter by type, location, year, and theme
- **Solid navbar on sub-pages** — `body.page` class switches the transparent hero navbar to a white solid bar
- **No dependencies to install** — all CDN-linked, open directly in browser

---

## Partners

University of Waterloo · IPB University · Purnomo Yusgiantoro Center · KLHK Indonesia · Global Affairs Canada · WWF Indonesia · Green Climate Fund · CIFOR-ICRAF · Asian Development Bank · World Resources Institute

---

## Contact

**Email:** [fincapes@uwaterloo.ca](mailto:fincapes@uwaterloo.ca)
**Website:** [www.fincapesproject.com](https://fincapesproject.com)
**Address:** University of Waterloo, 200 University Ave W, Waterloo, ON, Canada

---

© 2026 FINCAPES Project · University of Waterloo. All rights reserved.
