# Accordion UI Component

This repository holds my fully responsive, accessible solution to the [Accordion](https://roadmap.sh/projects/accordion) challenge on roadmap.sh.

## Project Details
The target objective of this build is to formulate a polished FAQ interactive module. It features custom macro-grid row expansions to animate hidden panels seamlessly, full screen-reader compliance configurations, and high-fidelity custom design spacing.

## Features & Requirements Met
- **CSS Grid Dynamic Row Interpolation:** Solves the classic "hidden max-height transition" problem by transforming `grid-template-rows` from `0fr` to `1fr`. This guarantees micro-animations calculate smoothly without relying on fixed absolute text constraints.
- **Exclusive Multi-Panel Toggle Hooking:** Built with defensive JavaScript control logic that closes any existing active text dropdown panels immediately when a new header is selected, matching the authentic single-reveal accordion user experience.
- **Robust WAI-ARIA Accessibility Layers:** Fully structured with standard keyboard focus selectors (`<button>`), state monitors (`aria-expanded="false/true"`), and hidden content containers (`aria-hidden="true/false"`).
- **Polished Layout Borders & Footers:** Features thin high-contrast borders separating content rows evenly, alongside an isolated dashed line attribution footer aligned cleanly inside the global page view layout.
- **Responsive Fluid Scalability:** Adapts dynamically using global system font stacks (`Inter`) and custom root layout variables to support layout switching between modern dark systems and light workspace preferences seamlessly.

## Setup & Preview
To preview this project locally:
- Clone this repository to your local machine.
- Open index.html directly inside any modern web browser.