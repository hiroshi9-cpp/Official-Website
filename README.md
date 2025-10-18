# Portfolio Website

A personal portfolio website built with modern web tooling, optimized for performance, accessibility, and ease of deployment. This repository contains a Vite + React + TypeScript application with Tailwind CSS and per-component CSS Modules for custom styles. The site includes a responsive layout, a contact form (EmailJS), and pre-configured build optimizations.

---

## Table of contents
- Overview
- Tech stack
- Key features
- Repo structure
- Getting started (local development)
- Environment variables
- Build and deploy
- Performance & optimization notes
- Accessibility & SEO
- Testing & QA
- Troubleshooting (common issues)
- Contributing
- License
- Contact

---

## Overview
This repository hosts a single-page portfolio site composed of reusable React components. It focuses on:
- Lightweight, production-ready builds via Vite
- Responsive design (desktop/tablet/mobile)
- Minimal CSS (Tailwind for utility classes, CSS Modules for component scopes)
- Fast load times and practical optimizations for production

---

## Tech stack
- Framework: React
- Language: TypeScript
- Build tool / dev server: Vite
- Styling:
  - Tailwind CSS (utility-first)
  - CSS Modules (`*.module.css`) for component-level styling
  - PostCSS (via `postcss.config.js`)
- Linters / formatters: project contains `eslint.config.js` and formatting configs (if present)
- Email sending in Contact page: EmailJS
- Deployment targets: static hosts (Vercel, Netlify, GitHub Pages) or any static web server
- Optional: GitHub CLI (`gh`) or SSH for authentication/deploy

Relevant files:
- `vite.config.ts`
- `tailwind.config.js`
- `postcss.config.js`
- `src/index.css` (global)
- `src/App.tsx`, `src/main.tsx`
- Component folders: `src/components/*/*`

---

## Key features
- Responsive layout with a consistent container width across pages
- Component-driven design using React + CSS Modules
- Tailwind CSS for rapid layout and utility classes
- Contact form wired with EmailJS (client-side)
- Visual polish: subtle animations/glow effects, accessible focus styles
- Production build via Vite that outputs `dist/` for static hosting

---

## Repo structure (high-level)
- `public/` — static assets copied as-is to build output
- `src/` — application source
  - `assets/` — images, fonts, content assets
  - `components/` — feature components (Hero, Navbar, Contact, Footer, Resume, Education, WorkExperience, etc.)
  - `index.css` / `App.css` — global styles and Tailwind directives
  - `main.tsx` / `App.tsx` — app entry
- `package.json` — scripts & dependencies
- `vite.config.ts` — Vite build configuration
- `tailwind.config.js` — Tailwind configuration (content globbing)
- `tsconfig.json` / `tsconfig.*.json` — TypeScript configs
- `README.md` — this file

---

## Getting started (local development)

Prerequisites
- Node.js (recommended v16+ or LTS)
- npm (or yarn / pnpm)
- Optional: `gh` (GitHub CLI) for auth and releases

Install dependencies:
```bash
# using npm
npm install

# or with yarn
yarn
```

Run development server:
```bash
npm run dev
# or
yarn dev
```

Open the local dev server URL printed by Vite (typically `http://localhost:5173`).

Common scripts (check `package.json` to confirm):
- `dev` — start Vite dev server
- `build` — create a production build (output to `dist/`)
- `preview` — preview the production build locally after `build`
- `lint` / `format` — static checks / formatting (if configured)

---

## Environment variables

The contact form uses EmailJS in the codebase. For security and flexibility you should move keys into environment variables and reference them as Vite env vars (prefixed with `VITE_`). Example `.env.local`:

```
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then in code (example pattern):
```ts
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  { /* payload */ }
);
```

Never commit tokens or secrets to the repo.

---

## Build and deploy

Create a production build:
```bash
npm run build
# or
yarn build
```

Preview production build locally:
```bash
npm run preview
# or
yarn preview
```

Deployment
- Static hosts (recommended)
  - Vercel: import the repo and set the build command `npm run build` and publish directory `dist`.
  - Netlify: configure build command `npm run build` and publish directory `dist`.
  - GitHub Pages: use a `gh-pages` deploy action or `gh` to push `dist/` to `gh-pages` branch (or configure GitHub Pages to serve `dist/` via a workflow). For GitHub Pages, you may add a CI step to build and push.

  GitHub Pages (this repo)

  This repository includes a GitHub Actions workflow (`.github/workflows/pages.yml`) that builds the site and publishes the `dist/` folder to GitHub Pages automatically on pushes to `master`.

  After you push the repository to GitHub:

  1. Confirm the workflow ran successfully in the Actions tab. It will build the app and upload the `dist/` artifact.
  2. In the repository Settings → Pages, confirm the site is published (the workflow uses the Pages deployment flow from Actions so no manual branch is required).
  3. The project page URL will be:

  ```
  https://<your-username>.github.io/Official-Website/
  ```

  Replace `<your-username>` with your GitHub username. If you use a different default branch (for example `main`), update the workflow trigger accordingly.

CI/CD
- Add a GitHub Actions or other CI pipeline to run tests, lint, build, and deploy on push to `main/master` or on tags. Example steps:
  - checkout
  - setup-node
  - install
  - build
  - deploy to target (Vercel, Netlify via CLI, or push to `gh-pages`)

---

## Performance & optimization notes

This project is prepared to be lean, but here are concrete steps to further reduce latency and bundle size:

1. Tailwind purge/content
   - Ensure `tailwind.config.js` content includes all `src/**/*.{js,ts,jsx,tsx,html}` and `index.html` so unused utilities get removed from production CSS.

2. Code splitting
   - Use dynamic imports for large, non-critical components (e.g., resume PDF viewer, heavy animations).

3. Images & assets
   - Optimize images (WebP/AVIF where possible).
   - Use `loading="lazy"` on non-critical images.
   - Prefer CSS sprites or SVGs for small icons, or an icon font.

4. Fonts
   - Preload critical fonts and subset if possible.
   - Use font-display: swap and host fonts from your own CDN or local `public/` to control caching.

5. Critical CSS
   - Consider extracting critical above-the-fold CSS for faster first paint.

6. Compression & caching
   - Serve gzipped or brotli assets from your server/CDN.
   - Configure long cache headers for immutable assets with content-hash filenames.

7. Remove debug/console logs
   - For production, strip or minimize console output; do this via build-time plugin or minifier.

8. Track bundle size
   - Use tools like `source-map-explorer`, `rollup-plugin-visualizer`, or Vite bundle analysis to find large modules.

---

## Accessibility & SEO

- Ensure semantic HTML and descriptive `alt` attributes for images.
- Include meta tags in `index.html` for `title`, `description`, `og:` and `twitter:` cards.
- Use accessible labels for form elements (move beyond placeholders).
- Ensure keyboard navigability and visible focus styles.
- Consider generating `sitemap.xml` and `robots.txt` for search engines.

---

## Testing & QA (recommended)

- Manual smoke test:
  - Run `npm run build` and `npm run preview`, then visit the site and run Lighthouse (Chrome DevTools) for Performance, Accessibility, Best Practices, and SEO.
- Cross-browser test:
  - Confirm layout on Chrome, Safari, Firefox, and mobile devices.
- Unit / integration tests:
  - If you add tests (Jest / Vitest / Playwright), add CI checks to run them before merge.

---

## Troubleshooting (common issues)

Push / Git errors
- Missing upstream:
```bash
git push --set-upstream origin master
```
- Credentials (HTTPS): GitHub requires Personal Access Token (PAT) instead of a password. Use the macOS Keychain credential helper:
```bash
git config --global credential.helper osxkeychain
# then on next push use username + PAT as password
```
- Use `gh auth login` (GitHub CLI) or switch to SSH for a smoother long-term workflow.
- Large pushes fail (HTTP 400 / RPC failed): check for very large files in history:
```bash
find . -type f -size +10M -exec ls -lh {} \;
```
If large objects are in commit history, use Git LFS or rewrite history (use carefully).

Fixing remote URL with newline/malformed URL:
```bash
git remote -v
git remote set-url origin https://github.com/<owner>/<repo>.git
```

Build errors (TypeScript / Vite)
- Check `vite.config.ts` and any typed plugin options. If TypeScript complains about plugin options, verify plugin types or cast to `any` carefully.
- Ensure Node version meets project requirements.

Contact form not sending
- Ensure EmailJS keys (service/template/public key) are correct and not blocked by ad-blockers; move keys to env vars and reference them in code.

---

## Contributing
- Fork the repo and open a pull request against `master` (or the main branch used).
- Keep changes small and focused. Use descriptive commit messages.
- Run lint / format checks before creating a PR.
- If you add large assets, prefer Git LFS or external CDNs to avoid bloating the repository.

Suggested commit message format:
```
feat: add resume section with timeline
fix: correct contact form validation
chore: update dependencies
```

---

## License
This project is provided under the MIT License — add or update `LICENSE` file as needed.

---

## Contact
If you want help with deploying, CI configuration, or further optimizations (critical CSS extraction, image optimization pipeline, Git history cleanup for large files), file an issue or contact: himon.sarkar.us@gmail.com

--- 

Notes
- Replace any placeholder tokens and local keys with secure environment variables before publishing.
- Check `package.json` to verify exact npm scripts and dependency versions and adapt the commands above accordingly.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
