# .

This template should help get you started developing with Vue 3 in Vite.

## Deployment: extra bundles in `config.json`

A deployment can add bundles without changing the board's source - a widget
kept in another repository, a customer-specific module. `public/config.json`
(served as `/config.json`) takes an optional `extraBundles` key:

```json
"extraBundles": {
  "manifests": [
    "/extensions/my.widget/manifest.json",
    "https://bundles.example.org/other.widget/manifest.json",
    { "id": "inline.widget", "version": "1.0.0", "entry": "/extensions/inline.widget/index.js" }
  ],
  "allowedOrigins": ["https://bundles.example.org"]
}
```

- `manifests`: URLs of tsm `manifest.json` files (relative to the page), or
  manifests written inline. A relative `entry` resolves against the URL of the
  manifest that names it; an inline manifest's against the page.
- `allowedOrigins`: origins other than the page's own that manifests and
  entries may come from. Without an entry here only same-origin is accepted,
  since a bundle runs with the app's rights.

The launcher (`src/main.ts`, `src/extraBundles.ts`) fetches them at start and
registers them with the built-in bundles from `src/bundles.ts` before anything
activates. A manifest that cannot be fetched, is not valid (`id`, `version`,
`entry` required), reuses a built-in id, or comes from an origin not allowed is
reported on the console (`extra bundle skipped - ...`) and left out; the board
starts without it. The shipped `config.json` lists none.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
