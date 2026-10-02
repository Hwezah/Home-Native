---
name: mobile-portrait
description: Mobile-portrait layout rules for every web UI — centring text and buttons, 80vw standalone buttons, spread-apart button rows. Use whenever building or changing any page, component or layout, and before finishing UI work, to audit the result at 390×844.
---

# Mobile portrait rules

Applies to phones held upright: `(max-width: 600px) and (orientation: portrait)`.
Follow these on every page and component you build or change.

## Buttons
- Center all buttons horizontally.
- A button on its own (not side by side with another): width `80vw`, content centered.
- Buttons side by side in a row: `justify-content: space-between`, spread wide apart across the full width.

## Text
- Center all text.
- Exceptions (keep their normal alignment): bulleted or numbered lists; text inside styled containers
  (cards, panels, tiles, boxes with backgrounds or borders); specially treated text (accordions/FAQs,
  labels overlaid on images, captions in carousels); the mobile side panel / navigation menu.

## Implementation
Put this in the global stylesheet once, then opt elements in with data attributes:

    @media (max-width: 600px) and (orientation: portrait) {
      [data-m-center] { text-align: center !important; align-items: center !important; justify-content: center !important; }
      [data-m-center] > * { margin-left: auto !important; margin-right: auto !important; align-self: center !important; }
      [data-m-btn] { width: 80vw !important; justify-content: center !important; margin-left: auto !important; margin-right: auto !important; }
      [data-m-row] { justify-content: space-between !important; width: 100% !important; }
    }

- `data-m-center` on wrappers whose text and children should center (never inside the exceptions).
- `data-m-btn` on standalone buttons (they need display flex/inline-flex to center their content).
- `data-m-row` on rows of side-by-side buttons.

Project extras (this repo): `data-m-stack` stacks a multi-column row vertically (pair with `data-m-center`),
`data-m-span` resets a grid span, `data-m-hide` hides an element on mobile portrait.

## Before finishing UI work
Render every page at **390×844** (portrait, touch) and check:
- every visible text element is centred unless it falls under an exception above;
- standalone buttons are 80vw and centred; button rows are spread with space-between;
- no horizontal scroll (`document.documentElement.scrollWidth <= innerWidth`).
