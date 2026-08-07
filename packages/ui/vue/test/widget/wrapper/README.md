# WidgetWrapper Dockyard - E2E Testing

Standalone Vite+Vue harness for `org.eclipse.daanse.board.app.ui.vue.widget.wrapper`.

Unlike the leaf widgets, `WidgetWrapper` doesn't own a config model directly —
it resolves and renders whichever widget `widget.type` points to (here:
`SampleWidget`) via the shared `WidgetRepository`, and `WidgetWrapperSettings`
edits `widget.wrapperConfig` (the wrapper chrome: border/style), not the
inner widget's own settings.

## Development
```bash
cd packages/ui/vue/test/widget/wrapper
yarn install
yarn dev   # http://localhost:5203
```

## Tests
- `e2e/basic.spec.ts` — panels render, wrapped widget config reachable.
- `e2e/settings-interaction.spec.ts` — exercises the wrapper's edit-mode
  delete control.
