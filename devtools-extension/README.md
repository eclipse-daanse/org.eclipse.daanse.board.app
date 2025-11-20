# Daanse DevTools Extension

Chrome DevTools Extension für das Daanse Board App Development.

## Features

- 🎛️ Toggle Debug Logger direkt im DevTools Panel
- 💾 Automatisches Speichern der Einstellungen in localStorage
- 🔄 Live-Update der Logger-Status
- 🎯 Vordefinierte Logger-Gruppen:
  - `daanse:ogcsta:mqtt` - MQTT Debugging
  - `daanse:map:*` - Map Widget Logs
  - `daanse:datasource:*` - Datasource Logs
  - `daanse:*` - Alle Daanse Logs

## Installation

### Schritt 1: Extension laden

1. Öffne Chrome
2. Gehe zu `chrome://extensions/`
3. Aktiviere "Entwicklermodus" (oben rechts)
4. Klicke auf "Entpackte Erweiterung laden"
5. Wähle den Ordner `devtools-extension/` aus

### Schritt 2: DevTools öffnen

1. Öffne die Daanse Board App
2. Drücke F12 oder öffne DevTools
3. Finde das neue **"Daanse"** Tab in den DevTools
4. Toggle die Logger nach Bedarf

## Icons (Optional)

Die Extension benötigt Icons. Du kannst einfache Platzhalter-Icons erstellen oder echte verwenden:

```bash
# Einfache Platzhalter erstellen (optional)
convert -size 16x16 xc:blue icon16.png
convert -size 48x48 xc:blue icon48.png
convert -size 128x128 xc:blue icon128.png
```

Oder lade das Manifest ohne Icons (Chrome zeigt dann Standard-Icons).

## Verwendung

### Logger aktivieren/deaktivieren

Klicke einfach auf die "Enable" / "Disable" Buttons neben jedem Logger.

### Quick Actions

- **Enable All Loggers**: Aktiviert `daanse:*` (alle Logs)
- **Disable All Loggers**: Deaktiviert alle Logs
- **Refresh Status**: Aktualisiert die Anzeige

### Console-Befehle (Alternativ)

Wenn du die Extension nicht verwenden möchtest, kannst du auch direkt in der Console:

```javascript
// MQTT Logs aktivieren
localStorage.setItem('debug', 'daanse:ogcsta:mqtt')

// Alle Logs aktivieren
localStorage.setItem('debug', 'daanse:*')

// Mehrere Logger
localStorage.setItem('debug', 'daanse:ogcsta:mqtt,daanse:map:*')

// Deaktivieren
localStorage.removeItem('debug')
```

## Entwicklung

Die Extension besteht aus:
- `manifest.json` - Extension Konfiguration
- `devtools.html/js` - DevTools Entry Point
- `panel.html/js` - UI des DevTools Panels

## Troubleshooting

**Panel wird nicht angezeigt:**
- Stelle sicher, dass die Extension geladen ist (`chrome://extensions/`)
- Prüfe, ob Fehler in der Extension-Console angezeigt werden
- Lade die Extension neu

**Logger funktionieren nicht:**
- Prüfe, ob `localStorage.debug` korrekt gesetzt ist (im Console-Tab)
- Lade die Seite neu (die meisten Logger werden beim Start initialisiert)
- Stelle sicher, dass die App die `debug` Library verwendet
