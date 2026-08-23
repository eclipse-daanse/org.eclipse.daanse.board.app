import { I18NEXT as o } from "org.eclipse.daanse.board.app.lib.i18next";
const l = { title: "Rich text widget settings", bold: "Bold", italic: "italic", strike: "strike", underline: "underline", code: "code", clearMarks: "clear marks", clearNodes: "clear nodes", paragraph: "paragraph", bulletList: "bullet list", orderedList: "ordered list", codeBlock: "code block", blockQuote: "block quote", horizontalRule: "horizontal rule", hardBreak: "hard break", undo: "undo", redo: "redo" }, d = {
  RichTextWidget: l
}, r = "en", a = "textRich";
function n({ services: e }) {
  e.getRequired(o).addResourceBundle(r, a, d);
}
function c({ services: e }) {
  e.getRequired(o).removeResourceBundle(r, a);
}
const s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: n,
  deactivate: c
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.ui.vue.lang.text.rich.en", u = "0.0.1-next.1";
async function b(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${i}: tsm runtime is not initialized`);
  t.register(i, s, u, "ui.vue.lang.text.rich.en"), await n?.(e);
}
async function h(e) {
  await c?.(e);
}
export {
  b as activate,
  h as deactivate
};
