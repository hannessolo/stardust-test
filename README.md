# Pfadi Schirmerturm — EDS Demo

This is a demo website for **Pfadi Schirmerturm**, a scout organization based in Luzern, Switzerland. It was built as a proof-of-concept using the [stardust](https://github.com/adobe-rnd/stardust) design pipeline and deployed on AEM Edge Delivery Services.

**Preview:** https://main--stardust-test--hannessolo.aem.page/

## What this demonstrates

The site was generated end-to-end from the live site at [schirmerturm.ch](https://schirmerturm.ch/):

1. **Brand extraction** — colors, typography, voice, and motifs extracted from the live site into `stardust/brand-profile.json`
2. **Briefings** — page intent and copy captured in `stardust/briefings/` for all 12 pages
3. **Prototypes** — high-fidelity static HTML mockups generated in `stardust/prototypes/`
4. **EDS implementation** — prototypes translated into EDS blocks and content pushed to DA

## Pages

| Page | Path |
|---|---|
| Homepage | `/` |
| Über Pfadi | `/ueber-pfadi` |
| Stufen (overview) | `/stufen` |
| Biber (4–6) | `/biber` |
| Wölfli (6–10) | `/woelfli` |
| Pfadi (10–15) | `/pfadi-stufe` |
| Pios (15–17) | `/pios` |
| Abteilung | `/abteilung` |
| Fotos | `/fotos` |
| Kontakt | `/kontakt` |
| Shop | `/shop` |
| FAQs | `/faq` |

## Blocks

Custom blocks built for this site (on top of the author-kit base):

| Block | Description |
|---|---|
| `hero` | Extended with text-only gradient mode (no image required) and 5px Scout Orange bottom border |
| `cards` | New — responsive 3-col card grid with orange hover border and dark/orange CTA |
| `accordion` | New — FAQ expand/collapse using native `<details>`/`<summary>` |
| `header` | Extended with dropdown nav support, animated orange underline, and scroll shadow |

## Brand

- **Accent:** Scout Orange `#FF7F11`
- **Headings:** Raleway (800/700/600)
- **Body:** Roboto (400/600)
- **Background:** white `#FFFFFF`, section tint `#F8F8F8`

## Local development

```bash
git clone https://github.com/hannessolo/stardust-test.git
cd stardust-test
npm install
aem up
```

---

*Built with [stardust](https://github.com/adobe-rnd/stardust) — a design pipeline for AEM Edge Delivery Services. Template: [aemsites/author-kit](https://github.com/aemsites/author-kit).*
