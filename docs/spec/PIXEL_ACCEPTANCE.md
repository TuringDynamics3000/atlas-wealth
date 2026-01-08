# Pixel-Identical Acceptance Contract (v1)

This document defines **hard acceptance criteria** for Atlas Wealth v1.

Failure to meet **any** criterion below constitutes a failed build or failed review.

---

## 1. Viewport Scope (Locked)

Acceptance is evaluated **only** at the following viewports:

- Desktop: **1440 × 900**
- Laptop: **1280 × 800**

Behaviour outside these sizes is **out of scope for v1**.

---

## 2. Layout Geometry (Non-Negotiable)

| Element        | Requirement |
|---------------|------------|
| Top Bar       | Exactly **56px height** |
| Sidebar       | Exactly **256px width** |
| Content Pad   | Exactly **24px** |
| Section Gap   | Exactly **24px** |
| Border Width  | **1px** |
| Card Radius   | **8px** |

Any deviation = failure.

---

## 3. Typography (Locked)

- Font family must be ar(--font-sans)
- Font sizes must come **only** from tokens
- No arbitrary px font sizes allowed
- Line height must match token pairing

---

## 4. Colour & Surface Rules

- Backgrounds must use token colours only
- No inline hex, rgb, or hsl values allowed
- Panel vs background contrast must remain intact
- Hover states may not change layout geometry

---

## 5. Component Rules

Only approved primitives may be used:

- Card
- StatBlock
- Table
- EmptyState

No ad-hoc div styling for structural UI.

---

## 6. Pixel Parity Definition

A page is considered **pixel-identical** if:

- Screenshots overlaid at 50% opacity show no visible drift
- Element bounding boxes match within **±1px**
- Text baselines align
- No unexpected scrollbars appear

---

## 7. Prohibited Patterns

The following are **explicitly forbidden** in v1:

- Inline styles
- Arbitrary spacing utilities
- Business logic in UI
- Derived calculations
- Responsive reinterpretation

---

## 8. Review Outcome

Reviews result in one of three outcomes:

- **PASS** — may merge
- **FAIL** — must fix before merge
- **DEFERRED** — requires explicit v2 sign-off

There is no “looks fine” state.
