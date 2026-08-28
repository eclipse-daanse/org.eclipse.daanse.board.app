/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

/**
 * Applying a theme, and letting single tokens be overridden on top of it.
 *
 * The values land as custom properties on the root element, which is what
 * every component already reads - so a change takes effect everywhere at
 * once, with no component knowing a theme exists. main.css keeps a full set
 * as its starting values, so the app is painted correctly before this ever
 * runs.
 *
 * The choice is kept per browser: it says how this person wants to look at
 * the app, not what the workspace contains, so it does not travel with a
 * stored state.
 */
import { computed, ref } from 'vue'
import { TOKEN_ALIASES, TOKEN_NAMES } from './tokens'
import { DEFAULT_THEME_ID, THEMES, themeById, type Theme } from './themes'

const KEY = 'daanse.board.theme'

interface StoredChoice {
  themeId: string
  /** Token name (without dashes) to value, applied on top of the theme. */
  overrides: Record<string, string>
}

function read(): StoredChoice {
  const empty: StoredChoice = { themeId: DEFAULT_THEME_ID, overrides: {} }
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return empty
    const data = JSON.parse(raw)
    return {
      themeId: typeof data?.themeId === 'string' ? data.themeId : DEFAULT_THEME_ID,
      // Only tokens we know about - a stale name would write a dead property
      overrides: Object.fromEntries(
        Object.entries(data?.overrides ?? {}).filter(
          ([name, value]) => TOKEN_NAMES.includes(name) && typeof value === 'string',
        ),
      ) as Record<string, string>,
    }
  } catch {
    // Private windows and cleared site data are normal, not an error
    return empty
  }
}

/* Module scope: one choice for the whole app. */
const choice = ref<StoredChoice>(read())

/** Themes contributed at runtime, on top of the ones that ship. */
const added = ref<Theme[]>([])

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(choice.value))
  } catch {
    // Remembering is a convenience; failing to must not break the app
  }
}

function paint() {
  const theme = allThemes.value.find((t) => t.id === choice.value.themeId)
  if (!theme) return

  const root = document.documentElement
  const values = { ...theme.tokens, ...choice.value.overrides }

  for (const [name, value] of Object.entries(values)) {
    root.style.setProperty(`--${name}`, value)
  }
  // Aliases follow their source, so no theme has to list them
  for (const [alias, source] of Object.entries(TOKEN_ALIASES)) {
    const value = values[source]
    if (value) root.style.setProperty(`--${alias}`, value)
  }

  // Tells form controls and scrollbars which way round the page is
  root.style.colorScheme = theme.dark ? 'dark' : 'light'
  root.setAttribute('data-theme', theme.dark ? 'dark' : 'light')
}

const allThemes = computed<Theme[]>(() => [...THEMES, ...added.value])

export function useTheme() {
  const activeTheme = computed(
    () => allThemes.value.find((t) => t.id === choice.value.themeId) ?? THEMES[0],
  )

  /** The value in force for a token: the override if there is one, else the theme's. */
  function valueOf(name: string): string {
    return choice.value.overrides[name] ?? activeTheme.value.tokens[name] ?? ''
  }

  function isOverridden(name: string): boolean {
    return name in choice.value.overrides
  }

  function selectTheme(id: string) {
    if (!allThemes.value.some((t) => t.id === id)) return
    // Overrides belong to the theme they were made against - carrying a
    // dark ground's accent onto a pale one produces neither theme.
    choice.value = { themeId: id, overrides: {} }
    persist()
    paint()
  }

  function setToken(name: string, value: string) {
    if (!TOKEN_NAMES.includes(name)) return
    choice.value = {
      ...choice.value,
      overrides: { ...choice.value.overrides, [name]: value },
    }
    persist()
    paint()
  }

  function clearToken(name: string) {
    const { [name]: _dropped, ...rest } = choice.value.overrides
    choice.value = { ...choice.value, overrides: rest }
    persist()
    paint()
  }

  function clearAllTokens() {
    choice.value = { ...choice.value, overrides: {} }
    persist()
    paint()
  }

  /** Register a theme at runtime - a bundle may contribute its own. */
  function addTheme(theme: Theme) {
    if (allThemes.value.some((t) => t.id === theme.id)) return
    added.value = [...added.value, theme]
  }

  /** The active theme including overrides, ready to be saved or shared. */
  function exportTheme(): Theme {
    return {
      ...activeTheme.value,
      id: `${activeTheme.value.id}-eigen`,
      name: `${activeTheme.value.name} (angepasst)`,
      tokens: { ...activeTheme.value.tokens, ...choice.value.overrides },
    }
  }

  return {
    themes: allThemes,
    activeTheme,
    overrides: computed(() => choice.value.overrides),
    valueOf,
    isOverridden,
    selectTheme,
    setToken,
    clearToken,
    clearAllTokens,
    addTheme,
    exportTheme,
    apply: paint,
  }
}

/** Called once at startup, before the first view is shown. */
export function initTheme() {
  paint()
}

/**
 * The same theme, in the shape Vuestic wants.
 *
 * The va-* components keep their own colour store and paint from it, so a
 * theme that only writes CSS properties leaves every button, input and
 * modal behind. Deriving them here means one palette, not two kept in step
 * by hand.
 */
export function vuesticColorsFrom(theme: Theme): Record<string, string> {
  const t = theme.tokens
  return {
    primary: t['color-accent'],
    secondary: t['color-dim'],
    success: t['color-ok'],
    info: t['color-accent'],
    danger: t['color-err'],
    warning: t['color-warn'],
    lightPrim: t['color-divider'],
    orange: t['color-brandFill'],
    active: withAlpha(t['color-accent'], theme.dark ? 0.16 : 0.1),
    backgroundPrimary: t['color-pane'],
    backgroundSecondary: t['color-raised'],
    backgroundElement: t['color-bg'],
    backgroundBorder: t['color-divider'],
    textPrimary: t['color-fg'],
    textInverted: t['color-onAccent'],
  }
}

/** Hex plus alpha; anything that is not a plain hex is passed through. */
function withAlpha(colour: string | undefined, alpha: number): string {
  if (!colour?.startsWith('#')) return colour ?? 'transparent'
  let hex = colour.slice(1)
  if (hex.length === 3) hex = [...hex].map((c) => c + c).join('')
  if (hex.length !== 6) return colour
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16))
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export { themeById, type Theme }
