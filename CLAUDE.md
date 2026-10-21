# Working in this repository

Rules that are not derivable from the code, and that have each cost us
something to learn.

## The model is the implementation

Classes under `src/gen/` are produced by `emfts-codegen` from the `.ecore`
model beside them and carry an `@generated` marker. They are not edited and
not reimplemented.

If a type needs behaviour the generator cannot express, the generator is what
should change — `emf.ts` and `emf.ts.codegen` are separate projects, so that
is an issue filed there, not a hand-written class here. The same holds for
`@eclipse-daanse/tsm`.

`yarn check_models` must pass. It reports when a package hands out a
hand-written class under a modelled name, which is a defect that otherwise
stays invisible for months (#1068). Findings already filed sit in the script's
`KNOWN` map; new ones fail the build.

## Reactivity goes through EMF, and EMF follows containment

`useEObject`, `useEList` and `useFeature` (`packages/ui/vue/composables/src/useEmf.ts`)
attach an `EContentAdapter`. That adapter reacts **only** to containment
references and descends **only** through `eContents()`. A change inside an
object held by a non-containment reference is not seen by it, however correctly
that object calls `eNotify` — listen to such an object directly instead, which
is what `wrapperReactivity.ts` does for settings wrappers.

Two things follow, and both have cost us weeks.

A feature *replaced* is a change like any other, but reading it straight off
the object is not something Vue re-runs. Read through the watched ref —
`watched.value?.config`, not `widget.config` — or the component keeps the
instance it mounted with (#1093).

`useEObject`'s watch flushes before render, not synchronously. Inside a
component that is invisible; in a test, await a tick.

Do not wrap an EObject in `reactive()` and do not `cloneDeep` one: both copy
`_eAdapters` and `_eContainer` and break identity silently.

## Tests run against sources, never against dist

`vitest.config.ts` aliases every workspace package to its `src/index.ts`. This
is not convenience. The `lib.core` DI container becomes two separate
singletons when one copy is loaded as CJS and another as ESM, and the failure
that follows looks like anything but a module resolution problem. A test
config that does not reuse `workspaceSourceAliases` will hit it.

A change to reactivity, to a model, or to how settings reach a widget is not
finished without a test. The defect that prompted these rules survived for
weeks because no test in the repository mounted a widget.

## Building

`yarn build` does not build the tsm bundles. `yarn bundles` does, or
`node scripts/build-bundles.mjs <path filter>` for one of them — the filter
matches the directory path, `persistence/filesystem`, not the bundle id.

Only one bundle watcher may hold the lock in `scripts/bundle-lock.mjs`.

## Dependencies

No `link:` or `file:` dependencies on local paths. They resolve on the machine
that wrote them and fail `yarn install` in CI.

A package's `manifest.json` lists what it expects the import map to provide.
`@emfts/core` is served by `platform.system`, the base platform bundle; a
package that imports it without declaring it gets a second copy, and with it a
second `EPackageRegistry.INSTANCE` whose contents nobody else can see. It used
to be served by the Vue platform bundle, which forced every package wanting an
EObject to depend on Vue's — that is what kept the variable wrappers outside
the model for months (#1068).

## Language

Code is English — identifiers, comments, commit messages, log output. Text
shown to a user comes from the language packs under `packages/ui/vue/lang/`,
never from a string in a component.

## Commits

A lowercase conventional prefix and a sentence naming the outcome, not the
change: `fix(variables): a changed setting reaches the widget that shows it`.
