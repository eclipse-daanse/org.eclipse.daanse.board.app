# IconWidget Dockyard - E2E Testing

Standalone Vite+Vue harness for end-to-end testing
`org.eclipse.daanse.board.app.ui.vue.widget.icon`, modeled on the
`packages/ui/vue/test/widget/map` Dockyard.

## Layout

```text
+-----------------------------------------------+
|  Widget Panel   |  Settings Panel             |
|  (IconWidget) |  (IconWidgetSettings) |
+-----------------------------------------------+
```

## Installation

```bash
cd packages/ui/vue/test/widget/icon
yarn install
npx playwright install chromium
```

## Development

```bash
yarn dev
# Opens http://localhost:5183
```

## Running the E2E tests

```bash
yarn test:e2e          # all tests
yarn test:e2e:ui       # with UI (recommended)
yarn test:e2e:headed   # visible browser
yarn test:e2e:debug    # debug mode
```

## Tests

- `e2e/basic.spec.ts` — loads the app, confirms both panels render, and
  checks the initial config is reachable via `window.getConfig()`.
- `e2e/settings-interaction.spec.ts` — mutates the shared config through
  `window.setConfig()` (the same reactive state both panels are bound to)
  and verifies the change round-trips and the widget keeps rendering.

## Debugging

```bash
npx playwright show-report
ls test-results/
```
