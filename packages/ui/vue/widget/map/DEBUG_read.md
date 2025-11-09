# Maps Widget Debug Logging

Das Maps Widget verwendet die [debug](https://www.npmjs.com/package/debug) Bibliothek für strukturiertes Logging.

## Logger aktivieren

### Im Browser (Development)

Öffne die Browser-Konsole und setze:

```javascript
// Alle Maps-Logger aktivieren
localStorage.debug = 'daanse:maps:*'

// Spezifische Logger aktivieren
localStorage.debug = 'daanse:maps:datasource,daanse:maps:observations'

// Seite neu laden
location.reload()
```

### Verfügbare Logger

- `daanse:maps:map` - Map-Initialisierung, Bounds, Panes
- `daanse:maps:layers` - Layer-Management
- `daanse:maps:datasource` - Datasource-Loading, Subscriptions
- `daanse:maps:observations` - Observation-Loading, Historical Locations
- `daanse:maps:styles` - Style-Updates, Cache-Invalidierung
- `daanse:maps:services` - WMS/WFS Service-Reconstruction
- `daanse:maps:tasks` - TaskManager, Intervals
- `daanse:maps:cache` - Cache-Operationen

### Beispiele

```javascript
// Nur Datasource-Logs
localStorage.debug = 'daanse:maps:datasource'

// Nur Observations und Tasks
localStorage.debug = 'daanse:maps:observations,daanse:maps:tasks'

// Alle Maps-Logs + andere daanse-Logs
localStorage.debug = 'daanse:*'

// Logger deaktivieren
localStorage.removeItem('debug')
```

## In Production

In Production sind die Logger standardmäßig deaktiviert. Sie können aktiviert werden durch:

```javascript
localStorage.debug = 'daanse:maps:*'
```

## Logger-Format

Die Logger geben Timestamps und Namespace aus:

```
daanse:maps:datasource Datasource abc123 loaded +0ms
daanse:maps:observations Setting historical locations filter for 42 matching things +125ms
daanse:maps:services Could not reconstruct WMS service for layer: MyLayer Error: ... +2ms
```