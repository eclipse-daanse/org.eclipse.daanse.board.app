# Maps Widget Testing Guide

## Running Tests

### Unit Tests (Vitest)

#### All Unit Tests
```bash
cd packages/ui/vue/widget/map
yarn test
```

#### Specific Test File
```bash
yarn test tasktimer.spec.ts
```

#### Watch Mode (interactive)
```bash
yarn test
# Then press 'w' for watch mode
```

#### Run Once (CI mode)
```bash
yarn test:run
```

#### Coverage Report
```bash
yarn test:coverage
```

#### UI Mode
```bash
yarn test:ui
# Opens browser with test UI
```

### E2E Tests (Playwright)

#### All E2E Tests
```bash
yarn test:e2e
```

#### E2E UI Mode (recommended for development)
```bash
yarn test:e2e:ui
# Opens Playwright test UI
```

#### E2E with visible browser
```bash
yarn test:e2e:headed
```

#### E2E Debug Mode
```bash
yarn test:e2e:debug
```

#### Specific E2E Test
```bash
npx playwright test e2e/maps-widget.spec.ts
```

#### E2E Test Report
```bash
npx playwright show-report
```

---

## Test Structure

### Unit Tests

#### TaskManager Tests (`src/composables/__tests__/tasktimer.spec.ts`)
Tests instance isolation for task management:
- ✅ Separate task instances
- ✅ Separate task queues
- ✅ Independent clearing
- ✅ No ID collisions between instances

**Run:**
```bash
yarn test tasktimer.spec.ts
```

#### Service Tests (`src/composables/__tests__/Service.spec.ts`)
Tests OGC service reconstruction:
- ✅ 10-second timeout protection
- ✅ Error handling for invalid URLs
- ✅ Failed service marking
- ✅ Service/layer preservation

**Run:**
```bash
yarn test Service.spec.ts
```

**Note:** These tests involve actual network timeouts and will take ~10 seconds each.

#### Logger Tests (`src/utils/__tests__/logger.spec.ts`)
Tests debug logger configuration:
- ✅ localStorage integration
- ✅ Namespace support
- ✅ Wildcard patterns
- ✅ console.log usage

**Run:**
```bash
yarn test logger.spec.ts
```

#### Utils Tests (`src/composables/__tests__/utils.spec.ts`)
Tests GeoJSON utility functions:
- ✅ isPoint, isFeatureCollection, isFeature detection
- ✅ transformToGeoJson conversion
- ✅ Null/undefined handling

**Run:**
```bash
yarn test utils.spec.ts
```

#### Helpers Tests (`src/utils/__tests__/helpers.spec.ts`)
Tests helper utility functions:
- ✅ resolve() - nested object path resolution
- ✅ resolveObj() - dot-notated path resolution
- ✅ Array access handling

**Run:**
```bash
yarn test helpers.spec.ts
```

#### Comparator Tests (`src/composables/__tests__/comparator.spec.ts`)
Tests Thing/Datastream comparison logic:
- ✅ compareThing with conditions
- ✅ compareDatastream with conditions
- ✅ filterFeatureCollection

**Run:**
```bash
yarn test comparator.spec.ts
```

---

### E2E Test Coverage

#### Maps Widget Tests (`e2e/maps-widget.spec.ts`)
Tests basic map functionality:
- ✅ Map rendering
- ✅ Zoom controls
- ✅ Pan interactions
- ✅ Performance metrics
- ✅ Accessibility

**Run:**
```bash
npx playwright test e2e/maps-widget.spec.ts
```

#### Markers and Layers Tests (`e2e/map-markers.spec.ts`)
Tests marker and layer functionality:
- ✅ Marker layer rendering
- ✅ Tile loading
- ✅ Layer panes structure
- ✅ GeoJSON support
- ✅ Map state management

**Run:**
```bash
npx playwright test e2e/map-markers.spec.ts
```

#### Error Handling Tests (`e2e/error-handling.spec.ts`)
Tests error recovery and robustness:
- ✅ Network error handling
- ✅ Service timeout handling
- ✅ Failed tile recovery
- ✅ Memory leak prevention
- ✅ Browser compatibility

**Run:**
```bash
npx playwright test e2e/error-handling.spec.ts
```

---

## Manual Testing

### 1. Service Reconstruction Test

**Objective:** Verify services are properly reconstructed after loading a savefile.

**Steps:**
1. Open Maps Widget
2. Add a WMS service:
   ```text
   https://kartenportal.jena.de/ows/pg/qwc_config/kartenportal_start
   ```
3. Add layers from the service
4. Save configuration
5. Reload page
6. Load saved configuration
7. Open Widget Settings

**Expected Results:**
- Services appear in Settings panel
- Layers are visible in Layers panel
- No console errors

**Debug Logging:**
```javascript
localStorage.debug = 'daanse:maps:services'
```
Then reload and check console for reconstruction logs.

---

### 2. Failed Service Handling Test

**Objective:** Verify failed services are properly marked and displayed.

**Steps:**
1. Open Maps Widget Settings
2. Click "Add Service"
3. Enter invalid URL:
   ```text
   http://invalid-domain-xyz.com/wms
   ```
4. Click OK
5. Wait 10 seconds (timeout)

**Expected Results:**
- Service appears with red ⚠️ icon
- Service name shows "(failed)"
- Cannot expand service to see layers
- Console shows timeout error

**Debug Logging:**
```javascript
localStorage.debug = 'daanse:maps:*'
```

---

### 3. Performance Test

**Objective:** Verify optimizations work with large datasets.

**Setup:**
Create a savefile with:
- 5+ WMS services
- 1000+ datastreams (OGCSTA datasource)
- 10+ active layers

**Steps:**
1. Load the configuration
2. Pan map rapidly
3. Zoom in/out multiple times
4. Check browser performance tools

**Expected Results:**
- No UI freezing
- Smooth map interactions
- < 100ms response time for pan/zoom
- Memory usage stable (no leaks)

**Performance Monitoring:**
```javascript
// Browser DevTools > Performance
// Record 10 seconds of map interaction
// Check for:
// - No long tasks (> 50ms)
// - Consistent frame rate
// - No memory leaks
```

---

### 4. Task Manager Isolation Test

**Objective:** Verify multiple widget instances don't interfere.

**Steps:**
1. Create dashboard with 2 Maps widgets
2. Configure both with different OGCSTA styles
3. Different refresh times (5s vs 10s)
4. Enable task logging:
   ```javascript
   localStorage.debug = 'daanse:maps:tasks'
   ```
5. Observe console logs

**Expected Results:**
- Each widget has separate task IDs
- Tasks run independently
- No cross-widget task execution

---

### 5. Debug Logger Test

**Objective:** Verify logging system works correctly.

**Steps:**
1. Open browser console
2. Test different configurations:

```javascript
// All logs
localStorage.debug = 'daanse:maps:*'

// Service logs only
localStorage.debug = 'daanse:maps:services'

// Multiple namespaces
localStorage.debug = 'daanse:maps:services,daanse:maps:datasource'

// Disable logging
localStorage.removeItem('debug')
```

3. Reload page after each change
4. Perform actions (add service, load config, etc.)

**Expected Results:**
- Logs appear when enabled
- No logs when disabled
- Namespace filtering works
- Logs use `console.log` (not `console.debug`)

---

## Browser Compatibility Testing

Test in following browsers:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

**Focus Areas:**
1. Debug logger visibility (console.log vs console.debug)
2. LocalStorage access
3. Service reconstruction timing
4. Map performance

---

## Known Test Limitations

### Service Tests
- **Network dependent:** Timeout tests require actual network delays
- **Time consuming:** Each test takes ~10 seconds
- **Mock limitations:** Cannot easily mock `@camptocamp/ogc-client` internals

### Workarounds

```typescript
// Use longer test timeouts
it('should timeout after 10 seconds', async () => {
  // test code
}, 15000) // 15s timeout
```

---

## Continuous Integration

### GitHub Actions Configuration
```yaml
- name: Run Maps Widget Tests
  run: |
    cd packages/ui/vue/widget/map
    yarn test:run --reporter=verbose
  env:
    CI: true
```

### Test Coverage Thresholds
- **Statements:** 70%
- **Branches:** 60%
- **Functions:** 70%
- **Lines:** 70%

---

## Debugging Failed Tests

### Common Issues

#### 1. Timeout Errors

```text
Error: Timeout after 10000ms
```

**Cause:** Network slower than expected or service not responding.

**Fix:**
```typescript
// Increase test timeout
it('test name', async () => {
  // ...
}, 20000) // Increase from 15s to 20s
```

#### 2. localStorage Errors

```text
Error: localStorage is not defined
```

**Cause:** Test environment doesn't have localStorage mock.

**Fix:**
```typescript
// Add to test setup
beforeEach(() => {
  global.localStorage = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn()
  }
})
```

#### 3. Import Errors

```text
Error: Cannot find module 'debug'
```

**Cause:** Dependencies not installed.

**Fix:**
```bash
yarn install
```

---

## Performance Benchmarks

### Baseline Metrics (reference system)
- **Service Reconstruction:** < 5s per service
- **Map Pan Response:** < 50ms
- **Datastream Iteration:** < 100ms for 1000 datastreams
- **Style Lookup:** < 1ms (O(1))

### Regression Testing
Run before/after changes:
```bash
# Enable performance logging
localStorage.debug = 'daanse:maps:*'

# Perform standard actions
# - Load savefile
# - Pan map
# - Zoom map
# - Add service

# Compare timings in console
```

---

## Test Data

### Sample WMS Service URLs

```text
Valid:
- https://kartenportal.jena.de/ows/pg/qwc_config/kartenportal_start

Invalid (for testing):
- http://invalid-domain-xyz.com/wms
- http://localhost:9999/wms
```

### Sample WFS Service URLs

```text
Valid:
- https://sig.gencat.cat/ows/VEGETACIO/wfs

Invalid (for testing):
- http://invalid-domain-xyz.com/wfs
```

---

## Reporting Issues

When reporting test failures, include:
1. Test file name
2. Test case name
3. Error message
4. Console logs (with debug enabled)
5. Browser/Node version
6. Operating system

**Example:**

```text
Test: Service.spec.ts > Timeout Protection > should timeout after 10 seconds for WMS
Error: Timeout after 10000ms
Browser: Chrome 120.0.0
OS: Linux
Debug logs: [attach logs]
```
