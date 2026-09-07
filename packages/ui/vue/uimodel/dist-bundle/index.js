(function(){var i="ui.vue.uimodel",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".list[data-v-b0db9508]{margin-bottom:12px}.list__head[data-v-b0db9508]{display:flex;align-items:center;gap:7px;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid var(--color-divider)}.list__label[data-v-b0db9508]{font-family:var(--font-sans);font-size:var(--text-sm);font-weight:600;color:var(--color-fg)}.list__count[data-v-b0db9508]{font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.list__spacer[data-v-b0db9508]{flex:1 1 auto}.list__empty[data-v-b0db9508],.list__untyped[data-v-b0db9508]{margin:0 0 8px;font-size:var(--text-xs);line-height:1.5;color:var(--color-dim)}.entry[data-v-b0db9508]{position:relative;margin-bottom:3px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.entry__head[data-v-b0db9508]{display:flex;align-items:center;gap:6px;width:100%;padding:5px 78px 5px 8px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);text-align:left;background:none;border:0;cursor:pointer}.entry__twist[data-v-b0db9508]{width:10px;font-size:var(--text-xs);color:var(--color-dim)}.entry__actions[data-v-b0db9508]{position:absolute;top:3px;right:5px;display:flex;gap:2px}.entry__actions button[data-v-b0db9508]{width:20px;height:20px;font-size:var(--text-xs);color:var(--color-dim);background:none;border:1px solid transparent;border-radius:var(--radius-xs);cursor:pointer}.entry__actions button[data-v-b0db9508]:hover:not(:disabled){color:var(--color-fg);border-color:var(--color-divider)}.entry__actions button[data-v-b0db9508]:disabled{opacity:.3;cursor:default}.entry__remove[data-v-b0db9508]:hover:not(:disabled){color:var(--color-err)}.entry__actions button[data-v-b0db9508]:focus-visible,.entry__head[data-v-b0db9508]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.entry__body[data-v-b0db9508]{padding:8px 10px 10px;border-top:1px solid var(--color-divider)}.object[data-v-8adcf520]{margin-bottom:12px}.object__label[data-v-8adcf520]{display:block;margin-bottom:6px;font-size:12px;font-weight:600;color:var(--d-text-muted, #6b7280)}.object__body[data-v-8adcf520]{padding-left:10px;border-left:2px solid var(--d-border, #e5e7eb)}.object__untyped[data-v-8adcf520]{margin:0;font-size:12px;color:var(--d-text-muted, #6b7280)}.field-row[data-v-e3b7189e]{display:flex;align-items:flex-start;gap:6px}.field-row__control[data-v-e3b7189e]{flex:1 1 auto;min-width:0}.field-row--bound[data-v-e3b7189e]{border-left:2px solid var(--color-brand);padding-left:6px;margin-left:-8px}.bind[data-v-e3b7189e]{width:24px;height:26px;flex:none;margin-top:0;font-family:var(--font-mono);font-size:var(--text-xs);font-style:italic;color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.bind[data-v-e3b7189e]:hover{color:var(--color-fg);border-color:var(--color-outline)}.bind.armed[data-v-e3b7189e]{color:var(--color-accent);border-color:var(--color-accent)}.bind.on[data-v-e3b7189e]{color:var(--color-brand);border-color:var(--color-brand);background-color:color-mix(in srgb,var(--color-brand) 14%,transparent)}.bind[data-v-e3b7189e]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.settings-form[data-v-2eb13ad3]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.settings-form[data-v-2eb13ad3] .uim-c-GroupWidget{padding-top:10px;margin-top:12px;border-top:1px solid var(--color-divider)}.settings-form[data-v-2eb13ad3] .uim-c-GroupWidget:first-child{padding-top:0;margin-top:0;border-top:0}.settings-form[data-v-2eb13ad3] .uim-group-label{display:block;margin-bottom:7px;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:650;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim)}.settings-form__empty[data-v-2eb13ad3]{margin:0;padding:12px 0;font-size:var(--text-sm);color:var(--color-dim)}\n";})();
import { inject as ot, watchEffect as Ai, onScopeDispose as la, ref as dr, computed as T, watch as os, toValue as Xe, defineComponent as se, createBlock as H, createCommentVNode as ne, openBlock as I, resolveDynamicComponent as oa, mergeProps as ca, createElementBlock as R, createElementVNode as ie, createTextVNode as ba, toDisplayString as xe, unref as ue, createVNode as hr, Fragment as mt, renderList as cs, provide as Ir, withCtx as Ci, normalizeClass as ma, mergeModels as yi, useModel as Di, onMounted as Ri, shallowRef as Ia, markRaw as kr } from "vue";
import { BasicEPackage as wi, BasicEClass as w, BasicEAttribute as S, BasicEReference as N, getEcorePackage as Zt, BasicEObject as ct, BasicEFactory as Fi, EContentAdapter as Ma, URI as qr, EPackageRegistry as Cr, BasicResourceSet as Pi, XMIResourceFactory as bi, registerEcorePackage as Mi } from "@emfts/core";
import { VariableWrapper as Na } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DButton as Vi, DSelect as La, DInput as Sr, DCheckbox as Ui, DColorInput as Bi } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { identifier as Gi } from "org.eclipse.daanse.board.app.lib.api.variable";
var Wi = Object.defineProperty, Yi = (s, e, t) => e in s ? Wi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ur = (s, e, t) => Yi(s, typeof e != "symbol" ? e + "" : e, t);
const es = class a extends wi {
  static get eINSTANCE() {
    return this._instance || (this._instance = new a(), this._instance.init()), this._instance;
  }
  constructor() {
    super(), this.setName(a.eNAME), this.setNsURI(a.eNS_URI), this.setNsPrefix(a.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    const e = new w();
    e.setName("UIModel"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), a.Literals.U_I_MODEL = e;
    const t = new S();
    t.setName("name"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), a.Literals.U_I_MODEL__NAME = t;
    const r = new N();
    r.setContainment(!1), r.setName("targetClasses"), r.setLowerBound(0), r.setUpperBound(-1), e.getEStructuralFeatures().push(r), a.Literals.U_I_MODEL__TARGET_CLASSES = r;
    const i = new S();
    i.setName("priority"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), a.Literals.U_I_MODEL__PRIORITY = i;
    const u = new N();
    u.setContainment(!0), u.setName("filterExpression"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), a.Literals.U_I_MODEL__FILTER_EXPRESSION = u;
    const n = new N();
    n.setContainment(!0), n.setName("styles"), n.setLowerBound(0), n.setUpperBound(-1), e.getEStructuralFeatures().push(n), a.Literals.U_I_MODEL__STYLES = n;
    const l = new N();
    l.setContainment(!0), l.setName("templates"), l.setLowerBound(0), l.setUpperBound(-1), e.getEStructuralFeatures().push(l), a.Literals.U_I_MODEL__TEMPLATES = l;
    const h = new N();
    h.setContainment(!0), h.setName("components"), h.setLowerBound(1), h.setUpperBound(-1), e.getEStructuralFeatures().push(h), a.Literals.U_I_MODEL__COMPONENTS = h;
    const c = new w();
    c.setName("Component"), c.setAbstract(!0), c.setInterface(!1), this.getEClassifiers().push(c), c.setEPackage(this), a.Literals.COMPONENT = c;
    const E = new S();
    E.setName("name"), E.setLowerBound(1), E.setUpperBound(1), c.getEStructuralFeatures().push(E), a.Literals.COMPONENT__NAME = E;
    const g = new S();
    g.setName("group"), g.setLowerBound(0), g.setUpperBound(1), c.getEStructuralFeatures().push(g), a.Literals.COMPONENT__GROUP = g;
    const o = new N();
    o.setContainment(!1), o.setName("targetClasses"), o.setLowerBound(0), o.setUpperBound(-1), c.getEStructuralFeatures().push(o), a.Literals.COMPONENT__TARGET_CLASSES = o;
    const d = new N();
    d.setContainment(!1), d.setName("styles"), d.setLowerBound(0), d.setUpperBound(-1), c.getEStructuralFeatures().push(d), a.Literals.COMPONENT__STYLES = d;
    const V = new N();
    V.setContainment(!1), V.setName("children"), V.setLowerBound(0), V.setUpperBound(-1), c.getEStructuralFeatures().push(V), a.Literals.COMPONENT__CHILDREN = V;
    const B = new w();
    B.setName("FormView"), B.setAbstract(!1), B.setInterface(!1), this.getEClassifiers().push(B), B.setEPackage(this), a.Literals.FORM_VIEW = B;
    const p = new N();
    p.setContainment(!0), p.setName("fields"), p.setLowerBound(0), p.setUpperBound(-1), B.getEStructuralFeatures().push(p), a.Literals.FORM_VIEW__FIELDS = p;
    const f = new N();
    f.setContainment(!0), f.setName("validations"), f.setLowerBound(0), f.setUpperBound(-1), B.getEStructuralFeatures().push(f), a.Literals.FORM_VIEW__VALIDATIONS = f;
    const U = new N();
    U.setContainment(!0), U.setName("validationMappers"), U.setLowerBound(0), U.setUpperBound(-1), B.getEStructuralFeatures().push(U), a.Literals.FORM_VIEW__VALIDATION_MAPPERS = U;
    const A = new S();
    A.setName("mapperOrder"), A.setLowerBound(0), A.setUpperBound(1), B.getEStructuralFeatures().push(A), a.Literals.FORM_VIEW__MAPPER_ORDER = A;
    const b = new w();
    b.setName("TableView"), b.setAbstract(!1), b.setInterface(!1), this.getEClassifiers().push(b), b.setEPackage(this), a.Literals.TABLE_VIEW = b;
    const j = new N();
    j.setContainment(!0), j.setName("tableStyle"), j.setLowerBound(1), j.setUpperBound(1), b.getEStructuralFeatures().push(j), a.Literals.TABLE_VIEW__TABLE_STYLE = j;
    const X = new w();
    X.setName("SectionView"), X.setAbstract(!1), X.setInterface(!1), this.getEClassifiers().push(X), X.setEPackage(this), a.Literals.SECTION_VIEW = X;
    const re = new N();
    re.setContainment(!0), re.setName("sections"), re.setLowerBound(1), re.setUpperBound(-1), X.getEStructuralFeatures().push(re), a.Literals.SECTION_VIEW__SECTIONS = re;
    const ce = new w();
    ce.setName("TabView"), ce.setAbstract(!1), ce.setInterface(!1), this.getEClassifiers().push(ce), ce.setEPackage(this), a.Literals.TAB_VIEW = ce;
    const ae = new N();
    ae.setContainment(!0), ae.setName("tabs"), ae.setLowerBound(1), ae.setUpperBound(-1), ce.getEStructuralFeatures().push(ae), a.Literals.TAB_VIEW__TABS = ae;
    const ye = new w();
    ye.setName("SummaryView"), ye.setAbstract(!1), ye.setInterface(!1), this.getEClassifiers().push(ye), ye.setEPackage(this), a.Literals.SUMMARY_VIEW = ye;
    const L = new N();
    L.setContainment(!0), L.setName("summaryFields"), L.setLowerBound(1), L.setUpperBound(-1), ye.getEStructuralFeatures().push(L), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS = L;
    const v = new w();
    v.setName("MasterDetail"), v.setAbstract(!1), v.setInterface(!1), this.getEClassifiers().push(v), v.setEPackage(this), a.Literals.MASTER_DETAIL = v;
    const M = new N();
    M.setContainment(!0), M.setName("master"), M.setLowerBound(1), M.setUpperBound(1), v.getEStructuralFeatures().push(M), a.Literals.MASTER_DETAIL__MASTER = M;
    const Ne = new N();
    Ne.setContainment(!0), Ne.setName("detail"), Ne.setLowerBound(1), Ne.setUpperBound(1), v.getEStructuralFeatures().push(Ne), a.Literals.MASTER_DETAIL__DETAIL = Ne;
    const x = new w();
    x.setName("WidgetComponent"), x.setAbstract(!0), x.setInterface(!1), this.getEClassifiers().push(x), x.setEPackage(this), a.Literals.WIDGET_COMPONENT = x;
    const Ue = new N();
    Ue.setContainment(!1), Ue.setName("feature"), Ue.setLowerBound(0), Ue.setUpperBound(1), x.getEStructuralFeatures().push(Ue), a.Literals.WIDGET_COMPONENT__FEATURE = Ue;
    const Be = new S();
    Be.setName("label"), Be.setLowerBound(0), Be.setUpperBound(1), x.getEStructuralFeatures().push(Be), a.Literals.WIDGET_COMPONENT__LABEL = Be;
    const Es = new S();
    Es.setName("placeholder"), Es.setLowerBound(0), Es.setUpperBound(1), x.getEStructuralFeatures().push(Es), a.Literals.WIDGET_COMPONENT__PLACEHOLDER = Es;
    const hs = new S();
    hs.setName("readOnly"), hs.setLowerBound(0), hs.setUpperBound(1), x.getEStructuralFeatures().push(hs), a.Literals.WIDGET_COMPONENT__READ_ONLY = hs;
    const gs = new S();
    gs.setName("required"), gs.setLowerBound(0), gs.setUpperBound(1), x.getEStructuralFeatures().push(gs), a.Literals.WIDGET_COMPONENT__REQUIRED = gs;
    const vt = new N();
    vt.setContainment(!0), vt.setName("visibilityCondition"), vt.setLowerBound(0), vt.setUpperBound(1), x.getEStructuralFeatures().push(vt), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION = vt;
    const _t = new N();
    _t.setContainment(!0), _t.setName("validations"), _t.setLowerBound(0), _t.setUpperBound(-1), x.getEStructuralFeatures().push(_t), a.Literals.WIDGET_COMPONENT__VALIDATIONS = _t;
    const Ot = new N();
    Ot.setContainment(!0), Ot.setName("validationMappers"), Ot.setLowerBound(0), Ot.setUpperBound(-1), x.getEStructuralFeatures().push(Ot), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS = Ot;
    const At = new N();
    At.setContainment(!0), At.setName("bindings"), At.setLowerBound(0), At.setUpperBound(-1), x.getEStructuralFeatures().push(At), a.Literals.WIDGET_COMPONENT__BINDINGS = At;
    const He = new w();
    He.setName("PropertyBinding"), He.setAbstract(!1), He.setInterface(!1), this.getEClassifiers().push(He), He.setEPackage(this), a.Literals.PROPERTY_BINDING = He;
    const ds = new S();
    ds.setName("property"), ds.setLowerBound(1), ds.setUpperBound(1), He.getEStructuralFeatures().push(ds), a.Literals.PROPERTY_BINDING__PROPERTY = ds;
    const Ct = new N();
    Ct.setContainment(!0), Ct.setName("expression"), Ct.setLowerBound(1), Ct.setUpperBound(1), He.getEStructuralFeatures().push(Ct), a.Literals.PROPERTY_BINDING__EXPRESSION = Ct;
    const Ge = new w();
    Ge.setName("InputWidget"), Ge.setAbstract(!1), Ge.setInterface(!1), this.getEClassifiers().push(Ge), Ge.setEPackage(this), a.Literals.INPUT_WIDGET = Ge;
    const ps = new S();
    ps.setName("maxLength"), ps.setLowerBound(0), ps.setUpperBound(1), Ge.getEStructuralFeatures().push(ps), a.Literals.INPUT_WIDGET__MAX_LENGTH = ps;
    const Ts = new S();
    Ts.setName("value"), Ts.setLowerBound(0), Ts.setUpperBound(1), Ge.getEStructuralFeatures().push(Ts), a.Literals.INPUT_WIDGET__VALUE = Ts;
    const fs = new S();
    fs.setName("password"), fs.setLowerBound(0), fs.setUpperBound(1), Ge.getEStructuralFeatures().push(fs), a.Literals.INPUT_WIDGET__PASSWORD = fs;
    const We = new w();
    We.setName("TextAreaWidget"), We.setAbstract(!1), We.setInterface(!1), this.getEClassifiers().push(We), We.setEPackage(this), a.Literals.TEXT_AREA_WIDGET = We;
    const Ss = new S();
    Ss.setName("rows"), Ss.setLowerBound(0), Ss.setUpperBound(1), We.getEStructuralFeatures().push(Ss), a.Literals.TEXT_AREA_WIDGET__ROWS = Ss;
    const ms = new S();
    ms.setName("maxLength"), ms.setLowerBound(0), ms.setUpperBound(1), We.getEStructuralFeatures().push(ms), a.Literals.TEXT_AREA_WIDGET__MAX_LENGTH = ms;
    const Is = new S();
    Is.setName("value"), Is.setLowerBound(0), Is.setUpperBound(1), We.getEStructuralFeatures().push(Is), a.Literals.TEXT_AREA_WIDGET__VALUE = Is;
    const De = new w();
    De.setName("NumberWidget"), De.setAbstract(!1), De.setInterface(!1), this.getEClassifiers().push(De), De.setEPackage(this), a.Literals.NUMBER_WIDGET = De;
    const Ns = new S();
    Ns.setName("min"), Ns.setLowerBound(0), Ns.setUpperBound(1), De.getEStructuralFeatures().push(Ns), a.Literals.NUMBER_WIDGET__MIN = Ns;
    const Ls = new S();
    Ls.setName("max"), Ls.setLowerBound(0), Ls.setUpperBound(1), De.getEStructuralFeatures().push(Ls), a.Literals.NUMBER_WIDGET__MAX = Ls;
    const vs = new S();
    vs.setName("step"), vs.setLowerBound(0), vs.setUpperBound(1), De.getEStructuralFeatures().push(vs), a.Literals.NUMBER_WIDGET__STEP = vs;
    const _s = new S();
    _s.setName("value"), _s.setLowerBound(0), _s.setUpperBound(1), De.getEStructuralFeatures().push(_s), a.Literals.NUMBER_WIDGET__VALUE = _s;
    const je = new w();
    je.setName("CheckboxWidget"), je.setAbstract(!1), je.setInterface(!1), this.getEClassifiers().push(je), je.setEPackage(this), a.Literals.CHECKBOX_WIDGET = je;
    const Os = new S();
    Os.setName("asToggle"), Os.setLowerBound(0), Os.setUpperBound(1), je.getEStructuralFeatures().push(Os), a.Literals.CHECKBOX_WIDGET__AS_TOGGLE = Os;
    const As = new S();
    As.setName("value"), As.setLowerBound(0), As.setUpperBound(1), je.getEStructuralFeatures().push(As), a.Literals.CHECKBOX_WIDGET__VALUE = As;
    const Re = new w();
    Re.setName("DateWidget"), Re.setAbstract(!1), Re.setInterface(!1), this.getEClassifiers().push(Re), Re.setEPackage(this), a.Literals.DATE_WIDGET = Re;
    const Cs = new S();
    Cs.setName("withTime"), Cs.setLowerBound(0), Cs.setUpperBound(1), Re.getEStructuralFeatures().push(Cs), a.Literals.DATE_WIDGET__WITH_TIME = Cs;
    const ys = new S();
    ys.setName("format"), ys.setLowerBound(0), ys.setUpperBound(1), Re.getEStructuralFeatures().push(ys), a.Literals.DATE_WIDGET__FORMAT = ys;
    const yt = new N();
    yt.setContainment(!1), yt.setName("constrains"), yt.setLowerBound(0), yt.setUpperBound(1), Re.getEStructuralFeatures().push(yt), a.Literals.DATE_WIDGET__CONSTRAINS = yt;
    const Ds = new S();
    Ds.setName("value"), Ds.setLowerBound(0), Ds.setUpperBound(1), Re.getEStructuralFeatures().push(Ds), a.Literals.DATE_WIDGET__VALUE = Ds;
    const Ye = new w();
    Ye.setName("ComboboxWidget"), Ye.setAbstract(!1), Ye.setInterface(!1), this.getEClassifiers().push(Ye), Ye.setEPackage(this), a.Literals.COMBOBOX_WIDGET = Ye;
    const Dt = new N();
    Dt.setContainment(!0), Dt.setName("optionLabel"), Dt.setLowerBound(0), Dt.setUpperBound(1), Ye.getEStructuralFeatures().push(Dt), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL = Dt;
    const Rs = new S();
    Rs.setName("minSearchLength"), Rs.setLowerBound(0), Rs.setUpperBound(1), Ye.getEStructuralFeatures().push(Rs), a.Literals.COMBOBOX_WIDGET__MIN_SEARCH_LENGTH = Rs;
    const ws = new S();
    ws.setName("multiSelect"), ws.setLowerBound(0), ws.setUpperBound(1), Ye.getEStructuralFeatures().push(ws), a.Literals.COMBOBOX_WIDGET__MULTI_SELECT = ws;
    const we = new w();
    we.setName("SelectWidget"), we.setAbstract(!1), we.setInterface(!1), this.getEClassifiers().push(we), we.setEPackage(this), a.Literals.SELECT_WIDGET = we;
    const Rt = new N();
    Rt.setContainment(!0), Rt.setName("optionLabel"), Rt.setLowerBound(0), Rt.setUpperBound(1), we.getEStructuralFeatures().push(Rt), a.Literals.SELECT_WIDGET__OPTION_LABEL = Rt;
    const Fs = new S();
    Fs.setName("multiSelect"), Fs.setLowerBound(0), Fs.setUpperBound(1), we.getEStructuralFeatures().push(Fs), a.Literals.SELECT_WIDGET__MULTI_SELECT = Fs;
    const Ps = new S();
    Ps.setName("asButtonGroup"), Ps.setLowerBound(0), Ps.setUpperBound(1), we.getEStructuralFeatures().push(Ps), a.Literals.SELECT_WIDGET__AS_BUTTON_GROUP = Ps;
    const bs = new S();
    bs.setName("values"), bs.setLowerBound(0), bs.setUpperBound(-1), we.getEStructuralFeatures().push(bs), a.Literals.SELECT_WIDGET__VALUES = bs;
    const Le = new w();
    Le.setName("AllFeatures"), Le.setAbstract(!1), Le.setInterface(!1), this.getEClassifiers().push(Le), Le.setEPackage(this), a.Literals.ALL_FEATURES = Le;
    const wt = new N();
    wt.setContainment(!1), wt.setName("with"), wt.setLowerBound(0), wt.setUpperBound(-1), Le.getEStructuralFeatures().push(wt), a.Literals.ALL_FEATURES__WITH = wt;
    const Ft = new N();
    Ft.setContainment(!1), Ft.setName("eType"), Ft.setLowerBound(0), Ft.setUpperBound(-1), Le.getEStructuralFeatures().push(Ft), a.Literals.ALL_FEATURES__E_TYPE = Ft;
    const Pt = new N();
    Pt.setContainment(!0), Pt.setName("filter"), Pt.setLowerBound(0), Pt.setUpperBound(1), Le.getEStructuralFeatures().push(Pt), a.Literals.ALL_FEATURES__FILTER = Pt;
    const bt = new N();
    bt.setContainment(!1), bt.setName("template"), bt.setLowerBound(0), bt.setUpperBound(1), Le.getEStructuralFeatures().push(bt), a.Literals.ALL_FEATURES__TEMPLATE = bt;
    const Mt = new N();
    Mt.setContainment(!0), Mt.setName("cases"), Mt.setLowerBound(0), Mt.setUpperBound(-1), Le.getEStructuralFeatures().push(Mt), a.Literals.ALL_FEATURES__CASES = Mt;
    const Ms = new S();
    Ms.setName("priority"), Ms.setLowerBound(0), Ms.setUpperBound(1), Le.getEStructuralFeatures().push(Ms), a.Literals.ALL_FEATURES__PRIORITY = Ms;
    const qe = new w();
    qe.setName("TemplateCase"), qe.setAbstract(!1), qe.setInterface(!1), this.getEClassifiers().push(qe), qe.setEPackage(this), a.Literals.TEMPLATE_CASE = qe;
    const Vt = new N();
    Vt.setContainment(!0), Vt.setName("when"), Vt.setLowerBound(0), Vt.setUpperBound(1), qe.getEStructuralFeatures().push(Vt), a.Literals.TEMPLATE_CASE__WHEN = Vt;
    const Ut = new N();
    Ut.setContainment(!1), Ut.setName("widget"), Ut.setLowerBound(1), Ut.setUpperBound(1), qe.getEStructuralFeatures().push(Ut), a.Literals.TEMPLATE_CASE__WIDGET = Ut;
    const ze = new w();
    ze.setName("GroupWidget"), ze.setAbstract(!1), ze.setInterface(!1), this.getEClassifiers().push(ze), ze.setEPackage(this), a.Literals.GROUP_WIDGET = ze;
    const Bt = new N();
    Bt.setContainment(!0), Bt.setName("fields"), Bt.setLowerBound(0), Bt.setUpperBound(-1), ze.getEStructuralFeatures().push(Bt), a.Literals.GROUP_WIDGET__FIELDS = Bt;
    const Vs = new S();
    Vs.setName("layout"), Vs.setLowerBound(0), Vs.setUpperBound(1), ze.getEStructuralFeatures().push(Vs), a.Literals.GROUP_WIDGET__LAYOUT = Vs;
    const $e = new w();
    $e.setName("Conditional"), $e.setAbstract(!1), $e.setInterface(!1), this.getEClassifiers().push($e), $e.setEPackage(this), a.Literals.CONDITIONAL = $e;
    const Gt = new N();
    Gt.setContainment(!0), Gt.setName("condition"), Gt.setLowerBound(1), Gt.setUpperBound(1), $e.getEStructuralFeatures().push(Gt), a.Literals.CONDITIONAL__CONDITION = Gt;
    const Wt = new N();
    Wt.setContainment(!0), Wt.setName("then"), Wt.setLowerBound(0), Wt.setUpperBound(-1), $e.getEStructuralFeatures().push(Wt), a.Literals.CONDITIONAL__THEN = Wt;
    const Yt = new N();
    Yt.setContainment(!0), Yt.setName("else"), Yt.setLowerBound(0), Yt.setUpperBound(-1), $e.getEStructuralFeatures().push(Yt), a.Literals.CONDITIONAL__ELSE = Yt;
    const ke = new w();
    ke.setName("ForEach"), ke.setAbstract(!1), ke.setInterface(!1), this.getEClassifiers().push(ke), ke.setEPackage(this), a.Literals.FOR_EACH = ke;
    const $t = new N();
    $t.setContainment(!0), $t.setName("items"), $t.setLowerBound(1), $t.setUpperBound(1), ke.getEStructuralFeatures().push($t), a.Literals.FOR_EACH__ITEMS = $t;
    const kt = new N();
    kt.setContainment(!0), kt.setName("body"), kt.setLowerBound(0), kt.setUpperBound(-1), ke.getEStructuralFeatures().push(kt), a.Literals.FOR_EACH__BODY = kt;
    const Us = new S();
    Us.setName("emptyText"), Us.setLowerBound(0), Us.setUpperBound(1), ke.getEStructuralFeatures().push(Us), a.Literals.FOR_EACH__EMPTY_TEXT = Us;
    const Ke = new w();
    Ke.setName("ReferenceLinkWidget"), Ke.setAbstract(!1), Ke.setInterface(!1), this.getEClassifiers().push(Ke), Ke.setEPackage(this), a.Literals.REFERENCE_LINK_WIDGET = Ke;
    const xt = new N();
    xt.setContainment(!0), xt.setName("displayExpression"), xt.setLowerBound(0), xt.setUpperBound(1), Ke.getEStructuralFeatures().push(xt), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION = xt;
    const Bs = new S();
    Bs.setName("targetRoute"), Bs.setLowerBound(0), Bs.setUpperBound(1), Ke.getEStructuralFeatures().push(Bs), a.Literals.REFERENCE_LINK_WIDGET__TARGET_ROUTE = Bs;
    const Fe = new w();
    Fe.setName("UIModelOverlay"), Fe.setAbstract(!1), Fe.setInterface(!1), this.getEClassifiers().push(Fe), Fe.setEPackage(this), a.Literals.U_I_MODEL_OVERLAY = Fe;
    const Gs = new S();
    Gs.setName("name"), Gs.setLowerBound(0), Gs.setUpperBound(1), Fe.getEStructuralFeatures().push(Gs), a.Literals.U_I_MODEL_OVERLAY__NAME = Gs;
    const Ws = new S();
    Ws.setName("priority"), Ws.setLowerBound(0), Ws.setUpperBound(1), Fe.getEStructuralFeatures().push(Ws), a.Literals.U_I_MODEL_OVERLAY__PRIORITY = Ws;
    const Xt = new N();
    Xt.setContainment(!0), Xt.setName("templates"), Xt.setLowerBound(0), Xt.setUpperBound(-1), Fe.getEStructuralFeatures().push(Xt), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES = Xt;
    const Ht = new N();
    Ht.setContainment(!0), Ht.setName("cases"), Ht.setLowerBound(0), Ht.setUpperBound(-1), Fe.getEStructuralFeatures().push(Ht), a.Literals.U_I_MODEL_OVERLAY__CASES = Ht;
    const Qe = new w();
    Qe.setName("Style"), Qe.setAbstract(!0), Qe.setInterface(!0), this.getEClassifiers().push(Qe), Qe.setEPackage(this), a.Literals.STYLE = Qe;
    const Ys = new S();
    Ys.setName("name"), Ys.setLowerBound(0), Ys.setUpperBound(1), Qe.getEStructuralFeatures().push(Ys), a.Literals.STYLE__NAME = Ys;
    const $s = new S();
    $s.setName("group"), $s.setLowerBound(0), $s.setUpperBound(1), Qe.getEStructuralFeatures().push($s), a.Literals.STYLE__GROUP = $s;
    const Pe = new w();
    Pe.setName("BaseStyle"), Pe.setAbstract(!0), Pe.setInterface(!1), this.getEClassifiers().push(Pe), Pe.setEPackage(this), a.Literals.BASE_STYLE = Pe;
    const jt = new N();
    jt.setContainment(!1), jt.setName("extends"), jt.setLowerBound(0), jt.setUpperBound(1), Pe.getEStructuralFeatures().push(jt), a.Literals.BASE_STYLE__EXTENDS = jt;
    const ks = new S();
    ks.setName("css"), ks.setLowerBound(0), ks.setUpperBound(1), Pe.getEStructuralFeatures().push(ks), a.Literals.BASE_STYLE__CSS = ks;
    const xs = new S();
    xs.setName("vueComponent"), xs.setLowerBound(0), xs.setUpperBound(1), Pe.getEStructuralFeatures().push(xs), a.Literals.BASE_STYLE__VUE_COMPONENT = xs;
    const qt = new N();
    qt.setContainment(!0), qt.setName("visibilityCondition"), qt.setLowerBound(0), qt.setUpperBound(1), Pe.getEStructuralFeatures().push(qt), a.Literals.BASE_STYLE__VISIBILITY_CONDITION = qt;
    const Je = new w();
    Je.setName("LayoutStyle"), Je.setAbstract(!1), Je.setInterface(!1), this.getEClassifiers().push(Je), Je.setEPackage(this), a.Literals.LAYOUT_STYLE = Je;
    const Xs = new S();
    Xs.setName("layout"), Xs.setLowerBound(0), Xs.setUpperBound(1), Je.getEStructuralFeatures().push(Xs), a.Literals.LAYOUT_STYLE__LAYOUT = Xs;
    const Hs = new S();
    Hs.setName("order"), Hs.setLowerBound(0), Hs.setUpperBound(1), Je.getEStructuralFeatures().push(Hs), a.Literals.LAYOUT_STYLE__ORDER = Hs;
    const Ae = new w();
    Ae.setName("WidgetStyle"), Ae.setAbstract(!1), Ae.setInterface(!1), this.getEClassifiers().push(Ae), Ae.setEPackage(this), a.Literals.WIDGET_STYLE = Ae;
    const zt = new N();
    zt.setContainment(!1), zt.setName("feature"), zt.setLowerBound(0), zt.setUpperBound(1), Ae.getEStructuralFeatures().push(zt), a.Literals.WIDGET_STYLE__FEATURE = zt;
    const js = new S();
    js.setName("widgetType"), js.setLowerBound(0), js.setUpperBound(1), Ae.getEStructuralFeatures().push(js), a.Literals.WIDGET_STYLE__WIDGET_TYPE = js;
    const qs = new S();
    qs.setName("label"), qs.setLowerBound(0), qs.setUpperBound(1), Ae.getEStructuralFeatures().push(qs), a.Literals.WIDGET_STYLE__LABEL = qs;
    const zs = new S();
    zs.setName("readOnly"), zs.setLowerBound(0), zs.setUpperBound(1), Ae.getEStructuralFeatures().push(zs), a.Literals.WIDGET_STYLE__READ_ONLY = zs;
    const Ks = new S();
    Ks.setName("order"), Ks.setLowerBound(0), Ks.setUpperBound(1), Ae.getEStructuralFeatures().push(Ks), a.Literals.WIDGET_STYLE__ORDER = Ks;
    const Et = new w();
    Et.setName("TableStyle"), Et.setAbstract(!1), Et.setInterface(!1), this.getEClassifiers().push(Et), Et.setEPackage(this), a.Literals.TABLE_STYLE = Et;
    const Kt = new N();
    Kt.setContainment(!0), Kt.setName("columns"), Kt.setLowerBound(1), Kt.setUpperBound(-1), Et.getEStructuralFeatures().push(Kt), a.Literals.TABLE_STYLE__COLUMNS = Kt;
    const Ze = new w();
    Ze.setName("Expression"), Ze.setAbstract(!1), Ze.setInterface(!1), this.getEClassifiers().push(Ze), Ze.setEPackage(this), a.Literals.EXPRESSION = Ze;
    const Qs = new S();
    Qs.setName("language"), Qs.setLowerBound(1), Qs.setUpperBound(1), Ze.getEStructuralFeatures().push(Qs), a.Literals.EXPRESSION__LANGUAGE = Qs;
    const Js = new S();
    Js.setName("body"), Js.setLowerBound(1), Js.setUpperBound(1), Ze.getEStructuralFeatures().push(Js), a.Literals.EXPRESSION__BODY = Js;
    const et = new w();
    et.setName("ValidationExpression"), et.setAbstract(!1), et.setInterface(!1), this.getEClassifiers().push(et), et.setEPackage(this), a.Literals.VALIDATION_EXPRESSION = et;
    const Zs = new S();
    Zs.setName("defaultMessage"), Zs.setLowerBound(0), Zs.setUpperBound(1), et.getEStructuralFeatures().push(Zs), a.Literals.VALIDATION_EXPRESSION__DEFAULT_MESSAGE = Zs;
    const er = new S();
    er.setName("severity"), er.setLowerBound(0), er.setUpperBound(1), et.getEStructuralFeatures().push(er), a.Literals.VALIDATION_EXPRESSION__SEVERITY = er;
    const Ee = new w();
    Ee.setName("ValidationMessageMapper"), Ee.setAbstract(!1), Ee.setInterface(!1), this.getEClassifiers().push(Ee), Ee.setEPackage(this), a.Literals.VALIDATION_MESSAGE_MAPPER = Ee;
    const tr = new S();
    tr.setName("order"), tr.setLowerBound(0), tr.setUpperBound(1), Ee.getEStructuralFeatures().push(tr), a.Literals.VALIDATION_MESSAGE_MAPPER__ORDER = tr;
    const sr = new S();
    sr.setName("matchCode"), sr.setLowerBound(0), sr.setUpperBound(1), Ee.getEStructuralFeatures().push(sr), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_CODE = sr;
    const rr = new S();
    rr.setName("matchSeverity"), rr.setLowerBound(0), rr.setUpperBound(1), Ee.getEStructuralFeatures().push(rr), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_SEVERITY = rr;
    const Qt = new N();
    Qt.setContainment(!0), Qt.setName("matchExpression"), Qt.setLowerBound(0), Qt.setUpperBound(1), Ee.getEStructuralFeatures().push(Qt), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION = Qt;
    const ar = new S();
    ar.setName("mappedText"), ar.setLowerBound(0), ar.setUpperBound(1), Ee.getEStructuralFeatures().push(ar), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT = ar;
    const Jt = new N();
    Jt.setContainment(!0), Jt.setName("mappedTextExpression"), Jt.setLowerBound(0), Jt.setUpperBound(1), Ee.getEStructuralFeatures().push(Jt), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION = Jt;
    const ir = new S();
    ir.setName("mappedSeverity"), ir.setLowerBound(0), ir.setUpperBound(1), Ee.getEStructuralFeatures().push(ir), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_SEVERITY = ir, a.Literals.FORM_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.TABLE_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.SECTION_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.TAB_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.SUMMARY_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.MASTER_DETAIL.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.WIDGET_COMPONENT.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.INPUT_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.TEXT_AREA_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.NUMBER_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.CHECKBOX_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.DATE_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.COMBOBOX_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.SELECT_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.ALL_FEATURES.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.GROUP_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.FOR_EACH.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.REFERENCE_LINK_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.BASE_STYLE.getESuperTypes().push(a.Literals.STYLE), a.Literals.LAYOUT_STYLE.getESuperTypes().push(a.Literals.BASE_STYLE), a.Literals.WIDGET_STYLE.getESuperTypes().push(a.Literals.BASE_STYLE), a.Literals.TABLE_STYLE.getESuperTypes().push(a.Literals.WIDGET_STYLE), a.Literals.VALIDATION_EXPRESSION.getESuperTypes().push(a.Literals.EXPRESSION), a.Literals.U_I_MODEL__TARGET_CLASSES.setEType(Zt().getEClassifier("EClass")), a.Literals.U_I_MODEL__FILTER_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.U_I_MODEL__STYLES.setEType(a.Literals.BASE_STYLE), a.Literals.U_I_MODEL__TEMPLATES.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.U_I_MODEL__COMPONENTS.setEType(a.Literals.COMPONENT), a.Literals.COMPONENT__TARGET_CLASSES.setEType(Zt().getEClassifier("EClass")), a.Literals.COMPONENT__STYLES.setEType(a.Literals.BASE_STYLE), a.Literals.COMPONENT__CHILDREN.setEType(a.Literals.COMPONENT), a.Literals.FORM_VIEW__FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.FORM_VIEW__VALIDATIONS.setEType(a.Literals.VALIDATION_EXPRESSION), a.Literals.FORM_VIEW__VALIDATION_MAPPERS.setEType(a.Literals.VALIDATION_MESSAGE_MAPPER), a.Literals.TABLE_VIEW__TABLE_STYLE.setEType(a.Literals.TABLE_STYLE), a.Literals.SECTION_VIEW__SECTIONS.setEType(a.Literals.FORM_VIEW), a.Literals.TAB_VIEW__TABS.setEType(a.Literals.COMPONENT), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.MASTER_DETAIL__MASTER.setEType(a.Literals.TABLE_VIEW), a.Literals.MASTER_DETAIL__DETAIL.setEType(a.Literals.COMPONENT), a.Literals.WIDGET_COMPONENT__FEATURE.setEType(Zt().getEClassifier("EStructuralFeature")), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.WIDGET_COMPONENT__VALIDATIONS.setEType(a.Literals.VALIDATION_EXPRESSION), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS.setEType(a.Literals.VALIDATION_MESSAGE_MAPPER), a.Literals.WIDGET_COMPONENT__BINDINGS.setEType(a.Literals.PROPERTY_BINDING), a.Literals.PROPERTY_BINDING__EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.DATE_WIDGET__CONSTRAINS.setEType(a.Literals.EXPRESSION), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL.setEType(a.Literals.EXPRESSION), a.Literals.SELECT_WIDGET__OPTION_LABEL.setEType(a.Literals.EXPRESSION), a.Literals.ALL_FEATURES__WITH.setEType(Zt().getEClassifier("EStructuralFeature")), a.Literals.ALL_FEATURES__E_TYPE.setEType(Zt().getEClassifier("EClassifier")), a.Literals.ALL_FEATURES__FILTER.setEType(a.Literals.EXPRESSION), a.Literals.ALL_FEATURES__TEMPLATE.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.ALL_FEATURES__CASES.setEType(a.Literals.TEMPLATE_CASE), a.Literals.TEMPLATE_CASE__WHEN.setEType(a.Literals.EXPRESSION), a.Literals.TEMPLATE_CASE__WIDGET.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.GROUP_WIDGET__FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL__CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.CONDITIONAL__THEN.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL__ELSE.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.FOR_EACH__ITEMS.setEType(a.Literals.EXPRESSION), a.Literals.FOR_EACH__BODY.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.U_I_MODEL_OVERLAY__CASES.setEType(a.Literals.TEMPLATE_CASE), a.Literals.BASE_STYLE__EXTENDS.setEType(a.Literals.BASE_STYLE), a.Literals.BASE_STYLE__VISIBILITY_CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.WIDGET_STYLE__FEATURE.setEType(Zt().getEClassifier("EStructuralFeature")), a.Literals.TABLE_STYLE__COLUMNS.setEType(a.Literals.WIDGET_STYLE), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION.setEType(a.Literals.EXPRESSION);
  }
};
ur(es, "eNAME", "uimodel"), ur(es, "eNS_URI", "http://uimodel/1.0"), ur(es, "eNS_PREFIX", "uimodel"), // Singleton instance
ur(es, "_instance"), /**
* Literals for quick access to metaclasses and features
*/
ur(es, "Literals", {
  U_I_MODEL: null,
  U_I_MODEL__NAME: null,
  U_I_MODEL__TARGET_CLASSES: null,
  U_I_MODEL__PRIORITY: null,
  U_I_MODEL__FILTER_EXPRESSION: null,
  U_I_MODEL__STYLES: null,
  U_I_MODEL__TEMPLATES: null,
  U_I_MODEL__COMPONENTS: null,
  COMPONENT: null,
  COMPONENT__NAME: null,
  COMPONENT__GROUP: null,
  COMPONENT__TARGET_CLASSES: null,
  COMPONENT__STYLES: null,
  COMPONENT__CHILDREN: null,
  FORM_VIEW: null,
  FORM_VIEW__FIELDS: null,
  FORM_VIEW__VALIDATIONS: null,
  FORM_VIEW__VALIDATION_MAPPERS: null,
  FORM_VIEW__MAPPER_ORDER: null,
  TABLE_VIEW: null,
  TABLE_VIEW__TABLE_STYLE: null,
  SECTION_VIEW: null,
  SECTION_VIEW__SECTIONS: null,
  TAB_VIEW: null,
  TAB_VIEW__TABS: null,
  SUMMARY_VIEW: null,
  SUMMARY_VIEW__SUMMARY_FIELDS: null,
  MASTER_DETAIL: null,
  MASTER_DETAIL__MASTER: null,
  MASTER_DETAIL__DETAIL: null,
  WIDGET_COMPONENT: null,
  WIDGET_COMPONENT__FEATURE: null,
  WIDGET_COMPONENT__LABEL: null,
  WIDGET_COMPONENT__PLACEHOLDER: null,
  WIDGET_COMPONENT__READ_ONLY: null,
  WIDGET_COMPONENT__REQUIRED: null,
  WIDGET_COMPONENT__VISIBILITY_CONDITION: null,
  WIDGET_COMPONENT__VALIDATIONS: null,
  WIDGET_COMPONENT__VALIDATION_MAPPERS: null,
  WIDGET_COMPONENT__BINDINGS: null,
  PROPERTY_BINDING: null,
  PROPERTY_BINDING__PROPERTY: null,
  PROPERTY_BINDING__EXPRESSION: null,
  INPUT_WIDGET: null,
  INPUT_WIDGET__MAX_LENGTH: null,
  INPUT_WIDGET__VALUE: null,
  INPUT_WIDGET__PASSWORD: null,
  TEXT_AREA_WIDGET: null,
  TEXT_AREA_WIDGET__ROWS: null,
  TEXT_AREA_WIDGET__MAX_LENGTH: null,
  TEXT_AREA_WIDGET__VALUE: null,
  NUMBER_WIDGET: null,
  NUMBER_WIDGET__MIN: null,
  NUMBER_WIDGET__MAX: null,
  NUMBER_WIDGET__STEP: null,
  NUMBER_WIDGET__VALUE: null,
  CHECKBOX_WIDGET: null,
  CHECKBOX_WIDGET__AS_TOGGLE: null,
  CHECKBOX_WIDGET__VALUE: null,
  DATE_WIDGET: null,
  DATE_WIDGET__WITH_TIME: null,
  DATE_WIDGET__FORMAT: null,
  DATE_WIDGET__CONSTRAINS: null,
  DATE_WIDGET__VALUE: null,
  COMBOBOX_WIDGET: null,
  COMBOBOX_WIDGET__OPTION_LABEL: null,
  COMBOBOX_WIDGET__MIN_SEARCH_LENGTH: null,
  COMBOBOX_WIDGET__MULTI_SELECT: null,
  SELECT_WIDGET: null,
  SELECT_WIDGET__OPTION_LABEL: null,
  SELECT_WIDGET__MULTI_SELECT: null,
  SELECT_WIDGET__AS_BUTTON_GROUP: null,
  SELECT_WIDGET__VALUES: null,
  ALL_FEATURES: null,
  ALL_FEATURES__WITH: null,
  ALL_FEATURES__E_TYPE: null,
  ALL_FEATURES__FILTER: null,
  ALL_FEATURES__TEMPLATE: null,
  ALL_FEATURES__CASES: null,
  ALL_FEATURES__PRIORITY: null,
  TEMPLATE_CASE: null,
  TEMPLATE_CASE__WHEN: null,
  TEMPLATE_CASE__WIDGET: null,
  GROUP_WIDGET: null,
  GROUP_WIDGET__FIELDS: null,
  GROUP_WIDGET__LAYOUT: null,
  CONDITIONAL: null,
  CONDITIONAL__CONDITION: null,
  CONDITIONAL__THEN: null,
  CONDITIONAL__ELSE: null,
  FOR_EACH: null,
  FOR_EACH__ITEMS: null,
  FOR_EACH__BODY: null,
  FOR_EACH__EMPTY_TEXT: null,
  REFERENCE_LINK_WIDGET: null,
  REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION: null,
  REFERENCE_LINK_WIDGET__TARGET_ROUTE: null,
  U_I_MODEL_OVERLAY: null,
  U_I_MODEL_OVERLAY__NAME: null,
  U_I_MODEL_OVERLAY__PRIORITY: null,
  U_I_MODEL_OVERLAY__TEMPLATES: null,
  U_I_MODEL_OVERLAY__CASES: null,
  STYLE: null,
  STYLE__NAME: null,
  STYLE__GROUP: null,
  BASE_STYLE: null,
  BASE_STYLE__EXTENDS: null,
  BASE_STYLE__CSS: null,
  BASE_STYLE__VUE_COMPONENT: null,
  BASE_STYLE__VISIBILITY_CONDITION: null,
  LAYOUT_STYLE: null,
  LAYOUT_STYLE__LAYOUT: null,
  LAYOUT_STYLE__ORDER: null,
  WIDGET_STYLE: null,
  WIDGET_STYLE__FEATURE: null,
  WIDGET_STYLE__WIDGET_TYPE: null,
  WIDGET_STYLE__LABEL: null,
  WIDGET_STYLE__READ_ONLY: null,
  WIDGET_STYLE__ORDER: null,
  TABLE_STYLE: null,
  TABLE_STYLE__COLUMNS: null,
  EXPRESSION: null,
  EXPRESSION__LANGUAGE: null,
  EXPRESSION__BODY: null,
  VALIDATION_EXPRESSION: null,
  VALIDATION_EXPRESSION__DEFAULT_MESSAGE: null,
  VALIDATION_EXPRESSION__SEVERITY: null,
  VALIDATION_MESSAGE_MAPPER: null,
  VALIDATION_MESSAGE_MAPPER__ORDER: null,
  VALIDATION_MESSAGE_MAPPER__MATCH_CODE: null,
  VALIDATION_MESSAGE_MAPPER__MATCH_SEVERITY: null,
  VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION: null,
  VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT: null,
  VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION: null,
  VALIDATION_MESSAGE_MAPPER__MAPPED_SEVERITY: null
});
let y = es;
var $i = Object.defineProperty, ki = (s, e, t) => e in s ? $i(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, le = (s, e, t) => ki(s, typeof e != "symbol" ? e + "" : e, t);
const tt = class _ extends ct {
  constructor() {
    super(...arguments), le(this, "_name"), le(this, "_targetClasses", []), le(this, "_priority", 0), le(this, "_filterExpression"), le(this, "_styles", []), le(this, "_templates", []), le(this, "_components", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.U_I_MODEL;
  }
  // Getters and Setters
  get name() {
    return this._name;
  }
  set name(e) {
    const t = this._name;
    this._name = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(_.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => _.NAME,
      merge: () => !1
    });
  }
  get targetClasses() {
    return this._targetClasses;
  }
  set targetClasses(e) {
    const t = this._targetClasses;
    this._targetClasses = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(_.TARGET_CLASSES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => _.TARGET_CLASSES,
      merge: () => !1
    });
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    const t = this._priority;
    this._priority = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(_.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => _.PRIORITY,
      merge: () => !1
    });
  }
  get filterExpression() {
    return this._filterExpression;
  }
  set filterExpression(e) {
    const t = this._filterExpression;
    this._filterExpression = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(_.FILTER_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => _.FILTER_EXPRESSION,
      merge: () => !1
    });
  }
  get styles() {
    return this._styles;
  }
  set styles(e) {
    const t = this._styles;
    this._styles = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(_.STYLES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => _.STYLES,
      merge: () => !1
    });
  }
  get templates() {
    return this._templates;
  }
  set templates(e) {
    const t = this._templates;
    this._templates = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(_.TEMPLATES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => _.TEMPLATES,
      merge: () => !1
    });
  }
  get components() {
    return this._components;
  }
  set components(e) {
    const t = this._components;
    this._components = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(_.COMPONENTS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => _.COMPONENTS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case _.NAME:
        return this.name;
      case _.TARGET_CLASSES:
        return this.targetClasses;
      case _.PRIORITY:
        return this.priority;
      case _.FILTER_EXPRESSION:
        return this.filterExpression;
      case _.STYLES:
        return this.styles;
      case _.TEMPLATES:
        return this.templates;
      case _.COMPONENTS:
        return this.components;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case _.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case _.TARGET_CLASSES:
        this.targetClasses = t, super.eSet(e, t);
        break;
      case _.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case _.FILTER_EXPRESSION:
        this.filterExpression = t, super.eSet(e, t);
        break;
      case _.STYLES:
        this.styles = t, super.eSet(e, t);
        break;
      case _.TEMPLATES:
        this.templates = t, super.eSet(e, t);
        break;
      case _.COMPONENTS:
        this.components = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case _.NAME:
        return this._name !== void 0;
      case _.TARGET_CLASSES:
        return this._targetClasses !== void 0 && this._targetClasses.length > 0;
      case _.PRIORITY:
        return this._priority !== 0;
      case _.FILTER_EXPRESSION:
        return this._filterExpression !== void 0;
      case _.STYLES:
        return this._styles !== void 0 && this._styles.length > 0;
      case _.TEMPLATES:
        return this._templates !== void 0 && this._templates.length > 0;
      case _.COMPONENTS:
        return this._components !== void 0 && this._components.length > 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case _.NAME:
        this._name = void 0;
        return;
      case _.TARGET_CLASSES:
        this._targetClasses = [];
        return;
      case _.PRIORITY:
        this._priority = 0;
        return;
      case _.FILTER_EXPRESSION:
        this._filterExpression = void 0;
        return;
      case _.STYLES:
        this._styles = [];
        return;
      case _.TEMPLATES:
        this._templates = [];
        return;
      case _.COMPONENTS:
        this._components = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
le(tt, "NAME", 0), le(tt, "TARGET_CLASSES", 1), le(tt, "PRIORITY", 2), le(tt, "FILTER_EXPRESSION", 3), le(tt, "STYLES", 4), le(tt, "TEMPLATES", 5), le(tt, "COMPONENTS", 6);
let xi = tt;
const xr = {
  FIELD_THEN_FORM: "FIELD_THEN_FORM"
};
var Xi = Object.defineProperty, Hi = (s, e, t) => e in s ? Xi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Me = (s, e, t) => Hi(s, typeof e != "symbol" ? e + "" : e, t);
const ts = class F extends ct {
  constructor() {
    super(...arguments), Me(this, "_name", ""), Me(this, "_group"), Me(this, "_targetClasses", []), Me(this, "_styles", []), Me(this, "_children", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.COMPONENT;
  }
  // Getters and Setters
  get name() {
    return this._name;
  }
  set name(e) {
    const t = this._name;
    this._name = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(F.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.NAME,
      merge: () => !1
    });
  }
  get group() {
    return this._group;
  }
  set group(e) {
    const t = this._group;
    this._group = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(F.GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.GROUP,
      merge: () => !1
    });
  }
  get targetClasses() {
    return this._targetClasses;
  }
  set targetClasses(e) {
    const t = this._targetClasses;
    this._targetClasses = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(F.TARGET_CLASSES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.TARGET_CLASSES,
      merge: () => !1
    });
  }
  get styles() {
    return this._styles;
  }
  set styles(e) {
    const t = this._styles;
    this._styles = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(F.STYLES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.STYLES,
      merge: () => !1
    });
  }
  get children() {
    return this._children;
  }
  set children(e) {
    const t = this._children;
    this._children = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(F.CHILDREN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.CHILDREN,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case F.NAME:
        return this.name;
      case F.GROUP:
        return this.group;
      case F.TARGET_CLASSES:
        return this.targetClasses;
      case F.STYLES:
        return this.styles;
      case F.CHILDREN:
        return this.children;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case F.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case F.GROUP:
        this.group = t, super.eSet(e, t);
        break;
      case F.TARGET_CLASSES:
        this.targetClasses = t, super.eSet(e, t);
        break;
      case F.STYLES:
        this.styles = t, super.eSet(e, t);
        break;
      case F.CHILDREN:
        this.children = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case F.NAME:
        return this._name !== "";
      case F.GROUP:
        return this._group !== void 0;
      case F.TARGET_CLASSES:
        return this._targetClasses !== void 0 && this._targetClasses.length > 0;
      case F.STYLES:
        return this._styles !== void 0 && this._styles.length > 0;
      case F.CHILDREN:
        return this._children !== void 0 && this._children.length > 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case F.NAME:
        this._name = "";
        return;
      case F.GROUP:
        this._group = void 0;
        return;
      case F.TARGET_CLASSES:
        this._targetClasses = [];
        return;
      case F.STYLES:
        this._styles = [];
        return;
      case F.CHILDREN:
        this._children = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Me(ts, "NAME", 0), Me(ts, "GROUP", 1), Me(ts, "TARGET_CLASSES", 2), Me(ts, "STYLES", 3), Me(ts, "CHILDREN", 4);
let Nt = ts;
var ji = Object.defineProperty, qi = (s, e, t) => e in s ? ji(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, rt = (s, e, t) => qi(s, typeof e != "symbol" ? e + "" : e, t);
const nr = class G extends Nt {
  constructor() {
    super(...arguments), rt(this, "_fields", []), rt(this, "_validations", []), rt(this, "_validationMappers", []), rt(this, "_mapperOrder", xr.FIELD_THEN_FORM);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.FORM_VIEW;
  }
  // Getters and Setters
  get fields() {
    return this._fields;
  }
  set fields(e) {
    const t = this._fields;
    this._fields = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(G.FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.FIELDS,
      merge: () => !1
    });
  }
  get validations() {
    return this._validations;
  }
  set validations(e) {
    const t = this._validations;
    this._validations = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(G.VALIDATIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.VALIDATIONS,
      merge: () => !1
    });
  }
  get validationMappers() {
    return this._validationMappers;
  }
  set validationMappers(e) {
    const t = this._validationMappers;
    this._validationMappers = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(G.VALIDATION_MAPPERS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.VALIDATION_MAPPERS,
      merge: () => !1
    });
  }
  get mapperOrder() {
    return this._mapperOrder;
  }
  set mapperOrder(e) {
    const t = this._mapperOrder;
    this._mapperOrder = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(G.MAPPER_ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.MAPPER_ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case G.FIELDS:
        return this.fields;
      case G.VALIDATIONS:
        return this.validations;
      case G.VALIDATION_MAPPERS:
        return this.validationMappers;
      case G.MAPPER_ORDER:
        return this.mapperOrder;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case G.FIELDS:
        this.fields = t, super.eSet(e, t);
        break;
      case G.VALIDATIONS:
        this.validations = t, super.eSet(e, t);
        break;
      case G.VALIDATION_MAPPERS:
        this.validationMappers = t, super.eSet(e, t);
        break;
      case G.MAPPER_ORDER:
        this.mapperOrder = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case G.FIELDS:
        return this._fields !== void 0 && this._fields.length > 0;
      case G.VALIDATIONS:
        return this._validations !== void 0 && this._validations.length > 0;
      case G.VALIDATION_MAPPERS:
        return this._validationMappers !== void 0 && this._validationMappers.length > 0;
      case G.MAPPER_ORDER:
        return this._mapperOrder !== xr.FIELD_THEN_FORM;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case G.FIELDS:
        this._fields = [];
        return;
      case G.VALIDATIONS:
        this._validations = [];
        return;
      case G.VALIDATION_MAPPERS:
        this._validationMappers = [];
        return;
      case G.MAPPER_ORDER:
        this._mapperOrder = xr.FIELD_THEN_FORM;
        return;
      default:
        super.eUnset(e);
    }
  }
};
rt(nr, "FIELDS", 5), rt(nr, "VALIDATIONS", 6), rt(nr, "VALIDATION_MAPPERS", 7), rt(nr, "MAPPER_ORDER", 8);
let zi = nr;
var Ki = Object.defineProperty, Qi = (s, e, t) => e in s ? Ki(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Va = (s, e, t) => Qi(s, typeof e != "symbol" ? e + "" : e, t);
const Ua = class ht extends Nt {
  constructor() {
    super(...arguments), Va(this, "_tableStyle");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.TABLE_VIEW;
  }
  // Getters and Setters
  get tableStyle() {
    return this._tableStyle;
  }
  set tableStyle(e) {
    const t = this._tableStyle;
    this._tableStyle = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(ht.TABLE_STYLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ht.TABLE_STYLE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ht.TABLE_STYLE:
        return this.tableStyle;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case ht.TABLE_STYLE:
        this.tableStyle = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ht.TABLE_STYLE:
        return this._tableStyle !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ht.TABLE_STYLE:
        this._tableStyle = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Va(Ua, "TABLE_STYLE", 5);
let Ji = Ua;
var Zi = Object.defineProperty, eu = (s, e, t) => e in s ? Zi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ba = (s, e, t) => eu(s, typeof e != "symbol" ? e + "" : e, t);
const Ga = class gt extends Nt {
  constructor() {
    super(...arguments), Ba(this, "_sections", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.SECTION_VIEW;
  }
  // Getters and Setters
  get sections() {
    return this._sections;
  }
  set sections(e) {
    const t = this._sections;
    this._sections = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(gt.SECTIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => gt.SECTIONS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case gt.SECTIONS:
        return this.sections;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case gt.SECTIONS:
        this.sections = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case gt.SECTIONS:
        return this._sections !== void 0 && this._sections.length > 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case gt.SECTIONS:
        this._sections = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ba(Ga, "SECTIONS", 5);
let tu = Ga;
var su = Object.defineProperty, ru = (s, e, t) => e in s ? su(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Wa = (s, e, t) => ru(s, typeof e != "symbol" ? e + "" : e, t);
const Ya = class dt extends Nt {
  constructor() {
    super(...arguments), Wa(this, "_tabs", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.TAB_VIEW;
  }
  // Getters and Setters
  get tabs() {
    return this._tabs;
  }
  set tabs(e) {
    const t = this._tabs;
    this._tabs = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(dt.TABS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => dt.TABS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case dt.TABS:
        return this.tabs;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case dt.TABS:
        this.tabs = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case dt.TABS:
        return this._tabs !== void 0 && this._tabs.length > 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case dt.TABS:
        this._tabs = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Wa(Ya, "TABS", 5);
let au = Ya;
var iu = Object.defineProperty, uu = (s, e, t) => e in s ? iu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, $a = (s, e, t) => uu(s, typeof e != "symbol" ? e + "" : e, t);
const ka = class pt extends Nt {
  constructor() {
    super(...arguments), $a(this, "_summaryFields", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.SUMMARY_VIEW;
  }
  // Getters and Setters
  get summaryFields() {
    return this._summaryFields;
  }
  set summaryFields(e) {
    const t = this._summaryFields;
    this._summaryFields = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(pt.SUMMARY_FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => pt.SUMMARY_FIELDS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case pt.SUMMARY_FIELDS:
        return this.summaryFields;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case pt.SUMMARY_FIELDS:
        this.summaryFields = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case pt.SUMMARY_FIELDS:
        return this._summaryFields !== void 0 && this._summaryFields.length > 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case pt.SUMMARY_FIELDS:
        this._summaryFields = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
$a(ka, "SUMMARY_FIELDS", 5);
let nu = ka;
var lu = Object.defineProperty, ou = (s, e, t) => e in s ? lu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, yr = (s, e, t) => ou(s, typeof e != "symbol" ? e + "" : e, t);
const zr = class he extends Nt {
  constructor() {
    super(...arguments), yr(this, "_master"), yr(this, "_detail");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.MASTER_DETAIL;
  }
  // Getters and Setters
  get master() {
    return this._master;
  }
  set master(e) {
    const t = this._master;
    this._master = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(he.MASTER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => he.MASTER,
      merge: () => !1
    });
  }
  get detail() {
    return this._detail;
  }
  set detail(e) {
    const t = this._detail;
    this._detail = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(he.DETAIL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => he.DETAIL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case he.MASTER:
        return this.master;
      case he.DETAIL:
        return this.detail;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case he.MASTER:
        this.master = t, super.eSet(e, t);
        break;
      case he.DETAIL:
        this.detail = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case he.MASTER:
        return this._master !== void 0;
      case he.DETAIL:
        return this._detail !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case he.MASTER:
        this._master = void 0;
        return;
      case he.DETAIL:
        this._detail = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
yr(zr, "MASTER", 5), yr(zr, "DETAIL", 6);
let cu = zr;
var Eu = Object.defineProperty, hu = (s, e, t) => e in s ? Eu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Dr = (s, e, t) => hu(s, typeof e != "symbol" ? e + "" : e, t);
const Kr = class ge extends ct {
  constructor() {
    super(...arguments), Dr(this, "_property", ""), Dr(this, "_expression");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.PROPERTY_BINDING;
  }
  // Getters and Setters
  get property() {
    return this._property;
  }
  set property(e) {
    const t = this._property;
    this._property = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(ge.PROPERTY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ge.PROPERTY,
      merge: () => !1
    });
  }
  get expression() {
    return this._expression;
  }
  set expression(e) {
    const t = this._expression;
    this._expression = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(ge.EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ge.EXPRESSION,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ge.PROPERTY:
        return this.property;
      case ge.EXPRESSION:
        return this.expression;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case ge.PROPERTY:
        this.property = t, super.eSet(e, t);
        break;
      case ge.EXPRESSION:
        this.expression = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ge.PROPERTY:
        return this._property !== "";
      case ge.EXPRESSION:
        return this._expression !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ge.PROPERTY:
        this._property = "";
        return;
      case ge.EXPRESSION:
        this._expression = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Dr(Kr, "PROPERTY", 0), Dr(Kr, "EXPRESSION", 1);
let gu = Kr;
var du = Object.defineProperty, pu = (s, e, t) => e in s ? du(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Z = (s, e, t) => pu(s, typeof e != "symbol" ? e + "" : e, t);
const be = class m extends Nt {
  constructor() {
    super(...arguments), Z(this, "_feature"), Z(this, "_label"), Z(this, "_placeholder"), Z(this, "_readOnly"), Z(this, "_required"), Z(this, "_visibilityCondition"), Z(this, "_validations", []), Z(this, "_validationMappers", []), Z(this, "_bindings", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.WIDGET_COMPONENT;
  }
  // Getters and Setters
  get feature() {
    return this._feature;
  }
  set feature(e) {
    const t = this._feature;
    this._feature = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(m.FEATURE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => m.FEATURE,
      merge: () => !1
    });
  }
  get label() {
    return this._label;
  }
  set label(e) {
    const t = this._label;
    this._label = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(m.LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => m.LABEL,
      merge: () => !1
    });
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(e) {
    const t = this._placeholder;
    this._placeholder = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(m.PLACEHOLDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => m.PLACEHOLDER,
      merge: () => !1
    });
  }
  get readOnly() {
    return this._readOnly;
  }
  set readOnly(e) {
    const t = this._readOnly;
    this._readOnly = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(m.READ_ONLY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => m.READ_ONLY,
      merge: () => !1
    });
  }
  get required() {
    return this._required;
  }
  set required(e) {
    const t = this._required;
    this._required = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(m.REQUIRED),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => m.REQUIRED,
      merge: () => !1
    });
  }
  get visibilityCondition() {
    return this._visibilityCondition;
  }
  set visibilityCondition(e) {
    const t = this._visibilityCondition;
    this._visibilityCondition = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(m.VISIBILITY_CONDITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => m.VISIBILITY_CONDITION,
      merge: () => !1
    });
  }
  get validations() {
    return this._validations;
  }
  set validations(e) {
    const t = this._validations;
    this._validations = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(m.VALIDATIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => m.VALIDATIONS,
      merge: () => !1
    });
  }
  get validationMappers() {
    return this._validationMappers;
  }
  set validationMappers(e) {
    const t = this._validationMappers;
    this._validationMappers = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(m.VALIDATION_MAPPERS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => m.VALIDATION_MAPPERS,
      merge: () => !1
    });
  }
  get bindings() {
    return this._bindings;
  }
  set bindings(e) {
    const t = this._bindings;
    this._bindings = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(m.BINDINGS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => m.BINDINGS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case m.FEATURE:
        return this.feature;
      case m.LABEL:
        return this.label;
      case m.PLACEHOLDER:
        return this.placeholder;
      case m.READ_ONLY:
        return this.readOnly;
      case m.REQUIRED:
        return this.required;
      case m.VISIBILITY_CONDITION:
        return this.visibilityCondition;
      case m.VALIDATIONS:
        return this.validations;
      case m.VALIDATION_MAPPERS:
        return this.validationMappers;
      case m.BINDINGS:
        return this.bindings;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case m.FEATURE:
        this.feature = t, super.eSet(e, t);
        break;
      case m.LABEL:
        this.label = t, super.eSet(e, t);
        break;
      case m.PLACEHOLDER:
        this.placeholder = t, super.eSet(e, t);
        break;
      case m.READ_ONLY:
        this.readOnly = t, super.eSet(e, t);
        break;
      case m.REQUIRED:
        this.required = t, super.eSet(e, t);
        break;
      case m.VISIBILITY_CONDITION:
        this.visibilityCondition = t, super.eSet(e, t);
        break;
      case m.VALIDATIONS:
        this.validations = t, super.eSet(e, t);
        break;
      case m.VALIDATION_MAPPERS:
        this.validationMappers = t, super.eSet(e, t);
        break;
      case m.BINDINGS:
        this.bindings = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case m.FEATURE:
        return this._feature !== void 0;
      case m.LABEL:
        return this._label !== void 0;
      case m.PLACEHOLDER:
        return this._placeholder !== void 0;
      case m.READ_ONLY:
        return this._readOnly !== void 0;
      case m.REQUIRED:
        return this._required !== void 0;
      case m.VISIBILITY_CONDITION:
        return this._visibilityCondition !== void 0;
      case m.VALIDATIONS:
        return this._validations !== void 0 && this._validations.length > 0;
      case m.VALIDATION_MAPPERS:
        return this._validationMappers !== void 0 && this._validationMappers.length > 0;
      case m.BINDINGS:
        return this._bindings !== void 0 && this._bindings.length > 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case m.FEATURE:
        this._feature = void 0;
        return;
      case m.LABEL:
        this._label = void 0;
        return;
      case m.PLACEHOLDER:
        this._placeholder = void 0;
        return;
      case m.READ_ONLY:
        this._readOnly = void 0;
        return;
      case m.REQUIRED:
        this._required = void 0;
        return;
      case m.VISIBILITY_CONDITION:
        this._visibilityCondition = void 0;
        return;
      case m.VALIDATIONS:
        this._validations = [];
        return;
      case m.VALIDATION_MAPPERS:
        this._validationMappers = [];
        return;
      case m.BINDINGS:
        this._bindings = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Z(be, "FEATURE", 5), Z(be, "LABEL", 6), Z(be, "PLACEHOLDER", 7), Z(be, "READ_ONLY", 8), Z(be, "REQUIRED", 9), Z(be, "VISIBILITY_CONDITION", 10), Z(be, "VALIDATIONS", 11), Z(be, "VALIDATION_MAPPERS", 12), Z(be, "BINDINGS", 13);
let Oe = be;
var Tu = Object.defineProperty, fu = (s, e, t) => e in s ? Tu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, rs = (s, e, t) => fu(s, typeof e != "symbol" ? e + "" : e, t);
const Nr = class q extends Oe {
  constructor() {
    super(...arguments), rs(this, "_maxLength"), rs(this, "_value"), rs(this, "_password");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.INPUT_WIDGET;
  }
  // Getters and Setters
  get maxLength() {
    return this._maxLength;
  }
  set maxLength(e) {
    const t = this._maxLength;
    this._maxLength = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(q.MAX_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => q.MAX_LENGTH,
      merge: () => !1
    });
  }
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    this._value = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(q.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => q.VALUE,
      merge: () => !1
    });
  }
  get password() {
    return this._password;
  }
  set password(e) {
    const t = this._password;
    this._password = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(q.PASSWORD),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => q.PASSWORD,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case q.MAX_LENGTH:
        return this.maxLength;
      case q.VALUE:
        return this.value;
      case q.PASSWORD:
        return this.password;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case q.MAX_LENGTH:
        this.maxLength = t, super.eSet(e, t);
        break;
      case q.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case q.PASSWORD:
        this.password = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case q.MAX_LENGTH:
        return this._maxLength !== void 0;
      case q.VALUE:
        return this._value !== void 0;
      case q.PASSWORD:
        return this._password !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case q.MAX_LENGTH:
        this._maxLength = void 0;
        return;
      case q.VALUE:
        this._value = void 0;
        return;
      case q.PASSWORD:
        this._password = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
rs(Nr, "MAX_LENGTH", 14), rs(Nr, "VALUE", 15), rs(Nr, "PASSWORD", 16);
let Su = Nr;
var mu = Object.defineProperty, Iu = (s, e, t) => e in s ? mu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, as = (s, e, t) => Iu(s, typeof e != "symbol" ? e + "" : e, t);
const Lr = class z extends Oe {
  constructor() {
    super(...arguments), as(this, "_rows", 4), as(this, "_maxLength"), as(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.TEXT_AREA_WIDGET;
  }
  // Getters and Setters
  get rows() {
    return this._rows;
  }
  set rows(e) {
    const t = this._rows;
    this._rows = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(z.ROWS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => z.ROWS,
      merge: () => !1
    });
  }
  get maxLength() {
    return this._maxLength;
  }
  set maxLength(e) {
    const t = this._maxLength;
    this._maxLength = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(z.MAX_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => z.MAX_LENGTH,
      merge: () => !1
    });
  }
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    this._value = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(z.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => z.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case z.ROWS:
        return this.rows;
      case z.MAX_LENGTH:
        return this.maxLength;
      case z.VALUE:
        return this.value;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case z.ROWS:
        this.rows = t, super.eSet(e, t);
        break;
      case z.MAX_LENGTH:
        this.maxLength = t, super.eSet(e, t);
        break;
      case z.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case z.ROWS:
        return this._rows !== 4;
      case z.MAX_LENGTH:
        return this._maxLength !== void 0;
      case z.VALUE:
        return this._value !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case z.ROWS:
        this._rows = 4;
        return;
      case z.MAX_LENGTH:
        this._maxLength = void 0;
        return;
      case z.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
as(Lr, "ROWS", 14), as(Lr, "MAX_LENGTH", 15), as(Lr, "VALUE", 16);
let Nu = Lr;
var Lu = Object.defineProperty, vu = (s, e, t) => e in s ? Lu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, at = (s, e, t) => vu(s, typeof e != "symbol" ? e + "" : e, t);
const lr = class W extends Oe {
  constructor() {
    super(...arguments), at(this, "_min"), at(this, "_max"), at(this, "_step", 1), at(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.NUMBER_WIDGET;
  }
  // Getters and Setters
  get min() {
    return this._min;
  }
  set min(e) {
    const t = this._min;
    this._min = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(W.MIN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.MIN,
      merge: () => !1
    });
  }
  get max() {
    return this._max;
  }
  set max(e) {
    const t = this._max;
    this._max = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(W.MAX),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.MAX,
      merge: () => !1
    });
  }
  get step() {
    return this._step;
  }
  set step(e) {
    const t = this._step;
    this._step = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(W.STEP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.STEP,
      merge: () => !1
    });
  }
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    this._value = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(W.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case W.MIN:
        return this.min;
      case W.MAX:
        return this.max;
      case W.STEP:
        return this.step;
      case W.VALUE:
        return this.value;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case W.MIN:
        this.min = t, super.eSet(e, t);
        break;
      case W.MAX:
        this.max = t, super.eSet(e, t);
        break;
      case W.STEP:
        this.step = t, super.eSet(e, t);
        break;
      case W.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case W.MIN:
        return this._min !== void 0;
      case W.MAX:
        return this._max !== void 0;
      case W.STEP:
        return this._step !== 1;
      case W.VALUE:
        return this._value !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case W.MIN:
        this._min = void 0;
        return;
      case W.MAX:
        this._max = void 0;
        return;
      case W.STEP:
        this._step = 1;
        return;
      case W.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
at(lr, "MIN", 14), at(lr, "MAX", 15), at(lr, "STEP", 16), at(lr, "VALUE", 17);
let _u = lr;
var Ou = Object.defineProperty, Au = (s, e, t) => e in s ? Ou(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Rr = (s, e, t) => Au(s, typeof e != "symbol" ? e + "" : e, t);
const Qr = class de extends Oe {
  constructor() {
    super(...arguments), Rr(this, "_asToggle"), Rr(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.CHECKBOX_WIDGET;
  }
  // Getters and Setters
  get asToggle() {
    return this._asToggle;
  }
  set asToggle(e) {
    const t = this._asToggle;
    this._asToggle = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(de.AS_TOGGLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => de.AS_TOGGLE,
      merge: () => !1
    });
  }
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    this._value = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(de.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => de.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case de.AS_TOGGLE:
        return this.asToggle;
      case de.VALUE:
        return this.value;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case de.AS_TOGGLE:
        this.asToggle = t, super.eSet(e, t);
        break;
      case de.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case de.AS_TOGGLE:
        return this._asToggle !== void 0;
      case de.VALUE:
        return this._value !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case de.AS_TOGGLE:
        this._asToggle = void 0;
        return;
      case de.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Rr(Qr, "AS_TOGGLE", 14), Rr(Qr, "VALUE", 15);
let Cu = Qr;
var yu = Object.defineProperty, Du = (s, e, t) => e in s ? yu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, it = (s, e, t) => Du(s, typeof e != "symbol" ? e + "" : e, t);
const or = class Y extends Oe {
  constructor() {
    super(...arguments), it(this, "_withTime"), it(this, "_format", "DD.MM.YYYY"), it(this, "_constrains"), it(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.DATE_WIDGET;
  }
  // Getters and Setters
  get withTime() {
    return this._withTime;
  }
  set withTime(e) {
    const t = this._withTime;
    this._withTime = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Y.WITH_TIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.WITH_TIME,
      merge: () => !1
    });
  }
  get format() {
    return this._format;
  }
  set format(e) {
    const t = this._format;
    this._format = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Y.FORMAT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.FORMAT,
      merge: () => !1
    });
  }
  get constrains() {
    return this._constrains;
  }
  set constrains(e) {
    const t = this._constrains;
    this._constrains = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Y.CONSTRAINS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.CONSTRAINS,
      merge: () => !1
    });
  }
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    this._value = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Y.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Y.WITH_TIME:
        return this.withTime;
      case Y.FORMAT:
        return this.format;
      case Y.CONSTRAINS:
        return this.constrains;
      case Y.VALUE:
        return this.value;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case Y.WITH_TIME:
        this.withTime = t, super.eSet(e, t);
        break;
      case Y.FORMAT:
        this.format = t, super.eSet(e, t);
        break;
      case Y.CONSTRAINS:
        this.constrains = t, super.eSet(e, t);
        break;
      case Y.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Y.WITH_TIME:
        return this._withTime !== void 0;
      case Y.FORMAT:
        return this._format !== "DD.MM.YYYY";
      case Y.CONSTRAINS:
        return this._constrains !== void 0;
      case Y.VALUE:
        return this._value !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Y.WITH_TIME:
        this._withTime = void 0;
        return;
      case Y.FORMAT:
        this._format = "DD.MM.YYYY";
        return;
      case Y.CONSTRAINS:
        this._constrains = void 0;
        return;
      case Y.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
it(or, "WITH_TIME", 14), it(or, "FORMAT", 15), it(or, "CONSTRAINS", 16), it(or, "VALUE", 17);
let Ru = or;
var wu = Object.defineProperty, Fu = (s, e, t) => e in s ? wu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, is = (s, e, t) => Fu(s, typeof e != "symbol" ? e + "" : e, t);
const vr = class K extends Oe {
  constructor() {
    super(...arguments), is(this, "_optionLabel"), is(this, "_minSearchLength", 2), is(this, "_multiSelect");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.COMBOBOX_WIDGET;
  }
  // Getters and Setters
  get optionLabel() {
    return this._optionLabel;
  }
  set optionLabel(e) {
    const t = this._optionLabel;
    this._optionLabel = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(K.OPTION_LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => K.OPTION_LABEL,
      merge: () => !1
    });
  }
  get minSearchLength() {
    return this._minSearchLength;
  }
  set minSearchLength(e) {
    const t = this._minSearchLength;
    this._minSearchLength = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(K.MIN_SEARCH_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => K.MIN_SEARCH_LENGTH,
      merge: () => !1
    });
  }
  get multiSelect() {
    return this._multiSelect;
  }
  set multiSelect(e) {
    const t = this._multiSelect;
    this._multiSelect = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(K.MULTI_SELECT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => K.MULTI_SELECT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case K.OPTION_LABEL:
        return this.optionLabel;
      case K.MIN_SEARCH_LENGTH:
        return this.minSearchLength;
      case K.MULTI_SELECT:
        return this.multiSelect;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case K.OPTION_LABEL:
        this.optionLabel = t, super.eSet(e, t);
        break;
      case K.MIN_SEARCH_LENGTH:
        this.minSearchLength = t, super.eSet(e, t);
        break;
      case K.MULTI_SELECT:
        this.multiSelect = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case K.OPTION_LABEL:
        return this._optionLabel !== void 0;
      case K.MIN_SEARCH_LENGTH:
        return this._minSearchLength !== 2;
      case K.MULTI_SELECT:
        return this._multiSelect !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case K.OPTION_LABEL:
        this._optionLabel = void 0;
        return;
      case K.MIN_SEARCH_LENGTH:
        this._minSearchLength = 2;
        return;
      case K.MULTI_SELECT:
        this._multiSelect = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
is(vr, "OPTION_LABEL", 14), is(vr, "MIN_SEARCH_LENGTH", 15), is(vr, "MULTI_SELECT", 16);
let Pu = vr;
var bu = Object.defineProperty, Mu = (s, e, t) => e in s ? bu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ut = (s, e, t) => Mu(s, typeof e != "symbol" ? e + "" : e, t);
const cr = class $ extends Oe {
  constructor() {
    super(...arguments), ut(this, "_optionLabel"), ut(this, "_multiSelect"), ut(this, "_asButtonGroup"), ut(this, "_values", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.SELECT_WIDGET;
  }
  // Getters and Setters
  get optionLabel() {
    return this._optionLabel;
  }
  set optionLabel(e) {
    const t = this._optionLabel;
    this._optionLabel = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($.OPTION_LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.OPTION_LABEL,
      merge: () => !1
    });
  }
  get multiSelect() {
    return this._multiSelect;
  }
  set multiSelect(e) {
    const t = this._multiSelect;
    this._multiSelect = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($.MULTI_SELECT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.MULTI_SELECT,
      merge: () => !1
    });
  }
  get asButtonGroup() {
    return this._asButtonGroup;
  }
  set asButtonGroup(e) {
    const t = this._asButtonGroup;
    this._asButtonGroup = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($.AS_BUTTON_GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.AS_BUTTON_GROUP,
      merge: () => !1
    });
  }
  get values() {
    return this._values;
  }
  set values(e) {
    const t = this._values;
    this._values = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($.VALUES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.VALUES,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case $.OPTION_LABEL:
        return this.optionLabel;
      case $.MULTI_SELECT:
        return this.multiSelect;
      case $.AS_BUTTON_GROUP:
        return this.asButtonGroup;
      case $.VALUES:
        return this.values;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case $.OPTION_LABEL:
        this.optionLabel = t, super.eSet(e, t);
        break;
      case $.MULTI_SELECT:
        this.multiSelect = t, super.eSet(e, t);
        break;
      case $.AS_BUTTON_GROUP:
        this.asButtonGroup = t, super.eSet(e, t);
        break;
      case $.VALUES:
        this.values = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case $.OPTION_LABEL:
        return this._optionLabel !== void 0;
      case $.MULTI_SELECT:
        return this._multiSelect !== void 0;
      case $.AS_BUTTON_GROUP:
        return this._asButtonGroup !== void 0;
      case $.VALUES:
        return this._values !== void 0 && this._values.length > 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case $.OPTION_LABEL:
        this._optionLabel = void 0;
        return;
      case $.MULTI_SELECT:
        this._multiSelect = void 0;
        return;
      case $.AS_BUTTON_GROUP:
        this._asButtonGroup = void 0;
        return;
      case $.VALUES:
        this._values = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
ut(cr, "OPTION_LABEL", 14), ut(cr, "MULTI_SELECT", 15), ut(cr, "AS_BUTTON_GROUP", 16), ut(cr, "VALUES", 17);
let Vu = cr;
var Uu = Object.defineProperty, Bu = (s, e, t) => e in s ? Uu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ve = (s, e, t) => Bu(s, typeof e != "symbol" ? e + "" : e, t);
const Tt = class C extends Oe {
  constructor() {
    super(...arguments), ve(this, "_with", []), ve(this, "_eType", []), ve(this, "_filter"), ve(this, "_template"), ve(this, "_cases", []), ve(this, "_priority", 0);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.ALL_FEATURES;
  }
  // Getters and Setters
  get with() {
    return this._with;
  }
  set with(e) {
    const t = this._with;
    this._with = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(C.WITH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.WITH,
      merge: () => !1
    });
  }
  get eType() {
    return this._eType;
  }
  set eType(e) {
    const t = this._eType;
    this._eType = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(C.E_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.E_TYPE,
      merge: () => !1
    });
  }
  get filter() {
    return this._filter;
  }
  set filter(e) {
    const t = this._filter;
    this._filter = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(C.FILTER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.FILTER,
      merge: () => !1
    });
  }
  get template() {
    return this._template;
  }
  set template(e) {
    const t = this._template;
    this._template = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(C.TEMPLATE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.TEMPLATE,
      merge: () => !1
    });
  }
  get cases() {
    return this._cases;
  }
  set cases(e) {
    const t = this._cases;
    this._cases = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(C.CASES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.CASES,
      merge: () => !1
    });
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    const t = this._priority;
    this._priority = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(C.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.PRIORITY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case C.WITH:
        return this.with;
      case C.E_TYPE:
        return this.eType;
      case C.FILTER:
        return this.filter;
      case C.TEMPLATE:
        return this.template;
      case C.CASES:
        return this.cases;
      case C.PRIORITY:
        return this.priority;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case C.WITH:
        this.with = t, super.eSet(e, t);
        break;
      case C.E_TYPE:
        this.eType = t, super.eSet(e, t);
        break;
      case C.FILTER:
        this.filter = t, super.eSet(e, t);
        break;
      case C.TEMPLATE:
        this.template = t, super.eSet(e, t);
        break;
      case C.CASES:
        this.cases = t, super.eSet(e, t);
        break;
      case C.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case C.WITH:
        return this._with !== void 0 && this._with.length > 0;
      case C.E_TYPE:
        return this._eType !== void 0 && this._eType.length > 0;
      case C.FILTER:
        return this._filter !== void 0;
      case C.TEMPLATE:
        return this._template !== void 0;
      case C.CASES:
        return this._cases !== void 0 && this._cases.length > 0;
      case C.PRIORITY:
        return this._priority !== 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case C.WITH:
        this._with = [];
        return;
      case C.E_TYPE:
        this._eType = [];
        return;
      case C.FILTER:
        this._filter = void 0;
        return;
      case C.TEMPLATE:
        this._template = void 0;
        return;
      case C.CASES:
        this._cases = [];
        return;
      case C.PRIORITY:
        this._priority = 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
ve(Tt, "WITH", 14), ve(Tt, "E_TYPE", 15), ve(Tt, "FILTER", 16), ve(Tt, "TEMPLATE", 17), ve(Tt, "CASES", 18), ve(Tt, "PRIORITY", 19);
let Gu = Tt;
var Wu = Object.defineProperty, Yu = (s, e, t) => e in s ? Wu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, wr = (s, e, t) => Yu(s, typeof e != "symbol" ? e + "" : e, t);
const Jr = class pe extends ct {
  constructor() {
    super(...arguments), wr(this, "_when"), wr(this, "_widget");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.TEMPLATE_CASE;
  }
  // Getters and Setters
  get when() {
    return this._when;
  }
  set when(e) {
    const t = this._when;
    this._when = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(pe.WHEN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => pe.WHEN,
      merge: () => !1
    });
  }
  get widget() {
    return this._widget;
  }
  set widget(e) {
    const t = this._widget;
    this._widget = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(pe.WIDGET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => pe.WIDGET,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case pe.WHEN:
        return this.when;
      case pe.WIDGET:
        return this.widget;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case pe.WHEN:
        this.when = t, super.eSet(e, t);
        break;
      case pe.WIDGET:
        this.widget = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case pe.WHEN:
        return this._when !== void 0;
      case pe.WIDGET:
        return this._widget !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case pe.WHEN:
        this._when = void 0;
        return;
      case pe.WIDGET:
        this._widget = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
wr(Jr, "WHEN", 0), wr(Jr, "WIDGET", 1);
let $u = Jr;
const Xr = {
  VERTICAL: "VERTICAL"
};
var ku = Object.defineProperty, xu = (s, e, t) => e in s ? ku(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Fr = (s, e, t) => xu(s, typeof e != "symbol" ? e + "" : e, t);
const Zr = class Te extends Oe {
  constructor() {
    super(...arguments), Fr(this, "_fields", []), Fr(this, "_layout", Xr.VERTICAL);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.GROUP_WIDGET;
  }
  // Getters and Setters
  get fields() {
    return this._fields;
  }
  set fields(e) {
    const t = this._fields;
    this._fields = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Te.FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Te.FIELDS,
      merge: () => !1
    });
  }
  get layout() {
    return this._layout;
  }
  set layout(e) {
    const t = this._layout;
    this._layout = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Te.LAYOUT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Te.LAYOUT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Te.FIELDS:
        return this.fields;
      case Te.LAYOUT:
        return this.layout;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case Te.FIELDS:
        this.fields = t, super.eSet(e, t);
        break;
      case Te.LAYOUT:
        this.layout = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Te.FIELDS:
        return this._fields !== void 0 && this._fields.length > 0;
      case Te.LAYOUT:
        return this._layout !== Xr.VERTICAL;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Te.FIELDS:
        this._fields = [];
        return;
      case Te.LAYOUT:
        this._layout = Xr.VERTICAL;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Fr(Zr, "FIELDS", 14), Fr(Zr, "LAYOUT", 15);
let Xu = Zr;
var Hu = Object.defineProperty, ju = (s, e, t) => e in s ? Hu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, us = (s, e, t) => ju(s, typeof e != "symbol" ? e + "" : e, t);
const _r = class Q extends Oe {
  constructor() {
    super(...arguments), us(this, "_condition"), us(this, "_then", []), us(this, "_else", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.CONDITIONAL;
  }
  // Getters and Setters
  get condition() {
    return this._condition;
  }
  set condition(e) {
    const t = this._condition;
    this._condition = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Q.CONDITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Q.CONDITION,
      merge: () => !1
    });
  }
  get then() {
    return this._then;
  }
  set then(e) {
    const t = this._then;
    this._then = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Q.THEN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Q.THEN,
      merge: () => !1
    });
  }
  get else() {
    return this._else;
  }
  set else(e) {
    const t = this._else;
    this._else = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Q.ELSE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Q.ELSE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Q.CONDITION:
        return this.condition;
      case Q.THEN:
        return this.then;
      case Q.ELSE:
        return this.else;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case Q.CONDITION:
        this.condition = t, super.eSet(e, t);
        break;
      case Q.THEN:
        this.then = t, super.eSet(e, t);
        break;
      case Q.ELSE:
        this.else = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Q.CONDITION:
        return this._condition !== void 0;
      case Q.THEN:
        return this._then !== void 0 && this._then.length > 0;
      case Q.ELSE:
        return this._else !== void 0 && this._else.length > 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Q.CONDITION:
        this._condition = void 0;
        return;
      case Q.THEN:
        this._then = [];
        return;
      case Q.ELSE:
        this._else = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
us(_r, "CONDITION", 14), us(_r, "THEN", 15), us(_r, "ELSE", 16);
let qu = _r;
var zu = Object.defineProperty, Ku = (s, e, t) => e in s ? zu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ns = (s, e, t) => Ku(s, typeof e != "symbol" ? e + "" : e, t);
const Or = class J extends Oe {
  constructor() {
    super(...arguments), ns(this, "_items"), ns(this, "_body", []), ns(this, "_emptyText");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.FOR_EACH;
  }
  // Getters and Setters
  get items() {
    return this._items;
  }
  set items(e) {
    const t = this._items;
    this._items = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(J.ITEMS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => J.ITEMS,
      merge: () => !1
    });
  }
  get body() {
    return this._body;
  }
  set body(e) {
    const t = this._body;
    this._body = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(J.BODY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => J.BODY,
      merge: () => !1
    });
  }
  get emptyText() {
    return this._emptyText;
  }
  set emptyText(e) {
    const t = this._emptyText;
    this._emptyText = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(J.EMPTY_TEXT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => J.EMPTY_TEXT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case J.ITEMS:
        return this.items;
      case J.BODY:
        return this.body;
      case J.EMPTY_TEXT:
        return this.emptyText;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case J.ITEMS:
        this.items = t, super.eSet(e, t);
        break;
      case J.BODY:
        this.body = t, super.eSet(e, t);
        break;
      case J.EMPTY_TEXT:
        this.emptyText = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case J.ITEMS:
        return this._items !== void 0;
      case J.BODY:
        return this._body !== void 0 && this._body.length > 0;
      case J.EMPTY_TEXT:
        return this._emptyText !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case J.ITEMS:
        this._items = void 0;
        return;
      case J.BODY:
        this._body = [];
        return;
      case J.EMPTY_TEXT:
        this._emptyText = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
ns(Or, "ITEMS", 14), ns(Or, "BODY", 15), ns(Or, "EMPTY_TEXT", 16);
let Qu = Or;
var Ju = Object.defineProperty, Zu = (s, e, t) => e in s ? Ju(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Pr = (s, e, t) => Zu(s, typeof e != "symbol" ? e + "" : e, t);
const ea = class fe extends Oe {
  constructor() {
    super(...arguments), Pr(this, "_displayExpression"), Pr(this, "_targetRoute");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.REFERENCE_LINK_WIDGET;
  }
  // Getters and Setters
  get displayExpression() {
    return this._displayExpression;
  }
  set displayExpression(e) {
    const t = this._displayExpression;
    this._displayExpression = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(fe.DISPLAY_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => fe.DISPLAY_EXPRESSION,
      merge: () => !1
    });
  }
  get targetRoute() {
    return this._targetRoute;
  }
  set targetRoute(e) {
    const t = this._targetRoute;
    this._targetRoute = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(fe.TARGET_ROUTE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => fe.TARGET_ROUTE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case fe.DISPLAY_EXPRESSION:
        return this.displayExpression;
      case fe.TARGET_ROUTE:
        return this.targetRoute;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case fe.DISPLAY_EXPRESSION:
        this.displayExpression = t, super.eSet(e, t);
        break;
      case fe.TARGET_ROUTE:
        this.targetRoute = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case fe.DISPLAY_EXPRESSION:
        return this._displayExpression !== void 0;
      case fe.TARGET_ROUTE:
        return this._targetRoute !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case fe.DISPLAY_EXPRESSION:
        this._displayExpression = void 0;
        return;
      case fe.TARGET_ROUTE:
        this._targetRoute = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Pr(ea, "DISPLAY_EXPRESSION", 14), Pr(ea, "TARGET_ROUTE", 15);
let en = ea;
var tn = Object.defineProperty, sn = (s, e, t) => e in s ? tn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, nt = (s, e, t) => sn(s, typeof e != "symbol" ? e + "" : e, t);
const Er = class k extends ct {
  constructor() {
    super(...arguments), nt(this, "_name"), nt(this, "_priority", 0), nt(this, "_templates", []), nt(this, "_cases", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.U_I_MODEL_OVERLAY;
  }
  // Getters and Setters
  get name() {
    return this._name;
  }
  set name(e) {
    const t = this._name;
    this._name = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(k.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.NAME,
      merge: () => !1
    });
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    const t = this._priority;
    this._priority = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(k.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.PRIORITY,
      merge: () => !1
    });
  }
  get templates() {
    return this._templates;
  }
  set templates(e) {
    const t = this._templates;
    this._templates = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(k.TEMPLATES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.TEMPLATES,
      merge: () => !1
    });
  }
  get cases() {
    return this._cases;
  }
  set cases(e) {
    const t = this._cases;
    this._cases = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(k.CASES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.CASES,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case k.NAME:
        return this.name;
      case k.PRIORITY:
        return this.priority;
      case k.TEMPLATES:
        return this.templates;
      case k.CASES:
        return this.cases;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case k.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case k.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case k.TEMPLATES:
        this.templates = t, super.eSet(e, t);
        break;
      case k.CASES:
        this.cases = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case k.NAME:
        return this._name !== void 0;
      case k.PRIORITY:
        return this._priority !== 0;
      case k.TEMPLATES:
        return this._templates !== void 0 && this._templates.length > 0;
      case k.CASES:
        return this._cases !== void 0 && this._cases.length > 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case k.NAME:
        this._name = void 0;
        return;
      case k.PRIORITY:
        this._priority = 0;
        return;
      case k.TEMPLATES:
        this._templates = [];
        return;
      case k.CASES:
        this._cases = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
nt(Er, "NAME", 0), nt(Er, "PRIORITY", 1), nt(Er, "TEMPLATES", 2), nt(Er, "CASES", 3);
let rn = Er;
var an = Object.defineProperty, un = (s, e, t) => e in s ? an(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, _e = (s, e, t) => un(s, typeof e != "symbol" ? e + "" : e, t);
const ft = class D extends ct {
  constructor() {
    super(...arguments), _e(this, "_extends"), _e(this, "_css"), _e(this, "_vueComponent"), _e(this, "_visibilityCondition"), _e(this, "_name"), _e(this, "_group");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.BASE_STYLE;
  }
  // Getters and Setters
  get extends() {
    return this._extends;
  }
  set extends(e) {
    const t = this._extends;
    this._extends = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.EXTENDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.EXTENDS,
      merge: () => !1
    });
  }
  get css() {
    return this._css;
  }
  set css(e) {
    const t = this._css;
    this._css = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.CSS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.CSS,
      merge: () => !1
    });
  }
  get vueComponent() {
    return this._vueComponent;
  }
  set vueComponent(e) {
    const t = this._vueComponent;
    this._vueComponent = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.VUE_COMPONENT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.VUE_COMPONENT,
      merge: () => !1
    });
  }
  get visibilityCondition() {
    return this._visibilityCondition;
  }
  set visibilityCondition(e) {
    const t = this._visibilityCondition;
    this._visibilityCondition = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.VISIBILITY_CONDITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.VISIBILITY_CONDITION,
      merge: () => !1
    });
  }
  get name() {
    return this._name;
  }
  set name(e) {
    this._name = e;
  }
  get group() {
    return this._group;
  }
  set group(e) {
    this._group = e;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case D.EXTENDS:
        return this.extends;
      case D.CSS:
        return this.css;
      case D.VUE_COMPONENT:
        return this.vueComponent;
      case D.VISIBILITY_CONDITION:
        return this.visibilityCondition;
      case D.NAME:
        return this.name;
      case D.GROUP:
        return this.group;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case D.EXTENDS:
        this.extends = t, super.eSet(e, t);
        break;
      case D.CSS:
        this.css = t, super.eSet(e, t);
        break;
      case D.VUE_COMPONENT:
        this.vueComponent = t, super.eSet(e, t);
        break;
      case D.VISIBILITY_CONDITION:
        this.visibilityCondition = t, super.eSet(e, t);
        break;
      case D.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case D.GROUP:
        this.group = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case D.EXTENDS:
        return this._extends !== void 0;
      case D.CSS:
        return this._css !== void 0;
      case D.VUE_COMPONENT:
        return this._vueComponent !== void 0;
      case D.VISIBILITY_CONDITION:
        return this._visibilityCondition !== void 0;
      case D.NAME:
        return this._name !== void 0;
      case D.GROUP:
        return this._group !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case D.EXTENDS:
        this._extends = void 0;
        return;
      case D.CSS:
        this._css = void 0;
        return;
      case D.VUE_COMPONENT:
        this._vueComponent = void 0;
        return;
      case D.VISIBILITY_CONDITION:
        this._visibilityCondition = void 0;
        return;
      case D.NAME:
        this._name = void 0;
        return;
      case D.GROUP:
        this._group = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
_e(ft, "EXTENDS", 2), _e(ft, "CSS", 3), _e(ft, "VUE_COMPONENT", 4), _e(ft, "VISIBILITY_CONDITION", 5), _e(ft, "NAME", 0), _e(ft, "GROUP", 1);
let xa = ft;
var nn = Object.defineProperty, ln = (s, e, t) => e in s ? nn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, br = (s, e, t) => ln(s, typeof e != "symbol" ? e + "" : e, t);
const ta = class Se extends xa {
  constructor() {
    super(...arguments), br(this, "_layout"), br(this, "_order");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.LAYOUT_STYLE;
  }
  // Getters and Setters
  get layout() {
    return this._layout;
  }
  set layout(e) {
    const t = this._layout;
    this._layout = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Se.LAYOUT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Se.LAYOUT,
      merge: () => !1
    });
  }
  get order() {
    return this._order;
  }
  set order(e) {
    const t = this._order;
    this._order = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Se.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Se.ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Se.LAYOUT:
        return this.layout;
      case Se.ORDER:
        return this.order;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case Se.LAYOUT:
        this.layout = t, super.eSet(e, t);
        break;
      case Se.ORDER:
        this.order = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Se.LAYOUT:
        return this._layout !== void 0;
      case Se.ORDER:
        return this._order !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Se.LAYOUT:
        this._layout = void 0;
        return;
      case Se.ORDER:
        this._order = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
br(ta, "LAYOUT", 6), br(ta, "ORDER", 7);
let on = ta;
var cn = Object.defineProperty, En = (s, e, t) => e in s ? cn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ve = (s, e, t) => En(s, typeof e != "symbol" ? e + "" : e, t);
const ss = class P extends xa {
  constructor() {
    super(...arguments), Ve(this, "_feature"), Ve(this, "_widgetType"), Ve(this, "_label"), Ve(this, "_readOnly"), Ve(this, "_order");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.WIDGET_STYLE;
  }
  // Getters and Setters
  get feature() {
    return this._feature;
  }
  set feature(e) {
    const t = this._feature;
    this._feature = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(P.FEATURE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.FEATURE,
      merge: () => !1
    });
  }
  get widgetType() {
    return this._widgetType;
  }
  set widgetType(e) {
    const t = this._widgetType;
    this._widgetType = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(P.WIDGET_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.WIDGET_TYPE,
      merge: () => !1
    });
  }
  get label() {
    return this._label;
  }
  set label(e) {
    const t = this._label;
    this._label = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(P.LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.LABEL,
      merge: () => !1
    });
  }
  get readOnly() {
    return this._readOnly;
  }
  set readOnly(e) {
    const t = this._readOnly;
    this._readOnly = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(P.READ_ONLY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.READ_ONLY,
      merge: () => !1
    });
  }
  get order() {
    return this._order;
  }
  set order(e) {
    const t = this._order;
    this._order = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(P.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case P.FEATURE:
        return this.feature;
      case P.WIDGET_TYPE:
        return this.widgetType;
      case P.LABEL:
        return this.label;
      case P.READ_ONLY:
        return this.readOnly;
      case P.ORDER:
        return this.order;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case P.FEATURE:
        this.feature = t, super.eSet(e, t);
        break;
      case P.WIDGET_TYPE:
        this.widgetType = t, super.eSet(e, t);
        break;
      case P.LABEL:
        this.label = t, super.eSet(e, t);
        break;
      case P.READ_ONLY:
        this.readOnly = t, super.eSet(e, t);
        break;
      case P.ORDER:
        this.order = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case P.FEATURE:
        return this._feature !== void 0;
      case P.WIDGET_TYPE:
        return this._widgetType !== void 0;
      case P.LABEL:
        return this._label !== void 0;
      case P.READ_ONLY:
        return this._readOnly !== void 0;
      case P.ORDER:
        return this._order !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case P.FEATURE:
        this._feature = void 0;
        return;
      case P.WIDGET_TYPE:
        this._widgetType = void 0;
        return;
      case P.LABEL:
        this._label = void 0;
        return;
      case P.READ_ONLY:
        this._readOnly = void 0;
        return;
      case P.ORDER:
        this._order = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ve(ss, "FEATURE", 6), Ve(ss, "WIDGET_TYPE", 7), Ve(ss, "LABEL", 8), Ve(ss, "READ_ONLY", 9), Ve(ss, "ORDER", 10);
let Xa = ss;
var hn = Object.defineProperty, gn = (s, e, t) => e in s ? hn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ha = (s, e, t) => gn(s, typeof e != "symbol" ? e + "" : e, t);
const ja = class St extends Xa {
  constructor() {
    super(...arguments), Ha(this, "_columns", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.TABLE_STYLE;
  }
  // Getters and Setters
  get columns() {
    return this._columns;
  }
  set columns(e) {
    const t = this._columns;
    this._columns = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(St.COLUMNS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => St.COLUMNS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case St.COLUMNS:
        return this.columns;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case St.COLUMNS:
        this.columns = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case St.COLUMNS:
        return this._columns !== void 0 && this._columns.length > 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case St.COLUMNS:
        this._columns = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ha(ja, "COLUMNS", 11);
let dn = ja;
var pn = Object.defineProperty, Tn = (s, e, t) => e in s ? pn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Mr = (s, e, t) => Tn(s, typeof e != "symbol" ? e + "" : e, t);
const sa = class me extends ct {
  constructor() {
    super(...arguments), Mr(this, "_language", "OCL"), Mr(this, "_body", "");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.EXPRESSION;
  }
  // Getters and Setters
  get language() {
    return this._language;
  }
  set language(e) {
    const t = this._language;
    this._language = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(me.LANGUAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => me.LANGUAGE,
      merge: () => !1
    });
  }
  get body() {
    return this._body;
  }
  set body(e) {
    const t = this._body;
    this._body = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(me.BODY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => me.BODY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case me.LANGUAGE:
        return this.language;
      case me.BODY:
        return this.body;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case me.LANGUAGE:
        this.language = t, super.eSet(e, t);
        break;
      case me.BODY:
        this.body = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case me.LANGUAGE:
        return this._language !== "OCL";
      case me.BODY:
        return this._body !== "";
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case me.LANGUAGE:
        this._language = "OCL";
        return;
      case me.BODY:
        this._body = "";
        return;
      default:
        super.eUnset(e);
    }
  }
};
Mr(sa, "LANGUAGE", 0), Mr(sa, "BODY", 1);
let qa = sa;
const Hr = {
  ERROR: "ERROR"
};
var fn = Object.defineProperty, Sn = (s, e, t) => e in s ? fn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Vr = (s, e, t) => Sn(s, typeof e != "symbol" ? e + "" : e, t);
const ra = class Ie extends qa {
  constructor() {
    super(...arguments), Vr(this, "_defaultMessage"), Vr(this, "_severity", Hr.ERROR);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.VALIDATION_EXPRESSION;
  }
  // Getters and Setters
  get defaultMessage() {
    return this._defaultMessage;
  }
  set defaultMessage(e) {
    const t = this._defaultMessage;
    this._defaultMessage = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ie.DEFAULT_MESSAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ie.DEFAULT_MESSAGE,
      merge: () => !1
    });
  }
  get severity() {
    return this._severity;
  }
  set severity(e) {
    const t = this._severity;
    this._severity = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ie.SEVERITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ie.SEVERITY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Ie.DEFAULT_MESSAGE:
        return this.defaultMessage;
      case Ie.SEVERITY:
        return this.severity;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case Ie.DEFAULT_MESSAGE:
        this.defaultMessage = t, super.eSet(e, t);
        break;
      case Ie.SEVERITY:
        this.severity = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Ie.DEFAULT_MESSAGE:
        return this._defaultMessage !== void 0;
      case Ie.SEVERITY:
        return this._severity !== Hr.ERROR;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Ie.DEFAULT_MESSAGE:
        this._defaultMessage = void 0;
        return;
      case Ie.SEVERITY:
        this._severity = Hr.ERROR;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Vr(ra, "DEFAULT_MESSAGE", 2), Vr(ra, "SEVERITY", 3);
let mn = ra;
var In = Object.defineProperty, Nn = (s, e, t) => e in s ? In(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, oe = (s, e, t) => Nn(s, typeof e != "symbol" ? e + "" : e, t);
const st = class O extends ct {
  constructor() {
    super(...arguments), oe(this, "_order"), oe(this, "_matchCode"), oe(this, "_matchSeverity"), oe(this, "_matchExpression"), oe(this, "_mappedText"), oe(this, "_mappedTextExpression"), oe(this, "_mappedSeverity");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.VALIDATION_MESSAGE_MAPPER;
  }
  // Getters and Setters
  get order() {
    return this._order;
  }
  set order(e) {
    const t = this._order;
    this._order = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(O.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.ORDER,
      merge: () => !1
    });
  }
  get matchCode() {
    return this._matchCode;
  }
  set matchCode(e) {
    const t = this._matchCode;
    this._matchCode = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(O.MATCH_CODE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.MATCH_CODE,
      merge: () => !1
    });
  }
  get matchSeverity() {
    return this._matchSeverity;
  }
  set matchSeverity(e) {
    const t = this._matchSeverity;
    this._matchSeverity = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(O.MATCH_SEVERITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.MATCH_SEVERITY,
      merge: () => !1
    });
  }
  get matchExpression() {
    return this._matchExpression;
  }
  set matchExpression(e) {
    const t = this._matchExpression;
    this._matchExpression = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(O.MATCH_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.MATCH_EXPRESSION,
      merge: () => !1
    });
  }
  get mappedText() {
    return this._mappedText;
  }
  set mappedText(e) {
    const t = this._mappedText;
    this._mappedText = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(O.MAPPED_TEXT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.MAPPED_TEXT,
      merge: () => !1
    });
  }
  get mappedTextExpression() {
    return this._mappedTextExpression;
  }
  set mappedTextExpression(e) {
    const t = this._mappedTextExpression;
    this._mappedTextExpression = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(O.MAPPED_TEXT_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.MAPPED_TEXT_EXPRESSION,
      merge: () => !1
    });
  }
  get mappedSeverity() {
    return this._mappedSeverity;
  }
  set mappedSeverity(e) {
    const t = this._mappedSeverity;
    this._mappedSeverity = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(O.MAPPED_SEVERITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.MAPPED_SEVERITY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case O.ORDER:
        return this.order;
      case O.MATCH_CODE:
        return this.matchCode;
      case O.MATCH_SEVERITY:
        return this.matchSeverity;
      case O.MATCH_EXPRESSION:
        return this.matchExpression;
      case O.MAPPED_TEXT:
        return this.mappedText;
      case O.MAPPED_TEXT_EXPRESSION:
        return this.mappedTextExpression;
      case O.MAPPED_SEVERITY:
        return this.mappedSeverity;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case O.ORDER:
        this.order = t, super.eSet(e, t);
        break;
      case O.MATCH_CODE:
        this.matchCode = t, super.eSet(e, t);
        break;
      case O.MATCH_SEVERITY:
        this.matchSeverity = t, super.eSet(e, t);
        break;
      case O.MATCH_EXPRESSION:
        this.matchExpression = t, super.eSet(e, t);
        break;
      case O.MAPPED_TEXT:
        this.mappedText = t, super.eSet(e, t);
        break;
      case O.MAPPED_TEXT_EXPRESSION:
        this.mappedTextExpression = t, super.eSet(e, t);
        break;
      case O.MAPPED_SEVERITY:
        this.mappedSeverity = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case O.ORDER:
        return this._order !== void 0;
      case O.MATCH_CODE:
        return this._matchCode !== void 0;
      case O.MATCH_SEVERITY:
        return this._matchSeverity !== void 0;
      case O.MATCH_EXPRESSION:
        return this._matchExpression !== void 0;
      case O.MAPPED_TEXT:
        return this._mappedText !== void 0;
      case O.MAPPED_TEXT_EXPRESSION:
        return this._mappedTextExpression !== void 0;
      case O.MAPPED_SEVERITY:
        return this._mappedSeverity !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case O.ORDER:
        this._order = void 0;
        return;
      case O.MATCH_CODE:
        this._matchCode = void 0;
        return;
      case O.MATCH_SEVERITY:
        this._matchSeverity = void 0;
        return;
      case O.MATCH_EXPRESSION:
        this._matchExpression = void 0;
        return;
      case O.MAPPED_TEXT:
        this._mappedText = void 0;
        return;
      case O.MAPPED_TEXT_EXPRESSION:
        this._mappedTextExpression = void 0;
        return;
      case O.MAPPED_SEVERITY:
        this._mappedSeverity = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
oe(st, "ORDER", 0), oe(st, "MATCH_CODE", 1), oe(st, "MATCH_SEVERITY", 2), oe(st, "MATCH_EXPRESSION", 3), oe(st, "MAPPED_TEXT", 4), oe(st, "MAPPED_TEXT_EXPRESSION", 5), oe(st, "MAPPED_SEVERITY", 6);
let Ln = st;
var vn = Object.defineProperty, _n = (s, e, t) => e in s ? vn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, On = (s, e, t) => _n(s, e + "", t);
const za = class Ka extends Fi {
  static get eINSTANCE() {
    return this._instance || (this._instance = new Ka()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(y.eINSTANCE);
  }
  /**
   * Create a new UIModel instance
   */
  createUIModel() {
    return new xi();
  }
  /**
   * Create a new FormView instance
   */
  createFormView() {
    return new zi();
  }
  /**
   * Create a new TableView instance
   */
  createTableView() {
    return new Ji();
  }
  /**
   * Create a new SectionView instance
   */
  createSectionView() {
    return new tu();
  }
  /**
   * Create a new TabView instance
   */
  createTabView() {
    return new au();
  }
  /**
   * Create a new SummaryView instance
   */
  createSummaryView() {
    return new nu();
  }
  /**
   * Create a new MasterDetail instance
   */
  createMasterDetail() {
    return new cu();
  }
  /**
   * Create a new PropertyBinding instance
   */
  createPropertyBinding() {
    return new gu();
  }
  /**
   * Create a new InputWidget instance
   */
  createInputWidget() {
    return new Su();
  }
  /**
   * Create a new TextAreaWidget instance
   */
  createTextAreaWidget() {
    return new Nu();
  }
  /**
   * Create a new NumberWidget instance
   */
  createNumberWidget() {
    return new _u();
  }
  /**
   * Create a new CheckboxWidget instance
   */
  createCheckboxWidget() {
    return new Cu();
  }
  /**
   * Create a new DateWidget instance
   */
  createDateWidget() {
    return new Ru();
  }
  /**
   * Create a new ComboboxWidget instance
   */
  createComboboxWidget() {
    return new Pu();
  }
  /**
   * Create a new SelectWidget instance
   */
  createSelectWidget() {
    return new Vu();
  }
  /**
   * Create a new AllFeatures instance
   */
  createAllFeatures() {
    return new Gu();
  }
  /**
   * Create a new TemplateCase instance
   */
  createTemplateCase() {
    return new $u();
  }
  /**
   * Create a new GroupWidget instance
   */
  createGroupWidget() {
    return new Xu();
  }
  /**
   * Create a new Conditional instance
   */
  createConditional() {
    return new qu();
  }
  /**
   * Create a new ForEach instance
   */
  createForEach() {
    return new Qu();
  }
  /**
   * Create a new ReferenceLinkWidget instance
   */
  createReferenceLinkWidget() {
    return new en();
  }
  /**
   * Create a new UIModelOverlay instance
   */
  createUIModelOverlay() {
    return new rn();
  }
  /**
   * Create a new LayoutStyle instance
   */
  createLayoutStyle() {
    return new on();
  }
  /**
   * Create a new WidgetStyle instance
   */
  createWidgetStyle() {
    return new Xa();
  }
  /**
   * Create a new TableStyle instance
   */
  createTableStyle() {
    return new dn();
  }
  /**
   * Create a new Expression instance
   */
  createExpression() {
    return new qa();
  }
  /**
   * Create a new ValidationExpression instance
   */
  createValidationExpression() {
    return new mn();
  }
  /**
   * Create a new ValidationMessageMapper instance
   */
  createValidationMessageMapper() {
    return new Ln();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "UIModel":
        return this.createUIModel();
      case "FormView":
        return this.createFormView();
      case "TableView":
        return this.createTableView();
      case "SectionView":
        return this.createSectionView();
      case "TabView":
        return this.createTabView();
      case "SummaryView":
        return this.createSummaryView();
      case "MasterDetail":
        return this.createMasterDetail();
      case "PropertyBinding":
        return this.createPropertyBinding();
      case "InputWidget":
        return this.createInputWidget();
      case "TextAreaWidget":
        return this.createTextAreaWidget();
      case "NumberWidget":
        return this.createNumberWidget();
      case "CheckboxWidget":
        return this.createCheckboxWidget();
      case "DateWidget":
        return this.createDateWidget();
      case "ComboboxWidget":
        return this.createComboboxWidget();
      case "SelectWidget":
        return this.createSelectWidget();
      case "AllFeatures":
        return this.createAllFeatures();
      case "TemplateCase":
        return this.createTemplateCase();
      case "GroupWidget":
        return this.createGroupWidget();
      case "Conditional":
        return this.createConditional();
      case "ForEach":
        return this.createForEach();
      case "ReferenceLinkWidget":
        return this.createReferenceLinkWidget();
      case "UIModelOverlay":
        return this.createUIModelOverlay();
      case "LayoutStyle":
        return this.createLayoutStyle();
      case "WidgetStyle":
        return this.createWidgetStyle();
      case "TableStyle":
        return this.createTableStyle();
      case "Expression":
        return this.createExpression();
      case "ValidationExpression":
        return this.createValidationExpression();
      case "ValidationMessageMapper":
        return this.createValidationMessageMapper();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
};
On(za, "_instance");
let Ea = za;
const Qa = Symbol("uimodelComposerRegistry");
function Ja() {
  const s = ot(Qa);
  if (!s)
    throw new Error(
      "[uimodel-composer] No ComposerRegistry provided. Make sure UIModelComposer is an ancestor of this component."
    );
  return s;
}
function An(s) {
  const e = new Map(
    s ? Object.entries(s) : []
  );
  return {
    getComposer(t) {
      return e.get(t);
    },
    register(t, r) {
      e.set(t, r);
    }
  };
}
const Cn = "uic";
function gr(s) {
  return s === !0 || s === "true";
}
function It(s, e = 0) {
  if (typeof s == "number") return s;
  const t = Number(s);
  return Number.isFinite(t) ? t : e;
}
const yn = {
  HOVER: ":hover",
  FOCUS: ":focus",
  FOCUS_WITHIN: ":focus-within",
  ACTIVE: ":active",
  DISABLED: ".uim-s-disabled",
  READONLY: ".uim-s-readonly",
  INVALID: ".uim-s-invalid",
  REQUIRED: ".uim-s-required"
};
function Gr(s) {
  return s.trim().replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() || "unnamed";
}
function aa(s) {
  return `--${Cn}-${Gr(s)}`;
}
function Dn(s) {
  return s.replace(/token\(\s*([^)]+?)\s*\)/g, (e, t) => `var(${aa(t)})`);
}
function Za(s) {
  return `uic-${Gr(s)}`;
}
function Rn(s) {
  return `uicss-theme-${Gr(s)}`;
}
function ei(s, e) {
  return `uicss-cond-${Gr(s.name ?? "sheet")}-${e}`;
}
function ti(s, e = "  ") {
  return s.filter((t) => t.property && t.value !== void 0).map((t) => `${e}${t.property.trim()}: ${Dn(t.value)}${gr(t.important) ? " !important" : ""};`).join(`
`);
}
function wn(s, e) {
  return e.filter((t) => t.declarations.length > 0).map((t) => {
    var r, i;
    const u = ((i = (r = t.state) == null ? void 0 : r.getName) == null ? void 0 : i.call(r)) ?? String(t.state), n = yn[u] ?? `:${u.toLowerCase()}`;
    return `${s}${n} {
${ti(t.declarations)}
}`;
  }).join(`
`);
}
function va(s, e, t, r) {
  const i = [];
  e.length > 0 && i.push(`${s} {
${ti(e)}
}`);
  const u = wn(s, t);
  if (u && i.push(u), i.length === 0) return "";
  const n = i.join(`
`);
  return r ? `@media ${r} {
${n}
}` : n;
}
function si(s) {
  return s.includeSubtypes === void 0 || s.includeSubtypes === null ? !0 : gr(s.includeSubtypes);
}
function Fn(s, e, t) {
  var r, i;
  let u;
  const n = (i = (r = e.targetClass) == null ? void 0 : r.getName) == null ? void 0 : i.call(r);
  return n ? u = si(e) ? `.uim-c-${n}` : `.uim-component[data-uim-eclass="${n}"]` : u = ".uim-component", e.componentName && (u += `[data-uim-name="${e.componentName}"]`), e.group && (u += `[data-uim-group="${e.group}"]`), e.condition && (u += `.${ei(s, t)}`), u;
}
function Pn(s) {
  const e = new Set(s), t = [], r = /* @__PURE__ */ new Set();
  function i(u, n) {
    if (r.has(u) || n.has(u)) return;
    n.add(u);
    const l = u.extends;
    l && e.has(l) && i(l, n), n.delete(u), r.add(u), t.push(u);
  }
  for (const u of s) i(u, /* @__PURE__ */ new Set());
  return t;
}
function bn(s) {
  const e = [];
  if (s.tokens.length > 0) {
    const r = s.tokens.filter((i) => i.name).map((i) => `  ${aa(i.name)}: ${i.value ?? ""};`);
    e.push(`:root, .uicss-scope {
${r.join(`
`)}
}`);
  }
  for (const r of s.themes) {
    if (!r.name) continue;
    const i = r.overrides.filter((u) => {
      var n;
      return (n = u.token) == null ? void 0 : n.name;
    }).map((u) => `  ${aa(u.token.name)}: ${u.value ?? ""};`);
    gr(r.dark) && i.push("  color-scheme: dark;"), i.length > 0 && e.push(`.${Rn(r.name)} {
${i.join(`
`)}
}`);
  }
  const t = s.rules.map((r, i) => ({ rule: r, index: i }));
  t.sort((r, i) => It(r.rule.priority) - It(i.rule.priority) || r.index - i.index);
  for (const { rule: r, index: i } of t) {
    const u = va(
      Fn(s, r, i),
      r.declarations,
      r.states,
      r.media || void 0
    );
    u && e.push(u);
  }
  for (const r of Pn(s.styles)) {
    if (!r.name) continue;
    const i = va(`.${Za(r.name)}`, r.declarations, r.states);
    i && e.push(i);
  }
  return e.join(`

`);
}
function Mn(s) {
  return s.map(bn).filter(Boolean).join(`

`);
}
const pr = Symbol("uimodel-css:sheets");
let Vn = 0;
function Un(s) {
  const e = dr(0);
  class t extends Ma {
    notifyChanged(E) {
      var g;
      try {
        super.notifyChanged(E);
      } catch {
      }
      if (!((g = E.isTouch) != null && g.call(E))) {
        e.value++;
        for (const o of i) n(o);
      }
    }
  }
  const r = new t();
  let i = [];
  function u(c) {
    const E = c;
    E.eAdapters().includes(r) || (E.eAdapterAdd ? E.eAdapterAdd(r) : E.eAdapters().push(r));
  }
  function n(c) {
    u(c);
    for (const E of c.eAllContents()) u(E);
  }
  function l(c) {
    const E = c;
    if (E.eAdapterRemove)
      E.eAdapterRemove(r);
    else {
      const g = E.eAdapters(), o = g.indexOf(r);
      o >= 0 && g.splice(o, 1);
    }
  }
  function h() {
    for (const c of i) {
      l(c);
      for (const E of c.eAllContents()) l(E);
    }
    i = [];
  }
  return os(
    () => [...Xe(s)],
    (c) => {
      h();
      for (const E of c)
        n(E), i.push(E);
      e.value++;
    },
    { immediate: !0 }
  ), la(h), { css: T(() => (e.value, Mn([...Xe(s)]))), version: e };
}
function Bn(s) {
  const { css: e, version: t } = Un(s);
  if (typeof document < "u") {
    const r = document.createElement("style");
    r.id = `uimodel-css-${++Vn}`, r.setAttribute("data-uimodel-css", ""), document.head.appendChild(r), Ai(() => {
      r.textContent = e.value;
    }), la(() => {
      r.remove();
    });
  }
  return { css: e, version: t };
}
function mr(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? ls(e) : s;
}
function ls(s) {
  return new Proxy(s, {
    get(e, t) {
      var r, i, u;
      if (typeof t != "string") return e[t];
      if (t === "eGet")
        return (h) => {
          var c, E, g;
          if (typeof h == "string") {
            const o = (g = (E = (c = e.eClass) == null ? void 0 : c.call(e)) == null ? void 0 : E.getEStructuralFeature) == null ? void 0 : g.call(E, h);
            return o ? mr(e.eGet(o)) : void 0;
          }
          return mr(e.eGet(h));
        };
      if (t in e) return e[t];
      const n = t.charAt(0).toUpperCase() + t.slice(1);
      for (const h of [`get${n}`, `is${n}`])
        if (typeof e[h] == "function") return mr(e[h]());
      const l = (u = (i = (r = e.eClass) == null ? void 0 : r.call(e)) == null ? void 0 : i.getEStructuralFeature) == null ? void 0 : u.call(i, t);
      if (l) return mr(e.eGet(l));
    }
  });
}
function Tr(s, e) {
  if (!s) return !0;
  try {
    switch (s.language) {
      case "OCL":
        return Gn(s.body, e);
      case "AQL":
        return Wn(s.body, e);
      case "JS":
        return Yn(s.body, e);
      default:
        return console.warn(`[uimodel-composer] Unknown expression language: ${s.language}`), !0;
    }
  } catch (t) {
    return console.error(`[uimodel-composer] Expression evaluation failed (${s.language}):`, t), !0;
  }
}
function Gn(s, e) {
  try {
    const { EMFOclValidator: t } = globalThis.__emftsOcl__ ?? {};
    return t ? new t().evaluateExpression(s, ls(e)) === !0 : (console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup."), !0);
  } catch {
    return !0;
  }
}
function Wn(s, e) {
  return console.warn("[uimodel-composer] AQL evaluation not yet implemented."), !0;
}
function Yn(s, e) {
  return !!new Function("self", `"use strict"; return (${s});`)(ls(e));
}
function $n(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? ls(e) : s;
}
function Wr(s, e, t = {}) {
  if (s != null && s.body)
    try {
      switch (s.language) {
        case "JS": {
          const r = Object.keys(t);
          return new Function("self", ...r, `"use strict"; return (${s.body});`)(ls(e), ...r.map((i) => $n(t[i])));
        }
        case "OCL": {
          const { EMFOclValidator: r } = globalThis.__emftsOcl__ ?? {};
          if (!r) {
            console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup.");
            return;
          }
          return new r().evaluateExpression(s.body, ls(e));
        }
        default:
          console.warn(`[uimodel-composer] evaluateValue: unsupported language ${s.language}`);
          return;
      }
    } catch (r) {
      console.error(`[uimodel-composer] Value expression failed (${s.language}):`, r);
      return;
    }
}
function kn(s) {
  return s.map((e, t) => ({ overlay: e, index: t })).sort((e, t) => It(t.overlay.priority) - It(e.overlay.priority) || e.index - t.index).flatMap(({ overlay: e }) => [...e.cases ?? []]);
}
function ri(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "AllFeatures";
}
function xn(s) {
  var e;
  const t = (e = s.eClass) == null ? void 0 : e.call(s);
  return t ? t.getName() === "WidgetComponent" || t.getEAllSuperTypes().some((r) => r.getName() === "WidgetComponent") : !1;
}
function ai(s) {
  return typeof s.isContainment == "function";
}
function Xn(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    ri(i) ? e.push(i) : xn(i) && i.feature && t.add(i.feature);
    for (const u of i.eClass().getEAllStructuralFeatures()) {
      if (!ai(u) || !u.isContainment()) continue;
      const n = i.eGet(u);
      if (!n) continue;
      const l = u.isMany() ? [...n] : [n];
      for (const h of l) r(h);
    }
  }
  return r(s), { blocks: e, boundFeatures: t };
}
function Ar(s) {
  var e;
  return (((e = s.with) == null ? void 0 : e.length) ?? 0) > 0;
}
function Hn(s, e) {
  var t;
  const r = s.getEAllStructuralFeatures();
  if (Ar(e)) {
    const u = new Set(r);
    return e.with.filter((n) => u.has(n));
  }
  let i = r;
  if ((((t = e.eType) == null ? void 0 : t.length) ?? 0) > 0) {
    const u = new Set(e.eType);
    i = i.filter((n) => {
      const l = n.getEType();
      return l != null && u.has(l);
    });
  }
  return e.filter && (i = i.filter(
    (u) => Tr(e.filter, u)
  )), i;
}
function jn(s, e) {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const u of e.blocks)
    t.set(u, []), r.set(u, new Set(Hn(s, u)));
  const i = new Map(
    e.blocks.map((u, n) => [u, n])
  );
  for (const u of s.getEAllStructuralFeatures()) {
    if (e.boundFeatures.has(u)) continue;
    let n;
    for (const l of e.blocks) {
      if (!r.get(l).has(u)) continue;
      if (!n) {
        n = l;
        continue;
      }
      const h = It(l.priority) - It(n.priority), c = Number(Ar(l)) - Number(Ar(n)), E = i.get(n) - i.get(l);
      (h > 0 || h === 0 && (c > 0 || c === 0 && E > 0)) && (n = l);
    }
    n && t.get(n).push(u);
  }
  for (const [u, n] of t) {
    if (!Ar(u)) continue;
    const l = new Map(u.with.map((h, c) => [h, c]));
    n.sort((h, c) => (l.get(h) ?? 0) - (l.get(c) ?? 0));
  }
  return t;
}
function _a(s, e) {
  for (const t of s ?? [])
    if (t.widget && (!t.when || Wr(
      t.when,
      e
    )))
      return t.widget;
}
function qn(s, e, t) {
  return _a(t?.overlayCases, e) ?? _a(s.cases, e) ?? s.template;
}
function Ur(s) {
  var e, t, r;
  const i = s.eClass(), u = (e = i.getEPackage()) == null ? void 0 : e.getEFactoryInstance();
  if (!u) throw new Error(`Keine Factory für ${i.getName()}`);
  const n = u.create(i);
  for (const l of i.getEAllStructuralFeatures()) {
    if ((t = l.isDerived) != null && t.call(l) || ((r = l.isChangeable) == null ? void 0 : r.call(l)) === !1) continue;
    const h = s.eGet(l);
    if (h == null) continue;
    const c = ai(l) && l.isContainment();
    if (l.isMany()) {
      const E = [...h];
      if (E.length === 0) continue;
      n.eSet(
        l,
        c ? E.map((g) => Ur(g)) : E
      );
    } else
      n.eSet(l, c ? Ur(h) : h);
  }
  return n;
}
const zn = /* @__PURE__ */ new Set(["AllFeatures", "Conditional", "ForEach"]);
function jr(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function ii(s, e) {
  if (jr(s) !== "GroupWidget") {
    s.feature = e;
    return;
  }
  const t = s.fields ?? [];
  for (const r of t)
    zn.has(jr(r)) || (jr(r) === "GroupWidget" ? ii(r, e) : !r.feature && !(r.bindings ?? []).some((i) => i.property === "feature") && (r.feature = e));
}
function Kn(s, e) {
  const t = Ea.eINSTANCE.createValidationExpression();
  return t.language = "JS", t.body = `self.${s} !== null && self.${s} !== undefined && String(self.${s}).length > 0`, t.defaultMessage = `${e ?? s} ist erforderlich.`, t.severity = "ERROR", t;
}
function Qn(s) {
  const e = s.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Jn(s, e, t) {
  var r, i, u, n;
  const l = t ?? {
    blocks: [e],
    boundFeatures: /* @__PURE__ */ new Set()
  };
  l.blocks.includes(e) || l.blocks.push(e);
  const h = jn(s, l).get(e) ?? [], c = [];
  for (const E of h) {
    const g = qn(e, E, l);
    if (!g) {
      console.error(
        `[uimodel-composer] AllFeatures "${e.name ?? "?"}": kein TemplateCase trifft auf Feature "${E.getName() ?? "?"}" und kein Default-Fall (template) gesetzt.`
      );
      continue;
    }
    const o = Ur(g);
    ii(o, E);
    const d = E.getName() ?? "feature";
    o.name = d, o.label === void 0 && e.label !== void 0 && (o.label = e.label), o.placeholder === void 0 && e.placeholder !== void 0 && (o.placeholder = e.placeholder), o.readOnly === void 0 && e.readOnly !== void 0 && (o.readOnly = e.readOnly), o.required === void 0 && e.required !== void 0 && (o.required = e.required), (((r = o.styles) == null ? void 0 : r.length) ?? 0) === 0 && (((i = e.styles) == null ? void 0 : i.length) ?? 0) > 0 && (o.styles = [...e.styles]), o.label || (o.label = Qn(d)), !o.group && e.group && (o.group = e.group), o.required === void 0 && It((u = E.getLowerBound) == null ? void 0 : u.call(E)) >= 1 && (o.required = !0, (((n = o.validations) == null ? void 0 : n.length) ?? 0) === 0 && (o.validations = [Kn(d, o.label)]));
    const V = e.bindings ?? [];
    if (V.length > 0) {
      const B = new Set((o.bindings ?? []).map((f) => f.property)), p = V.filter((f) => f.property && !B.has(f.property)).map((f) => Ur(f));
      p.length > 0 && (o.bindings = [...o.bindings ?? [], ...p]);
    }
    c.push(o);
  }
  return c;
}
const ui = Symbol("uimodel:allfeatures-context"), ni = dr(0);
function Zn() {
  ni.value++;
}
function Lt() {
  ni.value;
}
function el(s) {
  class e extends Ma {
    notifyChanged(l) {
      var h;
      try {
        super.notifyChanged(l);
      } catch {
      }
      if ((h = l.isTouch) != null && h.call(l)) return;
      Zn();
      const c = Xe(s);
      c && i(c);
    }
  }
  const t = new e();
  function r(n) {
    const l = n;
    l.eAdapters().includes(t) || (l.eAdapterAdd ? l.eAdapterAdd(t) : l.eAdapters().push(t));
  }
  function i(n) {
    r(n);
    for (const l of n.eAllContents()) r(l);
  }
  function u(n) {
    const l = (h) => {
      const c = h;
      if (c.eAdapterRemove)
        c.eAdapterRemove(t);
      else {
        const E = c.eAdapters(), g = E.indexOf(t);
        g >= 0 && E.splice(g, 1);
      }
    };
    l(n);
    for (const h of n.eAllContents()) l(h);
  }
  os(
    () => Xe(s),
    (n, l) => {
      l && u(l), n && i(n);
    },
    { immediate: !0 }
  ), la(() => {
    const n = Xe(s);
    n && u(n);
  });
}
function li(s) {
  var e;
  if (!s) return [];
  const t = [], r = /* @__PURE__ */ new Set(), i = (u) => {
    var n;
    const l = (n = u.getName) == null ? void 0 : n.call(u);
    l && !r.has(l) && (r.add(l), t.push(l));
  };
  i(s);
  for (const u of ((e = s.getEAllSuperTypes) == null ? void 0 : e.call(s)) ?? []) i(u);
  return t;
}
function tl(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "CssStyle";
}
function sl(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    !i || t.has(i) || (t.add(i), r(i.extends), tl(i) && i.name && e.push(Za(i.name)));
  }
  for (const i of s ?? []) r(i);
  return e;
}
function rl(s, e) {
  var t, r, i;
  const u = (r = (t = s.targetClass) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  if (u) {
    const n = li((i = e.eClass) == null ? void 0 : i.call(e));
    if (si(s)) {
      if (!n.includes(u)) return !1;
    } else if (n[0] !== u)
      return !1;
  }
  return !(s.componentName && e.name !== s.componentName || s.group && e.group !== s.group);
}
function ha(s, e = {}) {
  var t;
  const r = ["uim-component"];
  for (const i of li((t = s.eClass) == null ? void 0 : t.call(s)))
    r.push(`uim-c-${i}`);
  r.push(...sl(s.styles)), e.resolvedCss && r.push(...e.resolvedCss.split(/\s+/).filter(Boolean));
  for (const i of e.sheets ?? [])
    i.rules.forEach((u, n) => {
      u.condition && rl(u, s) && e.model && Tr(u.condition, e.model) && r.push(ei(i, n));
    });
  return [...new Set(r)];
}
function ga(s) {
  var e, t, r;
  const i = {}, u = (r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  return u && (i["data-uim-eclass"] = u), s.name && (i["data-uim-name"] = s.name), s.group && (i["data-uim-group"] = s.group), i;
}
function al(s, e, t) {
  const r = [];
  return gr(t ?? s.required) && r.push("uim-s-required"), gr(e ?? s.readOnly) && r.push("uim-s-readonly"), r;
}
function oi(s, e = /* @__PURE__ */ new Set()) {
  if (!s) return {};
  if (e.has(s)) return {};
  e.add(s);
  const t = s.extends ? oi(s.extends, e) : {}, r = il(s);
  return Ei(t, r);
}
function ci(s) {
  return s.reduce(
    (e, t) => Ei(e, oi(t)),
    {}
  );
}
function il(s) {
  const e = {};
  s.css !== void 0 && (e.css = s.css), s.vueComponent !== void 0 && (e.vueComponent = s.vueComponent);
  const t = s;
  t.layout !== void 0 && (e.layout = t.layout), t.order !== void 0 && (e.order = t.order);
  const r = s;
  return r.widgetType !== void 0 && (e.widgetType = r.widgetType), r.label !== void 0 && (e.label = r.label), r.readOnly !== void 0 && (e.readOnly = r.readOnly), r.order !== void 0 && (e.order = r.order), e;
}
function Ei(s, e) {
  return {
    ...s,
    ...Object.fromEntries(
      Object.entries(e).filter(([, t]) => t !== void 0)
    ),
    // Merge CSS classes (append, not replace)
    css: [s.css, e.css].filter(Boolean).join(" ") || void 0
  };
}
const da = /* @__PURE__ */ se({
  __name: "ComponentDispatcher",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = s, t = Ja(), r = T(() => {
      var l, h, c, E;
      const g = ((E = (c = (h = (l = e.component).eClass) == null ? void 0 : h.call(l)) == null ? void 0 : c.getName) == null ? void 0 : E.call(c)) ?? "", o = t.getComposer(g);
      return o || console.warn(`[uimodel-composer] No composer registered for EClass "${g}"`), o ?? null;
    }), i = ot(pr, void 0), u = T(() => (Lt(), i?.version.value, ha(e.component, {
      model: e.model,
      sheets: i?.sheets.value,
      resolvedCss: ci(e.component.styles ?? []).css
    }))), n = T(() => ga(e.component));
    return (l, h) => r.value ? (I(), H(oa(r.value), ca({
      key: 0,
      component: s.component,
      model: s.model,
      class: u.value
    }, n.value), null, 16, ["component", "model", "class"])) : ne("", !0);
  }
});
function pa(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function ul(s) {
  return pa(s) === "GroupWidget";
}
function nl(s) {
  return pa(s) === "Conditional";
}
function ll(s) {
  return pa(s) === "ForEach";
}
function ol(s) {
  if (!s) return [];
  const e = typeof s == "object" && Symbol.iterator in s ? s : [s], t = [];
  for (const r of e)
    r && typeof r.eClass == "function" ? t.push(r) : r != null && console.warn("[uimodel-composer] ForEach: Element ist kein EObject und wird übersprungen:", r);
  return t;
}
function ia(s, e, t) {
  var r;
  const i = [];
  for (const u of s ?? [])
    if (ri(u)) {
      const n = (r = e.eClass) == null ? void 0 : r.call(e);
      if (!n) continue;
      for (const l of Jn(n, u, t))
        i.push({ kind: "widget", widget: l, model: e });
    } else if (nl(u)) {
      const n = Tr(u.condition, e) ? u.then : u.else;
      i.push(...ia(n, e, t));
    } else if (ll(u)) {
      const n = ol(Wr(u.items, e));
      if (n.length === 0) {
        u.emptyText && i.push({ kind: "note", text: u.emptyText });
        continue;
      }
      for (const l of n)
        i.push(...ia(u.body, l, t));
    } else ul(u) ? i.push({ kind: "group", widget: u, model: e }) : i.push({ kind: "widget", widget: u, model: e });
  return i;
}
function hi(s, e) {
  return T(() => (Lt(), Tr(Xe(s), Xe(e))));
}
const cl = /* @__PURE__ */ new Set([
  "readOnly",
  "required",
  "password",
  "asToggle",
  "multiSelect",
  "asButtonGroup",
  "withTime"
]), El = /* @__PURE__ */ new Set([
  "maxLength",
  "rows",
  "min",
  "max",
  "step",
  "minSearchLength",
  "order"
]);
function hl(s, e) {
  if (e === null) return s === "feature" ? null : void 0;
  if (s === "feature") return e;
  if (cl.has(s)) return !!e;
  if (El.has(s)) {
    const t = Number(e);
    return Number.isFinite(t) ? t : void 0;
  }
  return String(e);
}
function gl(s, e) {
  var t;
  const r = { values: {}, featureSuppressed: !1 };
  for (const i of s.bindings ?? []) {
    const u = i.property;
    if (!u || !i.expression) continue;
    const n = Wr(i.expression, e, {
      feature: s.feature,
      eClass: (t = e.eClass) == null ? void 0 : t.call(e)
    });
    if (n === void 0) continue;
    if (u === "feature") {
      n === null ? r.featureSuppressed = !0 : r.feature = n;
      continue;
    }
    const l = hl(u, n);
    l !== void 0 && (r.values[u] = l);
  }
  return r;
}
function gi(s, e) {
  return T(() => {
    var t;
    Lt();
    const r = Xe(s), i = ci(r.styles), u = {
      ...r.label !== void 0 ? { label: r.label } : {},
      ...r.placeholder !== void 0 ? { placeholder: r.placeholder } : {},
      ...r.readOnly !== void 0 ? { readOnly: r.readOnly } : {},
      ...r.required !== void 0 ? { required: r.required } : {}
    }, n = e ? Xe(e) : void 0;
    if (!n || (((t = r.bindings) == null ? void 0 : t.length) ?? 0) === 0)
      return { ...i, ...u };
    const l = gl(r, n);
    return {
      ...i,
      ...u,
      ...l.values,
      boundFeature: l.feature,
      featureSuppressed: l.featureSuppressed
    };
  });
}
var ee = /* @__PURE__ */ ((s) => (s[s.DEFAULT = 0] = "DEFAULT", s[s.DATA_TYPE = 100] = "DATA_TYPE", s[s.ECLASS = 200] = "ECLASS", s[s.FEATURE = 300] = "FEATURE", s[s.PACKAGE = 400] = "PACKAGE", s[s.INSTANCE = 500] = "INSTANCE", s[s.OVERRIDE = 1e3] = "OVERRIDE", s))(ee || {});
function te() {
  return { matches: !1, priority: 0 };
}
function Ce(s) {
  return { matches: !0, priority: s };
}
let dl = class {
  constructor(e) {
    this.eClass = e;
  }
  /**
   * Match the context against this EClass.
   * Exact matches get higher priority than supertype matches.
   */
  match(e) {
    const t = e.eClass;
    if (!t)
      return te();
    if (t === this.eClass)
      return Ce(ee.ECLASS + 50);
    if (t.getName() === this.eClass.getName()) {
      const r = t.getEPackage(), i = this.eClass.getEPackage();
      if (r && i && r.getNsURI() === i.getNsURI())
        return Ce(ee.ECLASS + 50);
    }
    return this.isSuperTypeOf(this.eClass, t) ? Ce(ee.ECLASS) : te();
  }
  /**
   * Check if eClass is a supertype of potentialSubType.
   */
  isSuperTypeOf(e, t) {
    const r = t.getEAllSuperTypes();
    if (!r) return !1;
    for (const i of r) {
      if (i === e) return !0;
      if (i.getName() === e.getName()) {
        const u = i.getEPackage(), n = e.getEPackage();
        if (u && n && u.getNsURI() === n.getNsURI())
          return !0;
      }
    }
    return !1;
  }
}, pl = class {
  constructor(e) {
    this.dataTypeName = e;
  }
  /**
   * Match the context against this data type name.
   */
  match(e) {
    var t, r;
    const i = e.feature || e.attribute;
    if (!i || !this.isEAttribute(i))
      return te();
    const u = (t = i.getEType) == null ? void 0 : t.call(i);
    return u && ((r = u.getName) == null ? void 0 : r.call(u)) === this.dataTypeName ? Ce(ee.DATA_TYPE) : te();
  }
  /**
   * Check if the feature is an EAttribute.
   */
  isEAttribute(e) {
    var t, r;
    return !e || typeof e != "object" ? !1 : "getEAttributeType" in e || "eClass" in e && typeof e.eClass == "function" && ((r = (t = e.eClass()) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "EAttribute";
  }
}, Tl = class {
  constructor(e) {
    this.enumName = e;
  }
  /**
   * Match the context for enum types.
   */
  match(e) {
    var t;
    if (e.enumType)
      return this.matchEnum(e.enumType);
    const r = e.feature || e.attribute;
    if (r && this.isEAttribute(r)) {
      const i = (t = r.getEType) == null ? void 0 : t.call(r);
      if (i && this.isEEnum(i))
        return this.matchEnum(i);
    }
    return te();
  }
  /**
   * Match against a specific enum.
   */
  matchEnum(e) {
    var t;
    return this.enumName ? ((t = e.getName) == null ? void 0 : t.call(e)) === this.enumName ? Ce(ee.DATA_TYPE + 50) : te() : Ce(ee.DATA_TYPE);
  }
  /**
   * Check if the value is an EAttribute.
   */
  isEAttribute(e) {
    var t, r;
    return !e || typeof e != "object" ? !1 : "getEAttributeType" in e || "eClass" in e && typeof e.eClass == "function" && ((r = (t = e.eClass()) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "EAttribute";
  }
  /**
   * Check if the value is an EEnum.
   */
  isEEnum(e) {
    var t, r;
    return !e || typeof e != "object" ? !1 : "getELiterals" in e || "eClass" in e && typeof e.eClass == "function" && ((r = (t = e.eClass()) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "EEnum";
  }
}, fl = class {
  constructor(e, t) {
    this.containment = e, this.targetClass = t;
  }
  /**
   * Match the context against reference criteria.
   */
  match(e) {
    var t, r, i, u, n;
    const l = e.feature || e.reference;
    if (!l || !this.isEReference(l))
      return te();
    const h = l;
    let c = ee.DATA_TYPE;
    if (this.containment !== void 0) {
      if ((((t = h.isContainment) == null ? void 0 : t.call(h)) ?? !1) !== this.containment)
        return te();
      c += 25;
    }
    if (this.targetClass) {
      const E = (r = h.getEReferenceType) == null ? void 0 : r.call(h);
      if (!E)
        return te();
      const g = (i = E.getName) == null ? void 0 : i.call(E), o = (n = (u = this.targetClass).getName) == null ? void 0 : n.call(u);
      if (g !== o && !this.isSuperTypeOf(this.targetClass, E))
        return te();
      c += 25;
    }
    return Ce(c);
  }
  /**
   * Check if the value is an EReference.
   */
  isEReference(e) {
    var t, r;
    return !e || typeof e != "object" ? !1 : "getEReferenceType" in e || "isContainment" in e || "eClass" in e && typeof e.eClass == "function" && ((r = (t = e.eClass()) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "EReference";
  }
  /**
   * Check if eClass is a supertype of potentialSubType.
   */
  isSuperTypeOf(e, t) {
    var r, i, u;
    const n = (r = t.getEAllSuperTypes) == null ? void 0 : r.call(t);
    if (!n) return !1;
    for (const l of n)
      if (l === e || ((i = l.getName) == null ? void 0 : i.call(l)) === ((u = e.getName) == null ? void 0 : u.call(e)))
        return !0;
    return !1;
  }
};
class Sl {
  constructor(e, t) {
    this.eClass = e, this.featureName = t;
  }
  /**
   * Match the context against this specific feature.
   */
  match(e) {
    var t, r, i, u, n, l, h, c, E, g;
    const o = e.feature || e.attribute || e.reference;
    if (!o || ((t = o.getName) == null ? void 0 : t.call(o)) !== this.featureName)
      return te();
    const d = (r = o.getEContainingClass) == null ? void 0 : r.call(o);
    if (!d)
      return te();
    if (d === this.eClass)
      return Ce(ee.FEATURE);
    const V = (i = d.getName) == null ? void 0 : i.call(d), B = (n = (u = this.eClass).getName) == null ? void 0 : n.call(u);
    if (V === B) {
      const p = (l = d.getEPackage) == null ? void 0 : l.call(d), f = (c = (h = this.eClass).getEPackage) == null ? void 0 : c.call(h);
      if (p && f && ((E = p.getNsURI) == null ? void 0 : E.call(p)) === ((g = f.getNsURI) == null ? void 0 : g.call(f)))
        return Ce(ee.FEATURE);
    }
    return this.isInheritedFrom(d, this.eClass) ? Ce(ee.FEATURE - 10) : te();
  }
  /**
   * Check if subClass inherits from superClass.
   */
  isInheritedFrom(e, t) {
    var r, i, u, n, l, h, c;
    const E = (r = e.getEAllSuperTypes) == null ? void 0 : r.call(e);
    if (!E) return !1;
    for (const g of E) {
      if (g === t) return !0;
      if (((i = g.getName) == null ? void 0 : i.call(g)) === ((u = t.getName) == null ? void 0 : u.call(t))) {
        const o = (n = g.getEPackage) == null ? void 0 : n.call(g), d = (l = t.getEPackage) == null ? void 0 : l.call(t);
        if (o && d && ((h = o.getNsURI) == null ? void 0 : h.call(o)) === ((c = d.getNsURI) == null ? void 0 : c.call(d)))
          return !0;
      }
    }
    return !1;
  }
}
var ml = Object.defineProperty, Il = (s, e, t) => e in s ? ml(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Oa = (s, e, t) => Il(s, typeof e != "symbol" ? e + "" : e, t);
let Nl = 0;
function Ll() {
  return `descriptor-${++Nl}`;
}
let vl = class {
  constructor() {
    Oa(this, "entries", []), Oa(this, "instanceOverrides", /* @__PURE__ */ new WeakMap());
  }
  /**
   * Register a component for a specific target.
   * @returns Unregister function
   */
  register(e, t, r = {}) {
    const i = this.createDescriptor(e, t, r), u = { descriptor: i, target: t, options: r };
    return r.replace && (this.entries = this.entries.filter((n) => !this.targetsEqual(n.target, t))), this.entries.push(u), () => this.unregister(i.id);
  }
  /**
   * Register for a specific EObject instance (highest priority).
   * @returns Unregister function
   */
  registerForInstance(e, t) {
    const r = this.createDescriptor(
      t,
      { type: "instance", eObject: e },
      { priority: ee.INSTANCE }
    );
    return this.instanceOverrides.set(e, r), () => {
      this.instanceOverrides.delete(e);
    };
  }
  /**
   * Register for an EClass (all instances of that class).
   * @returns Unregister function
   */
  registerForEClass(e, t, r) {
    return this.register(
      t,
      { type: "eclass", eClass: e },
      { priority: ee.ECLASS, ...r }
    );
  }
  /**
   * Register for a data type (e.g., EString, EInt).
   * @returns Unregister function
   */
  registerForDataType(e, t, r) {
    return this.register(
      t,
      { type: "datatype", dataTypeName: e },
      { priority: ee.DATA_TYPE, ...r }
    );
  }
  /**
   * Register for enum types.
   * @param component - The Vue component
   * @param enumName - Optional specific enum name (matches all enums if not specified)
   * @returns Unregister function
   */
  registerForEnum(e, t, r) {
    return this.register(
      e,
      { type: "enum", enumName: t },
      { priority: ee.DATA_TYPE, ...r }
    );
  }
  /**
   * Register for references.
   * @returns Unregister function
   */
  registerForReference(e, t) {
    return this.register(
      e,
      {
        type: "reference",
        containment: t?.containment,
        targetClass: t?.targetClass
      },
      { priority: ee.DATA_TYPE, ...t }
    );
  }
  /**
   * Register for a specific feature of an EClass.
   * @returns Unregister function
   */
  registerForFeature(e, t, r, i) {
    return this.register(
      r,
      { type: "feature", eClass: e, featureName: t },
      { priority: ee.FEATURE, ...i }
    );
  }
  /**
   * Get the best matching component for a context.
   */
  getComponent(e) {
    var t;
    if (e.eObject) {
      const r = this.instanceOverrides.get(e.eObject);
      if (r)
        return r.component;
    }
    return (t = this.entries.map((r) => ({
      entry: r,
      result: r.descriptor.canHandle(e)
    })).filter((r) => r.result.matches).sort((r, i) => i.result.priority - r.result.priority)[0]) == null ? void 0 : t.entry.descriptor.component;
  }
  /**
   * Get component for an EStructuralFeature.
   */
  getComponentForFeature(e, t) {
    var r, i, u;
    const n = { feature: e, eObject: t };
    if (this.isEAttribute(e)) {
      n.attribute = e;
      const l = (r = e.getEType) == null ? void 0 : r.call(e);
      l && this.isEEnum(l) && (n.enumType = l);
    } else this.isEReference(e) && (n.reference = e);
    if (t)
      n.eClass = (i = t.eClass) == null ? void 0 : i.call(t);
    else {
      const l = (u = e.getEContainingClass) == null ? void 0 : u.call(e);
      l && (n.eClass = l);
    }
    return this.getComponent(n);
  }
  /**
   * Get component for rendering an EClass (object editor).
   */
  getComponentForEClass(e, t) {
    return this.getComponent({ eClass: e, eObject: t });
  }
  /**
   * Unregister by descriptor ID.
   */
  unregister(e) {
    const t = this.entries.length;
    return this.entries = this.entries.filter((r) => r.descriptor.id !== e), this.entries.length !== t;
  }
  /**
   * Get all registered descriptors.
   */
  getAll() {
    return this.entries.map((e) => e.descriptor);
  }
  /**
   * Clear all registrations.
   */
  clear() {
    this.entries = [], this.instanceOverrides = /* @__PURE__ */ new WeakMap();
  }
  /**
   * Get the number of registered components.
   */
  get size() {
    return this.entries.length;
  }
  /**
   * Create a component descriptor from component, target, and options.
   */
  createDescriptor(e, t, r) {
    const i = Ll();
    if (r.matcher)
      return {
        id: i,
        component: e,
        canHandle: r.matcher,
        displayName: r.displayName,
        description: r.description,
        category: r.category
      };
    const u = this.createMatcher(t, r.priority);
    return {
      id: i,
      component: e,
      canHandle: u,
      displayName: r.displayName,
      description: r.description,
      category: r.category
    };
  }
  /**
   * Create a matcher function based on registration target.
   */
  createMatcher(e, t) {
    switch (e.type) {
      case "eclass": {
        const r = new dl(e.eClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "datatype": {
        const r = new pl(e.dataTypeName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "enum": {
        const r = new Tl(e.enumName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "reference": {
        const r = new fl(e.containment, e.targetClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "feature": {
        const r = new Sl(e.eClass, e.featureName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "instance":
        return (r) => r.eObject === e.eObject ? Ce(t ?? ee.INSTANCE) : te();
      case "custom":
        return e.matcher;
      default:
        return () => te();
    }
  }
  /**
   * Compare two registration targets for equality.
   */
  targetsEqual(e, t) {
    if (e.type !== t.type) return !1;
    switch (e.type) {
      case "eclass":
        return e.eClass === t.eClass;
      case "datatype":
        return e.dataTypeName === t.dataTypeName;
      case "enum":
        return e.enumName === t.enumName;
      case "reference":
        return e.containment === t.containment && e.targetClass === t.targetClass;
      case "feature":
        return e.eClass === t.eClass && e.featureName === t.featureName;
      case "instance":
        return e.eObject === t.eObject;
      default:
        return !1;
    }
  }
  /**
   * Check if value is an EAttribute.
   */
  isEAttribute(e) {
    var t, r;
    return !e || typeof e != "object" ? !1 : "getEAttributeType" in e || "eClass" in e && typeof e.eClass == "function" && ((r = (t = e.eClass()) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "EAttribute";
  }
  /**
   * Check if value is an EReference.
   */
  isEReference(e) {
    var t, r;
    return !e || typeof e != "object" ? !1 : "getEReferenceType" in e || "isContainment" in e || "eClass" in e && typeof e.eClass == "function" && ((r = (t = e.eClass()) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "EReference";
  }
  /**
   * Check if value is an EEnum.
   */
  isEEnum(e) {
    var t, r;
    return !e || typeof e != "object" ? !1 : "getELiterals" in e || "eClass" in e && typeof e.eClass == "function" && ((r = (t = e.eClass()) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "EEnum";
  }
};
const lt = new vl();
var _l = Object.defineProperty, Ol = (s, e, t) => e in s ? _l(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Aa = (s, e, t) => Ol(s, typeof e != "symbol" ? e + "" : e, t);
let Al = class {
  constructor() {
    Aa(this, "lazyRegistrations", []), Aa(this, "resolvedPackages", /* @__PURE__ */ new Map());
  }
  /**
   * Register a decorated component immediately.
   */
  register(e, t, r) {
    lt.register(e, t, r);
  }
  /**
   * Register for lazy resolution (when EClass/EEnum is specified by name).
   */
  registerLazy(e, t, r) {
    this.lazyRegistrations.push({ component: e, target: t, options: r }), this.tryResolveAll();
  }
  /**
   * Add a package for lazy resolution.
   */
  addPackage(e) {
    var t, r;
    const i = (t = e.getNsURI) == null ? void 0 : t.call(e);
    i && this.resolvedPackages.set(i, e);
    const u = (r = e.getName) == null ? void 0 : r.call(e);
    u && this.resolvedPackages.set(u, e), this.tryResolveAll();
  }
  /**
   * Resolve lazy registrations using available packages.
   */
  resolveWith(e) {
    for (const t of e)
      this.addPackage(t);
  }
  /**
   * Try to resolve all pending lazy registrations.
   */
  tryResolveAll() {
    const e = [];
    for (const t of this.lazyRegistrations) {
      const r = this.tryResolve(t.target);
      r ? lt.register(t.component, r, t.options) : e.push(t);
    }
    this.lazyRegistrations = e;
  }
  /**
   * Try to resolve a lazy target to a concrete registration target.
   */
  tryResolve(e) {
    switch (e.type) {
      case "eclass-by-name":
        return this.resolveEClass(e.className, e.packageNsUri);
      case "enum-by-name":
        return this.resolveEnum(e.enumName, e.packageNsUri);
      case "feature-by-name":
        return this.resolveFeature(
          e.className,
          e.featureName,
          e.packageNsUri
        );
      default:
        return null;
    }
  }
  /**
   * Resolve an EClass by name.
   */
  resolveEClass(e, t) {
    var r;
    for (const [i, u] of this.resolvedPackages) {
      if (t && i !== t)
        continue;
      const n = (r = u.getEClassifier) == null ? void 0 : r.call(u, e);
      if (n && this.isEClass(n))
        return { type: "eclass", eClass: n };
    }
    return null;
  }
  /**
   * Resolve an EEnum by name.
   */
  resolveEnum(e, t) {
    var r;
    for (const [i, u] of this.resolvedPackages) {
      if (t && i !== t)
        continue;
      const n = (r = u.getEClassifier) == null ? void 0 : r.call(u, e);
      if (n && this.isEEnum(n))
        return { type: "enum", enumType: n, enumName: e };
    }
    return null;
  }
  /**
   * Resolve a feature by class name and feature name.
   */
  resolveFeature(e, t, r) {
    var i;
    for (const [u, n] of this.resolvedPackages) {
      if (r && u !== r)
        continue;
      const l = (i = n.getEClassifier) == null ? void 0 : i.call(n, e);
      if (l && this.isEClass(l))
        return {
          type: "feature",
          eClass: l,
          featureName: t
        };
    }
    return null;
  }
  /**
   * Check if value is an EClass.
   */
  isEClass(e) {
    return !e || typeof e != "object" ? !1 : "getEAllStructuralFeatures" in e;
  }
  /**
   * Check if value is an EEnum.
   */
  isEEnum(e) {
    return !e || typeof e != "object" ? !1 : "getELiterals" in e;
  }
  /**
   * Get pending lazy registrations (for debugging).
   */
  getPending() {
    return [...this.lazyRegistrations];
  }
  /**
   * Clear all pending registrations and packages.
   */
  clear() {
    this.lazyRegistrations = [], this.resolvedPackages.clear();
  }
};
new Al();
const di = Symbol("componentRegistry");
function Cl() {
  const s = ot(di) ?? lt;
  function e(g) {
    return s.getComponent(g);
  }
  function t(g, o) {
    return s.getComponentForFeature(g, o);
  }
  function r(g, o) {
    return s.getComponentForEClass(g, o);
  }
  function i(g, o, d) {
    return s.register(g, o, d);
  }
  function u(g, o) {
    return s.registerForInstance(g, o);
  }
  function n(g, o, d) {
    return s.registerForEClass(g, o, d);
  }
  function l(g, o, d) {
    return s.registerForDataType(g, o, d);
  }
  function h(g, o, d) {
    return s.registerForEnum(g, o, d);
  }
  function c(g, o) {
    return s.registerForReference(g, o);
  }
  function E(g, o, d, V) {
    return s.registerForFeature(g, o, d, V);
  }
  return {
    registry: s,
    getComponent: e,
    getComponentForFeature: t,
    getComponentForEClass: r,
    register: i,
    registerForInstance: u,
    registerForEClass: n,
    registerForDataType: l,
    registerForEnum: h,
    registerForReference: c,
    registerForFeature: E
  };
}
const yl = { class: "uimodel-fallback-widget" }, Dl = { class: "uimodel-fallback-widget__label" }, Rl = {
  key: 0,
  "aria-hidden": "true"
}, wl = ["rows", "value", "placeholder", "readonly", "disabled"], Fl = /* @__PURE__ */ se({
  __name: "FallbackWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = T(() => {
      var o;
      return ((o = e.custom) == null ? void 0 : o.resolvedStyle) ?? {};
    }), r = T(
      () => {
        var o, d;
        return t.value.label ?? ((d = (o = e.feature) == null ? void 0 : o.getName) == null ? void 0 : d.call(o)) ?? "";
      }
    ), i = T(() => t.value.placeholder ?? ""), u = T(() => h(t.value.readOnly)), n = T(() => h(t.value.required)), l = T(() => {
      var o, d;
      const V = (d = (o = e.custom) == null ? void 0 : o.rawWidget) == null ? void 0 : d.rows, B = Number(V);
      return Number.isFinite(B) && B > 0 ? B : 3;
    });
    function h(o) {
      return o === !0 || o === "true";
    }
    const c = T(() => {
      var o;
      const d = (o = e.eObject) == null ? void 0 : o.eGet(e.feature);
      return d == null ? "" : String(d);
    }), E = dr(c.value);
    os(c, (o) => {
      E.value = o;
    });
    function g(o) {
      var d;
      const V = o.target.value;
      E.value = V, (d = e.eObject) == null || d.eSet(e.feature, V);
    }
    return (o, d) => (I(), R("div", yl, [
      ie("label", Dl, [
        ba(xe(r.value), 1),
        n.value ? (I(), R("span", Rl, " *")) : ne("", !0)
      ]),
      ie("textarea", {
        class: "uimodel-fallback-widget__input",
        rows: l.value,
        value: E.value,
        placeholder: i.value,
        readonly: u.value,
        disabled: u.value,
        onInput: g
      }, null, 40, wl)
    ]));
  }
}), Pl = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, bl = /* @__PURE__ */ Pl(Fl, [["__scopeId", "data-v-0237261a"]]), pi = /* @__PURE__ */ se({
  __name: "WidgetComposer",
  props: {
    widget: {},
    model: {}
  },
  setup(s) {
    const e = s, t = /* @__PURE__ */ new Set(), { getComponentForFeature: r } = Cl(), i = hi(
      () => e.widget.visibilityCondition,
      () => e.model
    ), u = gi(
      () => e.widget,
      () => e.model
    ), n = T(
      () => u.value.boundFeature ?? e.widget.feature
    ), l = T(() => {
      var o, d, V, B, p, f, U, A;
      if (!n.value) return null;
      const b = r(n.value, e.model);
      if (b) return b;
      const j = ((B = (V = (d = (o = e.widget).eClass) == null ? void 0 : d.call(o)) == null ? void 0 : V.getName) == null ? void 0 : B.call(V)) ?? "WidgetComponent", X = ((A = (U = (f = (p = n.value).getEType) == null ? void 0 : f.call(p)) == null ? void 0 : U.getName) == null ? void 0 : A.call(U)) ?? "?", re = `${j}/${X}`;
      return t.has(re) || (t.add(re), console.warn(
        `[uimodel-composer] Kein Renderer für Widget "${j}" auf Datentyp "${X}" registriert — Fallback als Plaintext-Editor. Host: Renderer über die @emfts/vue-registry registrieren.`
      )), bl;
    }), h = T(() => {
      var o, d;
      return {
        eObject: e.model,
        feature: n.value,
        eClass: (d = (o = e.model).eClass) == null ? void 0 : d.call(o),
        custom: {
          resolvedStyle: u.value,
          rawWidget: e.widget
        }
      };
    }), c = ot(pr, void 0), E = T(() => (Lt(), c?.version.value, [
      ...ha(e.widget, {
        model: e.model,
        sheets: c?.sheets.value,
        resolvedCss: u.value.css
      }),
      ...al(
        e.widget,
        u.value.readOnly,
        u.value.required
      )
    ])), g = T(() => ga(e.widget));
    return (o, d) => ue(i) && l.value && !ue(u).featureSuppressed ? (I(), H(oa(l.value), ca({ key: 0 }, { ...h.value, ...g.value }, { class: E.value }), null, 16, ["class"])) : ne("", !0);
  }
}), Ml = {
  key: 0,
  class: "uim-group-label"
}, Vl = /* @__PURE__ */ se({
  __name: "GroupComposer",
  props: {
    widget: {},
    model: {}
  },
  setup(s) {
    const e = s, t = ot(pr, void 0), r = hi(
      () => e.widget.visibilityCondition,
      () => e.model
    ), i = gi(
      () => e.widget,
      () => e.model
    ), u = T(() => {
      const E = i.value.label;
      return E == null ? "" : String(E);
    }), n = T(
      () => String(e.widget.layout ?? "VERTICAL").toLowerCase()
    ), l = T(() => (Lt(), t?.version.value, [
      ...ha(e.widget, {
        model: e.model,
        sheets: t?.sheets.value,
        resolvedCss: i.value.css
      }),
      "uimodel-group",
      `uimodel-group--${n.value}`
    ])), h = T(
      () => ga(e.widget)
    ), c = T(() => e.widget.fields ?? []);
    return (E, g) => ue(r) ? (I(), R("div", ca({
      key: 0,
      class: l.value
    }, h.value), [
      u.value ? (I(), R("div", Ml, xe(u.value), 1)) : ne("", !0),
      hr(Ti, {
        fields: c.value,
        model: s.model
      }, null, 8, ["fields", "model"])
    ], 16)) : ne("", !0);
  }
}), Ul = {
  key: 0,
  class: "uimodel-foreach-empty"
}, Ti = /* @__PURE__ */ se({
  __name: "FieldsRenderer",
  props: {
    fields: {},
    model: {}
  },
  setup(s) {
    const e = s, t = ot(ui, void 0), r = ot(pr, void 0), i = T(() => (Lt(), r?.version.value, ia(e.fields, e.model, t?.value)));
    return (u, n) => (I(!0), R(mt, null, cs(i.value, (l, h) => (I(), R(mt, { key: h }, [
      l.kind === "note" ? (I(), R("p", Ul, xe(l.text), 1)) : l.kind === "group" ? (I(), H(Vl, {
        key: 1,
        widget: l.widget,
        model: l.model
      }, null, 8, ["widget", "model"])) : (I(), H(pi, {
        key: 2,
        widget: l.widget,
        model: l.model
      }, null, 8, ["widget", "model"]))
    ], 64))), 128));
  }
}), Bl = { class: "uimodel-form-view" }, fi = /* @__PURE__ */ se({
  __name: "FormViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (I(), R("div", Bl, [
      hr(Ti, {
        fields: s.component.fields,
        model: s.model
      }, null, 8, ["fields", "model"])
    ]));
  }
}), Gl = { class: "uimodel-section-view" }, Wl = /* @__PURE__ */ se({
  __name: "SectionViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (I(), R("div", Gl, [
      (I(!0), R(mt, null, cs(s.component.sections, (r) => (I(), H(fi, {
        key: r.name,
        component: r,
        model: s.model
      }, null, 8, ["component", "model"]))), 128))
    ]));
  }
}), Yl = { class: "uimodel-tab-view" }, $l = ["data-tab"], kl = /* @__PURE__ */ se({
  __name: "TabViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (I(), R("div", Yl, [
      (I(!0), R(mt, null, cs(s.component.tabs, (r) => (I(), R("div", {
        key: r.name,
        class: "uimodel-tab-panel",
        "data-tab": r.name
      }, [
        hr(da, {
          component: r,
          model: s.model
        }, null, 8, ["component", "model"])
      ], 8, $l))), 128))
    ]));
  }
}), xl = { class: "uimodel-summary-view" }, Xl = /* @__PURE__ */ se({
  __name: "SummaryViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (I(), R("div", xl, [
      (I(!0), R(mt, null, cs(s.component.summaryFields, (r) => (I(), H(pi, {
        key: r.name,
        widget: r,
        model: s.model
      }, null, 8, ["widget", "model"]))), 128))
    ]));
  }
}), Hl = {
  key: 1,
  class: "uimodel-table-view-placeholder"
}, Si = /* @__PURE__ */ se({
  __name: "TableViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = Ja(), t = T(() => e.getComposer("TableViewRenderer"));
    return (r, i) => t.value ? (I(), H(oa(t.value), {
      key: 0,
      component: s.component,
      model: s.model
    }, null, 8, ["component", "model"])) : (I(), R("div", Hl));
  }
}), jl = { class: "uimodel-master-detail" }, ql = { class: "uimodel-master" }, zl = { class: "uimodel-detail" }, Kl = /* @__PURE__ */ se({
  __name: "MasterDetailComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (I(), R("div", jl, [
      ie("div", ql, [
        hr(Si, {
          component: s.component.master,
          model: s.model
        }, null, 8, ["component", "model"])
      ]),
      ie("div", zl, [
        hr(da, {
          component: s.component.detail,
          model: s.model
        }, null, 8, ["component", "model"])
      ])
    ]));
  }
}), Ta = /* @__PURE__ */ se({
  __name: "UIModelComposer",
  props: {
    uiModel: {},
    model: {},
    composerRegistry: {},
    styleSheets: {},
    overlays: {}
  },
  setup(s) {
    const e = s, t = T(() => e.styleSheets ?? []), { version: r } = Bn(t);
    Ir(pr, { sheets: t, version: r }), el(() => e.model), Ir(
      ui,
      T(() => (Lt(), {
        ...Xn(e.uiModel),
        overlayCases: kn(e.overlays ?? [])
      }))
    );
    const i = e.composerRegistry ?? An({
      FormView: fi,
      SectionView: Wl,
      TabView: kl,
      SummaryView: Xl,
      TableView: Si,
      MasterDetail: Kl
    });
    Ir(Qa, i);
    function u() {
      return Tr(e.uiModel.filterExpression, e.model);
    }
    return (n, l) => u() ? (I(!0), R(mt, { key: 0 }, cs(s.uiModel.components, (h) => (I(), H(da, {
      key: h.name,
      component: h,
      model: s.model
    }, null, 8, ["component", "model"]))), 128)) : ne("", !0);
  }
});
function Ca(s) {
  const e = s;
  return !!e && typeof e.eIsProxy == "function" && e.eIsProxy();
}
function ya(s, e) {
  const t = e.getResourceSet(), r = s.eProxyURI();
  if (!r) return s;
  const i = r.toString(), u = i.indexOf("#");
  if (u > 0) {
    const l = i.substring(0, u), h = i.substring(u + 1);
    if (!t) return s;
    const c = e.getURI(), E = [];
    c && !l.includes("://") && E.push(qr.createURI(l).resolve(c).toString()), E.push(l);
    for (const g of E) {
      const o = t.getResource(qr.createURI(g), !1), d = o?.getEObject(h);
      if (d) return d;
    }
    return s;
  }
  const n = u === 0 ? i.substring(1) : i;
  return e.getEObject(n) ?? s;
}
function Da(s, e) {
  for (const t of s.eClass().getEAllReferences()) {
    const r = s.eGet(t);
    if (r) {
      if (t.isMany()) {
        const i = r;
        for (let u = 0; u < i.length; u++) {
          const n = i[u];
          if (Ca(n)) {
            const l = ya(n, e);
            l !== n && (i[u] = l);
          }
        }
      } else if (Ca(r)) {
        const i = ya(r, e);
        i !== r && s.eSet(t, i);
      }
    }
  }
}
function Ql(s) {
  for (const e of s.getContents()) {
    Da(e, s);
    for (const t of e.eAllContents())
      Da(t, s);
  }
}
const Jl = "VariableWrapper";
function mi(s) {
  return typeof s?.eClass == "function";
}
function Ii(s, e) {
  if (!e || typeof e != "object") return s;
  const t = e, r = s, i = /* @__PURE__ */ new Set();
  for (const u of s.eClass().getEStructuralFeatures()) {
    const n = u.getName?.();
    n && i.add(n);
  }
  for (const [u, n] of Object.entries(t))
    if (!u.startsWith("_"))
      try {
        r[u] = n;
      } catch {
      }
  return s;
}
function fa(s) {
  const e = s;
  for (const t of s.eClass().getEStructuralFeatures()) {
    const r = t.getName?.();
    if (!r) continue;
    let i;
    try {
      i = t.getEReferenceType?.()?.getName?.();
    } catch {
      continue;
    }
    if (i !== Jl) continue;
    const u = e[r];
    if (!(u instanceof Na))
      try {
        e[r] = new Na(u);
      } catch {
      }
  }
  return s;
}
function Ni(s, e) {
  return fa(mi(s) ? s : Ii(e(), s));
}
const Zl = /color|colour|background|^fill$|^stroke$/i, eo = /size|width|height|radius|blur|padding|transparence|transparency|opacity|zoom|count|index/i, to = /^(is|has|show|enable|fullscreen|visible)/i;
function Br(s) {
  const e = s.getName?.() ?? "", t = s.getEType?.()?.getName?.() ?? "";
  return t === "EBoolean" || to.test(e) ? "flag" : t === "EInt" || t === "EDouble" || eo.test(e) ? "number" : Zl.test(e) ? "colour" : "text";
}
function fr(s) {
  const t = (s.getName?.() ?? "").replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function Yr(s, e = s.getName?.() ?? "Settings") {
  const t = Ea.eINSTANCE, r = t.createFormView();
  r.name = e;
  for (const u of s.getEStructuralFeatures()) {
    const n = so(t, u);
    n.feature = u, n.label = fr(u), r.fields.push(n);
  }
  const i = t.createUIModel();
  return i.name = e, i.targetClasses.push(s), i.components.push(r), i;
}
function so(s, e) {
  switch (Br(e)) {
    case "flag":
      return s.createCheckboxWidget();
    case "number":
      return s.createNumberWidget();
    // Colours have no widget class of their own in the metamodel; the
    // renderer picks the picker from the feature name, the same way this does
    case "colour":
    case "text":
    default:
      return s.createInputWidget();
  }
}
const Ra = /* @__PURE__ */ new Map(), Li = /* @__PURE__ */ new Map();
function vi(s) {
  return Li.get(s);
}
function ro(s) {
  for (const e of s.targetClasses ?? [])
    e && Li.set(e, s);
}
let wa = !1;
function ao() {
  if (wa) return;
  Mi();
  const s = y.eINSTANCE;
  s.setEFactoryInstance(Ea.eINSTANCE), Cr.INSTANCE.set(s.getNsURI(), s), wa = !0;
}
function ua(s, e, t = "/ui.xmi") {
  const r = Ra.get(t);
  if (r) return r;
  try {
    ao();
    const i = e.getNsURI();
    i && !Cr.INSTANCE.has(i) && Cr.INSTANCE.set(i, e);
    const u = new Pi();
    u.getResourceFactoryRegistry().getExtensionToFactoryMap().set("xmi", new bi());
    const n = u.createResource(qr.createURI(t));
    if (n.loadFromString(s), n.getContents().size() === 0) return;
    Ql(n);
    const l = n.getContents().get(0);
    return Ra.set(t, l), ro(l), l;
  } catch (i) {
    console.warn("[ui.vue.uimodel] UI-Modell konnte nicht gelesen werden:", i);
    return;
  }
}
const io = { class: "list" }, uo = { class: "list__head" }, no = { class: "list__label" }, lo = { class: "list__count" }, oo = {
  key: 0,
  class: "list__untyped"
}, co = {
  key: 1,
  class: "list__empty"
}, Eo = ["aria-expanded", "onClick"], ho = { class: "entry__twist" }, go = { class: "entry__title" }, po = {
  key: 0,
  class: "entry__actions"
}, To = ["disabled", "onClick"], fo = ["disabled", "onClick"], So = ["onClick"], mo = {
  key: 1,
  class: "entry__body"
}, Io = /* @__PURE__ */ se({
  __name: "SettingsListWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = T(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? fr(e.feature) : "")
    ), r = T(() => e.custom?.resolvedStyle?.readOnly === !0);
    function i() {
      const p = e.feature?.getName?.();
      if (!(!p || !e.eObject))
        return e.eObject[p];
    }
    const u = T(() => {
      const p = i();
      return p ? typeof p.toArray == "function" ? p.toArray() : Array.isArray(p) ? p : [] : [];
    }), n = T(() => {
      try {
        return e.feature?.getEReferenceType?.() ?? void 0;
      } catch {
        return;
      }
    }), l = /* @__PURE__ */ new Map(), h = T(() => {
      const p = n.value;
      if (!p) return;
      const f = vi(p);
      return f || (l.has(p) || l.set(p, Yr(p, p.getName?.() ?? "Eintrag")), l.get(p));
    }), c = dr(0), E = ["label", "name", "title", "key", "className", "id"];
    function g(p, f) {
      return o(p) ?? `${n.value?.getName?.() ?? "Eintrag"} ${f + 1}`;
    }
    function o(p, f = 1) {
      if (typeof p?.eClass != "function") return;
      const U = p;
      let A;
      try {
        A = [...p.eClass().getEStructuralFeatures()];
      } catch {
        return;
      }
      for (const b of E) {
        if (!A.some((re) => re.getName?.() === b)) continue;
        const j = U[b], X = j && typeof j == "object" ? j.value : j;
        if (X != null && String(X) !== "") return String(X);
      }
      if (!(f < 1))
        for (const b of A) {
          const j = b.getName?.(), X = j ? o(U[j], f - 1) : void 0;
          if (X) return X;
        }
    }
    function d() {
      const p = n.value, f = e.feature?.getName?.();
      if (!p || !f || !e.eObject) return;
      const A = p.getEPackage?.()?.getEFactoryInstance?.()?.create(p);
      if (!A) return;
      fa(A);
      const b = i();
      if (b) {
        if (typeof b.add == "function") b.add(A);
        else if (Array.isArray(b)) b.push(A);
        else return;
        c.value = u.value.length - 1;
      }
    }
    function V(p) {
      const f = i();
      if (f) {
        if (typeof f.removeAt == "function") f.removeAt(p);
        else if (Array.isArray(f)) f.splice(p, 1);
        else return;
        c.value = Math.min(c.value, Math.max(u.value.length - 1, 0));
      }
    }
    function B(p, f) {
      const U = i();
      if (!U) return;
      const A = p + f;
      if (!(A < 0 || A >= u.value.length)) {
        if (typeof U.move == "function") U.move(A, p);
        else if (Array.isArray(U)) {
          const [b] = U.splice(p, 1);
          U.splice(A, 0, b);
        } else return;
        c.value = A;
      }
    }
    return (p, f) => (I(), R("section", io, [
      ie("header", uo, [
        ie("span", no, xe(t.value), 1),
        ie("span", lo, xe(u.value.length), 1),
        f[1] || (f[1] = ie("span", { class: "list__spacer" }, null, -1)),
        n.value && !r.value ? (I(), H(ue(Vi), {
          key: 0,
          size: "sm",
          onClick: d
        }, {
          default: Ci(() => [...f[0] || (f[0] = [
            ba("Hinzufügen", -1)
          ])]),
          _: 1
        })) : ne("", !0)
      ]),
      n.value ? u.value.length ? ne("", !0) : (I(), R("p", co, "Noch nichts angelegt.")) : (I(), R("p", oo, " Diese Liste ist im Modell ohne Typ angegeben - es steht dort nur, dass es mehrere sind, nicht wovon. Solange das so ist, lässt sich hier nichts zeigen. ")),
      (I(!0), R(mt, null, cs(u.value, (U, A) => (I(), R("div", {
        key: A,
        class: "entry"
      }, [
        ie("button", {
          type: "button",
          class: "entry__head",
          "aria-expanded": c.value === A,
          onClick: (b) => c.value = c.value === A ? -1 : A
        }, [
          ie("span", ho, xe(c.value === A ? "▾" : "▸"), 1),
          ie("span", go, xe(g(U, A)), 1)
        ], 8, Eo),
        r.value ? ne("", !0) : (I(), R("span", po, [
          ie("button", {
            type: "button",
            title: "Nach oben",
            disabled: A === 0,
            onClick: (b) => B(A, -1)
          }, "↑", 8, To),
          ie("button", {
            type: "button",
            title: "Nach unten",
            disabled: A === u.value.length - 1,
            onClick: (b) => B(A, 1)
          }, " ↓ ", 8, fo),
          ie("button", {
            type: "button",
            title: "Entfernen",
            class: "entry__remove",
            onClick: (b) => V(A)
          }, "✕", 8, So)
        ])),
        c.value === A ? (I(), R("div", mo, [
          h.value ? (I(), H(ue(Ta), {
            key: 0,
            "ui-model": h.value,
            model: U
          }, null, 8, ["ui-model", "model"])) : ne("", !0)
        ])) : ne("", !0)
      ]))), 128))
    ]));
  }
}), $r = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, _i = /* @__PURE__ */ $r(Io, [["__scopeId", "data-v-b0db9508"]]), No = { class: "object" }, Lo = {
  key: 0,
  class: "object__label"
}, vo = {
  key: 1,
  class: "object__untyped"
}, _o = {
  key: 2,
  class: "object__body"
}, Oo = /* @__PURE__ */ se({
  __name: "SettingsObjectWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = T(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? fr(e.feature) : "")
    ), r = T(() => {
      try {
        return e.feature?.getEReferenceType?.() ?? void 0;
      } catch {
        return;
      }
    });
    function i() {
      const c = e.feature?.getName?.();
      if (!(!c || !e.eObject))
        return e.eObject[c];
    }
    function u() {
      const c = r.value, E = e.feature?.getName?.();
      if (!c || !E || !e.eObject || i()) return;
      const o = c.getEPackage?.()?.getEFactoryInstance?.()?.create(c);
      o && (fa(o), e.eObject[E] = o);
    }
    os(() => [e.eObject, e.feature], u, { immediate: !0 });
    const n = T(() => i()), l = /* @__PURE__ */ new Map(), h = T(() => {
      const c = r.value;
      if (!c) return;
      const E = vi(c);
      return E || (l.has(c) || l.set(c, Yr(c, c.getName?.() ?? "Eintrag")), l.get(c));
    });
    return (c, E) => (I(), R("section", No, [
      t.value ? (I(), R("span", Lo, xe(t.value), 1)) : ne("", !0),
      r.value ? (I(), R("div", _o, [
        h.value && n.value ? (I(), H(ue(Ta), {
          key: 0,
          "ui-model": h.value,
          model: n.value
        }, null, 8, ["ui-model", "model"])) : ne("", !0)
      ])) : (I(), R("p", vo, " Diese Einstellung ist im Modell ohne Typ angegeben - es steht dort nur, dass etwas enthalten ist, nicht was. Solange das so ist, lässt sich hier nichts zeigen. "))
    ]));
  }
}), Oi = /* @__PURE__ */ $r(Oo, [["__scopeId", "data-v-8adcf520"]]), Ao = { class: "field-row__control" }, Co = ["title", "aria-pressed"], yo = /* @__PURE__ */ se({
  __name: "SettingsFieldWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = ot(Gi), r = T(() => {
      const L = i();
      return u(L) ? L : void 0;
    });
    function i() {
      const { eObject: L, feature: v } = e;
      if (!L || !v) return;
      const M = v.getName?.();
      return M ? L[M] : void 0;
    }
    function u(L) {
      return typeof L?.setTo == "function";
    }
    const n = T(() => e.feature != null && l(e.feature));
    function l(L) {
      try {
        return L.getEReferenceType?.()?.getName?.() === "VariableWrapper";
      } catch {
        return !1;
      }
    }
    const h = T({
      get: () => i(),
      set: (L) => {
        const { eObject: v, feature: M } = e, Ne = M?.getName?.();
        !v || !Ne || (v[Ne] = L);
      }
    }), c = T(() => n.value ? r.value?.variable ?? "" : ""), E = T(() => !!c.value), g = dr(!1);
    os(E, (L) => {
      L && (g.value = !0);
    }, { immediate: !0 });
    const o = T(() => {
      try {
        return (t?.getAllVariables() ?? []).map(([L]) => L);
      } catch {
        return [];
      }
    }), d = T({
      get: () => c.value,
      set: (L) => {
        if (!r.value) return;
        if (!L) return V();
        const v = t?.getVariable(L);
        v && r.value.setTo(v);
      }
    });
    function V() {
      r.value && (r.value.value = r.value.value, g.value = !1);
    }
    function B() {
      E.value ? V() : g.value = !g.value;
    }
    const p = T(() => !e.custom?.resolvedStyle?.readOnly && !E.value), f = T({
      get: () => (n.value ? r.value?.value : h.value) ?? "",
      set: (L) => {
        p.value && (n.value ? r.value && (r.value.value = L) : h.value = L);
      }
    }), U = T({
      get: () => {
        const L = n.value ? r.value?.value : h.value;
        if (L == null || L === "") return "";
        const v = Number(L);
        return Number.isFinite(v) ? v : "";
      },
      set: (L) => {
        if (!p.value) return;
        const v = L === "" || L === null ? void 0 : Number(L);
        f.value = v !== void 0 && Number.isFinite(v) ? v : void 0;
      }
    }), A = T({
      get: () => f.value === !0 || f.value === "true",
      set: (L) => {
        f.value = L;
      }
    }), b = T(() => e.custom?.rawWidget?.eClass?.()?.getName?.() ?? ""), j = T(() => {
      const L = e.custom?.rawWidget, v = L?.values, M = v && typeof v.map == "function" ? [...v] : [], Ne = L?.optionLabel;
      return !Ne?.body || !e.eObject ? M.map((x) => ({ value: x, text: x })) : M.map((x) => {
        let Ue = x;
        try {
          const Be = Wr(Ne, e.eObject, { option: x });
          Be != null && Be !== "" && (Ue = String(Be));
        } catch {
        }
        return { value: x, text: Ue };
      });
    }), X = T(() => Number(e.custom?.rawWidget?.rows) || 6), re = T(() => ({
      min: e.custom?.rawWidget?.min,
      max: e.custom?.rawWidget?.max,
      step: e.custom?.rawWidget?.step
    })), ce = T(() => {
      switch (b.value) {
        case "CheckboxWidget":
          return "flag";
        case "TextAreaWidget":
          return "lines";
        case "NumberWidget":
          return "number";
        case "SelectWidget":
        case "ComboboxWidget":
          return "choice";
        case "InputWidget":
          return e.feature && Br(e.feature) === "colour" ? "colour" : "text";
        default:
          return e.feature ? Br(e.feature) : "text";
      }
    }), ae = T(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? fr(e.feature) : "")
    ), ye = T(() => g.value && o.value.length === 0);
    return (L, v) => r.value || !n.value ? (I(), R("div", {
      key: 0,
      class: ma(["field-row", { "field-row--bound": E.value }])
    }, [
      ie("div", Ao, [
        g.value && !ye.value ? (I(), H(ue(La), {
          key: 0,
          modelValue: d.value,
          "onUpdate:modelValue": v[0] || (v[0] = (M) => d.value = M),
          label: ae.value,
          options: o.value,
          disabled: s.custom?.resolvedStyle?.readOnly,
          placeholder: "Keine Variable",
          clearable: ""
        }, null, 8, ["modelValue", "label", "options", "disabled"])) : ye.value ? (I(), H(ue(Sr), {
          key: 1,
          "model-value": "",
          label: ae.value,
          disabled: "",
          hint: "Es sind noch keine Variablen angelegt."
        }, null, 8, ["label"])) : ce.value === "flag" ? (I(), H(ue(Ui), {
          key: 2,
          modelValue: A.value,
          "onUpdate:modelValue": v[1] || (v[1] = (M) => A.value = M),
          label: ae.value,
          disabled: !p.value
        }, null, 8, ["modelValue", "label", "disabled"])) : ce.value === "choice" ? (I(), H(ue(La), {
          key: 3,
          modelValue: f.value,
          "onUpdate:modelValue": v[2] || (v[2] = (M) => f.value = M),
          label: ae.value,
          options: j.value,
          "value-key": "value",
          "label-key": "text",
          disabled: !p.value,
          clearable: ""
        }, null, 8, ["modelValue", "label", "options", "disabled"])) : ce.value === "colour" ? (I(), H(ue(Bi), {
          key: 4,
          modelValue: f.value,
          "onUpdate:modelValue": v[3] || (v[3] = (M) => f.value = M),
          label: ae.value,
          disabled: !p.value,
          hint: L.boundHint ?? s.custom?.resolvedStyle?.placeholder
        }, null, 8, ["modelValue", "label", "disabled", "hint"])) : ce.value === "lines" ? (I(), H(ue(Sr), {
          key: 5,
          modelValue: f.value,
          "onUpdate:modelValue": v[4] || (v[4] = (M) => f.value = M),
          label: ae.value,
          rows: X.value,
          placeholder: s.custom?.resolvedStyle?.placeholder,
          disabled: !p.value
        }, null, 8, ["modelValue", "label", "rows", "placeholder", "disabled"])) : ce.value === "number" ? (I(), H(ue(Sr), {
          key: 6,
          modelValue: U.value,
          "onUpdate:modelValue": v[5] || (v[5] = (M) => U.value = M),
          label: ae.value,
          type: "number",
          min: re.value.min,
          max: re.value.max,
          step: re.value.step,
          disabled: !p.value
        }, null, 8, ["modelValue", "label", "min", "max", "step", "disabled"])) : (I(), H(ue(Sr), {
          key: 7,
          modelValue: f.value,
          "onUpdate:modelValue": v[6] || (v[6] = (M) => f.value = M),
          label: ae.value,
          placeholder: s.custom?.resolvedStyle?.placeholder,
          disabled: !p.value
        }, null, 8, ["modelValue", "label", "placeholder", "disabled"]))
      ]),
      n.value ? (I(), R("button", {
        key: 0,
        type: "button",
        class: ma(["bind", { on: E.value, armed: g.value && !E.value }]),
        title: E.value ? `Bindung an „${c.value}“ lösen` : "An eine Variable binden",
        "aria-pressed": E.value,
        onClick: B
      }, " {x} ", 10, Co)) : ne("", !0)
    ], 2)) : ne("", !0);
  }
}), Sa = /* @__PURE__ */ $r(yo, [["__scopeId", "data-v-e3b7189e"]]), Do = "org.eclipse.daanse.board.app.ui.vue.composables";
let Fa = !1;
function Ro() {
  if (Fa) return !0;
  const s = Cr.INSTANCE.getEPackage(Do)?.getEClassifier(
    "VariableWrapper"
  );
  return s ? (lt.registerForReference(Sa, { targetClass: s }), Fa = !0, !0) : !1;
}
function na(s, e = /* @__PURE__ */ new Set()) {
  if (!e.has(s)) {
    e.add(s);
    for (const t of s.getEStructuralFeatures()) {
      if (Po(t)) {
        lt.registerForFeature(
          s,
          t.getName?.() ?? "",
          _i
        );
        const r = t.getEReferenceType?.();
        r && na(r, e);
        continue;
      }
      if (Fo(t)) {
        lt.registerForFeature(
          s,
          t.getName?.() ?? "",
          Oi
        );
        const r = t.getEReferenceType?.();
        r && na(r, e);
        continue;
      }
      wo(t) && lt.registerForFeature(
        s,
        t.getName?.() ?? "",
        Sa
      );
    }
  }
}
function wo(s) {
  try {
    return s.getEReferenceType?.() == null;
  } catch {
    return !0;
  }
}
function Fo(s) {
  try {
    const e = s.getEReferenceType?.();
    return e ? e.getName?.() !== "VariableWrapper" : !1;
  } catch {
    return !1;
  }
}
function Po(s) {
  try {
    return s.isMany?.() === !0 || (s.getUpperBound?.() ?? 1) !== 1;
  } catch {
    return !1;
  }
}
const bo = { class: "settings-form" }, Mo = {
  key: 1,
  class: "settings-form__empty"
}, Vo = /* @__PURE__ */ se({
  __name: "SettingsForm",
  props: /* @__PURE__ */ yi({
    create: { type: Function },
    uiModel: {},
    uiModelXmi: {},
    domainPackage: {},
    uiModelUri: {},
    entryForms: {},
    emptyText: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    y.eINSTANCE, Ir(di, lt), Ro();
    const e = Di(s, "modelValue"), t = s;
    function r() {
      const c = Ni(e.value, t.create);
      c !== e.value && (e.value = c);
    }
    Ri(r), os(e, r);
    const i = T(() => e.value), u = Ia(), n = Ia(), l = T(() => {
      const c = e.value?.eClass?.();
      if (c && na(c), t.uiModel) return kr(t.uiModel);
      if (t.domainPackage)
        for (const o of t.entryForms ?? [])
          ua(o.xmi, t.domainPackage, o.uri);
      if (t.uiModelXmi && t.domainPackage) {
        const o = ua(t.uiModelXmi, t.domainPackage, t.uiModelUri);
        if (o) return kr(o);
      }
      const g = i.value?.eClass?.();
      if (g)
        return n.value !== g && (n.value = g, u.value = kr(Yr(g))), u.value;
    }), h = T(() => (i.value?.eClass?.().getEStructuralFeatures().length ?? 0) > 0);
    return (c, E) => (I(), R("div", bo, [
      l.value && i.value && h.value ? (I(), H(ue(Ta), {
        key: 0,
        "ui-model": l.value,
        model: i.value
      }, null, 8, ["ui-model", "model"])) : (I(), R("p", Mo, xe(s.emptyText ?? "Für dieses Widget sind keine Einstellungen modelliert."), 1))
    ]));
  }
}), Uo = /* @__PURE__ */ $r(Vo, [["__scopeId", "data-v-2eb13ad3"]]), Bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SettingsFieldWidget: Sa,
  SettingsForm: Uo,
  SettingsListWidget: _i,
  SettingsObjectWidget: Oi,
  adopt: Ii,
  asModel: Ni,
  formFor: Yr,
  isModelled: mi,
  kindOf: Br,
  labelOf: fr,
  loadUIModel: ua
}, Symbol.toStringTag, { value: "Module" })), Pa = "org.eclipse.daanse.board.app.ui.vue.uimodel", Go = "0.0.1-next.1";
async function Qo(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${Pa}: tsm runtime is not initialized`);
  e.register(Pa, Bo, Go, "ui.vue.uimodel"), await void 0;
}
async function Jo(s) {
  await void 0;
}
export {
  Sa as SettingsFieldWidget,
  Uo as SettingsForm,
  _i as SettingsListWidget,
  Oi as SettingsObjectWidget,
  Qo as activate,
  Ii as adopt,
  Ni as asModel,
  Jo as deactivate,
  Yr as formFor,
  mi as isModelled,
  Br as kindOf,
  fr as labelOf,
  ua as loadUIModel
};
