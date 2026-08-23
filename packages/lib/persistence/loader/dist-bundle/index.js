import { SETTINGS_MANAGER } from "org.eclipse.daanse.board.app.lib.api.settings";
import { REPOSITORY_REGISTRY } from "org.eclipse.daanse.board.app.lib.api.persistence";
async function activate$1({ services, log }) {
  const settingsManager = services.get(SETTINGS_MANAGER);
  if (!settingsManager) {
    log.info("SettingsManager nicht vorhanden - nichts wiederherzustellen");
    return;
  }
  const repoManager = services.getRequired(REPOSITORY_REGISTRY);
  const gespeicherte = await settingsManager.getSettings(["persistanceRepositories"]);
  if (!gespeicherte) return;
  for (const [type, instances] of Object.entries(gespeicherte)) {
    const baseclass = repoManager.availableRepoTypes.get(type);
    if (!baseclass) {
      log.warn(`Repository-Typ "${type}" ist nicht angemeldet`);
      continue;
    }
    const repository = services.get(String(baseclass.description ?? baseclass));
    if (!repository) {
      log.warn(`keine Umsetzung fuer Repository-Typ "${type}"`);
      continue;
    }
    for (const entitysetting of instances) {
      if (!entitysetting.name || !entitysetting.url) continue;
      try {
        repository.init(new URL(entitysetting.url), entitysetting.name, entitysetting);
        repoManager.register(repository);
      } catch (fehler) {
        log.warn(`Repository "${entitysetting.name}" (${type}) nicht wiederhergestellt`, fehler);
      }
    }
  }
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: activate$1
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.persistence.loader";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.persistence.loader");
  await activate$1?.(context);
}
async function deactivate(context) {
  await void 0;
}
export {
  activate,
  deactivate
};
