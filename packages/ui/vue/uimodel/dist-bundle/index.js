(function(){var i="ui.vue.uimodel",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".list[data-v-b0db9508]{margin-bottom:12px}.list__head[data-v-b0db9508]{display:flex;align-items:center;gap:7px;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid var(--color-divider)}.list__label[data-v-b0db9508]{font-family:var(--font-sans);font-size:var(--text-sm);font-weight:600;color:var(--color-fg)}.list__count[data-v-b0db9508]{font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.list__spacer[data-v-b0db9508]{flex:1 1 auto}.list__empty[data-v-b0db9508],.list__untyped[data-v-b0db9508]{margin:0 0 8px;font-size:var(--text-xs);line-height:1.5;color:var(--color-dim)}.entry[data-v-b0db9508]{position:relative;margin-bottom:3px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.entry__head[data-v-b0db9508]{display:flex;align-items:center;gap:6px;width:100%;padding:5px 78px 5px 8px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);text-align:left;background:none;border:0;cursor:pointer}.entry__twist[data-v-b0db9508]{width:10px;font-size:var(--text-xs);color:var(--color-dim)}.entry__actions[data-v-b0db9508]{position:absolute;top:3px;right:5px;display:flex;gap:2px}.entry__actions button[data-v-b0db9508]{width:20px;height:20px;font-size:var(--text-xs);color:var(--color-dim);background:none;border:1px solid transparent;border-radius:var(--radius-xs);cursor:pointer}.entry__actions button[data-v-b0db9508]:hover:not(:disabled){color:var(--color-fg);border-color:var(--color-divider)}.entry__actions button[data-v-b0db9508]:disabled{opacity:.3;cursor:default}.entry__remove[data-v-b0db9508]:hover:not(:disabled){color:var(--color-err)}.entry__actions button[data-v-b0db9508]:focus-visible,.entry__head[data-v-b0db9508]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.entry__body[data-v-b0db9508]{padding:8px 10px 10px;border-top:1px solid var(--color-divider)}.object[data-v-8adcf520]{margin-bottom:12px}.object__label[data-v-8adcf520]{display:block;margin-bottom:6px;font-size:12px;font-weight:600;color:var(--d-text-muted, #6b7280)}.object__body[data-v-8adcf520]{padding-left:10px;border-left:2px solid var(--d-border, #e5e7eb)}.object__untyped[data-v-8adcf520]{margin:0;font-size:12px;color:var(--d-text-muted, #6b7280)}.set[data-v-36ae1ee2]{margin:0 0 7px;padding:0;border:0}.set__label[data-v-36ae1ee2]{padding:0;margin-bottom:4px;font-size:12px;color:var(--d-text-muted, #6b7280)}.field-row[data-v-36ae1ee2]{display:flex;align-items:flex-start;gap:6px}.field-row__control[data-v-36ae1ee2]{flex:1 1 auto;min-width:0}.field-row--bound[data-v-36ae1ee2]{border-left:2px solid var(--color-brand);padding-left:6px;margin-left:-8px}.bind[data-v-36ae1ee2]{width:24px;height:26px;flex:none;margin-top:0;font-family:var(--font-mono);font-size:var(--text-xs);font-style:italic;color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.bind[data-v-36ae1ee2]:hover{color:var(--color-fg);border-color:var(--color-outline)}.bind.armed[data-v-36ae1ee2]{color:var(--color-accent);border-color:var(--color-accent)}.bind.on[data-v-36ae1ee2]{color:var(--color-brand);border-color:var(--color-brand);background-color:color-mix(in srgb,var(--color-brand) 14%,transparent)}.bind[data-v-36ae1ee2]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.settings-form[data-v-2eb13ad3]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.settings-form[data-v-2eb13ad3] .uim-c-GroupWidget{padding-top:10px;margin-top:12px;border-top:1px solid var(--color-divider)}.settings-form[data-v-2eb13ad3] .uim-c-GroupWidget:first-child{padding-top:0;margin-top:0;border-top:0}.settings-form[data-v-2eb13ad3] .uim-group-label{display:block;margin-bottom:7px;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:650;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim)}.settings-form__empty[data-v-2eb13ad3]{margin:0;padding:12px 0;font-size:var(--text-sm);color:var(--color-dim)}\n";})();
import { inject as Tt, watchEffect as Ci, onScopeDispose as ca, ref as dr, computed as T, watch as ds, toValue as Qe, defineComponent as ne, createBlock as X, createCommentVNode as oe, openBlock as S, resolveDynamicComponent as Ea, mergeProps as ha, createElementBlock as D, createElementVNode as ie, createTextVNode as Va, toDisplayString as Ye, unref as ue, createVNode as hr, Fragment as St, renderList as Dt, provide as Ir, withCtx as Di, normalizeClass as Ia, mergeModels as Ri, useModel as wi, onMounted as Fi, shallowRef as Na, markRaw as xr } from "vue";
import { BasicEPackage as Pi, BasicEClass as F, BasicEAttribute as m, BasicEReference as v, getEcorePackage as as, BasicEObject as mt, BasicEFactory as bi, EContentAdapter as Ua, URI as Kr, EPackageRegistry as yr, BasicResourceSet as Mi, XMIResourceFactory as Vi, registerEcorePackage as Ui } from "@emfts/core";
import { VariableWrapper as zr } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DButton as Bi, DSelect as va, DInput as Sr, DCheckbox as La, DColorInput as Gi } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { identifier as Wi } from "org.eclipse.daanse.board.app.lib.api.variable";
var Yi = Object.defineProperty, $i = (s, e, t) => e in s ? Yi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ur = (s, e, t) => $i(s, typeof e != "symbol" ? e + "" : e, t);
const is = class a extends Pi {
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
    const e = new F();
    e.setName("UIModel"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), a.Literals.U_I_MODEL = e;
    const t = new m();
    t.setName("name"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), a.Literals.U_I_MODEL__NAME = t;
    const r = new v();
    r.setContainment(!1), r.setName("targetClasses"), r.setLowerBound(0), r.setUpperBound(-1), e.getEStructuralFeatures().push(r), a.Literals.U_I_MODEL__TARGET_CLASSES = r;
    const i = new m();
    i.setName("priority"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), a.Literals.U_I_MODEL__PRIORITY = i;
    const u = new v();
    u.setContainment(!0), u.setName("filterExpression"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), a.Literals.U_I_MODEL__FILTER_EXPRESSION = u;
    const n = new v();
    n.setContainment(!0), n.setName("styles"), n.setLowerBound(0), n.setUpperBound(-1), e.getEStructuralFeatures().push(n), a.Literals.U_I_MODEL__STYLES = n;
    const l = new v();
    l.setContainment(!0), l.setName("templates"), l.setLowerBound(0), l.setUpperBound(-1), e.getEStructuralFeatures().push(l), a.Literals.U_I_MODEL__TEMPLATES = l;
    const h = new v();
    h.setContainment(!0), h.setName("components"), h.setLowerBound(1), h.setUpperBound(-1), e.getEStructuralFeatures().push(h), a.Literals.U_I_MODEL__COMPONENTS = h;
    const c = new F();
    c.setName("Component"), c.setAbstract(!0), c.setInterface(!1), this.getEClassifiers().push(c), c.setEPackage(this), a.Literals.COMPONENT = c;
    const E = new m();
    E.setName("name"), E.setLowerBound(1), E.setUpperBound(1), c.getEStructuralFeatures().push(E), a.Literals.COMPONENT__NAME = E;
    const g = new m();
    g.setName("group"), g.setLowerBound(0), g.setUpperBound(1), c.getEStructuralFeatures().push(g), a.Literals.COMPONENT__GROUP = g;
    const o = new v();
    o.setContainment(!1), o.setName("targetClasses"), o.setLowerBound(0), o.setUpperBound(-1), c.getEStructuralFeatures().push(o), a.Literals.COMPONENT__TARGET_CLASSES = o;
    const p = new v();
    p.setContainment(!1), p.setName("styles"), p.setLowerBound(0), p.setUpperBound(-1), c.getEStructuralFeatures().push(p), a.Literals.COMPONENT__STYLES = p;
    const B = new v();
    B.setContainment(!1), B.setName("children"), B.setLowerBound(0), B.setUpperBound(-1), c.getEStructuralFeatures().push(B), a.Literals.COMPONENT__CHILDREN = B;
    const V = new F();
    V.setName("FormView"), V.setAbstract(!1), V.setInterface(!1), this.getEClassifiers().push(V), V.setEPackage(this), a.Literals.FORM_VIEW = V;
    const f = new v();
    f.setContainment(!0), f.setName("fields"), f.setLowerBound(0), f.setUpperBound(-1), V.getEStructuralFeatures().push(f), a.Literals.FORM_VIEW__FIELDS = f;
    const N = new v();
    N.setContainment(!0), N.setName("validations"), N.setLowerBound(0), N.setUpperBound(-1), V.getEStructuralFeatures().push(N), a.Literals.FORM_VIEW__VALIDATIONS = N;
    const G = new v();
    G.setContainment(!0), G.setName("validationMappers"), G.setLowerBound(0), G.setUpperBound(-1), V.getEStructuralFeatures().push(G), a.Literals.FORM_VIEW__VALIDATION_MAPPERS = G;
    const y = new m();
    y.setName("mapperOrder"), y.setLowerBound(0), y.setUpperBound(1), V.getEStructuralFeatures().push(y), a.Literals.FORM_VIEW__MAPPER_ORDER = y;
    const M = new F();
    M.setName("TableView"), M.setAbstract(!1), M.setInterface(!1), this.getEClassifiers().push(M), M.setEPackage(this), a.Literals.TABLE_VIEW = M;
    const j = new v();
    j.setContainment(!0), j.setName("tableStyle"), j.setLowerBound(1), j.setUpperBound(1), M.getEStructuralFeatures().push(j), a.Literals.TABLE_VIEW__TABLE_STYLE = j;
    const U = new F();
    U.setName("SectionView"), U.setAbstract(!1), U.setInterface(!1), this.getEClassifiers().push(U), U.setEPackage(this), a.Literals.SECTION_VIEW = U;
    const he = new v();
    he.setContainment(!0), he.setName("sections"), he.setLowerBound(1), he.setUpperBound(-1), U.getEStructuralFeatures().push(he), a.Literals.SECTION_VIEW__SECTIONS = he;
    const H = new F();
    H.setName("TabView"), H.setAbstract(!1), H.setInterface(!1), this.getEClassifiers().push(H), H.setEPackage(this), a.Literals.TAB_VIEW = H;
    const $e = new v();
    $e.setContainment(!0), $e.setName("tabs"), $e.setLowerBound(1), $e.setUpperBound(-1), H.getEStructuralFeatures().push($e), a.Literals.TAB_VIEW__TABS = $e;
    const we = new F();
    we.setName("SummaryView"), we.setAbstract(!1), we.setInterface(!1), this.getEClassifiers().push(we), we.setEPackage(this), a.Literals.SUMMARY_VIEW = we;
    const Je = new v();
    Je.setContainment(!0), Je.setName("summaryFields"), Je.setLowerBound(1), Je.setUpperBound(-1), we.getEStructuralFeatures().push(Je), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS = Je;
    const Fe = new F();
    Fe.setName("MasterDetail"), Fe.setAbstract(!1), Fe.setInterface(!1), this.getEClassifiers().push(Fe), Fe.setEPackage(this), a.Literals.MASTER_DETAIL = Fe;
    const ke = new v();
    ke.setContainment(!0), ke.setName("master"), ke.setLowerBound(1), ke.setUpperBound(1), Fe.getEStructuralFeatures().push(ke), a.Literals.MASTER_DETAIL__MASTER = ke;
    const Ze = new v();
    Ze.setContainment(!0), Ze.setName("detail"), Ze.setLowerBound(1), Ze.setUpperBound(1), Fe.getEStructuralFeatures().push(Ze), a.Literals.MASTER_DETAIL__DETAIL = Ze;
    const q = new F();
    q.setName("WidgetComponent"), q.setAbstract(!0), q.setInterface(!1), this.getEClassifiers().push(q), q.setEPackage(this), a.Literals.WIDGET_COMPONENT = q;
    const ge = new v();
    ge.setContainment(!1), ge.setName("feature"), ge.setLowerBound(0), ge.setUpperBound(1), q.getEStructuralFeatures().push(ge), a.Literals.WIDGET_COMPONENT__FEATURE = ge;
    const le = new m();
    le.setName("label"), le.setLowerBound(0), le.setUpperBound(1), q.getEStructuralFeatures().push(le), a.Literals.WIDGET_COMPONENT__LABEL = le;
    const et = new m();
    et.setName("placeholder"), et.setLowerBound(0), et.setUpperBound(1), q.getEStructuralFeatures().push(et), a.Literals.WIDGET_COMPONENT__PLACEHOLDER = et;
    const d = new m();
    d.setName("readOnly"), d.setLowerBound(0), d.setUpperBound(1), q.getEStructuralFeatures().push(d), a.Literals.WIDGET_COMPONENT__READ_ONLY = d;
    const L = new m();
    L.setName("required"), L.setLowerBound(0), L.setUpperBound(1), q.getEStructuralFeatures().push(L), a.Literals.WIDGET_COMPONENT__REQUIRED = L;
    const A = new v();
    A.setContainment(!0), A.setName("visibilityCondition"), A.setLowerBound(0), A.setUpperBound(1), q.getEStructuralFeatures().push(A), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION = A;
    const ee = new v();
    ee.setContainment(!0), ee.setName("validations"), ee.setLowerBound(0), ee.setUpperBound(-1), q.getEStructuralFeatures().push(ee), a.Literals.WIDGET_COMPONENT__VALIDATIONS = ee;
    const ae = new v();
    ae.setContainment(!0), ae.setName("validationMappers"), ae.setLowerBound(0), ae.setUpperBound(-1), q.getEStructuralFeatures().push(ae), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS = ae;
    const tt = new v();
    tt.setContainment(!0), tt.setName("bindings"), tt.setLowerBound(0), tt.setUpperBound(-1), q.getEStructuralFeatures().push(tt), a.Literals.WIDGET_COMPONENT__BINDINGS = tt;
    const Ce = new F();
    Ce.setName("PropertyBinding"), Ce.setAbstract(!1), Ce.setInterface(!1), this.getEClassifiers().push(Ce), Ce.setEPackage(this), a.Literals.PROPERTY_BINDING = Ce;
    const xe = new m();
    xe.setName("property"), xe.setLowerBound(1), xe.setUpperBound(1), Ce.getEStructuralFeatures().push(xe), a.Literals.PROPERTY_BINDING__PROPERTY = xe;
    const Ft = new v();
    Ft.setContainment(!0), Ft.setName("expression"), Ft.setLowerBound(1), Ft.setUpperBound(1), Ce.getEStructuralFeatures().push(Ft), a.Literals.PROPERTY_BINDING__EXPRESSION = Ft;
    const Xe = new F();
    Xe.setName("InputWidget"), Xe.setAbstract(!1), Xe.setInterface(!1), this.getEClassifiers().push(Xe), Xe.setEPackage(this), a.Literals.INPUT_WIDGET = Xe;
    const ps = new m();
    ps.setName("maxLength"), ps.setLowerBound(0), ps.setUpperBound(1), Xe.getEStructuralFeatures().push(ps), a.Literals.INPUT_WIDGET__MAX_LENGTH = ps;
    const fs = new m();
    fs.setName("value"), fs.setLowerBound(0), fs.setUpperBound(1), Xe.getEStructuralFeatures().push(fs), a.Literals.INPUT_WIDGET__VALUE = fs;
    const Ts = new m();
    Ts.setName("password"), Ts.setLowerBound(0), Ts.setUpperBound(1), Xe.getEStructuralFeatures().push(Ts), a.Literals.INPUT_WIDGET__PASSWORD = Ts;
    const He = new F();
    He.setName("TextAreaWidget"), He.setAbstract(!1), He.setInterface(!1), this.getEClassifiers().push(He), He.setEPackage(this), a.Literals.TEXT_AREA_WIDGET = He;
    const Ss = new m();
    Ss.setName("rows"), Ss.setLowerBound(0), Ss.setUpperBound(1), He.getEStructuralFeatures().push(Ss), a.Literals.TEXT_AREA_WIDGET__ROWS = Ss;
    const ms = new m();
    ms.setName("maxLength"), ms.setLowerBound(0), ms.setUpperBound(1), He.getEStructuralFeatures().push(ms), a.Literals.TEXT_AREA_WIDGET__MAX_LENGTH = ms;
    const Is = new m();
    Is.setName("value"), Is.setLowerBound(0), Is.setUpperBound(1), He.getEStructuralFeatures().push(Is), a.Literals.TEXT_AREA_WIDGET__VALUE = Is;
    const Pe = new F();
    Pe.setName("NumberWidget"), Pe.setAbstract(!1), Pe.setInterface(!1), this.getEClassifiers().push(Pe), Pe.setEPackage(this), a.Literals.NUMBER_WIDGET = Pe;
    const Ns = new m();
    Ns.setName("min"), Ns.setLowerBound(0), Ns.setUpperBound(1), Pe.getEStructuralFeatures().push(Ns), a.Literals.NUMBER_WIDGET__MIN = Ns;
    const vs = new m();
    vs.setName("max"), vs.setLowerBound(0), vs.setUpperBound(1), Pe.getEStructuralFeatures().push(vs), a.Literals.NUMBER_WIDGET__MAX = vs;
    const Ls = new m();
    Ls.setName("step"), Ls.setLowerBound(0), Ls.setUpperBound(1), Pe.getEStructuralFeatures().push(Ls), a.Literals.NUMBER_WIDGET__STEP = Ls;
    const _s = new m();
    _s.setName("value"), _s.setLowerBound(0), _s.setUpperBound(1), Pe.getEStructuralFeatures().push(_s), a.Literals.NUMBER_WIDGET__VALUE = _s;
    const st = new F();
    st.setName("CheckboxWidget"), st.setAbstract(!1), st.setInterface(!1), this.getEClassifiers().push(st), st.setEPackage(this), a.Literals.CHECKBOX_WIDGET = st;
    const Os = new m();
    Os.setName("asToggle"), Os.setLowerBound(0), Os.setUpperBound(1), st.getEStructuralFeatures().push(Os), a.Literals.CHECKBOX_WIDGET__AS_TOGGLE = Os;
    const As = new m();
    As.setName("value"), As.setLowerBound(0), As.setUpperBound(1), st.getEStructuralFeatures().push(As), a.Literals.CHECKBOX_WIDGET__VALUE = As;
    const be = new F();
    be.setName("DateWidget"), be.setAbstract(!1), be.setInterface(!1), this.getEClassifiers().push(be), be.setEPackage(this), a.Literals.DATE_WIDGET = be;
    const ys = new m();
    ys.setName("withTime"), ys.setLowerBound(0), ys.setUpperBound(1), be.getEStructuralFeatures().push(ys), a.Literals.DATE_WIDGET__WITH_TIME = ys;
    const Cs = new m();
    Cs.setName("format"), Cs.setLowerBound(0), Cs.setUpperBound(1), be.getEStructuralFeatures().push(Cs), a.Literals.DATE_WIDGET__FORMAT = Cs;
    const Pt = new v();
    Pt.setContainment(!1), Pt.setName("constrains"), Pt.setLowerBound(0), Pt.setUpperBound(1), be.getEStructuralFeatures().push(Pt), a.Literals.DATE_WIDGET__CONSTRAINS = Pt;
    const Ds = new m();
    Ds.setName("value"), Ds.setLowerBound(0), Ds.setUpperBound(1), be.getEStructuralFeatures().push(Ds), a.Literals.DATE_WIDGET__VALUE = Ds;
    const je = new F();
    je.setName("ComboboxWidget"), je.setAbstract(!1), je.setInterface(!1), this.getEClassifiers().push(je), je.setEPackage(this), a.Literals.COMBOBOX_WIDGET = je;
    const bt = new v();
    bt.setContainment(!0), bt.setName("optionLabel"), bt.setLowerBound(0), bt.setUpperBound(1), je.getEStructuralFeatures().push(bt), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL = bt;
    const Rs = new m();
    Rs.setName("minSearchLength"), Rs.setLowerBound(0), Rs.setUpperBound(1), je.getEStructuralFeatures().push(Rs), a.Literals.COMBOBOX_WIDGET__MIN_SEARCH_LENGTH = Rs;
    const ws = new m();
    ws.setName("multiSelect"), ws.setLowerBound(0), ws.setUpperBound(1), je.getEStructuralFeatures().push(ws), a.Literals.COMBOBOX_WIDGET__MULTI_SELECT = ws;
    const Me = new F();
    Me.setName("SelectWidget"), Me.setAbstract(!1), Me.setInterface(!1), this.getEClassifiers().push(Me), Me.setEPackage(this), a.Literals.SELECT_WIDGET = Me;
    const Mt = new v();
    Mt.setContainment(!0), Mt.setName("optionLabel"), Mt.setLowerBound(0), Mt.setUpperBound(1), Me.getEStructuralFeatures().push(Mt), a.Literals.SELECT_WIDGET__OPTION_LABEL = Mt;
    const Fs = new m();
    Fs.setName("multiSelect"), Fs.setLowerBound(0), Fs.setUpperBound(1), Me.getEStructuralFeatures().push(Fs), a.Literals.SELECT_WIDGET__MULTI_SELECT = Fs;
    const Ps = new m();
    Ps.setName("asButtonGroup"), Ps.setLowerBound(0), Ps.setUpperBound(1), Me.getEStructuralFeatures().push(Ps), a.Literals.SELECT_WIDGET__AS_BUTTON_GROUP = Ps;
    const bs = new m();
    bs.setName("values"), bs.setLowerBound(0), bs.setUpperBound(-1), Me.getEStructuralFeatures().push(bs), a.Literals.SELECT_WIDGET__VALUES = bs;
    const _e = new F();
    _e.setName("AllFeatures"), _e.setAbstract(!1), _e.setInterface(!1), this.getEClassifiers().push(_e), _e.setEPackage(this), a.Literals.ALL_FEATURES = _e;
    const Vt = new v();
    Vt.setContainment(!1), Vt.setName("with"), Vt.setLowerBound(0), Vt.setUpperBound(-1), _e.getEStructuralFeatures().push(Vt), a.Literals.ALL_FEATURES__WITH = Vt;
    const Ut = new v();
    Ut.setContainment(!1), Ut.setName("eType"), Ut.setLowerBound(0), Ut.setUpperBound(-1), _e.getEStructuralFeatures().push(Ut), a.Literals.ALL_FEATURES__E_TYPE = Ut;
    const Bt = new v();
    Bt.setContainment(!0), Bt.setName("filter"), Bt.setLowerBound(0), Bt.setUpperBound(1), _e.getEStructuralFeatures().push(Bt), a.Literals.ALL_FEATURES__FILTER = Bt;
    const Gt = new v();
    Gt.setContainment(!1), Gt.setName("template"), Gt.setLowerBound(0), Gt.setUpperBound(1), _e.getEStructuralFeatures().push(Gt), a.Literals.ALL_FEATURES__TEMPLATE = Gt;
    const Wt = new v();
    Wt.setContainment(!0), Wt.setName("cases"), Wt.setLowerBound(0), Wt.setUpperBound(-1), _e.getEStructuralFeatures().push(Wt), a.Literals.ALL_FEATURES__CASES = Wt;
    const Ms = new m();
    Ms.setName("priority"), Ms.setLowerBound(0), Ms.setUpperBound(1), _e.getEStructuralFeatures().push(Ms), a.Literals.ALL_FEATURES__PRIORITY = Ms;
    const rt = new F();
    rt.setName("TemplateCase"), rt.setAbstract(!1), rt.setInterface(!1), this.getEClassifiers().push(rt), rt.setEPackage(this), a.Literals.TEMPLATE_CASE = rt;
    const Yt = new v();
    Yt.setContainment(!0), Yt.setName("when"), Yt.setLowerBound(0), Yt.setUpperBound(1), rt.getEStructuralFeatures().push(Yt), a.Literals.TEMPLATE_CASE__WHEN = Yt;
    const $t = new v();
    $t.setContainment(!1), $t.setName("widget"), $t.setLowerBound(1), $t.setUpperBound(1), rt.getEStructuralFeatures().push($t), a.Literals.TEMPLATE_CASE__WIDGET = $t;
    const at = new F();
    at.setName("GroupWidget"), at.setAbstract(!1), at.setInterface(!1), this.getEClassifiers().push(at), at.setEPackage(this), a.Literals.GROUP_WIDGET = at;
    const kt = new v();
    kt.setContainment(!0), kt.setName("fields"), kt.setLowerBound(0), kt.setUpperBound(-1), at.getEStructuralFeatures().push(kt), a.Literals.GROUP_WIDGET__FIELDS = kt;
    const Vs = new m();
    Vs.setName("layout"), Vs.setLowerBound(0), Vs.setUpperBound(1), at.getEStructuralFeatures().push(Vs), a.Literals.GROUP_WIDGET__LAYOUT = Vs;
    const qe = new F();
    qe.setName("Conditional"), qe.setAbstract(!1), qe.setInterface(!1), this.getEClassifiers().push(qe), qe.setEPackage(this), a.Literals.CONDITIONAL = qe;
    const xt = new v();
    xt.setContainment(!0), xt.setName("condition"), xt.setLowerBound(1), xt.setUpperBound(1), qe.getEStructuralFeatures().push(xt), a.Literals.CONDITIONAL__CONDITION = xt;
    const Xt = new v();
    Xt.setContainment(!0), Xt.setName("then"), Xt.setLowerBound(0), Xt.setUpperBound(-1), qe.getEStructuralFeatures().push(Xt), a.Literals.CONDITIONAL__THEN = Xt;
    const Ht = new v();
    Ht.setContainment(!0), Ht.setName("else"), Ht.setLowerBound(0), Ht.setUpperBound(-1), qe.getEStructuralFeatures().push(Ht), a.Literals.CONDITIONAL__ELSE = Ht;
    const Ke = new F();
    Ke.setName("ForEach"), Ke.setAbstract(!1), Ke.setInterface(!1), this.getEClassifiers().push(Ke), Ke.setEPackage(this), a.Literals.FOR_EACH = Ke;
    const jt = new v();
    jt.setContainment(!0), jt.setName("items"), jt.setLowerBound(1), jt.setUpperBound(1), Ke.getEStructuralFeatures().push(jt), a.Literals.FOR_EACH__ITEMS = jt;
    const qt = new v();
    qt.setContainment(!0), qt.setName("body"), qt.setLowerBound(0), qt.setUpperBound(-1), Ke.getEStructuralFeatures().push(qt), a.Literals.FOR_EACH__BODY = qt;
    const Us = new m();
    Us.setName("emptyText"), Us.setLowerBound(0), Us.setUpperBound(1), Ke.getEStructuralFeatures().push(Us), a.Literals.FOR_EACH__EMPTY_TEXT = Us;
    const it = new F();
    it.setName("ReferenceLinkWidget"), it.setAbstract(!1), it.setInterface(!1), this.getEClassifiers().push(it), it.setEPackage(this), a.Literals.REFERENCE_LINK_WIDGET = it;
    const Kt = new v();
    Kt.setContainment(!0), Kt.setName("displayExpression"), Kt.setLowerBound(0), Kt.setUpperBound(1), it.getEStructuralFeatures().push(Kt), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION = Kt;
    const Bs = new m();
    Bs.setName("targetRoute"), Bs.setLowerBound(0), Bs.setUpperBound(1), it.getEStructuralFeatures().push(Bs), a.Literals.REFERENCE_LINK_WIDGET__TARGET_ROUTE = Bs;
    const Ve = new F();
    Ve.setName("UIModelOverlay"), Ve.setAbstract(!1), Ve.setInterface(!1), this.getEClassifiers().push(Ve), Ve.setEPackage(this), a.Literals.U_I_MODEL_OVERLAY = Ve;
    const Gs = new m();
    Gs.setName("name"), Gs.setLowerBound(0), Gs.setUpperBound(1), Ve.getEStructuralFeatures().push(Gs), a.Literals.U_I_MODEL_OVERLAY__NAME = Gs;
    const Ws = new m();
    Ws.setName("priority"), Ws.setLowerBound(0), Ws.setUpperBound(1), Ve.getEStructuralFeatures().push(Ws), a.Literals.U_I_MODEL_OVERLAY__PRIORITY = Ws;
    const zt = new v();
    zt.setContainment(!0), zt.setName("templates"), zt.setLowerBound(0), zt.setUpperBound(-1), Ve.getEStructuralFeatures().push(zt), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES = zt;
    const Qt = new v();
    Qt.setContainment(!0), Qt.setName("cases"), Qt.setLowerBound(0), Qt.setUpperBound(-1), Ve.getEStructuralFeatures().push(Qt), a.Literals.U_I_MODEL_OVERLAY__CASES = Qt;
    const ut = new F();
    ut.setName("Style"), ut.setAbstract(!0), ut.setInterface(!0), this.getEClassifiers().push(ut), ut.setEPackage(this), a.Literals.STYLE = ut;
    const Ys = new m();
    Ys.setName("name"), Ys.setLowerBound(0), Ys.setUpperBound(1), ut.getEStructuralFeatures().push(Ys), a.Literals.STYLE__NAME = Ys;
    const $s = new m();
    $s.setName("group"), $s.setLowerBound(0), $s.setUpperBound(1), ut.getEStructuralFeatures().push($s), a.Literals.STYLE__GROUP = $s;
    const Ue = new F();
    Ue.setName("BaseStyle"), Ue.setAbstract(!0), Ue.setInterface(!1), this.getEClassifiers().push(Ue), Ue.setEPackage(this), a.Literals.BASE_STYLE = Ue;
    const Jt = new v();
    Jt.setContainment(!1), Jt.setName("extends"), Jt.setLowerBound(0), Jt.setUpperBound(1), Ue.getEStructuralFeatures().push(Jt), a.Literals.BASE_STYLE__EXTENDS = Jt;
    const ks = new m();
    ks.setName("css"), ks.setLowerBound(0), ks.setUpperBound(1), Ue.getEStructuralFeatures().push(ks), a.Literals.BASE_STYLE__CSS = ks;
    const xs = new m();
    xs.setName("vueComponent"), xs.setLowerBound(0), xs.setUpperBound(1), Ue.getEStructuralFeatures().push(xs), a.Literals.BASE_STYLE__VUE_COMPONENT = xs;
    const Zt = new v();
    Zt.setContainment(!0), Zt.setName("visibilityCondition"), Zt.setLowerBound(0), Zt.setUpperBound(1), Ue.getEStructuralFeatures().push(Zt), a.Literals.BASE_STYLE__VISIBILITY_CONDITION = Zt;
    const nt = new F();
    nt.setName("LayoutStyle"), nt.setAbstract(!1), nt.setInterface(!1), this.getEClassifiers().push(nt), nt.setEPackage(this), a.Literals.LAYOUT_STYLE = nt;
    const Xs = new m();
    Xs.setName("layout"), Xs.setLowerBound(0), Xs.setUpperBound(1), nt.getEStructuralFeatures().push(Xs), a.Literals.LAYOUT_STYLE__LAYOUT = Xs;
    const Hs = new m();
    Hs.setName("order"), Hs.setLowerBound(0), Hs.setUpperBound(1), nt.getEStructuralFeatures().push(Hs), a.Literals.LAYOUT_STYLE__ORDER = Hs;
    const De = new F();
    De.setName("WidgetStyle"), De.setAbstract(!1), De.setInterface(!1), this.getEClassifiers().push(De), De.setEPackage(this), a.Literals.WIDGET_STYLE = De;
    const es = new v();
    es.setContainment(!1), es.setName("feature"), es.setLowerBound(0), es.setUpperBound(1), De.getEStructuralFeatures().push(es), a.Literals.WIDGET_STYLE__FEATURE = es;
    const js = new m();
    js.setName("widgetType"), js.setLowerBound(0), js.setUpperBound(1), De.getEStructuralFeatures().push(js), a.Literals.WIDGET_STYLE__WIDGET_TYPE = js;
    const qs = new m();
    qs.setName("label"), qs.setLowerBound(0), qs.setUpperBound(1), De.getEStructuralFeatures().push(qs), a.Literals.WIDGET_STYLE__LABEL = qs;
    const Ks = new m();
    Ks.setName("readOnly"), Ks.setLowerBound(0), Ks.setUpperBound(1), De.getEStructuralFeatures().push(Ks), a.Literals.WIDGET_STYLE__READ_ONLY = Ks;
    const zs = new m();
    zs.setName("order"), zs.setLowerBound(0), zs.setUpperBound(1), De.getEStructuralFeatures().push(zs), a.Literals.WIDGET_STYLE__ORDER = zs;
    const It = new F();
    It.setName("TableStyle"), It.setAbstract(!1), It.setInterface(!1), this.getEClassifiers().push(It), It.setEPackage(this), a.Literals.TABLE_STYLE = It;
    const ts = new v();
    ts.setContainment(!0), ts.setName("columns"), ts.setLowerBound(1), ts.setUpperBound(-1), It.getEStructuralFeatures().push(ts), a.Literals.TABLE_STYLE__COLUMNS = ts;
    const lt = new F();
    lt.setName("Expression"), lt.setAbstract(!1), lt.setInterface(!1), this.getEClassifiers().push(lt), lt.setEPackage(this), a.Literals.EXPRESSION = lt;
    const Qs = new m();
    Qs.setName("language"), Qs.setLowerBound(1), Qs.setUpperBound(1), lt.getEStructuralFeatures().push(Qs), a.Literals.EXPRESSION__LANGUAGE = Qs;
    const Js = new m();
    Js.setName("body"), Js.setLowerBound(1), Js.setUpperBound(1), lt.getEStructuralFeatures().push(Js), a.Literals.EXPRESSION__BODY = Js;
    const ot = new F();
    ot.setName("ValidationExpression"), ot.setAbstract(!1), ot.setInterface(!1), this.getEClassifiers().push(ot), ot.setEPackage(this), a.Literals.VALIDATION_EXPRESSION = ot;
    const Zs = new m();
    Zs.setName("defaultMessage"), Zs.setLowerBound(0), Zs.setUpperBound(1), ot.getEStructuralFeatures().push(Zs), a.Literals.VALIDATION_EXPRESSION__DEFAULT_MESSAGE = Zs;
    const er = new m();
    er.setName("severity"), er.setLowerBound(0), er.setUpperBound(1), ot.getEStructuralFeatures().push(er), a.Literals.VALIDATION_EXPRESSION__SEVERITY = er;
    const de = new F();
    de.setName("ValidationMessageMapper"), de.setAbstract(!1), de.setInterface(!1), this.getEClassifiers().push(de), de.setEPackage(this), a.Literals.VALIDATION_MESSAGE_MAPPER = de;
    const tr = new m();
    tr.setName("order"), tr.setLowerBound(0), tr.setUpperBound(1), de.getEStructuralFeatures().push(tr), a.Literals.VALIDATION_MESSAGE_MAPPER__ORDER = tr;
    const sr = new m();
    sr.setName("matchCode"), sr.setLowerBound(0), sr.setUpperBound(1), de.getEStructuralFeatures().push(sr), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_CODE = sr;
    const rr = new m();
    rr.setName("matchSeverity"), rr.setLowerBound(0), rr.setUpperBound(1), de.getEStructuralFeatures().push(rr), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_SEVERITY = rr;
    const ss = new v();
    ss.setContainment(!0), ss.setName("matchExpression"), ss.setLowerBound(0), ss.setUpperBound(1), de.getEStructuralFeatures().push(ss), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION = ss;
    const ar = new m();
    ar.setName("mappedText"), ar.setLowerBound(0), ar.setUpperBound(1), de.getEStructuralFeatures().push(ar), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT = ar;
    const rs = new v();
    rs.setContainment(!0), rs.setName("mappedTextExpression"), rs.setLowerBound(0), rs.setUpperBound(1), de.getEStructuralFeatures().push(rs), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION = rs;
    const ir = new m();
    ir.setName("mappedSeverity"), ir.setLowerBound(0), ir.setUpperBound(1), de.getEStructuralFeatures().push(ir), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_SEVERITY = ir, a.Literals.FORM_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.TABLE_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.SECTION_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.TAB_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.SUMMARY_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.MASTER_DETAIL.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.WIDGET_COMPONENT.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.INPUT_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.TEXT_AREA_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.NUMBER_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.CHECKBOX_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.DATE_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.COMBOBOX_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.SELECT_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.ALL_FEATURES.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.GROUP_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.FOR_EACH.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.REFERENCE_LINK_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.BASE_STYLE.getESuperTypes().push(a.Literals.STYLE), a.Literals.LAYOUT_STYLE.getESuperTypes().push(a.Literals.BASE_STYLE), a.Literals.WIDGET_STYLE.getESuperTypes().push(a.Literals.BASE_STYLE), a.Literals.TABLE_STYLE.getESuperTypes().push(a.Literals.WIDGET_STYLE), a.Literals.VALIDATION_EXPRESSION.getESuperTypes().push(a.Literals.EXPRESSION), a.Literals.U_I_MODEL__TARGET_CLASSES.setEType(as().getEClassifier("EClass")), a.Literals.U_I_MODEL__FILTER_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.U_I_MODEL__STYLES.setEType(a.Literals.BASE_STYLE), a.Literals.U_I_MODEL__TEMPLATES.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.U_I_MODEL__COMPONENTS.setEType(a.Literals.COMPONENT), a.Literals.COMPONENT__TARGET_CLASSES.setEType(as().getEClassifier("EClass")), a.Literals.COMPONENT__STYLES.setEType(a.Literals.BASE_STYLE), a.Literals.COMPONENT__CHILDREN.setEType(a.Literals.COMPONENT), a.Literals.FORM_VIEW__FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.FORM_VIEW__VALIDATIONS.setEType(a.Literals.VALIDATION_EXPRESSION), a.Literals.FORM_VIEW__VALIDATION_MAPPERS.setEType(a.Literals.VALIDATION_MESSAGE_MAPPER), a.Literals.TABLE_VIEW__TABLE_STYLE.setEType(a.Literals.TABLE_STYLE), a.Literals.SECTION_VIEW__SECTIONS.setEType(a.Literals.FORM_VIEW), a.Literals.TAB_VIEW__TABS.setEType(a.Literals.COMPONENT), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.MASTER_DETAIL__MASTER.setEType(a.Literals.TABLE_VIEW), a.Literals.MASTER_DETAIL__DETAIL.setEType(a.Literals.COMPONENT), a.Literals.WIDGET_COMPONENT__FEATURE.setEType(as().getEClassifier("EStructuralFeature")), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.WIDGET_COMPONENT__VALIDATIONS.setEType(a.Literals.VALIDATION_EXPRESSION), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS.setEType(a.Literals.VALIDATION_MESSAGE_MAPPER), a.Literals.WIDGET_COMPONENT__BINDINGS.setEType(a.Literals.PROPERTY_BINDING), a.Literals.PROPERTY_BINDING__EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.DATE_WIDGET__CONSTRAINS.setEType(a.Literals.EXPRESSION), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL.setEType(a.Literals.EXPRESSION), a.Literals.SELECT_WIDGET__OPTION_LABEL.setEType(a.Literals.EXPRESSION), a.Literals.ALL_FEATURES__WITH.setEType(as().getEClassifier("EStructuralFeature")), a.Literals.ALL_FEATURES__E_TYPE.setEType(as().getEClassifier("EClassifier")), a.Literals.ALL_FEATURES__FILTER.setEType(a.Literals.EXPRESSION), a.Literals.ALL_FEATURES__TEMPLATE.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.ALL_FEATURES__CASES.setEType(a.Literals.TEMPLATE_CASE), a.Literals.TEMPLATE_CASE__WHEN.setEType(a.Literals.EXPRESSION), a.Literals.TEMPLATE_CASE__WIDGET.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.GROUP_WIDGET__FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL__CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.CONDITIONAL__THEN.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL__ELSE.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.FOR_EACH__ITEMS.setEType(a.Literals.EXPRESSION), a.Literals.FOR_EACH__BODY.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.U_I_MODEL_OVERLAY__CASES.setEType(a.Literals.TEMPLATE_CASE), a.Literals.BASE_STYLE__EXTENDS.setEType(a.Literals.BASE_STYLE), a.Literals.BASE_STYLE__VISIBILITY_CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.WIDGET_STYLE__FEATURE.setEType(as().getEClassifier("EStructuralFeature")), a.Literals.TABLE_STYLE__COLUMNS.setEType(a.Literals.WIDGET_STYLE), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION.setEType(a.Literals.EXPRESSION);
  }
};
ur(is, "eNAME", "uimodel"), ur(is, "eNS_URI", "http://uimodel/1.0"), ur(is, "eNS_PREFIX", "uimodel"), // Singleton instance
ur(is, "_instance"), /**
* Literals for quick access to metaclasses and features
*/
ur(is, "Literals", {
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
let R = is;
var ki = Object.defineProperty, xi = (s, e, t) => e in s ? ki(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ce = (s, e, t) => xi(s, typeof e != "symbol" ? e + "" : e, t);
const ct = class _ extends mt {
  constructor() {
    super(...arguments), ce(this, "_name"), ce(this, "_targetClasses", []), ce(this, "_priority", 0), ce(this, "_filterExpression"), ce(this, "_styles", []), ce(this, "_templates", []), ce(this, "_components", []);
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
ce(ct, "NAME", 0), ce(ct, "TARGET_CLASSES", 1), ce(ct, "PRIORITY", 2), ce(ct, "FILTER_EXPRESSION", 3), ce(ct, "STYLES", 4), ce(ct, "TEMPLATES", 5), ce(ct, "COMPONENTS", 6);
let Xi = ct;
const Xr = {
  FIELD_THEN_FORM: "FIELD_THEN_FORM"
};
var Hi = Object.defineProperty, ji = (s, e, t) => e in s ? Hi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ge = (s, e, t) => ji(s, typeof e != "symbol" ? e + "" : e, t);
const us = class P extends mt {
  constructor() {
    super(...arguments), Ge(this, "_name", ""), Ge(this, "_group"), Ge(this, "_targetClasses", []), Ge(this, "_styles", []), Ge(this, "_children", []);
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
      getFeature: () => this.eClass().getEStructuralFeature(P.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(P.GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.GROUP,
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
      getFeature: () => this.eClass().getEStructuralFeature(P.TARGET_CLASSES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.TARGET_CLASSES,
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
      getFeature: () => this.eClass().getEStructuralFeature(P.STYLES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.STYLES,
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
      getFeature: () => this.eClass().getEStructuralFeature(P.CHILDREN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.CHILDREN,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case P.NAME:
        return this.name;
      case P.GROUP:
        return this.group;
      case P.TARGET_CLASSES:
        return this.targetClasses;
      case P.STYLES:
        return this.styles;
      case P.CHILDREN:
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
      case P.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case P.GROUP:
        this.group = t, super.eSet(e, t);
        break;
      case P.TARGET_CLASSES:
        this.targetClasses = t, super.eSet(e, t);
        break;
      case P.STYLES:
        this.styles = t, super.eSet(e, t);
        break;
      case P.CHILDREN:
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
      case P.NAME:
        return this._name !== "";
      case P.GROUP:
        return this._group !== void 0;
      case P.TARGET_CLASSES:
        return this._targetClasses !== void 0 && this._targetClasses.length > 0;
      case P.STYLES:
        return this._styles !== void 0 && this._styles.length > 0;
      case P.CHILDREN:
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
      case P.NAME:
        this._name = "";
        return;
      case P.GROUP:
        this._group = void 0;
        return;
      case P.TARGET_CLASSES:
        this._targetClasses = [];
        return;
      case P.STYLES:
        this._styles = [];
        return;
      case P.CHILDREN:
        this._children = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ge(us, "NAME", 0), Ge(us, "GROUP", 1), Ge(us, "TARGET_CLASSES", 2), Ge(us, "STYLES", 3), Ge(us, "CHILDREN", 4);
let Rt = us;
var qi = Object.defineProperty, Ki = (s, e, t) => e in s ? qi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ht = (s, e, t) => Ki(s, typeof e != "symbol" ? e + "" : e, t);
const nr = class W extends Rt {
  constructor() {
    super(...arguments), ht(this, "_fields", []), ht(this, "_validations", []), ht(this, "_validationMappers", []), ht(this, "_mapperOrder", Xr.FIELD_THEN_FORM);
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
        return this._mapperOrder !== Xr.FIELD_THEN_FORM;
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
        this._mapperOrder = Xr.FIELD_THEN_FORM;
        return;
      default:
        super.eUnset(e);
    }
  }
};
ht(nr, "FIELDS", 5), ht(nr, "VALIDATIONS", 6), ht(nr, "VALIDATION_MAPPERS", 7), ht(nr, "MAPPER_ORDER", 8);
let zi = nr;
var Qi = Object.defineProperty, Ji = (s, e, t) => e in s ? Qi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ba = (s, e, t) => Ji(s, typeof e != "symbol" ? e + "" : e, t);
const Ga = class Nt extends Rt {
  constructor() {
    super(...arguments), Ba(this, "_tableStyle");
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
      getFeature: () => this.eClass().getEStructuralFeature(Nt.TABLE_STYLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Nt.TABLE_STYLE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Nt.TABLE_STYLE:
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
      case Nt.TABLE_STYLE:
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
      case Nt.TABLE_STYLE:
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
      case Nt.TABLE_STYLE:
        this._tableStyle = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ba(Ga, "TABLE_STYLE", 5);
let Zi = Ga;
var eu = Object.defineProperty, tu = (s, e, t) => e in s ? eu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Wa = (s, e, t) => tu(s, typeof e != "symbol" ? e + "" : e, t);
const Ya = class vt extends Rt {
  constructor() {
    super(...arguments), Wa(this, "_sections", []);
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
      getFeature: () => this.eClass().getEStructuralFeature(vt.SECTIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => vt.SECTIONS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case vt.SECTIONS:
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
      case vt.SECTIONS:
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
      case vt.SECTIONS:
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
      case vt.SECTIONS:
        this._sections = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Wa(Ya, "SECTIONS", 5);
let su = Ya;
var ru = Object.defineProperty, au = (s, e, t) => e in s ? ru(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, $a = (s, e, t) => au(s, typeof e != "symbol" ? e + "" : e, t);
const ka = class Lt extends Rt {
  constructor() {
    super(...arguments), $a(this, "_tabs", []);
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
      getFeature: () => this.eClass().getEStructuralFeature(Lt.TABS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Lt.TABS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Lt.TABS:
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
      case Lt.TABS:
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
      case Lt.TABS:
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
      case Lt.TABS:
        this._tabs = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
$a(ka, "TABS", 5);
let iu = ka;
var uu = Object.defineProperty, nu = (s, e, t) => e in s ? uu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, xa = (s, e, t) => nu(s, typeof e != "symbol" ? e + "" : e, t);
const Xa = class _t extends Rt {
  constructor() {
    super(...arguments), xa(this, "_summaryFields", []);
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
      getFeature: () => this.eClass().getEStructuralFeature(_t.SUMMARY_FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => _t.SUMMARY_FIELDS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case _t.SUMMARY_FIELDS:
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
      case _t.SUMMARY_FIELDS:
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
      case _t.SUMMARY_FIELDS:
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
      case _t.SUMMARY_FIELDS:
        this._summaryFields = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
xa(Xa, "SUMMARY_FIELDS", 5);
let lu = Xa;
var ou = Object.defineProperty, cu = (s, e, t) => e in s ? ou(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Cr = (s, e, t) => cu(s, typeof e != "symbol" ? e + "" : e, t);
const Qr = class pe extends Rt {
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
Cr(Qr, "MASTER", 5), Cr(Qr, "DETAIL", 6);
let Eu = Qr;
var hu = Object.defineProperty, gu = (s, e, t) => e in s ? hu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Dr = (s, e, t) => gu(s, typeof e != "symbol" ? e + "" : e, t);
const Jr = class fe extends mt {
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
let du = Jr;
var pu = Object.defineProperty, fu = (s, e, t) => e in s ? pu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, te = (s, e, t) => fu(s, typeof e != "symbol" ? e + "" : e, t);
const Be = class I extends Rt {
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
      getFeature: () => this.eClass().getEStructuralFeature(I.FEATURE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.FEATURE,
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
      getFeature: () => this.eClass().getEStructuralFeature(I.LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(I.PLACEHOLDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.PLACEHOLDER,
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
      getFeature: () => this.eClass().getEStructuralFeature(I.READ_ONLY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.READ_ONLY,
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
      getFeature: () => this.eClass().getEStructuralFeature(I.REQUIRED),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.REQUIRED,
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
      getFeature: () => this.eClass().getEStructuralFeature(I.VISIBILITY_CONDITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.VISIBILITY_CONDITION,
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
      getFeature: () => this.eClass().getEStructuralFeature(I.VALIDATIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.VALIDATIONS,
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
      getFeature: () => this.eClass().getEStructuralFeature(I.VALIDATION_MAPPERS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.VALIDATION_MAPPERS,
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
      getFeature: () => this.eClass().getEStructuralFeature(I.BINDINGS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.BINDINGS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case I.FEATURE:
        return this.feature;
      case I.LABEL:
        return this.label;
      case I.PLACEHOLDER:
        return this.placeholder;
      case I.READ_ONLY:
        return this.readOnly;
      case I.REQUIRED:
        return this.required;
      case I.VISIBILITY_CONDITION:
        return this.visibilityCondition;
      case I.VALIDATIONS:
        return this.validations;
      case I.VALIDATION_MAPPERS:
        return this.validationMappers;
      case I.BINDINGS:
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
      case I.FEATURE:
        this.feature = t, super.eSet(e, t);
        break;
      case I.LABEL:
        this.label = t, super.eSet(e, t);
        break;
      case I.PLACEHOLDER:
        this.placeholder = t, super.eSet(e, t);
        break;
      case I.READ_ONLY:
        this.readOnly = t, super.eSet(e, t);
        break;
      case I.REQUIRED:
        this.required = t, super.eSet(e, t);
        break;
      case I.VISIBILITY_CONDITION:
        this.visibilityCondition = t, super.eSet(e, t);
        break;
      case I.VALIDATIONS:
        this.validations = t, super.eSet(e, t);
        break;
      case I.VALIDATION_MAPPERS:
        this.validationMappers = t, super.eSet(e, t);
        break;
      case I.BINDINGS:
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
      case I.FEATURE:
        return this._feature !== void 0;
      case I.LABEL:
        return this._label !== void 0;
      case I.PLACEHOLDER:
        return this._placeholder !== void 0;
      case I.READ_ONLY:
        return this._readOnly !== void 0;
      case I.REQUIRED:
        return this._required !== void 0;
      case I.VISIBILITY_CONDITION:
        return this._visibilityCondition !== void 0;
      case I.VALIDATIONS:
        return this._validations !== void 0 && this._validations.length > 0;
      case I.VALIDATION_MAPPERS:
        return this._validationMappers !== void 0 && this._validationMappers.length > 0;
      case I.BINDINGS:
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
      case I.FEATURE:
        this._feature = void 0;
        return;
      case I.LABEL:
        this._label = void 0;
        return;
      case I.PLACEHOLDER:
        this._placeholder = void 0;
        return;
      case I.READ_ONLY:
        this._readOnly = void 0;
        return;
      case I.REQUIRED:
        this._required = void 0;
        return;
      case I.VISIBILITY_CONDITION:
        this._visibilityCondition = void 0;
        return;
      case I.VALIDATIONS:
        this._validations = [];
        return;
      case I.VALIDATION_MAPPERS:
        this._validationMappers = [];
        return;
      case I.BINDINGS:
        this._bindings = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
te(Be, "FEATURE", 5), te(Be, "LABEL", 6), te(Be, "PLACEHOLDER", 7), te(Be, "READ_ONLY", 8), te(Be, "REQUIRED", 9), te(Be, "VISIBILITY_CONDITION", 10), te(Be, "VALIDATIONS", 11), te(Be, "VALIDATION_MAPPERS", 12), te(Be, "BINDINGS", 13);
let ye = Be;
var Tu = Object.defineProperty, Su = (s, e, t) => e in s ? Tu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ls = (s, e, t) => Su(s, typeof e != "symbol" ? e + "" : e, t);
const Nr = class K extends ye {
  constructor() {
    super(...arguments), ls(this, "_maxLength"), ls(this, "_value"), ls(this, "_password");
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
      getFeature: () => this.eClass().getEStructuralFeature(K.MAX_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => K.MAX_LENGTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(K.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => K.VALUE,
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
      getFeature: () => this.eClass().getEStructuralFeature(K.PASSWORD),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => K.PASSWORD,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case K.MAX_LENGTH:
        return this.maxLength;
      case K.VALUE:
        return this.value;
      case K.PASSWORD:
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
      case K.MAX_LENGTH:
        this.maxLength = t, super.eSet(e, t);
        break;
      case K.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case K.PASSWORD:
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
      case K.MAX_LENGTH:
        return this._maxLength !== void 0;
      case K.VALUE:
        return this._value !== void 0;
      case K.PASSWORD:
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
      case K.MAX_LENGTH:
        this._maxLength = void 0;
        return;
      case K.VALUE:
        this._value = void 0;
        return;
      case K.PASSWORD:
        this._password = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
ls(Nr, "MAX_LENGTH", 14), ls(Nr, "VALUE", 15), ls(Nr, "PASSWORD", 16);
let mu = Nr;
var Iu = Object.defineProperty, Nu = (s, e, t) => e in s ? Iu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, os = (s, e, t) => Nu(s, typeof e != "symbol" ? e + "" : e, t);
const vr = class z extends ye {
  constructor() {
    super(...arguments), os(this, "_rows", 4), os(this, "_maxLength"), os(this, "_value");
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
os(vr, "ROWS", 14), os(vr, "MAX_LENGTH", 15), os(vr, "VALUE", 16);
let vu = vr;
var Lu = Object.defineProperty, _u = (s, e, t) => e in s ? Lu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, gt = (s, e, t) => _u(s, typeof e != "symbol" ? e + "" : e, t);
const lr = class Y extends ye {
  constructor() {
    super(...arguments), gt(this, "_min"), gt(this, "_max"), gt(this, "_step", 1), gt(this, "_value");
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
      getFeature: () => this.eClass().getEStructuralFeature(Y.MIN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.MIN,
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
      getFeature: () => this.eClass().getEStructuralFeature(Y.MAX),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.MAX,
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
      getFeature: () => this.eClass().getEStructuralFeature(Y.STEP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.STEP,
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
      case Y.MIN:
        return this.min;
      case Y.MAX:
        return this.max;
      case Y.STEP:
        return this.step;
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
      case Y.MIN:
        this.min = t, super.eSet(e, t);
        break;
      case Y.MAX:
        this.max = t, super.eSet(e, t);
        break;
      case Y.STEP:
        this.step = t, super.eSet(e, t);
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
      case Y.MIN:
        return this._min !== void 0;
      case Y.MAX:
        return this._max !== void 0;
      case Y.STEP:
        return this._step !== 1;
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
      case Y.MIN:
        this._min = void 0;
        return;
      case Y.MAX:
        this._max = void 0;
        return;
      case Y.STEP:
        this._step = 1;
        return;
      case Y.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
gt(lr, "MIN", 14), gt(lr, "MAX", 15), gt(lr, "STEP", 16), gt(lr, "VALUE", 17);
let Ou = lr;
var Au = Object.defineProperty, yu = (s, e, t) => e in s ? Au(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Rr = (s, e, t) => yu(s, typeof e != "symbol" ? e + "" : e, t);
const Zr = class Te extends ye {
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
Rr(Zr, "AS_TOGGLE", 14), Rr(Zr, "VALUE", 15);
let Cu = Zr;
var Du = Object.defineProperty, Ru = (s, e, t) => e in s ? Du(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, dt = (s, e, t) => Ru(s, typeof e != "symbol" ? e + "" : e, t);
const or = class $ extends ye {
  constructor() {
    super(...arguments), dt(this, "_withTime"), dt(this, "_format", "DD.MM.YYYY"), dt(this, "_constrains"), dt(this, "_value");
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
      getFeature: () => this.eClass().getEStructuralFeature($.WITH_TIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.WITH_TIME,
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
      getFeature: () => this.eClass().getEStructuralFeature($.FORMAT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.FORMAT,
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
      getFeature: () => this.eClass().getEStructuralFeature($.CONSTRAINS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.CONSTRAINS,
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
      case $.WITH_TIME:
        return this.withTime;
      case $.FORMAT:
        return this.format;
      case $.CONSTRAINS:
        return this.constrains;
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
      case $.WITH_TIME:
        this.withTime = t, super.eSet(e, t);
        break;
      case $.FORMAT:
        this.format = t, super.eSet(e, t);
        break;
      case $.CONSTRAINS:
        this.constrains = t, super.eSet(e, t);
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
      case $.WITH_TIME:
        return this._withTime !== void 0;
      case $.FORMAT:
        return this._format !== "DD.MM.YYYY";
      case $.CONSTRAINS:
        return this._constrains !== void 0;
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
      case $.WITH_TIME:
        this._withTime = void 0;
        return;
      case $.FORMAT:
        this._format = "DD.MM.YYYY";
        return;
      case $.CONSTRAINS:
        this._constrains = void 0;
        return;
      case $.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
dt(or, "WITH_TIME", 14), dt(or, "FORMAT", 15), dt(or, "CONSTRAINS", 16), dt(or, "VALUE", 17);
let wu = or;
var Fu = Object.defineProperty, Pu = (s, e, t) => e in s ? Fu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, cs = (s, e, t) => Pu(s, typeof e != "symbol" ? e + "" : e, t);
const Lr = class Q extends ye {
  constructor() {
    super(...arguments), cs(this, "_optionLabel"), cs(this, "_minSearchLength", 2), cs(this, "_multiSelect");
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
      getFeature: () => this.eClass().getEStructuralFeature(Q.OPTION_LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Q.OPTION_LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(Q.MIN_SEARCH_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Q.MIN_SEARCH_LENGTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(Q.MULTI_SELECT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Q.MULTI_SELECT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Q.OPTION_LABEL:
        return this.optionLabel;
      case Q.MIN_SEARCH_LENGTH:
        return this.minSearchLength;
      case Q.MULTI_SELECT:
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
      case Q.OPTION_LABEL:
        this.optionLabel = t, super.eSet(e, t);
        break;
      case Q.MIN_SEARCH_LENGTH:
        this.minSearchLength = t, super.eSet(e, t);
        break;
      case Q.MULTI_SELECT:
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
      case Q.OPTION_LABEL:
        return this._optionLabel !== void 0;
      case Q.MIN_SEARCH_LENGTH:
        return this._minSearchLength !== 2;
      case Q.MULTI_SELECT:
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
      case Q.OPTION_LABEL:
        this._optionLabel = void 0;
        return;
      case Q.MIN_SEARCH_LENGTH:
        this._minSearchLength = 2;
        return;
      case Q.MULTI_SELECT:
        this._multiSelect = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
cs(Lr, "OPTION_LABEL", 14), cs(Lr, "MIN_SEARCH_LENGTH", 15), cs(Lr, "MULTI_SELECT", 16);
let bu = Lr;
var Mu = Object.defineProperty, Vu = (s, e, t) => e in s ? Mu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, pt = (s, e, t) => Vu(s, typeof e != "symbol" ? e + "" : e, t);
const cr = class k extends ye {
  constructor() {
    super(...arguments), pt(this, "_optionLabel"), pt(this, "_multiSelect"), pt(this, "_asButtonGroup"), pt(this, "_values", []);
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
pt(cr, "OPTION_LABEL", 14), pt(cr, "MULTI_SELECT", 15), pt(cr, "AS_BUTTON_GROUP", 16), pt(cr, "VALUES", 17);
let Uu = cr;
var Bu = Object.defineProperty, Gu = (s, e, t) => e in s ? Bu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Oe = (s, e, t) => Gu(s, typeof e != "symbol" ? e + "" : e, t);
const Ot = class C extends ye {
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
Oe(Ot, "WITH", 14), Oe(Ot, "E_TYPE", 15), Oe(Ot, "FILTER", 16), Oe(Ot, "TEMPLATE", 17), Oe(Ot, "CASES", 18), Oe(Ot, "PRIORITY", 19);
let Wu = Ot;
var Yu = Object.defineProperty, $u = (s, e, t) => e in s ? Yu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, wr = (s, e, t) => $u(s, typeof e != "symbol" ? e + "" : e, t);
const ea = class Se extends mt {
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
wr(ea, "WHEN", 0), wr(ea, "WIDGET", 1);
let ku = ea;
const Hr = {
  VERTICAL: "VERTICAL"
};
var xu = Object.defineProperty, Xu = (s, e, t) => e in s ? xu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Fr = (s, e, t) => Xu(s, typeof e != "symbol" ? e + "" : e, t);
const ta = class me extends ye {
  constructor() {
    super(...arguments), Fr(this, "_fields", []), Fr(this, "_layout", Hr.VERTICAL);
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
        return this._layout !== Hr.VERTICAL;
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
        this._layout = Hr.VERTICAL;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Fr(ta, "FIELDS", 14), Fr(ta, "LAYOUT", 15);
let Hu = ta;
var ju = Object.defineProperty, qu = (s, e, t) => e in s ? ju(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Es = (s, e, t) => qu(s, typeof e != "symbol" ? e + "" : e, t);
const _r = class J extends ye {
  constructor() {
    super(...arguments), Es(this, "_condition"), Es(this, "_then", []), Es(this, "_else", []);
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
Es(_r, "CONDITION", 14), Es(_r, "THEN", 15), Es(_r, "ELSE", 16);
let Ku = _r;
var zu = Object.defineProperty, Qu = (s, e, t) => e in s ? zu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, hs = (s, e, t) => Qu(s, typeof e != "symbol" ? e + "" : e, t);
const Or = class Z extends ye {
  constructor() {
    super(...arguments), hs(this, "_items"), hs(this, "_body", []), hs(this, "_emptyText");
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
      getFeature: () => this.eClass().getEStructuralFeature(Z.ITEMS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Z.ITEMS,
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
      getFeature: () => this.eClass().getEStructuralFeature(Z.BODY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Z.BODY,
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
      getFeature: () => this.eClass().getEStructuralFeature(Z.EMPTY_TEXT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Z.EMPTY_TEXT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Z.ITEMS:
        return this.items;
      case Z.BODY:
        return this.body;
      case Z.EMPTY_TEXT:
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
      case Z.ITEMS:
        this.items = t, super.eSet(e, t);
        break;
      case Z.BODY:
        this.body = t, super.eSet(e, t);
        break;
      case Z.EMPTY_TEXT:
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
      case Z.ITEMS:
        return this._items !== void 0;
      case Z.BODY:
        return this._body !== void 0 && this._body.length > 0;
      case Z.EMPTY_TEXT:
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
      case Z.ITEMS:
        this._items = void 0;
        return;
      case Z.BODY:
        this._body = [];
        return;
      case Z.EMPTY_TEXT:
        this._emptyText = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
hs(Or, "ITEMS", 14), hs(Or, "BODY", 15), hs(Or, "EMPTY_TEXT", 16);
let Ju = Or;
var Zu = Object.defineProperty, en = (s, e, t) => e in s ? Zu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Pr = (s, e, t) => en(s, typeof e != "symbol" ? e + "" : e, t);
const sa = class Ie extends ye {
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
Pr(sa, "DISPLAY_EXPRESSION", 14), Pr(sa, "TARGET_ROUTE", 15);
let tn = sa;
var sn = Object.defineProperty, rn = (s, e, t) => e in s ? sn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ft = (s, e, t) => rn(s, typeof e != "symbol" ? e + "" : e, t);
const Er = class x extends mt {
  constructor() {
    super(...arguments), ft(this, "_name"), ft(this, "_priority", 0), ft(this, "_templates", []), ft(this, "_cases", []);
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
ft(Er, "NAME", 0), ft(Er, "PRIORITY", 1), ft(Er, "TEMPLATES", 2), ft(Er, "CASES", 3);
let an = Er;
var un = Object.defineProperty, nn = (s, e, t) => e in s ? un(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ae = (s, e, t) => nn(s, typeof e != "symbol" ? e + "" : e, t);
const At = class w extends mt {
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
      getFeature: () => this.eClass().getEStructuralFeature(w.EXTENDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.EXTENDS,
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
      getFeature: () => this.eClass().getEStructuralFeature(w.CSS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.CSS,
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
      getFeature: () => this.eClass().getEStructuralFeature(w.VUE_COMPONENT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.VUE_COMPONENT,
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
      getFeature: () => this.eClass().getEStructuralFeature(w.VISIBILITY_CONDITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.VISIBILITY_CONDITION,
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
      case w.EXTENDS:
        return this.extends;
      case w.CSS:
        return this.css;
      case w.VUE_COMPONENT:
        return this.vueComponent;
      case w.VISIBILITY_CONDITION:
        return this.visibilityCondition;
      case w.NAME:
        return this.name;
      case w.GROUP:
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
      case w.EXTENDS:
        this.extends = t, super.eSet(e, t);
        break;
      case w.CSS:
        this.css = t, super.eSet(e, t);
        break;
      case w.VUE_COMPONENT:
        this.vueComponent = t, super.eSet(e, t);
        break;
      case w.VISIBILITY_CONDITION:
        this.visibilityCondition = t, super.eSet(e, t);
        break;
      case w.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case w.GROUP:
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
      case w.EXTENDS:
        return this._extends !== void 0;
      case w.CSS:
        return this._css !== void 0;
      case w.VUE_COMPONENT:
        return this._vueComponent !== void 0;
      case w.VISIBILITY_CONDITION:
        return this._visibilityCondition !== void 0;
      case w.NAME:
        return this._name !== void 0;
      case w.GROUP:
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
      case w.EXTENDS:
        this._extends = void 0;
        return;
      case w.CSS:
        this._css = void 0;
        return;
      case w.VUE_COMPONENT:
        this._vueComponent = void 0;
        return;
      case w.VISIBILITY_CONDITION:
        this._visibilityCondition = void 0;
        return;
      case w.NAME:
        this._name = void 0;
        return;
      case w.GROUP:
        this._group = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ae(At, "EXTENDS", 2), Ae(At, "CSS", 3), Ae(At, "VUE_COMPONENT", 4), Ae(At, "VISIBILITY_CONDITION", 5), Ae(At, "NAME", 0), Ae(At, "GROUP", 1);
let Ha = At;
var ln = Object.defineProperty, on = (s, e, t) => e in s ? ln(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, br = (s, e, t) => on(s, typeof e != "symbol" ? e + "" : e, t);
const ra = class Ne extends Ha {
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
br(ra, "LAYOUT", 6), br(ra, "ORDER", 7);
let cn = ra;
var En = Object.defineProperty, hn = (s, e, t) => e in s ? En(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, We = (s, e, t) => hn(s, typeof e != "symbol" ? e + "" : e, t);
const ns = class b extends Ha {
  constructor() {
    super(...arguments), We(this, "_feature"), We(this, "_widgetType"), We(this, "_label"), We(this, "_readOnly"), We(this, "_order");
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
      getFeature: () => this.eClass().getEStructuralFeature(b.FEATURE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.FEATURE,
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
      getFeature: () => this.eClass().getEStructuralFeature(b.WIDGET_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.WIDGET_TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(b.LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(b.READ_ONLY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.READ_ONLY,
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
      getFeature: () => this.eClass().getEStructuralFeature(b.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case b.FEATURE:
        return this.feature;
      case b.WIDGET_TYPE:
        return this.widgetType;
      case b.LABEL:
        return this.label;
      case b.READ_ONLY:
        return this.readOnly;
      case b.ORDER:
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
      case b.FEATURE:
        this.feature = t, super.eSet(e, t);
        break;
      case b.WIDGET_TYPE:
        this.widgetType = t, super.eSet(e, t);
        break;
      case b.LABEL:
        this.label = t, super.eSet(e, t);
        break;
      case b.READ_ONLY:
        this.readOnly = t, super.eSet(e, t);
        break;
      case b.ORDER:
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
      case b.FEATURE:
        return this._feature !== void 0;
      case b.WIDGET_TYPE:
        return this._widgetType !== void 0;
      case b.LABEL:
        return this._label !== void 0;
      case b.READ_ONLY:
        return this._readOnly !== void 0;
      case b.ORDER:
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
      case b.FEATURE:
        this._feature = void 0;
        return;
      case b.WIDGET_TYPE:
        this._widgetType = void 0;
        return;
      case b.LABEL:
        this._label = void 0;
        return;
      case b.READ_ONLY:
        this._readOnly = void 0;
        return;
      case b.ORDER:
        this._order = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
We(ns, "FEATURE", 6), We(ns, "WIDGET_TYPE", 7), We(ns, "LABEL", 8), We(ns, "READ_ONLY", 9), We(ns, "ORDER", 10);
let ja = ns;
var gn = Object.defineProperty, dn = (s, e, t) => e in s ? gn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, qa = (s, e, t) => dn(s, typeof e != "symbol" ? e + "" : e, t);
const Ka = class yt extends ja {
  constructor() {
    super(...arguments), qa(this, "_columns", []);
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
      getFeature: () => this.eClass().getEStructuralFeature(yt.COLUMNS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => yt.COLUMNS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case yt.COLUMNS:
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
      case yt.COLUMNS:
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
      case yt.COLUMNS:
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
      case yt.COLUMNS:
        this._columns = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
qa(Ka, "COLUMNS", 11);
let pn = Ka;
var fn = Object.defineProperty, Tn = (s, e, t) => e in s ? fn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Mr = (s, e, t) => Tn(s, typeof e != "symbol" ? e + "" : e, t);
const aa = class ve extends mt {
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
Mr(aa, "LANGUAGE", 0), Mr(aa, "BODY", 1);
let za = aa;
const jr = {
  ERROR: "ERROR"
};
var Sn = Object.defineProperty, mn = (s, e, t) => e in s ? Sn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Vr = (s, e, t) => mn(s, typeof e != "symbol" ? e + "" : e, t);
const ia = class Le extends za {
  constructor() {
    super(...arguments), Vr(this, "_defaultMessage"), Vr(this, "_severity", jr.ERROR);
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
        return this._severity !== jr.ERROR;
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
        this._severity = jr.ERROR;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Vr(ia, "DEFAULT_MESSAGE", 2), Vr(ia, "SEVERITY", 3);
let In = ia;
var Nn = Object.defineProperty, vn = (s, e, t) => e in s ? Nn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ee = (s, e, t) => vn(s, typeof e != "symbol" ? e + "" : e, t);
const Et = class O extends mt {
  constructor() {
    super(...arguments), Ee(this, "_order"), Ee(this, "_matchCode"), Ee(this, "_matchSeverity"), Ee(this, "_matchExpression"), Ee(this, "_mappedText"), Ee(this, "_mappedTextExpression"), Ee(this, "_mappedSeverity");
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
Ee(Et, "ORDER", 0), Ee(Et, "MATCH_CODE", 1), Ee(Et, "MATCH_SEVERITY", 2), Ee(Et, "MATCH_EXPRESSION", 3), Ee(Et, "MAPPED_TEXT", 4), Ee(Et, "MAPPED_TEXT_EXPRESSION", 5), Ee(Et, "MAPPED_SEVERITY", 6);
let Ln = Et;
var _n = Object.defineProperty, On = (s, e, t) => e in s ? _n(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, An = (s, e, t) => On(s, e + "", t);
const Qa = class Ja extends bi {
  static get eINSTANCE() {
    return this._instance || (this._instance = new Ja()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(R.eINSTANCE);
  }
  /**
   * Create a new UIModel instance
   */
  createUIModel() {
    return new Xi();
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
    return new Zi();
  }
  /**
   * Create a new SectionView instance
   */
  createSectionView() {
    return new su();
  }
  /**
   * Create a new TabView instance
   */
  createTabView() {
    return new iu();
  }
  /**
   * Create a new SummaryView instance
   */
  createSummaryView() {
    return new lu();
  }
  /**
   * Create a new MasterDetail instance
   */
  createMasterDetail() {
    return new Eu();
  }
  /**
   * Create a new PropertyBinding instance
   */
  createPropertyBinding() {
    return new du();
  }
  /**
   * Create a new InputWidget instance
   */
  createInputWidget() {
    return new mu();
  }
  /**
   * Create a new TextAreaWidget instance
   */
  createTextAreaWidget() {
    return new vu();
  }
  /**
   * Create a new NumberWidget instance
   */
  createNumberWidget() {
    return new Ou();
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
    return new wu();
  }
  /**
   * Create a new ComboboxWidget instance
   */
  createComboboxWidget() {
    return new bu();
  }
  /**
   * Create a new SelectWidget instance
   */
  createSelectWidget() {
    return new Uu();
  }
  /**
   * Create a new AllFeatures instance
   */
  createAllFeatures() {
    return new Wu();
  }
  /**
   * Create a new TemplateCase instance
   */
  createTemplateCase() {
    return new ku();
  }
  /**
   * Create a new GroupWidget instance
   */
  createGroupWidget() {
    return new Hu();
  }
  /**
   * Create a new Conditional instance
   */
  createConditional() {
    return new Ku();
  }
  /**
   * Create a new ForEach instance
   */
  createForEach() {
    return new Ju();
  }
  /**
   * Create a new ReferenceLinkWidget instance
   */
  createReferenceLinkWidget() {
    return new tn();
  }
  /**
   * Create a new UIModelOverlay instance
   */
  createUIModelOverlay() {
    return new an();
  }
  /**
   * Create a new LayoutStyle instance
   */
  createLayoutStyle() {
    return new cn();
  }
  /**
   * Create a new WidgetStyle instance
   */
  createWidgetStyle() {
    return new ja();
  }
  /**
   * Create a new TableStyle instance
   */
  createTableStyle() {
    return new pn();
  }
  /**
   * Create a new Expression instance
   */
  createExpression() {
    return new za();
  }
  /**
   * Create a new ValidationExpression instance
   */
  createValidationExpression() {
    return new In();
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
An(Qa, "_instance");
let ga = Qa;
const Za = Symbol("uimodelComposerRegistry");
function ei() {
  const s = Tt(Za);
  if (!s)
    throw new Error(
      "[uimodel-composer] No ComposerRegistry provided. Make sure UIModelComposer is an ancestor of this component."
    );
  return s;
}
function yn(s) {
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
function Ct(s, e = 0) {
  if (typeof s == "number") return s;
  const t = Number(s);
  return Number.isFinite(t) ? t : e;
}
const Dn = {
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
function ua(s) {
  return `--${Cn}-${Wr(s)}`;
}
function Rn(s) {
  return s.replace(/token\(\s*([^)]+?)\s*\)/g, (e, t) => `var(${ua(t)})`);
}
function ti(s) {
  return `uic-${Wr(s)}`;
}
function wn(s) {
  return `uicss-theme-${Wr(s)}`;
}
function si(s, e) {
  return `uicss-cond-${Wr(s.name ?? "sheet")}-${e}`;
}
function ri(s, e = "  ") {
  return s.filter((t) => t.property && t.value !== void 0).map((t) => `${e}${t.property.trim()}: ${Rn(t.value)}${gr(t.important) ? " !important" : ""};`).join(`
`);
}
function Fn(s, e) {
  return e.filter((t) => t.declarations.length > 0).map((t) => {
    var r, i;
    const u = ((i = (r = t.state) == null ? void 0 : r.getName) == null ? void 0 : i.call(r)) ?? String(t.state), n = Dn[u] ?? `:${u.toLowerCase()}`;
    return `${s}${n} {
${ri(t.declarations)}
}`;
  }).join(`
`);
}
function _a(s, e, t, r) {
  const i = [];
  e.length > 0 && i.push(`${s} {
${ri(e)}
}`);
  const u = Fn(s, t);
  if (u && i.push(u), i.length === 0) return "";
  const n = i.join(`
`);
  return r ? `@media ${r} {
${n}
}` : n;
}
function ai(s) {
  return s.includeSubtypes === void 0 || s.includeSubtypes === null ? !0 : gr(s.includeSubtypes);
}
function Pn(s, e, t) {
  var r, i;
  let u;
  const n = (i = (r = e.targetClass) == null ? void 0 : r.getName) == null ? void 0 : i.call(r);
  return n ? u = ai(e) ? `.uim-c-${n}` : `.uim-component[data-uim-eclass="${n}"]` : u = ".uim-component", e.componentName && (u += `[data-uim-name="${e.componentName}"]`), e.group && (u += `[data-uim-group="${e.group}"]`), e.condition && (u += `.${si(s, t)}`), u;
}
function bn(s) {
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
function Mn(s) {
  const e = [];
  if (s.tokens.length > 0) {
    const r = s.tokens.filter((i) => i.name).map((i) => `  ${ua(i.name)}: ${i.value ?? ""};`);
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
    }).map((u) => `  ${ua(u.token.name)}: ${u.value ?? ""};`);
    gr(r.dark) && i.push("  color-scheme: dark;"), i.length > 0 && e.push(`.${wn(r.name)} {
${i.join(`
`)}
}`);
  }
  const t = s.rules.map((r, i) => ({ rule: r, index: i }));
  t.sort((r, i) => Ct(r.rule.priority) - Ct(i.rule.priority) || r.index - i.index);
  for (const { rule: r, index: i } of t) {
    const u = _a(
      Pn(s, r, i),
      r.declarations,
      r.states,
      r.media || void 0
    );
    u && e.push(u);
  }
  for (const r of bn(s.styles)) {
    if (!r.name) continue;
    const i = _a(`.${ti(r.name)}`, r.declarations, r.states);
    i && e.push(i);
  }
  return e.join(`

`);
}
function Vn(s) {
  return s.map(Mn).filter(Boolean).join(`

`);
}
const pr = Symbol("uimodel-css:sheets");
let Un = 0;
function Bn(s) {
  const e = dr(0);
  class t extends Ua {
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
  return ds(
    () => [...Qe(s)],
    (c) => {
      h();
      for (const E of c)
        n(E), i.push(E);
      e.value++;
    },
    { immediate: !0 }
  ), ca(h), { css: T(() => (e.value, Vn([...Qe(s)]))), version: e };
}
function Gn(s) {
  const { css: e, version: t } = Bn(s);
  if (typeof document < "u") {
    const r = document.createElement("style");
    r.id = `uimodel-css-${++Un}`, r.setAttribute("data-uimodel-css", ""), document.head.appendChild(r), Ci(() => {
      r.textContent = e.value;
    }), ca(() => {
      r.remove();
    });
  }
  return { css: e, version: t };
}
function mr(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? gs(e) : s;
}
function gs(s) {
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
function fr(s, e) {
  if (!s) return !0;
  try {
    switch (s.language) {
      case "OCL":
        return Wn(s.body, e);
      case "AQL":
        return Yn(s.body, e);
      case "JS":
        return $n(s.body, e);
      default:
        return console.warn(`[uimodel-composer] Unknown expression language: ${s.language}`), !0;
    }
  } catch (t) {
    return console.error(`[uimodel-composer] Expression evaluation failed (${s.language}):`, t), !0;
  }
}
function Wn(s, e) {
  try {
    const { EMFOclValidator: t } = globalThis.__emftsOcl__ ?? {};
    return t ? new t().evaluateExpression(s, gs(e)) === !0 : (console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup."), !0);
  } catch {
    return !0;
  }
}
function Yn(s, e) {
  return console.warn("[uimodel-composer] AQL evaluation not yet implemented."), !0;
}
function $n(s, e) {
  return !!new Function("self", `"use strict"; return (${s});`)(gs(e));
}
function kn(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? gs(e) : s;
}
function Yr(s, e, t = {}) {
  if (s != null && s.body)
    try {
      switch (s.language) {
        case "JS": {
          const r = Object.keys(t);
          return new Function("self", ...r, `"use strict"; return (${s.body});`)(gs(e), ...r.map((i) => kn(t[i])));
        }
        case "OCL": {
          const { EMFOclValidator: r } = globalThis.__emftsOcl__ ?? {};
          if (!r) {
            console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup.");
            return;
          }
          return new r().evaluateExpression(s.body, gs(e));
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
function xn(s) {
  return s.map((e, t) => ({ overlay: e, index: t })).sort((e, t) => Ct(t.overlay.priority) - Ct(e.overlay.priority) || e.index - t.index).flatMap(({ overlay: e }) => [...e.cases ?? []]);
}
function ii(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "AllFeatures";
}
function Xn(s) {
  var e;
  const t = (e = s.eClass) == null ? void 0 : e.call(s);
  return t ? t.getName() === "WidgetComponent" || t.getEAllSuperTypes().some((r) => r.getName() === "WidgetComponent") : !1;
}
function ui(s) {
  return typeof s.isContainment == "function";
}
function Hn(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    ii(i) ? e.push(i) : Xn(i) && i.feature && t.add(i.feature);
    for (const u of i.eClass().getEAllStructuralFeatures()) {
      if (!ui(u) || !u.isContainment()) continue;
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
function jn(s, e) {
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
    (u) => fr(e.filter, u)
  )), i;
}
function qn(s, e) {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const u of e.blocks)
    t.set(u, []), r.set(u, new Set(jn(s, u)));
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
      const h = Ct(l.priority) - Ct(n.priority), c = Number(Ar(l)) - Number(Ar(n)), E = i.get(n) - i.get(l);
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
function Oa(s, e) {
  for (const t of s ?? [])
    if (t.widget && (!t.when || Yr(
      t.when,
      e
    )))
      return t.widget;
}
function Kn(s, e, t) {
  return Oa(t?.overlayCases, e) ?? Oa(s.cases, e) ?? s.template;
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
    const c = ui(l) && l.isContainment();
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
function qr(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function ni(s, e) {
  if (qr(s) !== "GroupWidget") {
    s.feature = e;
    return;
  }
  const t = s.fields ?? [];
  for (const r of t)
    zn.has(qr(r)) || (qr(r) === "GroupWidget" ? ni(r, e) : !r.feature && !(r.bindings ?? []).some((i) => i.property === "feature") && (r.feature = e));
}
function Qn(s, e) {
  const t = ga.eINSTANCE.createValidationExpression();
  return t.language = "JS", t.body = `self.${s} !== null && self.${s} !== undefined && String(self.${s}).length > 0`, t.defaultMessage = `${e ?? s} ist erforderlich.`, t.severity = "ERROR", t;
}
function Jn(s) {
  const e = s.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Zn(s, e, t) {
  var r, i, u, n;
  const l = t ?? {
    blocks: [e],
    boundFeatures: /* @__PURE__ */ new Set()
  };
  l.blocks.includes(e) || l.blocks.push(e);
  const h = qn(s, l).get(e) ?? [], c = [];
  for (const E of h) {
    const g = Kn(e, E, l);
    if (!g) {
      console.error(
        `[uimodel-composer] AllFeatures "${e.name ?? "?"}": kein TemplateCase trifft auf Feature "${E.getName() ?? "?"}" und kein Default-Fall (template) gesetzt.`
      );
      continue;
    }
    const o = Ur(g);
    ni(o, E);
    const p = E.getName() ?? "feature";
    o.name = p, o.label === void 0 && e.label !== void 0 && (o.label = e.label), o.placeholder === void 0 && e.placeholder !== void 0 && (o.placeholder = e.placeholder), o.readOnly === void 0 && e.readOnly !== void 0 && (o.readOnly = e.readOnly), o.required === void 0 && e.required !== void 0 && (o.required = e.required), (((r = o.styles) == null ? void 0 : r.length) ?? 0) === 0 && (((i = e.styles) == null ? void 0 : i.length) ?? 0) > 0 && (o.styles = [...e.styles]), o.label || (o.label = Jn(p)), !o.group && e.group && (o.group = e.group), o.required === void 0 && Ct((u = E.getLowerBound) == null ? void 0 : u.call(E)) >= 1 && (o.required = !0, (((n = o.validations) == null ? void 0 : n.length) ?? 0) === 0 && (o.validations = [Qn(p, o.label)]));
    const B = e.bindings ?? [];
    if (B.length > 0) {
      const V = new Set((o.bindings ?? []).map((N) => N.property)), f = B.filter((N) => N.property && !V.has(N.property)).map((N) => Ur(N));
      f.length > 0 && (o.bindings = [...o.bindings ?? [], ...f]);
    }
    c.push(o);
  }
  return c;
}
const li = Symbol("uimodel:allfeatures-context"), oi = dr(0);
function el() {
  oi.value++;
}
function wt() {
  oi.value;
}
function tl(s) {
  class e extends Ua {
    notifyChanged(l) {
      var h;
      try {
        super.notifyChanged(l);
      } catch {
      }
      if ((h = l.isTouch) != null && h.call(l)) return;
      el();
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
  ds(
    () => Qe(s),
    (n, l) => {
      l && u(l), n && i(n);
    },
    { immediate: !0 }
  ), ca(() => {
    const n = Qe(s);
    n && u(n);
  });
}
function ci(s) {
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
function sl(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "CssStyle";
}
function rl(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    !i || t.has(i) || (t.add(i), r(i.extends), sl(i) && i.name && e.push(ti(i.name)));
  }
  for (const i of s ?? []) r(i);
  return e;
}
function al(s, e) {
  var t, r, i;
  const u = (r = (t = s.targetClass) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  if (u) {
    const n = ci((i = e.eClass) == null ? void 0 : i.call(e));
    if (ai(s)) {
      if (!n.includes(u)) return !1;
    } else if (n[0] !== u)
      return !1;
  }
  return !(s.componentName && e.name !== s.componentName || s.group && e.group !== s.group);
}
function da(s, e = {}) {
  var t;
  const r = ["uim-component"];
  for (const i of ci((t = s.eClass) == null ? void 0 : t.call(s)))
    r.push(`uim-c-${i}`);
  r.push(...rl(s.styles)), e.resolvedCss && r.push(...e.resolvedCss.split(/\s+/).filter(Boolean));
  for (const i of e.sheets ?? [])
    i.rules.forEach((u, n) => {
      u.condition && al(u, s) && e.model && fr(u.condition, e.model) && r.push(si(i, n));
    });
  return [...new Set(r)];
}
function pa(s) {
  var e, t, r;
  const i = {}, u = (r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  return u && (i["data-uim-eclass"] = u), s.name && (i["data-uim-name"] = s.name), s.group && (i["data-uim-group"] = s.group), i;
}
function il(s, e, t) {
  const r = [];
  return gr(t ?? s.required) && r.push("uim-s-required"), gr(e ?? s.readOnly) && r.push("uim-s-readonly"), r;
}
function Ei(s, e = /* @__PURE__ */ new Set()) {
  if (!s) return {};
  if (e.has(s)) return {};
  e.add(s);
  const t = s.extends ? Ei(s.extends, e) : {}, r = ul(s);
  return gi(t, r);
}
function hi(s) {
  return s.reduce(
    (e, t) => gi(e, Ei(t)),
    {}
  );
}
function ul(s) {
  const e = {};
  s.css !== void 0 && (e.css = s.css), s.vueComponent !== void 0 && (e.vueComponent = s.vueComponent);
  const t = s;
  t.layout !== void 0 && (e.layout = t.layout), t.order !== void 0 && (e.order = t.order);
  const r = s;
  return r.widgetType !== void 0 && (e.widgetType = r.widgetType), r.label !== void 0 && (e.label = r.label), r.readOnly !== void 0 && (e.readOnly = r.readOnly), r.order !== void 0 && (e.order = r.order), e;
}
function gi(s, e) {
  return {
    ...s,
    ...Object.fromEntries(
      Object.entries(e).filter(([, t]) => t !== void 0)
    ),
    // Merge CSS classes (append, not replace)
    css: [s.css, e.css].filter(Boolean).join(" ") || void 0
  };
}
const fa = /* @__PURE__ */ ne({
  __name: "ComponentDispatcher",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = s, t = ei(), r = T(() => {
      var l, h, c, E;
      const g = ((E = (c = (h = (l = e.component).eClass) == null ? void 0 : h.call(l)) == null ? void 0 : c.getName) == null ? void 0 : E.call(c)) ?? "", o = t.getComposer(g);
      return o || console.warn(`[uimodel-composer] No composer registered for EClass "${g}"`), o ?? null;
    }), i = Tt(pr, void 0), u = T(() => (wt(), i?.version.value, da(e.component, {
      model: e.model,
      sheets: i?.sheets.value,
      resolvedCss: hi(e.component.styles ?? []).css
    }))), n = T(() => pa(e.component));
    return (l, h) => r.value ? (S(), X(Ea(r.value), ha({
      key: 0,
      component: s.component,
      model: s.model,
      class: u.value
    }, n.value), null, 16, ["component", "model", "class"])) : oe("", !0);
  }
});
function Ta(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function nl(s) {
  return Ta(s) === "GroupWidget";
}
function ll(s) {
  return Ta(s) === "Conditional";
}
function ol(s) {
  return Ta(s) === "ForEach";
}
function cl(s) {
  if (!s) return [];
  const e = typeof s == "object" && Symbol.iterator in s ? s : [s], t = [];
  for (const r of e)
    r && typeof r.eClass == "function" ? t.push(r) : r != null && console.warn("[uimodel-composer] ForEach: Element ist kein EObject und wird übersprungen:", r);
  return t;
}
function na(s, e, t) {
  var r;
  const i = [];
  for (const u of s ?? [])
    if (ii(u)) {
      const n = (r = e.eClass) == null ? void 0 : r.call(e);
      if (!n) continue;
      for (const l of Zn(n, u, t))
        i.push({ kind: "widget", widget: l, model: e });
    } else if (ll(u)) {
      const n = fr(u.condition, e) ? u.then : u.else;
      i.push(...na(n, e, t));
    } else if (ol(u)) {
      const n = cl(Yr(u.items, e));
      if (n.length === 0) {
        u.emptyText && i.push({ kind: "note", text: u.emptyText });
        continue;
      }
      for (const l of n)
        i.push(...na(u.body, l, t));
    } else nl(u) ? i.push({ kind: "group", widget: u, model: e }) : i.push({ kind: "widget", widget: u, model: e });
  return i;
}
function di(s, e) {
  return T(() => (wt(), fr(Qe(s), Qe(e))));
}
const El = /* @__PURE__ */ new Set([
  "readOnly",
  "required",
  "password",
  "asToggle",
  "multiSelect",
  "asButtonGroup",
  "withTime"
]), hl = /* @__PURE__ */ new Set([
  "maxLength",
  "rows",
  "min",
  "max",
  "step",
  "minSearchLength",
  "order"
]);
function gl(s, e) {
  if (e === null) return s === "feature" ? null : void 0;
  if (s === "feature") return e;
  if (El.has(s)) return !!e;
  if (hl.has(s)) {
    const t = Number(e);
    return Number.isFinite(t) ? t : void 0;
  }
  return String(e);
}
function dl(s, e) {
  var t;
  const r = { values: {}, featureSuppressed: !1 };
  for (const i of s.bindings ?? []) {
    const u = i.property;
    if (!u || !i.expression) continue;
    const n = Yr(i.expression, e, {
      feature: s.feature,
      eClass: (t = e.eClass) == null ? void 0 : t.call(e)
    });
    if (n === void 0) continue;
    if (u === "feature") {
      n === null ? r.featureSuppressed = !0 : r.feature = n;
      continue;
    }
    const l = gl(u, n);
    l !== void 0 && (r.values[u] = l);
  }
  return r;
}
function pi(s, e) {
  return T(() => {
    var t;
    wt();
    const r = Qe(s), i = hi(r.styles), u = {
      ...r.label !== void 0 ? { label: r.label } : {},
      ...r.placeholder !== void 0 ? { placeholder: r.placeholder } : {},
      ...r.readOnly !== void 0 ? { readOnly: r.readOnly } : {},
      ...r.required !== void 0 ? { required: r.required } : {}
    }, n = e ? Qe(e) : void 0;
    if (!n || (((t = r.bindings) == null ? void 0 : t.length) ?? 0) === 0)
      return { ...i, ...u };
    const l = dl(r, n);
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
function re() {
  return { matches: !1, priority: 0 };
}
function Re(s) {
  return { matches: !0, priority: s };
}
let pl = class {
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
      return re();
    if (t === this.eClass)
      return Re(se.ECLASS + 50);
    if (t.getName() === this.eClass.getName()) {
      const r = t.getEPackage(), i = this.eClass.getEPackage();
      if (r && i && r.getNsURI() === i.getNsURI())
        return Re(se.ECLASS + 50);
    }
    return this.isSuperTypeOf(this.eClass, t) ? Re(se.ECLASS) : re();
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
}, fl = class {
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
      return re();
    const u = (t = i.getEType) == null ? void 0 : t.call(i);
    return u && ((r = u.getName) == null ? void 0 : r.call(u)) === this.dataTypeName ? Re(se.DATA_TYPE) : re();
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
    return re();
  }
  /**
   * Match against a specific enum.
   */
  matchEnum(e) {
    var t;
    return this.enumName ? ((t = e.getName) == null ? void 0 : t.call(e)) === this.enumName ? Re(se.DATA_TYPE + 50) : re() : Re(se.DATA_TYPE);
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
}, Sl = class {
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
      return re();
    const h = l;
    let c = se.DATA_TYPE;
    if (this.containment !== void 0) {
      if ((((t = h.isContainment) == null ? void 0 : t.call(h)) ?? !1) !== this.containment)
        return re();
      c += 25;
    }
    if (this.targetClass) {
      const E = (r = h.getEReferenceType) == null ? void 0 : r.call(h);
      if (!E)
        return re();
      const g = (i = E.getName) == null ? void 0 : i.call(E), o = (n = (u = this.targetClass).getName) == null ? void 0 : n.call(u);
      if (g !== o && !this.isSuperTypeOf(this.targetClass, E))
        return re();
      c += 25;
    }
    return Re(c);
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
class ml {
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
      return re();
    const p = (r = o.getEContainingClass) == null ? void 0 : r.call(o);
    if (!p)
      return re();
    if (p === this.eClass)
      return Re(se.FEATURE);
    const B = (i = p.getName) == null ? void 0 : i.call(p), V = (n = (u = this.eClass).getName) == null ? void 0 : n.call(u);
    if (B === V) {
      const f = (l = p.getEPackage) == null ? void 0 : l.call(p), N = (c = (h = this.eClass).getEPackage) == null ? void 0 : c.call(h);
      if (f && N && ((E = f.getNsURI) == null ? void 0 : E.call(f)) === ((g = N.getNsURI) == null ? void 0 : g.call(N)))
        return Re(se.FEATURE);
    }
    return this.isInheritedFrom(p, this.eClass) ? Re(se.FEATURE - 10) : re();
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
        const o = (n = g.getEPackage) == null ? void 0 : n.call(g), p = (l = t.getEPackage) == null ? void 0 : l.call(t);
        if (o && p && ((h = o.getNsURI) == null ? void 0 : h.call(o)) === ((c = p.getNsURI) == null ? void 0 : c.call(p)))
          return !0;
      }
    }
    return !1;
  }
}
var Il = Object.defineProperty, Nl = (s, e, t) => e in s ? Il(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Aa = (s, e, t) => Nl(s, typeof e != "symbol" ? e + "" : e, t);
let vl = 0;
function Ll() {
  return `descriptor-${++vl}`;
}
let _l = class {
  constructor() {
    Aa(this, "entries", []), Aa(this, "instanceOverrides", /* @__PURE__ */ new WeakMap());
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
        const r = new pl(e.eClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "datatype": {
        const r = new fl(e.dataTypeName);
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
        const r = new Sl(e.containment, e.targetClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "feature": {
        const r = new ml(e.eClass, e.featureName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "instance":
        return (r) => r.eObject === e.eObject ? Re(t ?? se.INSTANCE) : re();
      case "custom":
        return e.matcher;
      default:
        return () => re();
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
const ze = new _l();
var Ol = Object.defineProperty, Al = (s, e, t) => e in s ? Ol(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ya = (s, e, t) => Al(s, typeof e != "symbol" ? e + "" : e, t);
let yl = class {
  constructor() {
    ya(this, "lazyRegistrations", []), ya(this, "resolvedPackages", /* @__PURE__ */ new Map());
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
new yl();
const fi = Symbol("componentRegistry");
function Cl() {
  const s = Tt(fi) ?? ze;
  function e(g) {
    return s.getComponent(g);
  }
  function t(g, o) {
    return s.getComponentForFeature(g, o);
  }
  function r(g, o) {
    return s.getComponentForEClass(g, o);
  }
  function i(g, o, p) {
    return s.register(g, o, p);
  }
  function u(g, o) {
    return s.registerForInstance(g, o);
  }
  function n(g, o, p) {
    return s.registerForEClass(g, o, p);
  }
  function l(g, o, p) {
    return s.registerForDataType(g, o, p);
  }
  function h(g, o, p) {
    return s.registerForEnum(g, o, p);
  }
  function c(g, o) {
    return s.registerForReference(g, o);
  }
  function E(g, o, p, B) {
    return s.registerForFeature(g, o, p, B);
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
const Dl = { class: "uimodel-fallback-widget" }, Rl = { class: "uimodel-fallback-widget__label" }, wl = {
  key: 0,
  "aria-hidden": "true"
}, Fl = ["rows", "value", "placeholder", "readonly", "disabled"], Pl = /* @__PURE__ */ ne({
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
        var o, p;
        return t.value.label ?? ((p = (o = e.feature) == null ? void 0 : o.getName) == null ? void 0 : p.call(o)) ?? "";
      }
    ), i = T(() => t.value.placeholder ?? ""), u = T(() => h(t.value.readOnly)), n = T(() => h(t.value.required)), l = T(() => {
      var o, p;
      const B = (p = (o = e.custom) == null ? void 0 : o.rawWidget) == null ? void 0 : p.rows, V = Number(B);
      return Number.isFinite(V) && V > 0 ? V : 3;
    });
    function h(o) {
      return o === !0 || o === "true";
    }
    const c = T(() => {
      var o;
      const p = (o = e.eObject) == null ? void 0 : o.eGet(e.feature);
      return p == null ? "" : String(p);
    }), E = dr(c.value);
    ds(c, (o) => {
      E.value = o;
    });
    function g(o) {
      var p;
      const B = o.target.value;
      E.value = B, (p = e.eObject) == null || p.eSet(e.feature, B);
    }
    return (o, p) => (S(), D("div", Dl, [
      ie("label", Rl, [
        Va(Ye(r.value), 1),
        n.value ? (S(), D("span", wl, " *")) : oe("", !0)
      ]),
      ie("textarea", {
        class: "uimodel-fallback-widget__input",
        rows: l.value,
        value: E.value,
        placeholder: i.value,
        readonly: u.value,
        disabled: u.value,
        onInput: g
      }, null, 40, Fl)
    ]));
  }
}), bl = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, Ml = /* @__PURE__ */ bl(Pl, [["__scopeId", "data-v-0237261a"]]), Ti = /* @__PURE__ */ ne({
  __name: "WidgetComposer",
  props: {
    widget: {},
    model: {}
  },
  setup(s) {
    const e = s, t = /* @__PURE__ */ new Set(), { getComponentForFeature: r } = Cl(), i = di(
      () => e.widget.visibilityCondition,
      () => e.model
    ), u = pi(
      () => e.widget,
      () => e.model
    ), n = T(
      () => u.value.boundFeature ?? e.widget.feature
    ), l = T(() => {
      var o, p, B, V, f, N, G, y;
      if (!n.value) return null;
      const M = r(n.value, e.model);
      if (M) return M;
      const j = ((V = (B = (p = (o = e.widget).eClass) == null ? void 0 : p.call(o)) == null ? void 0 : B.getName) == null ? void 0 : V.call(B)) ?? "WidgetComponent", U = ((y = (G = (N = (f = n.value).getEType) == null ? void 0 : N.call(f)) == null ? void 0 : G.getName) == null ? void 0 : y.call(G)) ?? "?", he = `${j}/${U}`;
      return t.has(he) || (t.add(he), console.warn(
        `[uimodel-composer] Kein Renderer für Widget "${j}" auf Datentyp "${U}" registriert — Fallback als Plaintext-Editor. Host: Renderer über die @emfts/vue-registry registrieren.`
      )), Ml;
    }), h = T(() => {
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
    }), c = Tt(pr, void 0), E = T(() => (wt(), c?.version.value, [
      ...da(e.widget, {
        model: e.model,
        sheets: c?.sheets.value,
        resolvedCss: u.value.css
      }),
      ...il(
        e.widget,
        u.value.readOnly,
        u.value.required
      )
    ])), g = T(() => pa(e.widget));
    return (o, p) => ue(i) && l.value && !ue(u).featureSuppressed ? (S(), X(Ea(l.value), ha({ key: 0 }, { ...h.value, ...g.value }, { class: E.value }), null, 16, ["class"])) : oe("", !0);
  }
}), Vl = {
  key: 0,
  class: "uim-group-label"
}, Ul = /* @__PURE__ */ ne({
  __name: "GroupComposer",
  props: {
    widget: {},
    model: {}
  },
  setup(s) {
    const e = s, t = Tt(pr, void 0), r = di(
      () => e.widget.visibilityCondition,
      () => e.model
    ), i = pi(
      () => e.widget,
      () => e.model
    ), u = T(() => {
      const E = i.value.label;
      return E == null ? "" : String(E);
    }), n = T(
      () => String(e.widget.layout ?? "VERTICAL").toLowerCase()
    ), l = T(() => (wt(), t?.version.value, [
      ...da(e.widget, {
        model: e.model,
        sheets: t?.sheets.value,
        resolvedCss: i.value.css
      }),
      "uimodel-group",
      `uimodel-group--${n.value}`
    ])), h = T(
      () => pa(e.widget)
    ), c = T(() => e.widget.fields ?? []);
    return (E, g) => ue(r) ? (S(), D("div", ha({
      key: 0,
      class: l.value
    }, h.value), [
      u.value ? (S(), D("div", Vl, Ye(u.value), 1)) : oe("", !0),
      hr(Si, {
        fields: c.value,
        model: s.model
      }, null, 8, ["fields", "model"])
    ], 16)) : oe("", !0);
  }
}), Bl = {
  key: 0,
  class: "uimodel-foreach-empty"
}, Si = /* @__PURE__ */ ne({
  __name: "FieldsRenderer",
  props: {
    fields: {},
    model: {}
  },
  setup(s) {
    const e = s, t = Tt(li, void 0), r = Tt(pr, void 0), i = T(() => (wt(), r?.version.value, na(e.fields, e.model, t?.value)));
    return (u, n) => (S(!0), D(St, null, Dt(i.value, (l, h) => (S(), D(St, { key: h }, [
      l.kind === "note" ? (S(), D("p", Bl, Ye(l.text), 1)) : l.kind === "group" ? (S(), X(Ul, {
        key: 1,
        widget: l.widget,
        model: l.model
      }, null, 8, ["widget", "model"])) : (S(), X(Ti, {
        key: 2,
        widget: l.widget,
        model: l.model
      }, null, 8, ["widget", "model"]))
    ], 64))), 128));
  }
}), Gl = { class: "uimodel-form-view" }, mi = /* @__PURE__ */ ne({
  __name: "FormViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (S(), D("div", Gl, [
      hr(Si, {
        fields: s.component.fields,
        model: s.model
      }, null, 8, ["fields", "model"])
    ]));
  }
}), Wl = { class: "uimodel-section-view" }, Yl = /* @__PURE__ */ ne({
  __name: "SectionViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (S(), D("div", Wl, [
      (S(!0), D(St, null, Dt(s.component.sections, (r) => (S(), X(mi, {
        key: r.name,
        component: r,
        model: s.model
      }, null, 8, ["component", "model"]))), 128))
    ]));
  }
}), $l = { class: "uimodel-tab-view" }, kl = ["data-tab"], xl = /* @__PURE__ */ ne({
  __name: "TabViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (S(), D("div", $l, [
      (S(!0), D(St, null, Dt(s.component.tabs, (r) => (S(), D("div", {
        key: r.name,
        class: "uimodel-tab-panel",
        "data-tab": r.name
      }, [
        hr(fa, {
          component: r,
          model: s.model
        }, null, 8, ["component", "model"])
      ], 8, kl))), 128))
    ]));
  }
}), Xl = { class: "uimodel-summary-view" }, Hl = /* @__PURE__ */ ne({
  __name: "SummaryViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (S(), D("div", Xl, [
      (S(!0), D(St, null, Dt(s.component.summaryFields, (r) => (S(), X(Ti, {
        key: r.name,
        widget: r,
        model: s.model
      }, null, 8, ["widget", "model"]))), 128))
    ]));
  }
}), jl = {
  key: 1,
  class: "uimodel-table-view-placeholder"
}, Ii = /* @__PURE__ */ ne({
  __name: "TableViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = ei(), t = T(() => e.getComposer("TableViewRenderer"));
    return (r, i) => t.value ? (S(), X(Ea(t.value), {
      key: 0,
      component: s.component,
      model: s.model
    }, null, 8, ["component", "model"])) : (S(), D("div", jl));
  }
}), ql = { class: "uimodel-master-detail" }, Kl = { class: "uimodel-master" }, zl = { class: "uimodel-detail" }, Ql = /* @__PURE__ */ ne({
  __name: "MasterDetailComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (S(), D("div", ql, [
      ie("div", Kl, [
        hr(Ii, {
          component: s.component.master,
          model: s.model
        }, null, 8, ["component", "model"])
      ]),
      ie("div", zl, [
        hr(fa, {
          component: s.component.detail,
          model: s.model
        }, null, 8, ["component", "model"])
      ])
    ]));
  }
}), Sa = /* @__PURE__ */ ne({
  __name: "UIModelComposer",
  props: {
    uiModel: {},
    model: {},
    composerRegistry: {},
    styleSheets: {},
    overlays: {}
  },
  setup(s) {
    const e = s, t = T(() => e.styleSheets ?? []), { version: r } = Gn(t);
    Ir(pr, { sheets: t, version: r }), tl(() => e.model), Ir(
      li,
      T(() => (wt(), {
        ...Hn(e.uiModel),
        overlayCases: xn(e.overlays ?? [])
      }))
    );
    const i = e.composerRegistry ?? yn({
      FormView: mi,
      SectionView: Yl,
      TabView: xl,
      SummaryView: Hl,
      TableView: Ii,
      MasterDetail: Ql
    });
    Ir(Za, i);
    function u() {
      return fr(e.uiModel.filterExpression, e.model);
    }
    return (n, l) => u() ? (S(!0), D(St, { key: 0 }, Dt(s.uiModel.components, (h) => (S(), X(fa, {
      key: h.name,
      component: h,
      model: s.model
    }, null, 8, ["component", "model"]))), 128)) : oe("", !0);
  }
});
function Ca(s) {
  const e = s;
  return !!e && typeof e.eIsProxy == "function" && e.eIsProxy();
}
function Da(s, e) {
  const t = e.getResourceSet(), r = s.eProxyURI();
  if (!r) return s;
  const i = r.toString(), u = i.indexOf("#");
  if (u > 0) {
    const l = i.substring(0, u), h = i.substring(u + 1);
    if (!t) return s;
    const c = e.getURI(), E = [];
    c && !l.includes("://") && E.push(Kr.createURI(l).resolve(c).toString()), E.push(l);
    for (const g of E) {
      const o = t.getResource(Kr.createURI(g), !1), p = o?.getEObject(h);
      if (p) return p;
    }
    return s;
  }
  const n = u === 0 ? i.substring(1) : i;
  return e.getEObject(n) ?? s;
}
function Ra(s, e) {
  for (const t of s.eClass().getEAllReferences()) {
    const r = s.eGet(t);
    if (r) {
      if (t.isMany()) {
        const i = r;
        for (let u = 0; u < i.length; u++) {
          const n = i[u];
          if (Ca(n)) {
            const l = Da(n, e);
            l !== n && (i[u] = l);
          }
        }
      } else if (Ca(r)) {
        const i = Da(r, e);
        i !== r && s.eSet(t, i);
      }
    }
  }
}
function Jl(s) {
  for (const e of s.getContents()) {
    Ra(e, s);
    for (const t of e.eAllContents())
      Ra(t, s);
  }
}
const Zl = "VariableWrapper", eo = "VARIABLEWRAPPER";
function Ni(s) {
  return typeof s?.eClass == "function";
}
const to = /* @__PURE__ */ new Set([
  "_eResource",
  "_eContainer",
  "_eContainerFeature",
  "_eProxyURI",
  "_eAdapters",
  "_eDeliver",
  "eSettings"
]);
function so(s) {
  if (!to.has(s))
    return s.startsWith("_") ? s.slice(1) : s;
}
function ro(s) {
  if (!s || typeof s != "object") return;
  const e = s;
  if (e.type !== eo) return;
  const t = new zr(e._value);
  return typeof e.variable == "string" && (t.variable = e.variable), t;
}
function vi(s, e) {
  if (!e || typeof e != "object") return s;
  const t = e, r = s;
  for (const [i, u] of Object.entries(t)) {
    const n = so(i);
    if (n && !(i.startsWith("_") && n in t))
      try {
        r[n] = ro(u) ?? u;
      } catch {
      }
  }
  return s;
}
function ma(s) {
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
    if (i !== Zl) continue;
    const u = e[r];
    if (!(u instanceof zr))
      try {
        e[r] = new zr(u);
      } catch {
      }
  }
  return s;
}
function Li(s, e) {
  return ma(Ni(s) ? s : vi(e(), s));
}
const ao = /color|colour|background|^fill$|^stroke$/i, io = /size|width|height|radius|blur|padding|transparence|transparency|opacity|zoom|count|index/i, uo = /^(is|has|show|enable|fullscreen|visible)/i;
function Br(s) {
  const e = s.getName?.() ?? "", t = s.getEType?.()?.getName?.() ?? "";
  return t === "EBoolean" || uo.test(e) ? "flag" : t === "EInt" || t === "EDouble" || io.test(e) ? "number" : ao.test(e) ? "colour" : "text";
}
function Tr(s) {
  const t = (s.getName?.() ?? "").replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function $r(s, e = s.getName?.() ?? "Settings") {
  const t = ga.eINSTANCE, r = t.createFormView();
  r.name = e;
  for (const u of s.getEStructuralFeatures()) {
    const n = no(t, u);
    n.feature = u, n.label = Tr(u), r.fields.push(n);
  }
  const i = t.createUIModel();
  return i.name = e, i.targetClasses.push(s), i.components.push(r), i;
}
function no(s, e) {
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
const wa = /* @__PURE__ */ new Map(), _i = /* @__PURE__ */ new Map();
function Oi(s) {
  return _i.get(s);
}
function lo(s) {
  for (const e of s.targetClasses ?? [])
    e && _i.set(e, s);
}
let Fa = !1;
function oo() {
  if (Fa) return;
  Ui();
  const s = R.eINSTANCE;
  s.setEFactoryInstance(ga.eINSTANCE), yr.INSTANCE.set(s.getNsURI(), s), Fa = !0;
}
function la(s, e, t = "/ui.xmi") {
  const r = wa.get(t);
  if (r) return r;
  try {
    oo();
    const i = e.getNsURI();
    i && !yr.INSTANCE.has(i) && yr.INSTANCE.set(i, e);
    const u = new Mi();
    u.getResourceFactoryRegistry().getExtensionToFactoryMap().set("xmi", new Vi());
    const n = u.createResource(Kr.createURI(t));
    if (n.loadFromString(s), n.getContents().size() === 0) return;
    Jl(n);
    const l = n.getContents().get(0);
    return wa.set(t, l), lo(l), l;
  } catch (i) {
    console.warn("[ui.vue.uimodel] UI-Modell konnte nicht gelesen werden:", i);
    return;
  }
}
const co = { class: "list" }, Eo = { class: "list__head" }, ho = { class: "list__label" }, go = { class: "list__count" }, po = {
  key: 0,
  class: "list__untyped"
}, fo = {
  key: 1,
  class: "list__empty"
}, To = ["aria-expanded", "onClick"], So = { class: "entry__twist" }, mo = { class: "entry__title" }, Io = {
  key: 0,
  class: "entry__actions"
}, No = ["disabled", "onClick"], vo = ["disabled", "onClick"], Lo = ["onClick"], _o = {
  key: 1,
  class: "entry__body"
}, Oo = /* @__PURE__ */ ne({
  __name: "SettingsListWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = T(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? Tr(e.feature) : "")
    ), r = T(() => e.custom?.resolvedStyle?.readOnly === !0);
    function i() {
      const f = e.feature?.getName?.();
      if (!(!f || !e.eObject))
        return e.eObject[f];
    }
    const u = T(() => {
      const f = i();
      return f ? typeof f.toArray == "function" ? f.toArray() : Array.isArray(f) ? f : [] : [];
    }), n = T(() => {
      try {
        return e.feature?.getEReferenceType?.() ?? void 0;
      } catch {
        return;
      }
    }), l = /* @__PURE__ */ new Map(), h = T(() => {
      const f = n.value;
      if (!f) return;
      const N = Oi(f);
      return N || (l.has(f) || l.set(f, $r(f, f.getName?.() ?? "Eintrag")), l.get(f));
    }), c = dr(0), E = ["label", "name", "title", "key", "className", "id"];
    function g(f, N) {
      return o(f) ?? `${n.value?.getName?.() ?? "Eintrag"} ${N + 1}`;
    }
    function o(f, N = 1) {
      if (typeof f?.eClass != "function") return;
      const G = f;
      let y;
      try {
        y = [...f.eClass().getEStructuralFeatures()];
      } catch {
        return;
      }
      for (const M of E) {
        if (!y.some((he) => he.getName?.() === M)) continue;
        const j = G[M], U = j && typeof j == "object" ? j.value : j;
        if (U != null && String(U) !== "") return String(U);
      }
      if (!(N < 1))
        for (const M of y) {
          const j = M.getName?.(), U = j ? o(G[j], N - 1) : void 0;
          if (U) return U;
        }
    }
    function p() {
      const f = n.value, N = e.feature?.getName?.();
      if (!f || !N || !e.eObject) return;
      const y = f.getEPackage?.()?.getEFactoryInstance?.()?.create(f);
      if (!y) return;
      ma(y);
      const M = i();
      if (M) {
        if (typeof M.add == "function") M.add(y);
        else if (Array.isArray(M)) M.push(y);
        else return;
        c.value = u.value.length - 1;
      }
    }
    function B(f) {
      const N = i();
      if (N) {
        if (typeof N.removeAt == "function") N.removeAt(f);
        else if (Array.isArray(N)) N.splice(f, 1);
        else return;
        c.value = Math.min(c.value, Math.max(u.value.length - 1, 0));
      }
    }
    function V(f, N) {
      const G = i();
      if (!G) return;
      const y = f + N;
      if (!(y < 0 || y >= u.value.length)) {
        if (typeof G.move == "function") G.move(y, f);
        else if (Array.isArray(G)) {
          const [M] = G.splice(f, 1);
          G.splice(y, 0, M);
        } else return;
        c.value = y;
      }
    }
    return (f, N) => (S(), D("section", co, [
      ie("header", Eo, [
        ie("span", ho, Ye(t.value), 1),
        ie("span", go, Ye(u.value.length), 1),
        N[1] || (N[1] = ie("span", { class: "list__spacer" }, null, -1)),
        n.value && !r.value ? (S(), X(ue(Bi), {
          key: 0,
          size: "sm",
          onClick: p
        }, {
          default: Di(() => [...N[0] || (N[0] = [
            Va("Hinzufügen", -1)
          ])]),
          _: 1
        })) : oe("", !0)
      ]),
      n.value ? u.value.length ? oe("", !0) : (S(), D("p", fo, "Noch nichts angelegt.")) : (S(), D("p", po, " Diese Liste ist im Modell ohne Typ angegeben - es steht dort nur, dass es mehrere sind, nicht wovon. Solange das so ist, lässt sich hier nichts zeigen. ")),
      (S(!0), D(St, null, Dt(u.value, (G, y) => (S(), D("div", {
        key: y,
        class: "entry"
      }, [
        ie("button", {
          type: "button",
          class: "entry__head",
          "aria-expanded": c.value === y,
          onClick: (M) => c.value = c.value === y ? -1 : y
        }, [
          ie("span", So, Ye(c.value === y ? "▾" : "▸"), 1),
          ie("span", mo, Ye(g(G, y)), 1)
        ], 8, To),
        r.value ? oe("", !0) : (S(), D("span", Io, [
          ie("button", {
            type: "button",
            title: "Nach oben",
            disabled: y === 0,
            onClick: (M) => V(y, -1)
          }, "↑", 8, No),
          ie("button", {
            type: "button",
            title: "Nach unten",
            disabled: y === u.value.length - 1,
            onClick: (M) => V(y, 1)
          }, " ↓ ", 8, vo),
          ie("button", {
            type: "button",
            title: "Entfernen",
            class: "entry__remove",
            onClick: (M) => B(y)
          }, "✕", 8, Lo)
        ])),
        c.value === y ? (S(), D("div", _o, [
          h.value ? (S(), X(ue(Sa), {
            key: 0,
            "ui-model": h.value,
            model: G
          }, null, 8, ["ui-model", "model"])) : oe("", !0)
        ])) : oe("", !0)
      ]))), 128))
    ]));
  }
}), kr = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, Ai = /* @__PURE__ */ kr(Oo, [["__scopeId", "data-v-b0db9508"]]), Ao = { class: "object" }, yo = {
  key: 0,
  class: "object__label"
}, Co = {
  key: 1,
  class: "object__untyped"
}, Do = {
  key: 2,
  class: "object__body"
}, Ro = /* @__PURE__ */ ne({
  __name: "SettingsObjectWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = T(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? Tr(e.feature) : "")
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
      o && (ma(o), e.eObject[E] = o);
    }
    ds(() => [e.eObject, e.feature], u, { immediate: !0 });
    const n = T(() => i()), l = /* @__PURE__ */ new Map(), h = T(() => {
      const c = r.value;
      if (!c) return;
      const E = Oi(c);
      return E || (l.has(c) || l.set(c, $r(c, c.getName?.() ?? "Eintrag")), l.get(c));
    });
    return (c, E) => (S(), D("section", Ao, [
      t.value ? (S(), D("span", yo, Ye(t.value), 1)) : oe("", !0),
      r.value ? (S(), D("div", Do, [
        h.value && n.value ? (S(), X(ue(Sa), {
          key: 0,
          "ui-model": h.value,
          model: n.value
        }, null, 8, ["ui-model", "model"])) : oe("", !0)
      ])) : (S(), D("p", Co, " Diese Einstellung ist im Modell ohne Typ angegeben - es steht dort nur, dass etwas enthalten ist, nicht was. Solange das so ist, lässt sich hier nichts zeigen. "))
    ]));
  }
}), yi = /* @__PURE__ */ kr(Ro, [["__scopeId", "data-v-8adcf520"]]), wo = { class: "field-row__control" }, Fo = {
  key: 2,
  class: "set"
}, Po = { class: "set__label" }, bo = ["title", "aria-pressed"], Mo = /* @__PURE__ */ ne({
  __name: "SettingsFieldWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = Tt(Wi), r = T(() => {
      const d = i();
      return u(d) ? d : void 0;
    });
    function i() {
      const { eObject: d, feature: L } = e;
      if (!d || !L) return;
      const A = L.getName?.();
      return A ? d[A] : void 0;
    }
    function u(d) {
      return typeof d?.setTo == "function";
    }
    const n = T(() => e.feature != null && l(e.feature));
    function l(d) {
      try {
        return d.getEReferenceType?.()?.getName?.() === "VariableWrapper";
      } catch {
        return !1;
      }
    }
    const h = T(() => {
      try {
        return e.feature?.isMany?.() === !0 || (e.feature?.getUpperBound?.() ?? 1) !== 1;
      } catch {
        return !1;
      }
    });
    function c() {
      const d = e.feature?.getName?.();
      if (!(!d || !e.eObject))
        return e.eObject[d];
    }
    const E = T(() => {
      const d = c();
      return d ? typeof d.toArray == "function" ? d.toArray() : Array.isArray(d) ? d : [] : [];
    });
    function g(d) {
      return E.value.some((L) => L === d);
    }
    function o(d, L) {
      const A = c();
      if (!A || !U.value) return;
      if (L) {
        if (g(d)) return;
        typeof A.add == "function" ? A.add(d) : Array.isArray(A) && A.push(d);
        return;
      }
      const ee = E.value.findIndex((ae) => ae === d);
      ee < 0 || (typeof A.removeAt == "function" ? A.removeAt(ee) : Array.isArray(A) && A.splice(ee, 1));
    }
    const p = T({
      get: () => {
        const d = i();
        return B(d) ? d.value : d;
      },
      set: (d) => {
        const { eObject: L, feature: A } = e, ee = A?.getName?.();
        if (!L || !ee) return;
        const ae = i();
        if (B(ae)) {
          ae.value = d;
          return;
        }
        L[ee] = d;
      }
    });
    function B(d) {
      return !!d && typeof d == "object" && "value" in d;
    }
    const V = T(() => n.value ? r.value?.variable ?? "" : ""), f = T(() => !!V.value), N = dr(!1);
    ds(f, (d) => {
      d && (N.value = !0);
    }, { immediate: !0 });
    const G = T(() => {
      try {
        return (t?.getAllVariables() ?? []).map(([d]) => d);
      } catch {
        return [];
      }
    }), y = T({
      get: () => V.value,
      set: (d) => {
        if (!r.value) return;
        if (!d) return M();
        const L = t?.getVariable(d);
        L && r.value.setTo(L);
      }
    });
    function M() {
      r.value && (r.value.value = r.value.value, N.value = !1);
    }
    function j() {
      f.value ? M() : N.value = !N.value;
    }
    const U = T(() => !e.custom?.resolvedStyle?.readOnly && !f.value), he = T(() => f.value ? `Von „${V.value}“` : void 0), H = T({
      get: () => (n.value ? r.value?.value : p.value) ?? "",
      set: (d) => {
        U.value && (n.value ? r.value && (r.value.value = d) : p.value = d);
      }
    }), $e = T({
      get: () => {
        const d = n.value ? r.value?.value : p.value;
        if (d == null || d === "") return "";
        const L = Number(d);
        return Number.isFinite(L) ? L : "";
      },
      set: (d) => {
        if (!U.value) return;
        const L = d === "" || d === null ? void 0 : Number(d);
        H.value = L !== void 0 && Number.isFinite(L) ? L : void 0;
      }
    }), we = T({
      get: () => H.value === !0 || H.value === "true",
      set: (d) => {
        H.value = d;
      }
    }), Je = T(() => e.custom?.rawWidget?.eClass?.()?.getName?.() ?? ""), Fe = T(() => {
      const d = e.feature?.getEType?.()?.getName?.();
      return d === "EInt" || d === "EDouble" || d === "ELong" || d === "EFloat";
    }), ke = T(() => {
      const d = e.custom?.rawWidget, L = d?.values, A = L && typeof L.map == "function" ? [...L] : [], ee = d?.optionLabel;
      return A.map((ae) => {
        const tt = Fe.value ? Number(ae) : ae;
        let Ce = ae;
        if (ee?.body && e.eObject)
          try {
            const xe = Yr(ee, e.eObject, { option: ae });
            xe != null && xe !== "" && (Ce = String(xe));
          } catch {
          }
        return { value: tt, text: Ce };
      });
    }), Ze = T(() => Number(e.custom?.rawWidget?.rows) || 6), q = T(() => ({
      min: e.custom?.rawWidget?.min,
      max: e.custom?.rawWidget?.max,
      step: e.custom?.rawWidget?.step
    })), ge = T(() => {
      if (h.value) return "set";
      switch (Je.value) {
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
    }), le = T(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? Tr(e.feature) : "")
    ), et = T(() => N.value && G.value.length === 0);
    return (d, L) => r.value || !n.value ? (S(), D("div", {
      key: 0,
      class: Ia(["field-row", { "field-row--bound": f.value }])
    }, [
      ie("div", wo, [
        N.value && !et.value ? (S(), X(ue(va), {
          key: 0,
          modelValue: y.value,
          "onUpdate:modelValue": L[0] || (L[0] = (A) => y.value = A),
          label: le.value,
          options: G.value,
          disabled: s.custom?.resolvedStyle?.readOnly,
          placeholder: "Keine Variable",
          clearable: ""
        }, null, 8, ["modelValue", "label", "options", "disabled"])) : et.value ? (S(), X(ue(Sr), {
          key: 1,
          "model-value": "",
          label: le.value,
          disabled: "",
          hint: "Es sind noch keine Variablen angelegt."
        }, null, 8, ["label"])) : ge.value === "set" ? (S(), D("fieldset", Fo, [
          ie("legend", Po, Ye(le.value), 1),
          (S(!0), D(St, null, Dt(ke.value, (A) => (S(), X(ue(La), {
            key: String(A.value),
            "model-value": g(A.value),
            label: A.text,
            disabled: !U.value,
            "onUpdate:modelValue": (ee) => o(A.value, ee)
          }, null, 8, ["model-value", "label", "disabled", "onUpdate:modelValue"]))), 128))
        ])) : ge.value === "flag" ? (S(), X(ue(La), {
          key: 3,
          modelValue: we.value,
          "onUpdate:modelValue": L[1] || (L[1] = (A) => we.value = A),
          label: le.value,
          disabled: !U.value
        }, null, 8, ["modelValue", "label", "disabled"])) : ge.value === "choice" ? (S(), X(ue(va), {
          key: 4,
          modelValue: H.value,
          "onUpdate:modelValue": L[2] || (L[2] = (A) => H.value = A),
          label: le.value,
          options: ke.value,
          "value-key": "value",
          "label-key": "text",
          disabled: !U.value,
          clearable: ""
        }, null, 8, ["modelValue", "label", "options", "disabled"])) : ge.value === "colour" ? (S(), X(ue(Gi), {
          key: 5,
          modelValue: H.value,
          "onUpdate:modelValue": L[3] || (L[3] = (A) => H.value = A),
          label: le.value,
          disabled: !U.value,
          hint: he.value ?? s.custom?.resolvedStyle?.placeholder
        }, null, 8, ["modelValue", "label", "disabled", "hint"])) : ge.value === "lines" ? (S(), X(ue(Sr), {
          key: 6,
          modelValue: H.value,
          "onUpdate:modelValue": L[4] || (L[4] = (A) => H.value = A),
          label: le.value,
          rows: Ze.value,
          placeholder: s.custom?.resolvedStyle?.placeholder,
          disabled: !U.value
        }, null, 8, ["modelValue", "label", "rows", "placeholder", "disabled"])) : ge.value === "number" ? (S(), X(ue(Sr), {
          key: 7,
          modelValue: $e.value,
          "onUpdate:modelValue": L[5] || (L[5] = (A) => $e.value = A),
          label: le.value,
          type: "number",
          min: q.value.min,
          max: q.value.max,
          step: q.value.step,
          disabled: !U.value
        }, null, 8, ["modelValue", "label", "min", "max", "step", "disabled"])) : (S(), X(ue(Sr), {
          key: 8,
          modelValue: H.value,
          "onUpdate:modelValue": L[6] || (L[6] = (A) => H.value = A),
          label: le.value,
          placeholder: s.custom?.resolvedStyle?.placeholder,
          disabled: !U.value
        }, null, 8, ["modelValue", "label", "placeholder", "disabled"]))
      ]),
      n.value ? (S(), D("button", {
        key: 0,
        type: "button",
        class: Ia(["bind", { on: f.value, armed: N.value && !f.value }]),
        title: f.value ? `Bindung an „${V.value}“ lösen` : "An eine Variable binden",
        "aria-pressed": f.value,
        onClick: j
      }, " {x} ", 10, bo)) : oe("", !0)
    ], 2)) : oe("", !0);
  }
}), Gr = /* @__PURE__ */ kr(Mo, [["__scopeId", "data-v-36ae1ee2"]]), Vo = "org.eclipse.daanse.board.app.ui.vue.composables";
let Pa = !1;
function Uo() {
  if (Pa) return !0;
  const s = yr.INSTANCE.getEPackage(Vo)?.getEClassifier(
    "VariableWrapper"
  );
  return s ? (ze.registerForReference(Gr, { targetClass: s }), Pa = !0, !0) : !1;
}
function oa(s, e = /* @__PURE__ */ new Set()) {
  if (!e.has(s)) {
    e.add(s);
    for (const t of s.getEStructuralFeatures()) {
      if (Go(t)) {
        if (ba(t)) {
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
          Ai
        );
        const r = t.getEReferenceType?.();
        r && oa(r, e);
        continue;
      }
      if (Bo(t)) {
        ze.registerForFeature(
          s,
          t.getName?.() ?? "",
          yi
        );
        const r = t.getEReferenceType?.();
        r && oa(r, e);
        continue;
      }
      ba(t) && ze.registerForFeature(
        s,
        t.getName?.() ?? "",
        Gr
      );
    }
  }
}
function ba(s) {
  try {
    return s.getEReferenceType?.() == null;
  } catch {
    return !0;
  }
}
function Bo(s) {
  try {
    const e = s.getEReferenceType?.();
    return e ? e.getName?.() !== "VariableWrapper" : !1;
  } catch {
    return !1;
  }
}
function Go(s) {
  try {
    return s.isMany?.() === !0 || (s.getUpperBound?.() ?? 1) !== 1;
  } catch {
    return !1;
  }
}
const Wo = { class: "settings-form" }, Yo = {
  key: 1,
  class: "settings-form__empty"
}, $o = /* @__PURE__ */ ne({
  __name: "SettingsForm",
  props: /* @__PURE__ */ Ri({
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
    R.eINSTANCE, Ir(fi, ze), Uo();
    const e = wi(s, "modelValue"), t = s;
    function r() {
      const c = Li(e.value, t.create);
      c !== e.value && (e.value = c);
    }
    Fi(r), ds(e, r);
    const i = T(() => e.value), u = Na(), n = Na(), l = T(() => {
      const c = e.value?.eClass?.();
      if (c && oa(c), t.uiModel) return xr(t.uiModel);
      if (t.domainPackage)
        for (const o of t.entryForms ?? [])
          la(o.xmi, t.domainPackage, o.uri);
      if (t.uiModelXmi && t.domainPackage) {
        const o = la(t.uiModelXmi, t.domainPackage, t.uiModelUri);
        if (o) return xr(o);
      }
      const g = i.value?.eClass?.();
      if (g)
        return n.value !== g && (n.value = g, u.value = xr($r(g))), u.value;
    }), h = T(() => (i.value?.eClass?.().getEStructuralFeatures().length ?? 0) > 0);
    return (c, E) => (S(), D("div", Wo, [
      l.value && i.value && h.value ? (S(), X(ue(Sa), {
        key: 0,
        "ui-model": l.value,
        model: i.value
      }, null, 8, ["ui-model", "model"])) : (S(), D("p", Yo, Ye(s.emptyText ?? "Für dieses Widget sind keine Einstellungen modelliert."), 1))
    ]));
  }
}), ko = /* @__PURE__ */ kr($o, [["__scopeId", "data-v-2eb13ad3"]]), xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SettingsFieldWidget: Gr,
  SettingsForm: ko,
  SettingsListWidget: Ai,
  SettingsObjectWidget: yi,
  adopt: vi,
  asModel: Li,
  formFor: $r,
  isModelled: Ni,
  kindOf: Br,
  labelOf: Tr,
  loadUIModel: la
}, Symbol.toStringTag, { value: "Module" })), Ma = "org.eclipse.daanse.board.app.ui.vue.uimodel", Xo = "0.0.1-next.1";
async function rc(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${Ma}: tsm runtime is not initialized`);
  e.register(Ma, xo, Xo, "ui.vue.uimodel"), await void 0;
}
async function ac(s) {
  await void 0;
}
export {
  Gr as SettingsFieldWidget,
  ko as SettingsForm,
  Ai as SettingsListWidget,
  yi as SettingsObjectWidget,
  rc as activate,
  vi as adopt,
  Li as asModel,
  ac as deactivate,
  $r as formFor,
  Ni as isModelled,
  Br as kindOf,
  Tr as labelOf,
  la as loadUIModel
};
