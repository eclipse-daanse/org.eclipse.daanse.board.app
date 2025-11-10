# Maps Widget Dockyard - E2E Testing

Dockyard-Mode für End-to-End Tests des Maps Widgets.

## Layout

```text
┌─────────────────────────────────────────────┐
│  Widget Panel  │  Settings Panel            │
│  (Map Widget)  │  (Maps Widget Settings)    │
│                │                             │
│                │  - Services                 │
│                │  - Layers                   │
│                │  - Opacity                  │
│                │                             │
└─────────────────────────────────────────────┘
```

## Installation

```bash
cd packages/ui/vue/test/widget/map
yarn install
npx playwright install chromium
```

## Development

```bash
# Starte Dockyard-App
yarn dev

# Öffnet http://localhost:5180
```

## E2E Tests ausführen

```bash
# Alle Tests
yarn test:e2e

# Mit UI (empfohlen)
yarn test:e2e:ui

# Mit sichtbarem Browser
yarn test:e2e:headed

# Debug-Modus
yarn test:e2e:debug

# Nur Chromium
npx playwright test --project=chromium
```

## Tests

### `e2e/wms-integration.spec.ts`

**Test 1: WMS Service & Layer Integration**
- Fügt WMS Service hinzu (kartenportal.jena.de)
- Wählt Layer "Kommunale Wärmeplanung"
- Setzt Opacity auf 50%
- Verifiziert Layer auf Karte
- Prüft Config
- Screenshot

**Test 2: Error Handling**
- Fügt ungültigen Service hinzu
- Wartet auf Timeout
- Prüft Error-Indikator

**Test 3: Initial State**
- Prüft Jena-Koordinaten
- Prüft Zoom-Level
- Prüft Leaflet-Initialisierung

## Struktur

```text
map-dockyard/
├── e2e/
│   └── wms-integration.spec.ts    # E2E Tests
├── src/
│   └── main.ts                    # Dockyard App
├── index.html                     # HTML Entry
├── playwright.config.ts           # Playwright Config
├── vite.config.ts                 # Vite Config
└── package.json                   # Dependencies
```

## Debugging

### Failed Tests

```bash
# Test-Report anzeigen
npx playwright show-report

# Screenshots ansehen
ls test-results/

# Traces ansehen
npx playwright show-trace test-results/.../trace.zip
```

### Dev-Tools

```bash
# Browser mit DevTools öffnen
yarn test:e2e:debug

# Playwright Inspector
PWDEBUG=1 yarn test:e2e
```

## CI/CD

In CI werden die Tests automatisch mit:
- 2 Retries
- 1 Worker (sequentiell)
- Headless-Modus
- HTML-Report als Artefakt

## Abhängigkeiten

- `org.eclipse.daanse.board.app.ui.vue.widget.map` - Maps Widget Package
- `vue` - Vue 3
- `leaflet` - Leaflet Mapping Library
- `@playwright/test` - E2E Testing Framework
