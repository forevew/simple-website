# Copilot Instructions for Simple Website Project

## Architecture Overview
- **Static Multi-Page Site**: Core files are `index.html`, `about.html`, `contact.html` (pages), `style.css` (styling), `script.js` (interactions). No backend; all client-side.
- **Structure**: Shared header/footer across pages via copy-paste. Images in `images/` folder (e.g., `logo.png`).
- **Data Flow**: Pure static; no APIs or databases. Navigation via `<a>` tags.
- **Why This Structure?**: Minimalist for beginners; avoids frameworks for simplicity. Shared styles ensure consistency.

## Key Patterns & Conventions
- **HTML Template**: Each page starts with `<!DOCTYPE html><html lang="zh">` and includes `<meta charset="UTF-8">` for Chinese support. Header/nav/footer duplicated across files.
- **CSS Variables**: Defined in `:root` (e.g., `--primary-color: #4CAF50`). Use for colors/shadows to maintain theme.
- **JS Interactions**: In `script.js`, focus on DOM manipulation (e.g., mobile menu toggle, scroll-to-top). Avoid jQuery; use vanilla JS.
- **Responsive Design**: Media queries in `style.css` for mobile (e.g., `@media (max-width: 768px)` adjusts header to column layout).
- **File Naming**: Kebab-case (e.g., `about.html`), no subfolders except `images/`.

## Developer Workflows
- **Local Server**: Run `python -m http.server 8000 --bind 0.0.0.0` in root directory for testing. Access via `http://localhost:8000/index.html`.
- **No Build Process**: Direct edit files; no compilers or bundlers.
- **Debugging**: Use browser dev tools for JS/CSS. Check console for errors in `script.js`.
- **Updates**: Edit shared elements (header/footer) in all HTML files manually.

## Integration Points
- **External Dependencies**: None; self-contained. If adding, link via `<script>` or `<link>` (e.g., for fonts).
- **Cross-Component**: Navigation links update `.active` class in HTML. JS handles global events like scroll.

Reference: `index.html` (entry point), `style.css` (styling patterns), `script.js` (interactions).