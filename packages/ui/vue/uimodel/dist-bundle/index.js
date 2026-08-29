(function(){var i="ui.vue.uimodel",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".list[data-v-4eca8f08]{margin-bottom:12px}.list__head[data-v-4eca8f08]{display:flex;align-items:center;gap:7px;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid var(--color-divider)}.list__label[data-v-4eca8f08]{font-family:var(--font-sans);font-size:var(--text-sm);font-weight:600;color:var(--color-fg)}.list__count[data-v-4eca8f08]{font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.list__spacer[data-v-4eca8f08]{flex:1 1 auto}.list__empty[data-v-4eca8f08],.list__untyped[data-v-4eca8f08]{margin:0 0 8px;font-size:var(--text-xs);line-height:1.5;color:var(--color-dim)}.entry[data-v-4eca8f08]{position:relative;margin-bottom:3px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.entry__head[data-v-4eca8f08]{display:flex;align-items:center;gap:6px;width:100%;padding:5px 78px 5px 8px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);text-align:left;background:none;border:0;cursor:pointer}.entry__twist[data-v-4eca8f08]{width:10px;font-size:var(--text-xs);color:var(--color-dim)}.entry__actions[data-v-4eca8f08]{position:absolute;top:3px;right:5px;display:flex;gap:2px}.entry__actions button[data-v-4eca8f08]{width:20px;height:20px;font-size:var(--text-xs);color:var(--color-dim);background:none;border:1px solid transparent;border-radius:var(--radius-xs);cursor:pointer}.entry__actions button[data-v-4eca8f08]:hover:not(:disabled){color:var(--color-fg);border-color:var(--color-divider)}.entry__actions button[data-v-4eca8f08]:disabled{opacity:.3;cursor:default}.entry__remove[data-v-4eca8f08]:hover:not(:disabled){color:var(--color-err)}.entry__actions button[data-v-4eca8f08]:focus-visible,.entry__head[data-v-4eca8f08]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.entry__body[data-v-4eca8f08]{padding:8px 10px 10px;border-top:1px solid var(--color-divider)}.field-row[data-v-01463c81]{display:flex;align-items:flex-start;gap:6px}.field-row__control[data-v-01463c81]{flex:1 1 auto;min-width:0}.field-row--bound[data-v-01463c81]{border-left:2px solid var(--color-brand);padding-left:6px;margin-left:-8px}.bind[data-v-01463c81]{width:24px;height:26px;flex:none;margin-top:0;font-family:var(--font-mono);font-size:var(--text-xs);font-style:italic;color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.bind[data-v-01463c81]:hover{color:var(--color-fg);border-color:var(--color-outline)}.bind.armed[data-v-01463c81]{color:var(--color-accent);border-color:var(--color-accent)}.bind.on[data-v-01463c81]{color:var(--color-brand);border-color:var(--color-brand);background-color:color-mix(in srgb,var(--color-brand) 14%,transparent)}.bind[data-v-01463c81]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.settings-form[data-v-5d0a6b97]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.settings-form[data-v-5d0a6b97] .uim-c-GroupWidget{padding-top:10px;margin-top:12px;border-top:1px solid var(--color-divider)}.settings-form[data-v-5d0a6b97] .uim-c-GroupWidget:first-child{padding-top:0;margin-top:0;border-top:0}.settings-form[data-v-5d0a6b97] .uim-group-label{display:block;margin-bottom:7px;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:650;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim)}.settings-form__empty[data-v-5d0a6b97]{margin:0;padding:12px 0;font-size:var(--text-sm);color:var(--color-dim)}\n";})();
import { inject as et, watchEffect as Li, onScopeDispose as aa, ref as gr, computed as m, watch as dr, toValue as Me, defineComponent as ee, createBlock as q, createCommentVNode as fe, openBlock as N, resolveDynamicComponent as ia, mergeProps as ua, createElementBlock as b, createElementVNode as J, createTextVNode as Da, toDisplayString as qe, unref as de, createVNode as Er, Fragment as ht, renderList as ls, provide as fr, withCtx as vi, normalizeClass as pa, mergeModels as _i, useModel as Oi, onMounted as Ai, shallowRef as Ta, markRaw as Gr } from "vue";
import { BasicEPackage as Ci, BasicEClass as R, BasicEAttribute as T, BasicEReference as I, getEcorePackage as Qt, BasicEObject as tt, BasicEFactory as yi, EContentAdapter as Ra, URI as Xr, EPackageRegistry as Or, BasicResourceSet as Di, XMIResourceFactory as Ri, registerEcorePackage as wi } from "@emfts/core";
import { VariableWrapper as Fi } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DButton as Pi, DSelect as Sa, DInput as Wr, DCheckbox as bi, DColorInput as Mi } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { identifier as Ui } from "org.eclipse.daanse.board.app.lib.api.variable";
var Vi = Object.defineProperty, Bi = (s, e, t) => e in s ? Vi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ir = (s, e, t) => Bi(s, typeof e != "symbol" ? e + "" : e, t);
const Jt = class a extends Ci {
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
    const e = new R();
    e.setName("UIModel"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), a.Literals.U_I_MODEL = e;
    const t = new T();
    t.setName("name"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), a.Literals.U_I_MODEL__NAME = t;
    const r = new I();
    r.setContainment(!1), r.setName("targetClasses"), r.setLowerBound(0), r.setUpperBound(-1), e.getEStructuralFeatures().push(r), a.Literals.U_I_MODEL__TARGET_CLASSES = r;
    const i = new T();
    i.setName("priority"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), a.Literals.U_I_MODEL__PRIORITY = i;
    const u = new I();
    u.setContainment(!0), u.setName("filterExpression"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), a.Literals.U_I_MODEL__FILTER_EXPRESSION = u;
    const n = new I();
    n.setContainment(!0), n.setName("styles"), n.setLowerBound(0), n.setUpperBound(-1), e.getEStructuralFeatures().push(n), a.Literals.U_I_MODEL__STYLES = n;
    const l = new I();
    l.setContainment(!0), l.setName("templates"), l.setLowerBound(0), l.setUpperBound(-1), e.getEStructuralFeatures().push(l), a.Literals.U_I_MODEL__TEMPLATES = l;
    const g = new I();
    g.setContainment(!0), g.setName("components"), g.setLowerBound(1), g.setUpperBound(-1), e.getEStructuralFeatures().push(g), a.Literals.U_I_MODEL__COMPONENTS = g;
    const c = new R();
    c.setName("Component"), c.setAbstract(!0), c.setInterface(!1), this.getEClassifiers().push(c), c.setEPackage(this), a.Literals.COMPONENT = c;
    const E = new T();
    E.setName("name"), E.setLowerBound(1), E.setUpperBound(1), c.getEStructuralFeatures().push(E), a.Literals.COMPONENT__NAME = E;
    const h = new T();
    h.setName("group"), h.setLowerBound(0), h.setUpperBound(1), c.getEStructuralFeatures().push(h), a.Literals.COMPONENT__GROUP = h;
    const o = new I();
    o.setContainment(!1), o.setName("targetClasses"), o.setLowerBound(0), o.setUpperBound(-1), c.getEStructuralFeatures().push(o), a.Literals.COMPONENT__TARGET_CLASSES = o;
    const d = new I();
    d.setContainment(!1), d.setName("styles"), d.setLowerBound(0), d.setUpperBound(-1), c.getEStructuralFeatures().push(d), a.Literals.COMPONENT__STYLES = d;
    const p = new I();
    p.setContainment(!1), p.setName("children"), p.setLowerBound(0), p.setUpperBound(-1), c.getEStructuralFeatures().push(p), a.Literals.COMPONENT__CHILDREN = p;
    const L = new R();
    L.setName("FormView"), L.setAbstract(!1), L.setInterface(!1), this.getEClassifiers().push(L), L.setEPackage(this), a.Literals.FORM_VIEW = L;
    const C = new I();
    C.setContainment(!0), C.setName("fields"), C.setLowerBound(0), C.setUpperBound(-1), L.getEStructuralFeatures().push(C), a.Literals.FORM_VIEW__FIELDS = C;
    const f = new I();
    f.setContainment(!0), f.setName("validations"), f.setLowerBound(0), f.setUpperBound(-1), L.getEStructuralFeatures().push(f), a.Literals.FORM_VIEW__VALIDATIONS = f;
    const M = new I();
    M.setContainment(!0), M.setName("validationMappers"), M.setLowerBound(0), M.setUpperBound(-1), L.getEStructuralFeatures().push(M), a.Literals.FORM_VIEW__VALIDATION_MAPPERS = M;
    const Q = new T();
    Q.setName("mapperOrder"), Q.setLowerBound(0), Q.setUpperBound(1), L.getEStructuralFeatures().push(Q), a.Literals.FORM_VIEW__MAPPER_ORDER = Q;
    const re = new R();
    re.setName("TableView"), re.setAbstract(!1), re.setInterface(!1), this.getEClassifiers().push(re), re.setEPackage(this), a.Literals.TABLE_VIEW = re;
    const y = new I();
    y.setContainment(!0), y.setName("tableStyle"), y.setLowerBound(1), y.setUpperBound(1), re.getEStructuralFeatures().push(y), a.Literals.TABLE_VIEW__TABLE_STYLE = y;
    const P = new R();
    P.setName("SectionView"), P.setAbstract(!1), P.setInterface(!1), this.getEClassifiers().push(P), P.setEPackage(this), a.Literals.SECTION_VIEW = P;
    const Y = new I();
    Y.setContainment(!0), Y.setName("sections"), Y.setLowerBound(1), Y.setUpperBound(-1), P.getEStructuralFeatures().push(Y), a.Literals.SECTION_VIEW__SECTIONS = Y;
    const st = new R();
    st.setName("TabView"), st.setAbstract(!1), st.setInterface(!1), this.getEClassifiers().push(st), st.setEPackage(this), a.Literals.TAB_VIEW = st;
    const Tt = new I();
    Tt.setContainment(!0), Tt.setName("tabs"), Tt.setLowerBound(1), Tt.setUpperBound(-1), st.getEStructuralFeatures().push(Tt), a.Literals.TAB_VIEW__TABS = Tt;
    const rt = new R();
    rt.setName("SummaryView"), rt.setAbstract(!1), rt.setInterface(!1), this.getEClassifiers().push(rt), rt.setEPackage(this), a.Literals.SUMMARY_VIEW = rt;
    const St = new I();
    St.setContainment(!0), St.setName("summaryFields"), St.setLowerBound(1), St.setUpperBound(-1), rt.getEStructuralFeatures().push(St), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS = St;
    const Ue = new R();
    Ue.setName("MasterDetail"), Ue.setAbstract(!1), Ue.setInterface(!1), this.getEClassifiers().push(Ue), Ue.setEPackage(this), a.Literals.MASTER_DETAIL = Ue;
    const ft = new I();
    ft.setContainment(!0), ft.setName("master"), ft.setLowerBound(1), ft.setUpperBound(1), Ue.getEStructuralFeatures().push(ft), a.Literals.MASTER_DETAIL__MASTER = ft;
    const mt = new I();
    mt.setContainment(!0), mt.setName("detail"), mt.setLowerBound(1), mt.setUpperBound(1), Ue.getEStructuralFeatures().push(mt), a.Literals.MASTER_DETAIL__DETAIL = mt;
    const Z = new R();
    Z.setName("WidgetComponent"), Z.setAbstract(!0), Z.setInterface(!1), this.getEClassifiers().push(Z), Z.setEPackage(this), a.Literals.WIDGET_COMPONENT = Z;
    const It = new I();
    It.setContainment(!1), It.setName("feature"), It.setLowerBound(0), It.setUpperBound(1), Z.getEStructuralFeatures().push(It), a.Literals.WIDGET_COMPONENT__FEATURE = It;
    const os = new T();
    os.setName("label"), os.setLowerBound(0), os.setUpperBound(1), Z.getEStructuralFeatures().push(os), a.Literals.WIDGET_COMPONENT__LABEL = os;
    const cs = new T();
    cs.setName("placeholder"), cs.setLowerBound(0), cs.setUpperBound(1), Z.getEStructuralFeatures().push(cs), a.Literals.WIDGET_COMPONENT__PLACEHOLDER = cs;
    const Es = new T();
    Es.setName("readOnly"), Es.setLowerBound(0), Es.setUpperBound(1), Z.getEStructuralFeatures().push(Es), a.Literals.WIDGET_COMPONENT__READ_ONLY = Es;
    const hs = new T();
    hs.setName("required"), hs.setLowerBound(0), hs.setUpperBound(1), Z.getEStructuralFeatures().push(hs), a.Literals.WIDGET_COMPONENT__REQUIRED = hs;
    const Nt = new I();
    Nt.setContainment(!0), Nt.setName("visibilityCondition"), Nt.setLowerBound(0), Nt.setUpperBound(1), Z.getEStructuralFeatures().push(Nt), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION = Nt;
    const Lt = new I();
    Lt.setContainment(!0), Lt.setName("validations"), Lt.setLowerBound(0), Lt.setUpperBound(-1), Z.getEStructuralFeatures().push(Lt), a.Literals.WIDGET_COMPONENT__VALIDATIONS = Lt;
    const vt = new I();
    vt.setContainment(!0), vt.setName("validationMappers"), vt.setLowerBound(0), vt.setUpperBound(-1), Z.getEStructuralFeatures().push(vt), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS = vt;
    const _t = new I();
    _t.setContainment(!0), _t.setName("bindings"), _t.setLowerBound(0), _t.setUpperBound(-1), Z.getEStructuralFeatures().push(_t), a.Literals.WIDGET_COMPONENT__BINDINGS = _t;
    const Ve = new R();
    Ve.setName("PropertyBinding"), Ve.setAbstract(!1), Ve.setInterface(!1), this.getEClassifiers().push(Ve), Ve.setEPackage(this), a.Literals.PROPERTY_BINDING = Ve;
    const gs = new T();
    gs.setName("property"), gs.setLowerBound(1), gs.setUpperBound(1), Ve.getEStructuralFeatures().push(gs), a.Literals.PROPERTY_BINDING__PROPERTY = gs;
    const Ot = new I();
    Ot.setContainment(!0), Ot.setName("expression"), Ot.setLowerBound(1), Ot.setUpperBound(1), Ve.getEStructuralFeatures().push(Ot), a.Literals.PROPERTY_BINDING__EXPRESSION = Ot;
    const Re = new R();
    Re.setName("InputWidget"), Re.setAbstract(!1), Re.setInterface(!1), this.getEClassifiers().push(Re), Re.setEPackage(this), a.Literals.INPUT_WIDGET = Re;
    const ds = new T();
    ds.setName("maxLength"), ds.setLowerBound(0), ds.setUpperBound(1), Re.getEStructuralFeatures().push(ds), a.Literals.INPUT_WIDGET__MAX_LENGTH = ds;
    const ps = new T();
    ps.setName("value"), ps.setLowerBound(0), ps.setUpperBound(1), Re.getEStructuralFeatures().push(ps), a.Literals.INPUT_WIDGET__VALUE = ps;
    const Ts = new T();
    Ts.setName("password"), Ts.setLowerBound(0), Ts.setUpperBound(1), Re.getEStructuralFeatures().push(Ts), a.Literals.INPUT_WIDGET__PASSWORD = Ts;
    const we = new R();
    we.setName("TextAreaWidget"), we.setAbstract(!1), we.setInterface(!1), this.getEClassifiers().push(we), we.setEPackage(this), a.Literals.TEXT_AREA_WIDGET = we;
    const Ss = new T();
    Ss.setName("rows"), Ss.setLowerBound(0), Ss.setUpperBound(1), we.getEStructuralFeatures().push(Ss), a.Literals.TEXT_AREA_WIDGET__ROWS = Ss;
    const fs = new T();
    fs.setName("maxLength"), fs.setLowerBound(0), fs.setUpperBound(1), we.getEStructuralFeatures().push(fs), a.Literals.TEXT_AREA_WIDGET__MAX_LENGTH = fs;
    const ms = new T();
    ms.setName("value"), ms.setLowerBound(0), ms.setUpperBound(1), we.getEStructuralFeatures().push(ms), a.Literals.TEXT_AREA_WIDGET__VALUE = ms;
    const Le = new R();
    Le.setName("NumberWidget"), Le.setAbstract(!1), Le.setInterface(!1), this.getEClassifiers().push(Le), Le.setEPackage(this), a.Literals.NUMBER_WIDGET = Le;
    const Is = new T();
    Is.setName("min"), Is.setLowerBound(0), Is.setUpperBound(1), Le.getEStructuralFeatures().push(Is), a.Literals.NUMBER_WIDGET__MIN = Is;
    const Ns = new T();
    Ns.setName("max"), Ns.setLowerBound(0), Ns.setUpperBound(1), Le.getEStructuralFeatures().push(Ns), a.Literals.NUMBER_WIDGET__MAX = Ns;
    const Ls = new T();
    Ls.setName("step"), Ls.setLowerBound(0), Ls.setUpperBound(1), Le.getEStructuralFeatures().push(Ls), a.Literals.NUMBER_WIDGET__STEP = Ls;
    const vs = new T();
    vs.setName("value"), vs.setLowerBound(0), vs.setUpperBound(1), Le.getEStructuralFeatures().push(vs), a.Literals.NUMBER_WIDGET__VALUE = vs;
    const Be = new R();
    Be.setName("CheckboxWidget"), Be.setAbstract(!1), Be.setInterface(!1), this.getEClassifiers().push(Be), Be.setEPackage(this), a.Literals.CHECKBOX_WIDGET = Be;
    const _s = new T();
    _s.setName("asToggle"), _s.setLowerBound(0), _s.setUpperBound(1), Be.getEStructuralFeatures().push(_s), a.Literals.CHECKBOX_WIDGET__AS_TOGGLE = _s;
    const Os = new T();
    Os.setName("value"), Os.setLowerBound(0), Os.setUpperBound(1), Be.getEStructuralFeatures().push(Os), a.Literals.CHECKBOX_WIDGET__VALUE = Os;
    const ve = new R();
    ve.setName("DateWidget"), ve.setAbstract(!1), ve.setInterface(!1), this.getEClassifiers().push(ve), ve.setEPackage(this), a.Literals.DATE_WIDGET = ve;
    const As = new T();
    As.setName("withTime"), As.setLowerBound(0), As.setUpperBound(1), ve.getEStructuralFeatures().push(As), a.Literals.DATE_WIDGET__WITH_TIME = As;
    const Cs = new T();
    Cs.setName("format"), Cs.setLowerBound(0), Cs.setUpperBound(1), ve.getEStructuralFeatures().push(Cs), a.Literals.DATE_WIDGET__FORMAT = Cs;
    const At = new I();
    At.setContainment(!1), At.setName("constrains"), At.setLowerBound(0), At.setUpperBound(1), ve.getEStructuralFeatures().push(At), a.Literals.DATE_WIDGET__CONSTRAINS = At;
    const ys = new T();
    ys.setName("value"), ys.setLowerBound(0), ys.setUpperBound(1), ve.getEStructuralFeatures().push(ys), a.Literals.DATE_WIDGET__VALUE = ys;
    const Fe = new R();
    Fe.setName("ComboboxWidget"), Fe.setAbstract(!1), Fe.setInterface(!1), this.getEClassifiers().push(Fe), Fe.setEPackage(this), a.Literals.COMBOBOX_WIDGET = Fe;
    const Ct = new I();
    Ct.setContainment(!0), Ct.setName("optionLabel"), Ct.setLowerBound(0), Ct.setUpperBound(1), Fe.getEStructuralFeatures().push(Ct), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL = Ct;
    const Ds = new T();
    Ds.setName("minSearchLength"), Ds.setLowerBound(0), Ds.setUpperBound(1), Fe.getEStructuralFeatures().push(Ds), a.Literals.COMBOBOX_WIDGET__MIN_SEARCH_LENGTH = Ds;
    const Rs = new T();
    Rs.setName("multiSelect"), Rs.setLowerBound(0), Rs.setUpperBound(1), Fe.getEStructuralFeatures().push(Rs), a.Literals.COMBOBOX_WIDGET__MULTI_SELECT = Rs;
    const _e = new R();
    _e.setName("SelectWidget"), _e.setAbstract(!1), _e.setInterface(!1), this.getEClassifiers().push(_e), _e.setEPackage(this), a.Literals.SELECT_WIDGET = _e;
    const yt = new I();
    yt.setContainment(!0), yt.setName("optionLabel"), yt.setLowerBound(0), yt.setUpperBound(1), _e.getEStructuralFeatures().push(yt), a.Literals.SELECT_WIDGET__OPTION_LABEL = yt;
    const ws = new T();
    ws.setName("multiSelect"), ws.setLowerBound(0), ws.setUpperBound(1), _e.getEStructuralFeatures().push(ws), a.Literals.SELECT_WIDGET__MULTI_SELECT = ws;
    const Fs = new T();
    Fs.setName("asButtonGroup"), Fs.setLowerBound(0), Fs.setUpperBound(1), _e.getEStructuralFeatures().push(Fs), a.Literals.SELECT_WIDGET__AS_BUTTON_GROUP = Fs;
    const Ps = new T();
    Ps.setName("values"), Ps.setLowerBound(0), Ps.setUpperBound(-1), _e.getEStructuralFeatures().push(Ps), a.Literals.SELECT_WIDGET__VALUES = Ps;
    const pe = new R();
    pe.setName("AllFeatures"), pe.setAbstract(!1), pe.setInterface(!1), this.getEClassifiers().push(pe), pe.setEPackage(this), a.Literals.ALL_FEATURES = pe;
    const Dt = new I();
    Dt.setContainment(!1), Dt.setName("with"), Dt.setLowerBound(0), Dt.setUpperBound(-1), pe.getEStructuralFeatures().push(Dt), a.Literals.ALL_FEATURES__WITH = Dt;
    const Rt = new I();
    Rt.setContainment(!1), Rt.setName("eType"), Rt.setLowerBound(0), Rt.setUpperBound(-1), pe.getEStructuralFeatures().push(Rt), a.Literals.ALL_FEATURES__E_TYPE = Rt;
    const wt = new I();
    wt.setContainment(!0), wt.setName("filter"), wt.setLowerBound(0), wt.setUpperBound(1), pe.getEStructuralFeatures().push(wt), a.Literals.ALL_FEATURES__FILTER = wt;
    const Ft = new I();
    Ft.setContainment(!1), Ft.setName("template"), Ft.setLowerBound(0), Ft.setUpperBound(1), pe.getEStructuralFeatures().push(Ft), a.Literals.ALL_FEATURES__TEMPLATE = Ft;
    const Pt = new I();
    Pt.setContainment(!0), Pt.setName("cases"), Pt.setLowerBound(0), Pt.setUpperBound(-1), pe.getEStructuralFeatures().push(Pt), a.Literals.ALL_FEATURES__CASES = Pt;
    const bs = new T();
    bs.setName("priority"), bs.setLowerBound(0), bs.setUpperBound(1), pe.getEStructuralFeatures().push(bs), a.Literals.ALL_FEATURES__PRIORITY = bs;
    const Ge = new R();
    Ge.setName("TemplateCase"), Ge.setAbstract(!1), Ge.setInterface(!1), this.getEClassifiers().push(Ge), Ge.setEPackage(this), a.Literals.TEMPLATE_CASE = Ge;
    const bt = new I();
    bt.setContainment(!0), bt.setName("when"), bt.setLowerBound(0), bt.setUpperBound(1), Ge.getEStructuralFeatures().push(bt), a.Literals.TEMPLATE_CASE__WHEN = bt;
    const Mt = new I();
    Mt.setContainment(!1), Mt.setName("widget"), Mt.setLowerBound(1), Mt.setUpperBound(1), Ge.getEStructuralFeatures().push(Mt), a.Literals.TEMPLATE_CASE__WIDGET = Mt;
    const We = new R();
    We.setName("GroupWidget"), We.setAbstract(!1), We.setInterface(!1), this.getEClassifiers().push(We), We.setEPackage(this), a.Literals.GROUP_WIDGET = We;
    const Ut = new I();
    Ut.setContainment(!0), Ut.setName("fields"), Ut.setLowerBound(0), Ut.setUpperBound(-1), We.getEStructuralFeatures().push(Ut), a.Literals.GROUP_WIDGET__FIELDS = Ut;
    const Ms = new T();
    Ms.setName("layout"), Ms.setLowerBound(0), Ms.setUpperBound(1), We.getEStructuralFeatures().push(Ms), a.Literals.GROUP_WIDGET__LAYOUT = Ms;
    const Pe = new R();
    Pe.setName("Conditional"), Pe.setAbstract(!1), Pe.setInterface(!1), this.getEClassifiers().push(Pe), Pe.setEPackage(this), a.Literals.CONDITIONAL = Pe;
    const Vt = new I();
    Vt.setContainment(!0), Vt.setName("condition"), Vt.setLowerBound(1), Vt.setUpperBound(1), Pe.getEStructuralFeatures().push(Vt), a.Literals.CONDITIONAL__CONDITION = Vt;
    const Bt = new I();
    Bt.setContainment(!0), Bt.setName("then"), Bt.setLowerBound(0), Bt.setUpperBound(-1), Pe.getEStructuralFeatures().push(Bt), a.Literals.CONDITIONAL__THEN = Bt;
    const Gt = new I();
    Gt.setContainment(!0), Gt.setName("else"), Gt.setLowerBound(0), Gt.setUpperBound(-1), Pe.getEStructuralFeatures().push(Gt), a.Literals.CONDITIONAL__ELSE = Gt;
    const be = new R();
    be.setName("ForEach"), be.setAbstract(!1), be.setInterface(!1), this.getEClassifiers().push(be), be.setEPackage(this), a.Literals.FOR_EACH = be;
    const Wt = new I();
    Wt.setContainment(!0), Wt.setName("items"), Wt.setLowerBound(1), Wt.setUpperBound(1), be.getEStructuralFeatures().push(Wt), a.Literals.FOR_EACH__ITEMS = Wt;
    const Yt = new I();
    Yt.setContainment(!0), Yt.setName("body"), Yt.setLowerBound(0), Yt.setUpperBound(-1), be.getEStructuralFeatures().push(Yt), a.Literals.FOR_EACH__BODY = Yt;
    const Us = new T();
    Us.setName("emptyText"), Us.setLowerBound(0), Us.setUpperBound(1), be.getEStructuralFeatures().push(Us), a.Literals.FOR_EACH__EMPTY_TEXT = Us;
    const Ye = new R();
    Ye.setName("ReferenceLinkWidget"), Ye.setAbstract(!1), Ye.setInterface(!1), this.getEClassifiers().push(Ye), Ye.setEPackage(this), a.Literals.REFERENCE_LINK_WIDGET = Ye;
    const $t = new I();
    $t.setContainment(!0), $t.setName("displayExpression"), $t.setLowerBound(0), $t.setUpperBound(1), Ye.getEStructuralFeatures().push($t), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION = $t;
    const Vs = new T();
    Vs.setName("targetRoute"), Vs.setLowerBound(0), Vs.setUpperBound(1), Ye.getEStructuralFeatures().push(Vs), a.Literals.REFERENCE_LINK_WIDGET__TARGET_ROUTE = Vs;
    const Oe = new R();
    Oe.setName("UIModelOverlay"), Oe.setAbstract(!1), Oe.setInterface(!1), this.getEClassifiers().push(Oe), Oe.setEPackage(this), a.Literals.U_I_MODEL_OVERLAY = Oe;
    const Bs = new T();
    Bs.setName("name"), Bs.setLowerBound(0), Bs.setUpperBound(1), Oe.getEStructuralFeatures().push(Bs), a.Literals.U_I_MODEL_OVERLAY__NAME = Bs;
    const Gs = new T();
    Gs.setName("priority"), Gs.setLowerBound(0), Gs.setUpperBound(1), Oe.getEStructuralFeatures().push(Gs), a.Literals.U_I_MODEL_OVERLAY__PRIORITY = Gs;
    const kt = new I();
    kt.setContainment(!0), kt.setName("templates"), kt.setLowerBound(0), kt.setUpperBound(-1), Oe.getEStructuralFeatures().push(kt), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES = kt;
    const xt = new I();
    xt.setContainment(!0), xt.setName("cases"), xt.setLowerBound(0), xt.setUpperBound(-1), Oe.getEStructuralFeatures().push(xt), a.Literals.U_I_MODEL_OVERLAY__CASES = xt;
    const $e = new R();
    $e.setName("Style"), $e.setAbstract(!0), $e.setInterface(!0), this.getEClassifiers().push($e), $e.setEPackage(this), a.Literals.STYLE = $e;
    const Ws = new T();
    Ws.setName("name"), Ws.setLowerBound(0), Ws.setUpperBound(1), $e.getEStructuralFeatures().push(Ws), a.Literals.STYLE__NAME = Ws;
    const Ys = new T();
    Ys.setName("group"), Ys.setLowerBound(0), Ys.setUpperBound(1), $e.getEStructuralFeatures().push(Ys), a.Literals.STYLE__GROUP = Ys;
    const Ae = new R();
    Ae.setName("BaseStyle"), Ae.setAbstract(!0), Ae.setInterface(!1), this.getEClassifiers().push(Ae), Ae.setEPackage(this), a.Literals.BASE_STYLE = Ae;
    const Xt = new I();
    Xt.setContainment(!1), Xt.setName("extends"), Xt.setLowerBound(0), Xt.setUpperBound(1), Ae.getEStructuralFeatures().push(Xt), a.Literals.BASE_STYLE__EXTENDS = Xt;
    const $s = new T();
    $s.setName("css"), $s.setLowerBound(0), $s.setUpperBound(1), Ae.getEStructuralFeatures().push($s), a.Literals.BASE_STYLE__CSS = $s;
    const ks = new T();
    ks.setName("vueComponent"), ks.setLowerBound(0), ks.setUpperBound(1), Ae.getEStructuralFeatures().push(ks), a.Literals.BASE_STYLE__VUE_COMPONENT = ks;
    const Ht = new I();
    Ht.setContainment(!0), Ht.setName("visibilityCondition"), Ht.setLowerBound(0), Ht.setUpperBound(1), Ae.getEStructuralFeatures().push(Ht), a.Literals.BASE_STYLE__VISIBILITY_CONDITION = Ht;
    const ke = new R();
    ke.setName("LayoutStyle"), ke.setAbstract(!1), ke.setInterface(!1), this.getEClassifiers().push(ke), ke.setEPackage(this), a.Literals.LAYOUT_STYLE = ke;
    const xs = new T();
    xs.setName("layout"), xs.setLowerBound(0), xs.setUpperBound(1), ke.getEStructuralFeatures().push(xs), a.Literals.LAYOUT_STYLE__LAYOUT = xs;
    const Xs = new T();
    Xs.setName("order"), Xs.setLowerBound(0), Xs.setUpperBound(1), ke.getEStructuralFeatures().push(Xs), a.Literals.LAYOUT_STYLE__ORDER = Xs;
    const Ie = new R();
    Ie.setName("WidgetStyle"), Ie.setAbstract(!1), Ie.setInterface(!1), this.getEClassifiers().push(Ie), Ie.setEPackage(this), a.Literals.WIDGET_STYLE = Ie;
    const jt = new I();
    jt.setContainment(!1), jt.setName("feature"), jt.setLowerBound(0), jt.setUpperBound(1), Ie.getEStructuralFeatures().push(jt), a.Literals.WIDGET_STYLE__FEATURE = jt;
    const Hs = new T();
    Hs.setName("widgetType"), Hs.setLowerBound(0), Hs.setUpperBound(1), Ie.getEStructuralFeatures().push(Hs), a.Literals.WIDGET_STYLE__WIDGET_TYPE = Hs;
    const js = new T();
    js.setName("label"), js.setLowerBound(0), js.setUpperBound(1), Ie.getEStructuralFeatures().push(js), a.Literals.WIDGET_STYLE__LABEL = js;
    const qs = new T();
    qs.setName("readOnly"), qs.setLowerBound(0), qs.setUpperBound(1), Ie.getEStructuralFeatures().push(qs), a.Literals.WIDGET_STYLE__READ_ONLY = qs;
    const zs = new T();
    zs.setName("order"), zs.setLowerBound(0), zs.setUpperBound(1), Ie.getEStructuralFeatures().push(zs), a.Literals.WIDGET_STYLE__ORDER = zs;
    const at = new R();
    at.setName("TableStyle"), at.setAbstract(!1), at.setInterface(!1), this.getEClassifiers().push(at), at.setEPackage(this), a.Literals.TABLE_STYLE = at;
    const qt = new I();
    qt.setContainment(!0), qt.setName("columns"), qt.setLowerBound(1), qt.setUpperBound(-1), at.getEStructuralFeatures().push(qt), a.Literals.TABLE_STYLE__COLUMNS = qt;
    const xe = new R();
    xe.setName("Expression"), xe.setAbstract(!1), xe.setInterface(!1), this.getEClassifiers().push(xe), xe.setEPackage(this), a.Literals.EXPRESSION = xe;
    const Ks = new T();
    Ks.setName("language"), Ks.setLowerBound(1), Ks.setUpperBound(1), xe.getEStructuralFeatures().push(Ks), a.Literals.EXPRESSION__LANGUAGE = Ks;
    const Qs = new T();
    Qs.setName("body"), Qs.setLowerBound(1), Qs.setUpperBound(1), xe.getEStructuralFeatures().push(Qs), a.Literals.EXPRESSION__BODY = Qs;
    const Xe = new R();
    Xe.setName("ValidationExpression"), Xe.setAbstract(!1), Xe.setInterface(!1), this.getEClassifiers().push(Xe), Xe.setEPackage(this), a.Literals.VALIDATION_EXPRESSION = Xe;
    const Js = new T();
    Js.setName("defaultMessage"), Js.setLowerBound(0), Js.setUpperBound(1), Xe.getEStructuralFeatures().push(Js), a.Literals.VALIDATION_EXPRESSION__DEFAULT_MESSAGE = Js;
    const Zs = new T();
    Zs.setName("severity"), Zs.setLowerBound(0), Zs.setUpperBound(1), Xe.getEStructuralFeatures().push(Zs), a.Literals.VALIDATION_EXPRESSION__SEVERITY = Zs;
    const ae = new R();
    ae.setName("ValidationMessageMapper"), ae.setAbstract(!1), ae.setInterface(!1), this.getEClassifiers().push(ae), ae.setEPackage(this), a.Literals.VALIDATION_MESSAGE_MAPPER = ae;
    const er = new T();
    er.setName("order"), er.setLowerBound(0), er.setUpperBound(1), ae.getEStructuralFeatures().push(er), a.Literals.VALIDATION_MESSAGE_MAPPER__ORDER = er;
    const tr = new T();
    tr.setName("matchCode"), tr.setLowerBound(0), tr.setUpperBound(1), ae.getEStructuralFeatures().push(tr), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_CODE = tr;
    const sr = new T();
    sr.setName("matchSeverity"), sr.setLowerBound(0), sr.setUpperBound(1), ae.getEStructuralFeatures().push(sr), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_SEVERITY = sr;
    const zt = new I();
    zt.setContainment(!0), zt.setName("matchExpression"), zt.setLowerBound(0), zt.setUpperBound(1), ae.getEStructuralFeatures().push(zt), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION = zt;
    const rr = new T();
    rr.setName("mappedText"), rr.setLowerBound(0), rr.setUpperBound(1), ae.getEStructuralFeatures().push(rr), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT = rr;
    const Kt = new I();
    Kt.setContainment(!0), Kt.setName("mappedTextExpression"), Kt.setLowerBound(0), Kt.setUpperBound(1), ae.getEStructuralFeatures().push(Kt), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION = Kt;
    const ar = new T();
    ar.setName("mappedSeverity"), ar.setLowerBound(0), ar.setUpperBound(1), ae.getEStructuralFeatures().push(ar), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_SEVERITY = ar, a.Literals.FORM_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.TABLE_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.SECTION_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.TAB_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.SUMMARY_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.MASTER_DETAIL.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.WIDGET_COMPONENT.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.INPUT_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.TEXT_AREA_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.NUMBER_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.CHECKBOX_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.DATE_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.COMBOBOX_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.SELECT_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.ALL_FEATURES.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.GROUP_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.FOR_EACH.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.REFERENCE_LINK_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.BASE_STYLE.getESuperTypes().push(a.Literals.STYLE), a.Literals.LAYOUT_STYLE.getESuperTypes().push(a.Literals.BASE_STYLE), a.Literals.WIDGET_STYLE.getESuperTypes().push(a.Literals.BASE_STYLE), a.Literals.TABLE_STYLE.getESuperTypes().push(a.Literals.WIDGET_STYLE), a.Literals.VALIDATION_EXPRESSION.getESuperTypes().push(a.Literals.EXPRESSION), a.Literals.U_I_MODEL__TARGET_CLASSES.setEType(Qt().getEClassifier("EClass")), a.Literals.U_I_MODEL__FILTER_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.U_I_MODEL__STYLES.setEType(a.Literals.BASE_STYLE), a.Literals.U_I_MODEL__TEMPLATES.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.U_I_MODEL__COMPONENTS.setEType(a.Literals.COMPONENT), a.Literals.COMPONENT__TARGET_CLASSES.setEType(Qt().getEClassifier("EClass")), a.Literals.COMPONENT__STYLES.setEType(a.Literals.BASE_STYLE), a.Literals.COMPONENT__CHILDREN.setEType(a.Literals.COMPONENT), a.Literals.FORM_VIEW__FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.FORM_VIEW__VALIDATIONS.setEType(a.Literals.VALIDATION_EXPRESSION), a.Literals.FORM_VIEW__VALIDATION_MAPPERS.setEType(a.Literals.VALIDATION_MESSAGE_MAPPER), a.Literals.TABLE_VIEW__TABLE_STYLE.setEType(a.Literals.TABLE_STYLE), a.Literals.SECTION_VIEW__SECTIONS.setEType(a.Literals.FORM_VIEW), a.Literals.TAB_VIEW__TABS.setEType(a.Literals.COMPONENT), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.MASTER_DETAIL__MASTER.setEType(a.Literals.TABLE_VIEW), a.Literals.MASTER_DETAIL__DETAIL.setEType(a.Literals.COMPONENT), a.Literals.WIDGET_COMPONENT__FEATURE.setEType(Qt().getEClassifier("EStructuralFeature")), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.WIDGET_COMPONENT__VALIDATIONS.setEType(a.Literals.VALIDATION_EXPRESSION), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS.setEType(a.Literals.VALIDATION_MESSAGE_MAPPER), a.Literals.WIDGET_COMPONENT__BINDINGS.setEType(a.Literals.PROPERTY_BINDING), a.Literals.PROPERTY_BINDING__EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.DATE_WIDGET__CONSTRAINS.setEType(a.Literals.EXPRESSION), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL.setEType(a.Literals.EXPRESSION), a.Literals.SELECT_WIDGET__OPTION_LABEL.setEType(a.Literals.EXPRESSION), a.Literals.ALL_FEATURES__WITH.setEType(Qt().getEClassifier("EStructuralFeature")), a.Literals.ALL_FEATURES__E_TYPE.setEType(Qt().getEClassifier("EClassifier")), a.Literals.ALL_FEATURES__FILTER.setEType(a.Literals.EXPRESSION), a.Literals.ALL_FEATURES__TEMPLATE.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.ALL_FEATURES__CASES.setEType(a.Literals.TEMPLATE_CASE), a.Literals.TEMPLATE_CASE__WHEN.setEType(a.Literals.EXPRESSION), a.Literals.TEMPLATE_CASE__WIDGET.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.GROUP_WIDGET__FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL__CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.CONDITIONAL__THEN.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL__ELSE.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.FOR_EACH__ITEMS.setEType(a.Literals.EXPRESSION), a.Literals.FOR_EACH__BODY.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.U_I_MODEL_OVERLAY__CASES.setEType(a.Literals.TEMPLATE_CASE), a.Literals.BASE_STYLE__EXTENDS.setEType(a.Literals.BASE_STYLE), a.Literals.BASE_STYLE__VISIBILITY_CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.WIDGET_STYLE__FEATURE.setEType(Qt().getEClassifier("EStructuralFeature")), a.Literals.TABLE_STYLE__COLUMNS.setEType(a.Literals.WIDGET_STYLE), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION.setEType(a.Literals.EXPRESSION);
  }
};
ir(Jt, "eNAME", "uimodel"), ir(Jt, "eNS_URI", "http://uimodel/1.0"), ir(Jt, "eNS_PREFIX", "uimodel"), // Singleton instance
ir(Jt, "_instance"), /**
* Literals for quick access to metaclasses and features
*/
ir(Jt, "Literals", {
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
let A = Jt;
var Gi = Object.defineProperty, Wi = (s, e, t) => e in s ? Gi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, te = (s, e, t) => Wi(s, typeof e != "symbol" ? e + "" : e, t);
const He = class v extends tt {
  constructor() {
    super(...arguments), te(this, "_name"), te(this, "_targetClasses", []), te(this, "_priority", 0), te(this, "_filterExpression"), te(this, "_styles", []), te(this, "_templates", []), te(this, "_components", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.U_I_MODEL;
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
      getFeature: () => this.eClass().getEStructuralFeature(v.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.TARGET_CLASSES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.TARGET_CLASSES,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.PRIORITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.FILTER_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.FILTER_EXPRESSION,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.STYLES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.STYLES,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.TEMPLATES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.TEMPLATES,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.COMPONENTS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.COMPONENTS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case v.NAME:
        return this.name;
      case v.TARGET_CLASSES:
        return this.targetClasses;
      case v.PRIORITY:
        return this.priority;
      case v.FILTER_EXPRESSION:
        return this.filterExpression;
      case v.STYLES:
        return this.styles;
      case v.TEMPLATES:
        return this.templates;
      case v.COMPONENTS:
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
      case v.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case v.TARGET_CLASSES:
        this.targetClasses = t, super.eSet(e, t);
        break;
      case v.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case v.FILTER_EXPRESSION:
        this.filterExpression = t, super.eSet(e, t);
        break;
      case v.STYLES:
        this.styles = t, super.eSet(e, t);
        break;
      case v.TEMPLATES:
        this.templates = t, super.eSet(e, t);
        break;
      case v.COMPONENTS:
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
      case v.NAME:
        return this._name !== void 0;
      case v.TARGET_CLASSES:
        return this._targetClasses !== void 0 && this._targetClasses.length > 0;
      case v.PRIORITY:
        return this._priority !== 0;
      case v.FILTER_EXPRESSION:
        return this._filterExpression !== void 0;
      case v.STYLES:
        return this._styles !== void 0 && this._styles.length > 0;
      case v.TEMPLATES:
        return this._templates !== void 0 && this._templates.length > 0;
      case v.COMPONENTS:
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
      case v.NAME:
        this._name = void 0;
        return;
      case v.TARGET_CLASSES:
        this._targetClasses = [];
        return;
      case v.PRIORITY:
        this._priority = 0;
        return;
      case v.FILTER_EXPRESSION:
        this._filterExpression = void 0;
        return;
      case v.STYLES:
        this._styles = [];
        return;
      case v.TEMPLATES:
        this._templates = [];
        return;
      case v.COMPONENTS:
        this._components = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
te(He, "NAME", 0), te(He, "TARGET_CLASSES", 1), te(He, "PRIORITY", 2), te(He, "FILTER_EXPRESSION", 3), te(He, "STYLES", 4), te(He, "TEMPLATES", 5), te(He, "COMPONENTS", 6);
let Yi = He;
const Yr = {
  FIELD_THEN_FORM: "FIELD_THEN_FORM"
};
var $i = Object.defineProperty, ki = (s, e, t) => e in s ? $i(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ye = (s, e, t) => ki(s, typeof e != "symbol" ? e + "" : e, t);
const Zt = class w extends tt {
  constructor() {
    super(...arguments), ye(this, "_name", ""), ye(this, "_group"), ye(this, "_targetClasses", []), ye(this, "_styles", []), ye(this, "_children", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.COMPONENT;
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
      getFeature: () => this.eClass().getEStructuralFeature(w.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(w.GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.GROUP,
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
      getFeature: () => this.eClass().getEStructuralFeature(w.TARGET_CLASSES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.TARGET_CLASSES,
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
      getFeature: () => this.eClass().getEStructuralFeature(w.STYLES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.STYLES,
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
      getFeature: () => this.eClass().getEStructuralFeature(w.CHILDREN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.CHILDREN,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case w.NAME:
        return this.name;
      case w.GROUP:
        return this.group;
      case w.TARGET_CLASSES:
        return this.targetClasses;
      case w.STYLES:
        return this.styles;
      case w.CHILDREN:
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
      case w.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case w.GROUP:
        this.group = t, super.eSet(e, t);
        break;
      case w.TARGET_CLASSES:
        this.targetClasses = t, super.eSet(e, t);
        break;
      case w.STYLES:
        this.styles = t, super.eSet(e, t);
        break;
      case w.CHILDREN:
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
      case w.NAME:
        return this._name !== "";
      case w.GROUP:
        return this._group !== void 0;
      case w.TARGET_CLASSES:
        return this._targetClasses !== void 0 && this._targetClasses.length > 0;
      case w.STYLES:
        return this._styles !== void 0 && this._styles.length > 0;
      case w.CHILDREN:
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
      case w.NAME:
        this._name = "";
        return;
      case w.GROUP:
        this._group = void 0;
        return;
      case w.TARGET_CLASSES:
        this._targetClasses = [];
        return;
      case w.STYLES:
        this._styles = [];
        return;
      case w.CHILDREN:
        this._children = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
ye(Zt, "NAME", 0), ye(Zt, "GROUP", 1), ye(Zt, "TARGET_CLASSES", 2), ye(Zt, "STYLES", 3), ye(Zt, "CHILDREN", 4);
let dt = Zt;
var xi = Object.defineProperty, Xi = (s, e, t) => e in s ? xi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ze = (s, e, t) => Xi(s, typeof e != "symbol" ? e + "" : e, t);
const ur = class U extends dt {
  constructor() {
    super(...arguments), ze(this, "_fields", []), ze(this, "_validations", []), ze(this, "_validationMappers", []), ze(this, "_mapperOrder", Yr.FIELD_THEN_FORM);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.FORM_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(U.FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => U.FIELDS,
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
      getFeature: () => this.eClass().getEStructuralFeature(U.VALIDATIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => U.VALIDATIONS,
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
      getFeature: () => this.eClass().getEStructuralFeature(U.VALIDATION_MAPPERS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => U.VALIDATION_MAPPERS,
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
      getFeature: () => this.eClass().getEStructuralFeature(U.MAPPER_ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => U.MAPPER_ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case U.FIELDS:
        return this.fields;
      case U.VALIDATIONS:
        return this.validations;
      case U.VALIDATION_MAPPERS:
        return this.validationMappers;
      case U.MAPPER_ORDER:
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
      case U.FIELDS:
        this.fields = t, super.eSet(e, t);
        break;
      case U.VALIDATIONS:
        this.validations = t, super.eSet(e, t);
        break;
      case U.VALIDATION_MAPPERS:
        this.validationMappers = t, super.eSet(e, t);
        break;
      case U.MAPPER_ORDER:
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
      case U.FIELDS:
        return this._fields !== void 0 && this._fields.length > 0;
      case U.VALIDATIONS:
        return this._validations !== void 0 && this._validations.length > 0;
      case U.VALIDATION_MAPPERS:
        return this._validationMappers !== void 0 && this._validationMappers.length > 0;
      case U.MAPPER_ORDER:
        return this._mapperOrder !== Yr.FIELD_THEN_FORM;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case U.FIELDS:
        this._fields = [];
        return;
      case U.VALIDATIONS:
        this._validations = [];
        return;
      case U.VALIDATION_MAPPERS:
        this._validationMappers = [];
        return;
      case U.MAPPER_ORDER:
        this._mapperOrder = Yr.FIELD_THEN_FORM;
        return;
      default:
        super.eUnset(e);
    }
  }
};
ze(ur, "FIELDS", 5), ze(ur, "VALIDATIONS", 6), ze(ur, "VALIDATION_MAPPERS", 7), ze(ur, "MAPPER_ORDER", 8);
let Hi = ur;
var ji = Object.defineProperty, qi = (s, e, t) => e in s ? ji(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, wa = (s, e, t) => qi(s, typeof e != "symbol" ? e + "" : e, t);
const Fa = class it extends dt {
  constructor() {
    super(...arguments), wa(this, "_tableStyle");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.TABLE_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(it.TABLE_STYLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => it.TABLE_STYLE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case it.TABLE_STYLE:
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
      case it.TABLE_STYLE:
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
      case it.TABLE_STYLE:
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
      case it.TABLE_STYLE:
        this._tableStyle = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
wa(Fa, "TABLE_STYLE", 5);
let zi = Fa;
var Ki = Object.defineProperty, Qi = (s, e, t) => e in s ? Ki(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Pa = (s, e, t) => Qi(s, typeof e != "symbol" ? e + "" : e, t);
const ba = class ut extends dt {
  constructor() {
    super(...arguments), Pa(this, "_sections", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.SECTION_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(ut.SECTIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ut.SECTIONS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ut.SECTIONS:
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
      case ut.SECTIONS:
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
      case ut.SECTIONS:
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
      case ut.SECTIONS:
        this._sections = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Pa(ba, "SECTIONS", 5);
let Ji = ba;
var Zi = Object.defineProperty, eu = (s, e, t) => e in s ? Zi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ma = (s, e, t) => eu(s, typeof e != "symbol" ? e + "" : e, t);
const Ua = class nt extends dt {
  constructor() {
    super(...arguments), Ma(this, "_tabs", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.TAB_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(nt.TABS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => nt.TABS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case nt.TABS:
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
      case nt.TABS:
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
      case nt.TABS:
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
      case nt.TABS:
        this._tabs = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ma(Ua, "TABS", 5);
let tu = Ua;
var su = Object.defineProperty, ru = (s, e, t) => e in s ? su(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Va = (s, e, t) => ru(s, typeof e != "symbol" ? e + "" : e, t);
const Ba = class lt extends dt {
  constructor() {
    super(...arguments), Va(this, "_summaryFields", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.SUMMARY_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(lt.SUMMARY_FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => lt.SUMMARY_FIELDS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case lt.SUMMARY_FIELDS:
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
      case lt.SUMMARY_FIELDS:
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
      case lt.SUMMARY_FIELDS:
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
      case lt.SUMMARY_FIELDS:
        this._summaryFields = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Va(Ba, "SUMMARY_FIELDS", 5);
let au = Ba;
var iu = Object.defineProperty, uu = (s, e, t) => e in s ? iu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ar = (s, e, t) => uu(s, typeof e != "symbol" ? e + "" : e, t);
const Hr = class ie extends dt {
  constructor() {
    super(...arguments), Ar(this, "_master"), Ar(this, "_detail");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.MASTER_DETAIL;
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
      getFeature: () => this.eClass().getEStructuralFeature(ie.MASTER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ie.MASTER,
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
      getFeature: () => this.eClass().getEStructuralFeature(ie.DETAIL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ie.DETAIL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ie.MASTER:
        return this.master;
      case ie.DETAIL:
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
      case ie.MASTER:
        this.master = t, super.eSet(e, t);
        break;
      case ie.DETAIL:
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
      case ie.MASTER:
        return this._master !== void 0;
      case ie.DETAIL:
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
      case ie.MASTER:
        this._master = void 0;
        return;
      case ie.DETAIL:
        this._detail = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ar(Hr, "MASTER", 5), Ar(Hr, "DETAIL", 6);
let nu = Hr;
var lu = Object.defineProperty, ou = (s, e, t) => e in s ? lu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Cr = (s, e, t) => ou(s, typeof e != "symbol" ? e + "" : e, t);
const jr = class ue extends tt {
  constructor() {
    super(...arguments), Cr(this, "_property", ""), Cr(this, "_expression");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.PROPERTY_BINDING;
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
      getFeature: () => this.eClass().getEStructuralFeature(ue.PROPERTY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ue.PROPERTY,
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
      getFeature: () => this.eClass().getEStructuralFeature(ue.EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ue.EXPRESSION,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ue.PROPERTY:
        return this.property;
      case ue.EXPRESSION:
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
      case ue.PROPERTY:
        this.property = t, super.eSet(e, t);
        break;
      case ue.EXPRESSION:
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
      case ue.PROPERTY:
        return this._property !== "";
      case ue.EXPRESSION:
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
      case ue.PROPERTY:
        this._property = "";
        return;
      case ue.EXPRESSION:
        this._expression = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Cr(jr, "PROPERTY", 0), Cr(jr, "EXPRESSION", 1);
let cu = jr;
var Eu = Object.defineProperty, hu = (s, e, t) => e in s ? Eu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, j = (s, e, t) => hu(s, typeof e != "symbol" ? e + "" : e, t);
const Ce = class S extends dt {
  constructor() {
    super(...arguments), j(this, "_feature"), j(this, "_label"), j(this, "_placeholder"), j(this, "_readOnly"), j(this, "_required"), j(this, "_visibilityCondition"), j(this, "_validations", []), j(this, "_validationMappers", []), j(this, "_bindings", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.WIDGET_COMPONENT;
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
      getFeature: () => this.eClass().getEStructuralFeature(S.FEATURE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => S.FEATURE,
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
      getFeature: () => this.eClass().getEStructuralFeature(S.LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => S.LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(S.PLACEHOLDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => S.PLACEHOLDER,
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
      getFeature: () => this.eClass().getEStructuralFeature(S.READ_ONLY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => S.READ_ONLY,
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
      getFeature: () => this.eClass().getEStructuralFeature(S.REQUIRED),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => S.REQUIRED,
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
      getFeature: () => this.eClass().getEStructuralFeature(S.VISIBILITY_CONDITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => S.VISIBILITY_CONDITION,
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
      getFeature: () => this.eClass().getEStructuralFeature(S.VALIDATIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => S.VALIDATIONS,
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
      getFeature: () => this.eClass().getEStructuralFeature(S.VALIDATION_MAPPERS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => S.VALIDATION_MAPPERS,
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
      getFeature: () => this.eClass().getEStructuralFeature(S.BINDINGS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => S.BINDINGS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case S.FEATURE:
        return this.feature;
      case S.LABEL:
        return this.label;
      case S.PLACEHOLDER:
        return this.placeholder;
      case S.READ_ONLY:
        return this.readOnly;
      case S.REQUIRED:
        return this.required;
      case S.VISIBILITY_CONDITION:
        return this.visibilityCondition;
      case S.VALIDATIONS:
        return this.validations;
      case S.VALIDATION_MAPPERS:
        return this.validationMappers;
      case S.BINDINGS:
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
      case S.FEATURE:
        this.feature = t, super.eSet(e, t);
        break;
      case S.LABEL:
        this.label = t, super.eSet(e, t);
        break;
      case S.PLACEHOLDER:
        this.placeholder = t, super.eSet(e, t);
        break;
      case S.READ_ONLY:
        this.readOnly = t, super.eSet(e, t);
        break;
      case S.REQUIRED:
        this.required = t, super.eSet(e, t);
        break;
      case S.VISIBILITY_CONDITION:
        this.visibilityCondition = t, super.eSet(e, t);
        break;
      case S.VALIDATIONS:
        this.validations = t, super.eSet(e, t);
        break;
      case S.VALIDATION_MAPPERS:
        this.validationMappers = t, super.eSet(e, t);
        break;
      case S.BINDINGS:
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
      case S.FEATURE:
        return this._feature !== void 0;
      case S.LABEL:
        return this._label !== void 0;
      case S.PLACEHOLDER:
        return this._placeholder !== void 0;
      case S.READ_ONLY:
        return this._readOnly !== void 0;
      case S.REQUIRED:
        return this._required !== void 0;
      case S.VISIBILITY_CONDITION:
        return this._visibilityCondition !== void 0;
      case S.VALIDATIONS:
        return this._validations !== void 0 && this._validations.length > 0;
      case S.VALIDATION_MAPPERS:
        return this._validationMappers !== void 0 && this._validationMappers.length > 0;
      case S.BINDINGS:
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
      case S.FEATURE:
        this._feature = void 0;
        return;
      case S.LABEL:
        this._label = void 0;
        return;
      case S.PLACEHOLDER:
        this._placeholder = void 0;
        return;
      case S.READ_ONLY:
        this._readOnly = void 0;
        return;
      case S.REQUIRED:
        this._required = void 0;
        return;
      case S.VISIBILITY_CONDITION:
        this._visibilityCondition = void 0;
        return;
      case S.VALIDATIONS:
        this._validations = [];
        return;
      case S.VALIDATION_MAPPERS:
        this._validationMappers = [];
        return;
      case S.BINDINGS:
        this._bindings = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
j(Ce, "FEATURE", 5), j(Ce, "LABEL", 6), j(Ce, "PLACEHOLDER", 7), j(Ce, "READ_ONLY", 8), j(Ce, "REQUIRED", 9), j(Ce, "VISIBILITY_CONDITION", 10), j(Ce, "VALIDATIONS", 11), j(Ce, "VALIDATION_MAPPERS", 12), j(Ce, "BINDINGS", 13);
let me = Ce;
var gu = Object.defineProperty, du = (s, e, t) => e in s ? gu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ts = (s, e, t) => du(s, typeof e != "symbol" ? e + "" : e, t);
const mr = class $ extends me {
  constructor() {
    super(...arguments), ts(this, "_maxLength"), ts(this, "_value"), ts(this, "_password");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.INPUT_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature($.MAX_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.MAX_LENGTH,
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
  get password() {
    return this._password;
  }
  set password(e) {
    const t = this._password;
    this._password = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($.PASSWORD),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.PASSWORD,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case $.MAX_LENGTH:
        return this.maxLength;
      case $.VALUE:
        return this.value;
      case $.PASSWORD:
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
      case $.MAX_LENGTH:
        this.maxLength = t, super.eSet(e, t);
        break;
      case $.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case $.PASSWORD:
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
      case $.MAX_LENGTH:
        return this._maxLength !== void 0;
      case $.VALUE:
        return this._value !== void 0;
      case $.PASSWORD:
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
      case $.MAX_LENGTH:
        this._maxLength = void 0;
        return;
      case $.VALUE:
        this._value = void 0;
        return;
      case $.PASSWORD:
        this._password = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
ts(mr, "MAX_LENGTH", 14), ts(mr, "VALUE", 15), ts(mr, "PASSWORD", 16);
let pu = mr;
var Tu = Object.defineProperty, Su = (s, e, t) => e in s ? Tu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ss = (s, e, t) => Su(s, typeof e != "symbol" ? e + "" : e, t);
const Ir = class k extends me {
  constructor() {
    super(...arguments), ss(this, "_rows", 4), ss(this, "_maxLength"), ss(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.TEXT_AREA_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(k.ROWS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.ROWS,
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
      getFeature: () => this.eClass().getEStructuralFeature(k.MAX_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.MAX_LENGTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(k.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case k.ROWS:
        return this.rows;
      case k.MAX_LENGTH:
        return this.maxLength;
      case k.VALUE:
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
      case k.ROWS:
        this.rows = t, super.eSet(e, t);
        break;
      case k.MAX_LENGTH:
        this.maxLength = t, super.eSet(e, t);
        break;
      case k.VALUE:
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
      case k.ROWS:
        return this._rows !== 4;
      case k.MAX_LENGTH:
        return this._maxLength !== void 0;
      case k.VALUE:
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
      case k.ROWS:
        this._rows = 4;
        return;
      case k.MAX_LENGTH:
        this._maxLength = void 0;
        return;
      case k.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
ss(Ir, "ROWS", 14), ss(Ir, "MAX_LENGTH", 15), ss(Ir, "VALUE", 16);
let fu = Ir;
var mu = Object.defineProperty, Iu = (s, e, t) => e in s ? mu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ke = (s, e, t) => Iu(s, typeof e != "symbol" ? e + "" : e, t);
const nr = class V extends me {
  constructor() {
    super(...arguments), Ke(this, "_min"), Ke(this, "_max"), Ke(this, "_step", 1), Ke(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.NUMBER_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(V.MIN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => V.MIN,
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
      getFeature: () => this.eClass().getEStructuralFeature(V.MAX),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => V.MAX,
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
      getFeature: () => this.eClass().getEStructuralFeature(V.STEP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => V.STEP,
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
      getFeature: () => this.eClass().getEStructuralFeature(V.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => V.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case V.MIN:
        return this.min;
      case V.MAX:
        return this.max;
      case V.STEP:
        return this.step;
      case V.VALUE:
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
      case V.MIN:
        this.min = t, super.eSet(e, t);
        break;
      case V.MAX:
        this.max = t, super.eSet(e, t);
        break;
      case V.STEP:
        this.step = t, super.eSet(e, t);
        break;
      case V.VALUE:
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
      case V.MIN:
        return this._min !== void 0;
      case V.MAX:
        return this._max !== void 0;
      case V.STEP:
        return this._step !== 1;
      case V.VALUE:
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
      case V.MIN:
        this._min = void 0;
        return;
      case V.MAX:
        this._max = void 0;
        return;
      case V.STEP:
        this._step = 1;
        return;
      case V.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ke(nr, "MIN", 14), Ke(nr, "MAX", 15), Ke(nr, "STEP", 16), Ke(nr, "VALUE", 17);
let Nu = nr;
var Lu = Object.defineProperty, vu = (s, e, t) => e in s ? Lu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, yr = (s, e, t) => vu(s, typeof e != "symbol" ? e + "" : e, t);
const qr = class ne extends me {
  constructor() {
    super(...arguments), yr(this, "_asToggle"), yr(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.CHECKBOX_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(ne.AS_TOGGLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ne.AS_TOGGLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(ne.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ne.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ne.AS_TOGGLE:
        return this.asToggle;
      case ne.VALUE:
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
      case ne.AS_TOGGLE:
        this.asToggle = t, super.eSet(e, t);
        break;
      case ne.VALUE:
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
      case ne.AS_TOGGLE:
        return this._asToggle !== void 0;
      case ne.VALUE:
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
      case ne.AS_TOGGLE:
        this._asToggle = void 0;
        return;
      case ne.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
yr(qr, "AS_TOGGLE", 14), yr(qr, "VALUE", 15);
let _u = qr;
var Ou = Object.defineProperty, Au = (s, e, t) => e in s ? Ou(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Qe = (s, e, t) => Au(s, typeof e != "symbol" ? e + "" : e, t);
const lr = class B extends me {
  constructor() {
    super(...arguments), Qe(this, "_withTime"), Qe(this, "_format", "DD.MM.YYYY"), Qe(this, "_constrains"), Qe(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.DATE_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(B.WITH_TIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => B.WITH_TIME,
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
      getFeature: () => this.eClass().getEStructuralFeature(B.FORMAT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => B.FORMAT,
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
      getFeature: () => this.eClass().getEStructuralFeature(B.CONSTRAINS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => B.CONSTRAINS,
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
      getFeature: () => this.eClass().getEStructuralFeature(B.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => B.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case B.WITH_TIME:
        return this.withTime;
      case B.FORMAT:
        return this.format;
      case B.CONSTRAINS:
        return this.constrains;
      case B.VALUE:
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
      case B.WITH_TIME:
        this.withTime = t, super.eSet(e, t);
        break;
      case B.FORMAT:
        this.format = t, super.eSet(e, t);
        break;
      case B.CONSTRAINS:
        this.constrains = t, super.eSet(e, t);
        break;
      case B.VALUE:
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
      case B.WITH_TIME:
        return this._withTime !== void 0;
      case B.FORMAT:
        return this._format !== "DD.MM.YYYY";
      case B.CONSTRAINS:
        return this._constrains !== void 0;
      case B.VALUE:
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
      case B.WITH_TIME:
        this._withTime = void 0;
        return;
      case B.FORMAT:
        this._format = "DD.MM.YYYY";
        return;
      case B.CONSTRAINS:
        this._constrains = void 0;
        return;
      case B.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Qe(lr, "WITH_TIME", 14), Qe(lr, "FORMAT", 15), Qe(lr, "CONSTRAINS", 16), Qe(lr, "VALUE", 17);
let Cu = lr;
var yu = Object.defineProperty, Du = (s, e, t) => e in s ? yu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, rs = (s, e, t) => Du(s, typeof e != "symbol" ? e + "" : e, t);
const Nr = class x extends me {
  constructor() {
    super(...arguments), rs(this, "_optionLabel"), rs(this, "_minSearchLength", 2), rs(this, "_multiSelect");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.COMBOBOX_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(x.OPTION_LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.OPTION_LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(x.MIN_SEARCH_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.MIN_SEARCH_LENGTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(x.MULTI_SELECT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.MULTI_SELECT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case x.OPTION_LABEL:
        return this.optionLabel;
      case x.MIN_SEARCH_LENGTH:
        return this.minSearchLength;
      case x.MULTI_SELECT:
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
      case x.OPTION_LABEL:
        this.optionLabel = t, super.eSet(e, t);
        break;
      case x.MIN_SEARCH_LENGTH:
        this.minSearchLength = t, super.eSet(e, t);
        break;
      case x.MULTI_SELECT:
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
      case x.OPTION_LABEL:
        return this._optionLabel !== void 0;
      case x.MIN_SEARCH_LENGTH:
        return this._minSearchLength !== 2;
      case x.MULTI_SELECT:
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
      case x.OPTION_LABEL:
        this._optionLabel = void 0;
        return;
      case x.MIN_SEARCH_LENGTH:
        this._minSearchLength = 2;
        return;
      case x.MULTI_SELECT:
        this._multiSelect = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
rs(Nr, "OPTION_LABEL", 14), rs(Nr, "MIN_SEARCH_LENGTH", 15), rs(Nr, "MULTI_SELECT", 16);
let Ru = Nr;
var wu = Object.defineProperty, Fu = (s, e, t) => e in s ? wu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Je = (s, e, t) => Fu(s, typeof e != "symbol" ? e + "" : e, t);
const or = class G extends me {
  constructor() {
    super(...arguments), Je(this, "_optionLabel"), Je(this, "_multiSelect"), Je(this, "_asButtonGroup"), Je(this, "_values", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.SELECT_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(G.OPTION_LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.OPTION_LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(G.MULTI_SELECT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.MULTI_SELECT,
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
      getFeature: () => this.eClass().getEStructuralFeature(G.AS_BUTTON_GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.AS_BUTTON_GROUP,
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
      getFeature: () => this.eClass().getEStructuralFeature(G.VALUES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.VALUES,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case G.OPTION_LABEL:
        return this.optionLabel;
      case G.MULTI_SELECT:
        return this.multiSelect;
      case G.AS_BUTTON_GROUP:
        return this.asButtonGroup;
      case G.VALUES:
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
      case G.OPTION_LABEL:
        this.optionLabel = t, super.eSet(e, t);
        break;
      case G.MULTI_SELECT:
        this.multiSelect = t, super.eSet(e, t);
        break;
      case G.AS_BUTTON_GROUP:
        this.asButtonGroup = t, super.eSet(e, t);
        break;
      case G.VALUES:
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
      case G.OPTION_LABEL:
        return this._optionLabel !== void 0;
      case G.MULTI_SELECT:
        return this._multiSelect !== void 0;
      case G.AS_BUTTON_GROUP:
        return this._asButtonGroup !== void 0;
      case G.VALUES:
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
      case G.OPTION_LABEL:
        this._optionLabel = void 0;
        return;
      case G.MULTI_SELECT:
        this._multiSelect = void 0;
        return;
      case G.AS_BUTTON_GROUP:
        this._asButtonGroup = void 0;
        return;
      case G.VALUES:
        this._values = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Je(or, "OPTION_LABEL", 14), Je(or, "MULTI_SELECT", 15), Je(or, "AS_BUTTON_GROUP", 16), Je(or, "VALUES", 17);
let Pu = or;
var bu = Object.defineProperty, Mu = (s, e, t) => e in s ? bu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Te = (s, e, t) => Mu(s, typeof e != "symbol" ? e + "" : e, t);
const ot = class O extends me {
  constructor() {
    super(...arguments), Te(this, "_with", []), Te(this, "_eType", []), Te(this, "_filter"), Te(this, "_template"), Te(this, "_cases", []), Te(this, "_priority", 0);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.ALL_FEATURES;
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
      getFeature: () => this.eClass().getEStructuralFeature(O.WITH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.WITH,
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
      getFeature: () => this.eClass().getEStructuralFeature(O.E_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.E_TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(O.FILTER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.FILTER,
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
      getFeature: () => this.eClass().getEStructuralFeature(O.TEMPLATE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.TEMPLATE,
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
      getFeature: () => this.eClass().getEStructuralFeature(O.CASES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.CASES,
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
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case O.WITH:
        return this.with;
      case O.E_TYPE:
        return this.eType;
      case O.FILTER:
        return this.filter;
      case O.TEMPLATE:
        return this.template;
      case O.CASES:
        return this.cases;
      case O.PRIORITY:
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
      case O.WITH:
        this.with = t, super.eSet(e, t);
        break;
      case O.E_TYPE:
        this.eType = t, super.eSet(e, t);
        break;
      case O.FILTER:
        this.filter = t, super.eSet(e, t);
        break;
      case O.TEMPLATE:
        this.template = t, super.eSet(e, t);
        break;
      case O.CASES:
        this.cases = t, super.eSet(e, t);
        break;
      case O.PRIORITY:
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
      case O.WITH:
        return this._with !== void 0 && this._with.length > 0;
      case O.E_TYPE:
        return this._eType !== void 0 && this._eType.length > 0;
      case O.FILTER:
        return this._filter !== void 0;
      case O.TEMPLATE:
        return this._template !== void 0;
      case O.CASES:
        return this._cases !== void 0 && this._cases.length > 0;
      case O.PRIORITY:
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
      case O.WITH:
        this._with = [];
        return;
      case O.E_TYPE:
        this._eType = [];
        return;
      case O.FILTER:
        this._filter = void 0;
        return;
      case O.TEMPLATE:
        this._template = void 0;
        return;
      case O.CASES:
        this._cases = [];
        return;
      case O.PRIORITY:
        this._priority = 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Te(ot, "WITH", 14), Te(ot, "E_TYPE", 15), Te(ot, "FILTER", 16), Te(ot, "TEMPLATE", 17), Te(ot, "CASES", 18), Te(ot, "PRIORITY", 19);
let Uu = ot;
var Vu = Object.defineProperty, Bu = (s, e, t) => e in s ? Vu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Dr = (s, e, t) => Bu(s, typeof e != "symbol" ? e + "" : e, t);
const zr = class le extends tt {
  constructor() {
    super(...arguments), Dr(this, "_when"), Dr(this, "_widget");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.TEMPLATE_CASE;
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
      getFeature: () => this.eClass().getEStructuralFeature(le.WHEN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => le.WHEN,
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
      getFeature: () => this.eClass().getEStructuralFeature(le.WIDGET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => le.WIDGET,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case le.WHEN:
        return this.when;
      case le.WIDGET:
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
      case le.WHEN:
        this.when = t, super.eSet(e, t);
        break;
      case le.WIDGET:
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
      case le.WHEN:
        return this._when !== void 0;
      case le.WIDGET:
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
      case le.WHEN:
        this._when = void 0;
        return;
      case le.WIDGET:
        this._widget = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Dr(zr, "WHEN", 0), Dr(zr, "WIDGET", 1);
let Gu = zr;
const $r = {
  VERTICAL: "VERTICAL"
};
var Wu = Object.defineProperty, Yu = (s, e, t) => e in s ? Wu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Rr = (s, e, t) => Yu(s, typeof e != "symbol" ? e + "" : e, t);
const Kr = class oe extends me {
  constructor() {
    super(...arguments), Rr(this, "_fields", []), Rr(this, "_layout", $r.VERTICAL);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.GROUP_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(oe.FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => oe.FIELDS,
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
      getFeature: () => this.eClass().getEStructuralFeature(oe.LAYOUT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => oe.LAYOUT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case oe.FIELDS:
        return this.fields;
      case oe.LAYOUT:
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
      case oe.FIELDS:
        this.fields = t, super.eSet(e, t);
        break;
      case oe.LAYOUT:
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
      case oe.FIELDS:
        return this._fields !== void 0 && this._fields.length > 0;
      case oe.LAYOUT:
        return this._layout !== $r.VERTICAL;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case oe.FIELDS:
        this._fields = [];
        return;
      case oe.LAYOUT:
        this._layout = $r.VERTICAL;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Rr(Kr, "FIELDS", 14), Rr(Kr, "LAYOUT", 15);
let $u = Kr;
var ku = Object.defineProperty, xu = (s, e, t) => e in s ? ku(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, as = (s, e, t) => xu(s, typeof e != "symbol" ? e + "" : e, t);
const Lr = class X extends me {
  constructor() {
    super(...arguments), as(this, "_condition"), as(this, "_then", []), as(this, "_else", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.CONDITIONAL;
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
      getFeature: () => this.eClass().getEStructuralFeature(X.CONDITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => X.CONDITION,
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
      getFeature: () => this.eClass().getEStructuralFeature(X.THEN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => X.THEN,
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
      getFeature: () => this.eClass().getEStructuralFeature(X.ELSE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => X.ELSE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case X.CONDITION:
        return this.condition;
      case X.THEN:
        return this.then;
      case X.ELSE:
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
      case X.CONDITION:
        this.condition = t, super.eSet(e, t);
        break;
      case X.THEN:
        this.then = t, super.eSet(e, t);
        break;
      case X.ELSE:
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
      case X.CONDITION:
        return this._condition !== void 0;
      case X.THEN:
        return this._then !== void 0 && this._then.length > 0;
      case X.ELSE:
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
      case X.CONDITION:
        this._condition = void 0;
        return;
      case X.THEN:
        this._then = [];
        return;
      case X.ELSE:
        this._else = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
as(Lr, "CONDITION", 14), as(Lr, "THEN", 15), as(Lr, "ELSE", 16);
let Xu = Lr;
var Hu = Object.defineProperty, ju = (s, e, t) => e in s ? Hu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, is = (s, e, t) => ju(s, typeof e != "symbol" ? e + "" : e, t);
const vr = class H extends me {
  constructor() {
    super(...arguments), is(this, "_items"), is(this, "_body", []), is(this, "_emptyText");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.FOR_EACH;
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
      getFeature: () => this.eClass().getEStructuralFeature(H.ITEMS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => H.ITEMS,
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
      getFeature: () => this.eClass().getEStructuralFeature(H.BODY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => H.BODY,
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
      getFeature: () => this.eClass().getEStructuralFeature(H.EMPTY_TEXT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => H.EMPTY_TEXT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case H.ITEMS:
        return this.items;
      case H.BODY:
        return this.body;
      case H.EMPTY_TEXT:
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
      case H.ITEMS:
        this.items = t, super.eSet(e, t);
        break;
      case H.BODY:
        this.body = t, super.eSet(e, t);
        break;
      case H.EMPTY_TEXT:
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
      case H.ITEMS:
        return this._items !== void 0;
      case H.BODY:
        return this._body !== void 0 && this._body.length > 0;
      case H.EMPTY_TEXT:
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
      case H.ITEMS:
        this._items = void 0;
        return;
      case H.BODY:
        this._body = [];
        return;
      case H.EMPTY_TEXT:
        this._emptyText = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
is(vr, "ITEMS", 14), is(vr, "BODY", 15), is(vr, "EMPTY_TEXT", 16);
let qu = vr;
var zu = Object.defineProperty, Ku = (s, e, t) => e in s ? zu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, wr = (s, e, t) => Ku(s, typeof e != "symbol" ? e + "" : e, t);
const Qr = class ce extends me {
  constructor() {
    super(...arguments), wr(this, "_displayExpression"), wr(this, "_targetRoute");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.REFERENCE_LINK_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(ce.DISPLAY_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ce.DISPLAY_EXPRESSION,
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
      getFeature: () => this.eClass().getEStructuralFeature(ce.TARGET_ROUTE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ce.TARGET_ROUTE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ce.DISPLAY_EXPRESSION:
        return this.displayExpression;
      case ce.TARGET_ROUTE:
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
      case ce.DISPLAY_EXPRESSION:
        this.displayExpression = t, super.eSet(e, t);
        break;
      case ce.TARGET_ROUTE:
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
      case ce.DISPLAY_EXPRESSION:
        return this._displayExpression !== void 0;
      case ce.TARGET_ROUTE:
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
      case ce.DISPLAY_EXPRESSION:
        this._displayExpression = void 0;
        return;
      case ce.TARGET_ROUTE:
        this._targetRoute = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
wr(Qr, "DISPLAY_EXPRESSION", 14), wr(Qr, "TARGET_ROUTE", 15);
let Qu = Qr;
var Ju = Object.defineProperty, Zu = (s, e, t) => e in s ? Ju(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ze = (s, e, t) => Zu(s, typeof e != "symbol" ? e + "" : e, t);
const cr = class W extends tt {
  constructor() {
    super(...arguments), Ze(this, "_name"), Ze(this, "_priority", 0), Ze(this, "_templates", []), Ze(this, "_cases", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.U_I_MODEL_OVERLAY;
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
      getFeature: () => this.eClass().getEStructuralFeature(W.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(W.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.PRIORITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(W.TEMPLATES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.TEMPLATES,
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
      getFeature: () => this.eClass().getEStructuralFeature(W.CASES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.CASES,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case W.NAME:
        return this.name;
      case W.PRIORITY:
        return this.priority;
      case W.TEMPLATES:
        return this.templates;
      case W.CASES:
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
      case W.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case W.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case W.TEMPLATES:
        this.templates = t, super.eSet(e, t);
        break;
      case W.CASES:
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
      case W.NAME:
        return this._name !== void 0;
      case W.PRIORITY:
        return this._priority !== 0;
      case W.TEMPLATES:
        return this._templates !== void 0 && this._templates.length > 0;
      case W.CASES:
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
      case W.NAME:
        this._name = void 0;
        return;
      case W.PRIORITY:
        this._priority = 0;
        return;
      case W.TEMPLATES:
        this._templates = [];
        return;
      case W.CASES:
        this._cases = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ze(cr, "NAME", 0), Ze(cr, "PRIORITY", 1), Ze(cr, "TEMPLATES", 2), Ze(cr, "CASES", 3);
let en = cr;
var tn = Object.defineProperty, sn = (s, e, t) => e in s ? tn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Se = (s, e, t) => sn(s, typeof e != "symbol" ? e + "" : e, t);
const ct = class D extends tt {
  constructor() {
    super(...arguments), Se(this, "_extends"), Se(this, "_css"), Se(this, "_vueComponent"), Se(this, "_visibilityCondition"), Se(this, "_name"), Se(this, "_group");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.BASE_STYLE;
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
Se(ct, "EXTENDS", 2), Se(ct, "CSS", 3), Se(ct, "VUE_COMPONENT", 4), Se(ct, "VISIBILITY_CONDITION", 5), Se(ct, "NAME", 0), Se(ct, "GROUP", 1);
let Ga = ct;
var rn = Object.defineProperty, an = (s, e, t) => e in s ? rn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Fr = (s, e, t) => an(s, typeof e != "symbol" ? e + "" : e, t);
const Jr = class Ee extends Ga {
  constructor() {
    super(...arguments), Fr(this, "_layout"), Fr(this, "_order");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.LAYOUT_STYLE;
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
      getFeature: () => this.eClass().getEStructuralFeature(Ee.LAYOUT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ee.LAYOUT,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ee.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ee.ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Ee.LAYOUT:
        return this.layout;
      case Ee.ORDER:
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
      case Ee.LAYOUT:
        this.layout = t, super.eSet(e, t);
        break;
      case Ee.ORDER:
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
      case Ee.LAYOUT:
        return this._layout !== void 0;
      case Ee.ORDER:
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
      case Ee.LAYOUT:
        this._layout = void 0;
        return;
      case Ee.ORDER:
        this._order = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Fr(Jr, "LAYOUT", 6), Fr(Jr, "ORDER", 7);
let un = Jr;
var nn = Object.defineProperty, ln = (s, e, t) => e in s ? nn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, De = (s, e, t) => ln(s, typeof e != "symbol" ? e + "" : e, t);
const es = class F extends Ga {
  constructor() {
    super(...arguments), De(this, "_feature"), De(this, "_widgetType"), De(this, "_label"), De(this, "_readOnly"), De(this, "_order");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.WIDGET_STYLE;
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
      getFeature: () => this.eClass().getEStructuralFeature(F.FEATURE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.FEATURE,
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
      getFeature: () => this.eClass().getEStructuralFeature(F.WIDGET_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.WIDGET_TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(F.LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(F.READ_ONLY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.READ_ONLY,
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
      getFeature: () => this.eClass().getEStructuralFeature(F.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case F.FEATURE:
        return this.feature;
      case F.WIDGET_TYPE:
        return this.widgetType;
      case F.LABEL:
        return this.label;
      case F.READ_ONLY:
        return this.readOnly;
      case F.ORDER:
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
      case F.FEATURE:
        this.feature = t, super.eSet(e, t);
        break;
      case F.WIDGET_TYPE:
        this.widgetType = t, super.eSet(e, t);
        break;
      case F.LABEL:
        this.label = t, super.eSet(e, t);
        break;
      case F.READ_ONLY:
        this.readOnly = t, super.eSet(e, t);
        break;
      case F.ORDER:
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
      case F.FEATURE:
        return this._feature !== void 0;
      case F.WIDGET_TYPE:
        return this._widgetType !== void 0;
      case F.LABEL:
        return this._label !== void 0;
      case F.READ_ONLY:
        return this._readOnly !== void 0;
      case F.ORDER:
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
      case F.FEATURE:
        this._feature = void 0;
        return;
      case F.WIDGET_TYPE:
        this._widgetType = void 0;
        return;
      case F.LABEL:
        this._label = void 0;
        return;
      case F.READ_ONLY:
        this._readOnly = void 0;
        return;
      case F.ORDER:
        this._order = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
De(es, "FEATURE", 6), De(es, "WIDGET_TYPE", 7), De(es, "LABEL", 8), De(es, "READ_ONLY", 9), De(es, "ORDER", 10);
let Wa = es;
var on = Object.defineProperty, cn = (s, e, t) => e in s ? on(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ya = (s, e, t) => cn(s, typeof e != "symbol" ? e + "" : e, t);
const $a = class Et extends Wa {
  constructor() {
    super(...arguments), Ya(this, "_columns", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.TABLE_STYLE;
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
      getFeature: () => this.eClass().getEStructuralFeature(Et.COLUMNS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Et.COLUMNS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Et.COLUMNS:
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
      case Et.COLUMNS:
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
      case Et.COLUMNS:
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
      case Et.COLUMNS:
        this._columns = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ya($a, "COLUMNS", 11);
let En = $a;
var hn = Object.defineProperty, gn = (s, e, t) => e in s ? hn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Pr = (s, e, t) => gn(s, typeof e != "symbol" ? e + "" : e, t);
const Zr = class he extends tt {
  constructor() {
    super(...arguments), Pr(this, "_language", "OCL"), Pr(this, "_body", "");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.EXPRESSION;
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
      getFeature: () => this.eClass().getEStructuralFeature(he.LANGUAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => he.LANGUAGE,
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
      getFeature: () => this.eClass().getEStructuralFeature(he.BODY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => he.BODY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case he.LANGUAGE:
        return this.language;
      case he.BODY:
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
      case he.LANGUAGE:
        this.language = t, super.eSet(e, t);
        break;
      case he.BODY:
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
      case he.LANGUAGE:
        return this._language !== "OCL";
      case he.BODY:
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
      case he.LANGUAGE:
        this._language = "OCL";
        return;
      case he.BODY:
        this._body = "";
        return;
      default:
        super.eUnset(e);
    }
  }
};
Pr(Zr, "LANGUAGE", 0), Pr(Zr, "BODY", 1);
let ka = Zr;
const kr = {
  ERROR: "ERROR"
};
var dn = Object.defineProperty, pn = (s, e, t) => e in s ? dn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, br = (s, e, t) => pn(s, typeof e != "symbol" ? e + "" : e, t);
const ea = class ge extends ka {
  constructor() {
    super(...arguments), br(this, "_defaultMessage"), br(this, "_severity", kr.ERROR);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.VALIDATION_EXPRESSION;
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
      getFeature: () => this.eClass().getEStructuralFeature(ge.DEFAULT_MESSAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ge.DEFAULT_MESSAGE,
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
      getFeature: () => this.eClass().getEStructuralFeature(ge.SEVERITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ge.SEVERITY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ge.DEFAULT_MESSAGE:
        return this.defaultMessage;
      case ge.SEVERITY:
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
      case ge.DEFAULT_MESSAGE:
        this.defaultMessage = t, super.eSet(e, t);
        break;
      case ge.SEVERITY:
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
      case ge.DEFAULT_MESSAGE:
        return this._defaultMessage !== void 0;
      case ge.SEVERITY:
        return this._severity !== kr.ERROR;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ge.DEFAULT_MESSAGE:
        this._defaultMessage = void 0;
        return;
      case ge.SEVERITY:
        this._severity = kr.ERROR;
        return;
      default:
        super.eUnset(e);
    }
  }
};
br(ea, "DEFAULT_MESSAGE", 2), br(ea, "SEVERITY", 3);
let Tn = ea;
var Sn = Object.defineProperty, fn = (s, e, t) => e in s ? Sn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, se = (s, e, t) => fn(s, typeof e != "symbol" ? e + "" : e, t);
const je = class _ extends tt {
  constructor() {
    super(...arguments), se(this, "_order"), se(this, "_matchCode"), se(this, "_matchSeverity"), se(this, "_matchExpression"), se(this, "_mappedText"), se(this, "_mappedTextExpression"), se(this, "_mappedSeverity");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return A.Literals.VALIDATION_MESSAGE_MAPPER;
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
      getFeature: () => this.eClass().getEStructuralFeature(_.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => _.ORDER,
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
      getFeature: () => this.eClass().getEStructuralFeature(_.MATCH_CODE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => _.MATCH_CODE,
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
      getFeature: () => this.eClass().getEStructuralFeature(_.MATCH_SEVERITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => _.MATCH_SEVERITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(_.MATCH_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => _.MATCH_EXPRESSION,
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
      getFeature: () => this.eClass().getEStructuralFeature(_.MAPPED_TEXT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => _.MAPPED_TEXT,
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
      getFeature: () => this.eClass().getEStructuralFeature(_.MAPPED_TEXT_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => _.MAPPED_TEXT_EXPRESSION,
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
      getFeature: () => this.eClass().getEStructuralFeature(_.MAPPED_SEVERITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => _.MAPPED_SEVERITY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case _.ORDER:
        return this.order;
      case _.MATCH_CODE:
        return this.matchCode;
      case _.MATCH_SEVERITY:
        return this.matchSeverity;
      case _.MATCH_EXPRESSION:
        return this.matchExpression;
      case _.MAPPED_TEXT:
        return this.mappedText;
      case _.MAPPED_TEXT_EXPRESSION:
        return this.mappedTextExpression;
      case _.MAPPED_SEVERITY:
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
      case _.ORDER:
        this.order = t, super.eSet(e, t);
        break;
      case _.MATCH_CODE:
        this.matchCode = t, super.eSet(e, t);
        break;
      case _.MATCH_SEVERITY:
        this.matchSeverity = t, super.eSet(e, t);
        break;
      case _.MATCH_EXPRESSION:
        this.matchExpression = t, super.eSet(e, t);
        break;
      case _.MAPPED_TEXT:
        this.mappedText = t, super.eSet(e, t);
        break;
      case _.MAPPED_TEXT_EXPRESSION:
        this.mappedTextExpression = t, super.eSet(e, t);
        break;
      case _.MAPPED_SEVERITY:
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
      case _.ORDER:
        return this._order !== void 0;
      case _.MATCH_CODE:
        return this._matchCode !== void 0;
      case _.MATCH_SEVERITY:
        return this._matchSeverity !== void 0;
      case _.MATCH_EXPRESSION:
        return this._matchExpression !== void 0;
      case _.MAPPED_TEXT:
        return this._mappedText !== void 0;
      case _.MAPPED_TEXT_EXPRESSION:
        return this._mappedTextExpression !== void 0;
      case _.MAPPED_SEVERITY:
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
      case _.ORDER:
        this._order = void 0;
        return;
      case _.MATCH_CODE:
        this._matchCode = void 0;
        return;
      case _.MATCH_SEVERITY:
        this._matchSeverity = void 0;
        return;
      case _.MATCH_EXPRESSION:
        this._matchExpression = void 0;
        return;
      case _.MAPPED_TEXT:
        this._mappedText = void 0;
        return;
      case _.MAPPED_TEXT_EXPRESSION:
        this._mappedTextExpression = void 0;
        return;
      case _.MAPPED_SEVERITY:
        this._mappedSeverity = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
se(je, "ORDER", 0), se(je, "MATCH_CODE", 1), se(je, "MATCH_SEVERITY", 2), se(je, "MATCH_EXPRESSION", 3), se(je, "MAPPED_TEXT", 4), se(je, "MAPPED_TEXT_EXPRESSION", 5), se(je, "MAPPED_SEVERITY", 6);
let mn = je;
var In = Object.defineProperty, Nn = (s, e, t) => e in s ? In(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ln = (s, e, t) => Nn(s, e + "", t);
const xa = class Xa extends yi {
  static get eINSTANCE() {
    return this._instance || (this._instance = new Xa()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(A.eINSTANCE);
  }
  /**
   * Create a new UIModel instance
   */
  createUIModel() {
    return new Yi();
  }
  /**
   * Create a new FormView instance
   */
  createFormView() {
    return new Hi();
  }
  /**
   * Create a new TableView instance
   */
  createTableView() {
    return new zi();
  }
  /**
   * Create a new SectionView instance
   */
  createSectionView() {
    return new Ji();
  }
  /**
   * Create a new TabView instance
   */
  createTabView() {
    return new tu();
  }
  /**
   * Create a new SummaryView instance
   */
  createSummaryView() {
    return new au();
  }
  /**
   * Create a new MasterDetail instance
   */
  createMasterDetail() {
    return new nu();
  }
  /**
   * Create a new PropertyBinding instance
   */
  createPropertyBinding() {
    return new cu();
  }
  /**
   * Create a new InputWidget instance
   */
  createInputWidget() {
    return new pu();
  }
  /**
   * Create a new TextAreaWidget instance
   */
  createTextAreaWidget() {
    return new fu();
  }
  /**
   * Create a new NumberWidget instance
   */
  createNumberWidget() {
    return new Nu();
  }
  /**
   * Create a new CheckboxWidget instance
   */
  createCheckboxWidget() {
    return new _u();
  }
  /**
   * Create a new DateWidget instance
   */
  createDateWidget() {
    return new Cu();
  }
  /**
   * Create a new ComboboxWidget instance
   */
  createComboboxWidget() {
    return new Ru();
  }
  /**
   * Create a new SelectWidget instance
   */
  createSelectWidget() {
    return new Pu();
  }
  /**
   * Create a new AllFeatures instance
   */
  createAllFeatures() {
    return new Uu();
  }
  /**
   * Create a new TemplateCase instance
   */
  createTemplateCase() {
    return new Gu();
  }
  /**
   * Create a new GroupWidget instance
   */
  createGroupWidget() {
    return new $u();
  }
  /**
   * Create a new Conditional instance
   */
  createConditional() {
    return new Xu();
  }
  /**
   * Create a new ForEach instance
   */
  createForEach() {
    return new qu();
  }
  /**
   * Create a new ReferenceLinkWidget instance
   */
  createReferenceLinkWidget() {
    return new Qu();
  }
  /**
   * Create a new UIModelOverlay instance
   */
  createUIModelOverlay() {
    return new en();
  }
  /**
   * Create a new LayoutStyle instance
   */
  createLayoutStyle() {
    return new un();
  }
  /**
   * Create a new WidgetStyle instance
   */
  createWidgetStyle() {
    return new Wa();
  }
  /**
   * Create a new TableStyle instance
   */
  createTableStyle() {
    return new En();
  }
  /**
   * Create a new Expression instance
   */
  createExpression() {
    return new ka();
  }
  /**
   * Create a new ValidationExpression instance
   */
  createValidationExpression() {
    return new Tn();
  }
  /**
   * Create a new ValidationMessageMapper instance
   */
  createValidationMessageMapper() {
    return new mn();
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
Ln(xa, "_instance");
let na = xa;
const Ha = Symbol("uimodelComposerRegistry");
function ja() {
  const s = et(Ha);
  if (!s)
    throw new Error(
      "[uimodel-composer] No ComposerRegistry provided. Make sure UIModelComposer is an ancestor of this component."
    );
  return s;
}
function vn(s) {
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
const _n = "uic";
function hr(s) {
  return s === !0 || s === "true";
}
function gt(s, e = 0) {
  if (typeof s == "number") return s;
  const t = Number(s);
  return Number.isFinite(t) ? t : e;
}
const On = {
  HOVER: ":hover",
  FOCUS: ":focus",
  FOCUS_WITHIN: ":focus-within",
  ACTIVE: ":active",
  DISABLED: ".uim-s-disabled",
  READONLY: ".uim-s-readonly",
  INVALID: ".uim-s-invalid",
  REQUIRED: ".uim-s-required"
};
function Vr(s) {
  return s.trim().replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() || "unnamed";
}
function ta(s) {
  return `--${_n}-${Vr(s)}`;
}
function An(s) {
  return s.replace(/token\(\s*([^)]+?)\s*\)/g, (e, t) => `var(${ta(t)})`);
}
function qa(s) {
  return `uic-${Vr(s)}`;
}
function Cn(s) {
  return `uicss-theme-${Vr(s)}`;
}
function za(s, e) {
  return `uicss-cond-${Vr(s.name ?? "sheet")}-${e}`;
}
function Ka(s, e = "  ") {
  return s.filter((t) => t.property && t.value !== void 0).map((t) => `${e}${t.property.trim()}: ${An(t.value)}${hr(t.important) ? " !important" : ""};`).join(`
`);
}
function yn(s, e) {
  return e.filter((t) => t.declarations.length > 0).map((t) => {
    var r, i;
    const u = ((i = (r = t.state) == null ? void 0 : r.getName) == null ? void 0 : i.call(r)) ?? String(t.state), n = On[u] ?? `:${u.toLowerCase()}`;
    return `${s}${n} {
${Ka(t.declarations)}
}`;
  }).join(`
`);
}
function fa(s, e, t, r) {
  const i = [];
  e.length > 0 && i.push(`${s} {
${Ka(e)}
}`);
  const u = yn(s, t);
  if (u && i.push(u), i.length === 0) return "";
  const n = i.join(`
`);
  return r ? `@media ${r} {
${n}
}` : n;
}
function Qa(s) {
  return s.includeSubtypes === void 0 || s.includeSubtypes === null ? !0 : hr(s.includeSubtypes);
}
function Dn(s, e, t) {
  var r, i;
  let u;
  const n = (i = (r = e.targetClass) == null ? void 0 : r.getName) == null ? void 0 : i.call(r);
  return n ? u = Qa(e) ? `.uim-c-${n}` : `.uim-component[data-uim-eclass="${n}"]` : u = ".uim-component", e.componentName && (u += `[data-uim-name="${e.componentName}"]`), e.group && (u += `[data-uim-group="${e.group}"]`), e.condition && (u += `.${za(s, t)}`), u;
}
function Rn(s) {
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
function wn(s) {
  const e = [];
  if (s.tokens.length > 0) {
    const r = s.tokens.filter((i) => i.name).map((i) => `  ${ta(i.name)}: ${i.value ?? ""};`);
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
    }).map((u) => `  ${ta(u.token.name)}: ${u.value ?? ""};`);
    hr(r.dark) && i.push("  color-scheme: dark;"), i.length > 0 && e.push(`.${Cn(r.name)} {
${i.join(`
`)}
}`);
  }
  const t = s.rules.map((r, i) => ({ rule: r, index: i }));
  t.sort((r, i) => gt(r.rule.priority) - gt(i.rule.priority) || r.index - i.index);
  for (const { rule: r, index: i } of t) {
    const u = fa(
      Dn(s, r, i),
      r.declarations,
      r.states,
      r.media || void 0
    );
    u && e.push(u);
  }
  for (const r of Rn(s.styles)) {
    if (!r.name) continue;
    const i = fa(`.${qa(r.name)}`, r.declarations, r.states);
    i && e.push(i);
  }
  return e.join(`

`);
}
function Fn(s) {
  return s.map(wn).filter(Boolean).join(`

`);
}
const pr = Symbol("uimodel-css:sheets");
let Pn = 0;
function bn(s) {
  const e = gr(0);
  class t extends Ra {
    notifyChanged(E) {
      var h;
      try {
        super.notifyChanged(E);
      } catch {
      }
      if (!((h = E.isTouch) != null && h.call(E))) {
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
      const h = E.eAdapters(), o = h.indexOf(r);
      o >= 0 && h.splice(o, 1);
    }
  }
  function g() {
    for (const c of i) {
      l(c);
      for (const E of c.eAllContents()) l(E);
    }
    i = [];
  }
  return dr(
    () => [...Me(s)],
    (c) => {
      g();
      for (const E of c)
        n(E), i.push(E);
      e.value++;
    },
    { immediate: !0 }
  ), aa(g), { css: m(() => (e.value, Fn([...Me(s)]))), version: e };
}
function Mn(s) {
  const { css: e, version: t } = bn(s);
  if (typeof document < "u") {
    const r = document.createElement("style");
    r.id = `uimodel-css-${++Pn}`, r.setAttribute("data-uimodel-css", ""), document.head.appendChild(r), Li(() => {
      r.textContent = e.value;
    }), aa(() => {
      r.remove();
    });
  }
  return { css: e, version: t };
}
function Sr(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? us(e) : s;
}
function us(s) {
  return new Proxy(s, {
    get(e, t) {
      var r, i, u;
      if (typeof t != "string") return e[t];
      if (t === "eGet")
        return (g) => {
          var c, E, h;
          if (typeof g == "string") {
            const o = (h = (E = (c = e.eClass) == null ? void 0 : c.call(e)) == null ? void 0 : E.getEStructuralFeature) == null ? void 0 : h.call(E, g);
            return o ? Sr(e.eGet(o)) : void 0;
          }
          return Sr(e.eGet(g));
        };
      if (t in e) return e[t];
      const n = t.charAt(0).toUpperCase() + t.slice(1);
      for (const g of [`get${n}`, `is${n}`])
        if (typeof e[g] == "function") return Sr(e[g]());
      const l = (u = (i = (r = e.eClass) == null ? void 0 : r.call(e)) == null ? void 0 : i.getEStructuralFeature) == null ? void 0 : u.call(i, t);
      if (l) return Sr(e.eGet(l));
    }
  });
}
function Tr(s, e) {
  if (!s) return !0;
  try {
    switch (s.language) {
      case "OCL":
        return Un(s.body, e);
      case "AQL":
        return Vn(s.body, e);
      case "JS":
        return Bn(s.body, e);
      default:
        return console.warn(`[uimodel-composer] Unknown expression language: ${s.language}`), !0;
    }
  } catch (t) {
    return console.error(`[uimodel-composer] Expression evaluation failed (${s.language}):`, t), !0;
  }
}
function Un(s, e) {
  try {
    const { EMFOclValidator: t } = globalThis.__emftsOcl__ ?? {};
    return t ? new t().evaluateExpression(s, us(e)) === !0 : (console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup."), !0);
  } catch {
    return !0;
  }
}
function Vn(s, e) {
  return console.warn("[uimodel-composer] AQL evaluation not yet implemented."), !0;
}
function Bn(s, e) {
  return !!new Function("self", `"use strict"; return (${s});`)(us(e));
}
function Gn(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? us(e) : s;
}
function la(s, e, t = {}) {
  if (s != null && s.body)
    try {
      switch (s.language) {
        case "JS": {
          const r = Object.keys(t);
          return new Function("self", ...r, `"use strict"; return (${s.body});`)(us(e), ...r.map((i) => Gn(t[i])));
        }
        case "OCL": {
          const { EMFOclValidator: r } = globalThis.__emftsOcl__ ?? {};
          if (!r) {
            console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup.");
            return;
          }
          return new r().evaluateExpression(s.body, us(e));
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
function Wn(s) {
  return s.map((e, t) => ({ overlay: e, index: t })).sort((e, t) => gt(t.overlay.priority) - gt(e.overlay.priority) || e.index - t.index).flatMap(({ overlay: e }) => [...e.cases ?? []]);
}
function Ja(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "AllFeatures";
}
function Yn(s) {
  var e;
  const t = (e = s.eClass) == null ? void 0 : e.call(s);
  return t ? t.getName() === "WidgetComponent" || t.getEAllSuperTypes().some((r) => r.getName() === "WidgetComponent") : !1;
}
function Za(s) {
  return typeof s.isContainment == "function";
}
function $n(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    Ja(i) ? e.push(i) : Yn(i) && i.feature && t.add(i.feature);
    for (const u of i.eClass().getEAllStructuralFeatures()) {
      if (!Za(u) || !u.isContainment()) continue;
      const n = i.eGet(u);
      if (!n) continue;
      const l = u.isMany() ? [...n] : [n];
      for (const g of l) r(g);
    }
  }
  return r(s), { blocks: e, boundFeatures: t };
}
function _r(s) {
  var e;
  return (((e = s.with) == null ? void 0 : e.length) ?? 0) > 0;
}
function kn(s, e) {
  var t;
  const r = s.getEAllStructuralFeatures();
  if (_r(e)) {
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
function xn(s, e) {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const u of e.blocks)
    t.set(u, []), r.set(u, new Set(kn(s, u)));
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
      const g = gt(l.priority) - gt(n.priority), c = Number(_r(l)) - Number(_r(n)), E = i.get(n) - i.get(l);
      (g > 0 || g === 0 && (c > 0 || c === 0 && E > 0)) && (n = l);
    }
    n && t.get(n).push(u);
  }
  for (const [u, n] of t) {
    if (!_r(u)) continue;
    const l = new Map(u.with.map((g, c) => [g, c]));
    n.sort((g, c) => (l.get(g) ?? 0) - (l.get(c) ?? 0));
  }
  return t;
}
function ma(s, e) {
  for (const t of s ?? [])
    if (t.widget && (!t.when || la(
      t.when,
      e
    )))
      return t.widget;
}
function Xn(s, e, t) {
  return ma(t?.overlayCases, e) ?? ma(s.cases, e) ?? s.template;
}
function Mr(s) {
  var e, t, r;
  const i = s.eClass(), u = (e = i.getEPackage()) == null ? void 0 : e.getEFactoryInstance();
  if (!u) throw new Error(`Keine Factory für ${i.getName()}`);
  const n = u.create(i);
  for (const l of i.getEAllStructuralFeatures()) {
    if ((t = l.isDerived) != null && t.call(l) || ((r = l.isChangeable) == null ? void 0 : r.call(l)) === !1) continue;
    const g = s.eGet(l);
    if (g == null) continue;
    const c = Za(l) && l.isContainment();
    if (l.isMany()) {
      const E = [...g];
      if (E.length === 0) continue;
      n.eSet(
        l,
        c ? E.map((h) => Mr(h)) : E
      );
    } else
      n.eSet(l, c ? Mr(g) : g);
  }
  return n;
}
const Hn = /* @__PURE__ */ new Set(["AllFeatures", "Conditional", "ForEach"]);
function xr(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function ei(s, e) {
  if (xr(s) !== "GroupWidget") {
    s.feature = e;
    return;
  }
  const t = s.fields ?? [];
  for (const r of t)
    Hn.has(xr(r)) || (xr(r) === "GroupWidget" ? ei(r, e) : !r.feature && !(r.bindings ?? []).some((i) => i.property === "feature") && (r.feature = e));
}
function jn(s, e) {
  const t = na.eINSTANCE.createValidationExpression();
  return t.language = "JS", t.body = `self.${s} !== null && self.${s} !== undefined && String(self.${s}).length > 0`, t.defaultMessage = `${e ?? s} ist erforderlich.`, t.severity = "ERROR", t;
}
function qn(s) {
  const e = s.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function zn(s, e, t) {
  var r, i, u, n;
  const l = t ?? {
    blocks: [e],
    boundFeatures: /* @__PURE__ */ new Set()
  };
  l.blocks.includes(e) || l.blocks.push(e);
  const g = xn(s, l).get(e) ?? [], c = [];
  for (const E of g) {
    const h = Xn(e, E, l);
    if (!h) {
      console.error(
        `[uimodel-composer] AllFeatures "${e.name ?? "?"}": kein TemplateCase trifft auf Feature "${E.getName() ?? "?"}" und kein Default-Fall (template) gesetzt.`
      );
      continue;
    }
    const o = Mr(h);
    ei(o, E);
    const d = E.getName() ?? "feature";
    o.name = d, o.label === void 0 && e.label !== void 0 && (o.label = e.label), o.placeholder === void 0 && e.placeholder !== void 0 && (o.placeholder = e.placeholder), o.readOnly === void 0 && e.readOnly !== void 0 && (o.readOnly = e.readOnly), o.required === void 0 && e.required !== void 0 && (o.required = e.required), (((r = o.styles) == null ? void 0 : r.length) ?? 0) === 0 && (((i = e.styles) == null ? void 0 : i.length) ?? 0) > 0 && (o.styles = [...e.styles]), o.label || (o.label = qn(d)), !o.group && e.group && (o.group = e.group), o.required === void 0 && gt((u = E.getLowerBound) == null ? void 0 : u.call(E)) >= 1 && (o.required = !0, (((n = o.validations) == null ? void 0 : n.length) ?? 0) === 0 && (o.validations = [jn(d, o.label)]));
    const p = e.bindings ?? [];
    if (p.length > 0) {
      const L = new Set((o.bindings ?? []).map((f) => f.property)), C = p.filter((f) => f.property && !L.has(f.property)).map((f) => Mr(f));
      C.length > 0 && (o.bindings = [...o.bindings ?? [], ...C]);
    }
    c.push(o);
  }
  return c;
}
const ti = Symbol("uimodel:allfeatures-context"), si = gr(0);
function Kn() {
  si.value++;
}
function pt() {
  si.value;
}
function Qn(s) {
  class e extends Ra {
    notifyChanged(l) {
      var g;
      try {
        super.notifyChanged(l);
      } catch {
      }
      if ((g = l.isTouch) != null && g.call(l)) return;
      Kn();
      const c = Me(s);
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
        const E = c.eAdapters(), h = E.indexOf(t);
        h >= 0 && E.splice(h, 1);
      }
    };
    l(n);
    for (const g of n.eAllContents()) l(g);
  }
  dr(
    () => Me(s),
    (n, l) => {
      l && u(l), n && i(n);
    },
    { immediate: !0 }
  ), aa(() => {
    const n = Me(s);
    n && u(n);
  });
}
function ri(s) {
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
function Jn(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "CssStyle";
}
function Zn(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    !i || t.has(i) || (t.add(i), r(i.extends), Jn(i) && i.name && e.push(qa(i.name)));
  }
  for (const i of s ?? []) r(i);
  return e;
}
function el(s, e) {
  var t, r, i;
  const u = (r = (t = s.targetClass) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  if (u) {
    const n = ri((i = e.eClass) == null ? void 0 : i.call(e));
    if (Qa(s)) {
      if (!n.includes(u)) return !1;
    } else if (n[0] !== u)
      return !1;
  }
  return !(s.componentName && e.name !== s.componentName || s.group && e.group !== s.group);
}
function oa(s, e = {}) {
  var t;
  const r = ["uim-component"];
  for (const i of ri((t = s.eClass) == null ? void 0 : t.call(s)))
    r.push(`uim-c-${i}`);
  r.push(...Zn(s.styles)), e.resolvedCss && r.push(...e.resolvedCss.split(/\s+/).filter(Boolean));
  for (const i of e.sheets ?? [])
    i.rules.forEach((u, n) => {
      u.condition && el(u, s) && e.model && Tr(u.condition, e.model) && r.push(za(i, n));
    });
  return [...new Set(r)];
}
function ca(s) {
  var e, t, r;
  const i = {}, u = (r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  return u && (i["data-uim-eclass"] = u), s.name && (i["data-uim-name"] = s.name), s.group && (i["data-uim-group"] = s.group), i;
}
function tl(s, e, t) {
  const r = [];
  return hr(t ?? s.required) && r.push("uim-s-required"), hr(e ?? s.readOnly) && r.push("uim-s-readonly"), r;
}
function ai(s, e = /* @__PURE__ */ new Set()) {
  if (!s) return {};
  if (e.has(s)) return {};
  e.add(s);
  const t = s.extends ? ai(s.extends, e) : {}, r = sl(s);
  return ui(t, r);
}
function ii(s) {
  return s.reduce(
    (e, t) => ui(e, ai(t)),
    {}
  );
}
function sl(s) {
  const e = {};
  s.css !== void 0 && (e.css = s.css), s.vueComponent !== void 0 && (e.vueComponent = s.vueComponent);
  const t = s;
  t.layout !== void 0 && (e.layout = t.layout), t.order !== void 0 && (e.order = t.order);
  const r = s;
  return r.widgetType !== void 0 && (e.widgetType = r.widgetType), r.label !== void 0 && (e.label = r.label), r.readOnly !== void 0 && (e.readOnly = r.readOnly), r.order !== void 0 && (e.order = r.order), e;
}
function ui(s, e) {
  return {
    ...s,
    ...Object.fromEntries(
      Object.entries(e).filter(([, t]) => t !== void 0)
    ),
    // Merge CSS classes (append, not replace)
    css: [s.css, e.css].filter(Boolean).join(" ") || void 0
  };
}
const Ea = /* @__PURE__ */ ee({
  __name: "ComponentDispatcher",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = s, t = ja(), r = m(() => {
      var l, g, c, E;
      const h = ((E = (c = (g = (l = e.component).eClass) == null ? void 0 : g.call(l)) == null ? void 0 : c.getName) == null ? void 0 : E.call(c)) ?? "", o = t.getComposer(h);
      return o || console.warn(`[uimodel-composer] No composer registered for EClass "${h}"`), o ?? null;
    }), i = et(pr, void 0), u = m(() => (pt(), i?.version.value, oa(e.component, {
      model: e.model,
      sheets: i?.sheets.value,
      resolvedCss: ii(e.component.styles ?? []).css
    }))), n = m(() => ca(e.component));
    return (l, g) => r.value ? (N(), q(ia(r.value), ua({
      key: 0,
      component: s.component,
      model: s.model,
      class: u.value
    }, n.value), null, 16, ["component", "model", "class"])) : fe("", !0);
  }
});
function ha(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function rl(s) {
  return ha(s) === "GroupWidget";
}
function al(s) {
  return ha(s) === "Conditional";
}
function il(s) {
  return ha(s) === "ForEach";
}
function ul(s) {
  if (!s) return [];
  const e = typeof s == "object" && Symbol.iterator in s ? s : [s], t = [];
  for (const r of e)
    r && typeof r.eClass == "function" ? t.push(r) : r != null && console.warn("[uimodel-composer] ForEach: Element ist kein EObject und wird übersprungen:", r);
  return t;
}
function sa(s, e, t) {
  var r;
  const i = [];
  for (const u of s ?? [])
    if (Ja(u)) {
      const n = (r = e.eClass) == null ? void 0 : r.call(e);
      if (!n) continue;
      for (const l of zn(n, u, t))
        i.push({ kind: "widget", widget: l, model: e });
    } else if (al(u)) {
      const n = Tr(u.condition, e) ? u.then : u.else;
      i.push(...sa(n, e, t));
    } else if (il(u)) {
      const n = ul(la(u.items, e));
      if (n.length === 0) {
        u.emptyText && i.push({ kind: "note", text: u.emptyText });
        continue;
      }
      for (const l of n)
        i.push(...sa(u.body, l, t));
    } else rl(u) ? i.push({ kind: "group", widget: u, model: e }) : i.push({ kind: "widget", widget: u, model: e });
  return i;
}
function ni(s, e) {
  return m(() => (pt(), Tr(Me(s), Me(e))));
}
const nl = /* @__PURE__ */ new Set([
  "readOnly",
  "required",
  "password",
  "asToggle",
  "multiSelect",
  "asButtonGroup",
  "withTime"
]), ll = /* @__PURE__ */ new Set([
  "maxLength",
  "rows",
  "min",
  "max",
  "step",
  "minSearchLength",
  "order"
]);
function ol(s, e) {
  if (e === null) return s === "feature" ? null : void 0;
  if (s === "feature") return e;
  if (nl.has(s)) return !!e;
  if (ll.has(s)) {
    const t = Number(e);
    return Number.isFinite(t) ? t : void 0;
  }
  return String(e);
}
function cl(s, e) {
  var t;
  const r = { values: {}, featureSuppressed: !1 };
  for (const i of s.bindings ?? []) {
    const u = i.property;
    if (!u || !i.expression) continue;
    const n = la(i.expression, e, {
      feature: s.feature,
      eClass: (t = e.eClass) == null ? void 0 : t.call(e)
    });
    if (n === void 0) continue;
    if (u === "feature") {
      n === null ? r.featureSuppressed = !0 : r.feature = n;
      continue;
    }
    const l = ol(u, n);
    l !== void 0 && (r.values[u] = l);
  }
  return r;
}
function li(s, e) {
  return m(() => {
    var t;
    pt();
    const r = Me(s), i = ii(r.styles), u = {
      ...r.label !== void 0 ? { label: r.label } : {},
      ...r.placeholder !== void 0 ? { placeholder: r.placeholder } : {},
      ...r.readOnly !== void 0 ? { readOnly: r.readOnly } : {},
      ...r.required !== void 0 ? { required: r.required } : {}
    }, n = e ? Me(e) : void 0;
    if (!n || (((t = r.bindings) == null ? void 0 : t.length) ?? 0) === 0)
      return { ...i, ...u };
    const l = cl(r, n);
    return {
      ...i,
      ...u,
      ...l.values,
      boundFeature: l.feature,
      featureSuppressed: l.featureSuppressed
    };
  });
}
var z = /* @__PURE__ */ ((s) => (s[s.DEFAULT = 0] = "DEFAULT", s[s.DATA_TYPE = 100] = "DATA_TYPE", s[s.ECLASS = 200] = "ECLASS", s[s.FEATURE = 300] = "FEATURE", s[s.PACKAGE = 400] = "PACKAGE", s[s.INSTANCE = 500] = "INSTANCE", s[s.OVERRIDE = 1e3] = "OVERRIDE", s))(z || {});
function K() {
  return { matches: !1, priority: 0 };
}
function Ne(s) {
  return { matches: !0, priority: s };
}
let El = class {
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
      return K();
    if (t === this.eClass)
      return Ne(z.ECLASS + 50);
    if (t.getName() === this.eClass.getName()) {
      const r = t.getEPackage(), i = this.eClass.getEPackage();
      if (r && i && r.getNsURI() === i.getNsURI())
        return Ne(z.ECLASS + 50);
    }
    return this.isSuperTypeOf(this.eClass, t) ? Ne(z.ECLASS) : K();
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
}, hl = class {
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
      return K();
    const u = (t = i.getEType) == null ? void 0 : t.call(i);
    return u && ((r = u.getName) == null ? void 0 : r.call(u)) === this.dataTypeName ? Ne(z.DATA_TYPE) : K();
  }
  /**
   * Check if the feature is an EAttribute.
   */
  isEAttribute(e) {
    var t, r;
    return !e || typeof e != "object" ? !1 : "getEAttributeType" in e || "eClass" in e && typeof e.eClass == "function" && ((r = (t = e.eClass()) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "EAttribute";
  }
}, gl = class {
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
    return K();
  }
  /**
   * Match against a specific enum.
   */
  matchEnum(e) {
    var t;
    return this.enumName ? ((t = e.getName) == null ? void 0 : t.call(e)) === this.enumName ? Ne(z.DATA_TYPE + 50) : K() : Ne(z.DATA_TYPE);
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
}, dl = class {
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
      return K();
    const g = l;
    let c = z.DATA_TYPE;
    if (this.containment !== void 0) {
      if ((((t = g.isContainment) == null ? void 0 : t.call(g)) ?? !1) !== this.containment)
        return K();
      c += 25;
    }
    if (this.targetClass) {
      const E = (r = g.getEReferenceType) == null ? void 0 : r.call(g);
      if (!E)
        return K();
      const h = (i = E.getName) == null ? void 0 : i.call(E), o = (n = (u = this.targetClass).getName) == null ? void 0 : n.call(u);
      if (h !== o && !this.isSuperTypeOf(this.targetClass, E))
        return K();
      c += 25;
    }
    return Ne(c);
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
class pl {
  constructor(e, t) {
    this.eClass = e, this.featureName = t;
  }
  /**
   * Match the context against this specific feature.
   */
  match(e) {
    var t, r, i, u, n, l, g, c, E, h;
    const o = e.feature || e.attribute || e.reference;
    if (!o || ((t = o.getName) == null ? void 0 : t.call(o)) !== this.featureName)
      return K();
    const d = (r = o.getEContainingClass) == null ? void 0 : r.call(o);
    if (!d)
      return K();
    if (d === this.eClass)
      return Ne(z.FEATURE);
    const p = (i = d.getName) == null ? void 0 : i.call(d), L = (n = (u = this.eClass).getName) == null ? void 0 : n.call(u);
    if (p === L) {
      const C = (l = d.getEPackage) == null ? void 0 : l.call(d), f = (c = (g = this.eClass).getEPackage) == null ? void 0 : c.call(g);
      if (C && f && ((E = C.getNsURI) == null ? void 0 : E.call(C)) === ((h = f.getNsURI) == null ? void 0 : h.call(f)))
        return Ne(z.FEATURE);
    }
    return this.isInheritedFrom(d, this.eClass) ? Ne(z.FEATURE - 10) : K();
  }
  /**
   * Check if subClass inherits from superClass.
   */
  isInheritedFrom(e, t) {
    var r, i, u, n, l, g, c;
    const E = (r = e.getEAllSuperTypes) == null ? void 0 : r.call(e);
    if (!E) return !1;
    for (const h of E) {
      if (h === t) return !0;
      if (((i = h.getName) == null ? void 0 : i.call(h)) === ((u = t.getName) == null ? void 0 : u.call(t))) {
        const o = (n = h.getEPackage) == null ? void 0 : n.call(h), d = (l = t.getEPackage) == null ? void 0 : l.call(t);
        if (o && d && ((g = o.getNsURI) == null ? void 0 : g.call(o)) === ((c = d.getNsURI) == null ? void 0 : c.call(d)))
          return !0;
      }
    }
    return !1;
  }
}
var Tl = Object.defineProperty, Sl = (s, e, t) => e in s ? Tl(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ia = (s, e, t) => Sl(s, typeof e != "symbol" ? e + "" : e, t);
let fl = 0;
function ml() {
  return `descriptor-${++fl}`;
}
let Il = class {
  constructor() {
    Ia(this, "entries", []), Ia(this, "instanceOverrides", /* @__PURE__ */ new WeakMap());
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
      { priority: z.INSTANCE }
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
      { priority: z.ECLASS, ...r }
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
      { priority: z.DATA_TYPE, ...r }
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
      { priority: z.DATA_TYPE, ...r }
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
      { priority: z.DATA_TYPE, ...t }
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
      { priority: z.FEATURE, ...i }
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
    const i = ml();
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
        const r = new El(e.eClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "datatype": {
        const r = new hl(e.dataTypeName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "enum": {
        const r = new gl(e.enumName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "reference": {
        const r = new dl(e.containment, e.targetClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "feature": {
        const r = new pl(e.eClass, e.featureName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "instance":
        return (r) => r.eObject === e.eObject ? Ne(t ?? z.INSTANCE) : K();
      case "custom":
        return e.matcher;
      default:
        return () => K();
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
const ns = new Il();
var Nl = Object.defineProperty, Ll = (s, e, t) => e in s ? Nl(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Na = (s, e, t) => Ll(s, typeof e != "symbol" ? e + "" : e, t);
let vl = class {
  constructor() {
    Na(this, "lazyRegistrations", []), Na(this, "resolvedPackages", /* @__PURE__ */ new Map());
  }
  /**
   * Register a decorated component immediately.
   */
  register(e, t, r) {
    ns.register(e, t, r);
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
      r ? ns.register(t.component, r, t.options) : e.push(t);
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
new vl();
const oi = Symbol("componentRegistry");
function _l() {
  const s = et(oi) ?? ns;
  function e(h) {
    return s.getComponent(h);
  }
  function t(h, o) {
    return s.getComponentForFeature(h, o);
  }
  function r(h, o) {
    return s.getComponentForEClass(h, o);
  }
  function i(h, o, d) {
    return s.register(h, o, d);
  }
  function u(h, o) {
    return s.registerForInstance(h, o);
  }
  function n(h, o, d) {
    return s.registerForEClass(h, o, d);
  }
  function l(h, o, d) {
    return s.registerForDataType(h, o, d);
  }
  function g(h, o, d) {
    return s.registerForEnum(h, o, d);
  }
  function c(h, o) {
    return s.registerForReference(h, o);
  }
  function E(h, o, d, p) {
    return s.registerForFeature(h, o, d, p);
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
const Ol = { class: "uimodel-fallback-widget" }, Al = { class: "uimodel-fallback-widget__label" }, Cl = {
  key: 0,
  "aria-hidden": "true"
}, yl = ["rows", "value", "placeholder", "readonly", "disabled"], Dl = /* @__PURE__ */ ee({
  __name: "FallbackWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = m(() => {
      var o;
      return ((o = e.custom) == null ? void 0 : o.resolvedStyle) ?? {};
    }), r = m(
      () => {
        var o, d;
        return t.value.label ?? ((d = (o = e.feature) == null ? void 0 : o.getName) == null ? void 0 : d.call(o)) ?? "";
      }
    ), i = m(() => t.value.placeholder ?? ""), u = m(() => g(t.value.readOnly)), n = m(() => g(t.value.required)), l = m(() => {
      var o, d;
      const p = (d = (o = e.custom) == null ? void 0 : o.rawWidget) == null ? void 0 : d.rows, L = Number(p);
      return Number.isFinite(L) && L > 0 ? L : 3;
    });
    function g(o) {
      return o === !0 || o === "true";
    }
    const c = m(() => {
      var o;
      const d = (o = e.eObject) == null ? void 0 : o.eGet(e.feature);
      return d == null ? "" : String(d);
    }), E = gr(c.value);
    dr(c, (o) => {
      E.value = o;
    });
    function h(o) {
      var d;
      const p = o.target.value;
      E.value = p, (d = e.eObject) == null || d.eSet(e.feature, p);
    }
    return (o, d) => (N(), b("div", Ol, [
      J("label", Al, [
        Da(qe(r.value), 1),
        n.value ? (N(), b("span", Cl, " *")) : fe("", !0)
      ]),
      J("textarea", {
        class: "uimodel-fallback-widget__input",
        rows: l.value,
        value: E.value,
        placeholder: i.value,
        readonly: u.value,
        disabled: u.value,
        onInput: h
      }, null, 40, yl)
    ]));
  }
}), Rl = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, wl = /* @__PURE__ */ Rl(Dl, [["__scopeId", "data-v-0237261a"]]), ci = /* @__PURE__ */ ee({
  __name: "WidgetComposer",
  props: {
    widget: {},
    model: {}
  },
  setup(s) {
    const e = s, t = /* @__PURE__ */ new Set(), { getComponentForFeature: r } = _l(), i = ni(
      () => e.widget.visibilityCondition,
      () => e.model
    ), u = li(
      () => e.widget,
      () => e.model
    ), n = m(
      () => u.value.boundFeature ?? e.widget.feature
    ), l = m(() => {
      var o, d, p, L, C, f, M, Q;
      if (!n.value) return null;
      const re = r(n.value, e.model);
      if (re) return re;
      const y = ((L = (p = (d = (o = e.widget).eClass) == null ? void 0 : d.call(o)) == null ? void 0 : p.getName) == null ? void 0 : L.call(p)) ?? "WidgetComponent", P = ((Q = (M = (f = (C = n.value).getEType) == null ? void 0 : f.call(C)) == null ? void 0 : M.getName) == null ? void 0 : Q.call(M)) ?? "?", Y = `${y}/${P}`;
      return t.has(Y) || (t.add(Y), console.warn(
        `[uimodel-composer] Kein Renderer für Widget "${y}" auf Datentyp "${P}" registriert — Fallback als Plaintext-Editor. Host: Renderer über die @emfts/vue-registry registrieren.`
      )), wl;
    }), g = m(() => {
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
    }), c = et(pr, void 0), E = m(() => (pt(), c?.version.value, [
      ...oa(e.widget, {
        model: e.model,
        sheets: c?.sheets.value,
        resolvedCss: u.value.css
      }),
      ...tl(
        e.widget,
        u.value.readOnly,
        u.value.required
      )
    ])), h = m(() => ca(e.widget));
    return (o, d) => de(i) && l.value && !de(u).featureSuppressed ? (N(), q(ia(l.value), ua({ key: 0 }, { ...g.value, ...h.value }, { class: E.value }), null, 16, ["class"])) : fe("", !0);
  }
}), Fl = {
  key: 0,
  class: "uim-group-label"
}, Pl = /* @__PURE__ */ ee({
  __name: "GroupComposer",
  props: {
    widget: {},
    model: {}
  },
  setup(s) {
    const e = s, t = et(pr, void 0), r = ni(
      () => e.widget.visibilityCondition,
      () => e.model
    ), i = li(
      () => e.widget,
      () => e.model
    ), u = m(() => {
      const E = i.value.label;
      return E == null ? "" : String(E);
    }), n = m(
      () => String(e.widget.layout ?? "VERTICAL").toLowerCase()
    ), l = m(() => (pt(), t?.version.value, [
      ...oa(e.widget, {
        model: e.model,
        sheets: t?.sheets.value,
        resolvedCss: i.value.css
      }),
      "uimodel-group",
      `uimodel-group--${n.value}`
    ])), g = m(
      () => ca(e.widget)
    ), c = m(() => e.widget.fields ?? []);
    return (E, h) => de(r) ? (N(), b("div", ua({
      key: 0,
      class: l.value
    }, g.value), [
      u.value ? (N(), b("div", Fl, qe(u.value), 1)) : fe("", !0),
      Er(Ei, {
        fields: c.value,
        model: s.model
      }, null, 8, ["fields", "model"])
    ], 16)) : fe("", !0);
  }
}), bl = {
  key: 0,
  class: "uimodel-foreach-empty"
}, Ei = /* @__PURE__ */ ee({
  __name: "FieldsRenderer",
  props: {
    fields: {},
    model: {}
  },
  setup(s) {
    const e = s, t = et(ti, void 0), r = et(pr, void 0), i = m(() => (pt(), r?.version.value, sa(e.fields, e.model, t?.value)));
    return (u, n) => (N(!0), b(ht, null, ls(i.value, (l, g) => (N(), b(ht, { key: g }, [
      l.kind === "note" ? (N(), b("p", bl, qe(l.text), 1)) : l.kind === "group" ? (N(), q(Pl, {
        key: 1,
        widget: l.widget,
        model: l.model
      }, null, 8, ["widget", "model"])) : (N(), q(ci, {
        key: 2,
        widget: l.widget,
        model: l.model
      }, null, 8, ["widget", "model"]))
    ], 64))), 128));
  }
}), Ml = { class: "uimodel-form-view" }, hi = /* @__PURE__ */ ee({
  __name: "FormViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (N(), b("div", Ml, [
      Er(Ei, {
        fields: s.component.fields,
        model: s.model
      }, null, 8, ["fields", "model"])
    ]));
  }
}), Ul = { class: "uimodel-section-view" }, Vl = /* @__PURE__ */ ee({
  __name: "SectionViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (N(), b("div", Ul, [
      (N(!0), b(ht, null, ls(s.component.sections, (r) => (N(), q(hi, {
        key: r.name,
        component: r,
        model: s.model
      }, null, 8, ["component", "model"]))), 128))
    ]));
  }
}), Bl = { class: "uimodel-tab-view" }, Gl = ["data-tab"], Wl = /* @__PURE__ */ ee({
  __name: "TabViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (N(), b("div", Bl, [
      (N(!0), b(ht, null, ls(s.component.tabs, (r) => (N(), b("div", {
        key: r.name,
        class: "uimodel-tab-panel",
        "data-tab": r.name
      }, [
        Er(Ea, {
          component: r,
          model: s.model
        }, null, 8, ["component", "model"])
      ], 8, Gl))), 128))
    ]));
  }
}), Yl = { class: "uimodel-summary-view" }, $l = /* @__PURE__ */ ee({
  __name: "SummaryViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (N(), b("div", Yl, [
      (N(!0), b(ht, null, ls(s.component.summaryFields, (r) => (N(), q(ci, {
        key: r.name,
        widget: r,
        model: s.model
      }, null, 8, ["widget", "model"]))), 128))
    ]));
  }
}), kl = {
  key: 1,
  class: "uimodel-table-view-placeholder"
}, gi = /* @__PURE__ */ ee({
  __name: "TableViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = ja(), t = m(() => e.getComposer("TableViewRenderer"));
    return (r, i) => t.value ? (N(), q(ia(t.value), {
      key: 0,
      component: s.component,
      model: s.model
    }, null, 8, ["component", "model"])) : (N(), b("div", kl));
  }
}), xl = { class: "uimodel-master-detail" }, Xl = { class: "uimodel-master" }, Hl = { class: "uimodel-detail" }, jl = /* @__PURE__ */ ee({
  __name: "MasterDetailComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (N(), b("div", xl, [
      J("div", Xl, [
        Er(gi, {
          component: s.component.master,
          model: s.model
        }, null, 8, ["component", "model"])
      ]),
      J("div", Hl, [
        Er(Ea, {
          component: s.component.detail,
          model: s.model
        }, null, 8, ["component", "model"])
      ])
    ]));
  }
}), di = /* @__PURE__ */ ee({
  __name: "UIModelComposer",
  props: {
    uiModel: {},
    model: {},
    composerRegistry: {},
    styleSheets: {},
    overlays: {}
  },
  setup(s) {
    const e = s, t = m(() => e.styleSheets ?? []), { version: r } = Mn(t);
    fr(pr, { sheets: t, version: r }), Qn(() => e.model), fr(
      ti,
      m(() => (pt(), {
        ...$n(e.uiModel),
        overlayCases: Wn(e.overlays ?? [])
      }))
    );
    const i = e.composerRegistry ?? vn({
      FormView: hi,
      SectionView: Vl,
      TabView: Wl,
      SummaryView: $l,
      TableView: gi,
      MasterDetail: jl
    });
    fr(Ha, i);
    function u() {
      return Tr(e.uiModel.filterExpression, e.model);
    }
    return (n, l) => u() ? (N(!0), b(ht, { key: 0 }, ls(s.uiModel.components, (g) => (N(), q(Ea, {
      key: g.name,
      component: g,
      model: s.model
    }, null, 8, ["component", "model"]))), 128)) : fe("", !0);
  }
});
function La(s) {
  const e = s;
  return !!e && typeof e.eIsProxy == "function" && e.eIsProxy();
}
function va(s, e) {
  const t = e.getResourceSet(), r = s.eProxyURI();
  if (!r) return s;
  const i = r.toString(), u = i.indexOf("#");
  if (u > 0) {
    const l = i.substring(0, u), g = i.substring(u + 1);
    if (!t) return s;
    const c = e.getURI(), E = [];
    c && !l.includes("://") && E.push(Xr.createURI(l).resolve(c).toString()), E.push(l);
    for (const h of E) {
      const o = t.getResource(Xr.createURI(h), !1), d = o?.getEObject(g);
      if (d) return d;
    }
    return s;
  }
  const n = u === 0 ? i.substring(1) : i;
  return e.getEObject(n) ?? s;
}
function _a(s, e) {
  for (const t of s.eClass().getEAllReferences()) {
    const r = s.eGet(t);
    if (r) {
      if (t.isMany()) {
        const i = r;
        for (let u = 0; u < i.length; u++) {
          const n = i[u];
          if (La(n)) {
            const l = va(n, e);
            l !== n && (i[u] = l);
          }
        }
      } else if (La(r)) {
        const i = va(r, e);
        i !== r && s.eSet(t, i);
      }
    }
  }
}
function ql(s) {
  for (const e of s.getContents()) {
    _a(e, s);
    for (const t of e.eAllContents())
      _a(t, s);
  }
}
const zl = "VariableWrapper";
function pi(s) {
  return typeof s?.eClass == "function";
}
function Ti(s, e) {
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
function Si(s) {
  const e = s;
  for (const t of s.eClass().getEStructuralFeatures()) {
    const r = t.getName?.();
    if (!r || e[r] !== void 0) continue;
    let i;
    try {
      i = t.getEReferenceType?.()?.getName?.();
    } catch {
      continue;
    }
    if (i === zl)
      try {
        e[r] = new Fi();
      } catch {
      }
  }
  return s;
}
function fi(s, e) {
  return Si(pi(s) ? s : Ti(e(), s));
}
const Kl = /color|colour/i, Ql = /size|width|height|radius|blur|padding|transparence|transparency|opacity|zoom|count|index/i, Jl = /^(is|has|show|enable|fullscreen|visible)/i;
function Ur(s) {
  const e = s.getName?.() ?? "", t = s.getEType?.()?.getName?.() ?? "";
  return t === "EBoolean" || Jl.test(e) ? "flag" : Kl.test(e) ? "colour" : t === "EInt" || t === "EDouble" || Ql.test(e) ? "number" : "text";
}
function Br(s) {
  const t = (s.getName?.() ?? "").replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function ga(s, e = s.getName?.() ?? "Settings") {
  const t = na.eINSTANCE, r = t.createFormView();
  r.name = e;
  for (const u of s.getEStructuralFeatures()) {
    const n = Zl(t, u);
    n.feature = u, n.label = Br(u), r.fields.push(n);
  }
  const i = t.createUIModel();
  return i.name = e, i.targetClasses.push(s), i.components.push(r), i;
}
function Zl(s, e) {
  switch (Ur(e)) {
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
const Oa = /* @__PURE__ */ new Map(), mi = /* @__PURE__ */ new Map();
function eo(s) {
  return mi.get(s);
}
function to(s) {
  for (const e of s.targetClasses ?? [])
    e && mi.set(e, s);
}
let Aa = !1;
function so() {
  if (Aa) return;
  wi();
  const s = A.eINSTANCE;
  s.setEFactoryInstance(na.eINSTANCE), Or.INSTANCE.set(s.getNsURI(), s), Aa = !0;
}
function ra(s, e, t = "/ui.xmi") {
  const r = Oa.get(t);
  if (r) return r;
  try {
    so();
    const i = e.getNsURI();
    i && !Or.INSTANCE.has(i) && Or.INSTANCE.set(i, e);
    const u = new Di();
    u.getResourceFactoryRegistry().getExtensionToFactoryMap().set("xmi", new Ri());
    const n = u.createResource(Xr.createURI(t));
    if (n.loadFromString(s), n.getContents().size() === 0) return;
    ql(n);
    const l = n.getContents().get(0);
    return Oa.set(t, l), to(l), l;
  } catch (i) {
    console.warn("[ui.vue.uimodel] UI-Modell konnte nicht gelesen werden:", i);
    return;
  }
}
const ro = { class: "list" }, ao = { class: "list__head" }, io = { class: "list__label" }, uo = { class: "list__count" }, no = {
  key: 0,
  class: "list__untyped"
}, lo = {
  key: 1,
  class: "list__empty"
}, oo = ["aria-expanded", "onClick"], co = { class: "entry__twist" }, Eo = { class: "entry__title" }, ho = {
  key: 0,
  class: "entry__actions"
}, go = ["disabled", "onClick"], po = ["disabled", "onClick"], To = ["onClick"], So = {
  key: 1,
  class: "entry__body"
}, fo = /* @__PURE__ */ ee({
  __name: "SettingsListWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = m(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? Br(e.feature) : "")
    ), r = m(() => e.custom?.resolvedStyle?.readOnly === !0);
    function i() {
      const p = e.feature?.getName?.();
      if (!(!p || !e.eObject))
        return e.eObject[p];
    }
    const u = m(() => {
      const p = i();
      return p ? typeof p.toArray == "function" ? p.toArray() : Array.isArray(p) ? p : [] : [];
    }), n = m(() => {
      try {
        return e.feature?.getEReferenceType?.() ?? void 0;
      } catch {
        return;
      }
    }), l = /* @__PURE__ */ new Map(), g = m(() => {
      const p = n.value;
      if (!p) return;
      const L = eo(p);
      return L || (l.has(p) || l.set(p, ga(p, p.getName?.() ?? "Eintrag")), l.get(p));
    }), c = gr(0);
    function E(p, L) {
      const C = p, f = C.label?.value ?? C.name?.value ?? C.title?.value;
      return f ? String(f) : `${n.value?.getName?.() ?? "Eintrag"} ${L + 1}`;
    }
    function h() {
      const p = n.value, L = e.feature?.getName?.();
      if (!p || !L || !e.eObject) return;
      const f = p.getEPackage?.()?.getEFactoryInstance?.()?.create(p);
      if (!f) return;
      Si(f);
      const M = i();
      if (M) {
        if (typeof M.add == "function") M.add(f);
        else if (Array.isArray(M)) M.push(f);
        else return;
        c.value = u.value.length - 1;
      }
    }
    function o(p) {
      const L = i();
      if (L) {
        if (typeof L.removeAt == "function") L.removeAt(p);
        else if (Array.isArray(L)) L.splice(p, 1);
        else return;
        c.value = Math.min(c.value, Math.max(u.value.length - 1, 0));
      }
    }
    function d(p, L) {
      const C = i();
      if (!C) return;
      const f = p + L;
      if (!(f < 0 || f >= u.value.length)) {
        if (typeof C.move == "function") C.move(f, p);
        else if (Array.isArray(C)) {
          const [M] = C.splice(p, 1);
          C.splice(f, 0, M);
        } else return;
        c.value = f;
      }
    }
    return (p, L) => (N(), b("section", ro, [
      J("header", ao, [
        J("span", io, qe(t.value), 1),
        J("span", uo, qe(u.value.length), 1),
        L[1] || (L[1] = J("span", { class: "list__spacer" }, null, -1)),
        n.value && !r.value ? (N(), q(de(Pi), {
          key: 0,
          size: "sm",
          onClick: h
        }, {
          default: vi(() => [...L[0] || (L[0] = [
            Da("Hinzufügen", -1)
          ])]),
          _: 1
        })) : fe("", !0)
      ]),
      n.value ? u.value.length ? fe("", !0) : (N(), b("p", lo, "Noch nichts angelegt.")) : (N(), b("p", no, " Diese Liste ist im Modell ohne Typ angegeben - es steht dort nur, dass es mehrere sind, nicht wovon. Solange das so ist, lässt sich hier nichts zeigen. ")),
      (N(!0), b(ht, null, ls(u.value, (C, f) => (N(), b("div", {
        key: f,
        class: "entry"
      }, [
        J("button", {
          type: "button",
          class: "entry__head",
          "aria-expanded": c.value === f,
          onClick: (M) => c.value = c.value === f ? -1 : f
        }, [
          J("span", co, qe(c.value === f ? "▾" : "▸"), 1),
          J("span", Eo, qe(E(C, f)), 1)
        ], 8, oo),
        r.value ? fe("", !0) : (N(), b("span", ho, [
          J("button", {
            type: "button",
            title: "Nach oben",
            disabled: f === 0,
            onClick: (M) => d(f, -1)
          }, "↑", 8, go),
          J("button", {
            type: "button",
            title: "Nach unten",
            disabled: f === u.value.length - 1,
            onClick: (M) => d(f, 1)
          }, " ↓ ", 8, po),
          J("button", {
            type: "button",
            title: "Entfernen",
            class: "entry__remove",
            onClick: (M) => o(f)
          }, "✕", 8, To)
        ])),
        c.value === f ? (N(), b("div", So, [
          g.value ? (N(), q(de(di), {
            key: 0,
            "ui-model": g.value,
            model: C
          }, null, 8, ["ui-model", "model"])) : fe("", !0)
        ])) : fe("", !0)
      ]))), 128))
    ]));
  }
}), da = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, Ii = /* @__PURE__ */ da(fo, [["__scopeId", "data-v-4eca8f08"]]), mo = { class: "field-row__control" }, Io = ["title", "aria-pressed"], No = /* @__PURE__ */ ee({
  __name: "VariableWrapperWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = et(Ui), r = m(() => {
      const { eObject: y, feature: P } = e;
      if (!y || !P) return;
      const Y = P.getName?.();
      return Y ? y[Y] : void 0;
    }), i = m(() => r.value?.variable ?? ""), u = m(() => !!i.value), n = gr(!1);
    dr(u, (y) => {
      y && (n.value = !0);
    }, { immediate: !0 });
    const l = m(() => {
      try {
        return (t?.getAllVariables() ?? []).map(([y]) => y);
      } catch {
        return [];
      }
    }), g = m({
      get: () => i.value,
      set: (y) => {
        if (!r.value) return;
        if (!y) return c();
        const P = t?.getVariable(y);
        P && r.value.setTo(P);
      }
    });
    function c() {
      r.value && (r.value.value = r.value.value, n.value = !1);
    }
    function E() {
      u.value ? c() : n.value = !n.value;
    }
    const h = m(() => !e.custom?.resolvedStyle?.readOnly && !u.value), o = m({
      get: () => r.value?.value ?? "",
      set: (y) => {
        r.value && h.value && (r.value.value = y);
      }
    }), d = m({
      get: () => {
        const y = Number(r.value?.value);
        return Number.isFinite(y) ? y : 0;
      },
      set: (y) => {
        r.value && h.value && (r.value.value = String(y));
      }
    }), p = m({
      get: () => r.value?.value === !0 || r.value?.value === "true",
      set: (y) => {
        r.value && h.value && (r.value.value = y);
      }
    }), L = m(() => e.custom?.rawWidget?.eClass?.()?.getName?.() ?? ""), C = m(() => {
      const y = e.custom?.rawWidget?.values;
      return y && typeof y.map == "function" ? [...y] : [];
    }), f = m(() => ({
      min: e.custom?.rawWidget?.min,
      max: e.custom?.rawWidget?.max,
      step: e.custom?.rawWidget?.step
    })), M = m(() => {
      switch (L.value) {
        case "CheckboxWidget":
          return "flag";
        case "NumberWidget":
          return "number";
        case "SelectWidget":
        case "ComboboxWidget":
          return "choice";
        case "InputWidget":
          return e.feature && Ur(e.feature) === "colour" ? "colour" : "text";
        default:
          return e.feature ? Ur(e.feature) : "text";
      }
    }), Q = m(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? Br(e.feature) : "")
    ), re = m(() => n.value && l.value.length === 0);
    return (y, P) => r.value ? (N(), b("div", {
      key: 0,
      class: pa(["field-row", { "field-row--bound": u.value }])
    }, [
      J("div", mo, [
        n.value && !re.value ? (N(), q(de(Sa), {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": P[0] || (P[0] = (Y) => g.value = Y),
          label: Q.value,
          options: l.value,
          disabled: s.custom?.resolvedStyle?.readOnly,
          placeholder: "Keine Variable",
          clearable: ""
        }, null, 8, ["modelValue", "label", "options", "disabled"])) : re.value ? (N(), q(de(Wr), {
          key: 1,
          "model-value": "",
          label: Q.value,
          disabled: "",
          hint: "Es sind noch keine Variablen angelegt."
        }, null, 8, ["label"])) : M.value === "flag" ? (N(), q(de(bi), {
          key: 2,
          modelValue: p.value,
          "onUpdate:modelValue": P[1] || (P[1] = (Y) => p.value = Y),
          label: Q.value,
          disabled: !h.value
        }, null, 8, ["modelValue", "label", "disabled"])) : M.value === "choice" ? (N(), q(de(Sa), {
          key: 3,
          modelValue: o.value,
          "onUpdate:modelValue": P[2] || (P[2] = (Y) => o.value = Y),
          label: Q.value,
          options: C.value,
          disabled: !h.value,
          clearable: ""
        }, null, 8, ["modelValue", "label", "options", "disabled"])) : M.value === "colour" ? (N(), q(de(Mi), {
          key: 4,
          modelValue: o.value,
          "onUpdate:modelValue": P[3] || (P[3] = (Y) => o.value = Y),
          label: Q.value,
          disabled: !h.value
        }, null, 8, ["modelValue", "label", "disabled"])) : M.value === "number" ? (N(), q(de(Wr), {
          key: 5,
          modelValue: d.value,
          "onUpdate:modelValue": P[4] || (P[4] = (Y) => d.value = Y),
          label: Q.value,
          type: "number",
          min: f.value.min,
          max: f.value.max,
          step: f.value.step,
          disabled: !h.value
        }, null, 8, ["modelValue", "label", "min", "max", "step", "disabled"])) : (N(), q(de(Wr), {
          key: 6,
          modelValue: o.value,
          "onUpdate:modelValue": P[5] || (P[5] = (Y) => o.value = Y),
          label: Q.value,
          placeholder: s.custom?.resolvedStyle?.placeholder,
          disabled: !h.value
        }, null, 8, ["modelValue", "label", "placeholder", "disabled"]))
      ]),
      J("button", {
        type: "button",
        class: pa(["bind", { on: u.value, armed: n.value && !u.value }]),
        title: u.value ? `Bindung an „${i.value}“ lösen` : "An eine Variable binden",
        "aria-pressed": u.value,
        onClick: E
      }, " {x} ", 10, Io)
    ], 2)) : fe("", !0);
  }
}), Ni = /* @__PURE__ */ da(No, [["__scopeId", "data-v-01463c81"]]), Lo = "org.eclipse.daanse.board.app.ui.vue.composables";
let Ca = !1;
function vo() {
  if (Ca) return !0;
  const s = Or.INSTANCE.getEPackage(Lo)?.getEClassifier(
    "VariableWrapper"
  );
  return s ? (ns.registerForReference(Ni, { targetClass: s }), Ca = !0, !0) : !1;
}
function _o(s) {
  for (const e of s.getEStructuralFeatures())
    Oo(e) && ns.registerForFeature(
      s,
      e.getName?.() ?? "",
      Ii
    );
}
function Oo(s) {
  try {
    return s.isMany?.() === !0 || (s.getUpperBound?.() ?? 1) !== 1;
  } catch {
    return !1;
  }
}
const Ao = { class: "settings-form" }, Co = {
  key: 1,
  class: "settings-form__empty"
}, yo = /* @__PURE__ */ ee({
  __name: "SettingsForm",
  props: /* @__PURE__ */ _i({
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
    A.eINSTANCE, fr(oi, ns), vo();
    const e = Oi(s, "modelValue"), t = s;
    function r() {
      const c = fi(e.value, t.create);
      c !== e.value && (e.value = c);
    }
    Ai(r), dr(e, r);
    const i = m(() => e.value), u = Ta(), n = Ta(), l = m(() => {
      const c = e.value?.eClass?.();
      if (c && _o(c), t.uiModel) return Gr(t.uiModel);
      if (t.domainPackage)
        for (const o of t.entryForms ?? [])
          ra(o.xmi, t.domainPackage, o.uri);
      if (t.uiModelXmi && t.domainPackage) {
        const o = ra(t.uiModelXmi, t.domainPackage, t.uiModelUri);
        if (o) return Gr(o);
      }
      const h = i.value?.eClass?.();
      if (h)
        return n.value !== h && (n.value = h, u.value = Gr(ga(h))), u.value;
    }), g = m(() => (i.value?.eClass?.().getEStructuralFeatures().length ?? 0) > 0);
    return (c, E) => (N(), b("div", Ao, [
      l.value && i.value && g.value ? (N(), q(de(di), {
        key: 0,
        "ui-model": l.value,
        model: i.value
      }, null, 8, ["ui-model", "model"])) : (N(), b("p", Co, qe(s.emptyText ?? "Für dieses Widget sind keine Einstellungen modelliert."), 1))
    ]));
  }
}), Do = /* @__PURE__ */ da(yo, [["__scopeId", "data-v-5d0a6b97"]]), Ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SettingsForm: Do,
  SettingsListWidget: Ii,
  VariableWrapperWidget: Ni,
  adopt: Ti,
  asModel: fi,
  formFor: ga,
  isModelled: pi,
  kindOf: Ur,
  labelOf: Br,
  loadUIModel: ra
}, Symbol.toStringTag, { value: "Module" })), ya = "org.eclipse.daanse.board.app.ui.vue.uimodel", wo = "0.0.1-next.1";
async function ko(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${ya}: tsm runtime is not initialized`);
  e.register(ya, Ro, wo, "ui.vue.uimodel"), await void 0;
}
async function xo(s) {
  await void 0;
}
export {
  Do as SettingsForm,
  Ii as SettingsListWidget,
  Ni as VariableWrapperWidget,
  ko as activate,
  Ti as adopt,
  fi as asModel,
  xo as deactivate,
  ga as formFor,
  pi as isModelled,
  Ur as kindOf,
  Br as labelOf,
  ra as loadUIModel
};
