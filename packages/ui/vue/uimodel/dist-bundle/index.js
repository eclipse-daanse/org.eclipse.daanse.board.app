(function(){var i="ui.vue.uimodel",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".list[data-v-b0db9508]{margin-bottom:12px}.list__head[data-v-b0db9508]{display:flex;align-items:center;gap:7px;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid var(--color-divider)}.list__label[data-v-b0db9508]{font-family:var(--font-sans);font-size:var(--text-sm);font-weight:600;color:var(--color-fg)}.list__count[data-v-b0db9508]{font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.list__spacer[data-v-b0db9508]{flex:1 1 auto}.list__empty[data-v-b0db9508],.list__untyped[data-v-b0db9508]{margin:0 0 8px;font-size:var(--text-xs);line-height:1.5;color:var(--color-dim)}.entry[data-v-b0db9508]{position:relative;margin-bottom:3px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.entry__head[data-v-b0db9508]{display:flex;align-items:center;gap:6px;width:100%;padding:5px 78px 5px 8px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);text-align:left;background:none;border:0;cursor:pointer}.entry__twist[data-v-b0db9508]{width:10px;font-size:var(--text-xs);color:var(--color-dim)}.entry__actions[data-v-b0db9508]{position:absolute;top:3px;right:5px;display:flex;gap:2px}.entry__actions button[data-v-b0db9508]{width:20px;height:20px;font-size:var(--text-xs);color:var(--color-dim);background:none;border:1px solid transparent;border-radius:var(--radius-xs);cursor:pointer}.entry__actions button[data-v-b0db9508]:hover:not(:disabled){color:var(--color-fg);border-color:var(--color-divider)}.entry__actions button[data-v-b0db9508]:disabled{opacity:.3;cursor:default}.entry__remove[data-v-b0db9508]:hover:not(:disabled){color:var(--color-err)}.entry__actions button[data-v-b0db9508]:focus-visible,.entry__head[data-v-b0db9508]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.entry__body[data-v-b0db9508]{padding:8px 10px 10px;border-top:1px solid var(--color-divider)}.object[data-v-8adcf520]{margin-bottom:12px}.object__label[data-v-8adcf520]{display:block;margin-bottom:6px;font-size:12px;font-weight:600;color:var(--d-text-muted, #6b7280)}.object__body[data-v-8adcf520]{padding-left:10px;border-left:2px solid var(--d-border, #e5e7eb)}.object__untyped[data-v-8adcf520]{margin:0;font-size:12px;color:var(--d-text-muted, #6b7280)}.set[data-v-fe1813a4]{margin:0 0 7px;padding:0;border:0}.set__label[data-v-fe1813a4]{padding:0;margin-bottom:4px;font-size:12px;color:var(--d-text-muted, #6b7280)}.field-row[data-v-fe1813a4]{display:flex;align-items:flex-start;gap:6px}.field-row__control[data-v-fe1813a4]{flex:1 1 auto;min-width:0}.field-row--bound[data-v-fe1813a4]{border-left:2px solid var(--color-brand);padding-left:6px;margin-left:-8px}.bind[data-v-fe1813a4]{width:24px;height:26px;flex:none;margin-top:0;font-family:var(--font-mono);font-size:var(--text-xs);font-style:italic;color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.bind[data-v-fe1813a4]:hover{color:var(--color-fg);border-color:var(--color-outline)}.bind.armed[data-v-fe1813a4]{color:var(--color-accent);border-color:var(--color-accent)}.bind.on[data-v-fe1813a4]{color:var(--color-brand);border-color:var(--color-brand);background-color:color-mix(in srgb,var(--color-brand) 14%,transparent)}.bind[data-v-fe1813a4]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.settings-form[data-v-48444f2b]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.settings-form[data-v-48444f2b] .uim-c-GroupWidget{padding-top:10px;margin-top:12px;border-top:1px solid var(--color-divider)}.settings-form[data-v-48444f2b] .uim-c-GroupWidget:first-child{padding-top:0;margin-top:0;border-top:0}.settings-form[data-v-48444f2b] .uim-group-label{display:block;margin-bottom:7px;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:650;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim)}.settings-form__empty[data-v-48444f2b]{margin:0;padding:12px 0;font-size:var(--text-sm);color:var(--color-dim)}\n";})();
import { inject as St, watchEffect as bi, onScopeDispose as ga, ref as pr, computed as f, watch as Dt, toValue as Qe, defineComponent as le, createBlock as H, createCommentVNode as oe, openBlock as m, resolveDynamicComponent as da, mergeProps as pa, createElementBlock as D, createElementVNode as ne, createTextVNode as Wa, toDisplayString as Ye, unref as re, createVNode as gr, Fragment as mt, renderList as wt, provide as Ir, withCtx as Mi, normalizeClass as Oa, mergeModels as Vi, useModel as Ui, onMounted as Bi, shallowRef as Aa, markRaw as Xr } from "vue";
import { BasicEPackage as Gi, BasicEClass as P, BasicEAttribute as I, BasicEReference as _, getEcorePackage as is, BasicEObject as It, BasicEFactory as Wi, EContentAdapter as $a, URI as zr, EPackageRegistry as yr, BasicResourceSet as $i, XMIResourceFactory as Yi, registerEcorePackage as ki } from "@emfts/core";
import { VariableWrapper as Qr, useTranslation as xi } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DButton as Xi, DSelect as ya, DInput as ur, DCheckbox as Ca, DColorInput as Hi } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { identifier as ji } from "org.eclipse.daanse.board.app.lib.api.variable";
var qi = Object.defineProperty, Ki = (s, e, t) => e in s ? qi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, nr = (s, e, t) => Ki(s, typeof e != "symbol" ? e + "" : e, t);
const us = class a extends Gi {
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
    const e = new P();
    e.setName("UIModel"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), a.Literals.U_I_MODEL = e;
    const t = new I();
    t.setName("name"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), a.Literals.U_I_MODEL__NAME = t;
    const r = new _();
    r.setContainment(!1), r.setName("targetClasses"), r.setLowerBound(0), r.setUpperBound(-1), e.getEStructuralFeatures().push(r), a.Literals.U_I_MODEL__TARGET_CLASSES = r;
    const i = new I();
    i.setName("priority"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), a.Literals.U_I_MODEL__PRIORITY = i;
    const u = new _();
    u.setContainment(!0), u.setName("filterExpression"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), a.Literals.U_I_MODEL__FILTER_EXPRESSION = u;
    const n = new _();
    n.setContainment(!0), n.setName("styles"), n.setLowerBound(0), n.setUpperBound(-1), e.getEStructuralFeatures().push(n), a.Literals.U_I_MODEL__STYLES = n;
    const l = new _();
    l.setContainment(!0), l.setName("templates"), l.setLowerBound(0), l.setUpperBound(-1), e.getEStructuralFeatures().push(l), a.Literals.U_I_MODEL__TEMPLATES = l;
    const g = new _();
    g.setContainment(!0), g.setName("components"), g.setLowerBound(1), g.setUpperBound(-1), e.getEStructuralFeatures().push(g), a.Literals.U_I_MODEL__COMPONENTS = g;
    const c = new P();
    c.setName("Component"), c.setAbstract(!0), c.setInterface(!1), this.getEClassifiers().push(c), c.setEPackage(this), a.Literals.COMPONENT = c;
    const E = new I();
    E.setName("name"), E.setLowerBound(1), E.setUpperBound(1), c.getEStructuralFeatures().push(E), a.Literals.COMPONENT__NAME = E;
    const d = new I();
    d.setName("group"), d.setLowerBound(0), d.setUpperBound(1), c.getEStructuralFeatures().push(d), a.Literals.COMPONENT__GROUP = d;
    const o = new _();
    o.setContainment(!1), o.setName("targetClasses"), o.setLowerBound(0), o.setUpperBound(-1), c.getEStructuralFeatures().push(o), a.Literals.COMPONENT__TARGET_CLASSES = o;
    const p = new _();
    p.setContainment(!1), p.setName("styles"), p.setLowerBound(0), p.setUpperBound(-1), c.getEStructuralFeatures().push(p), a.Literals.COMPONENT__STYLES = p;
    const w = new _();
    w.setContainment(!1), w.setName("children"), w.setLowerBound(0), w.setUpperBound(-1), c.getEStructuralFeatures().push(w), a.Literals.COMPONENT__CHILDREN = w;
    const B = new P();
    B.setName("FormView"), B.setAbstract(!1), B.setInterface(!1), this.getEClassifiers().push(B), B.setEPackage(this), a.Literals.FORM_VIEW = B;
    const T = new _();
    T.setContainment(!0), T.setName("fields"), T.setLowerBound(0), T.setUpperBound(-1), B.getEStructuralFeatures().push(T), a.Literals.FORM_VIEW__FIELDS = T;
    const v = new _();
    v.setContainment(!0), v.setName("validations"), v.setLowerBound(0), v.setUpperBound(-1), B.getEStructuralFeatures().push(v), a.Literals.FORM_VIEW__VALIDATIONS = v;
    const G = new _();
    G.setContainment(!0), G.setName("validationMappers"), G.setLowerBound(0), G.setUpperBound(-1), B.getEStructuralFeatures().push(G), a.Literals.FORM_VIEW__VALIDATION_MAPPERS = G;
    const y = new I();
    y.setName("mapperOrder"), y.setLowerBound(0), y.setUpperBound(1), B.getEStructuralFeatures().push(y), a.Literals.FORM_VIEW__MAPPER_ORDER = y;
    const V = new P();
    V.setName("TableView"), V.setAbstract(!1), V.setInterface(!1), this.getEClassifiers().push(V), V.setEPackage(this), a.Literals.TABLE_VIEW = V;
    const q = new _();
    q.setContainment(!0), q.setName("tableStyle"), q.setLowerBound(1), q.setUpperBound(1), V.getEStructuralFeatures().push(q), a.Literals.TABLE_VIEW__TABLE_STYLE = q;
    const U = new P();
    U.setName("SectionView"), U.setAbstract(!1), U.setInterface(!1), this.getEClassifiers().push(U), U.setEPackage(this), a.Literals.SECTION_VIEW = U;
    const ge = new _();
    ge.setContainment(!0), ge.setName("sections"), ge.setLowerBound(1), ge.setUpperBound(-1), U.getEStructuralFeatures().push(ge), a.Literals.SECTION_VIEW__SECTIONS = ge;
    const X = new P();
    X.setName("TabView"), X.setAbstract(!1), X.setInterface(!1), this.getEClassifiers().push(X), X.setEPackage(this), a.Literals.TAB_VIEW = X;
    const ke = new _();
    ke.setContainment(!0), ke.setName("tabs"), ke.setLowerBound(1), ke.setUpperBound(-1), X.getEStructuralFeatures().push(ke), a.Literals.TAB_VIEW__TABS = ke;
    const Re = new P();
    Re.setName("SummaryView"), Re.setAbstract(!1), Re.setInterface(!1), this.getEClassifiers().push(Re), Re.setEPackage(this), a.Literals.SUMMARY_VIEW = Re;
    const Ze = new _();
    Ze.setContainment(!0), Ze.setName("summaryFields"), Ze.setLowerBound(1), Ze.setUpperBound(-1), Re.getEStructuralFeatures().push(Ze), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS = Ze;
    const we = new P();
    we.setName("MasterDetail"), we.setAbstract(!1), we.setInterface(!1), this.getEClassifiers().push(we), we.setEPackage(this), a.Literals.MASTER_DETAIL = we;
    const xe = new _();
    xe.setContainment(!0), xe.setName("master"), xe.setLowerBound(1), xe.setUpperBound(1), we.getEStructuralFeatures().push(xe), a.Literals.MASTER_DETAIL__MASTER = xe;
    const Je = new _();
    Je.setContainment(!0), Je.setName("detail"), Je.setLowerBound(1), Je.setUpperBound(1), we.getEStructuralFeatures().push(Je), a.Literals.MASTER_DETAIL__DETAIL = Je;
    const K = new P();
    K.setName("WidgetComponent"), K.setAbstract(!0), K.setInterface(!1), this.getEClassifiers().push(K), K.setEPackage(this), a.Literals.WIDGET_COMPONENT = K;
    const ce = new _();
    ce.setContainment(!1), ce.setName("feature"), ce.setLowerBound(0), ce.setUpperBound(1), K.getEStructuralFeatures().push(ce), a.Literals.WIDGET_COMPONENT__FEATURE = ce;
    const et = new I();
    et.setName("label"), et.setLowerBound(0), et.setUpperBound(1), K.getEStructuralFeatures().push(et), a.Literals.WIDGET_COMPONENT__LABEL = et;
    const ie = new I();
    ie.setName("placeholder"), ie.setLowerBound(0), ie.setUpperBound(1), K.getEStructuralFeatures().push(ie), a.Literals.WIDGET_COMPONENT__PLACEHOLDER = ie;
    const tt = new I();
    tt.setName("readOnly"), tt.setLowerBound(0), tt.setUpperBound(1), K.getEStructuralFeatures().push(tt), a.Literals.WIDGET_COMPONENT__READ_ONLY = tt;
    const h = new I();
    h.setName("required"), h.setLowerBound(0), h.setUpperBound(1), K.getEStructuralFeatures().push(h), a.Literals.WIDGET_COMPONENT__REQUIRED = h;
    const S = new _();
    S.setContainment(!0), S.setName("visibilityCondition"), S.setLowerBound(0), S.setUpperBound(1), K.getEStructuralFeatures().push(S), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION = S;
    const L = new _();
    L.setContainment(!0), L.setName("validations"), L.setLowerBound(0), L.setUpperBound(-1), K.getEStructuralFeatures().push(L), a.Literals.WIDGET_COMPONENT__VALIDATIONS = L;
    const j = new _();
    j.setContainment(!0), j.setName("validationMappers"), j.setLowerBound(0), j.setUpperBound(-1), K.getEStructuralFeatures().push(j), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS = j;
    const ue = new _();
    ue.setContainment(!0), ue.setName("bindings"), ue.setLowerBound(0), ue.setUpperBound(-1), K.getEStructuralFeatures().push(ue), a.Literals.WIDGET_COMPONENT__BINDINGS = ue;
    const Fe = new P();
    Fe.setName("PropertyBinding"), Fe.setAbstract(!1), Fe.setInterface(!1), this.getEClassifiers().push(Fe), Fe.setEPackage(this), a.Literals.PROPERTY_BINDING = Fe;
    const st = new I();
    st.setName("property"), st.setLowerBound(1), st.setUpperBound(1), Fe.getEStructuralFeatures().push(st), a.Literals.PROPERTY_BINDING__PROPERTY = st;
    const Pe = new _();
    Pe.setContainment(!0), Pe.setName("expression"), Pe.setLowerBound(1), Pe.setUpperBound(1), Fe.getEStructuralFeatures().push(Pe), a.Literals.PROPERTY_BINDING__EXPRESSION = Pe;
    const Xe = new P();
    Xe.setName("InputWidget"), Xe.setAbstract(!1), Xe.setInterface(!1), this.getEClassifiers().push(Xe), Xe.setEPackage(this), a.Literals.INPUT_WIDGET = Xe;
    const ps = new I();
    ps.setName("maxLength"), ps.setLowerBound(0), ps.setUpperBound(1), Xe.getEStructuralFeatures().push(ps), a.Literals.INPUT_WIDGET__MAX_LENGTH = ps;
    const fs = new I();
    fs.setName("value"), fs.setLowerBound(0), fs.setUpperBound(1), Xe.getEStructuralFeatures().push(fs), a.Literals.INPUT_WIDGET__VALUE = fs;
    const Ts = new I();
    Ts.setName("password"), Ts.setLowerBound(0), Ts.setUpperBound(1), Xe.getEStructuralFeatures().push(Ts), a.Literals.INPUT_WIDGET__PASSWORD = Ts;
    const He = new P();
    He.setName("TextAreaWidget"), He.setAbstract(!1), He.setInterface(!1), this.getEClassifiers().push(He), He.setEPackage(this), a.Literals.TEXT_AREA_WIDGET = He;
    const Ss = new I();
    Ss.setName("rows"), Ss.setLowerBound(0), Ss.setUpperBound(1), He.getEStructuralFeatures().push(Ss), a.Literals.TEXT_AREA_WIDGET__ROWS = Ss;
    const ms = new I();
    ms.setName("maxLength"), ms.setLowerBound(0), ms.setUpperBound(1), He.getEStructuralFeatures().push(ms), a.Literals.TEXT_AREA_WIDGET__MAX_LENGTH = ms;
    const Is = new I();
    Is.setName("value"), Is.setLowerBound(0), Is.setUpperBound(1), He.getEStructuralFeatures().push(Is), a.Literals.TEXT_AREA_WIDGET__VALUE = Is;
    const be = new P();
    be.setName("NumberWidget"), be.setAbstract(!1), be.setInterface(!1), this.getEClassifiers().push(be), be.setEPackage(this), a.Literals.NUMBER_WIDGET = be;
    const Ns = new I();
    Ns.setName("min"), Ns.setLowerBound(0), Ns.setUpperBound(1), be.getEStructuralFeatures().push(Ns), a.Literals.NUMBER_WIDGET__MIN = Ns;
    const vs = new I();
    vs.setName("max"), vs.setLowerBound(0), vs.setUpperBound(1), be.getEStructuralFeatures().push(vs), a.Literals.NUMBER_WIDGET__MAX = vs;
    const Ls = new I();
    Ls.setName("step"), Ls.setLowerBound(0), Ls.setUpperBound(1), be.getEStructuralFeatures().push(Ls), a.Literals.NUMBER_WIDGET__STEP = Ls;
    const _s = new I();
    _s.setName("value"), _s.setLowerBound(0), _s.setUpperBound(1), be.getEStructuralFeatures().push(_s), a.Literals.NUMBER_WIDGET__VALUE = _s;
    const rt = new P();
    rt.setName("CheckboxWidget"), rt.setAbstract(!1), rt.setInterface(!1), this.getEClassifiers().push(rt), rt.setEPackage(this), a.Literals.CHECKBOX_WIDGET = rt;
    const Os = new I();
    Os.setName("asToggle"), Os.setLowerBound(0), Os.setUpperBound(1), rt.getEStructuralFeatures().push(Os), a.Literals.CHECKBOX_WIDGET__AS_TOGGLE = Os;
    const As = new I();
    As.setName("value"), As.setLowerBound(0), As.setUpperBound(1), rt.getEStructuralFeatures().push(As), a.Literals.CHECKBOX_WIDGET__VALUE = As;
    const Me = new P();
    Me.setName("DateWidget"), Me.setAbstract(!1), Me.setInterface(!1), this.getEClassifiers().push(Me), Me.setEPackage(this), a.Literals.DATE_WIDGET = Me;
    const ys = new I();
    ys.setName("withTime"), ys.setLowerBound(0), ys.setUpperBound(1), Me.getEStructuralFeatures().push(ys), a.Literals.DATE_WIDGET__WITH_TIME = ys;
    const Cs = new I();
    Cs.setName("format"), Cs.setLowerBound(0), Cs.setUpperBound(1), Me.getEStructuralFeatures().push(Cs), a.Literals.DATE_WIDGET__FORMAT = Cs;
    const bt = new _();
    bt.setContainment(!1), bt.setName("constrains"), bt.setLowerBound(0), bt.setUpperBound(1), Me.getEStructuralFeatures().push(bt), a.Literals.DATE_WIDGET__CONSTRAINS = bt;
    const Ds = new I();
    Ds.setName("value"), Ds.setLowerBound(0), Ds.setUpperBound(1), Me.getEStructuralFeatures().push(Ds), a.Literals.DATE_WIDGET__VALUE = Ds;
    const je = new P();
    je.setName("ComboboxWidget"), je.setAbstract(!1), je.setInterface(!1), this.getEClassifiers().push(je), je.setEPackage(this), a.Literals.COMBOBOX_WIDGET = je;
    const Mt = new _();
    Mt.setContainment(!0), Mt.setName("optionLabel"), Mt.setLowerBound(0), Mt.setUpperBound(1), je.getEStructuralFeatures().push(Mt), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL = Mt;
    const Rs = new I();
    Rs.setName("minSearchLength"), Rs.setLowerBound(0), Rs.setUpperBound(1), je.getEStructuralFeatures().push(Rs), a.Literals.COMBOBOX_WIDGET__MIN_SEARCH_LENGTH = Rs;
    const ws = new I();
    ws.setName("multiSelect"), ws.setLowerBound(0), ws.setUpperBound(1), je.getEStructuralFeatures().push(ws), a.Literals.COMBOBOX_WIDGET__MULTI_SELECT = ws;
    const Ve = new P();
    Ve.setName("SelectWidget"), Ve.setAbstract(!1), Ve.setInterface(!1), this.getEClassifiers().push(Ve), Ve.setEPackage(this), a.Literals.SELECT_WIDGET = Ve;
    const Vt = new _();
    Vt.setContainment(!0), Vt.setName("optionLabel"), Vt.setLowerBound(0), Vt.setUpperBound(1), Ve.getEStructuralFeatures().push(Vt), a.Literals.SELECT_WIDGET__OPTION_LABEL = Vt;
    const Fs = new I();
    Fs.setName("multiSelect"), Fs.setLowerBound(0), Fs.setUpperBound(1), Ve.getEStructuralFeatures().push(Fs), a.Literals.SELECT_WIDGET__MULTI_SELECT = Fs;
    const Ps = new I();
    Ps.setName("asButtonGroup"), Ps.setLowerBound(0), Ps.setUpperBound(1), Ve.getEStructuralFeatures().push(Ps), a.Literals.SELECT_WIDGET__AS_BUTTON_GROUP = Ps;
    const bs = new I();
    bs.setName("values"), bs.setLowerBound(0), bs.setUpperBound(-1), Ve.getEStructuralFeatures().push(bs), a.Literals.SELECT_WIDGET__VALUES = bs;
    const _e = new P();
    _e.setName("AllFeatures"), _e.setAbstract(!1), _e.setInterface(!1), this.getEClassifiers().push(_e), _e.setEPackage(this), a.Literals.ALL_FEATURES = _e;
    const Ut = new _();
    Ut.setContainment(!1), Ut.setName("with"), Ut.setLowerBound(0), Ut.setUpperBound(-1), _e.getEStructuralFeatures().push(Ut), a.Literals.ALL_FEATURES__WITH = Ut;
    const Bt = new _();
    Bt.setContainment(!1), Bt.setName("eType"), Bt.setLowerBound(0), Bt.setUpperBound(-1), _e.getEStructuralFeatures().push(Bt), a.Literals.ALL_FEATURES__E_TYPE = Bt;
    const Gt = new _();
    Gt.setContainment(!0), Gt.setName("filter"), Gt.setLowerBound(0), Gt.setUpperBound(1), _e.getEStructuralFeatures().push(Gt), a.Literals.ALL_FEATURES__FILTER = Gt;
    const Wt = new _();
    Wt.setContainment(!1), Wt.setName("template"), Wt.setLowerBound(0), Wt.setUpperBound(1), _e.getEStructuralFeatures().push(Wt), a.Literals.ALL_FEATURES__TEMPLATE = Wt;
    const $t = new _();
    $t.setContainment(!0), $t.setName("cases"), $t.setLowerBound(0), $t.setUpperBound(-1), _e.getEStructuralFeatures().push($t), a.Literals.ALL_FEATURES__CASES = $t;
    const Ms = new I();
    Ms.setName("priority"), Ms.setLowerBound(0), Ms.setUpperBound(1), _e.getEStructuralFeatures().push(Ms), a.Literals.ALL_FEATURES__PRIORITY = Ms;
    const at = new P();
    at.setName("TemplateCase"), at.setAbstract(!1), at.setInterface(!1), this.getEClassifiers().push(at), at.setEPackage(this), a.Literals.TEMPLATE_CASE = at;
    const Yt = new _();
    Yt.setContainment(!0), Yt.setName("when"), Yt.setLowerBound(0), Yt.setUpperBound(1), at.getEStructuralFeatures().push(Yt), a.Literals.TEMPLATE_CASE__WHEN = Yt;
    const kt = new _();
    kt.setContainment(!1), kt.setName("widget"), kt.setLowerBound(1), kt.setUpperBound(1), at.getEStructuralFeatures().push(kt), a.Literals.TEMPLATE_CASE__WIDGET = kt;
    const it = new P();
    it.setName("GroupWidget"), it.setAbstract(!1), it.setInterface(!1), this.getEClassifiers().push(it), it.setEPackage(this), a.Literals.GROUP_WIDGET = it;
    const xt = new _();
    xt.setContainment(!0), xt.setName("fields"), xt.setLowerBound(0), xt.setUpperBound(-1), it.getEStructuralFeatures().push(xt), a.Literals.GROUP_WIDGET__FIELDS = xt;
    const Vs = new I();
    Vs.setName("layout"), Vs.setLowerBound(0), Vs.setUpperBound(1), it.getEStructuralFeatures().push(Vs), a.Literals.GROUP_WIDGET__LAYOUT = Vs;
    const qe = new P();
    qe.setName("Conditional"), qe.setAbstract(!1), qe.setInterface(!1), this.getEClassifiers().push(qe), qe.setEPackage(this), a.Literals.CONDITIONAL = qe;
    const Xt = new _();
    Xt.setContainment(!0), Xt.setName("condition"), Xt.setLowerBound(1), Xt.setUpperBound(1), qe.getEStructuralFeatures().push(Xt), a.Literals.CONDITIONAL__CONDITION = Xt;
    const Ht = new _();
    Ht.setContainment(!0), Ht.setName("then"), Ht.setLowerBound(0), Ht.setUpperBound(-1), qe.getEStructuralFeatures().push(Ht), a.Literals.CONDITIONAL__THEN = Ht;
    const jt = new _();
    jt.setContainment(!0), jt.setName("else"), jt.setLowerBound(0), jt.setUpperBound(-1), qe.getEStructuralFeatures().push(jt), a.Literals.CONDITIONAL__ELSE = jt;
    const Ke = new P();
    Ke.setName("ForEach"), Ke.setAbstract(!1), Ke.setInterface(!1), this.getEClassifiers().push(Ke), Ke.setEPackage(this), a.Literals.FOR_EACH = Ke;
    const qt = new _();
    qt.setContainment(!0), qt.setName("items"), qt.setLowerBound(1), qt.setUpperBound(1), Ke.getEStructuralFeatures().push(qt), a.Literals.FOR_EACH__ITEMS = qt;
    const Kt = new _();
    Kt.setContainment(!0), Kt.setName("body"), Kt.setLowerBound(0), Kt.setUpperBound(-1), Ke.getEStructuralFeatures().push(Kt), a.Literals.FOR_EACH__BODY = Kt;
    const Us = new I();
    Us.setName("emptyText"), Us.setLowerBound(0), Us.setUpperBound(1), Ke.getEStructuralFeatures().push(Us), a.Literals.FOR_EACH__EMPTY_TEXT = Us;
    const ut = new P();
    ut.setName("ReferenceLinkWidget"), ut.setAbstract(!1), ut.setInterface(!1), this.getEClassifiers().push(ut), ut.setEPackage(this), a.Literals.REFERENCE_LINK_WIDGET = ut;
    const zt = new _();
    zt.setContainment(!0), zt.setName("displayExpression"), zt.setLowerBound(0), zt.setUpperBound(1), ut.getEStructuralFeatures().push(zt), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION = zt;
    const Bs = new I();
    Bs.setName("targetRoute"), Bs.setLowerBound(0), Bs.setUpperBound(1), ut.getEStructuralFeatures().push(Bs), a.Literals.REFERENCE_LINK_WIDGET__TARGET_ROUTE = Bs;
    const Ue = new P();
    Ue.setName("UIModelOverlay"), Ue.setAbstract(!1), Ue.setInterface(!1), this.getEClassifiers().push(Ue), Ue.setEPackage(this), a.Literals.U_I_MODEL_OVERLAY = Ue;
    const Gs = new I();
    Gs.setName("name"), Gs.setLowerBound(0), Gs.setUpperBound(1), Ue.getEStructuralFeatures().push(Gs), a.Literals.U_I_MODEL_OVERLAY__NAME = Gs;
    const Ws = new I();
    Ws.setName("priority"), Ws.setLowerBound(0), Ws.setUpperBound(1), Ue.getEStructuralFeatures().push(Ws), a.Literals.U_I_MODEL_OVERLAY__PRIORITY = Ws;
    const Qt = new _();
    Qt.setContainment(!0), Qt.setName("templates"), Qt.setLowerBound(0), Qt.setUpperBound(-1), Ue.getEStructuralFeatures().push(Qt), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES = Qt;
    const Zt = new _();
    Zt.setContainment(!0), Zt.setName("cases"), Zt.setLowerBound(0), Zt.setUpperBound(-1), Ue.getEStructuralFeatures().push(Zt), a.Literals.U_I_MODEL_OVERLAY__CASES = Zt;
    const nt = new P();
    nt.setName("Style"), nt.setAbstract(!0), nt.setInterface(!0), this.getEClassifiers().push(nt), nt.setEPackage(this), a.Literals.STYLE = nt;
    const $s = new I();
    $s.setName("name"), $s.setLowerBound(0), $s.setUpperBound(1), nt.getEStructuralFeatures().push($s), a.Literals.STYLE__NAME = $s;
    const Ys = new I();
    Ys.setName("group"), Ys.setLowerBound(0), Ys.setUpperBound(1), nt.getEStructuralFeatures().push(Ys), a.Literals.STYLE__GROUP = Ys;
    const Be = new P();
    Be.setName("BaseStyle"), Be.setAbstract(!0), Be.setInterface(!1), this.getEClassifiers().push(Be), Be.setEPackage(this), a.Literals.BASE_STYLE = Be;
    const Jt = new _();
    Jt.setContainment(!1), Jt.setName("extends"), Jt.setLowerBound(0), Jt.setUpperBound(1), Be.getEStructuralFeatures().push(Jt), a.Literals.BASE_STYLE__EXTENDS = Jt;
    const ks = new I();
    ks.setName("css"), ks.setLowerBound(0), ks.setUpperBound(1), Be.getEStructuralFeatures().push(ks), a.Literals.BASE_STYLE__CSS = ks;
    const xs = new I();
    xs.setName("vueComponent"), xs.setLowerBound(0), xs.setUpperBound(1), Be.getEStructuralFeatures().push(xs), a.Literals.BASE_STYLE__VUE_COMPONENT = xs;
    const es = new _();
    es.setContainment(!0), es.setName("visibilityCondition"), es.setLowerBound(0), es.setUpperBound(1), Be.getEStructuralFeatures().push(es), a.Literals.BASE_STYLE__VISIBILITY_CONDITION = es;
    const lt = new P();
    lt.setName("LayoutStyle"), lt.setAbstract(!1), lt.setInterface(!1), this.getEClassifiers().push(lt), lt.setEPackage(this), a.Literals.LAYOUT_STYLE = lt;
    const Xs = new I();
    Xs.setName("layout"), Xs.setLowerBound(0), Xs.setUpperBound(1), lt.getEStructuralFeatures().push(Xs), a.Literals.LAYOUT_STYLE__LAYOUT = Xs;
    const Hs = new I();
    Hs.setName("order"), Hs.setLowerBound(0), Hs.setUpperBound(1), lt.getEStructuralFeatures().push(Hs), a.Literals.LAYOUT_STYLE__ORDER = Hs;
    const Ce = new P();
    Ce.setName("WidgetStyle"), Ce.setAbstract(!1), Ce.setInterface(!1), this.getEClassifiers().push(Ce), Ce.setEPackage(this), a.Literals.WIDGET_STYLE = Ce;
    const ts = new _();
    ts.setContainment(!1), ts.setName("feature"), ts.setLowerBound(0), ts.setUpperBound(1), Ce.getEStructuralFeatures().push(ts), a.Literals.WIDGET_STYLE__FEATURE = ts;
    const js = new I();
    js.setName("widgetType"), js.setLowerBound(0), js.setUpperBound(1), Ce.getEStructuralFeatures().push(js), a.Literals.WIDGET_STYLE__WIDGET_TYPE = js;
    const qs = new I();
    qs.setName("label"), qs.setLowerBound(0), qs.setUpperBound(1), Ce.getEStructuralFeatures().push(qs), a.Literals.WIDGET_STYLE__LABEL = qs;
    const Ks = new I();
    Ks.setName("readOnly"), Ks.setLowerBound(0), Ks.setUpperBound(1), Ce.getEStructuralFeatures().push(Ks), a.Literals.WIDGET_STYLE__READ_ONLY = Ks;
    const zs = new I();
    zs.setName("order"), zs.setLowerBound(0), zs.setUpperBound(1), Ce.getEStructuralFeatures().push(zs), a.Literals.WIDGET_STYLE__ORDER = zs;
    const Nt = new P();
    Nt.setName("TableStyle"), Nt.setAbstract(!1), Nt.setInterface(!1), this.getEClassifiers().push(Nt), Nt.setEPackage(this), a.Literals.TABLE_STYLE = Nt;
    const ss = new _();
    ss.setContainment(!0), ss.setName("columns"), ss.setLowerBound(1), ss.setUpperBound(-1), Nt.getEStructuralFeatures().push(ss), a.Literals.TABLE_STYLE__COLUMNS = ss;
    const ot = new P();
    ot.setName("Expression"), ot.setAbstract(!1), ot.setInterface(!1), this.getEClassifiers().push(ot), ot.setEPackage(this), a.Literals.EXPRESSION = ot;
    const Qs = new I();
    Qs.setName("language"), Qs.setLowerBound(1), Qs.setUpperBound(1), ot.getEStructuralFeatures().push(Qs), a.Literals.EXPRESSION__LANGUAGE = Qs;
    const Zs = new I();
    Zs.setName("body"), Zs.setLowerBound(1), Zs.setUpperBound(1), ot.getEStructuralFeatures().push(Zs), a.Literals.EXPRESSION__BODY = Zs;
    const ct = new P();
    ct.setName("ValidationExpression"), ct.setAbstract(!1), ct.setInterface(!1), this.getEClassifiers().push(ct), ct.setEPackage(this), a.Literals.VALIDATION_EXPRESSION = ct;
    const Js = new I();
    Js.setName("defaultMessage"), Js.setLowerBound(0), Js.setUpperBound(1), ct.getEStructuralFeatures().push(Js), a.Literals.VALIDATION_EXPRESSION__DEFAULT_MESSAGE = Js;
    const er = new I();
    er.setName("severity"), er.setLowerBound(0), er.setUpperBound(1), ct.getEStructuralFeatures().push(er), a.Literals.VALIDATION_EXPRESSION__SEVERITY = er;
    const de = new P();
    de.setName("ValidationMessageMapper"), de.setAbstract(!1), de.setInterface(!1), this.getEClassifiers().push(de), de.setEPackage(this), a.Literals.VALIDATION_MESSAGE_MAPPER = de;
    const tr = new I();
    tr.setName("order"), tr.setLowerBound(0), tr.setUpperBound(1), de.getEStructuralFeatures().push(tr), a.Literals.VALIDATION_MESSAGE_MAPPER__ORDER = tr;
    const sr = new I();
    sr.setName("matchCode"), sr.setLowerBound(0), sr.setUpperBound(1), de.getEStructuralFeatures().push(sr), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_CODE = sr;
    const rr = new I();
    rr.setName("matchSeverity"), rr.setLowerBound(0), rr.setUpperBound(1), de.getEStructuralFeatures().push(rr), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_SEVERITY = rr;
    const rs = new _();
    rs.setContainment(!0), rs.setName("matchExpression"), rs.setLowerBound(0), rs.setUpperBound(1), de.getEStructuralFeatures().push(rs), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION = rs;
    const ar = new I();
    ar.setName("mappedText"), ar.setLowerBound(0), ar.setUpperBound(1), de.getEStructuralFeatures().push(ar), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT = ar;
    const as = new _();
    as.setContainment(!0), as.setName("mappedTextExpression"), as.setLowerBound(0), as.setUpperBound(1), de.getEStructuralFeatures().push(as), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION = as;
    const ir = new I();
    ir.setName("mappedSeverity"), ir.setLowerBound(0), ir.setUpperBound(1), de.getEStructuralFeatures().push(ir), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_SEVERITY = ir, a.Literals.FORM_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.TABLE_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.SECTION_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.TAB_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.SUMMARY_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.MASTER_DETAIL.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.WIDGET_COMPONENT.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.INPUT_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.TEXT_AREA_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.NUMBER_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.CHECKBOX_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.DATE_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.COMBOBOX_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.SELECT_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.ALL_FEATURES.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.GROUP_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.FOR_EACH.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.REFERENCE_LINK_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.BASE_STYLE.getESuperTypes().push(a.Literals.STYLE), a.Literals.LAYOUT_STYLE.getESuperTypes().push(a.Literals.BASE_STYLE), a.Literals.WIDGET_STYLE.getESuperTypes().push(a.Literals.BASE_STYLE), a.Literals.TABLE_STYLE.getESuperTypes().push(a.Literals.WIDGET_STYLE), a.Literals.VALIDATION_EXPRESSION.getESuperTypes().push(a.Literals.EXPRESSION), a.Literals.U_I_MODEL__TARGET_CLASSES.setEType(is().getEClassifier("EClass")), a.Literals.U_I_MODEL__FILTER_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.U_I_MODEL__STYLES.setEType(a.Literals.BASE_STYLE), a.Literals.U_I_MODEL__TEMPLATES.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.U_I_MODEL__COMPONENTS.setEType(a.Literals.COMPONENT), a.Literals.COMPONENT__TARGET_CLASSES.setEType(is().getEClassifier("EClass")), a.Literals.COMPONENT__STYLES.setEType(a.Literals.BASE_STYLE), a.Literals.COMPONENT__CHILDREN.setEType(a.Literals.COMPONENT), a.Literals.FORM_VIEW__FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.FORM_VIEW__VALIDATIONS.setEType(a.Literals.VALIDATION_EXPRESSION), a.Literals.FORM_VIEW__VALIDATION_MAPPERS.setEType(a.Literals.VALIDATION_MESSAGE_MAPPER), a.Literals.TABLE_VIEW__TABLE_STYLE.setEType(a.Literals.TABLE_STYLE), a.Literals.SECTION_VIEW__SECTIONS.setEType(a.Literals.FORM_VIEW), a.Literals.TAB_VIEW__TABS.setEType(a.Literals.COMPONENT), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.MASTER_DETAIL__MASTER.setEType(a.Literals.TABLE_VIEW), a.Literals.MASTER_DETAIL__DETAIL.setEType(a.Literals.COMPONENT), a.Literals.WIDGET_COMPONENT__FEATURE.setEType(is().getEClassifier("EStructuralFeature")), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.WIDGET_COMPONENT__VALIDATIONS.setEType(a.Literals.VALIDATION_EXPRESSION), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS.setEType(a.Literals.VALIDATION_MESSAGE_MAPPER), a.Literals.WIDGET_COMPONENT__BINDINGS.setEType(a.Literals.PROPERTY_BINDING), a.Literals.PROPERTY_BINDING__EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.DATE_WIDGET__CONSTRAINS.setEType(a.Literals.EXPRESSION), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL.setEType(a.Literals.EXPRESSION), a.Literals.SELECT_WIDGET__OPTION_LABEL.setEType(a.Literals.EXPRESSION), a.Literals.ALL_FEATURES__WITH.setEType(is().getEClassifier("EStructuralFeature")), a.Literals.ALL_FEATURES__E_TYPE.setEType(is().getEClassifier("EClassifier")), a.Literals.ALL_FEATURES__FILTER.setEType(a.Literals.EXPRESSION), a.Literals.ALL_FEATURES__TEMPLATE.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.ALL_FEATURES__CASES.setEType(a.Literals.TEMPLATE_CASE), a.Literals.TEMPLATE_CASE__WHEN.setEType(a.Literals.EXPRESSION), a.Literals.TEMPLATE_CASE__WIDGET.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.GROUP_WIDGET__FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL__CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.CONDITIONAL__THEN.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL__ELSE.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.FOR_EACH__ITEMS.setEType(a.Literals.EXPRESSION), a.Literals.FOR_EACH__BODY.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.U_I_MODEL_OVERLAY__CASES.setEType(a.Literals.TEMPLATE_CASE), a.Literals.BASE_STYLE__EXTENDS.setEType(a.Literals.BASE_STYLE), a.Literals.BASE_STYLE__VISIBILITY_CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.WIDGET_STYLE__FEATURE.setEType(is().getEClassifier("EStructuralFeature")), a.Literals.TABLE_STYLE__COLUMNS.setEType(a.Literals.WIDGET_STYLE), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION.setEType(a.Literals.EXPRESSION);
  }
};
nr(us, "eNAME", "uimodel"), nr(us, "eNS_URI", "http://uimodel/1.0"), nr(us, "eNS_PREFIX", "uimodel"), // Singleton instance
nr(us, "_instance"), /**
* Literals for quick access to metaclasses and features
*/
nr(us, "Literals", {
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
let R = us;
var zi = Object.defineProperty, Qi = (s, e, t) => e in s ? zi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ee = (s, e, t) => Qi(s, typeof e != "symbol" ? e + "" : e, t);
const Et = class O extends It {
  constructor() {
    super(...arguments), Ee(this, "_name"), Ee(this, "_targetClasses", []), Ee(this, "_priority", 0), Ee(this, "_filterExpression"), Ee(this, "_styles", []), Ee(this, "_templates", []), Ee(this, "_components", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.U_I_MODEL;
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
      getFeature: () => this.eClass().getEStructuralFeature(O.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(O.TARGET_CLASSES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.TARGET_CLASSES,
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
      getFeature: () => this.eClass().getEStructuralFeature(O.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.PRIORITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(O.FILTER_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.FILTER_EXPRESSION,
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
      getFeature: () => this.eClass().getEStructuralFeature(O.STYLES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.STYLES,
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
      getFeature: () => this.eClass().getEStructuralFeature(O.TEMPLATES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.TEMPLATES,
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
      getFeature: () => this.eClass().getEStructuralFeature(O.COMPONENTS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.COMPONENTS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case O.NAME:
        return this.name;
      case O.TARGET_CLASSES:
        return this.targetClasses;
      case O.PRIORITY:
        return this.priority;
      case O.FILTER_EXPRESSION:
        return this.filterExpression;
      case O.STYLES:
        return this.styles;
      case O.TEMPLATES:
        return this.templates;
      case O.COMPONENTS:
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
      case O.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case O.TARGET_CLASSES:
        this.targetClasses = t, super.eSet(e, t);
        break;
      case O.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case O.FILTER_EXPRESSION:
        this.filterExpression = t, super.eSet(e, t);
        break;
      case O.STYLES:
        this.styles = t, super.eSet(e, t);
        break;
      case O.TEMPLATES:
        this.templates = t, super.eSet(e, t);
        break;
      case O.COMPONENTS:
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
      case O.NAME:
        return this._name !== void 0;
      case O.TARGET_CLASSES:
        return this._targetClasses !== void 0 && this._targetClasses.length > 0;
      case O.PRIORITY:
        return this._priority !== 0;
      case O.FILTER_EXPRESSION:
        return this._filterExpression !== void 0;
      case O.STYLES:
        return this._styles !== void 0 && this._styles.length > 0;
      case O.TEMPLATES:
        return this._templates !== void 0 && this._templates.length > 0;
      case O.COMPONENTS:
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
      case O.NAME:
        this._name = void 0;
        return;
      case O.TARGET_CLASSES:
        this._targetClasses = [];
        return;
      case O.PRIORITY:
        this._priority = 0;
        return;
      case O.FILTER_EXPRESSION:
        this._filterExpression = void 0;
        return;
      case O.STYLES:
        this._styles = [];
        return;
      case O.TEMPLATES:
        this._templates = [];
        return;
      case O.COMPONENTS:
        this._components = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ee(Et, "NAME", 0), Ee(Et, "TARGET_CLASSES", 1), Ee(Et, "PRIORITY", 2), Ee(Et, "FILTER_EXPRESSION", 3), Ee(Et, "STYLES", 4), Ee(Et, "TEMPLATES", 5), Ee(Et, "COMPONENTS", 6);
let Zi = Et;
const Hr = {
  FIELD_THEN_FORM: "FIELD_THEN_FORM"
};
var Ji = Object.defineProperty, eu = (s, e, t) => e in s ? Ji(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, We = (s, e, t) => eu(s, typeof e != "symbol" ? e + "" : e, t);
const ns = class b extends It {
  constructor() {
    super(...arguments), We(this, "_name", ""), We(this, "_group"), We(this, "_targetClasses", []), We(this, "_styles", []), We(this, "_children", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.COMPONENT;
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
      getFeature: () => this.eClass().getEStructuralFeature(b.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(b.GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.GROUP,
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
      getFeature: () => this.eClass().getEStructuralFeature(b.TARGET_CLASSES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.TARGET_CLASSES,
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
      getFeature: () => this.eClass().getEStructuralFeature(b.STYLES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.STYLES,
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
      getFeature: () => this.eClass().getEStructuralFeature(b.CHILDREN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.CHILDREN,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case b.NAME:
        return this.name;
      case b.GROUP:
        return this.group;
      case b.TARGET_CLASSES:
        return this.targetClasses;
      case b.STYLES:
        return this.styles;
      case b.CHILDREN:
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
      case b.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case b.GROUP:
        this.group = t, super.eSet(e, t);
        break;
      case b.TARGET_CLASSES:
        this.targetClasses = t, super.eSet(e, t);
        break;
      case b.STYLES:
        this.styles = t, super.eSet(e, t);
        break;
      case b.CHILDREN:
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
      case b.NAME:
        return this._name !== "";
      case b.GROUP:
        return this._group !== void 0;
      case b.TARGET_CLASSES:
        return this._targetClasses !== void 0 && this._targetClasses.length > 0;
      case b.STYLES:
        return this._styles !== void 0 && this._styles.length > 0;
      case b.CHILDREN:
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
      case b.NAME:
        this._name = "";
        return;
      case b.GROUP:
        this._group = void 0;
        return;
      case b.TARGET_CLASSES:
        this._targetClasses = [];
        return;
      case b.STYLES:
        this._styles = [];
        return;
      case b.CHILDREN:
        this._children = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
We(ns, "NAME", 0), We(ns, "GROUP", 1), We(ns, "TARGET_CLASSES", 2), We(ns, "STYLES", 3), We(ns, "CHILDREN", 4);
let Ft = ns;
var tu = Object.defineProperty, su = (s, e, t) => e in s ? tu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, gt = (s, e, t) => su(s, typeof e != "symbol" ? e + "" : e, t);
const lr = class W extends Ft {
  constructor() {
    super(...arguments), gt(this, "_fields", []), gt(this, "_validations", []), gt(this, "_validationMappers", []), gt(this, "_mapperOrder", Hr.FIELD_THEN_FORM);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.FORM_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(W.FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.FIELDS,
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
      getFeature: () => this.eClass().getEStructuralFeature(W.VALIDATIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.VALIDATIONS,
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
      getFeature: () => this.eClass().getEStructuralFeature(W.VALIDATION_MAPPERS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.VALIDATION_MAPPERS,
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
      getFeature: () => this.eClass().getEStructuralFeature(W.MAPPER_ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.MAPPER_ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case W.FIELDS:
        return this.fields;
      case W.VALIDATIONS:
        return this.validations;
      case W.VALIDATION_MAPPERS:
        return this.validationMappers;
      case W.MAPPER_ORDER:
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
      case W.FIELDS:
        this.fields = t, super.eSet(e, t);
        break;
      case W.VALIDATIONS:
        this.validations = t, super.eSet(e, t);
        break;
      case W.VALIDATION_MAPPERS:
        this.validationMappers = t, super.eSet(e, t);
        break;
      case W.MAPPER_ORDER:
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
      case W.FIELDS:
        return this._fields !== void 0 && this._fields.length > 0;
      case W.VALIDATIONS:
        return this._validations !== void 0 && this._validations.length > 0;
      case W.VALIDATION_MAPPERS:
        return this._validationMappers !== void 0 && this._validationMappers.length > 0;
      case W.MAPPER_ORDER:
        return this._mapperOrder !== Hr.FIELD_THEN_FORM;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case W.FIELDS:
        this._fields = [];
        return;
      case W.VALIDATIONS:
        this._validations = [];
        return;
      case W.VALIDATION_MAPPERS:
        this._validationMappers = [];
        return;
      case W.MAPPER_ORDER:
        this._mapperOrder = Hr.FIELD_THEN_FORM;
        return;
      default:
        super.eUnset(e);
    }
  }
};
gt(lr, "FIELDS", 5), gt(lr, "VALIDATIONS", 6), gt(lr, "VALIDATION_MAPPERS", 7), gt(lr, "MAPPER_ORDER", 8);
let ru = lr;
var au = Object.defineProperty, iu = (s, e, t) => e in s ? au(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ya = (s, e, t) => iu(s, typeof e != "symbol" ? e + "" : e, t);
const ka = class vt extends Ft {
  constructor() {
    super(...arguments), Ya(this, "_tableStyle");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.TABLE_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(vt.TABLE_STYLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => vt.TABLE_STYLE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case vt.TABLE_STYLE:
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
      case vt.TABLE_STYLE:
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
      case vt.TABLE_STYLE:
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
      case vt.TABLE_STYLE:
        this._tableStyle = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ya(ka, "TABLE_STYLE", 5);
let uu = ka;
var nu = Object.defineProperty, lu = (s, e, t) => e in s ? nu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, xa = (s, e, t) => lu(s, typeof e != "symbol" ? e + "" : e, t);
const Xa = class Lt extends Ft {
  constructor() {
    super(...arguments), xa(this, "_sections", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.SECTION_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(Lt.SECTIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Lt.SECTIONS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Lt.SECTIONS:
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
      case Lt.SECTIONS:
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
      case Lt.SECTIONS:
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
      case Lt.SECTIONS:
        this._sections = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
xa(Xa, "SECTIONS", 5);
let ou = Xa;
var cu = Object.defineProperty, Eu = (s, e, t) => e in s ? cu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ha = (s, e, t) => Eu(s, typeof e != "symbol" ? e + "" : e, t);
const ja = class _t extends Ft {
  constructor() {
    super(...arguments), Ha(this, "_tabs", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.TAB_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(_t.TABS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => _t.TABS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case _t.TABS:
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
      case _t.TABS:
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
      case _t.TABS:
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
      case _t.TABS:
        this._tabs = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ha(ja, "TABS", 5);
let hu = ja;
var gu = Object.defineProperty, du = (s, e, t) => e in s ? gu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, qa = (s, e, t) => du(s, typeof e != "symbol" ? e + "" : e, t);
const Ka = class Ot extends Ft {
  constructor() {
    super(...arguments), qa(this, "_summaryFields", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.SUMMARY_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(Ot.SUMMARY_FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ot.SUMMARY_FIELDS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Ot.SUMMARY_FIELDS:
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
      case Ot.SUMMARY_FIELDS:
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
      case Ot.SUMMARY_FIELDS:
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
      case Ot.SUMMARY_FIELDS:
        this._summaryFields = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
qa(Ka, "SUMMARY_FIELDS", 5);
let pu = Ka;
var fu = Object.defineProperty, Tu = (s, e, t) => e in s ? fu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Cr = (s, e, t) => Tu(s, typeof e != "symbol" ? e + "" : e, t);
const Zr = class pe extends Ft {
  constructor() {
    super(...arguments), Cr(this, "_master"), Cr(this, "_detail");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.MASTER_DETAIL;
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
      getFeature: () => this.eClass().getEStructuralFeature(pe.MASTER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => pe.MASTER,
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
      getFeature: () => this.eClass().getEStructuralFeature(pe.DETAIL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => pe.DETAIL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case pe.MASTER:
        return this.master;
      case pe.DETAIL:
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
      case pe.MASTER:
        this.master = t, super.eSet(e, t);
        break;
      case pe.DETAIL:
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
      case pe.MASTER:
        return this._master !== void 0;
      case pe.DETAIL:
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
      case pe.MASTER:
        this._master = void 0;
        return;
      case pe.DETAIL:
        this._detail = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Cr(Zr, "MASTER", 5), Cr(Zr, "DETAIL", 6);
let Su = Zr;
var mu = Object.defineProperty, Iu = (s, e, t) => e in s ? mu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Dr = (s, e, t) => Iu(s, typeof e != "symbol" ? e + "" : e, t);
const Jr = class fe extends It {
  constructor() {
    super(...arguments), Dr(this, "_property", ""), Dr(this, "_expression");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.PROPERTY_BINDING;
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
      getFeature: () => this.eClass().getEStructuralFeature(fe.PROPERTY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => fe.PROPERTY,
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
      getFeature: () => this.eClass().getEStructuralFeature(fe.EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => fe.EXPRESSION,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case fe.PROPERTY:
        return this.property;
      case fe.EXPRESSION:
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
      case fe.PROPERTY:
        this.property = t, super.eSet(e, t);
        break;
      case fe.EXPRESSION:
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
      case fe.PROPERTY:
        return this._property !== "";
      case fe.EXPRESSION:
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
      case fe.PROPERTY:
        this._property = "";
        return;
      case fe.EXPRESSION:
        this._expression = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Dr(Jr, "PROPERTY", 0), Dr(Jr, "EXPRESSION", 1);
let Nu = Jr;
var vu = Object.defineProperty, Lu = (s, e, t) => e in s ? vu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, te = (s, e, t) => Lu(s, typeof e != "symbol" ? e + "" : e, t);
const Ge = class N extends Ft {
  constructor() {
    super(...arguments), te(this, "_feature"), te(this, "_label"), te(this, "_placeholder"), te(this, "_readOnly"), te(this, "_required"), te(this, "_visibilityCondition"), te(this, "_validations", []), te(this, "_validationMappers", []), te(this, "_bindings", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.WIDGET_COMPONENT;
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
      getFeature: () => this.eClass().getEStructuralFeature(N.FEATURE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.FEATURE,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.PLACEHOLDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.PLACEHOLDER,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.READ_ONLY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.READ_ONLY,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.REQUIRED),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.REQUIRED,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.VISIBILITY_CONDITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.VISIBILITY_CONDITION,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.VALIDATIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.VALIDATIONS,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.VALIDATION_MAPPERS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.VALIDATION_MAPPERS,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.BINDINGS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.BINDINGS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case N.FEATURE:
        return this.feature;
      case N.LABEL:
        return this.label;
      case N.PLACEHOLDER:
        return this.placeholder;
      case N.READ_ONLY:
        return this.readOnly;
      case N.REQUIRED:
        return this.required;
      case N.VISIBILITY_CONDITION:
        return this.visibilityCondition;
      case N.VALIDATIONS:
        return this.validations;
      case N.VALIDATION_MAPPERS:
        return this.validationMappers;
      case N.BINDINGS:
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
      case N.FEATURE:
        this.feature = t, super.eSet(e, t);
        break;
      case N.LABEL:
        this.label = t, super.eSet(e, t);
        break;
      case N.PLACEHOLDER:
        this.placeholder = t, super.eSet(e, t);
        break;
      case N.READ_ONLY:
        this.readOnly = t, super.eSet(e, t);
        break;
      case N.REQUIRED:
        this.required = t, super.eSet(e, t);
        break;
      case N.VISIBILITY_CONDITION:
        this.visibilityCondition = t, super.eSet(e, t);
        break;
      case N.VALIDATIONS:
        this.validations = t, super.eSet(e, t);
        break;
      case N.VALIDATION_MAPPERS:
        this.validationMappers = t, super.eSet(e, t);
        break;
      case N.BINDINGS:
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
      case N.FEATURE:
        return this._feature !== void 0;
      case N.LABEL:
        return this._label !== void 0;
      case N.PLACEHOLDER:
        return this._placeholder !== void 0;
      case N.READ_ONLY:
        return this._readOnly !== void 0;
      case N.REQUIRED:
        return this._required !== void 0;
      case N.VISIBILITY_CONDITION:
        return this._visibilityCondition !== void 0;
      case N.VALIDATIONS:
        return this._validations !== void 0 && this._validations.length > 0;
      case N.VALIDATION_MAPPERS:
        return this._validationMappers !== void 0 && this._validationMappers.length > 0;
      case N.BINDINGS:
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
      case N.FEATURE:
        this._feature = void 0;
        return;
      case N.LABEL:
        this._label = void 0;
        return;
      case N.PLACEHOLDER:
        this._placeholder = void 0;
        return;
      case N.READ_ONLY:
        this._readOnly = void 0;
        return;
      case N.REQUIRED:
        this._required = void 0;
        return;
      case N.VISIBILITY_CONDITION:
        this._visibilityCondition = void 0;
        return;
      case N.VALIDATIONS:
        this._validations = [];
        return;
      case N.VALIDATION_MAPPERS:
        this._validationMappers = [];
        return;
      case N.BINDINGS:
        this._bindings = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
te(Ge, "FEATURE", 5), te(Ge, "LABEL", 6), te(Ge, "PLACEHOLDER", 7), te(Ge, "READ_ONLY", 8), te(Ge, "REQUIRED", 9), te(Ge, "VISIBILITY_CONDITION", 10), te(Ge, "VALIDATIONS", 11), te(Ge, "VALIDATION_MAPPERS", 12), te(Ge, "BINDINGS", 13);
let ye = Ge;
var _u = Object.defineProperty, Ou = (s, e, t) => e in s ? _u(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, os = (s, e, t) => Ou(s, typeof e != "symbol" ? e + "" : e, t);
const Nr = class z extends ye {
  constructor() {
    super(...arguments), os(this, "_maxLength"), os(this, "_value"), os(this, "_password");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.INPUT_WIDGET;
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
  get password() {
    return this._password;
  }
  set password(e) {
    const t = this._password;
    this._password = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(z.PASSWORD),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => z.PASSWORD,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case z.MAX_LENGTH:
        return this.maxLength;
      case z.VALUE:
        return this.value;
      case z.PASSWORD:
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
      case z.MAX_LENGTH:
        this.maxLength = t, super.eSet(e, t);
        break;
      case z.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case z.PASSWORD:
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
      case z.MAX_LENGTH:
        return this._maxLength !== void 0;
      case z.VALUE:
        return this._value !== void 0;
      case z.PASSWORD:
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
      case z.MAX_LENGTH:
        this._maxLength = void 0;
        return;
      case z.VALUE:
        this._value = void 0;
        return;
      case z.PASSWORD:
        this._password = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
os(Nr, "MAX_LENGTH", 14), os(Nr, "VALUE", 15), os(Nr, "PASSWORD", 16);
let Au = Nr;
var yu = Object.defineProperty, Cu = (s, e, t) => e in s ? yu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, cs = (s, e, t) => Cu(s, typeof e != "symbol" ? e + "" : e, t);
const vr = class Q extends ye {
  constructor() {
    super(...arguments), cs(this, "_rows", 4), cs(this, "_maxLength"), cs(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.TEXT_AREA_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(Q.ROWS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Q.ROWS,
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
      getFeature: () => this.eClass().getEStructuralFeature(Q.MAX_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Q.MAX_LENGTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(Q.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Q.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Q.ROWS:
        return this.rows;
      case Q.MAX_LENGTH:
        return this.maxLength;
      case Q.VALUE:
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
      case Q.ROWS:
        this.rows = t, super.eSet(e, t);
        break;
      case Q.MAX_LENGTH:
        this.maxLength = t, super.eSet(e, t);
        break;
      case Q.VALUE:
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
      case Q.ROWS:
        return this._rows !== 4;
      case Q.MAX_LENGTH:
        return this._maxLength !== void 0;
      case Q.VALUE:
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
      case Q.ROWS:
        this._rows = 4;
        return;
      case Q.MAX_LENGTH:
        this._maxLength = void 0;
        return;
      case Q.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
cs(vr, "ROWS", 14), cs(vr, "MAX_LENGTH", 15), cs(vr, "VALUE", 16);
let Du = vr;
var Ru = Object.defineProperty, wu = (s, e, t) => e in s ? Ru(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, dt = (s, e, t) => wu(s, typeof e != "symbol" ? e + "" : e, t);
const or = class $ extends ye {
  constructor() {
    super(...arguments), dt(this, "_min"), dt(this, "_max"), dt(this, "_step", 1), dt(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.NUMBER_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature($.MIN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.MIN,
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
      getFeature: () => this.eClass().getEStructuralFeature($.MAX),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.MAX,
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
      getFeature: () => this.eClass().getEStructuralFeature($.STEP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.STEP,
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
      getFeature: () => this.eClass().getEStructuralFeature($.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case $.MIN:
        return this.min;
      case $.MAX:
        return this.max;
      case $.STEP:
        return this.step;
      case $.VALUE:
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
      case $.MIN:
        this.min = t, super.eSet(e, t);
        break;
      case $.MAX:
        this.max = t, super.eSet(e, t);
        break;
      case $.STEP:
        this.step = t, super.eSet(e, t);
        break;
      case $.VALUE:
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
      case $.MIN:
        return this._min !== void 0;
      case $.MAX:
        return this._max !== void 0;
      case $.STEP:
        return this._step !== 1;
      case $.VALUE:
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
      case $.MIN:
        this._min = void 0;
        return;
      case $.MAX:
        this._max = void 0;
        return;
      case $.STEP:
        this._step = 1;
        return;
      case $.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
dt(or, "MIN", 14), dt(or, "MAX", 15), dt(or, "STEP", 16), dt(or, "VALUE", 17);
let Fu = or;
var Pu = Object.defineProperty, bu = (s, e, t) => e in s ? Pu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Rr = (s, e, t) => bu(s, typeof e != "symbol" ? e + "" : e, t);
const ea = class Te extends ye {
  constructor() {
    super(...arguments), Rr(this, "_asToggle"), Rr(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.CHECKBOX_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(Te.AS_TOGGLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Te.AS_TOGGLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(Te.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Te.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Te.AS_TOGGLE:
        return this.asToggle;
      case Te.VALUE:
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
      case Te.AS_TOGGLE:
        this.asToggle = t, super.eSet(e, t);
        break;
      case Te.VALUE:
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
      case Te.AS_TOGGLE:
        return this._asToggle !== void 0;
      case Te.VALUE:
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
      case Te.AS_TOGGLE:
        this._asToggle = void 0;
        return;
      case Te.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Rr(ea, "AS_TOGGLE", 14), Rr(ea, "VALUE", 15);
let Mu = ea;
var Vu = Object.defineProperty, Uu = (s, e, t) => e in s ? Vu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, pt = (s, e, t) => Uu(s, typeof e != "symbol" ? e + "" : e, t);
const cr = class Y extends ye {
  constructor() {
    super(...arguments), pt(this, "_withTime"), pt(this, "_format", "DD.MM.YYYY"), pt(this, "_constrains"), pt(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.DATE_WIDGET;
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
pt(cr, "WITH_TIME", 14), pt(cr, "FORMAT", 15), pt(cr, "CONSTRAINS", 16), pt(cr, "VALUE", 17);
let Bu = cr;
var Gu = Object.defineProperty, Wu = (s, e, t) => e in s ? Gu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Es = (s, e, t) => Wu(s, typeof e != "symbol" ? e + "" : e, t);
const Lr = class Z extends ye {
  constructor() {
    super(...arguments), Es(this, "_optionLabel"), Es(this, "_minSearchLength", 2), Es(this, "_multiSelect");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.COMBOBOX_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(Z.OPTION_LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Z.OPTION_LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(Z.MIN_SEARCH_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Z.MIN_SEARCH_LENGTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(Z.MULTI_SELECT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Z.MULTI_SELECT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Z.OPTION_LABEL:
        return this.optionLabel;
      case Z.MIN_SEARCH_LENGTH:
        return this.minSearchLength;
      case Z.MULTI_SELECT:
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
      case Z.OPTION_LABEL:
        this.optionLabel = t, super.eSet(e, t);
        break;
      case Z.MIN_SEARCH_LENGTH:
        this.minSearchLength = t, super.eSet(e, t);
        break;
      case Z.MULTI_SELECT:
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
      case Z.OPTION_LABEL:
        return this._optionLabel !== void 0;
      case Z.MIN_SEARCH_LENGTH:
        return this._minSearchLength !== 2;
      case Z.MULTI_SELECT:
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
      case Z.OPTION_LABEL:
        this._optionLabel = void 0;
        return;
      case Z.MIN_SEARCH_LENGTH:
        this._minSearchLength = 2;
        return;
      case Z.MULTI_SELECT:
        this._multiSelect = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Es(Lr, "OPTION_LABEL", 14), Es(Lr, "MIN_SEARCH_LENGTH", 15), Es(Lr, "MULTI_SELECT", 16);
let $u = Lr;
var Yu = Object.defineProperty, ku = (s, e, t) => e in s ? Yu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ft = (s, e, t) => ku(s, typeof e != "symbol" ? e + "" : e, t);
const Er = class k extends ye {
  constructor() {
    super(...arguments), ft(this, "_optionLabel"), ft(this, "_multiSelect"), ft(this, "_asButtonGroup"), ft(this, "_values", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.SELECT_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(k.OPTION_LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.OPTION_LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(k.MULTI_SELECT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.MULTI_SELECT,
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
      getFeature: () => this.eClass().getEStructuralFeature(k.AS_BUTTON_GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.AS_BUTTON_GROUP,
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
      getFeature: () => this.eClass().getEStructuralFeature(k.VALUES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.VALUES,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case k.OPTION_LABEL:
        return this.optionLabel;
      case k.MULTI_SELECT:
        return this.multiSelect;
      case k.AS_BUTTON_GROUP:
        return this.asButtonGroup;
      case k.VALUES:
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
      case k.OPTION_LABEL:
        this.optionLabel = t, super.eSet(e, t);
        break;
      case k.MULTI_SELECT:
        this.multiSelect = t, super.eSet(e, t);
        break;
      case k.AS_BUTTON_GROUP:
        this.asButtonGroup = t, super.eSet(e, t);
        break;
      case k.VALUES:
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
      case k.OPTION_LABEL:
        return this._optionLabel !== void 0;
      case k.MULTI_SELECT:
        return this._multiSelect !== void 0;
      case k.AS_BUTTON_GROUP:
        return this._asButtonGroup !== void 0;
      case k.VALUES:
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
      case k.OPTION_LABEL:
        this._optionLabel = void 0;
        return;
      case k.MULTI_SELECT:
        this._multiSelect = void 0;
        return;
      case k.AS_BUTTON_GROUP:
        this._asButtonGroup = void 0;
        return;
      case k.VALUES:
        this._values = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
ft(Er, "OPTION_LABEL", 14), ft(Er, "MULTI_SELECT", 15), ft(Er, "AS_BUTTON_GROUP", 16), ft(Er, "VALUES", 17);
let xu = Er;
var Xu = Object.defineProperty, Hu = (s, e, t) => e in s ? Xu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Oe = (s, e, t) => Hu(s, typeof e != "symbol" ? e + "" : e, t);
const At = class C extends ye {
  constructor() {
    super(...arguments), Oe(this, "_with", []), Oe(this, "_eType", []), Oe(this, "_filter"), Oe(this, "_template"), Oe(this, "_cases", []), Oe(this, "_priority", 0);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.ALL_FEATURES;
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
Oe(At, "WITH", 14), Oe(At, "E_TYPE", 15), Oe(At, "FILTER", 16), Oe(At, "TEMPLATE", 17), Oe(At, "CASES", 18), Oe(At, "PRIORITY", 19);
let ju = At;
var qu = Object.defineProperty, Ku = (s, e, t) => e in s ? qu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, wr = (s, e, t) => Ku(s, typeof e != "symbol" ? e + "" : e, t);
const ta = class Se extends It {
  constructor() {
    super(...arguments), wr(this, "_when"), wr(this, "_widget");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.TEMPLATE_CASE;
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
      getFeature: () => this.eClass().getEStructuralFeature(Se.WHEN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Se.WHEN,
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
      getFeature: () => this.eClass().getEStructuralFeature(Se.WIDGET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Se.WIDGET,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Se.WHEN:
        return this.when;
      case Se.WIDGET:
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
      case Se.WHEN:
        this.when = t, super.eSet(e, t);
        break;
      case Se.WIDGET:
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
      case Se.WHEN:
        return this._when !== void 0;
      case Se.WIDGET:
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
      case Se.WHEN:
        this._when = void 0;
        return;
      case Se.WIDGET:
        this._widget = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
wr(ta, "WHEN", 0), wr(ta, "WIDGET", 1);
let zu = ta;
const jr = {
  VERTICAL: "VERTICAL"
};
var Qu = Object.defineProperty, Zu = (s, e, t) => e in s ? Qu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Fr = (s, e, t) => Zu(s, typeof e != "symbol" ? e + "" : e, t);
const sa = class me extends ye {
  constructor() {
    super(...arguments), Fr(this, "_fields", []), Fr(this, "_layout", jr.VERTICAL);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.GROUP_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(me.FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => me.FIELDS,
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
      getFeature: () => this.eClass().getEStructuralFeature(me.LAYOUT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => me.LAYOUT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case me.FIELDS:
        return this.fields;
      case me.LAYOUT:
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
      case me.FIELDS:
        this.fields = t, super.eSet(e, t);
        break;
      case me.LAYOUT:
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
      case me.FIELDS:
        return this._fields !== void 0 && this._fields.length > 0;
      case me.LAYOUT:
        return this._layout !== jr.VERTICAL;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case me.FIELDS:
        this._fields = [];
        return;
      case me.LAYOUT:
        this._layout = jr.VERTICAL;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Fr(sa, "FIELDS", 14), Fr(sa, "LAYOUT", 15);
let Ju = sa;
var en = Object.defineProperty, tn = (s, e, t) => e in s ? en(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, hs = (s, e, t) => tn(s, typeof e != "symbol" ? e + "" : e, t);
const _r = class J extends ye {
  constructor() {
    super(...arguments), hs(this, "_condition"), hs(this, "_then", []), hs(this, "_else", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.CONDITIONAL;
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
      getFeature: () => this.eClass().getEStructuralFeature(J.CONDITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => J.CONDITION,
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
      getFeature: () => this.eClass().getEStructuralFeature(J.THEN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => J.THEN,
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
      getFeature: () => this.eClass().getEStructuralFeature(J.ELSE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => J.ELSE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case J.CONDITION:
        return this.condition;
      case J.THEN:
        return this.then;
      case J.ELSE:
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
      case J.CONDITION:
        this.condition = t, super.eSet(e, t);
        break;
      case J.THEN:
        this.then = t, super.eSet(e, t);
        break;
      case J.ELSE:
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
      case J.CONDITION:
        return this._condition !== void 0;
      case J.THEN:
        return this._then !== void 0 && this._then.length > 0;
      case J.ELSE:
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
      case J.CONDITION:
        this._condition = void 0;
        return;
      case J.THEN:
        this._then = [];
        return;
      case J.ELSE:
        this._else = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
hs(_r, "CONDITION", 14), hs(_r, "THEN", 15), hs(_r, "ELSE", 16);
let sn = _r;
var rn = Object.defineProperty, an = (s, e, t) => e in s ? rn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, gs = (s, e, t) => an(s, typeof e != "symbol" ? e + "" : e, t);
const Or = class ee extends ye {
  constructor() {
    super(...arguments), gs(this, "_items"), gs(this, "_body", []), gs(this, "_emptyText");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.FOR_EACH;
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
      getFeature: () => this.eClass().getEStructuralFeature(ee.ITEMS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ee.ITEMS,
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
      getFeature: () => this.eClass().getEStructuralFeature(ee.BODY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ee.BODY,
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
      getFeature: () => this.eClass().getEStructuralFeature(ee.EMPTY_TEXT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ee.EMPTY_TEXT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ee.ITEMS:
        return this.items;
      case ee.BODY:
        return this.body;
      case ee.EMPTY_TEXT:
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
      case ee.ITEMS:
        this.items = t, super.eSet(e, t);
        break;
      case ee.BODY:
        this.body = t, super.eSet(e, t);
        break;
      case ee.EMPTY_TEXT:
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
      case ee.ITEMS:
        return this._items !== void 0;
      case ee.BODY:
        return this._body !== void 0 && this._body.length > 0;
      case ee.EMPTY_TEXT:
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
      case ee.ITEMS:
        this._items = void 0;
        return;
      case ee.BODY:
        this._body = [];
        return;
      case ee.EMPTY_TEXT:
        this._emptyText = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
gs(Or, "ITEMS", 14), gs(Or, "BODY", 15), gs(Or, "EMPTY_TEXT", 16);
let un = Or;
var nn = Object.defineProperty, ln = (s, e, t) => e in s ? nn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Pr = (s, e, t) => ln(s, typeof e != "symbol" ? e + "" : e, t);
const ra = class Ie extends ye {
  constructor() {
    super(...arguments), Pr(this, "_displayExpression"), Pr(this, "_targetRoute");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.REFERENCE_LINK_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(Ie.DISPLAY_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ie.DISPLAY_EXPRESSION,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ie.TARGET_ROUTE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ie.TARGET_ROUTE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Ie.DISPLAY_EXPRESSION:
        return this.displayExpression;
      case Ie.TARGET_ROUTE:
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
      case Ie.DISPLAY_EXPRESSION:
        this.displayExpression = t, super.eSet(e, t);
        break;
      case Ie.TARGET_ROUTE:
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
      case Ie.DISPLAY_EXPRESSION:
        return this._displayExpression !== void 0;
      case Ie.TARGET_ROUTE:
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
      case Ie.DISPLAY_EXPRESSION:
        this._displayExpression = void 0;
        return;
      case Ie.TARGET_ROUTE:
        this._targetRoute = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Pr(ra, "DISPLAY_EXPRESSION", 14), Pr(ra, "TARGET_ROUTE", 15);
let on = ra;
var cn = Object.defineProperty, En = (s, e, t) => e in s ? cn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Tt = (s, e, t) => En(s, typeof e != "symbol" ? e + "" : e, t);
const hr = class x extends It {
  constructor() {
    super(...arguments), Tt(this, "_name"), Tt(this, "_priority", 0), Tt(this, "_templates", []), Tt(this, "_cases", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.U_I_MODEL_OVERLAY;
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
      getFeature: () => this.eClass().getEStructuralFeature(x.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(x.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.PRIORITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(x.TEMPLATES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.TEMPLATES,
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
      getFeature: () => this.eClass().getEStructuralFeature(x.CASES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.CASES,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case x.NAME:
        return this.name;
      case x.PRIORITY:
        return this.priority;
      case x.TEMPLATES:
        return this.templates;
      case x.CASES:
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
      case x.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case x.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case x.TEMPLATES:
        this.templates = t, super.eSet(e, t);
        break;
      case x.CASES:
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
      case x.NAME:
        return this._name !== void 0;
      case x.PRIORITY:
        return this._priority !== 0;
      case x.TEMPLATES:
        return this._templates !== void 0 && this._templates.length > 0;
      case x.CASES:
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
      case x.NAME:
        this._name = void 0;
        return;
      case x.PRIORITY:
        this._priority = 0;
        return;
      case x.TEMPLATES:
        this._templates = [];
        return;
      case x.CASES:
        this._cases = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Tt(hr, "NAME", 0), Tt(hr, "PRIORITY", 1), Tt(hr, "TEMPLATES", 2), Tt(hr, "CASES", 3);
let hn = hr;
var gn = Object.defineProperty, dn = (s, e, t) => e in s ? gn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ae = (s, e, t) => dn(s, typeof e != "symbol" ? e + "" : e, t);
const yt = class F extends It {
  constructor() {
    super(...arguments), Ae(this, "_extends"), Ae(this, "_css"), Ae(this, "_vueComponent"), Ae(this, "_visibilityCondition"), Ae(this, "_name"), Ae(this, "_group");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.BASE_STYLE;
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
      getFeature: () => this.eClass().getEStructuralFeature(F.EXTENDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.EXTENDS,
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
      getFeature: () => this.eClass().getEStructuralFeature(F.CSS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.CSS,
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
      getFeature: () => this.eClass().getEStructuralFeature(F.VUE_COMPONENT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.VUE_COMPONENT,
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
      getFeature: () => this.eClass().getEStructuralFeature(F.VISIBILITY_CONDITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.VISIBILITY_CONDITION,
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
      case F.EXTENDS:
        return this.extends;
      case F.CSS:
        return this.css;
      case F.VUE_COMPONENT:
        return this.vueComponent;
      case F.VISIBILITY_CONDITION:
        return this.visibilityCondition;
      case F.NAME:
        return this.name;
      case F.GROUP:
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
      case F.EXTENDS:
        this.extends = t, super.eSet(e, t);
        break;
      case F.CSS:
        this.css = t, super.eSet(e, t);
        break;
      case F.VUE_COMPONENT:
        this.vueComponent = t, super.eSet(e, t);
        break;
      case F.VISIBILITY_CONDITION:
        this.visibilityCondition = t, super.eSet(e, t);
        break;
      case F.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case F.GROUP:
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
      case F.EXTENDS:
        return this._extends !== void 0;
      case F.CSS:
        return this._css !== void 0;
      case F.VUE_COMPONENT:
        return this._vueComponent !== void 0;
      case F.VISIBILITY_CONDITION:
        return this._visibilityCondition !== void 0;
      case F.NAME:
        return this._name !== void 0;
      case F.GROUP:
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
      case F.EXTENDS:
        this._extends = void 0;
        return;
      case F.CSS:
        this._css = void 0;
        return;
      case F.VUE_COMPONENT:
        this._vueComponent = void 0;
        return;
      case F.VISIBILITY_CONDITION:
        this._visibilityCondition = void 0;
        return;
      case F.NAME:
        this._name = void 0;
        return;
      case F.GROUP:
        this._group = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ae(yt, "EXTENDS", 2), Ae(yt, "CSS", 3), Ae(yt, "VUE_COMPONENT", 4), Ae(yt, "VISIBILITY_CONDITION", 5), Ae(yt, "NAME", 0), Ae(yt, "GROUP", 1);
let za = yt;
var pn = Object.defineProperty, fn = (s, e, t) => e in s ? pn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, br = (s, e, t) => fn(s, typeof e != "symbol" ? e + "" : e, t);
const aa = class Ne extends za {
  constructor() {
    super(...arguments), br(this, "_layout"), br(this, "_order");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.LAYOUT_STYLE;
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
      getFeature: () => this.eClass().getEStructuralFeature(Ne.LAYOUT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.LAYOUT,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ne.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Ne.LAYOUT:
        return this.layout;
      case Ne.ORDER:
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
      case Ne.LAYOUT:
        this.layout = t, super.eSet(e, t);
        break;
      case Ne.ORDER:
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
      case Ne.LAYOUT:
        return this._layout !== void 0;
      case Ne.ORDER:
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
      case Ne.LAYOUT:
        this._layout = void 0;
        return;
      case Ne.ORDER:
        this._order = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
br(aa, "LAYOUT", 6), br(aa, "ORDER", 7);
let Tn = aa;
var Sn = Object.defineProperty, mn = (s, e, t) => e in s ? Sn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, $e = (s, e, t) => mn(s, typeof e != "symbol" ? e + "" : e, t);
const ls = class M extends za {
  constructor() {
    super(...arguments), $e(this, "_feature"), $e(this, "_widgetType"), $e(this, "_label"), $e(this, "_readOnly"), $e(this, "_order");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.WIDGET_STYLE;
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
      getFeature: () => this.eClass().getEStructuralFeature(M.FEATURE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => M.FEATURE,
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
      getFeature: () => this.eClass().getEStructuralFeature(M.WIDGET_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => M.WIDGET_TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(M.LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => M.LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(M.READ_ONLY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => M.READ_ONLY,
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
      getFeature: () => this.eClass().getEStructuralFeature(M.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => M.ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case M.FEATURE:
        return this.feature;
      case M.WIDGET_TYPE:
        return this.widgetType;
      case M.LABEL:
        return this.label;
      case M.READ_ONLY:
        return this.readOnly;
      case M.ORDER:
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
      case M.FEATURE:
        this.feature = t, super.eSet(e, t);
        break;
      case M.WIDGET_TYPE:
        this.widgetType = t, super.eSet(e, t);
        break;
      case M.LABEL:
        this.label = t, super.eSet(e, t);
        break;
      case M.READ_ONLY:
        this.readOnly = t, super.eSet(e, t);
        break;
      case M.ORDER:
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
      case M.FEATURE:
        return this._feature !== void 0;
      case M.WIDGET_TYPE:
        return this._widgetType !== void 0;
      case M.LABEL:
        return this._label !== void 0;
      case M.READ_ONLY:
        return this._readOnly !== void 0;
      case M.ORDER:
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
      case M.FEATURE:
        this._feature = void 0;
        return;
      case M.WIDGET_TYPE:
        this._widgetType = void 0;
        return;
      case M.LABEL:
        this._label = void 0;
        return;
      case M.READ_ONLY:
        this._readOnly = void 0;
        return;
      case M.ORDER:
        this._order = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
$e(ls, "FEATURE", 6), $e(ls, "WIDGET_TYPE", 7), $e(ls, "LABEL", 8), $e(ls, "READ_ONLY", 9), $e(ls, "ORDER", 10);
let Qa = ls;
var In = Object.defineProperty, Nn = (s, e, t) => e in s ? In(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Za = (s, e, t) => Nn(s, typeof e != "symbol" ? e + "" : e, t);
const Ja = class Ct extends Qa {
  constructor() {
    super(...arguments), Za(this, "_columns", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.TABLE_STYLE;
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
      getFeature: () => this.eClass().getEStructuralFeature(Ct.COLUMNS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ct.COLUMNS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Ct.COLUMNS:
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
      case Ct.COLUMNS:
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
      case Ct.COLUMNS:
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
      case Ct.COLUMNS:
        this._columns = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Za(Ja, "COLUMNS", 11);
let vn = Ja;
var Ln = Object.defineProperty, _n = (s, e, t) => e in s ? Ln(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Mr = (s, e, t) => _n(s, typeof e != "symbol" ? e + "" : e, t);
const ia = class ve extends It {
  constructor() {
    super(...arguments), Mr(this, "_language", "OCL"), Mr(this, "_body", "");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.EXPRESSION;
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
      getFeature: () => this.eClass().getEStructuralFeature(ve.LANGUAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ve.LANGUAGE,
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
      getFeature: () => this.eClass().getEStructuralFeature(ve.BODY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ve.BODY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ve.LANGUAGE:
        return this.language;
      case ve.BODY:
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
      case ve.LANGUAGE:
        this.language = t, super.eSet(e, t);
        break;
      case ve.BODY:
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
      case ve.LANGUAGE:
        return this._language !== "OCL";
      case ve.BODY:
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
      case ve.LANGUAGE:
        this._language = "OCL";
        return;
      case ve.BODY:
        this._body = "";
        return;
      default:
        super.eUnset(e);
    }
  }
};
Mr(ia, "LANGUAGE", 0), Mr(ia, "BODY", 1);
let ei = ia;
const qr = {
  ERROR: "ERROR"
};
var On = Object.defineProperty, An = (s, e, t) => e in s ? On(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Vr = (s, e, t) => An(s, typeof e != "symbol" ? e + "" : e, t);
const ua = class Le extends ei {
  constructor() {
    super(...arguments), Vr(this, "_defaultMessage"), Vr(this, "_severity", qr.ERROR);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.VALIDATION_EXPRESSION;
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
      getFeature: () => this.eClass().getEStructuralFeature(Le.DEFAULT_MESSAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Le.DEFAULT_MESSAGE,
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
      getFeature: () => this.eClass().getEStructuralFeature(Le.SEVERITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Le.SEVERITY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Le.DEFAULT_MESSAGE:
        return this.defaultMessage;
      case Le.SEVERITY:
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
      case Le.DEFAULT_MESSAGE:
        this.defaultMessage = t, super.eSet(e, t);
        break;
      case Le.SEVERITY:
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
      case Le.DEFAULT_MESSAGE:
        return this._defaultMessage !== void 0;
      case Le.SEVERITY:
        return this._severity !== qr.ERROR;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Le.DEFAULT_MESSAGE:
        this._defaultMessage = void 0;
        return;
      case Le.SEVERITY:
        this._severity = qr.ERROR;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Vr(ua, "DEFAULT_MESSAGE", 2), Vr(ua, "SEVERITY", 3);
let yn = ua;
var Cn = Object.defineProperty, Dn = (s, e, t) => e in s ? Cn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, he = (s, e, t) => Dn(s, typeof e != "symbol" ? e + "" : e, t);
const ht = class A extends It {
  constructor() {
    super(...arguments), he(this, "_order"), he(this, "_matchCode"), he(this, "_matchSeverity"), he(this, "_matchExpression"), he(this, "_mappedText"), he(this, "_mappedTextExpression"), he(this, "_mappedSeverity");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.VALIDATION_MESSAGE_MAPPER;
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
      getFeature: () => this.eClass().getEStructuralFeature(A.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.ORDER,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.MATCH_CODE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.MATCH_CODE,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.MATCH_SEVERITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.MATCH_SEVERITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.MATCH_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.MATCH_EXPRESSION,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.MAPPED_TEXT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.MAPPED_TEXT,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.MAPPED_TEXT_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.MAPPED_TEXT_EXPRESSION,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.MAPPED_SEVERITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.MAPPED_SEVERITY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case A.ORDER:
        return this.order;
      case A.MATCH_CODE:
        return this.matchCode;
      case A.MATCH_SEVERITY:
        return this.matchSeverity;
      case A.MATCH_EXPRESSION:
        return this.matchExpression;
      case A.MAPPED_TEXT:
        return this.mappedText;
      case A.MAPPED_TEXT_EXPRESSION:
        return this.mappedTextExpression;
      case A.MAPPED_SEVERITY:
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
      case A.ORDER:
        this.order = t, super.eSet(e, t);
        break;
      case A.MATCH_CODE:
        this.matchCode = t, super.eSet(e, t);
        break;
      case A.MATCH_SEVERITY:
        this.matchSeverity = t, super.eSet(e, t);
        break;
      case A.MATCH_EXPRESSION:
        this.matchExpression = t, super.eSet(e, t);
        break;
      case A.MAPPED_TEXT:
        this.mappedText = t, super.eSet(e, t);
        break;
      case A.MAPPED_TEXT_EXPRESSION:
        this.mappedTextExpression = t, super.eSet(e, t);
        break;
      case A.MAPPED_SEVERITY:
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
      case A.ORDER:
        return this._order !== void 0;
      case A.MATCH_CODE:
        return this._matchCode !== void 0;
      case A.MATCH_SEVERITY:
        return this._matchSeverity !== void 0;
      case A.MATCH_EXPRESSION:
        return this._matchExpression !== void 0;
      case A.MAPPED_TEXT:
        return this._mappedText !== void 0;
      case A.MAPPED_TEXT_EXPRESSION:
        return this._mappedTextExpression !== void 0;
      case A.MAPPED_SEVERITY:
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
      case A.ORDER:
        this._order = void 0;
        return;
      case A.MATCH_CODE:
        this._matchCode = void 0;
        return;
      case A.MATCH_SEVERITY:
        this._matchSeverity = void 0;
        return;
      case A.MATCH_EXPRESSION:
        this._matchExpression = void 0;
        return;
      case A.MAPPED_TEXT:
        this._mappedText = void 0;
        return;
      case A.MAPPED_TEXT_EXPRESSION:
        this._mappedTextExpression = void 0;
        return;
      case A.MAPPED_SEVERITY:
        this._mappedSeverity = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
he(ht, "ORDER", 0), he(ht, "MATCH_CODE", 1), he(ht, "MATCH_SEVERITY", 2), he(ht, "MATCH_EXPRESSION", 3), he(ht, "MAPPED_TEXT", 4), he(ht, "MAPPED_TEXT_EXPRESSION", 5), he(ht, "MAPPED_SEVERITY", 6);
let Rn = ht;
var wn = Object.defineProperty, Fn = (s, e, t) => e in s ? wn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Pn = (s, e, t) => Fn(s, e + "", t);
const ti = class si extends Wi {
  static get eINSTANCE() {
    return this._instance || (this._instance = new si()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(R.eINSTANCE);
  }
  /**
   * Create a new UIModel instance
   */
  createUIModel() {
    return new Zi();
  }
  /**
   * Create a new FormView instance
   */
  createFormView() {
    return new ru();
  }
  /**
   * Create a new TableView instance
   */
  createTableView() {
    return new uu();
  }
  /**
   * Create a new SectionView instance
   */
  createSectionView() {
    return new ou();
  }
  /**
   * Create a new TabView instance
   */
  createTabView() {
    return new hu();
  }
  /**
   * Create a new SummaryView instance
   */
  createSummaryView() {
    return new pu();
  }
  /**
   * Create a new MasterDetail instance
   */
  createMasterDetail() {
    return new Su();
  }
  /**
   * Create a new PropertyBinding instance
   */
  createPropertyBinding() {
    return new Nu();
  }
  /**
   * Create a new InputWidget instance
   */
  createInputWidget() {
    return new Au();
  }
  /**
   * Create a new TextAreaWidget instance
   */
  createTextAreaWidget() {
    return new Du();
  }
  /**
   * Create a new NumberWidget instance
   */
  createNumberWidget() {
    return new Fu();
  }
  /**
   * Create a new CheckboxWidget instance
   */
  createCheckboxWidget() {
    return new Mu();
  }
  /**
   * Create a new DateWidget instance
   */
  createDateWidget() {
    return new Bu();
  }
  /**
   * Create a new ComboboxWidget instance
   */
  createComboboxWidget() {
    return new $u();
  }
  /**
   * Create a new SelectWidget instance
   */
  createSelectWidget() {
    return new xu();
  }
  /**
   * Create a new AllFeatures instance
   */
  createAllFeatures() {
    return new ju();
  }
  /**
   * Create a new TemplateCase instance
   */
  createTemplateCase() {
    return new zu();
  }
  /**
   * Create a new GroupWidget instance
   */
  createGroupWidget() {
    return new Ju();
  }
  /**
   * Create a new Conditional instance
   */
  createConditional() {
    return new sn();
  }
  /**
   * Create a new ForEach instance
   */
  createForEach() {
    return new un();
  }
  /**
   * Create a new ReferenceLinkWidget instance
   */
  createReferenceLinkWidget() {
    return new on();
  }
  /**
   * Create a new UIModelOverlay instance
   */
  createUIModelOverlay() {
    return new hn();
  }
  /**
   * Create a new LayoutStyle instance
   */
  createLayoutStyle() {
    return new Tn();
  }
  /**
   * Create a new WidgetStyle instance
   */
  createWidgetStyle() {
    return new Qa();
  }
  /**
   * Create a new TableStyle instance
   */
  createTableStyle() {
    return new vn();
  }
  /**
   * Create a new Expression instance
   */
  createExpression() {
    return new ei();
  }
  /**
   * Create a new ValidationExpression instance
   */
  createValidationExpression() {
    return new yn();
  }
  /**
   * Create a new ValidationMessageMapper instance
   */
  createValidationMessageMapper() {
    return new Rn();
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
Pn(ti, "_instance");
let fa = ti;
const ri = Symbol("uimodelComposerRegistry");
function ai() {
  const s = St(ri);
  if (!s)
    throw new Error(
      "[uimodel-composer] No ComposerRegistry provided. Make sure UIModelComposer is an ancestor of this component."
    );
  return s;
}
function bn(s) {
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
const Mn = "uic";
function dr(s) {
  return s === !0 || s === "true";
}
function Rt(s, e = 0) {
  if (typeof s == "number") return s;
  const t = Number(s);
  return Number.isFinite(t) ? t : e;
}
const Vn = {
  HOVER: ":hover",
  FOCUS: ":focus",
  FOCUS_WITHIN: ":focus-within",
  ACTIVE: ":active",
  DISABLED: ".uim-s-disabled",
  READONLY: ".uim-s-readonly",
  INVALID: ".uim-s-invalid",
  REQUIRED: ".uim-s-required"
};
function Wr(s) {
  return s.trim().replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() || "unnamed";
}
function na(s) {
  return `--${Mn}-${Wr(s)}`;
}
function Un(s) {
  return s.replace(/token\(\s*([^)]+?)\s*\)/g, (e, t) => `var(${na(t)})`);
}
function ii(s) {
  return `uic-${Wr(s)}`;
}
function Bn(s) {
  return `uicss-theme-${Wr(s)}`;
}
function ui(s, e) {
  return `uicss-cond-${Wr(s.name ?? "sheet")}-${e}`;
}
function ni(s, e = "  ") {
  return s.filter((t) => t.property && t.value !== void 0).map((t) => `${e}${t.property.trim()}: ${Un(t.value)}${dr(t.important) ? " !important" : ""};`).join(`
`);
}
function Gn(s, e) {
  return e.filter((t) => t.declarations.length > 0).map((t) => {
    var r, i;
    const u = ((i = (r = t.state) == null ? void 0 : r.getName) == null ? void 0 : i.call(r)) ?? String(t.state), n = Vn[u] ?? `:${u.toLowerCase()}`;
    return `${s}${n} {
${ni(t.declarations)}
}`;
  }).join(`
`);
}
function Da(s, e, t, r) {
  const i = [];
  e.length > 0 && i.push(`${s} {
${ni(e)}
}`);
  const u = Gn(s, t);
  if (u && i.push(u), i.length === 0) return "";
  const n = i.join(`
`);
  return r ? `@media ${r} {
${n}
}` : n;
}
function li(s) {
  return s.includeSubtypes === void 0 || s.includeSubtypes === null ? !0 : dr(s.includeSubtypes);
}
function Wn(s, e, t) {
  var r, i;
  let u;
  const n = (i = (r = e.targetClass) == null ? void 0 : r.getName) == null ? void 0 : i.call(r);
  return n ? u = li(e) ? `.uim-c-${n}` : `.uim-component[data-uim-eclass="${n}"]` : u = ".uim-component", e.componentName && (u += `[data-uim-name="${e.componentName}"]`), e.group && (u += `[data-uim-group="${e.group}"]`), e.condition && (u += `.${ui(s, t)}`), u;
}
function $n(s) {
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
function Yn(s) {
  const e = [];
  if (s.tokens.length > 0) {
    const r = s.tokens.filter((i) => i.name).map((i) => `  ${na(i.name)}: ${i.value ?? ""};`);
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
    }).map((u) => `  ${na(u.token.name)}: ${u.value ?? ""};`);
    dr(r.dark) && i.push("  color-scheme: dark;"), i.length > 0 && e.push(`.${Bn(r.name)} {
${i.join(`
`)}
}`);
  }
  const t = s.rules.map((r, i) => ({ rule: r, index: i }));
  t.sort((r, i) => Rt(r.rule.priority) - Rt(i.rule.priority) || r.index - i.index);
  for (const { rule: r, index: i } of t) {
    const u = Da(
      Wn(s, r, i),
      r.declarations,
      r.states,
      r.media || void 0
    );
    u && e.push(u);
  }
  for (const r of $n(s.styles)) {
    if (!r.name) continue;
    const i = Da(`.${ii(r.name)}`, r.declarations, r.states);
    i && e.push(i);
  }
  return e.join(`

`);
}
function kn(s) {
  return s.map(Yn).filter(Boolean).join(`

`);
}
const fr = Symbol("uimodel-css:sheets");
let xn = 0;
function Xn(s) {
  const e = pr(0);
  class t extends $a {
    notifyChanged(E) {
      var d;
      try {
        super.notifyChanged(E);
      } catch {
      }
      if (!((d = E.isTouch) != null && d.call(E))) {
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
      const d = E.eAdapters(), o = d.indexOf(r);
      o >= 0 && d.splice(o, 1);
    }
  }
  function g() {
    for (const c of i) {
      l(c);
      for (const E of c.eAllContents()) l(E);
    }
    i = [];
  }
  return Dt(
    () => [...Qe(s)],
    (c) => {
      g();
      for (const E of c)
        n(E), i.push(E);
      e.value++;
    },
    { immediate: !0 }
  ), ga(g), { css: f(() => (e.value, kn([...Qe(s)]))), version: e };
}
function Hn(s) {
  const { css: e, version: t } = Xn(s);
  if (typeof document < "u") {
    const r = document.createElement("style");
    r.id = `uimodel-css-${++xn}`, r.setAttribute("data-uimodel-css", ""), document.head.appendChild(r), bi(() => {
      r.textContent = e.value;
    }), ga(() => {
      r.remove();
    });
  }
  return { css: e, version: t };
}
function mr(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? ds(e) : s;
}
function ds(s) {
  return new Proxy(s, {
    get(e, t) {
      var r, i, u;
      if (typeof t != "string") return e[t];
      if (t === "eGet")
        return (g) => {
          var c, E, d;
          if (typeof g == "string") {
            const o = (d = (E = (c = e.eClass) == null ? void 0 : c.call(e)) == null ? void 0 : E.getEStructuralFeature) == null ? void 0 : d.call(E, g);
            return o ? mr(e.eGet(o)) : void 0;
          }
          return mr(e.eGet(g));
        };
      if (t in e) return e[t];
      const n = t.charAt(0).toUpperCase() + t.slice(1);
      for (const g of [`get${n}`, `is${n}`])
        if (typeof e[g] == "function") return mr(e[g]());
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
        return jn(s.body, e);
      case "AQL":
        return qn(s.body, e);
      case "JS":
        return Kn(s.body, e);
      default:
        return console.warn(`[uimodel-composer] Unknown expression language: ${s.language}`), !0;
    }
  } catch (t) {
    return console.error(`[uimodel-composer] Expression evaluation failed (${s.language}):`, t), !0;
  }
}
function jn(s, e) {
  try {
    const { EMFOclValidator: t } = globalThis.__emftsOcl__ ?? {};
    return t ? new t().evaluateExpression(s, ds(e)) === !0 : (console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup."), !0);
  } catch {
    return !0;
  }
}
function qn(s, e) {
  return console.warn("[uimodel-composer] AQL evaluation not yet implemented."), !0;
}
function Kn(s, e) {
  return !!new Function("self", `"use strict"; return (${s});`)(ds(e));
}
function zn(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? ds(e) : s;
}
function $r(s, e, t = {}) {
  if (s != null && s.body)
    try {
      switch (s.language) {
        case "JS": {
          const r = Object.keys(t);
          return new Function("self", ...r, `"use strict"; return (${s.body});`)(ds(e), ...r.map((i) => zn(t[i])));
        }
        case "OCL": {
          const { EMFOclValidator: r } = globalThis.__emftsOcl__ ?? {};
          if (!r) {
            console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup.");
            return;
          }
          return new r().evaluateExpression(s.body, ds(e));
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
function Qn(s) {
  return s.map((e, t) => ({ overlay: e, index: t })).sort((e, t) => Rt(t.overlay.priority) - Rt(e.overlay.priority) || e.index - t.index).flatMap(({ overlay: e }) => [...e.cases ?? []]);
}
function oi(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "AllFeatures";
}
function Zn(s) {
  var e;
  const t = (e = s.eClass) == null ? void 0 : e.call(s);
  return t ? t.getName() === "WidgetComponent" || t.getEAllSuperTypes().some((r) => r.getName() === "WidgetComponent") : !1;
}
function ci(s) {
  return typeof s.isContainment == "function";
}
function Jn(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    oi(i) ? e.push(i) : Zn(i) && i.feature && t.add(i.feature);
    for (const u of i.eClass().getEAllStructuralFeatures()) {
      if (!ci(u) || !u.isContainment()) continue;
      const n = i.eGet(u);
      if (!n) continue;
      const l = u.isMany() ? [...n] : [n];
      for (const g of l) r(g);
    }
  }
  return r(s), { blocks: e, boundFeatures: t };
}
function Ar(s) {
  var e;
  return (((e = s.with) == null ? void 0 : e.length) ?? 0) > 0;
}
function el(s, e) {
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
function tl(s, e) {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const u of e.blocks)
    t.set(u, []), r.set(u, new Set(el(s, u)));
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
      const g = Rt(l.priority) - Rt(n.priority), c = Number(Ar(l)) - Number(Ar(n)), E = i.get(n) - i.get(l);
      (g > 0 || g === 0 && (c > 0 || c === 0 && E > 0)) && (n = l);
    }
    n && t.get(n).push(u);
  }
  for (const [u, n] of t) {
    if (!Ar(u)) continue;
    const l = new Map(u.with.map((g, c) => [g, c]));
    n.sort((g, c) => (l.get(g) ?? 0) - (l.get(c) ?? 0));
  }
  return t;
}
function Ra(s, e) {
  for (const t of s ?? [])
    if (t.widget && (!t.when || $r(
      t.when,
      e
    )))
      return t.widget;
}
function sl(s, e, t) {
  return Ra(t?.overlayCases, e) ?? Ra(s.cases, e) ?? s.template;
}
function Ur(s) {
  var e, t, r;
  const i = s.eClass(), u = (e = i.getEPackage()) == null ? void 0 : e.getEFactoryInstance();
  if (!u) throw new Error(`Keine Factory für ${i.getName()}`);
  const n = u.create(i);
  for (const l of i.getEAllStructuralFeatures()) {
    if ((t = l.isDerived) != null && t.call(l) || ((r = l.isChangeable) == null ? void 0 : r.call(l)) === !1) continue;
    const g = s.eGet(l);
    if (g == null) continue;
    const c = ci(l) && l.isContainment();
    if (l.isMany()) {
      const E = [...g];
      if (E.length === 0) continue;
      n.eSet(
        l,
        c ? E.map((d) => Ur(d)) : E
      );
    } else
      n.eSet(l, c ? Ur(g) : g);
  }
  return n;
}
const rl = /* @__PURE__ */ new Set(["AllFeatures", "Conditional", "ForEach"]);
function Kr(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function Ei(s, e) {
  if (Kr(s) !== "GroupWidget") {
    s.feature = e;
    return;
  }
  const t = s.fields ?? [];
  for (const r of t)
    rl.has(Kr(r)) || (Kr(r) === "GroupWidget" ? Ei(r, e) : !r.feature && !(r.bindings ?? []).some((i) => i.property === "feature") && (r.feature = e));
}
function al(s, e) {
  const t = fa.eINSTANCE.createValidationExpression();
  return t.language = "JS", t.body = `self.${s} !== null && self.${s} !== undefined && String(self.${s}).length > 0`, t.defaultMessage = `${e ?? s} ist erforderlich.`, t.severity = "ERROR", t;
}
function il(s) {
  const e = s.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ul(s, e, t) {
  var r, i, u, n;
  const l = t ?? {
    blocks: [e],
    boundFeatures: /* @__PURE__ */ new Set()
  };
  l.blocks.includes(e) || l.blocks.push(e);
  const g = tl(s, l).get(e) ?? [], c = [];
  for (const E of g) {
    const d = sl(e, E, l);
    if (!d) {
      console.error(
        `[uimodel-composer] AllFeatures "${e.name ?? "?"}": kein TemplateCase trifft auf Feature "${E.getName() ?? "?"}" und kein Default-Fall (template) gesetzt.`
      );
      continue;
    }
    const o = Ur(d);
    Ei(o, E);
    const p = E.getName() ?? "feature";
    o.name = p, o.label === void 0 && e.label !== void 0 && (o.label = e.label), o.placeholder === void 0 && e.placeholder !== void 0 && (o.placeholder = e.placeholder), o.readOnly === void 0 && e.readOnly !== void 0 && (o.readOnly = e.readOnly), o.required === void 0 && e.required !== void 0 && (o.required = e.required), (((r = o.styles) == null ? void 0 : r.length) ?? 0) === 0 && (((i = e.styles) == null ? void 0 : i.length) ?? 0) > 0 && (o.styles = [...e.styles]), o.label || (o.label = il(p)), !o.group && e.group && (o.group = e.group), o.required === void 0 && Rt((u = E.getLowerBound) == null ? void 0 : u.call(E)) >= 1 && (o.required = !0, (((n = o.validations) == null ? void 0 : n.length) ?? 0) === 0 && (o.validations = [al(p, o.label)]));
    const w = e.bindings ?? [];
    if (w.length > 0) {
      const B = new Set((o.bindings ?? []).map((v) => v.property)), T = w.filter((v) => v.property && !B.has(v.property)).map((v) => Ur(v));
      T.length > 0 && (o.bindings = [...o.bindings ?? [], ...T]);
    }
    c.push(o);
  }
  return c;
}
const hi = Symbol("uimodel:allfeatures-context"), gi = pr(0);
function di() {
  gi.value++;
}
function Pt() {
  gi.value;
}
function nl(s) {
  class e extends $a {
    notifyChanged(l) {
      var g;
      try {
        super.notifyChanged(l);
      } catch {
      }
      if ((g = l.isTouch) != null && g.call(l)) return;
      di();
      const c = Qe(s);
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
    const l = (g) => {
      const c = g;
      if (c.eAdapterRemove)
        c.eAdapterRemove(t);
      else {
        const E = c.eAdapters(), d = E.indexOf(t);
        d >= 0 && E.splice(d, 1);
      }
    };
    l(n);
    for (const g of n.eAllContents()) l(g);
  }
  Dt(
    () => Qe(s),
    (n, l) => {
      l && u(l), n && i(n);
    },
    { immediate: !0 }
  ), ga(() => {
    const n = Qe(s);
    n && u(n);
  });
}
function pi(s) {
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
function ll(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "CssStyle";
}
function ol(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    !i || t.has(i) || (t.add(i), r(i.extends), ll(i) && i.name && e.push(ii(i.name)));
  }
  for (const i of s ?? []) r(i);
  return e;
}
function cl(s, e) {
  var t, r, i;
  const u = (r = (t = s.targetClass) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  if (u) {
    const n = pi((i = e.eClass) == null ? void 0 : i.call(e));
    if (li(s)) {
      if (!n.includes(u)) return !1;
    } else if (n[0] !== u)
      return !1;
  }
  return !(s.componentName && e.name !== s.componentName || s.group && e.group !== s.group);
}
function Ta(s, e = {}) {
  var t;
  const r = ["uim-component"];
  for (const i of pi((t = s.eClass) == null ? void 0 : t.call(s)))
    r.push(`uim-c-${i}`);
  r.push(...ol(s.styles)), e.resolvedCss && r.push(...e.resolvedCss.split(/\s+/).filter(Boolean));
  for (const i of e.sheets ?? [])
    i.rules.forEach((u, n) => {
      u.condition && cl(u, s) && e.model && Tr(u.condition, e.model) && r.push(ui(i, n));
    });
  return [...new Set(r)];
}
function Sa(s) {
  var e, t, r;
  const i = {}, u = (r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  return u && (i["data-uim-eclass"] = u), s.name && (i["data-uim-name"] = s.name), s.group && (i["data-uim-group"] = s.group), i;
}
function El(s, e, t) {
  const r = [];
  return dr(t ?? s.required) && r.push("uim-s-required"), dr(e ?? s.readOnly) && r.push("uim-s-readonly"), r;
}
function fi(s, e = /* @__PURE__ */ new Set()) {
  if (!s) return {};
  if (e.has(s)) return {};
  e.add(s);
  const t = s.extends ? fi(s.extends, e) : {}, r = hl(s);
  return Si(t, r);
}
function Ti(s) {
  return s.reduce(
    (e, t) => Si(e, fi(t)),
    {}
  );
}
function hl(s) {
  const e = {};
  s.css !== void 0 && (e.css = s.css), s.vueComponent !== void 0 && (e.vueComponent = s.vueComponent);
  const t = s;
  t.layout !== void 0 && (e.layout = t.layout), t.order !== void 0 && (e.order = t.order);
  const r = s;
  return r.widgetType !== void 0 && (e.widgetType = r.widgetType), r.label !== void 0 && (e.label = r.label), r.readOnly !== void 0 && (e.readOnly = r.readOnly), r.order !== void 0 && (e.order = r.order), e;
}
function Si(s, e) {
  return {
    ...s,
    ...Object.fromEntries(
      Object.entries(e).filter(([, t]) => t !== void 0)
    ),
    // Merge CSS classes (append, not replace)
    css: [s.css, e.css].filter(Boolean).join(" ") || void 0
  };
}
const ma = /* @__PURE__ */ le({
  __name: "ComponentDispatcher",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = s, t = ai(), r = f(() => {
      var l, g, c, E;
      const d = ((E = (c = (g = (l = e.component).eClass) == null ? void 0 : g.call(l)) == null ? void 0 : c.getName) == null ? void 0 : E.call(c)) ?? "", o = t.getComposer(d);
      return o || console.warn(`[uimodel-composer] No composer registered for EClass "${d}"`), o ?? null;
    }), i = St(fr, void 0), u = f(() => (Pt(), i?.version.value, Ta(e.component, {
      model: e.model,
      sheets: i?.sheets.value,
      resolvedCss: Ti(e.component.styles ?? []).css
    }))), n = f(() => Sa(e.component));
    return (l, g) => r.value ? (m(), H(da(r.value), pa({
      key: 0,
      component: s.component,
      model: s.model,
      class: u.value
    }, n.value), null, 16, ["component", "model", "class"])) : oe("", !0);
  }
});
function Ia(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function gl(s) {
  return Ia(s) === "GroupWidget";
}
function dl(s) {
  return Ia(s) === "Conditional";
}
function pl(s) {
  return Ia(s) === "ForEach";
}
function fl(s) {
  if (!s) return [];
  const e = typeof s == "object" && Symbol.iterator in s ? s : [s], t = [];
  for (const r of e)
    r && typeof r.eClass == "function" ? t.push(r) : r != null && console.warn("[uimodel-composer] ForEach: Element ist kein EObject und wird übersprungen:", r);
  return t;
}
function la(s, e, t) {
  var r;
  const i = [];
  for (const u of s ?? [])
    if (oi(u)) {
      const n = (r = e.eClass) == null ? void 0 : r.call(e);
      if (!n) continue;
      for (const l of ul(n, u, t))
        i.push({ kind: "widget", widget: l, model: e });
    } else if (dl(u)) {
      const n = Tr(u.condition, e) ? u.then : u.else;
      i.push(...la(n, e, t));
    } else if (pl(u)) {
      const n = fl($r(u.items, e));
      if (n.length === 0) {
        u.emptyText && i.push({ kind: "note", text: u.emptyText });
        continue;
      }
      for (const l of n)
        i.push(...la(u.body, l, t));
    } else gl(u) ? i.push({ kind: "group", widget: u, model: e }) : i.push({ kind: "widget", widget: u, model: e });
  return i;
}
function mi(s, e) {
  return f(() => (Pt(), Tr(Qe(s), Qe(e))));
}
const Tl = /* @__PURE__ */ new Set([
  "readOnly",
  "required",
  "password",
  "asToggle",
  "multiSelect",
  "asButtonGroup",
  "withTime"
]), Sl = /* @__PURE__ */ new Set([
  "maxLength",
  "rows",
  "min",
  "max",
  "step",
  "minSearchLength",
  "order"
]);
function ml(s, e) {
  if (e === null) return s === "feature" ? null : void 0;
  if (s === "feature") return e;
  if (Tl.has(s)) return !!e;
  if (Sl.has(s)) {
    const t = Number(e);
    return Number.isFinite(t) ? t : void 0;
  }
  return String(e);
}
function Il(s, e) {
  var t;
  const r = { values: {}, featureSuppressed: !1 };
  for (const i of s.bindings ?? []) {
    const u = i.property;
    if (!u || !i.expression) continue;
    const n = $r(i.expression, e, {
      feature: s.feature,
      eClass: (t = e.eClass) == null ? void 0 : t.call(e)
    });
    if (n === void 0) continue;
    if (u === "feature") {
      n === null ? r.featureSuppressed = !0 : r.feature = n;
      continue;
    }
    const l = ml(u, n);
    l !== void 0 && (r.values[u] = l);
  }
  return r;
}
function Ii(s, e) {
  return f(() => {
    var t;
    Pt();
    const r = Qe(s), i = Ti(r.styles), u = {
      ...r.label !== void 0 ? { label: r.label } : {},
      ...r.placeholder !== void 0 ? { placeholder: r.placeholder } : {},
      ...r.readOnly !== void 0 ? { readOnly: r.readOnly } : {},
      ...r.required !== void 0 ? { required: r.required } : {}
    }, n = e ? Qe(e) : void 0;
    if (!n || (((t = r.bindings) == null ? void 0 : t.length) ?? 0) === 0)
      return { ...i, ...u };
    const l = Il(r, n);
    return {
      ...i,
      ...u,
      ...l.values,
      boundFeature: l.feature,
      featureSuppressed: l.featureSuppressed
    };
  });
}
var se = /* @__PURE__ */ ((s) => (s[s.DEFAULT = 0] = "DEFAULT", s[s.DATA_TYPE = 100] = "DATA_TYPE", s[s.ECLASS = 200] = "ECLASS", s[s.FEATURE = 300] = "FEATURE", s[s.PACKAGE = 400] = "PACKAGE", s[s.INSTANCE = 500] = "INSTANCE", s[s.OVERRIDE = 1e3] = "OVERRIDE", s))(se || {});
function ae() {
  return { matches: !1, priority: 0 };
}
function De(s) {
  return { matches: !0, priority: s };
}
let Nl = class {
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
      return ae();
    if (t === this.eClass)
      return De(se.ECLASS + 50);
    if (t.getName() === this.eClass.getName()) {
      const r = t.getEPackage(), i = this.eClass.getEPackage();
      if (r && i && r.getNsURI() === i.getNsURI())
        return De(se.ECLASS + 50);
    }
    return this.isSuperTypeOf(this.eClass, t) ? De(se.ECLASS) : ae();
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
}, vl = class {
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
      return ae();
    const u = (t = i.getEType) == null ? void 0 : t.call(i);
    return u && ((r = u.getName) == null ? void 0 : r.call(u)) === this.dataTypeName ? De(se.DATA_TYPE) : ae();
  }
  /**
   * Check if the feature is an EAttribute.
   */
  isEAttribute(e) {
    var t, r;
    return !e || typeof e != "object" ? !1 : "getEAttributeType" in e || "eClass" in e && typeof e.eClass == "function" && ((r = (t = e.eClass()) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "EAttribute";
  }
}, Ll = class {
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
    return ae();
  }
  /**
   * Match against a specific enum.
   */
  matchEnum(e) {
    var t;
    return this.enumName ? ((t = e.getName) == null ? void 0 : t.call(e)) === this.enumName ? De(se.DATA_TYPE + 50) : ae() : De(se.DATA_TYPE);
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
}, _l = class {
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
      return ae();
    const g = l;
    let c = se.DATA_TYPE;
    if (this.containment !== void 0) {
      if ((((t = g.isContainment) == null ? void 0 : t.call(g)) ?? !1) !== this.containment)
        return ae();
      c += 25;
    }
    if (this.targetClass) {
      const E = (r = g.getEReferenceType) == null ? void 0 : r.call(g);
      if (!E)
        return ae();
      const d = (i = E.getName) == null ? void 0 : i.call(E), o = (n = (u = this.targetClass).getName) == null ? void 0 : n.call(u);
      if (d !== o && !this.isSuperTypeOf(this.targetClass, E))
        return ae();
      c += 25;
    }
    return De(c);
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
class Ol {
  constructor(e, t) {
    this.eClass = e, this.featureName = t;
  }
  /**
   * Match the context against this specific feature.
   */
  match(e) {
    var t, r, i, u, n, l, g, c, E, d;
    const o = e.feature || e.attribute || e.reference;
    if (!o || ((t = o.getName) == null ? void 0 : t.call(o)) !== this.featureName)
      return ae();
    const p = (r = o.getEContainingClass) == null ? void 0 : r.call(o);
    if (!p)
      return ae();
    if (p === this.eClass)
      return De(se.FEATURE);
    const w = (i = p.getName) == null ? void 0 : i.call(p), B = (n = (u = this.eClass).getName) == null ? void 0 : n.call(u);
    if (w === B) {
      const T = (l = p.getEPackage) == null ? void 0 : l.call(p), v = (c = (g = this.eClass).getEPackage) == null ? void 0 : c.call(g);
      if (T && v && ((E = T.getNsURI) == null ? void 0 : E.call(T)) === ((d = v.getNsURI) == null ? void 0 : d.call(v)))
        return De(se.FEATURE);
    }
    return this.isInheritedFrom(p, this.eClass) ? De(se.FEATURE - 10) : ae();
  }
  /**
   * Check if subClass inherits from superClass.
   */
  isInheritedFrom(e, t) {
    var r, i, u, n, l, g, c;
    const E = (r = e.getEAllSuperTypes) == null ? void 0 : r.call(e);
    if (!E) return !1;
    for (const d of E) {
      if (d === t) return !0;
      if (((i = d.getName) == null ? void 0 : i.call(d)) === ((u = t.getName) == null ? void 0 : u.call(t))) {
        const o = (n = d.getEPackage) == null ? void 0 : n.call(d), p = (l = t.getEPackage) == null ? void 0 : l.call(t);
        if (o && p && ((g = o.getNsURI) == null ? void 0 : g.call(o)) === ((c = p.getNsURI) == null ? void 0 : c.call(p)))
          return !0;
      }
    }
    return !1;
  }
}
var Al = Object.defineProperty, yl = (s, e, t) => e in s ? Al(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, wa = (s, e, t) => yl(s, typeof e != "symbol" ? e + "" : e, t);
let Cl = 0;
function Dl() {
  return `descriptor-${++Cl}`;
}
let Rl = class {
  constructor() {
    wa(this, "entries", []), wa(this, "instanceOverrides", /* @__PURE__ */ new WeakMap());
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
      { priority: se.INSTANCE }
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
      { priority: se.ECLASS, ...r }
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
      { priority: se.DATA_TYPE, ...r }
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
      { priority: se.DATA_TYPE, ...r }
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
      { priority: se.DATA_TYPE, ...t }
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
      { priority: se.FEATURE, ...i }
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
    const i = Dl();
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
        const r = new Nl(e.eClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "datatype": {
        const r = new vl(e.dataTypeName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "enum": {
        const r = new Ll(e.enumName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "reference": {
        const r = new _l(e.containment, e.targetClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "feature": {
        const r = new Ol(e.eClass, e.featureName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "instance":
        return (r) => r.eObject === e.eObject ? De(t ?? se.INSTANCE) : ae();
      case "custom":
        return e.matcher;
      default:
        return () => ae();
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
const ze = new Rl();
var wl = Object.defineProperty, Fl = (s, e, t) => e in s ? wl(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Fa = (s, e, t) => Fl(s, typeof e != "symbol" ? e + "" : e, t);
let Pl = class {
  constructor() {
    Fa(this, "lazyRegistrations", []), Fa(this, "resolvedPackages", /* @__PURE__ */ new Map());
  }
  /**
   * Register a decorated component immediately.
   */
  register(e, t, r) {
    ze.register(e, t, r);
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
      r ? ze.register(t.component, r, t.options) : e.push(t);
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
new Pl();
const Ni = Symbol("componentRegistry");
function bl() {
  const s = St(Ni) ?? ze;
  function e(d) {
    return s.getComponent(d);
  }
  function t(d, o) {
    return s.getComponentForFeature(d, o);
  }
  function r(d, o) {
    return s.getComponentForEClass(d, o);
  }
  function i(d, o, p) {
    return s.register(d, o, p);
  }
  function u(d, o) {
    return s.registerForInstance(d, o);
  }
  function n(d, o, p) {
    return s.registerForEClass(d, o, p);
  }
  function l(d, o, p) {
    return s.registerForDataType(d, o, p);
  }
  function g(d, o, p) {
    return s.registerForEnum(d, o, p);
  }
  function c(d, o) {
    return s.registerForReference(d, o);
  }
  function E(d, o, p, w) {
    return s.registerForFeature(d, o, p, w);
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
    registerForEnum: g,
    registerForReference: c,
    registerForFeature: E
  };
}
const Ml = { class: "uimodel-fallback-widget" }, Vl = { class: "uimodel-fallback-widget__label" }, Ul = {
  key: 0,
  "aria-hidden": "true"
}, Bl = ["rows", "value", "placeholder", "readonly", "disabled"], Gl = /* @__PURE__ */ le({
  __name: "FallbackWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = f(() => {
      var o;
      return ((o = e.custom) == null ? void 0 : o.resolvedStyle) ?? {};
    }), r = f(
      () => {
        var o, p;
        return t.value.label ?? ((p = (o = e.feature) == null ? void 0 : o.getName) == null ? void 0 : p.call(o)) ?? "";
      }
    ), i = f(() => t.value.placeholder ?? ""), u = f(() => g(t.value.readOnly)), n = f(() => g(t.value.required)), l = f(() => {
      var o, p;
      const w = (p = (o = e.custom) == null ? void 0 : o.rawWidget) == null ? void 0 : p.rows, B = Number(w);
      return Number.isFinite(B) && B > 0 ? B : 3;
    });
    function g(o) {
      return o === !0 || o === "true";
    }
    const c = f(() => {
      var o;
      const p = (o = e.eObject) == null ? void 0 : o.eGet(e.feature);
      return p == null ? "" : String(p);
    }), E = pr(c.value);
    Dt(c, (o) => {
      E.value = o;
    });
    function d(o) {
      var p;
      const w = o.target.value;
      E.value = w, (p = e.eObject) == null || p.eSet(e.feature, w);
    }
    return (o, p) => (m(), D("div", Ml, [
      ne("label", Vl, [
        Wa(Ye(r.value), 1),
        n.value ? (m(), D("span", Ul, " *")) : oe("", !0)
      ]),
      ne("textarea", {
        class: "uimodel-fallback-widget__input",
        rows: l.value,
        value: E.value,
        placeholder: i.value,
        readonly: u.value,
        disabled: u.value,
        onInput: d
      }, null, 40, Bl)
    ]));
  }
}), Wl = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, $l = /* @__PURE__ */ Wl(Gl, [["__scopeId", "data-v-0237261a"]]), vi = /* @__PURE__ */ le({
  __name: "WidgetComposer",
  props: {
    widget: {},
    model: {}
  },
  setup(s) {
    const e = s, t = /* @__PURE__ */ new Set(), { getComponentForFeature: r } = bl(), i = mi(
      () => e.widget.visibilityCondition,
      () => e.model
    ), u = Ii(
      () => e.widget,
      () => e.model
    ), n = f(
      () => u.value.boundFeature ?? e.widget.feature
    ), l = f(() => {
      var o, p, w, B, T, v, G, y;
      if (!n.value) return null;
      const V = r(n.value, e.model);
      if (V) return V;
      const q = ((B = (w = (p = (o = e.widget).eClass) == null ? void 0 : p.call(o)) == null ? void 0 : w.getName) == null ? void 0 : B.call(w)) ?? "WidgetComponent", U = ((y = (G = (v = (T = n.value).getEType) == null ? void 0 : v.call(T)) == null ? void 0 : G.getName) == null ? void 0 : y.call(G)) ?? "?", ge = `${q}/${U}`;
      return t.has(ge) || (t.add(ge), console.warn(
        `[uimodel-composer] Kein Renderer für Widget "${q}" auf Datentyp "${U}" registriert — Fallback als Plaintext-Editor. Host: Renderer über die @emfts/vue-registry registrieren.`
      )), $l;
    }), g = f(() => {
      var o, p;
      return {
        eObject: e.model,
        feature: n.value,
        eClass: (p = (o = e.model).eClass) == null ? void 0 : p.call(o),
        custom: {
          resolvedStyle: u.value,
          rawWidget: e.widget
        }
      };
    }), c = St(fr, void 0), E = f(() => (Pt(), c?.version.value, [
      ...Ta(e.widget, {
        model: e.model,
        sheets: c?.sheets.value,
        resolvedCss: u.value.css
      }),
      ...El(
        e.widget,
        u.value.readOnly,
        u.value.required
      )
    ])), d = f(() => Sa(e.widget));
    return (o, p) => re(i) && l.value && !re(u).featureSuppressed ? (m(), H(da(l.value), pa({ key: 0 }, { ...g.value, ...d.value }, { class: E.value }), null, 16, ["class"])) : oe("", !0);
  }
}), Yl = {
  key: 0,
  class: "uim-group-label"
}, kl = /* @__PURE__ */ le({
  __name: "GroupComposer",
  props: {
    widget: {},
    model: {}
  },
  setup(s) {
    const e = s, t = St(fr, void 0), r = mi(
      () => e.widget.visibilityCondition,
      () => e.model
    ), i = Ii(
      () => e.widget,
      () => e.model
    ), u = f(() => {
      const E = i.value.label;
      return E == null ? "" : String(E);
    }), n = f(
      () => String(e.widget.layout ?? "VERTICAL").toLowerCase()
    ), l = f(() => (Pt(), t?.version.value, [
      ...Ta(e.widget, {
        model: e.model,
        sheets: t?.sheets.value,
        resolvedCss: i.value.css
      }),
      "uimodel-group",
      `uimodel-group--${n.value}`
    ])), g = f(
      () => Sa(e.widget)
    ), c = f(() => e.widget.fields ?? []);
    return (E, d) => re(r) ? (m(), D("div", pa({
      key: 0,
      class: l.value
    }, g.value), [
      u.value ? (m(), D("div", Yl, Ye(u.value), 1)) : oe("", !0),
      gr(Li, {
        fields: c.value,
        model: s.model
      }, null, 8, ["fields", "model"])
    ], 16)) : oe("", !0);
  }
}), xl = {
  key: 0,
  class: "uimodel-foreach-empty"
}, Li = /* @__PURE__ */ le({
  __name: "FieldsRenderer",
  props: {
    fields: {},
    model: {}
  },
  setup(s) {
    const e = s, t = St(hi, void 0), r = St(fr, void 0), i = f(() => (Pt(), r?.version.value, la(e.fields, e.model, t?.value)));
    return (u, n) => (m(!0), D(mt, null, wt(i.value, (l, g) => (m(), D(mt, { key: g }, [
      l.kind === "note" ? (m(), D("p", xl, Ye(l.text), 1)) : l.kind === "group" ? (m(), H(kl, {
        key: 1,
        widget: l.widget,
        model: l.model
      }, null, 8, ["widget", "model"])) : (m(), H(vi, {
        key: 2,
        widget: l.widget,
        model: l.model
      }, null, 8, ["widget", "model"]))
    ], 64))), 128));
  }
}), Xl = { class: "uimodel-form-view" }, _i = /* @__PURE__ */ le({
  __name: "FormViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (m(), D("div", Xl, [
      gr(Li, {
        fields: s.component.fields,
        model: s.model
      }, null, 8, ["fields", "model"])
    ]));
  }
}), Hl = { class: "uimodel-section-view" }, jl = /* @__PURE__ */ le({
  __name: "SectionViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (m(), D("div", Hl, [
      (m(!0), D(mt, null, wt(s.component.sections, (r) => (m(), H(_i, {
        key: r.name,
        component: r,
        model: s.model
      }, null, 8, ["component", "model"]))), 128))
    ]));
  }
}), ql = { class: "uimodel-tab-view" }, Kl = ["data-tab"], zl = /* @__PURE__ */ le({
  __name: "TabViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (m(), D("div", ql, [
      (m(!0), D(mt, null, wt(s.component.tabs, (r) => (m(), D("div", {
        key: r.name,
        class: "uimodel-tab-panel",
        "data-tab": r.name
      }, [
        gr(ma, {
          component: r,
          model: s.model
        }, null, 8, ["component", "model"])
      ], 8, Kl))), 128))
    ]));
  }
}), Ql = { class: "uimodel-summary-view" }, Zl = /* @__PURE__ */ le({
  __name: "SummaryViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (m(), D("div", Ql, [
      (m(!0), D(mt, null, wt(s.component.summaryFields, (r) => (m(), H(vi, {
        key: r.name,
        widget: r,
        model: s.model
      }, null, 8, ["widget", "model"]))), 128))
    ]));
  }
}), Jl = {
  key: 1,
  class: "uimodel-table-view-placeholder"
}, Oi = /* @__PURE__ */ le({
  __name: "TableViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = ai(), t = f(() => e.getComposer("TableViewRenderer"));
    return (r, i) => t.value ? (m(), H(da(t.value), {
      key: 0,
      component: s.component,
      model: s.model
    }, null, 8, ["component", "model"])) : (m(), D("div", Jl));
  }
}), eo = { class: "uimodel-master-detail" }, to = { class: "uimodel-master" }, so = { class: "uimodel-detail" }, ro = /* @__PURE__ */ le({
  __name: "MasterDetailComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (m(), D("div", eo, [
      ne("div", to, [
        gr(Oi, {
          component: s.component.master,
          model: s.model
        }, null, 8, ["component", "model"])
      ]),
      ne("div", so, [
        gr(ma, {
          component: s.component.detail,
          model: s.model
        }, null, 8, ["component", "model"])
      ])
    ]));
  }
}), Na = /* @__PURE__ */ le({
  __name: "UIModelComposer",
  props: {
    uiModel: {},
    model: {},
    composerRegistry: {},
    styleSheets: {},
    overlays: {}
  },
  setup(s) {
    const e = s, t = f(() => e.styleSheets ?? []), { version: r } = Hn(t);
    Ir(fr, { sheets: t, version: r }), nl(() => e.model), Ir(
      hi,
      f(() => (Pt(), {
        ...Jn(e.uiModel),
        overlayCases: Qn(e.overlays ?? [])
      }))
    );
    const i = e.composerRegistry ?? bn({
      FormView: _i,
      SectionView: jl,
      TabView: zl,
      SummaryView: Zl,
      TableView: Oi,
      MasterDetail: ro
    });
    Ir(ri, i);
    function u() {
      return Tr(e.uiModel.filterExpression, e.model);
    }
    return (n, l) => u() ? (m(!0), D(mt, { key: 0 }, wt(s.uiModel.components, (g) => (m(), H(ma, {
      key: g.name,
      component: g,
      model: s.model
    }, null, 8, ["component", "model"]))), 128)) : oe("", !0);
  }
});
function Pa(s) {
  const e = s;
  return !!e && typeof e.eIsProxy == "function" && e.eIsProxy();
}
function ba(s, e) {
  const t = e.getResourceSet(), r = s.eProxyURI();
  if (!r) return s;
  const i = r.toString(), u = i.indexOf("#");
  if (u > 0) {
    const l = i.substring(0, u), g = i.substring(u + 1);
    if (!t) return s;
    const c = e.getURI(), E = [];
    c && !l.includes("://") && E.push(zr.createURI(l).resolve(c).toString()), E.push(l);
    for (const d of E) {
      const o = t.getResource(zr.createURI(d), !1), p = o?.getEObject(g);
      if (p) return p;
    }
    return s;
  }
  const n = u === 0 ? i.substring(1) : i;
  return e.getEObject(n) ?? s;
}
function Ma(s, e) {
  for (const t of s.eClass().getEAllReferences()) {
    const r = s.eGet(t);
    if (r) {
      if (t.isMany()) {
        const i = r;
        for (let u = 0; u < i.length; u++) {
          const n = i[u];
          if (Pa(n)) {
            const l = ba(n, e);
            l !== n && (i[u] = l);
          }
        }
      } else if (Pa(r)) {
        const i = ba(r, e);
        i !== r && s.eSet(t, i);
      }
    }
  }
}
function ao(s) {
  for (const e of s.getContents()) {
    Ma(e, s);
    for (const t of e.eAllContents())
      Ma(t, s);
  }
}
const io = "VariableWrapper", uo = "VARIABLEWRAPPER";
function Ai(s) {
  return typeof s?.eClass == "function";
}
const no = /* @__PURE__ */ new Set([
  "_eResource",
  "_eContainer",
  "_eContainerFeature",
  "_eProxyURI",
  "_eAdapters",
  "_eDeliver",
  "eSettings"
]);
function lo(s) {
  if (!no.has(s))
    return s.startsWith("_") ? s.slice(1) : s;
}
function oo(s) {
  if (!s || typeof s != "object") return;
  const e = s;
  if (e.type !== uo) return;
  const t = new Qr(e._value);
  return typeof e.variable == "string" && (t.variable = e.variable), t;
}
function yi(s, e) {
  if (!e || typeof e != "object") return s;
  const t = e, r = s;
  for (const [i, u] of Object.entries(t)) {
    const n = lo(i);
    if (n && !(i.startsWith("_") && n in t))
      try {
        r[n] = oo(u) ?? u;
      } catch {
      }
  }
  return s;
}
function va(s) {
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
    if (i !== io) continue;
    const u = e[r];
    if (!(u instanceof Qr))
      try {
        e[r] = new Qr(u);
      } catch {
      }
  }
  return s;
}
function Ci(s, e) {
  return va(Ai(s) ? s : yi(e(), s));
}
const co = /color|colour|background|^fill$|^stroke$/i, Eo = /size|width|height|radius|blur|padding|transparence|transparency|opacity|zoom|count|index/i, ho = /^(is|has|show|enable|fullscreen|visible)/i, go = /datetime|timestamp|^moment$/i;
function Br(s) {
  const e = s.getName?.() ?? "", t = s.getEType?.()?.getName?.() ?? "";
  return t === "EBoolean" || ho.test(e) ? "flag" : t === "EInt" || t === "EDouble" || Eo.test(e) ? "number" : co.test(e) ? "colour" : go.test(e) ? "moment" : "text";
}
function Sr(s) {
  const t = (s.getName?.() ?? "").replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function Yr(s, e = s.getName?.() ?? "Settings") {
  const t = fa.eINSTANCE, r = t.createFormView();
  r.name = e;
  for (const u of s.getEStructuralFeatures()) {
    const n = po(t, u);
    n.feature = u, n.label = Sr(u), r.fields.push(n);
  }
  const i = t.createUIModel();
  return i.name = e, i.targetClasses.push(s), i.components.push(r), i;
}
function po(s, e) {
  switch (Br(e)) {
    case "flag":
      return s.createCheckboxWidget();
    case "number":
      return s.createNumberWidget();
    // Neither colours nor dates have a widget class of their own in the
    // metamodel; the renderer picks the control from the feature name, the
    // same way this does
    case "colour":
    case "moment":
    case "text":
    default:
      return s.createInputWidget();
  }
}
const fo = /^[a-z][\w-]*:[A-Za-z][\w.]*$/, La = /* @__PURE__ */ new WeakMap();
function To(s) {
  const e = [];
  for (const t of [s.fields, s.components]) {
    if (!t) continue;
    const r = Array.isArray(t) ? t : t.toArray?.() ?? [];
    e.push(...r);
  }
  return e;
}
function _a(s) {
  const e = [s];
  for (let t = 0; t < e.length; t += 1) e.push(...To(e[t]));
  return e;
}
function So(s) {
  if (s)
    for (const e of _a(s)) {
      const t = e.label;
      typeof t == "string" && fo.test(t) && La.set(e, t);
    }
}
function mo(s, e) {
  if (s)
    for (const t of _a(s)) {
      const r = La.get(t);
      if (!r) continue;
      const i = e(r);
      t.label = i === r ? r.split(".").pop() ?? r : i;
    }
}
function Io(s) {
  return s ? _a(s).some((e) => La.has(e)) : !1;
}
const oa = /* @__PURE__ */ new Map();
let ca;
function Di(s) {
  ca = s, kr();
}
function kr() {
  if (ca)
    for (const s of oa.values()) mo(s, ca);
}
const Ri = /* @__PURE__ */ new Map();
function wi(s) {
  return Ri.get(s);
}
function No(s) {
  for (const e of s.targetClasses ?? [])
    e && Ri.set(e, s);
}
let Va = !1;
function vo() {
  if (Va) return;
  ki();
  const s = R.eINSTANCE;
  s.setEFactoryInstance(fa.eINSTANCE), yr.INSTANCE.set(s.getNsURI(), s), Va = !0;
}
function Ea(s, e, t = "/ui.xmi") {
  const r = oa.get(t);
  if (r) return r;
  try {
    vo();
    const i = e.getNsURI();
    i && !yr.INSTANCE.has(i) && yr.INSTANCE.set(i, e);
    const u = new $i();
    u.getResourceFactoryRegistry().getExtensionToFactoryMap().set("xmi", new Yi());
    const n = u.createResource(zr.createURI(t));
    if (n.loadFromString(s), n.getContents().size() === 0) return;
    ao(n);
    const l = n.getContents().get(0);
    return oa.set(t, l), No(l), So(l), kr(), l;
  } catch (i) {
    console.warn("[ui.vue.uimodel] UI-Modell konnte nicht gelesen werden:", i);
    return;
  }
}
const Lo = { class: "list" }, _o = { class: "list__head" }, Oo = { class: "list__label" }, Ao = { class: "list__count" }, yo = {
  key: 0,
  class: "list__untyped"
}, Co = {
  key: 1,
  class: "list__empty"
}, Do = ["aria-expanded", "onClick"], Ro = { class: "entry__twist" }, wo = { class: "entry__title" }, Fo = {
  key: 0,
  class: "entry__actions"
}, Po = ["disabled", "onClick"], bo = ["disabled", "onClick"], Mo = ["onClick"], Vo = {
  key: 1,
  class: "entry__body"
}, Uo = /* @__PURE__ */ le({
  __name: "SettingsListWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = f(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? Sr(e.feature) : "")
    ), r = f(() => e.custom?.resolvedStyle?.readOnly === !0);
    function i() {
      const T = e.feature?.getName?.();
      if (!(!T || !e.eObject))
        return e.eObject[T];
    }
    const u = f(() => {
      const T = i();
      return T ? typeof T.toArray == "function" ? T.toArray() : Array.isArray(T) ? T : [] : [];
    }), n = f(() => {
      try {
        return e.feature?.getEReferenceType?.() ?? void 0;
      } catch {
        return;
      }
    }), l = /* @__PURE__ */ new Map(), g = f(() => {
      const T = n.value;
      if (!T) return;
      const v = wi(T);
      return v || (l.has(T) || l.set(T, Yr(T, T.getName?.() ?? "Eintrag")), l.get(T));
    }), c = pr(0), E = ["label", "name", "title", "key", "className", "id"];
    function d(T, v) {
      return o(T) ?? `${n.value?.getName?.() ?? "Eintrag"} ${v + 1}`;
    }
    function o(T, v = 1) {
      if (typeof T?.eClass != "function") return;
      const G = T;
      let y;
      try {
        y = [...T.eClass().getEStructuralFeatures()];
      } catch {
        return;
      }
      for (const V of E) {
        if (!y.some((ge) => ge.getName?.() === V)) continue;
        const q = G[V], U = q && typeof q == "object" ? q.value : q;
        if (U != null && String(U) !== "") return String(U);
      }
      if (!(v < 1))
        for (const V of y) {
          const q = V.getName?.(), U = q ? o(G[q], v - 1) : void 0;
          if (U) return U;
        }
    }
    function p() {
      const T = n.value, v = e.feature?.getName?.();
      if (!T || !v || !e.eObject) return;
      const y = T.getEPackage?.()?.getEFactoryInstance?.()?.create(T);
      if (!y) return;
      va(y);
      const V = i();
      if (V) {
        if (typeof V.add == "function") V.add(y);
        else if (Array.isArray(V)) V.push(y);
        else return;
        c.value = u.value.length - 1;
      }
    }
    function w(T) {
      const v = i();
      if (v) {
        if (typeof v.removeAt == "function") v.removeAt(T);
        else if (Array.isArray(v)) v.splice(T, 1);
        else return;
        c.value = Math.min(c.value, Math.max(u.value.length - 1, 0));
      }
    }
    function B(T, v) {
      const G = i();
      if (!G) return;
      const y = T + v;
      if (!(y < 0 || y >= u.value.length)) {
        if (typeof G.move == "function") G.move(y, T);
        else if (Array.isArray(G)) {
          const [V] = G.splice(T, 1);
          G.splice(y, 0, V);
        } else return;
        c.value = y;
      }
    }
    return (T, v) => (m(), D("section", Lo, [
      ne("header", _o, [
        ne("span", Oo, Ye(t.value), 1),
        ne("span", Ao, Ye(u.value.length), 1),
        v[1] || (v[1] = ne("span", { class: "list__spacer" }, null, -1)),
        n.value && !r.value ? (m(), H(re(Xi), {
          key: 0,
          size: "sm",
          onClick: p
        }, {
          default: Mi(() => [...v[0] || (v[0] = [
            Wa("Hinzufügen", -1)
          ])]),
          _: 1
        })) : oe("", !0)
      ]),
      n.value ? u.value.length ? oe("", !0) : (m(), D("p", Co, "Noch nichts angelegt.")) : (m(), D("p", yo, " Diese Liste ist im Modell ohne Typ angegeben - es steht dort nur, dass es mehrere sind, nicht wovon. Solange das so ist, lässt sich hier nichts zeigen. ")),
      (m(!0), D(mt, null, wt(u.value, (G, y) => (m(), D("div", {
        key: y,
        class: "entry"
      }, [
        ne("button", {
          type: "button",
          class: "entry__head",
          "aria-expanded": c.value === y,
          onClick: (V) => c.value = c.value === y ? -1 : y
        }, [
          ne("span", Ro, Ye(c.value === y ? "▾" : "▸"), 1),
          ne("span", wo, Ye(d(G, y)), 1)
        ], 8, Do),
        r.value ? oe("", !0) : (m(), D("span", Fo, [
          ne("button", {
            type: "button",
            title: "Nach oben",
            disabled: y === 0,
            onClick: (V) => B(y, -1)
          }, "↑", 8, Po),
          ne("button", {
            type: "button",
            title: "Nach unten",
            disabled: y === u.value.length - 1,
            onClick: (V) => B(y, 1)
          }, " ↓ ", 8, bo),
          ne("button", {
            type: "button",
            title: "Entfernen",
            class: "entry__remove",
            onClick: (V) => w(y)
          }, "✕", 8, Mo)
        ])),
        c.value === y ? (m(), D("div", Vo, [
          g.value ? (m(), H(re(Na), {
            key: 0,
            "ui-model": g.value,
            model: G
          }, null, 8, ["ui-model", "model"])) : oe("", !0)
        ])) : oe("", !0)
      ]))), 128))
    ]));
  }
}), xr = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, Fi = /* @__PURE__ */ xr(Uo, [["__scopeId", "data-v-b0db9508"]]), Bo = { class: "object" }, Go = {
  key: 0,
  class: "object__label"
}, Wo = {
  key: 1,
  class: "object__untyped"
}, $o = {
  key: 2,
  class: "object__body"
}, Yo = /* @__PURE__ */ le({
  __name: "SettingsObjectWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = f(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? Sr(e.feature) : "")
    ), r = f(() => {
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
      o && (va(o), e.eObject[E] = o);
    }
    Dt(() => [e.eObject, e.feature], u, { immediate: !0 });
    const n = f(() => i()), l = /* @__PURE__ */ new Map(), g = f(() => {
      const c = r.value;
      if (!c) return;
      const E = wi(c);
      return E || (l.has(c) || l.set(c, Yr(c, c.getName?.() ?? "Eintrag")), l.get(c));
    });
    return (c, E) => (m(), D("section", Bo, [
      t.value ? (m(), D("span", Go, Ye(t.value), 1)) : oe("", !0),
      r.value ? (m(), D("div", $o, [
        g.value && n.value ? (m(), H(re(Na), {
          key: 0,
          "ui-model": g.value,
          model: n.value
        }, null, 8, ["ui-model", "model"])) : oe("", !0)
      ])) : (m(), D("p", Wo, " Diese Einstellung ist im Modell ohne Typ angegeben - es steht dort nur, dass etwas enthalten ist, nicht was. Solange das so ist, lässt sich hier nichts zeigen. "))
    ]));
  }
}), Pi = /* @__PURE__ */ xr(Yo, [["__scopeId", "data-v-8adcf520"]]), ko = { class: "field-row__control" }, xo = {
  key: 2,
  class: "set"
}, Xo = { class: "set__label" }, Ho = ["title", "aria-pressed"], jo = /* @__PURE__ */ le({
  __name: "SettingsFieldWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = St(ji), r = f(() => {
      const h = i();
      return u(h) ? h : void 0;
    });
    function i() {
      const { eObject: h, feature: S } = e;
      if (!h || !S) return;
      const L = S.getName?.();
      return L ? h[L] : void 0;
    }
    function u(h) {
      return typeof h?.setTo == "function";
    }
    const n = f(() => e.feature != null && l(e.feature));
    function l(h) {
      try {
        return h.getEReferenceType?.()?.getName?.() === "VariableWrapper";
      } catch {
        return !1;
      }
    }
    const g = f(() => {
      try {
        return e.feature?.isMany?.() === !0 || (e.feature?.getUpperBound?.() ?? 1) !== 1;
      } catch {
        return !1;
      }
    });
    function c() {
      const h = e.feature?.getName?.();
      if (!(!h || !e.eObject))
        return e.eObject[h];
    }
    const E = f(() => {
      const h = c();
      return h ? typeof h.toArray == "function" ? h.toArray() : Array.isArray(h) ? h : [] : [];
    });
    function d(h) {
      return E.value.some((S) => S === h);
    }
    function o(h, S) {
      const L = c();
      if (!L || !U.value) return;
      if (S) {
        if (d(h)) return;
        typeof L.add == "function" ? L.add(h) : Array.isArray(L) && L.push(h);
        return;
      }
      const j = E.value.findIndex((ue) => ue === h);
      j < 0 || (typeof L.removeAt == "function" ? L.removeAt(j) : Array.isArray(L) && L.splice(j, 1));
    }
    const p = f({
      get: () => {
        const h = i();
        return w(h) ? h.value : h;
      },
      set: (h) => {
        const { eObject: S, feature: L } = e, j = L?.getName?.();
        if (!S || !j) return;
        const ue = i();
        if (w(ue)) {
          ue.value = h;
          return;
        }
        S[j] = h;
      }
    });
    function w(h) {
      return !!h && typeof h == "object" && "value" in h;
    }
    const B = f(() => n.value ? r.value?.variable ?? "" : ""), T = f(() => !!B.value), v = pr(!1);
    Dt(T, (h) => {
      h && (v.value = !0);
    }, { immediate: !0 });
    const G = f(() => {
      try {
        return (t?.getAllVariables() ?? []).map(([h]) => h);
      } catch {
        return [];
      }
    }), y = f({
      get: () => B.value,
      set: (h) => {
        if (!r.value) return;
        if (!h) return V();
        const S = t?.getVariable(h);
        S && r.value.setTo(S);
      }
    });
    function V() {
      r.value && (r.value.value = r.value.value, v.value = !1);
    }
    function q() {
      T.value ? V() : v.value = !v.value;
    }
    const U = f(() => !e.custom?.resolvedStyle?.readOnly && !T.value), ge = f(() => T.value ? `Von „${B.value}“` : void 0), X = f({
      get: () => (n.value ? r.value?.value : p.value) ?? "",
      set: (h) => {
        U.value && (n.value ? r.value && (r.value.value = h) : p.value = h);
      }
    }), ke = f({
      get: () => {
        const h = n.value ? r.value?.value : p.value;
        if (h == null || h === "") return "";
        const S = Number(h);
        return Number.isFinite(S) ? S : "";
      },
      set: (h) => {
        if (!U.value) return;
        const S = h === "" || h === null ? void 0 : Number(h);
        X.value = S !== void 0 && Number.isFinite(S) ? S : void 0;
      }
    }), Re = f({
      get: () => X.value === !0 || X.value === "true",
      set: (h) => {
        X.value = h;
      }
    }), Ze = f(() => e.custom?.rawWidget?.eClass?.()?.getName?.() ?? ""), we = f(() => {
      const h = e.feature?.getEType?.()?.getName?.();
      return h === "EInt" || h === "EDouble" || h === "ELong" || h === "EFloat";
    }), xe = f(() => {
      const h = e.custom?.rawWidget, S = h?.values, L = S && typeof S.map == "function" ? [...S] : [], j = h?.optionLabel;
      return L.map((ue) => {
        const Fe = we.value ? Number(ue) : ue;
        let st = ue;
        if (j?.body && e.eObject)
          try {
            const Pe = $r(j, e.eObject, { option: ue });
            Pe != null && Pe !== "" && (st = String(Pe));
          } catch {
          }
        return { value: Fe, text: st };
      });
    }), Je = f(() => Number(e.custom?.rawWidget?.rows) || 6), K = f(() => ({
      min: e.custom?.rawWidget?.min,
      max: e.custom?.rawWidget?.max,
      step: e.custom?.rawWidget?.step
    })), ce = f(() => {
      if (g.value) return "set";
      switch (Ze.value) {
        case "CheckboxWidget":
          return "flag";
        case "TextAreaWidget":
          return "lines";
        case "NumberWidget":
          return "number";
        case "SelectWidget":
        case "ComboboxWidget":
          return "choice";
        case "InputWidget": {
          const h = e.feature ? Br(e.feature) : "text";
          return h === "colour" || h === "moment" ? h : "text";
        }
        default:
          return e.feature ? Br(e.feature) : "text";
      }
    }), et = f({
      get() {
        const h = X.value;
        if (!h) return "";
        const S = new Date(String(h));
        if (Number.isNaN(S.getTime())) return "";
        const L = (j) => String(j).padStart(2, "0");
        return `${S.getFullYear()}-${L(S.getMonth() + 1)}-${L(S.getDate())}T${L(S.getHours())}:${L(S.getMinutes())}`;
      },
      set(h) {
        if (!h) {
          X.value = "";
          return;
        }
        const S = new Date(h);
        X.value = Number.isNaN(S.getTime()) ? "" : S.toISOString();
      }
    }), ie = f(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? Sr(e.feature) : "")
    ), tt = f(() => v.value && G.value.length === 0);
    return (h, S) => r.value || !n.value ? (m(), D("div", {
      key: 0,
      class: Oa(["field-row", { "field-row--bound": T.value }])
    }, [
      ne("div", ko, [
        v.value && !tt.value ? (m(), H(re(ya), {
          key: 0,
          modelValue: y.value,
          "onUpdate:modelValue": S[0] || (S[0] = (L) => y.value = L),
          label: ie.value,
          options: G.value,
          disabled: s.custom?.resolvedStyle?.readOnly,
          placeholder: "Keine Variable",
          clearable: ""
        }, null, 8, ["modelValue", "label", "options", "disabled"])) : tt.value ? (m(), H(re(ur), {
          key: 1,
          "model-value": "",
          label: ie.value,
          disabled: "",
          hint: "Es sind noch keine Variablen angelegt."
        }, null, 8, ["label"])) : ce.value === "set" ? (m(), D("fieldset", xo, [
          ne("legend", Xo, Ye(ie.value), 1),
          (m(!0), D(mt, null, wt(xe.value, (L) => (m(), H(re(Ca), {
            key: String(L.value),
            "model-value": d(L.value),
            label: L.text,
            disabled: !U.value,
            "onUpdate:modelValue": (j) => o(L.value, j)
          }, null, 8, ["model-value", "label", "disabled", "onUpdate:modelValue"]))), 128))
        ])) : ce.value === "flag" ? (m(), H(re(Ca), {
          key: 3,
          modelValue: Re.value,
          "onUpdate:modelValue": S[1] || (S[1] = (L) => Re.value = L),
          label: ie.value,
          disabled: !U.value
        }, null, 8, ["modelValue", "label", "disabled"])) : ce.value === "choice" ? (m(), H(re(ya), {
          key: 4,
          modelValue: X.value,
          "onUpdate:modelValue": S[2] || (S[2] = (L) => X.value = L),
          label: ie.value,
          options: xe.value,
          "value-key": "value",
          "label-key": "text",
          disabled: !U.value,
          clearable: ""
        }, null, 8, ["modelValue", "label", "options", "disabled"])) : ce.value === "colour" ? (m(), H(re(Hi), {
          key: 5,
          modelValue: X.value,
          "onUpdate:modelValue": S[3] || (S[3] = (L) => X.value = L),
          label: ie.value,
          disabled: !U.value,
          hint: ge.value ?? s.custom?.resolvedStyle?.placeholder
        }, null, 8, ["modelValue", "label", "disabled", "hint"])) : ce.value === "lines" ? (m(), H(re(ur), {
          key: 6,
          modelValue: X.value,
          "onUpdate:modelValue": S[4] || (S[4] = (L) => X.value = L),
          label: ie.value,
          rows: Je.value,
          placeholder: s.custom?.resolvedStyle?.placeholder,
          disabled: !U.value
        }, null, 8, ["modelValue", "label", "rows", "placeholder", "disabled"])) : ce.value === "number" ? (m(), H(re(ur), {
          key: 7,
          modelValue: ke.value,
          "onUpdate:modelValue": S[5] || (S[5] = (L) => ke.value = L),
          label: ie.value,
          type: "number",
          min: K.value.min,
          max: K.value.max,
          step: K.value.step,
          disabled: !U.value
        }, null, 8, ["modelValue", "label", "min", "max", "step", "disabled"])) : ce.value === "moment" ? (m(), H(re(ur), {
          key: 8,
          modelValue: et.value,
          "onUpdate:modelValue": S[6] || (S[6] = (L) => et.value = L),
          label: ie.value,
          type: "datetime-local",
          disabled: !U.value
        }, null, 8, ["modelValue", "label", "disabled"])) : (m(), H(re(ur), {
          key: 9,
          modelValue: X.value,
          "onUpdate:modelValue": S[7] || (S[7] = (L) => X.value = L),
          label: ie.value,
          placeholder: s.custom?.resolvedStyle?.placeholder,
          disabled: !U.value
        }, null, 8, ["modelValue", "label", "placeholder", "disabled"]))
      ]),
      n.value ? (m(), D("button", {
        key: 0,
        type: "button",
        class: Oa(["bind", { on: T.value, armed: v.value && !T.value }]),
        title: T.value ? `Bindung an „${B.value}“ lösen` : "An eine Variable binden",
        "aria-pressed": T.value,
        onClick: q
      }, " {x} ", 10, Ho)) : oe("", !0)
    ], 2)) : oe("", !0);
  }
}), Gr = /* @__PURE__ */ xr(jo, [["__scopeId", "data-v-fe1813a4"]]), qo = "org.eclipse.daanse.board.app.ui.vue.composables";
let Ua = !1;
function Ko() {
  if (Ua) return !0;
  const s = yr.INSTANCE.getEPackage(qo)?.getEClassifier(
    "VariableWrapper"
  );
  return s ? (ze.registerForReference(Gr, { targetClass: s }), Ua = !0, !0) : !1;
}
function ha(s, e = /* @__PURE__ */ new Set()) {
  if (!e.has(s)) {
    e.add(s);
    for (const t of s.getEStructuralFeatures()) {
      if (Qo(t)) {
        if (Ba(t)) {
          ze.registerForFeature(
            s,
            t.getName?.() ?? "",
            Gr
          );
          continue;
        }
        ze.registerForFeature(
          s,
          t.getName?.() ?? "",
          Fi
        );
        const r = t.getEReferenceType?.();
        r && ha(r, e);
        continue;
      }
      if (zo(t)) {
        ze.registerForFeature(
          s,
          t.getName?.() ?? "",
          Pi
        );
        const r = t.getEReferenceType?.();
        r && ha(r, e);
        continue;
      }
      Ba(t) && ze.registerForFeature(
        s,
        t.getName?.() ?? "",
        Gr
      );
    }
  }
}
function Ba(s) {
  try {
    return s.getEReferenceType?.() == null;
  } catch {
    return !0;
  }
}
function zo(s) {
  try {
    const e = s.getEReferenceType?.();
    return e ? e.getName?.() !== "VariableWrapper" : !1;
  } catch {
    return !1;
  }
}
function Qo(s) {
  try {
    return s.isMany?.() === !0 || (s.getUpperBound?.() ?? 1) !== 1;
  } catch {
    return !1;
  }
}
const Zo = { class: "settings-form" }, Jo = {
  key: 1,
  class: "settings-form__empty"
}, ec = /* @__PURE__ */ le({
  __name: "SettingsForm",
  props: /* @__PURE__ */ Vi({
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
    const { t: e, revision: t } = xi();
    Di(e), Dt(t, () => {
      kr(), di();
    }), R.eINSTANCE, Ir(Ni, ze), Ko();
    const r = Ui(s, "modelValue"), i = s;
    function u() {
      const d = Ci(r.value, i.create);
      d !== r.value && (r.value = d);
    }
    Bi(u), Dt(r, u);
    const n = f(() => r.value), l = Aa(), g = Aa(), c = f(() => {
      const d = r.value?.eClass?.();
      if (d && ha(d), i.uiModel) return Xr(i.uiModel);
      if (i.domainPackage)
        for (const w of i.entryForms ?? [])
          Ea(w.xmi, i.domainPackage, w.uri);
      if (i.uiModelXmi && i.domainPackage) {
        const w = Ea(i.uiModelXmi, i.domainPackage, i.uiModelUri);
        if (w) return Xr(w);
      }
      const p = n.value?.eClass?.();
      if (p)
        return g.value !== p && (g.value = p, l.value = Xr(Yr(p))), l.value;
    }), E = f(() => (n.value?.eClass?.().getEStructuralFeatures().length ?? 0) > 0);
    return (d, o) => (m(), D("div", Zo, [
      c.value && n.value && E.value ? (m(), H(re(Na), {
        key: 0,
        "ui-model": c.value,
        model: n.value
      }, null, 8, ["ui-model", "model"])) : (m(), D("p", Jo, Ye(s.emptyText ?? "Für dieses Widget sind keine Einstellungen modelliert."), 1))
    ]));
  }
}), tc = /* @__PURE__ */ xr(ec, [["__scopeId", "data-v-48444f2b"]]), sc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SettingsFieldWidget: Gr,
  SettingsForm: tc,
  SettingsListWidget: Fi,
  SettingsObjectWidget: Pi,
  adopt: yi,
  asModel: Ci,
  formFor: Yr,
  hasLabelKeys: Io,
  isModelled: Ai,
  kindOf: Br,
  labelOf: Sr,
  loadUIModel: Ea,
  retranslate: kr,
  useLabelTranslator: Di
}, Symbol.toStringTag, { value: "Module" })), Ga = "org.eclipse.daanse.board.app.ui.vue.uimodel", rc = "0.0.1-next.1";
async function pc(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${Ga}: tsm runtime is not initialized`);
  e.register(Ga, sc, rc, "ui.vue.uimodel"), await void 0;
}
async function fc(s) {
  await void 0;
}
export {
  Gr as SettingsFieldWidget,
  tc as SettingsForm,
  Fi as SettingsListWidget,
  Pi as SettingsObjectWidget,
  pc as activate,
  yi as adopt,
  Ci as asModel,
  fc as deactivate,
  Yr as formFor,
  Io as hasLabelKeys,
  Ai as isModelled,
  Br as kindOf,
  Sr as labelOf,
  Ea as loadUIModel,
  kr as retranslate,
  Di as useLabelTranslator
};
