---
name: mobile-portrait
description: Mobile-portrait layout rules for every web UI — centring text and buttons, 80vw solo buttons, spread-apart button pairs. Use whenever building or changing any page, component or layout, and before finishing UI work, to audit the result at 390×844.
---

# Mobile portrait rules

Applies at `@media (max-width: 600px) and (orientation: portrait)`.

## Rules
1. **Centre all buttons.** A button on its own row is **80vw** wide and centred.
2. **Buttons side by side:** `justify-content: space-between`, spread to full width.
3. **Centre all text**, except:
   - bulleted / numbered lists (always left-aligned)
   - text inside styled containers (cards, panels, bordered/filled boxes)
   - accordions (question + answer)
   - labels inside images (captions, names or titles over a photo)
   - the side-panel / drawer menu
4. Multi-column rows (icon + title + body + number, etc.) stack vertically and centre.
5. Form labels and chip/option groups centre; input text itself may stay left-aligned.

## Implementation
Keep one media block in the global stylesheet with small helper classes, and apply them in markup:

```css
@media (max-width: 600px) and (orientation: portrait) {
  .m-center { text-align: center !important; align-items: center !important; justify-content: center !important; }
  .m-center > * { margin-left: auto !important; margin-right: auto !important; align-self: center !important; }
  .m-btn { width: 80vw !important; justify-content: center !important; margin-left: auto !important; margin-right: auto !important; }
  .m-row { justify-content: space-between !important; width: 100% !important; }
  .m-stack { display: flex !important; flex-direction: column !important; gap: 16px !important; }
  .m-span { grid-column: auto !important; }
  .m-hide { display: none !important; }
}
```

- `.m-center` on text blocks and their flex/grid parents.
- `.m-btn` on every button/link-button that sits on its own row.
- `.m-row` on rows of two or more side-by-side buttons (also prev/next and pagination rows).
- `.m-stack` + `.m-center` on multi-column rows that should stack.
- Never add `.m-center` inside lists, cards/panels, accordions, image overlays or the side panel.

## Before finishing UI work
Render every page at **390×844** (portrait, touch) and check:
- every visible text element is centred unless it falls under an exception above;
- solo buttons are 80vw and centred, button pairs are spread with space-between;
- no horizontal scroll (`document.documentElement.scrollWidth <= innerWidth`).

A quick automated check: for each text element in `main`/`footer`, skip the exceptions, then flag any whose
text box is not horizontally centred in the viewport and whose `text-align` is not `center`.
