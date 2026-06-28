# Season of Ghosts — A Chronicle of Willowshore

A scroll-driven, illustrated "flipbook" website that retells the *Season of Ghosts*
Pathfinder campaign as an epic, from the Reenactment Festival to the sealing of Kugaptee
and each character's epilogue.

## View it

- **Easiest:** double-click `index.html` (opens in your browser via `file://`).
- **Best (recommended):** serve the folder so fonts/smooth-scroll load cleanly:
  ```sh
  cd "Season of Ghosts/site"
  python3 -m http.server 8080
  # then open http://localhost:8080
  ```

An internet connection makes it prettier (Google Fonts + Lenis smooth-scroll load from
CDN). Offline, it still works — it falls back to system serif fonts and native scrolling.

## How it's built (all vanilla, no build step)

| File | What it is |
|------|------------|
| `index.html` | Shell + atmosphere overlays (fog, film grain, vignette, fireflies). |
| `data/story.js` | **The content.** Chapters, beats, quotes, party, epilogues, grimoire. Edit here to change the story. |
| `js/main.js` | Renders `story.js` into the page; wires reveals, mood cross-fade, parallax, progress, firefly particles, optional Lenis. |
| `css/style.css` | All styling: ink/paper/mist/lantern palette, per-chapter "moods", typography, every layout pattern. |
| `assets/img/` | The campaign art, keyed by timestamp (`img-<YYYYMMDDhhmmss>.png`). |

### Editing the story
Everything readable lives in `data/story.js`. Reference an image by its 14-digit key
(the filename minus `img-` and `.png`). Add a chapter to `STORY.chapters`, a section to a
chapter's `sections[]` (`type: "duet" | "full" | "quote" | "gallery"`), a face to the
`grimoire`, etc. No rebuild needed — just refresh.

### Voice
The narration is deliberately spare. The emotional weight is carried by **verbatim lines
from the actual table** (set as quotes) and by the art. Connective prose stays factual on
purpose — concrete names, places, and events drawn straight from the session notes.

Chronicled across 43 sessions, June 2025 – May 2026.
