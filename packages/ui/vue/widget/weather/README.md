# Weather Widget

Ein Wetter-Widget für die Eclipse Daanse Board App, das mit OGC SensorThings API Datenquellen kompatibel ist.

## Features

### Datenquelle-Konfiguration
- **Thing ID**: Direkte Angabe der Thing ID einer Wetterstation
- **Standort**: Eingabe eines Standortnamens (für zukünftige Location-basierte Suche)

### Zeit-Konfiguration
- **Automatisch**: Zeigt die neuesten verfügbaren Daten
- **Zeitbereich**: Konfigurierbare Start- und Endzeit mit Schnellauswahl
- **Manuelle Auswahl**: Präzise Zeitauswahl mit datetime-local Inputs

### Wetterdaten-Anzeige
- Temperatur (hervorgehoben)
- Luftfeuchtigkeit
- Luftdruck
- Windgeschwindigkeit und -richtung
- Niederschlag
- Sichtweite
- Wolkenbedeckung

### Auto-Refresh
- Konfigurierbare Aktualisierungsintervalle (1 min - 1 Stunde)
- Automatische Hintergrund-Aktualisierung

## Verwendung

### Beispiel-Konfiguration für OGC STA Endpunkt
```text
Endpunkt: https://udp.datainmotion.com/udp/rest/v1.1/
Thing ID: 10567
```

### Widget-Integration
Das Widget kann über das Settings-Panel konfiguriert werden:

1. **Datenquelle**: Thing ID oder Standort eingeben
2. **Zeitbereich**: Automatisch, Zeitbereich oder manuelle Auswahl
3. **Aktualisierung**: Gewünschtes Intervall auswählen

## Deutsche Wetterdaten-Unterstützung

Das Widget erkennt automatisch deutsche Begriffe in den Datastream-Namen:
- Lufttemperatur, Temperatur
- Luftfeuchtigkeit, Feuchte
- Luftdruck
- Windgeschwindigkeit, Windrichtung
- Niederschlag, Regen
- Sichtweite
- Wolkenbedeckung, Bedeckung

## Technische Details

- Vollständige TypeScript-Unterstützung
- Vue 3 Composition API
- Responsive Design
- Integration mit bestehender OGC STA Datenquelle-Architektur
