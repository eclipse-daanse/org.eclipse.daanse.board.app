(function(){var i="ui.vue.uimodel",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".list[data-v-87b9cfb7]{margin-bottom:12px}.list__head[data-v-87b9cfb7]{display:flex;align-items:center;gap:7px;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid var(--color-divider)}.list__label[data-v-87b9cfb7]{font-family:var(--font-sans);font-size:var(--text-sm);font-weight:600;color:var(--color-fg)}.list__count[data-v-87b9cfb7]{font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.list__spacer[data-v-87b9cfb7]{flex:1 1 auto}.list__empty[data-v-87b9cfb7],.list__untyped[data-v-87b9cfb7]{margin:0 0 8px;font-size:var(--text-xs);line-height:1.5;color:var(--color-dim)}.entry[data-v-87b9cfb7]{position:relative;margin-bottom:3px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.entry__head[data-v-87b9cfb7]{display:flex;align-items:center;gap:6px;width:100%;padding:5px 78px 5px 8px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);text-align:left;background:none;border:0;cursor:pointer}.entry__twist[data-v-87b9cfb7]{width:10px;font-size:var(--text-xs);color:var(--color-dim)}.entry__actions[data-v-87b9cfb7]{position:absolute;top:3px;right:5px;display:flex;gap:2px}.entry__actions button[data-v-87b9cfb7]{width:20px;height:20px;font-size:var(--text-xs);color:var(--color-dim);background:none;border:1px solid transparent;border-radius:var(--radius-xs);cursor:pointer}.entry__actions button[data-v-87b9cfb7]:hover:not(:disabled){color:var(--color-fg);border-color:var(--color-divider)}.entry__actions button[data-v-87b9cfb7]:disabled{opacity:.3;cursor:default}.entry__remove[data-v-87b9cfb7]:hover:not(:disabled){color:var(--color-err)}.entry__actions button[data-v-87b9cfb7]:focus-visible,.entry__head[data-v-87b9cfb7]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.entry__body[data-v-87b9cfb7]{padding:8px 10px 10px;border-top:1px solid var(--color-divider)}.field-row[data-v-01463c81]{display:flex;align-items:flex-start;gap:6px}.field-row__control[data-v-01463c81]{flex:1 1 auto;min-width:0}.field-row--bound[data-v-01463c81]{border-left:2px solid var(--color-brand);padding-left:6px;margin-left:-8px}.bind[data-v-01463c81]{width:24px;height:26px;flex:none;margin-top:0;font-family:var(--font-mono);font-size:var(--text-xs);font-style:italic;color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.bind[data-v-01463c81]:hover{color:var(--color-fg);border-color:var(--color-outline)}.bind.armed[data-v-01463c81]{color:var(--color-accent);border-color:var(--color-accent)}.bind.on[data-v-01463c81]{color:var(--color-brand);border-color:var(--color-brand);background-color:color-mix(in srgb,var(--color-brand) 14%,transparent)}.bind[data-v-01463c81]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.settings-form[data-v-b1ca79c7]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.settings-form[data-v-b1ca79c7] .uim-c-GroupWidget{padding-top:10px;margin-top:10px;border-top:1px solid var(--color-divider)}.settings-form[data-v-b1ca79c7] .uim-c-GroupWidget:first-child{padding-top:0;margin-top:0;border-top:0}.settings-form__empty[data-v-b1ca79c7]{margin:0;padding:12px 0;font-size:var(--text-sm);color:var(--color-dim)}\n";})();
import { inject as Et, watchEffect as fi, onScopeDispose as ra, ref as gr, computed as m, watch as dr, toValue as Me, defineComponent as se, createBlock as q, createCommentVNode as Ce, openBlock as I, resolveDynamicComponent as aa, mergeProps as ia, createElementBlock as b, createElementVNode as Q, createTextVNode as Da, toDisplayString as ct, unref as de, resolveComponent as mi, Fragment as ht, renderList as ns, createVNode as Er, provide as Sr, withCtx as Ii, normalizeClass as pa, mergeModels as Ni, useModel as Li, onMounted as _i, shallowRef as Ta, markRaw as Gr } from "vue";
import { BasicEPackage as vi, BasicEClass as R, BasicEAttribute as p, BasicEReference as S, getEcorePackage as Kt, BasicEObject as Ze, BasicEFactory as Oi, EContentAdapter as Ra, URI as Xr, EPackageRegistry as vr, BasicResourceSet as Ai, XMIResourceFactory as Ci, registerEcorePackage as yi } from "@emfts/core";
import { VariableWrapper as Di } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DButton as Ri, DSelect as Sa, DInput as Wr, DCheckbox as wi, DColorInput as Fi } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { identifier as Pi } from "org.eclipse.daanse.board.app.lib.api.variable";
var bi = Object.defineProperty, Mi = (s, e, t) => e in s ? bi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ir = (s, e, t) => Mi(s, typeof e != "symbol" ? e + "" : e, t);
const Qt = class a extends vi {
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
    const t = new p();
    t.setName("name"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), a.Literals.U_I_MODEL__NAME = t;
    const r = new S();
    r.setContainment(!1), r.setName("targetClasses"), r.setLowerBound(0), r.setUpperBound(-1), e.getEStructuralFeatures().push(r), a.Literals.U_I_MODEL__TARGET_CLASSES = r;
    const i = new p();
    i.setName("priority"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), a.Literals.U_I_MODEL__PRIORITY = i;
    const u = new S();
    u.setContainment(!0), u.setName("filterExpression"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), a.Literals.U_I_MODEL__FILTER_EXPRESSION = u;
    const n = new S();
    n.setContainment(!0), n.setName("styles"), n.setLowerBound(0), n.setUpperBound(-1), e.getEStructuralFeatures().push(n), a.Literals.U_I_MODEL__STYLES = n;
    const l = new S();
    l.setContainment(!0), l.setName("templates"), l.setLowerBound(0), l.setUpperBound(-1), e.getEStructuralFeatures().push(l), a.Literals.U_I_MODEL__TEMPLATES = l;
    const h = new S();
    h.setContainment(!0), h.setName("components"), h.setLowerBound(1), h.setUpperBound(-1), e.getEStructuralFeatures().push(h), a.Literals.U_I_MODEL__COMPONENTS = h;
    const c = new R();
    c.setName("Component"), c.setAbstract(!0), c.setInterface(!1), this.getEClassifiers().push(c), c.setEPackage(this), a.Literals.COMPONENT = c;
    const d = new p();
    d.setName("name"), d.setLowerBound(1), d.setUpperBound(1), c.getEStructuralFeatures().push(d), a.Literals.COMPONENT__NAME = d;
    const E = new p();
    E.setName("group"), E.setLowerBound(0), E.setUpperBound(1), c.getEStructuralFeatures().push(E), a.Literals.COMPONENT__GROUP = E;
    const o = new S();
    o.setContainment(!1), o.setName("targetClasses"), o.setLowerBound(0), o.setUpperBound(-1), c.getEStructuralFeatures().push(o), a.Literals.COMPONENT__TARGET_CLASSES = o;
    const g = new S();
    g.setContainment(!1), g.setName("styles"), g.setLowerBound(0), g.setUpperBound(-1), c.getEStructuralFeatures().push(g), a.Literals.COMPONENT__STYLES = g;
    const _ = new S();
    _.setContainment(!1), _.setName("children"), _.setLowerBound(0), _.setUpperBound(-1), c.getEStructuralFeatures().push(_), a.Literals.COMPONENT__CHILDREN = _;
    const v = new R();
    v.setName("FormView"), v.setAbstract(!1), v.setInterface(!1), this.getEClassifiers().push(v), v.setEPackage(this), a.Literals.FORM_VIEW = v;
    const f = new S();
    f.setContainment(!0), f.setName("fields"), f.setLowerBound(0), f.setUpperBound(-1), v.getEStructuralFeatures().push(f), a.Literals.FORM_VIEW__FIELDS = f;
    const A = new S();
    A.setContainment(!0), A.setName("validations"), A.setLowerBound(0), A.setUpperBound(-1), v.getEStructuralFeatures().push(A), a.Literals.FORM_VIEW__VALIDATIONS = A;
    const J = new S();
    J.setContainment(!0), J.setName("validationMappers"), J.setLowerBound(0), J.setUpperBound(-1), v.getEStructuralFeatures().push(J), a.Literals.FORM_VIEW__VALIDATION_MAPPERS = J;
    const K = new p();
    K.setName("mapperOrder"), K.setLowerBound(0), K.setUpperBound(1), v.getEStructuralFeatures().push(K), a.Literals.FORM_VIEW__MAPPER_ORDER = K;
    const re = new R();
    re.setName("TableView"), re.setAbstract(!1), re.setInterface(!1), this.getEClassifiers().push(re), re.setEPackage(this), a.Literals.TABLE_VIEW = re;
    const y = new S();
    y.setContainment(!0), y.setName("tableStyle"), y.setLowerBound(1), y.setUpperBound(1), re.getEStructuralFeatures().push(y), a.Literals.TABLE_VIEW__TABLE_STYLE = y;
    const P = new R();
    P.setName("SectionView"), P.setAbstract(!1), P.setInterface(!1), this.getEClassifiers().push(P), P.setEPackage(this), a.Literals.SECTION_VIEW = P;
    const W = new S();
    W.setContainment(!0), W.setName("sections"), W.setLowerBound(1), W.setUpperBound(-1), P.getEStructuralFeatures().push(W), a.Literals.SECTION_VIEW__SECTIONS = W;
    const et = new R();
    et.setName("TabView"), et.setAbstract(!1), et.setInterface(!1), this.getEClassifiers().push(et), et.setEPackage(this), a.Literals.TAB_VIEW = et;
    const pt = new S();
    pt.setContainment(!0), pt.setName("tabs"), pt.setLowerBound(1), pt.setUpperBound(-1), et.getEStructuralFeatures().push(pt), a.Literals.TAB_VIEW__TABS = pt;
    const tt = new R();
    tt.setName("SummaryView"), tt.setAbstract(!1), tt.setInterface(!1), this.getEClassifiers().push(tt), tt.setEPackage(this), a.Literals.SUMMARY_VIEW = tt;
    const Tt = new S();
    Tt.setContainment(!0), Tt.setName("summaryFields"), Tt.setLowerBound(1), Tt.setUpperBound(-1), tt.getEStructuralFeatures().push(Tt), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS = Tt;
    const Ue = new R();
    Ue.setName("MasterDetail"), Ue.setAbstract(!1), Ue.setInterface(!1), this.getEClassifiers().push(Ue), Ue.setEPackage(this), a.Literals.MASTER_DETAIL = Ue;
    const St = new S();
    St.setContainment(!0), St.setName("master"), St.setLowerBound(1), St.setUpperBound(1), Ue.getEStructuralFeatures().push(St), a.Literals.MASTER_DETAIL__MASTER = St;
    const ft = new S();
    ft.setContainment(!0), ft.setName("detail"), ft.setLowerBound(1), ft.setUpperBound(1), Ue.getEStructuralFeatures().push(ft), a.Literals.MASTER_DETAIL__DETAIL = ft;
    const Z = new R();
    Z.setName("WidgetComponent"), Z.setAbstract(!0), Z.setInterface(!1), this.getEClassifiers().push(Z), Z.setEPackage(this), a.Literals.WIDGET_COMPONENT = Z;
    const mt = new S();
    mt.setContainment(!1), mt.setName("feature"), mt.setLowerBound(0), mt.setUpperBound(1), Z.getEStructuralFeatures().push(mt), a.Literals.WIDGET_COMPONENT__FEATURE = mt;
    const os = new p();
    os.setName("label"), os.setLowerBound(0), os.setUpperBound(1), Z.getEStructuralFeatures().push(os), a.Literals.WIDGET_COMPONENT__LABEL = os;
    const cs = new p();
    cs.setName("placeholder"), cs.setLowerBound(0), cs.setUpperBound(1), Z.getEStructuralFeatures().push(cs), a.Literals.WIDGET_COMPONENT__PLACEHOLDER = cs;
    const Es = new p();
    Es.setName("readOnly"), Es.setLowerBound(0), Es.setUpperBound(1), Z.getEStructuralFeatures().push(Es), a.Literals.WIDGET_COMPONENT__READ_ONLY = Es;
    const hs = new p();
    hs.setName("required"), hs.setLowerBound(0), hs.setUpperBound(1), Z.getEStructuralFeatures().push(hs), a.Literals.WIDGET_COMPONENT__REQUIRED = hs;
    const It = new S();
    It.setContainment(!0), It.setName("visibilityCondition"), It.setLowerBound(0), It.setUpperBound(1), Z.getEStructuralFeatures().push(It), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION = It;
    const Nt = new S();
    Nt.setContainment(!0), Nt.setName("validations"), Nt.setLowerBound(0), Nt.setUpperBound(-1), Z.getEStructuralFeatures().push(Nt), a.Literals.WIDGET_COMPONENT__VALIDATIONS = Nt;
    const Lt = new S();
    Lt.setContainment(!0), Lt.setName("validationMappers"), Lt.setLowerBound(0), Lt.setUpperBound(-1), Z.getEStructuralFeatures().push(Lt), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS = Lt;
    const _t = new S();
    _t.setContainment(!0), _t.setName("bindings"), _t.setLowerBound(0), _t.setUpperBound(-1), Z.getEStructuralFeatures().push(_t), a.Literals.WIDGET_COMPONENT__BINDINGS = _t;
    const Ve = new R();
    Ve.setName("PropertyBinding"), Ve.setAbstract(!1), Ve.setInterface(!1), this.getEClassifiers().push(Ve), Ve.setEPackage(this), a.Literals.PROPERTY_BINDING = Ve;
    const gs = new p();
    gs.setName("property"), gs.setLowerBound(1), gs.setUpperBound(1), Ve.getEStructuralFeatures().push(gs), a.Literals.PROPERTY_BINDING__PROPERTY = gs;
    const vt = new S();
    vt.setContainment(!0), vt.setName("expression"), vt.setLowerBound(1), vt.setUpperBound(1), Ve.getEStructuralFeatures().push(vt), a.Literals.PROPERTY_BINDING__EXPRESSION = vt;
    const Re = new R();
    Re.setName("InputWidget"), Re.setAbstract(!1), Re.setInterface(!1), this.getEClassifiers().push(Re), Re.setEPackage(this), a.Literals.INPUT_WIDGET = Re;
    const ds = new p();
    ds.setName("maxLength"), ds.setLowerBound(0), ds.setUpperBound(1), Re.getEStructuralFeatures().push(ds), a.Literals.INPUT_WIDGET__MAX_LENGTH = ds;
    const ps = new p();
    ps.setName("value"), ps.setLowerBound(0), ps.setUpperBound(1), Re.getEStructuralFeatures().push(ps), a.Literals.INPUT_WIDGET__VALUE = ps;
    const Ts = new p();
    Ts.setName("password"), Ts.setLowerBound(0), Ts.setUpperBound(1), Re.getEStructuralFeatures().push(Ts), a.Literals.INPUT_WIDGET__PASSWORD = Ts;
    const we = new R();
    we.setName("TextAreaWidget"), we.setAbstract(!1), we.setInterface(!1), this.getEClassifiers().push(we), we.setEPackage(this), a.Literals.TEXT_AREA_WIDGET = we;
    const Ss = new p();
    Ss.setName("rows"), Ss.setLowerBound(0), Ss.setUpperBound(1), we.getEStructuralFeatures().push(Ss), a.Literals.TEXT_AREA_WIDGET__ROWS = Ss;
    const fs = new p();
    fs.setName("maxLength"), fs.setLowerBound(0), fs.setUpperBound(1), we.getEStructuralFeatures().push(fs), a.Literals.TEXT_AREA_WIDGET__MAX_LENGTH = fs;
    const ms = new p();
    ms.setName("value"), ms.setLowerBound(0), ms.setUpperBound(1), we.getEStructuralFeatures().push(ms), a.Literals.TEXT_AREA_WIDGET__VALUE = ms;
    const Ne = new R();
    Ne.setName("NumberWidget"), Ne.setAbstract(!1), Ne.setInterface(!1), this.getEClassifiers().push(Ne), Ne.setEPackage(this), a.Literals.NUMBER_WIDGET = Ne;
    const Is = new p();
    Is.setName("min"), Is.setLowerBound(0), Is.setUpperBound(1), Ne.getEStructuralFeatures().push(Is), a.Literals.NUMBER_WIDGET__MIN = Is;
    const Ns = new p();
    Ns.setName("max"), Ns.setLowerBound(0), Ns.setUpperBound(1), Ne.getEStructuralFeatures().push(Ns), a.Literals.NUMBER_WIDGET__MAX = Ns;
    const Ls = new p();
    Ls.setName("step"), Ls.setLowerBound(0), Ls.setUpperBound(1), Ne.getEStructuralFeatures().push(Ls), a.Literals.NUMBER_WIDGET__STEP = Ls;
    const _s = new p();
    _s.setName("value"), _s.setLowerBound(0), _s.setUpperBound(1), Ne.getEStructuralFeatures().push(_s), a.Literals.NUMBER_WIDGET__VALUE = _s;
    const Be = new R();
    Be.setName("CheckboxWidget"), Be.setAbstract(!1), Be.setInterface(!1), this.getEClassifiers().push(Be), Be.setEPackage(this), a.Literals.CHECKBOX_WIDGET = Be;
    const vs = new p();
    vs.setName("asToggle"), vs.setLowerBound(0), vs.setUpperBound(1), Be.getEStructuralFeatures().push(vs), a.Literals.CHECKBOX_WIDGET__AS_TOGGLE = vs;
    const Os = new p();
    Os.setName("value"), Os.setLowerBound(0), Os.setUpperBound(1), Be.getEStructuralFeatures().push(Os), a.Literals.CHECKBOX_WIDGET__VALUE = Os;
    const Le = new R();
    Le.setName("DateWidget"), Le.setAbstract(!1), Le.setInterface(!1), this.getEClassifiers().push(Le), Le.setEPackage(this), a.Literals.DATE_WIDGET = Le;
    const As = new p();
    As.setName("withTime"), As.setLowerBound(0), As.setUpperBound(1), Le.getEStructuralFeatures().push(As), a.Literals.DATE_WIDGET__WITH_TIME = As;
    const Cs = new p();
    Cs.setName("format"), Cs.setLowerBound(0), Cs.setUpperBound(1), Le.getEStructuralFeatures().push(Cs), a.Literals.DATE_WIDGET__FORMAT = Cs;
    const Ot = new S();
    Ot.setContainment(!1), Ot.setName("constrains"), Ot.setLowerBound(0), Ot.setUpperBound(1), Le.getEStructuralFeatures().push(Ot), a.Literals.DATE_WIDGET__CONSTRAINS = Ot;
    const ys = new p();
    ys.setName("value"), ys.setLowerBound(0), ys.setUpperBound(1), Le.getEStructuralFeatures().push(ys), a.Literals.DATE_WIDGET__VALUE = ys;
    const Fe = new R();
    Fe.setName("ComboboxWidget"), Fe.setAbstract(!1), Fe.setInterface(!1), this.getEClassifiers().push(Fe), Fe.setEPackage(this), a.Literals.COMBOBOX_WIDGET = Fe;
    const At = new S();
    At.setContainment(!0), At.setName("optionLabel"), At.setLowerBound(0), At.setUpperBound(1), Fe.getEStructuralFeatures().push(At), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL = At;
    const Ds = new p();
    Ds.setName("minSearchLength"), Ds.setLowerBound(0), Ds.setUpperBound(1), Fe.getEStructuralFeatures().push(Ds), a.Literals.COMBOBOX_WIDGET__MIN_SEARCH_LENGTH = Ds;
    const Rs = new p();
    Rs.setName("multiSelect"), Rs.setLowerBound(0), Rs.setUpperBound(1), Fe.getEStructuralFeatures().push(Rs), a.Literals.COMBOBOX_WIDGET__MULTI_SELECT = Rs;
    const _e = new R();
    _e.setName("SelectWidget"), _e.setAbstract(!1), _e.setInterface(!1), this.getEClassifiers().push(_e), _e.setEPackage(this), a.Literals.SELECT_WIDGET = _e;
    const Ct = new S();
    Ct.setContainment(!0), Ct.setName("optionLabel"), Ct.setLowerBound(0), Ct.setUpperBound(1), _e.getEStructuralFeatures().push(Ct), a.Literals.SELECT_WIDGET__OPTION_LABEL = Ct;
    const ws = new p();
    ws.setName("multiSelect"), ws.setLowerBound(0), ws.setUpperBound(1), _e.getEStructuralFeatures().push(ws), a.Literals.SELECT_WIDGET__MULTI_SELECT = ws;
    const Fs = new p();
    Fs.setName("asButtonGroup"), Fs.setLowerBound(0), Fs.setUpperBound(1), _e.getEStructuralFeatures().push(Fs), a.Literals.SELECT_WIDGET__AS_BUTTON_GROUP = Fs;
    const Ps = new p();
    Ps.setName("values"), Ps.setLowerBound(0), Ps.setUpperBound(-1), _e.getEStructuralFeatures().push(Ps), a.Literals.SELECT_WIDGET__VALUES = Ps;
    const pe = new R();
    pe.setName("AllFeatures"), pe.setAbstract(!1), pe.setInterface(!1), this.getEClassifiers().push(pe), pe.setEPackage(this), a.Literals.ALL_FEATURES = pe;
    const yt = new S();
    yt.setContainment(!1), yt.setName("with"), yt.setLowerBound(0), yt.setUpperBound(-1), pe.getEStructuralFeatures().push(yt), a.Literals.ALL_FEATURES__WITH = yt;
    const Dt = new S();
    Dt.setContainment(!1), Dt.setName("eType"), Dt.setLowerBound(0), Dt.setUpperBound(-1), pe.getEStructuralFeatures().push(Dt), a.Literals.ALL_FEATURES__E_TYPE = Dt;
    const Rt = new S();
    Rt.setContainment(!0), Rt.setName("filter"), Rt.setLowerBound(0), Rt.setUpperBound(1), pe.getEStructuralFeatures().push(Rt), a.Literals.ALL_FEATURES__FILTER = Rt;
    const wt = new S();
    wt.setContainment(!1), wt.setName("template"), wt.setLowerBound(0), wt.setUpperBound(1), pe.getEStructuralFeatures().push(wt), a.Literals.ALL_FEATURES__TEMPLATE = wt;
    const Ft = new S();
    Ft.setContainment(!0), Ft.setName("cases"), Ft.setLowerBound(0), Ft.setUpperBound(-1), pe.getEStructuralFeatures().push(Ft), a.Literals.ALL_FEATURES__CASES = Ft;
    const bs = new p();
    bs.setName("priority"), bs.setLowerBound(0), bs.setUpperBound(1), pe.getEStructuralFeatures().push(bs), a.Literals.ALL_FEATURES__PRIORITY = bs;
    const Ge = new R();
    Ge.setName("TemplateCase"), Ge.setAbstract(!1), Ge.setInterface(!1), this.getEClassifiers().push(Ge), Ge.setEPackage(this), a.Literals.TEMPLATE_CASE = Ge;
    const Pt = new S();
    Pt.setContainment(!0), Pt.setName("when"), Pt.setLowerBound(0), Pt.setUpperBound(1), Ge.getEStructuralFeatures().push(Pt), a.Literals.TEMPLATE_CASE__WHEN = Pt;
    const bt = new S();
    bt.setContainment(!1), bt.setName("widget"), bt.setLowerBound(1), bt.setUpperBound(1), Ge.getEStructuralFeatures().push(bt), a.Literals.TEMPLATE_CASE__WIDGET = bt;
    const We = new R();
    We.setName("GroupWidget"), We.setAbstract(!1), We.setInterface(!1), this.getEClassifiers().push(We), We.setEPackage(this), a.Literals.GROUP_WIDGET = We;
    const Mt = new S();
    Mt.setContainment(!0), Mt.setName("fields"), Mt.setLowerBound(0), Mt.setUpperBound(-1), We.getEStructuralFeatures().push(Mt), a.Literals.GROUP_WIDGET__FIELDS = Mt;
    const Ms = new p();
    Ms.setName("layout"), Ms.setLowerBound(0), Ms.setUpperBound(1), We.getEStructuralFeatures().push(Ms), a.Literals.GROUP_WIDGET__LAYOUT = Ms;
    const Pe = new R();
    Pe.setName("Conditional"), Pe.setAbstract(!1), Pe.setInterface(!1), this.getEClassifiers().push(Pe), Pe.setEPackage(this), a.Literals.CONDITIONAL = Pe;
    const Ut = new S();
    Ut.setContainment(!0), Ut.setName("condition"), Ut.setLowerBound(1), Ut.setUpperBound(1), Pe.getEStructuralFeatures().push(Ut), a.Literals.CONDITIONAL__CONDITION = Ut;
    const Vt = new S();
    Vt.setContainment(!0), Vt.setName("then"), Vt.setLowerBound(0), Vt.setUpperBound(-1), Pe.getEStructuralFeatures().push(Vt), a.Literals.CONDITIONAL__THEN = Vt;
    const Bt = new S();
    Bt.setContainment(!0), Bt.setName("else"), Bt.setLowerBound(0), Bt.setUpperBound(-1), Pe.getEStructuralFeatures().push(Bt), a.Literals.CONDITIONAL__ELSE = Bt;
    const be = new R();
    be.setName("ForEach"), be.setAbstract(!1), be.setInterface(!1), this.getEClassifiers().push(be), be.setEPackage(this), a.Literals.FOR_EACH = be;
    const Gt = new S();
    Gt.setContainment(!0), Gt.setName("items"), Gt.setLowerBound(1), Gt.setUpperBound(1), be.getEStructuralFeatures().push(Gt), a.Literals.FOR_EACH__ITEMS = Gt;
    const Wt = new S();
    Wt.setContainment(!0), Wt.setName("body"), Wt.setLowerBound(0), Wt.setUpperBound(-1), be.getEStructuralFeatures().push(Wt), a.Literals.FOR_EACH__BODY = Wt;
    const Us = new p();
    Us.setName("emptyText"), Us.setLowerBound(0), Us.setUpperBound(1), be.getEStructuralFeatures().push(Us), a.Literals.FOR_EACH__EMPTY_TEXT = Us;
    const Ye = new R();
    Ye.setName("ReferenceLinkWidget"), Ye.setAbstract(!1), Ye.setInterface(!1), this.getEClassifiers().push(Ye), Ye.setEPackage(this), a.Literals.REFERENCE_LINK_WIDGET = Ye;
    const Yt = new S();
    Yt.setContainment(!0), Yt.setName("displayExpression"), Yt.setLowerBound(0), Yt.setUpperBound(1), Ye.getEStructuralFeatures().push(Yt), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION = Yt;
    const Vs = new p();
    Vs.setName("targetRoute"), Vs.setLowerBound(0), Vs.setUpperBound(1), Ye.getEStructuralFeatures().push(Vs), a.Literals.REFERENCE_LINK_WIDGET__TARGET_ROUTE = Vs;
    const ve = new R();
    ve.setName("UIModelOverlay"), ve.setAbstract(!1), ve.setInterface(!1), this.getEClassifiers().push(ve), ve.setEPackage(this), a.Literals.U_I_MODEL_OVERLAY = ve;
    const Bs = new p();
    Bs.setName("name"), Bs.setLowerBound(0), Bs.setUpperBound(1), ve.getEStructuralFeatures().push(Bs), a.Literals.U_I_MODEL_OVERLAY__NAME = Bs;
    const Gs = new p();
    Gs.setName("priority"), Gs.setLowerBound(0), Gs.setUpperBound(1), ve.getEStructuralFeatures().push(Gs), a.Literals.U_I_MODEL_OVERLAY__PRIORITY = Gs;
    const $t = new S();
    $t.setContainment(!0), $t.setName("templates"), $t.setLowerBound(0), $t.setUpperBound(-1), ve.getEStructuralFeatures().push($t), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES = $t;
    const kt = new S();
    kt.setContainment(!0), kt.setName("cases"), kt.setLowerBound(0), kt.setUpperBound(-1), ve.getEStructuralFeatures().push(kt), a.Literals.U_I_MODEL_OVERLAY__CASES = kt;
    const $e = new R();
    $e.setName("Style"), $e.setAbstract(!0), $e.setInterface(!0), this.getEClassifiers().push($e), $e.setEPackage(this), a.Literals.STYLE = $e;
    const Ws = new p();
    Ws.setName("name"), Ws.setLowerBound(0), Ws.setUpperBound(1), $e.getEStructuralFeatures().push(Ws), a.Literals.STYLE__NAME = Ws;
    const Ys = new p();
    Ys.setName("group"), Ys.setLowerBound(0), Ys.setUpperBound(1), $e.getEStructuralFeatures().push(Ys), a.Literals.STYLE__GROUP = Ys;
    const Oe = new R();
    Oe.setName("BaseStyle"), Oe.setAbstract(!0), Oe.setInterface(!1), this.getEClassifiers().push(Oe), Oe.setEPackage(this), a.Literals.BASE_STYLE = Oe;
    const xt = new S();
    xt.setContainment(!1), xt.setName("extends"), xt.setLowerBound(0), xt.setUpperBound(1), Oe.getEStructuralFeatures().push(xt), a.Literals.BASE_STYLE__EXTENDS = xt;
    const $s = new p();
    $s.setName("css"), $s.setLowerBound(0), $s.setUpperBound(1), Oe.getEStructuralFeatures().push($s), a.Literals.BASE_STYLE__CSS = $s;
    const ks = new p();
    ks.setName("vueComponent"), ks.setLowerBound(0), ks.setUpperBound(1), Oe.getEStructuralFeatures().push(ks), a.Literals.BASE_STYLE__VUE_COMPONENT = ks;
    const Xt = new S();
    Xt.setContainment(!0), Xt.setName("visibilityCondition"), Xt.setLowerBound(0), Xt.setUpperBound(1), Oe.getEStructuralFeatures().push(Xt), a.Literals.BASE_STYLE__VISIBILITY_CONDITION = Xt;
    const ke = new R();
    ke.setName("LayoutStyle"), ke.setAbstract(!1), ke.setInterface(!1), this.getEClassifiers().push(ke), ke.setEPackage(this), a.Literals.LAYOUT_STYLE = ke;
    const xs = new p();
    xs.setName("layout"), xs.setLowerBound(0), xs.setUpperBound(1), ke.getEStructuralFeatures().push(xs), a.Literals.LAYOUT_STYLE__LAYOUT = xs;
    const Xs = new p();
    Xs.setName("order"), Xs.setLowerBound(0), Xs.setUpperBound(1), ke.getEStructuralFeatures().push(Xs), a.Literals.LAYOUT_STYLE__ORDER = Xs;
    const me = new R();
    me.setName("WidgetStyle"), me.setAbstract(!1), me.setInterface(!1), this.getEClassifiers().push(me), me.setEPackage(this), a.Literals.WIDGET_STYLE = me;
    const Ht = new S();
    Ht.setContainment(!1), Ht.setName("feature"), Ht.setLowerBound(0), Ht.setUpperBound(1), me.getEStructuralFeatures().push(Ht), a.Literals.WIDGET_STYLE__FEATURE = Ht;
    const Hs = new p();
    Hs.setName("widgetType"), Hs.setLowerBound(0), Hs.setUpperBound(1), me.getEStructuralFeatures().push(Hs), a.Literals.WIDGET_STYLE__WIDGET_TYPE = Hs;
    const js = new p();
    js.setName("label"), js.setLowerBound(0), js.setUpperBound(1), me.getEStructuralFeatures().push(js), a.Literals.WIDGET_STYLE__LABEL = js;
    const qs = new p();
    qs.setName("readOnly"), qs.setLowerBound(0), qs.setUpperBound(1), me.getEStructuralFeatures().push(qs), a.Literals.WIDGET_STYLE__READ_ONLY = qs;
    const zs = new p();
    zs.setName("order"), zs.setLowerBound(0), zs.setUpperBound(1), me.getEStructuralFeatures().push(zs), a.Literals.WIDGET_STYLE__ORDER = zs;
    const st = new R();
    st.setName("TableStyle"), st.setAbstract(!1), st.setInterface(!1), this.getEClassifiers().push(st), st.setEPackage(this), a.Literals.TABLE_STYLE = st;
    const jt = new S();
    jt.setContainment(!0), jt.setName("columns"), jt.setLowerBound(1), jt.setUpperBound(-1), st.getEStructuralFeatures().push(jt), a.Literals.TABLE_STYLE__COLUMNS = jt;
    const xe = new R();
    xe.setName("Expression"), xe.setAbstract(!1), xe.setInterface(!1), this.getEClassifiers().push(xe), xe.setEPackage(this), a.Literals.EXPRESSION = xe;
    const Ks = new p();
    Ks.setName("language"), Ks.setLowerBound(1), Ks.setUpperBound(1), xe.getEStructuralFeatures().push(Ks), a.Literals.EXPRESSION__LANGUAGE = Ks;
    const Qs = new p();
    Qs.setName("body"), Qs.setLowerBound(1), Qs.setUpperBound(1), xe.getEStructuralFeatures().push(Qs), a.Literals.EXPRESSION__BODY = Qs;
    const Xe = new R();
    Xe.setName("ValidationExpression"), Xe.setAbstract(!1), Xe.setInterface(!1), this.getEClassifiers().push(Xe), Xe.setEPackage(this), a.Literals.VALIDATION_EXPRESSION = Xe;
    const Js = new p();
    Js.setName("defaultMessage"), Js.setLowerBound(0), Js.setUpperBound(1), Xe.getEStructuralFeatures().push(Js), a.Literals.VALIDATION_EXPRESSION__DEFAULT_MESSAGE = Js;
    const Zs = new p();
    Zs.setName("severity"), Zs.setLowerBound(0), Zs.setUpperBound(1), Xe.getEStructuralFeatures().push(Zs), a.Literals.VALIDATION_EXPRESSION__SEVERITY = Zs;
    const ae = new R();
    ae.setName("ValidationMessageMapper"), ae.setAbstract(!1), ae.setInterface(!1), this.getEClassifiers().push(ae), ae.setEPackage(this), a.Literals.VALIDATION_MESSAGE_MAPPER = ae;
    const er = new p();
    er.setName("order"), er.setLowerBound(0), er.setUpperBound(1), ae.getEStructuralFeatures().push(er), a.Literals.VALIDATION_MESSAGE_MAPPER__ORDER = er;
    const tr = new p();
    tr.setName("matchCode"), tr.setLowerBound(0), tr.setUpperBound(1), ae.getEStructuralFeatures().push(tr), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_CODE = tr;
    const sr = new p();
    sr.setName("matchSeverity"), sr.setLowerBound(0), sr.setUpperBound(1), ae.getEStructuralFeatures().push(sr), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_SEVERITY = sr;
    const qt = new S();
    qt.setContainment(!0), qt.setName("matchExpression"), qt.setLowerBound(0), qt.setUpperBound(1), ae.getEStructuralFeatures().push(qt), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION = qt;
    const rr = new p();
    rr.setName("mappedText"), rr.setLowerBound(0), rr.setUpperBound(1), ae.getEStructuralFeatures().push(rr), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT = rr;
    const zt = new S();
    zt.setContainment(!0), zt.setName("mappedTextExpression"), zt.setLowerBound(0), zt.setUpperBound(1), ae.getEStructuralFeatures().push(zt), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION = zt;
    const ar = new p();
    ar.setName("mappedSeverity"), ar.setLowerBound(0), ar.setUpperBound(1), ae.getEStructuralFeatures().push(ar), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_SEVERITY = ar, a.Literals.FORM_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.TABLE_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.SECTION_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.TAB_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.SUMMARY_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.MASTER_DETAIL.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.WIDGET_COMPONENT.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.INPUT_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.TEXT_AREA_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.NUMBER_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.CHECKBOX_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.DATE_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.COMBOBOX_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.SELECT_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.ALL_FEATURES.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.GROUP_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.FOR_EACH.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.REFERENCE_LINK_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.BASE_STYLE.getESuperTypes().push(a.Literals.STYLE), a.Literals.LAYOUT_STYLE.getESuperTypes().push(a.Literals.BASE_STYLE), a.Literals.WIDGET_STYLE.getESuperTypes().push(a.Literals.BASE_STYLE), a.Literals.TABLE_STYLE.getESuperTypes().push(a.Literals.WIDGET_STYLE), a.Literals.VALIDATION_EXPRESSION.getESuperTypes().push(a.Literals.EXPRESSION), a.Literals.U_I_MODEL__TARGET_CLASSES.setEType(Kt().getEClassifier("EClass")), a.Literals.U_I_MODEL__FILTER_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.U_I_MODEL__STYLES.setEType(a.Literals.BASE_STYLE), a.Literals.U_I_MODEL__TEMPLATES.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.U_I_MODEL__COMPONENTS.setEType(a.Literals.COMPONENT), a.Literals.COMPONENT__TARGET_CLASSES.setEType(Kt().getEClassifier("EClass")), a.Literals.COMPONENT__STYLES.setEType(a.Literals.BASE_STYLE), a.Literals.COMPONENT__CHILDREN.setEType(a.Literals.COMPONENT), a.Literals.FORM_VIEW__FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.FORM_VIEW__VALIDATIONS.setEType(a.Literals.VALIDATION_EXPRESSION), a.Literals.FORM_VIEW__VALIDATION_MAPPERS.setEType(a.Literals.VALIDATION_MESSAGE_MAPPER), a.Literals.TABLE_VIEW__TABLE_STYLE.setEType(a.Literals.TABLE_STYLE), a.Literals.SECTION_VIEW__SECTIONS.setEType(a.Literals.FORM_VIEW), a.Literals.TAB_VIEW__TABS.setEType(a.Literals.COMPONENT), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.MASTER_DETAIL__MASTER.setEType(a.Literals.TABLE_VIEW), a.Literals.MASTER_DETAIL__DETAIL.setEType(a.Literals.COMPONENT), a.Literals.WIDGET_COMPONENT__FEATURE.setEType(Kt().getEClassifier("EStructuralFeature")), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.WIDGET_COMPONENT__VALIDATIONS.setEType(a.Literals.VALIDATION_EXPRESSION), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS.setEType(a.Literals.VALIDATION_MESSAGE_MAPPER), a.Literals.WIDGET_COMPONENT__BINDINGS.setEType(a.Literals.PROPERTY_BINDING), a.Literals.PROPERTY_BINDING__EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.DATE_WIDGET__CONSTRAINS.setEType(a.Literals.EXPRESSION), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL.setEType(a.Literals.EXPRESSION), a.Literals.SELECT_WIDGET__OPTION_LABEL.setEType(a.Literals.EXPRESSION), a.Literals.ALL_FEATURES__WITH.setEType(Kt().getEClassifier("EStructuralFeature")), a.Literals.ALL_FEATURES__E_TYPE.setEType(Kt().getEClassifier("EClassifier")), a.Literals.ALL_FEATURES__FILTER.setEType(a.Literals.EXPRESSION), a.Literals.ALL_FEATURES__TEMPLATE.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.ALL_FEATURES__CASES.setEType(a.Literals.TEMPLATE_CASE), a.Literals.TEMPLATE_CASE__WHEN.setEType(a.Literals.EXPRESSION), a.Literals.TEMPLATE_CASE__WIDGET.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.GROUP_WIDGET__FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL__CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.CONDITIONAL__THEN.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL__ELSE.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.FOR_EACH__ITEMS.setEType(a.Literals.EXPRESSION), a.Literals.FOR_EACH__BODY.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.U_I_MODEL_OVERLAY__CASES.setEType(a.Literals.TEMPLATE_CASE), a.Literals.BASE_STYLE__EXTENDS.setEType(a.Literals.BASE_STYLE), a.Literals.BASE_STYLE__VISIBILITY_CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.WIDGET_STYLE__FEATURE.setEType(Kt().getEClassifier("EStructuralFeature")), a.Literals.TABLE_STYLE__COLUMNS.setEType(a.Literals.WIDGET_STYLE), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION.setEType(a.Literals.EXPRESSION);
  }
};
ir(Qt, "eNAME", "uimodel"), ir(Qt, "eNS_URI", "http://uimodel/1.0"), ir(Qt, "eNS_PREFIX", "uimodel"), // Singleton instance
ir(Qt, "_instance"), /**
* Literals for quick access to metaclasses and features
*/
ir(Qt, "Literals", {
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
let C = Qt;
var Ui = Object.defineProperty, Vi = (s, e, t) => e in s ? Ui(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ee = (s, e, t) => Vi(s, typeof e != "symbol" ? e + "" : e, t);
const He = class N extends Ze {
  constructor() {
    super(...arguments), ee(this, "_name"), ee(this, "_targetClasses", []), ee(this, "_priority", 0), ee(this, "_filterExpression"), ee(this, "_styles", []), ee(this, "_templates", []), ee(this, "_components", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.U_I_MODEL;
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
      getFeature: () => this.eClass().getEStructuralFeature(N.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.TARGET_CLASSES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.TARGET_CLASSES,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.PRIORITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.FILTER_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.FILTER_EXPRESSION,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.STYLES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.STYLES,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.TEMPLATES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.TEMPLATES,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.COMPONENTS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.COMPONENTS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case N.NAME:
        return this.name;
      case N.TARGET_CLASSES:
        return this.targetClasses;
      case N.PRIORITY:
        return this.priority;
      case N.FILTER_EXPRESSION:
        return this.filterExpression;
      case N.STYLES:
        return this.styles;
      case N.TEMPLATES:
        return this.templates;
      case N.COMPONENTS:
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
      case N.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case N.TARGET_CLASSES:
        this.targetClasses = t, super.eSet(e, t);
        break;
      case N.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case N.FILTER_EXPRESSION:
        this.filterExpression = t, super.eSet(e, t);
        break;
      case N.STYLES:
        this.styles = t, super.eSet(e, t);
        break;
      case N.TEMPLATES:
        this.templates = t, super.eSet(e, t);
        break;
      case N.COMPONENTS:
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
      case N.NAME:
        return this._name !== void 0;
      case N.TARGET_CLASSES:
        return this._targetClasses !== void 0 && this._targetClasses.length > 0;
      case N.PRIORITY:
        return this._priority !== 0;
      case N.FILTER_EXPRESSION:
        return this._filterExpression !== void 0;
      case N.STYLES:
        return this._styles !== void 0 && this._styles.length > 0;
      case N.TEMPLATES:
        return this._templates !== void 0 && this._templates.length > 0;
      case N.COMPONENTS:
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
      case N.NAME:
        this._name = void 0;
        return;
      case N.TARGET_CLASSES:
        this._targetClasses = [];
        return;
      case N.PRIORITY:
        this._priority = 0;
        return;
      case N.FILTER_EXPRESSION:
        this._filterExpression = void 0;
        return;
      case N.STYLES:
        this._styles = [];
        return;
      case N.TEMPLATES:
        this._templates = [];
        return;
      case N.COMPONENTS:
        this._components = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
ee(He, "NAME", 0), ee(He, "TARGET_CLASSES", 1), ee(He, "PRIORITY", 2), ee(He, "FILTER_EXPRESSION", 3), ee(He, "STYLES", 4), ee(He, "TEMPLATES", 5), ee(He, "COMPONENTS", 6);
let Bi = He;
const Yr = {
  FIELD_THEN_FORM: "FIELD_THEN_FORM"
};
var Gi = Object.defineProperty, Wi = (s, e, t) => e in s ? Gi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ye = (s, e, t) => Wi(s, typeof e != "symbol" ? e + "" : e, t);
const Jt = class w extends Ze {
  constructor() {
    super(...arguments), ye(this, "_name", ""), ye(this, "_group"), ye(this, "_targetClasses", []), ye(this, "_styles", []), ye(this, "_children", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.COMPONENT;
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
ye(Jt, "NAME", 0), ye(Jt, "GROUP", 1), ye(Jt, "TARGET_CLASSES", 2), ye(Jt, "STYLES", 3), ye(Jt, "CHILDREN", 4);
let dt = Jt;
var Yi = Object.defineProperty, $i = (s, e, t) => e in s ? Yi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, qe = (s, e, t) => $i(s, typeof e != "symbol" ? e + "" : e, t);
const ur = class M extends dt {
  constructor() {
    super(...arguments), qe(this, "_fields", []), qe(this, "_validations", []), qe(this, "_validationMappers", []), qe(this, "_mapperOrder", Yr.FIELD_THEN_FORM);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.FORM_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(M.FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => M.FIELDS,
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
      getFeature: () => this.eClass().getEStructuralFeature(M.VALIDATIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => M.VALIDATIONS,
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
      getFeature: () => this.eClass().getEStructuralFeature(M.VALIDATION_MAPPERS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => M.VALIDATION_MAPPERS,
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
      getFeature: () => this.eClass().getEStructuralFeature(M.MAPPER_ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => M.MAPPER_ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case M.FIELDS:
        return this.fields;
      case M.VALIDATIONS:
        return this.validations;
      case M.VALIDATION_MAPPERS:
        return this.validationMappers;
      case M.MAPPER_ORDER:
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
      case M.FIELDS:
        this.fields = t, super.eSet(e, t);
        break;
      case M.VALIDATIONS:
        this.validations = t, super.eSet(e, t);
        break;
      case M.VALIDATION_MAPPERS:
        this.validationMappers = t, super.eSet(e, t);
        break;
      case M.MAPPER_ORDER:
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
      case M.FIELDS:
        return this._fields !== void 0 && this._fields.length > 0;
      case M.VALIDATIONS:
        return this._validations !== void 0 && this._validations.length > 0;
      case M.VALIDATION_MAPPERS:
        return this._validationMappers !== void 0 && this._validationMappers.length > 0;
      case M.MAPPER_ORDER:
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
      case M.FIELDS:
        this._fields = [];
        return;
      case M.VALIDATIONS:
        this._validations = [];
        return;
      case M.VALIDATION_MAPPERS:
        this._validationMappers = [];
        return;
      case M.MAPPER_ORDER:
        this._mapperOrder = Yr.FIELD_THEN_FORM;
        return;
      default:
        super.eUnset(e);
    }
  }
};
qe(ur, "FIELDS", 5), qe(ur, "VALIDATIONS", 6), qe(ur, "VALIDATION_MAPPERS", 7), qe(ur, "MAPPER_ORDER", 8);
let ki = ur;
var xi = Object.defineProperty, Xi = (s, e, t) => e in s ? xi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, wa = (s, e, t) => Xi(s, typeof e != "symbol" ? e + "" : e, t);
const Fa = class rt extends dt {
  constructor() {
    super(...arguments), wa(this, "_tableStyle");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.TABLE_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(rt.TABLE_STYLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => rt.TABLE_STYLE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case rt.TABLE_STYLE:
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
      case rt.TABLE_STYLE:
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
      case rt.TABLE_STYLE:
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
      case rt.TABLE_STYLE:
        this._tableStyle = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
wa(Fa, "TABLE_STYLE", 5);
let Hi = Fa;
var ji = Object.defineProperty, qi = (s, e, t) => e in s ? ji(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Pa = (s, e, t) => qi(s, typeof e != "symbol" ? e + "" : e, t);
const ba = class at extends dt {
  constructor() {
    super(...arguments), Pa(this, "_sections", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.SECTION_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(at.SECTIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => at.SECTIONS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case at.SECTIONS:
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
      case at.SECTIONS:
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
      case at.SECTIONS:
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
      case at.SECTIONS:
        this._sections = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Pa(ba, "SECTIONS", 5);
let zi = ba;
var Ki = Object.defineProperty, Qi = (s, e, t) => e in s ? Ki(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ma = (s, e, t) => Qi(s, typeof e != "symbol" ? e + "" : e, t);
const Ua = class it extends dt {
  constructor() {
    super(...arguments), Ma(this, "_tabs", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.TAB_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(it.TABS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => it.TABS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case it.TABS:
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
      case it.TABS:
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
      case it.TABS:
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
      case it.TABS:
        this._tabs = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ma(Ua, "TABS", 5);
let Ji = Ua;
var Zi = Object.defineProperty, eu = (s, e, t) => e in s ? Zi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Va = (s, e, t) => eu(s, typeof e != "symbol" ? e + "" : e, t);
const Ba = class ut extends dt {
  constructor() {
    super(...arguments), Va(this, "_summaryFields", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.SUMMARY_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(ut.SUMMARY_FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ut.SUMMARY_FIELDS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ut.SUMMARY_FIELDS:
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
      case ut.SUMMARY_FIELDS:
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
      case ut.SUMMARY_FIELDS:
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
      case ut.SUMMARY_FIELDS:
        this._summaryFields = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Va(Ba, "SUMMARY_FIELDS", 5);
let tu = Ba;
var su = Object.defineProperty, ru = (s, e, t) => e in s ? su(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Or = (s, e, t) => ru(s, typeof e != "symbol" ? e + "" : e, t);
const Hr = class ie extends dt {
  constructor() {
    super(...arguments), Or(this, "_master"), Or(this, "_detail");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.MASTER_DETAIL;
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
Or(Hr, "MASTER", 5), Or(Hr, "DETAIL", 6);
let au = Hr;
var iu = Object.defineProperty, uu = (s, e, t) => e in s ? iu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ar = (s, e, t) => uu(s, typeof e != "symbol" ? e + "" : e, t);
const jr = class ue extends Ze {
  constructor() {
    super(...arguments), Ar(this, "_property", ""), Ar(this, "_expression");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.PROPERTY_BINDING;
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
Ar(jr, "PROPERTY", 0), Ar(jr, "EXPRESSION", 1);
let nu = jr;
var lu = Object.defineProperty, ou = (s, e, t) => e in s ? lu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, H = (s, e, t) => ou(s, typeof e != "symbol" ? e + "" : e, t);
const Ae = class T extends dt {
  constructor() {
    super(...arguments), H(this, "_feature"), H(this, "_label"), H(this, "_placeholder"), H(this, "_readOnly"), H(this, "_required"), H(this, "_visibilityCondition"), H(this, "_validations", []), H(this, "_validationMappers", []), H(this, "_bindings", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.WIDGET_COMPONENT;
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
      getFeature: () => this.eClass().getEStructuralFeature(T.FEATURE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => T.FEATURE,
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
      getFeature: () => this.eClass().getEStructuralFeature(T.LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => T.LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(T.PLACEHOLDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => T.PLACEHOLDER,
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
      getFeature: () => this.eClass().getEStructuralFeature(T.READ_ONLY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => T.READ_ONLY,
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
      getFeature: () => this.eClass().getEStructuralFeature(T.REQUIRED),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => T.REQUIRED,
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
      getFeature: () => this.eClass().getEStructuralFeature(T.VISIBILITY_CONDITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => T.VISIBILITY_CONDITION,
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
      getFeature: () => this.eClass().getEStructuralFeature(T.VALIDATIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => T.VALIDATIONS,
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
      getFeature: () => this.eClass().getEStructuralFeature(T.VALIDATION_MAPPERS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => T.VALIDATION_MAPPERS,
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
      getFeature: () => this.eClass().getEStructuralFeature(T.BINDINGS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => T.BINDINGS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case T.FEATURE:
        return this.feature;
      case T.LABEL:
        return this.label;
      case T.PLACEHOLDER:
        return this.placeholder;
      case T.READ_ONLY:
        return this.readOnly;
      case T.REQUIRED:
        return this.required;
      case T.VISIBILITY_CONDITION:
        return this.visibilityCondition;
      case T.VALIDATIONS:
        return this.validations;
      case T.VALIDATION_MAPPERS:
        return this.validationMappers;
      case T.BINDINGS:
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
      case T.FEATURE:
        this.feature = t, super.eSet(e, t);
        break;
      case T.LABEL:
        this.label = t, super.eSet(e, t);
        break;
      case T.PLACEHOLDER:
        this.placeholder = t, super.eSet(e, t);
        break;
      case T.READ_ONLY:
        this.readOnly = t, super.eSet(e, t);
        break;
      case T.REQUIRED:
        this.required = t, super.eSet(e, t);
        break;
      case T.VISIBILITY_CONDITION:
        this.visibilityCondition = t, super.eSet(e, t);
        break;
      case T.VALIDATIONS:
        this.validations = t, super.eSet(e, t);
        break;
      case T.VALIDATION_MAPPERS:
        this.validationMappers = t, super.eSet(e, t);
        break;
      case T.BINDINGS:
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
      case T.FEATURE:
        return this._feature !== void 0;
      case T.LABEL:
        return this._label !== void 0;
      case T.PLACEHOLDER:
        return this._placeholder !== void 0;
      case T.READ_ONLY:
        return this._readOnly !== void 0;
      case T.REQUIRED:
        return this._required !== void 0;
      case T.VISIBILITY_CONDITION:
        return this._visibilityCondition !== void 0;
      case T.VALIDATIONS:
        return this._validations !== void 0 && this._validations.length > 0;
      case T.VALIDATION_MAPPERS:
        return this._validationMappers !== void 0 && this._validationMappers.length > 0;
      case T.BINDINGS:
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
      case T.FEATURE:
        this._feature = void 0;
        return;
      case T.LABEL:
        this._label = void 0;
        return;
      case T.PLACEHOLDER:
        this._placeholder = void 0;
        return;
      case T.READ_ONLY:
        this._readOnly = void 0;
        return;
      case T.REQUIRED:
        this._required = void 0;
        return;
      case T.VISIBILITY_CONDITION:
        this._visibilityCondition = void 0;
        return;
      case T.VALIDATIONS:
        this._validations = [];
        return;
      case T.VALIDATION_MAPPERS:
        this._validationMappers = [];
        return;
      case T.BINDINGS:
        this._bindings = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
H(Ae, "FEATURE", 5), H(Ae, "LABEL", 6), H(Ae, "PLACEHOLDER", 7), H(Ae, "READ_ONLY", 8), H(Ae, "REQUIRED", 9), H(Ae, "VISIBILITY_CONDITION", 10), H(Ae, "VALIDATIONS", 11), H(Ae, "VALIDATION_MAPPERS", 12), H(Ae, "BINDINGS", 13);
let fe = Ae;
var cu = Object.defineProperty, Eu = (s, e, t) => e in s ? cu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, es = (s, e, t) => Eu(s, typeof e != "symbol" ? e + "" : e, t);
const fr = class Y extends fe {
  constructor() {
    super(...arguments), es(this, "_maxLength"), es(this, "_value"), es(this, "_password");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.INPUT_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(Y.MAX_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.MAX_LENGTH,
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
  get password() {
    return this._password;
  }
  set password(e) {
    const t = this._password;
    this._password = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Y.PASSWORD),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.PASSWORD,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Y.MAX_LENGTH:
        return this.maxLength;
      case Y.VALUE:
        return this.value;
      case Y.PASSWORD:
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
      case Y.MAX_LENGTH:
        this.maxLength = t, super.eSet(e, t);
        break;
      case Y.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case Y.PASSWORD:
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
      case Y.MAX_LENGTH:
        return this._maxLength !== void 0;
      case Y.VALUE:
        return this._value !== void 0;
      case Y.PASSWORD:
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
      case Y.MAX_LENGTH:
        this._maxLength = void 0;
        return;
      case Y.VALUE:
        this._value = void 0;
        return;
      case Y.PASSWORD:
        this._password = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
es(fr, "MAX_LENGTH", 14), es(fr, "VALUE", 15), es(fr, "PASSWORD", 16);
let hu = fr;
var gu = Object.defineProperty, du = (s, e, t) => e in s ? gu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ts = (s, e, t) => du(s, typeof e != "symbol" ? e + "" : e, t);
const mr = class $ extends fe {
  constructor() {
    super(...arguments), ts(this, "_rows", 4), ts(this, "_maxLength"), ts(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.TEXT_AREA_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature($.ROWS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.ROWS,
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
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case $.ROWS:
        return this.rows;
      case $.MAX_LENGTH:
        return this.maxLength;
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
      case $.ROWS:
        this.rows = t, super.eSet(e, t);
        break;
      case $.MAX_LENGTH:
        this.maxLength = t, super.eSet(e, t);
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
      case $.ROWS:
        return this._rows !== 4;
      case $.MAX_LENGTH:
        return this._maxLength !== void 0;
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
      case $.ROWS:
        this._rows = 4;
        return;
      case $.MAX_LENGTH:
        this._maxLength = void 0;
        return;
      case $.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
ts(mr, "ROWS", 14), ts(mr, "MAX_LENGTH", 15), ts(mr, "VALUE", 16);
let pu = mr;
var Tu = Object.defineProperty, Su = (s, e, t) => e in s ? Tu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ze = (s, e, t) => Su(s, typeof e != "symbol" ? e + "" : e, t);
const nr = class U extends fe {
  constructor() {
    super(...arguments), ze(this, "_min"), ze(this, "_max"), ze(this, "_step", 1), ze(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.NUMBER_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(U.MIN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => U.MIN,
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
      getFeature: () => this.eClass().getEStructuralFeature(U.MAX),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => U.MAX,
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
      getFeature: () => this.eClass().getEStructuralFeature(U.STEP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => U.STEP,
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
      getFeature: () => this.eClass().getEStructuralFeature(U.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => U.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case U.MIN:
        return this.min;
      case U.MAX:
        return this.max;
      case U.STEP:
        return this.step;
      case U.VALUE:
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
      case U.MIN:
        this.min = t, super.eSet(e, t);
        break;
      case U.MAX:
        this.max = t, super.eSet(e, t);
        break;
      case U.STEP:
        this.step = t, super.eSet(e, t);
        break;
      case U.VALUE:
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
      case U.MIN:
        return this._min !== void 0;
      case U.MAX:
        return this._max !== void 0;
      case U.STEP:
        return this._step !== 1;
      case U.VALUE:
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
      case U.MIN:
        this._min = void 0;
        return;
      case U.MAX:
        this._max = void 0;
        return;
      case U.STEP:
        this._step = 1;
        return;
      case U.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
ze(nr, "MIN", 14), ze(nr, "MAX", 15), ze(nr, "STEP", 16), ze(nr, "VALUE", 17);
let fu = nr;
var mu = Object.defineProperty, Iu = (s, e, t) => e in s ? mu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Cr = (s, e, t) => Iu(s, typeof e != "symbol" ? e + "" : e, t);
const qr = class ne extends fe {
  constructor() {
    super(...arguments), Cr(this, "_asToggle"), Cr(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.CHECKBOX_WIDGET;
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
Cr(qr, "AS_TOGGLE", 14), Cr(qr, "VALUE", 15);
let Nu = qr;
var Lu = Object.defineProperty, _u = (s, e, t) => e in s ? Lu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ke = (s, e, t) => _u(s, typeof e != "symbol" ? e + "" : e, t);
const lr = class V extends fe {
  constructor() {
    super(...arguments), Ke(this, "_withTime"), Ke(this, "_format", "DD.MM.YYYY"), Ke(this, "_constrains"), Ke(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.DATE_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(V.WITH_TIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => V.WITH_TIME,
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
      getFeature: () => this.eClass().getEStructuralFeature(V.FORMAT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => V.FORMAT,
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
      getFeature: () => this.eClass().getEStructuralFeature(V.CONSTRAINS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => V.CONSTRAINS,
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
      case V.WITH_TIME:
        return this.withTime;
      case V.FORMAT:
        return this.format;
      case V.CONSTRAINS:
        return this.constrains;
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
      case V.WITH_TIME:
        this.withTime = t, super.eSet(e, t);
        break;
      case V.FORMAT:
        this.format = t, super.eSet(e, t);
        break;
      case V.CONSTRAINS:
        this.constrains = t, super.eSet(e, t);
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
      case V.WITH_TIME:
        return this._withTime !== void 0;
      case V.FORMAT:
        return this._format !== "DD.MM.YYYY";
      case V.CONSTRAINS:
        return this._constrains !== void 0;
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
      case V.WITH_TIME:
        this._withTime = void 0;
        return;
      case V.FORMAT:
        this._format = "DD.MM.YYYY";
        return;
      case V.CONSTRAINS:
        this._constrains = void 0;
        return;
      case V.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ke(lr, "WITH_TIME", 14), Ke(lr, "FORMAT", 15), Ke(lr, "CONSTRAINS", 16), Ke(lr, "VALUE", 17);
let vu = lr;
var Ou = Object.defineProperty, Au = (s, e, t) => e in s ? Ou(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ss = (s, e, t) => Au(s, typeof e != "symbol" ? e + "" : e, t);
const Ir = class k extends fe {
  constructor() {
    super(...arguments), ss(this, "_optionLabel"), ss(this, "_minSearchLength", 2), ss(this, "_multiSelect");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.COMBOBOX_WIDGET;
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
  get minSearchLength() {
    return this._minSearchLength;
  }
  set minSearchLength(e) {
    const t = this._minSearchLength;
    this._minSearchLength = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(k.MIN_SEARCH_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.MIN_SEARCH_LENGTH,
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
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case k.OPTION_LABEL:
        return this.optionLabel;
      case k.MIN_SEARCH_LENGTH:
        return this.minSearchLength;
      case k.MULTI_SELECT:
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
      case k.OPTION_LABEL:
        this.optionLabel = t, super.eSet(e, t);
        break;
      case k.MIN_SEARCH_LENGTH:
        this.minSearchLength = t, super.eSet(e, t);
        break;
      case k.MULTI_SELECT:
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
      case k.OPTION_LABEL:
        return this._optionLabel !== void 0;
      case k.MIN_SEARCH_LENGTH:
        return this._minSearchLength !== 2;
      case k.MULTI_SELECT:
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
      case k.OPTION_LABEL:
        this._optionLabel = void 0;
        return;
      case k.MIN_SEARCH_LENGTH:
        this._minSearchLength = 2;
        return;
      case k.MULTI_SELECT:
        this._multiSelect = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
ss(Ir, "OPTION_LABEL", 14), ss(Ir, "MIN_SEARCH_LENGTH", 15), ss(Ir, "MULTI_SELECT", 16);
let Cu = Ir;
var yu = Object.defineProperty, Du = (s, e, t) => e in s ? yu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Qe = (s, e, t) => Du(s, typeof e != "symbol" ? e + "" : e, t);
const or = class B extends fe {
  constructor() {
    super(...arguments), Qe(this, "_optionLabel"), Qe(this, "_multiSelect"), Qe(this, "_asButtonGroup"), Qe(this, "_values", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.SELECT_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(B.OPTION_LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => B.OPTION_LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(B.MULTI_SELECT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => B.MULTI_SELECT,
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
      getFeature: () => this.eClass().getEStructuralFeature(B.AS_BUTTON_GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => B.AS_BUTTON_GROUP,
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
      getFeature: () => this.eClass().getEStructuralFeature(B.VALUES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => B.VALUES,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case B.OPTION_LABEL:
        return this.optionLabel;
      case B.MULTI_SELECT:
        return this.multiSelect;
      case B.AS_BUTTON_GROUP:
        return this.asButtonGroup;
      case B.VALUES:
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
      case B.OPTION_LABEL:
        this.optionLabel = t, super.eSet(e, t);
        break;
      case B.MULTI_SELECT:
        this.multiSelect = t, super.eSet(e, t);
        break;
      case B.AS_BUTTON_GROUP:
        this.asButtonGroup = t, super.eSet(e, t);
        break;
      case B.VALUES:
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
      case B.OPTION_LABEL:
        return this._optionLabel !== void 0;
      case B.MULTI_SELECT:
        return this._multiSelect !== void 0;
      case B.AS_BUTTON_GROUP:
        return this._asButtonGroup !== void 0;
      case B.VALUES:
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
      case B.OPTION_LABEL:
        this._optionLabel = void 0;
        return;
      case B.MULTI_SELECT:
        this._multiSelect = void 0;
        return;
      case B.AS_BUTTON_GROUP:
        this._asButtonGroup = void 0;
        return;
      case B.VALUES:
        this._values = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Qe(or, "OPTION_LABEL", 14), Qe(or, "MULTI_SELECT", 15), Qe(or, "AS_BUTTON_GROUP", 16), Qe(or, "VALUES", 17);
let Ru = or;
var wu = Object.defineProperty, Fu = (s, e, t) => e in s ? wu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Te = (s, e, t) => Fu(s, typeof e != "symbol" ? e + "" : e, t);
const nt = class O extends fe {
  constructor() {
    super(...arguments), Te(this, "_with", []), Te(this, "_eType", []), Te(this, "_filter"), Te(this, "_template"), Te(this, "_cases", []), Te(this, "_priority", 0);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.ALL_FEATURES;
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
Te(nt, "WITH", 14), Te(nt, "E_TYPE", 15), Te(nt, "FILTER", 16), Te(nt, "TEMPLATE", 17), Te(nt, "CASES", 18), Te(nt, "PRIORITY", 19);
let Pu = nt;
var bu = Object.defineProperty, Mu = (s, e, t) => e in s ? bu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, yr = (s, e, t) => Mu(s, typeof e != "symbol" ? e + "" : e, t);
const zr = class le extends Ze {
  constructor() {
    super(...arguments), yr(this, "_when"), yr(this, "_widget");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.TEMPLATE_CASE;
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
yr(zr, "WHEN", 0), yr(zr, "WIDGET", 1);
let Uu = zr;
const $r = {
  VERTICAL: "VERTICAL"
};
var Vu = Object.defineProperty, Bu = (s, e, t) => e in s ? Vu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Dr = (s, e, t) => Bu(s, typeof e != "symbol" ? e + "" : e, t);
const Kr = class oe extends fe {
  constructor() {
    super(...arguments), Dr(this, "_fields", []), Dr(this, "_layout", $r.VERTICAL);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.GROUP_WIDGET;
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
Dr(Kr, "FIELDS", 14), Dr(Kr, "LAYOUT", 15);
let Gu = Kr;
var Wu = Object.defineProperty, Yu = (s, e, t) => e in s ? Wu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, rs = (s, e, t) => Yu(s, typeof e != "symbol" ? e + "" : e, t);
const Nr = class x extends fe {
  constructor() {
    super(...arguments), rs(this, "_condition"), rs(this, "_then", []), rs(this, "_else", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.CONDITIONAL;
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
      getFeature: () => this.eClass().getEStructuralFeature(x.CONDITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.CONDITION,
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
      getFeature: () => this.eClass().getEStructuralFeature(x.THEN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.THEN,
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
      getFeature: () => this.eClass().getEStructuralFeature(x.ELSE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.ELSE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case x.CONDITION:
        return this.condition;
      case x.THEN:
        return this.then;
      case x.ELSE:
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
      case x.CONDITION:
        this.condition = t, super.eSet(e, t);
        break;
      case x.THEN:
        this.then = t, super.eSet(e, t);
        break;
      case x.ELSE:
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
      case x.CONDITION:
        return this._condition !== void 0;
      case x.THEN:
        return this._then !== void 0 && this._then.length > 0;
      case x.ELSE:
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
      case x.CONDITION:
        this._condition = void 0;
        return;
      case x.THEN:
        this._then = [];
        return;
      case x.ELSE:
        this._else = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
rs(Nr, "CONDITION", 14), rs(Nr, "THEN", 15), rs(Nr, "ELSE", 16);
let $u = Nr;
var ku = Object.defineProperty, xu = (s, e, t) => e in s ? ku(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, as = (s, e, t) => xu(s, typeof e != "symbol" ? e + "" : e, t);
const Lr = class X extends fe {
  constructor() {
    super(...arguments), as(this, "_items"), as(this, "_body", []), as(this, "_emptyText");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.FOR_EACH;
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
      getFeature: () => this.eClass().getEStructuralFeature(X.ITEMS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => X.ITEMS,
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
      getFeature: () => this.eClass().getEStructuralFeature(X.BODY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => X.BODY,
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
      getFeature: () => this.eClass().getEStructuralFeature(X.EMPTY_TEXT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => X.EMPTY_TEXT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case X.ITEMS:
        return this.items;
      case X.BODY:
        return this.body;
      case X.EMPTY_TEXT:
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
      case X.ITEMS:
        this.items = t, super.eSet(e, t);
        break;
      case X.BODY:
        this.body = t, super.eSet(e, t);
        break;
      case X.EMPTY_TEXT:
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
      case X.ITEMS:
        return this._items !== void 0;
      case X.BODY:
        return this._body !== void 0 && this._body.length > 0;
      case X.EMPTY_TEXT:
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
      case X.ITEMS:
        this._items = void 0;
        return;
      case X.BODY:
        this._body = [];
        return;
      case X.EMPTY_TEXT:
        this._emptyText = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
as(Lr, "ITEMS", 14), as(Lr, "BODY", 15), as(Lr, "EMPTY_TEXT", 16);
let Xu = Lr;
var Hu = Object.defineProperty, ju = (s, e, t) => e in s ? Hu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Rr = (s, e, t) => ju(s, typeof e != "symbol" ? e + "" : e, t);
const Qr = class ce extends fe {
  constructor() {
    super(...arguments), Rr(this, "_displayExpression"), Rr(this, "_targetRoute");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.REFERENCE_LINK_WIDGET;
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
Rr(Qr, "DISPLAY_EXPRESSION", 14), Rr(Qr, "TARGET_ROUTE", 15);
let qu = Qr;
var zu = Object.defineProperty, Ku = (s, e, t) => e in s ? zu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Je = (s, e, t) => Ku(s, typeof e != "symbol" ? e + "" : e, t);
const cr = class G extends Ze {
  constructor() {
    super(...arguments), Je(this, "_name"), Je(this, "_priority", 0), Je(this, "_templates", []), Je(this, "_cases", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.U_I_MODEL_OVERLAY;
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
      getFeature: () => this.eClass().getEStructuralFeature(G.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(G.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.PRIORITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(G.TEMPLATES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.TEMPLATES,
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
      getFeature: () => this.eClass().getEStructuralFeature(G.CASES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.CASES,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case G.NAME:
        return this.name;
      case G.PRIORITY:
        return this.priority;
      case G.TEMPLATES:
        return this.templates;
      case G.CASES:
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
      case G.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case G.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case G.TEMPLATES:
        this.templates = t, super.eSet(e, t);
        break;
      case G.CASES:
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
      case G.NAME:
        return this._name !== void 0;
      case G.PRIORITY:
        return this._priority !== 0;
      case G.TEMPLATES:
        return this._templates !== void 0 && this._templates.length > 0;
      case G.CASES:
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
      case G.NAME:
        this._name = void 0;
        return;
      case G.PRIORITY:
        this._priority = 0;
        return;
      case G.TEMPLATES:
        this._templates = [];
        return;
      case G.CASES:
        this._cases = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Je(cr, "NAME", 0), Je(cr, "PRIORITY", 1), Je(cr, "TEMPLATES", 2), Je(cr, "CASES", 3);
let Qu = cr;
var Ju = Object.defineProperty, Zu = (s, e, t) => e in s ? Ju(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Se = (s, e, t) => Zu(s, typeof e != "symbol" ? e + "" : e, t);
const lt = class D extends Ze {
  constructor() {
    super(...arguments), Se(this, "_extends"), Se(this, "_css"), Se(this, "_vueComponent"), Se(this, "_visibilityCondition"), Se(this, "_name"), Se(this, "_group");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.BASE_STYLE;
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
Se(lt, "EXTENDS", 2), Se(lt, "CSS", 3), Se(lt, "VUE_COMPONENT", 4), Se(lt, "VISIBILITY_CONDITION", 5), Se(lt, "NAME", 0), Se(lt, "GROUP", 1);
let Ga = lt;
var en = Object.defineProperty, tn = (s, e, t) => e in s ? en(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, wr = (s, e, t) => tn(s, typeof e != "symbol" ? e + "" : e, t);
const Jr = class Ee extends Ga {
  constructor() {
    super(...arguments), wr(this, "_layout"), wr(this, "_order");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.LAYOUT_STYLE;
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
wr(Jr, "LAYOUT", 6), wr(Jr, "ORDER", 7);
let sn = Jr;
var rn = Object.defineProperty, an = (s, e, t) => e in s ? rn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, De = (s, e, t) => an(s, typeof e != "symbol" ? e + "" : e, t);
const Zt = class F extends Ga {
  constructor() {
    super(...arguments), De(this, "_feature"), De(this, "_widgetType"), De(this, "_label"), De(this, "_readOnly"), De(this, "_order");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.WIDGET_STYLE;
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
De(Zt, "FEATURE", 6), De(Zt, "WIDGET_TYPE", 7), De(Zt, "LABEL", 8), De(Zt, "READ_ONLY", 9), De(Zt, "ORDER", 10);
let Wa = Zt;
var un = Object.defineProperty, nn = (s, e, t) => e in s ? un(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ya = (s, e, t) => nn(s, typeof e != "symbol" ? e + "" : e, t);
const $a = class ot extends Wa {
  constructor() {
    super(...arguments), Ya(this, "_columns", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.TABLE_STYLE;
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
      getFeature: () => this.eClass().getEStructuralFeature(ot.COLUMNS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ot.COLUMNS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ot.COLUMNS:
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
      case ot.COLUMNS:
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
      case ot.COLUMNS:
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
      case ot.COLUMNS:
        this._columns = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ya($a, "COLUMNS", 11);
let ln = $a;
var on = Object.defineProperty, cn = (s, e, t) => e in s ? on(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Fr = (s, e, t) => cn(s, typeof e != "symbol" ? e + "" : e, t);
const Zr = class he extends Ze {
  constructor() {
    super(...arguments), Fr(this, "_language", "OCL"), Fr(this, "_body", "");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.EXPRESSION;
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
Fr(Zr, "LANGUAGE", 0), Fr(Zr, "BODY", 1);
let ka = Zr;
const kr = {
  ERROR: "ERROR"
};
var En = Object.defineProperty, hn = (s, e, t) => e in s ? En(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Pr = (s, e, t) => hn(s, typeof e != "symbol" ? e + "" : e, t);
const ea = class ge extends ka {
  constructor() {
    super(...arguments), Pr(this, "_defaultMessage"), Pr(this, "_severity", kr.ERROR);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.VALIDATION_EXPRESSION;
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
Pr(ea, "DEFAULT_MESSAGE", 2), Pr(ea, "SEVERITY", 3);
let gn = ea;
var dn = Object.defineProperty, pn = (s, e, t) => e in s ? dn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, te = (s, e, t) => pn(s, typeof e != "symbol" ? e + "" : e, t);
const je = class L extends Ze {
  constructor() {
    super(...arguments), te(this, "_order"), te(this, "_matchCode"), te(this, "_matchSeverity"), te(this, "_matchExpression"), te(this, "_mappedText"), te(this, "_mappedTextExpression"), te(this, "_mappedSeverity");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.VALIDATION_MESSAGE_MAPPER;
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
      getFeature: () => this.eClass().getEStructuralFeature(L.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => L.ORDER,
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
      getFeature: () => this.eClass().getEStructuralFeature(L.MATCH_CODE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => L.MATCH_CODE,
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
      getFeature: () => this.eClass().getEStructuralFeature(L.MATCH_SEVERITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => L.MATCH_SEVERITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(L.MATCH_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => L.MATCH_EXPRESSION,
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
      getFeature: () => this.eClass().getEStructuralFeature(L.MAPPED_TEXT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => L.MAPPED_TEXT,
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
      getFeature: () => this.eClass().getEStructuralFeature(L.MAPPED_TEXT_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => L.MAPPED_TEXT_EXPRESSION,
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
      getFeature: () => this.eClass().getEStructuralFeature(L.MAPPED_SEVERITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => L.MAPPED_SEVERITY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case L.ORDER:
        return this.order;
      case L.MATCH_CODE:
        return this.matchCode;
      case L.MATCH_SEVERITY:
        return this.matchSeverity;
      case L.MATCH_EXPRESSION:
        return this.matchExpression;
      case L.MAPPED_TEXT:
        return this.mappedText;
      case L.MAPPED_TEXT_EXPRESSION:
        return this.mappedTextExpression;
      case L.MAPPED_SEVERITY:
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
      case L.ORDER:
        this.order = t, super.eSet(e, t);
        break;
      case L.MATCH_CODE:
        this.matchCode = t, super.eSet(e, t);
        break;
      case L.MATCH_SEVERITY:
        this.matchSeverity = t, super.eSet(e, t);
        break;
      case L.MATCH_EXPRESSION:
        this.matchExpression = t, super.eSet(e, t);
        break;
      case L.MAPPED_TEXT:
        this.mappedText = t, super.eSet(e, t);
        break;
      case L.MAPPED_TEXT_EXPRESSION:
        this.mappedTextExpression = t, super.eSet(e, t);
        break;
      case L.MAPPED_SEVERITY:
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
      case L.ORDER:
        return this._order !== void 0;
      case L.MATCH_CODE:
        return this._matchCode !== void 0;
      case L.MATCH_SEVERITY:
        return this._matchSeverity !== void 0;
      case L.MATCH_EXPRESSION:
        return this._matchExpression !== void 0;
      case L.MAPPED_TEXT:
        return this._mappedText !== void 0;
      case L.MAPPED_TEXT_EXPRESSION:
        return this._mappedTextExpression !== void 0;
      case L.MAPPED_SEVERITY:
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
      case L.ORDER:
        this._order = void 0;
        return;
      case L.MATCH_CODE:
        this._matchCode = void 0;
        return;
      case L.MATCH_SEVERITY:
        this._matchSeverity = void 0;
        return;
      case L.MATCH_EXPRESSION:
        this._matchExpression = void 0;
        return;
      case L.MAPPED_TEXT:
        this._mappedText = void 0;
        return;
      case L.MAPPED_TEXT_EXPRESSION:
        this._mappedTextExpression = void 0;
        return;
      case L.MAPPED_SEVERITY:
        this._mappedSeverity = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
te(je, "ORDER", 0), te(je, "MATCH_CODE", 1), te(je, "MATCH_SEVERITY", 2), te(je, "MATCH_EXPRESSION", 3), te(je, "MAPPED_TEXT", 4), te(je, "MAPPED_TEXT_EXPRESSION", 5), te(je, "MAPPED_SEVERITY", 6);
let Tn = je;
var Sn = Object.defineProperty, fn = (s, e, t) => e in s ? Sn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, mn = (s, e, t) => fn(s, e + "", t);
const xa = class Xa extends Oi {
  static get eINSTANCE() {
    return this._instance || (this._instance = new Xa()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(C.eINSTANCE);
  }
  /**
   * Create a new UIModel instance
   */
  createUIModel() {
    return new Bi();
  }
  /**
   * Create a new FormView instance
   */
  createFormView() {
    return new ki();
  }
  /**
   * Create a new TableView instance
   */
  createTableView() {
    return new Hi();
  }
  /**
   * Create a new SectionView instance
   */
  createSectionView() {
    return new zi();
  }
  /**
   * Create a new TabView instance
   */
  createTabView() {
    return new Ji();
  }
  /**
   * Create a new SummaryView instance
   */
  createSummaryView() {
    return new tu();
  }
  /**
   * Create a new MasterDetail instance
   */
  createMasterDetail() {
    return new au();
  }
  /**
   * Create a new PropertyBinding instance
   */
  createPropertyBinding() {
    return new nu();
  }
  /**
   * Create a new InputWidget instance
   */
  createInputWidget() {
    return new hu();
  }
  /**
   * Create a new TextAreaWidget instance
   */
  createTextAreaWidget() {
    return new pu();
  }
  /**
   * Create a new NumberWidget instance
   */
  createNumberWidget() {
    return new fu();
  }
  /**
   * Create a new CheckboxWidget instance
   */
  createCheckboxWidget() {
    return new Nu();
  }
  /**
   * Create a new DateWidget instance
   */
  createDateWidget() {
    return new vu();
  }
  /**
   * Create a new ComboboxWidget instance
   */
  createComboboxWidget() {
    return new Cu();
  }
  /**
   * Create a new SelectWidget instance
   */
  createSelectWidget() {
    return new Ru();
  }
  /**
   * Create a new AllFeatures instance
   */
  createAllFeatures() {
    return new Pu();
  }
  /**
   * Create a new TemplateCase instance
   */
  createTemplateCase() {
    return new Uu();
  }
  /**
   * Create a new GroupWidget instance
   */
  createGroupWidget() {
    return new Gu();
  }
  /**
   * Create a new Conditional instance
   */
  createConditional() {
    return new $u();
  }
  /**
   * Create a new ForEach instance
   */
  createForEach() {
    return new Xu();
  }
  /**
   * Create a new ReferenceLinkWidget instance
   */
  createReferenceLinkWidget() {
    return new qu();
  }
  /**
   * Create a new UIModelOverlay instance
   */
  createUIModelOverlay() {
    return new Qu();
  }
  /**
   * Create a new LayoutStyle instance
   */
  createLayoutStyle() {
    return new sn();
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
    return new ln();
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
    return new gn();
  }
  /**
   * Create a new ValidationMessageMapper instance
   */
  createValidationMessageMapper() {
    return new Tn();
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
mn(xa, "_instance");
let ua = xa;
const Ha = Symbol("uimodelComposerRegistry");
function ja() {
  const s = Et(Ha);
  if (!s)
    throw new Error(
      "[uimodel-composer] No ComposerRegistry provided. Make sure UIModelComposer is an ancestor of this component."
    );
  return s;
}
function In(s) {
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
const Nn = "uic";
function hr(s) {
  return s === !0 || s === "true";
}
function gt(s, e = 0) {
  if (typeof s == "number") return s;
  const t = Number(s);
  return Number.isFinite(t) ? t : e;
}
const Ln = {
  HOVER: ":hover",
  FOCUS: ":focus",
  FOCUS_WITHIN: ":focus-within",
  ACTIVE: ":active",
  DISABLED: ".uim-s-disabled",
  READONLY: ".uim-s-readonly",
  INVALID: ".uim-s-invalid",
  REQUIRED: ".uim-s-required"
};
function Ur(s) {
  return s.trim().replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() || "unnamed";
}
function ta(s) {
  return `--${Nn}-${Ur(s)}`;
}
function _n(s) {
  return s.replace(/token\(\s*([^)]+?)\s*\)/g, (e, t) => `var(${ta(t)})`);
}
function qa(s) {
  return `uic-${Ur(s)}`;
}
function vn(s) {
  return `uicss-theme-${Ur(s)}`;
}
function za(s, e) {
  return `uicss-cond-${Ur(s.name ?? "sheet")}-${e}`;
}
function Ka(s, e = "  ") {
  return s.filter((t) => t.property && t.value !== void 0).map((t) => `${e}${t.property.trim()}: ${_n(t.value)}${hr(t.important) ? " !important" : ""};`).join(`
`);
}
function On(s, e) {
  return e.filter((t) => t.declarations.length > 0).map((t) => {
    var r, i;
    const u = ((i = (r = t.state) == null ? void 0 : r.getName) == null ? void 0 : i.call(r)) ?? String(t.state), n = Ln[u] ?? `:${u.toLowerCase()}`;
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
  const u = On(s, t);
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
function An(s, e, t) {
  var r, i;
  let u;
  const n = (i = (r = e.targetClass) == null ? void 0 : r.getName) == null ? void 0 : i.call(r);
  return n ? u = Qa(e) ? `.uim-c-${n}` : `.uim-component[data-uim-eclass="${n}"]` : u = ".uim-component", e.componentName && (u += `[data-uim-name="${e.componentName}"]`), e.group && (u += `[data-uim-group="${e.group}"]`), e.condition && (u += `.${za(s, t)}`), u;
}
function Cn(s) {
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
function yn(s) {
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
    hr(r.dark) && i.push("  color-scheme: dark;"), i.length > 0 && e.push(`.${vn(r.name)} {
${i.join(`
`)}
}`);
  }
  const t = s.rules.map((r, i) => ({ rule: r, index: i }));
  t.sort((r, i) => gt(r.rule.priority) - gt(i.rule.priority) || r.index - i.index);
  for (const { rule: r, index: i } of t) {
    const u = fa(
      An(s, r, i),
      r.declarations,
      r.states,
      r.media || void 0
    );
    u && e.push(u);
  }
  for (const r of Cn(s.styles)) {
    if (!r.name) continue;
    const i = fa(`.${qa(r.name)}`, r.declarations, r.states);
    i && e.push(i);
  }
  return e.join(`

`);
}
function Dn(s) {
  return s.map(yn).filter(Boolean).join(`

`);
}
const Vr = Symbol("uimodel-css:sheets");
let Rn = 0;
function wn(s) {
  const e = gr(0);
  class t extends Ra {
    notifyChanged(d) {
      var E;
      try {
        super.notifyChanged(d);
      } catch {
      }
      if (!((E = d.isTouch) != null && E.call(d))) {
        e.value++;
        for (const o of i) n(o);
      }
    }
  }
  const r = new t();
  let i = [];
  function u(c) {
    const d = c;
    d.eAdapters().includes(r) || (d.eAdapterAdd ? d.eAdapterAdd(r) : d.eAdapters().push(r));
  }
  function n(c) {
    u(c);
    for (const d of c.eAllContents()) u(d);
  }
  function l(c) {
    const d = c;
    if (d.eAdapterRemove)
      d.eAdapterRemove(r);
    else {
      const E = d.eAdapters(), o = E.indexOf(r);
      o >= 0 && E.splice(o, 1);
    }
  }
  function h() {
    for (const c of i) {
      l(c);
      for (const d of c.eAllContents()) l(d);
    }
    i = [];
  }
  return dr(
    () => [...Me(s)],
    (c) => {
      h();
      for (const d of c)
        n(d), i.push(d);
      e.value++;
    },
    { immediate: !0 }
  ), ra(h), { css: m(() => (e.value, Dn([...Me(s)]))), version: e };
}
function Fn(s) {
  const { css: e, version: t } = wn(s);
  if (typeof document < "u") {
    const r = document.createElement("style");
    r.id = `uimodel-css-${++Rn}`, r.setAttribute("data-uimodel-css", ""), document.head.appendChild(r), fi(() => {
      r.textContent = e.value;
    }), ra(() => {
      r.remove();
    });
  }
  return { css: e, version: t };
}
function Tr(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? is(e) : s;
}
function is(s) {
  return new Proxy(s, {
    get(e, t) {
      var r, i, u;
      if (typeof t != "string") return e[t];
      if (t === "eGet")
        return (h) => {
          var c, d, E;
          if (typeof h == "string") {
            const o = (E = (d = (c = e.eClass) == null ? void 0 : c.call(e)) == null ? void 0 : d.getEStructuralFeature) == null ? void 0 : E.call(d, h);
            return o ? Tr(e.eGet(o)) : void 0;
          }
          return Tr(e.eGet(h));
        };
      if (t in e) return e[t];
      const n = t.charAt(0).toUpperCase() + t.slice(1);
      for (const h of [`get${n}`, `is${n}`])
        if (typeof e[h] == "function") return Tr(e[h]());
      const l = (u = (i = (r = e.eClass) == null ? void 0 : r.call(e)) == null ? void 0 : i.getEStructuralFeature) == null ? void 0 : u.call(i, t);
      if (l) return Tr(e.eGet(l));
    }
  });
}
function pr(s, e) {
  if (!s) return !0;
  try {
    switch (s.language) {
      case "OCL":
        return Pn(s.body, e);
      case "AQL":
        return bn(s.body, e);
      case "JS":
        return Mn(s.body, e);
      default:
        return console.warn(`[uimodel-composer] Unknown expression language: ${s.language}`), !0;
    }
  } catch (t) {
    return console.error(`[uimodel-composer] Expression evaluation failed (${s.language}):`, t), !0;
  }
}
function Pn(s, e) {
  try {
    const { EMFOclValidator: t } = globalThis.__emftsOcl__ ?? {};
    return t ? new t().evaluateExpression(s, is(e)) === !0 : (console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup."), !0);
  } catch {
    return !0;
  }
}
function bn(s, e) {
  return console.warn("[uimodel-composer] AQL evaluation not yet implemented."), !0;
}
function Mn(s, e) {
  return !!new Function("self", `"use strict"; return (${s});`)(is(e));
}
function Un(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? is(e) : s;
}
function na(s, e, t = {}) {
  if (s != null && s.body)
    try {
      switch (s.language) {
        case "JS": {
          const r = Object.keys(t);
          return new Function("self", ...r, `"use strict"; return (${s.body});`)(is(e), ...r.map((i) => Un(t[i])));
        }
        case "OCL": {
          const { EMFOclValidator: r } = globalThis.__emftsOcl__ ?? {};
          if (!r) {
            console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup.");
            return;
          }
          return new r().evaluateExpression(s.body, is(e));
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
function Vn(s) {
  return s.map((e, t) => ({ overlay: e, index: t })).sort((e, t) => gt(t.overlay.priority) - gt(e.overlay.priority) || e.index - t.index).flatMap(({ overlay: e }) => [...e.cases ?? []]);
}
function Ja(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "AllFeatures";
}
function Bn(s) {
  var e;
  const t = (e = s.eClass) == null ? void 0 : e.call(s);
  return t ? t.getName() === "WidgetComponent" || t.getEAllSuperTypes().some((r) => r.getName() === "WidgetComponent") : !1;
}
function Za(s) {
  return typeof s.isContainment == "function";
}
function Gn(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    Ja(i) ? e.push(i) : Bn(i) && i.feature && t.add(i.feature);
    for (const u of i.eClass().getEAllStructuralFeatures()) {
      if (!Za(u) || !u.isContainment()) continue;
      const n = i.eGet(u);
      if (!n) continue;
      const l = u.isMany() ? [...n] : [n];
      for (const h of l) r(h);
    }
  }
  return r(s), { blocks: e, boundFeatures: t };
}
function _r(s) {
  var e;
  return (((e = s.with) == null ? void 0 : e.length) ?? 0) > 0;
}
function Wn(s, e) {
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
    (u) => pr(e.filter, u)
  )), i;
}
function Yn(s, e) {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const u of e.blocks)
    t.set(u, []), r.set(u, new Set(Wn(s, u)));
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
      const h = gt(l.priority) - gt(n.priority), c = Number(_r(l)) - Number(_r(n)), d = i.get(n) - i.get(l);
      (h > 0 || h === 0 && (c > 0 || c === 0 && d > 0)) && (n = l);
    }
    n && t.get(n).push(u);
  }
  for (const [u, n] of t) {
    if (!_r(u)) continue;
    const l = new Map(u.with.map((h, c) => [h, c]));
    n.sort((h, c) => (l.get(h) ?? 0) - (l.get(c) ?? 0));
  }
  return t;
}
function ma(s, e) {
  for (const t of s ?? [])
    if (t.widget && (!t.when || na(
      t.when,
      e
    )))
      return t.widget;
}
function $n(s, e, t) {
  return ma(t?.overlayCases, e) ?? ma(s.cases, e) ?? s.template;
}
function br(s) {
  var e, t, r;
  const i = s.eClass(), u = (e = i.getEPackage()) == null ? void 0 : e.getEFactoryInstance();
  if (!u) throw new Error(`Keine Factory für ${i.getName()}`);
  const n = u.create(i);
  for (const l of i.getEAllStructuralFeatures()) {
    if ((t = l.isDerived) != null && t.call(l) || ((r = l.isChangeable) == null ? void 0 : r.call(l)) === !1) continue;
    const h = s.eGet(l);
    if (h == null) continue;
    const c = Za(l) && l.isContainment();
    if (l.isMany()) {
      const d = [...h];
      if (d.length === 0) continue;
      n.eSet(
        l,
        c ? d.map((E) => br(E)) : d
      );
    } else
      n.eSet(l, c ? br(h) : h);
  }
  return n;
}
const kn = /* @__PURE__ */ new Set(["AllFeatures", "Conditional", "ForEach"]);
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
    kn.has(xr(r)) || (xr(r) === "GroupWidget" ? ei(r, e) : !r.feature && !(r.bindings ?? []).some((i) => i.property === "feature") && (r.feature = e));
}
function xn(s, e) {
  const t = ua.eINSTANCE.createValidationExpression();
  return t.language = "JS", t.body = `self.${s} !== null && self.${s} !== undefined && String(self.${s}).length > 0`, t.defaultMessage = `${e ?? s} ist erforderlich.`, t.severity = "ERROR", t;
}
function Xn(s) {
  const e = s.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Hn(s, e, t) {
  var r, i, u, n;
  const l = t ?? {
    blocks: [e],
    boundFeatures: /* @__PURE__ */ new Set()
  };
  l.blocks.includes(e) || l.blocks.push(e);
  const h = Yn(s, l).get(e) ?? [], c = [];
  for (const d of h) {
    const E = $n(e, d, l);
    if (!E) {
      console.error(
        `[uimodel-composer] AllFeatures "${e.name ?? "?"}": kein TemplateCase trifft auf Feature "${d.getName() ?? "?"}" und kein Default-Fall (template) gesetzt.`
      );
      continue;
    }
    const o = br(E);
    ei(o, d);
    const g = d.getName() ?? "feature";
    o.name = g, o.label === void 0 && e.label !== void 0 && (o.label = e.label), o.placeholder === void 0 && e.placeholder !== void 0 && (o.placeholder = e.placeholder), o.readOnly === void 0 && e.readOnly !== void 0 && (o.readOnly = e.readOnly), o.required === void 0 && e.required !== void 0 && (o.required = e.required), (((r = o.styles) == null ? void 0 : r.length) ?? 0) === 0 && (((i = e.styles) == null ? void 0 : i.length) ?? 0) > 0 && (o.styles = [...e.styles]), o.label || (o.label = Xn(g)), !o.group && e.group && (o.group = e.group), o.required === void 0 && gt((u = d.getLowerBound) == null ? void 0 : u.call(d)) >= 1 && (o.required = !0, (((n = o.validations) == null ? void 0 : n.length) ?? 0) === 0 && (o.validations = [xn(g, o.label)]));
    const _ = e.bindings ?? [];
    if (_.length > 0) {
      const v = new Set((o.bindings ?? []).map((A) => A.property)), f = _.filter((A) => A.property && !v.has(A.property)).map((A) => br(A));
      f.length > 0 && (o.bindings = [...o.bindings ?? [], ...f]);
    }
    c.push(o);
  }
  return c;
}
const ti = Symbol("uimodel:allfeatures-context"), si = gr(0);
function jn() {
  si.value++;
}
function ls() {
  si.value;
}
function qn(s) {
  class e extends Ra {
    notifyChanged(l) {
      var h;
      try {
        super.notifyChanged(l);
      } catch {
      }
      if ((h = l.isTouch) != null && h.call(l)) return;
      jn();
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
    const l = (h) => {
      const c = h;
      if (c.eAdapterRemove)
        c.eAdapterRemove(t);
      else {
        const d = c.eAdapters(), E = d.indexOf(t);
        E >= 0 && d.splice(E, 1);
      }
    };
    l(n);
    for (const h of n.eAllContents()) l(h);
  }
  dr(
    () => Me(s),
    (n, l) => {
      l && u(l), n && i(n);
    },
    { immediate: !0 }
  ), ra(() => {
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
function zn(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "CssStyle";
}
function Kn(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    !i || t.has(i) || (t.add(i), r(i.extends), zn(i) && i.name && e.push(qa(i.name)));
  }
  for (const i of s ?? []) r(i);
  return e;
}
function Qn(s, e) {
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
function la(s, e = {}) {
  var t;
  const r = ["uim-component"];
  for (const i of ri((t = s.eClass) == null ? void 0 : t.call(s)))
    r.push(`uim-c-${i}`);
  r.push(...Kn(s.styles)), e.resolvedCss && r.push(...e.resolvedCss.split(/\s+/).filter(Boolean));
  for (const i of e.sheets ?? [])
    i.rules.forEach((u, n) => {
      u.condition && Qn(u, s) && e.model && pr(u.condition, e.model) && r.push(za(i, n));
    });
  return [...new Set(r)];
}
function oa(s) {
  var e, t, r;
  const i = {}, u = (r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  return u && (i["data-uim-eclass"] = u), s.name && (i["data-uim-name"] = s.name), s.group && (i["data-uim-group"] = s.group), i;
}
function Jn(s, e, t) {
  const r = [];
  return hr(t ?? s.required) && r.push("uim-s-required"), hr(e ?? s.readOnly) && r.push("uim-s-readonly"), r;
}
function ai(s, e = /* @__PURE__ */ new Set()) {
  if (!s) return {};
  if (e.has(s)) return {};
  e.add(s);
  const t = s.extends ? ai(s.extends, e) : {}, r = Zn(s);
  return ii(t, r);
}
function ca(s) {
  return s.reduce(
    (e, t) => ii(e, ai(t)),
    {}
  );
}
function Zn(s) {
  const e = {};
  s.css !== void 0 && (e.css = s.css), s.vueComponent !== void 0 && (e.vueComponent = s.vueComponent);
  const t = s;
  t.layout !== void 0 && (e.layout = t.layout), t.order !== void 0 && (e.order = t.order);
  const r = s;
  return r.widgetType !== void 0 && (e.widgetType = r.widgetType), r.label !== void 0 && (e.label = r.label), r.readOnly !== void 0 && (e.readOnly = r.readOnly), r.order !== void 0 && (e.order = r.order), e;
}
function ii(s, e) {
  return {
    ...s,
    ...Object.fromEntries(
      Object.entries(e).filter(([, t]) => t !== void 0)
    ),
    // Merge CSS classes (append, not replace)
    css: [s.css, e.css].filter(Boolean).join(" ") || void 0
  };
}
const Ea = /* @__PURE__ */ se({
  __name: "ComponentDispatcher",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = s, t = ja(), r = m(() => {
      var l, h, c, d;
      const E = ((d = (c = (h = (l = e.component).eClass) == null ? void 0 : h.call(l)) == null ? void 0 : c.getName) == null ? void 0 : d.call(c)) ?? "", o = t.getComposer(E);
      return o || console.warn(`[uimodel-composer] No composer registered for EClass "${E}"`), o ?? null;
    }), i = Et(Vr, void 0), u = m(() => (ls(), i?.version.value, la(e.component, {
      model: e.model,
      sheets: i?.sheets.value,
      resolvedCss: ca(e.component.styles ?? []).css
    }))), n = m(() => oa(e.component));
    return (l, h) => r.value ? (I(), q(aa(r.value), ia({
      key: 0,
      component: s.component,
      model: s.model,
      class: u.value
    }, n.value), null, 16, ["component", "model", "class"])) : Ce("", !0);
  }
});
function ha(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function el(s) {
  return ha(s) === "GroupWidget";
}
function tl(s) {
  return ha(s) === "Conditional";
}
function sl(s) {
  return ha(s) === "ForEach";
}
function rl(s) {
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
      for (const l of Hn(n, u, t))
        i.push({ kind: "widget", widget: l, model: e });
    } else if (tl(u)) {
      const n = pr(u.condition, e) ? u.then : u.else;
      i.push(...sa(n, e, t));
    } else if (sl(u)) {
      const n = rl(na(u.items, e));
      if (n.length === 0) {
        u.emptyText && i.push({ kind: "note", text: u.emptyText });
        continue;
      }
      for (const l of n)
        i.push(...sa(u.body, l, t));
    } else el(u) ? i.push({ kind: "group", widget: u, model: e }) : i.push({ kind: "widget", widget: u, model: e });
  return i;
}
function al(s, e) {
  return m(() => (ls(), pr(Me(s), Me(e))));
}
const il = /* @__PURE__ */ new Set([
  "readOnly",
  "required",
  "password",
  "asToggle",
  "multiSelect",
  "asButtonGroup",
  "withTime"
]), ul = /* @__PURE__ */ new Set([
  "maxLength",
  "rows",
  "min",
  "max",
  "step",
  "minSearchLength",
  "order"
]);
function nl(s, e) {
  if (e === null) return s === "feature" ? null : void 0;
  if (s === "feature") return e;
  if (il.has(s)) return !!e;
  if (ul.has(s)) {
    const t = Number(e);
    return Number.isFinite(t) ? t : void 0;
  }
  return String(e);
}
function ll(s, e) {
  var t;
  const r = { values: {}, featureSuppressed: !1 };
  for (const i of s.bindings ?? []) {
    const u = i.property;
    if (!u || !i.expression) continue;
    const n = na(i.expression, e, {
      feature: s.feature,
      eClass: (t = e.eClass) == null ? void 0 : t.call(e)
    });
    if (n === void 0) continue;
    if (u === "feature") {
      n === null ? r.featureSuppressed = !0 : r.feature = n;
      continue;
    }
    const l = nl(u, n);
    l !== void 0 && (r.values[u] = l);
  }
  return r;
}
function ol(s, e) {
  return m(() => {
    var t;
    ls();
    const r = Me(s), i = ca(r.styles), u = {
      ...r.label !== void 0 ? { label: r.label } : {},
      ...r.placeholder !== void 0 ? { placeholder: r.placeholder } : {},
      ...r.readOnly !== void 0 ? { readOnly: r.readOnly } : {},
      ...r.required !== void 0 ? { required: r.required } : {}
    }, n = e ? Me(e) : void 0;
    if (!n || (((t = r.bindings) == null ? void 0 : t.length) ?? 0) === 0)
      return { ...i, ...u };
    const l = ll(r, n);
    return {
      ...i,
      ...u,
      ...l.values,
      boundFeature: l.feature,
      featureSuppressed: l.featureSuppressed
    };
  });
}
var j = /* @__PURE__ */ ((s) => (s[s.DEFAULT = 0] = "DEFAULT", s[s.DATA_TYPE = 100] = "DATA_TYPE", s[s.ECLASS = 200] = "ECLASS", s[s.FEATURE = 300] = "FEATURE", s[s.PACKAGE = 400] = "PACKAGE", s[s.INSTANCE = 500] = "INSTANCE", s[s.OVERRIDE = 1e3] = "OVERRIDE", s))(j || {});
function z() {
  return { matches: !1, priority: 0 };
}
function Ie(s) {
  return { matches: !0, priority: s };
}
let cl = class {
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
      return z();
    if (t === this.eClass)
      return Ie(j.ECLASS + 50);
    if (t.getName() === this.eClass.getName()) {
      const r = t.getEPackage(), i = this.eClass.getEPackage();
      if (r && i && r.getNsURI() === i.getNsURI())
        return Ie(j.ECLASS + 50);
    }
    return this.isSuperTypeOf(this.eClass, t) ? Ie(j.ECLASS) : z();
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
}, El = class {
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
      return z();
    const u = (t = i.getEType) == null ? void 0 : t.call(i);
    return u && ((r = u.getName) == null ? void 0 : r.call(u)) === this.dataTypeName ? Ie(j.DATA_TYPE) : z();
  }
  /**
   * Check if the feature is an EAttribute.
   */
  isEAttribute(e) {
    var t, r;
    return !e || typeof e != "object" ? !1 : "getEAttributeType" in e || "eClass" in e && typeof e.eClass == "function" && ((r = (t = e.eClass()) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "EAttribute";
  }
}, hl = class {
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
    return z();
  }
  /**
   * Match against a specific enum.
   */
  matchEnum(e) {
    var t;
    return this.enumName ? ((t = e.getName) == null ? void 0 : t.call(e)) === this.enumName ? Ie(j.DATA_TYPE + 50) : z() : Ie(j.DATA_TYPE);
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
}, gl = class {
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
      return z();
    const h = l;
    let c = j.DATA_TYPE;
    if (this.containment !== void 0) {
      if ((((t = h.isContainment) == null ? void 0 : t.call(h)) ?? !1) !== this.containment)
        return z();
      c += 25;
    }
    if (this.targetClass) {
      const d = (r = h.getEReferenceType) == null ? void 0 : r.call(h);
      if (!d)
        return z();
      const E = (i = d.getName) == null ? void 0 : i.call(d), o = (n = (u = this.targetClass).getName) == null ? void 0 : n.call(u);
      if (E !== o && !this.isSuperTypeOf(this.targetClass, d))
        return z();
      c += 25;
    }
    return Ie(c);
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
class dl {
  constructor(e, t) {
    this.eClass = e, this.featureName = t;
  }
  /**
   * Match the context against this specific feature.
   */
  match(e) {
    var t, r, i, u, n, l, h, c, d, E;
    const o = e.feature || e.attribute || e.reference;
    if (!o || ((t = o.getName) == null ? void 0 : t.call(o)) !== this.featureName)
      return z();
    const g = (r = o.getEContainingClass) == null ? void 0 : r.call(o);
    if (!g)
      return z();
    if (g === this.eClass)
      return Ie(j.FEATURE);
    const _ = (i = g.getName) == null ? void 0 : i.call(g), v = (n = (u = this.eClass).getName) == null ? void 0 : n.call(u);
    if (_ === v) {
      const f = (l = g.getEPackage) == null ? void 0 : l.call(g), A = (c = (h = this.eClass).getEPackage) == null ? void 0 : c.call(h);
      if (f && A && ((d = f.getNsURI) == null ? void 0 : d.call(f)) === ((E = A.getNsURI) == null ? void 0 : E.call(A)))
        return Ie(j.FEATURE);
    }
    return this.isInheritedFrom(g, this.eClass) ? Ie(j.FEATURE - 10) : z();
  }
  /**
   * Check if subClass inherits from superClass.
   */
  isInheritedFrom(e, t) {
    var r, i, u, n, l, h, c;
    const d = (r = e.getEAllSuperTypes) == null ? void 0 : r.call(e);
    if (!d) return !1;
    for (const E of d) {
      if (E === t) return !0;
      if (((i = E.getName) == null ? void 0 : i.call(E)) === ((u = t.getName) == null ? void 0 : u.call(t))) {
        const o = (n = E.getEPackage) == null ? void 0 : n.call(E), g = (l = t.getEPackage) == null ? void 0 : l.call(t);
        if (o && g && ((h = o.getNsURI) == null ? void 0 : h.call(o)) === ((c = g.getNsURI) == null ? void 0 : c.call(g)))
          return !0;
      }
    }
    return !1;
  }
}
var pl = Object.defineProperty, Tl = (s, e, t) => e in s ? pl(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ia = (s, e, t) => Tl(s, typeof e != "symbol" ? e + "" : e, t);
let Sl = 0;
function fl() {
  return `descriptor-${++Sl}`;
}
let ml = class {
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
      { priority: j.INSTANCE }
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
      { priority: j.ECLASS, ...r }
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
      { priority: j.DATA_TYPE, ...r }
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
      { priority: j.DATA_TYPE, ...r }
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
      { priority: j.DATA_TYPE, ...t }
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
      { priority: j.FEATURE, ...i }
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
    const i = fl();
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
        const r = new cl(e.eClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "datatype": {
        const r = new El(e.dataTypeName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "enum": {
        const r = new hl(e.enumName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "reference": {
        const r = new gl(e.containment, e.targetClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "feature": {
        const r = new dl(e.eClass, e.featureName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "instance":
        return (r) => r.eObject === e.eObject ? Ie(t ?? j.INSTANCE) : z();
      case "custom":
        return e.matcher;
      default:
        return () => z();
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
const us = new ml();
var Il = Object.defineProperty, Nl = (s, e, t) => e in s ? Il(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Na = (s, e, t) => Nl(s, typeof e != "symbol" ? e + "" : e, t);
let Ll = class {
  constructor() {
    Na(this, "lazyRegistrations", []), Na(this, "resolvedPackages", /* @__PURE__ */ new Map());
  }
  /**
   * Register a decorated component immediately.
   */
  register(e, t, r) {
    us.register(e, t, r);
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
      r ? us.register(t.component, r, t.options) : e.push(t);
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
new Ll();
const ui = Symbol("componentRegistry");
function _l() {
  const s = Et(ui) ?? us;
  function e(E) {
    return s.getComponent(E);
  }
  function t(E, o) {
    return s.getComponentForFeature(E, o);
  }
  function r(E, o) {
    return s.getComponentForEClass(E, o);
  }
  function i(E, o, g) {
    return s.register(E, o, g);
  }
  function u(E, o) {
    return s.registerForInstance(E, o);
  }
  function n(E, o, g) {
    return s.registerForEClass(E, o, g);
  }
  function l(E, o, g) {
    return s.registerForDataType(E, o, g);
  }
  function h(E, o, g) {
    return s.registerForEnum(E, o, g);
  }
  function c(E, o) {
    return s.registerForReference(E, o);
  }
  function d(E, o, g, _) {
    return s.registerForFeature(E, o, g, _);
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
    registerForFeature: d
  };
}
const vl = { class: "uimodel-fallback-widget" }, Ol = { class: "uimodel-fallback-widget__label" }, Al = {
  key: 0,
  "aria-hidden": "true"
}, Cl = ["rows", "value", "placeholder", "readonly", "disabled"], yl = /* @__PURE__ */ se({
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
        var o, g;
        return t.value.label ?? ((g = (o = e.feature) == null ? void 0 : o.getName) == null ? void 0 : g.call(o)) ?? "";
      }
    ), i = m(() => t.value.placeholder ?? ""), u = m(() => h(t.value.readOnly)), n = m(() => h(t.value.required)), l = m(() => {
      var o, g;
      const _ = (g = (o = e.custom) == null ? void 0 : o.rawWidget) == null ? void 0 : g.rows, v = Number(_);
      return Number.isFinite(v) && v > 0 ? v : 3;
    });
    function h(o) {
      return o === !0 || o === "true";
    }
    const c = m(() => {
      var o;
      const g = (o = e.eObject) == null ? void 0 : o.eGet(e.feature);
      return g == null ? "" : String(g);
    }), d = gr(c.value);
    dr(c, (o) => {
      d.value = o;
    });
    function E(o) {
      var g;
      const _ = o.target.value;
      d.value = _, (g = e.eObject) == null || g.eSet(e.feature, _);
    }
    return (o, g) => (I(), b("div", vl, [
      Q("label", Ol, [
        Da(ct(r.value), 1),
        n.value ? (I(), b("span", Al, " *")) : Ce("", !0)
      ]),
      Q("textarea", {
        class: "uimodel-fallback-widget__input",
        rows: l.value,
        value: d.value,
        placeholder: i.value,
        readonly: u.value,
        disabled: u.value,
        onInput: E
      }, null, 40, Cl)
    ]));
  }
}), Dl = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, Rl = /* @__PURE__ */ Dl(yl, [["__scopeId", "data-v-0237261a"]]), ni = /* @__PURE__ */ se({
  __name: "WidgetComposer",
  props: {
    widget: {},
    model: {}
  },
  setup(s) {
    const e = s, t = /* @__PURE__ */ new Set(), { getComponentForFeature: r } = _l(), i = al(
      () => e.widget.visibilityCondition,
      () => e.model
    ), u = ol(
      () => e.widget,
      () => e.model
    ), n = m(
      () => u.value.boundFeature ?? e.widget.feature
    ), l = m(() => {
      var o, g, _, v, f, A, J, K;
      if (!n.value) return null;
      const re = r(n.value, e.model);
      if (re) return re;
      const y = ((v = (_ = (g = (o = e.widget).eClass) == null ? void 0 : g.call(o)) == null ? void 0 : _.getName) == null ? void 0 : v.call(_)) ?? "WidgetComponent", P = ((K = (J = (A = (f = n.value).getEType) == null ? void 0 : A.call(f)) == null ? void 0 : J.getName) == null ? void 0 : K.call(J)) ?? "?", W = `${y}/${P}`;
      return t.has(W) || (t.add(W), console.warn(
        `[uimodel-composer] Kein Renderer für Widget "${y}" auf Datentyp "${P}" registriert — Fallback als Plaintext-Editor. Host: Renderer über die @emfts/vue-registry registrieren.`
      )), Rl;
    }), h = m(() => {
      var o, g;
      return {
        eObject: e.model,
        feature: n.value,
        eClass: (g = (o = e.model).eClass) == null ? void 0 : g.call(o),
        custom: {
          resolvedStyle: u.value,
          rawWidget: e.widget
        }
      };
    }), c = Et(Vr, void 0), d = m(() => (ls(), c?.version.value, [
      ...la(e.widget, {
        model: e.model,
        sheets: c?.sheets.value,
        resolvedCss: u.value.css
      }),
      ...Jn(
        e.widget,
        u.value.readOnly,
        u.value.required
      )
    ])), E = m(() => oa(e.widget));
    return (o, g) => de(i) && l.value && !de(u).featureSuppressed ? (I(), q(aa(l.value), ia({ key: 0 }, { ...h.value, ...E.value }, { class: d.value }), null, 16, ["class"])) : Ce("", !0);
  }
}), wl = {
  key: 0,
  class: "uimodel-foreach-empty"
}, Fl = /* @__PURE__ */ se({
  __name: "FieldsRenderer",
  props: {
    fields: {},
    model: {}
  },
  setup(s) {
    const e = s, t = Et(ti, void 0), r = Et(Vr, void 0), i = m(() => (ls(), r?.version.value, sa(e.fields, e.model, t?.value)));
    function u(h, c) {
      const d = String(
        h.layout ?? "VERTICAL"
      ).toLowerCase();
      return [
        ...la(h, {
          model: c,
          sheets: r?.sheets.value,
          resolvedCss: ca(h.styles ?? []).css
        }),
        "uimodel-group",
        `uimodel-group--${d}`
      ];
    }
    function n(h) {
      return h.fields ?? [];
    }
    const l = oa;
    return (h, c) => {
      const d = mi("FieldsRenderer", !0);
      return I(!0), b(ht, null, ns(i.value, (E, o) => (I(), b(ht, { key: o }, [
        E.kind === "note" ? (I(), b("p", wl, ct(E.text), 1)) : E.kind === "group" ? (I(), b("div", ia({
          key: 1,
          class: u(E.widget, E.model)
        }, { ref_for: !0 }, de(l)(E.widget)), [
          Er(d, {
            fields: n(E.widget),
            model: E.model
          }, null, 8, ["fields", "model"])
        ], 16)) : (I(), q(ni, {
          key: 2,
          widget: E.widget,
          model: E.model
        }, null, 8, ["widget", "model"]))
      ], 64))), 128);
    };
  }
}), Pl = { class: "uimodel-form-view" }, li = /* @__PURE__ */ se({
  __name: "FormViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (I(), b("div", Pl, [
      Er(Fl, {
        fields: s.component.fields,
        model: s.model
      }, null, 8, ["fields", "model"])
    ]));
  }
}), bl = { class: "uimodel-section-view" }, Ml = /* @__PURE__ */ se({
  __name: "SectionViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (I(), b("div", bl, [
      (I(!0), b(ht, null, ns(s.component.sections, (r) => (I(), q(li, {
        key: r.name,
        component: r,
        model: s.model
      }, null, 8, ["component", "model"]))), 128))
    ]));
  }
}), Ul = { class: "uimodel-tab-view" }, Vl = ["data-tab"], Bl = /* @__PURE__ */ se({
  __name: "TabViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (I(), b("div", Ul, [
      (I(!0), b(ht, null, ns(s.component.tabs, (r) => (I(), b("div", {
        key: r.name,
        class: "uimodel-tab-panel",
        "data-tab": r.name
      }, [
        Er(Ea, {
          component: r,
          model: s.model
        }, null, 8, ["component", "model"])
      ], 8, Vl))), 128))
    ]));
  }
}), Gl = { class: "uimodel-summary-view" }, Wl = /* @__PURE__ */ se({
  __name: "SummaryViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (I(), b("div", Gl, [
      (I(!0), b(ht, null, ns(s.component.summaryFields, (r) => (I(), q(ni, {
        key: r.name,
        widget: r,
        model: s.model
      }, null, 8, ["widget", "model"]))), 128))
    ]));
  }
}), Yl = {
  key: 1,
  class: "uimodel-table-view-placeholder"
}, oi = /* @__PURE__ */ se({
  __name: "TableViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = ja(), t = m(() => e.getComposer("TableViewRenderer"));
    return (r, i) => t.value ? (I(), q(aa(t.value), {
      key: 0,
      component: s.component,
      model: s.model
    }, null, 8, ["component", "model"])) : (I(), b("div", Yl));
  }
}), $l = { class: "uimodel-master-detail" }, kl = { class: "uimodel-master" }, xl = { class: "uimodel-detail" }, Xl = /* @__PURE__ */ se({
  __name: "MasterDetailComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (I(), b("div", $l, [
      Q("div", kl, [
        Er(oi, {
          component: s.component.master,
          model: s.model
        }, null, 8, ["component", "model"])
      ]),
      Q("div", xl, [
        Er(Ea, {
          component: s.component.detail,
          model: s.model
        }, null, 8, ["component", "model"])
      ])
    ]));
  }
}), ci = /* @__PURE__ */ se({
  __name: "UIModelComposer",
  props: {
    uiModel: {},
    model: {},
    composerRegistry: {},
    styleSheets: {},
    overlays: {}
  },
  setup(s) {
    const e = s, t = m(() => e.styleSheets ?? []), { version: r } = Fn(t);
    Sr(Vr, { sheets: t, version: r }), qn(() => e.model), Sr(
      ti,
      m(() => (ls(), {
        ...Gn(e.uiModel),
        overlayCases: Vn(e.overlays ?? [])
      }))
    );
    const i = e.composerRegistry ?? In({
      FormView: li,
      SectionView: Ml,
      TabView: Bl,
      SummaryView: Wl,
      TableView: oi,
      MasterDetail: Xl
    });
    Sr(Ha, i);
    function u() {
      return pr(e.uiModel.filterExpression, e.model);
    }
    return (n, l) => u() ? (I(!0), b(ht, { key: 0 }, ns(s.uiModel.components, (h) => (I(), q(Ea, {
      key: h.name,
      component: h,
      model: s.model
    }, null, 8, ["component", "model"]))), 128)) : Ce("", !0);
  }
});
function La(s) {
  const e = s;
  return !!e && typeof e.eIsProxy == "function" && e.eIsProxy();
}
function _a(s, e) {
  const t = e.getResourceSet(), r = s.eProxyURI();
  if (!r) return s;
  const i = r.toString(), u = i.indexOf("#");
  if (u > 0) {
    const l = i.substring(0, u), h = i.substring(u + 1);
    if (!t) return s;
    const c = e.getURI(), d = [];
    c && !l.includes("://") && d.push(Xr.createURI(l).resolve(c).toString()), d.push(l);
    for (const E of d) {
      const o = t.getResource(Xr.createURI(E), !1), g = o?.getEObject(h);
      if (g) return g;
    }
    return s;
  }
  const n = u === 0 ? i.substring(1) : i;
  return e.getEObject(n) ?? s;
}
function va(s, e) {
  for (const t of s.eClass().getEAllReferences()) {
    const r = s.eGet(t);
    if (r) {
      if (t.isMany()) {
        const i = r;
        for (let u = 0; u < i.length; u++) {
          const n = i[u];
          if (La(n)) {
            const l = _a(n, e);
            l !== n && (i[u] = l);
          }
        }
      } else if (La(r)) {
        const i = _a(r, e);
        i !== r && s.eSet(t, i);
      }
    }
  }
}
function Hl(s) {
  for (const e of s.getContents()) {
    va(e, s);
    for (const t of e.eAllContents())
      va(t, s);
  }
}
const jl = "VariableWrapper";
function Ei(s) {
  return typeof s?.eClass == "function";
}
function hi(s, e) {
  if (!e || typeof e != "object") return s;
  const t = e, r = s;
  for (const i of s.eClass().getEStructuralFeatures()) {
    const u = i.getName?.();
    if (!(!u || !(u in t)))
      try {
        r[u] = t[u];
      } catch {
      }
  }
  return s;
}
function gi(s) {
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
    if (i === jl)
      try {
        e[r] = new Di();
      } catch {
      }
  }
  return s;
}
function di(s, e) {
  return gi(Ei(s) ? s : hi(e(), s));
}
const ql = /color|colour/i, zl = /size|width|height|radius|blur|padding|transparence|transparency|opacity|zoom|count|index/i, Kl = /^(is|has|show|enable|fullscreen|visible)/i;
function Mr(s) {
  const e = s.getName?.() ?? "", t = s.getEType?.()?.getName?.() ?? "";
  return t === "EBoolean" || Kl.test(e) ? "flag" : ql.test(e) ? "colour" : t === "EInt" || t === "EDouble" || zl.test(e) ? "number" : "text";
}
function Br(s) {
  const t = (s.getName?.() ?? "").replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function ga(s, e = s.getName?.() ?? "Settings") {
  const t = ua.eINSTANCE, r = t.createFormView();
  r.name = e;
  for (const u of s.getEStructuralFeatures()) {
    const n = Ql(t, u);
    n.feature = u, n.label = Br(u), r.fields.push(n);
  }
  const i = t.createUIModel();
  return i.name = e, i.targetClasses.push(s), i.components.push(r), i;
}
function Ql(s, e) {
  switch (Mr(e)) {
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
const Jl = { class: "list" }, Zl = { class: "list__head" }, eo = { class: "list__label" }, to = { class: "list__count" }, so = {
  key: 0,
  class: "list__untyped"
}, ro = {
  key: 1,
  class: "list__empty"
}, ao = ["aria-expanded", "onClick"], io = { class: "entry__twist" }, uo = { class: "entry__title" }, no = {
  key: 0,
  class: "entry__actions"
}, lo = ["disabled", "onClick"], oo = ["disabled", "onClick"], co = ["onClick"], Eo = {
  key: 1,
  class: "entry__body"
}, ho = /* @__PURE__ */ se({
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
      const g = e.feature?.getName?.();
      if (!(!g || !e.eObject))
        return e.eObject[g];
    }
    const u = m(() => {
      const g = i();
      return g ? typeof g.toArray == "function" ? g.toArray() : Array.isArray(g) ? g : [] : [];
    }), n = m(() => {
      try {
        return e.feature?.getEReferenceType?.() ?? void 0;
      } catch {
        return;
      }
    }), l = m(() => {
      const g = n.value;
      return g ? ga(g, g.getName?.() ?? "Eintrag") : void 0;
    }), h = gr(0);
    function c(g, _) {
      const v = g, f = v.label?.value ?? v.name?.value ?? v.title?.value;
      return f ? String(f) : `${n.value?.getName?.() ?? "Eintrag"} ${_ + 1}`;
    }
    function d() {
      const g = n.value, _ = e.feature?.getName?.();
      if (!g || !_ || !e.eObject) return;
      const f = g.getEPackage?.()?.getEFactoryInstance?.()?.create(g);
      if (!f) return;
      gi(f);
      const A = i();
      if (A) {
        if (typeof A.add == "function") A.add(f);
        else if (Array.isArray(A)) A.push(f);
        else return;
        h.value = u.value.length - 1;
      }
    }
    function E(g) {
      const _ = i();
      if (_) {
        if (typeof _.removeAt == "function") _.removeAt(g);
        else if (Array.isArray(_)) _.splice(g, 1);
        else return;
        h.value = Math.min(h.value, Math.max(u.value.length - 1, 0));
      }
    }
    function o(g, _) {
      const v = i();
      if (!v) return;
      const f = g + _;
      if (!(f < 0 || f >= u.value.length)) {
        if (typeof v.move == "function") v.move(f, g);
        else if (Array.isArray(v)) {
          const [A] = v.splice(g, 1);
          v.splice(f, 0, A);
        } else return;
        h.value = f;
      }
    }
    return (g, _) => (I(), b("section", Jl, [
      Q("header", Zl, [
        Q("span", eo, ct(t.value), 1),
        Q("span", to, ct(u.value.length), 1),
        _[1] || (_[1] = Q("span", { class: "list__spacer" }, null, -1)),
        n.value && !r.value ? (I(), q(de(Ri), {
          key: 0,
          size: "sm",
          onClick: d
        }, {
          default: Ii(() => [..._[0] || (_[0] = [
            Da("Hinzufügen", -1)
          ])]),
          _: 1
        })) : Ce("", !0)
      ]),
      n.value ? u.value.length ? Ce("", !0) : (I(), b("p", ro, "Noch nichts angelegt.")) : (I(), b("p", so, " Diese Liste ist im Modell ohne Typ angegeben - es steht dort nur, dass es mehrere sind, nicht wovon. Solange das so ist, lässt sich hier nichts zeigen. ")),
      (I(!0), b(ht, null, ns(u.value, (v, f) => (I(), b("div", {
        key: f,
        class: "entry"
      }, [
        Q("button", {
          type: "button",
          class: "entry__head",
          "aria-expanded": h.value === f,
          onClick: (A) => h.value = h.value === f ? -1 : f
        }, [
          Q("span", io, ct(h.value === f ? "▾" : "▸"), 1),
          Q("span", uo, ct(c(v, f)), 1)
        ], 8, ao),
        r.value ? Ce("", !0) : (I(), b("span", no, [
          Q("button", {
            type: "button",
            title: "Nach oben",
            disabled: f === 0,
            onClick: (A) => o(f, -1)
          }, "↑", 8, lo),
          Q("button", {
            type: "button",
            title: "Nach unten",
            disabled: f === u.value.length - 1,
            onClick: (A) => o(f, 1)
          }, " ↓ ", 8, oo),
          Q("button", {
            type: "button",
            title: "Entfernen",
            class: "entry__remove",
            onClick: (A) => E(f)
          }, "✕", 8, co)
        ])),
        h.value === f ? (I(), b("div", Eo, [
          l.value ? (I(), q(de(ci), {
            key: 0,
            "ui-model": l.value,
            model: v
          }, null, 8, ["ui-model", "model"])) : Ce("", !0)
        ])) : Ce("", !0)
      ]))), 128))
    ]));
  }
}), da = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, pi = /* @__PURE__ */ da(ho, [["__scopeId", "data-v-87b9cfb7"]]), go = { class: "field-row__control" }, po = ["title", "aria-pressed"], To = /* @__PURE__ */ se({
  __name: "VariableWrapperWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = Et(Pi), r = m(() => {
      const { eObject: y, feature: P } = e;
      if (!y || !P) return;
      const W = P.getName?.();
      return W ? y[W] : void 0;
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
    }), h = m({
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
    function d() {
      u.value ? c() : n.value = !n.value;
    }
    const E = m(() => !e.custom?.resolvedStyle?.readOnly && !u.value), o = m({
      get: () => r.value?.value ?? "",
      set: (y) => {
        r.value && E.value && (r.value.value = y);
      }
    }), g = m({
      get: () => {
        const y = Number(r.value?.value);
        return Number.isFinite(y) ? y : 0;
      },
      set: (y) => {
        r.value && E.value && (r.value.value = String(y));
      }
    }), _ = m({
      get: () => r.value?.value === !0 || r.value?.value === "true",
      set: (y) => {
        r.value && E.value && (r.value.value = y);
      }
    }), v = m(() => e.custom?.rawWidget?.eClass?.()?.getName?.() ?? ""), f = m(() => {
      const y = e.custom?.rawWidget?.values;
      return y && typeof y.map == "function" ? [...y] : [];
    }), A = m(() => ({
      min: e.custom?.rawWidget?.min,
      max: e.custom?.rawWidget?.max,
      step: e.custom?.rawWidget?.step
    })), J = m(() => {
      switch (v.value) {
        case "CheckboxWidget":
          return "flag";
        case "NumberWidget":
          return "number";
        case "SelectWidget":
        case "ComboboxWidget":
          return "choice";
        case "InputWidget":
          return e.feature && Mr(e.feature) === "colour" ? "colour" : "text";
        default:
          return e.feature ? Mr(e.feature) : "text";
      }
    }), K = m(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? Br(e.feature) : "")
    ), re = m(() => n.value && l.value.length === 0);
    return (y, P) => r.value ? (I(), b("div", {
      key: 0,
      class: pa(["field-row", { "field-row--bound": u.value }])
    }, [
      Q("div", go, [
        n.value && !re.value ? (I(), q(de(Sa), {
          key: 0,
          modelValue: h.value,
          "onUpdate:modelValue": P[0] || (P[0] = (W) => h.value = W),
          label: K.value,
          options: l.value,
          disabled: s.custom?.resolvedStyle?.readOnly,
          placeholder: "Keine Variable",
          clearable: ""
        }, null, 8, ["modelValue", "label", "options", "disabled"])) : re.value ? (I(), q(de(Wr), {
          key: 1,
          "model-value": "",
          label: K.value,
          disabled: "",
          hint: "Es sind noch keine Variablen angelegt."
        }, null, 8, ["label"])) : J.value === "flag" ? (I(), q(de(wi), {
          key: 2,
          modelValue: _.value,
          "onUpdate:modelValue": P[1] || (P[1] = (W) => _.value = W),
          label: K.value,
          disabled: !E.value
        }, null, 8, ["modelValue", "label", "disabled"])) : J.value === "choice" ? (I(), q(de(Sa), {
          key: 3,
          modelValue: o.value,
          "onUpdate:modelValue": P[2] || (P[2] = (W) => o.value = W),
          label: K.value,
          options: f.value,
          disabled: !E.value,
          clearable: ""
        }, null, 8, ["modelValue", "label", "options", "disabled"])) : J.value === "colour" ? (I(), q(de(Fi), {
          key: 4,
          modelValue: o.value,
          "onUpdate:modelValue": P[3] || (P[3] = (W) => o.value = W),
          label: K.value,
          disabled: !E.value
        }, null, 8, ["modelValue", "label", "disabled"])) : J.value === "number" ? (I(), q(de(Wr), {
          key: 5,
          modelValue: g.value,
          "onUpdate:modelValue": P[4] || (P[4] = (W) => g.value = W),
          label: K.value,
          type: "number",
          min: A.value.min,
          max: A.value.max,
          step: A.value.step,
          disabled: !E.value
        }, null, 8, ["modelValue", "label", "min", "max", "step", "disabled"])) : (I(), q(de(Wr), {
          key: 6,
          modelValue: o.value,
          "onUpdate:modelValue": P[5] || (P[5] = (W) => o.value = W),
          label: K.value,
          placeholder: s.custom?.resolvedStyle?.placeholder,
          disabled: !E.value
        }, null, 8, ["modelValue", "label", "placeholder", "disabled"]))
      ]),
      Q("button", {
        type: "button",
        class: pa(["bind", { on: u.value, armed: n.value && !u.value }]),
        title: u.value ? `Bindung an „${i.value}“ lösen` : "An eine Variable binden",
        "aria-pressed": u.value,
        onClick: d
      }, " {x} ", 10, po)
    ], 2)) : Ce("", !0);
  }
}), Ti = /* @__PURE__ */ da(To, [["__scopeId", "data-v-01463c81"]]), So = "org.eclipse.daanse.board.app.ui.vue.composables";
let Oa = !1;
function fo() {
  if (Oa) return !0;
  const s = vr.INSTANCE.getEPackage(So)?.getEClassifier(
    "VariableWrapper"
  );
  return s ? (us.registerForReference(Ti, { targetClass: s }), Oa = !0, !0) : !1;
}
function mo(s) {
  for (const e of s.getEStructuralFeatures())
    Io(e) && us.registerForFeature(
      s,
      e.getName?.() ?? "",
      pi
    );
}
function Io(s) {
  try {
    return s.isMany?.() === !0 || (s.getUpperBound?.() ?? 1) !== 1;
  } catch {
    return !1;
  }
}
const Aa = /* @__PURE__ */ new Map();
let Ca = !1;
function No() {
  if (Ca) return;
  yi();
  const s = C.eINSTANCE;
  s.setEFactoryInstance(ua.eINSTANCE), vr.INSTANCE.set(s.getNsURI(), s), Ca = !0;
}
function Si(s, e, t = "/ui.xmi") {
  const r = Aa.get(t);
  if (r) return r;
  try {
    No();
    const i = e.getNsURI();
    i && !vr.INSTANCE.has(i) && vr.INSTANCE.set(i, e);
    const u = new Ai();
    u.getResourceFactoryRegistry().getExtensionToFactoryMap().set("xmi", new Ci());
    const n = u.createResource(Xr.createURI(t));
    if (n.loadFromString(s), n.getContents().size() === 0) return;
    Hl(n);
    const l = n.getContents().get(0);
    return Aa.set(t, l), l;
  } catch (i) {
    console.warn("[ui.vue.uimodel] UI-Modell konnte nicht gelesen werden:", i);
    return;
  }
}
const Lo = { class: "settings-form" }, _o = {
  key: 1,
  class: "settings-form__empty"
}, vo = /* @__PURE__ */ se({
  __name: "SettingsForm",
  props: /* @__PURE__ */ Ni({
    create: { type: Function },
    uiModel: {},
    uiModelXmi: {},
    domainPackage: {},
    uiModelUri: {},
    emptyText: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    C.eINSTANCE, Sr(ui, us), fo();
    const e = Li(s, "modelValue"), t = s;
    function r() {
      const c = di(e.value, t.create);
      c !== e.value && (e.value = c);
    }
    _i(r), dr(e, r);
    const i = m(() => e.value), u = Ta(), n = Ta(), l = m(() => {
      const c = e.value?.eClass?.();
      if (c && mo(c), t.uiModel) return Gr(t.uiModel);
      if (t.uiModelXmi && t.domainPackage) {
        const o = Si(t.uiModelXmi, t.domainPackage, t.uiModelUri);
        if (o) return Gr(o);
      }
      const E = i.value?.eClass?.();
      if (E)
        return n.value !== E && (n.value = E, u.value = Gr(ga(E))), u.value;
    }), h = m(() => (i.value?.eClass?.().getEStructuralFeatures().length ?? 0) > 0);
    return (c, d) => (I(), b("div", Lo, [
      l.value && i.value && h.value ? (I(), q(de(ci), {
        key: 0,
        "ui-model": l.value,
        model: i.value
      }, null, 8, ["ui-model", "model"])) : (I(), b("p", _o, ct(s.emptyText ?? "Für dieses Widget sind keine Einstellungen modelliert."), 1))
    ]));
  }
}), Oo = /* @__PURE__ */ da(vo, [["__scopeId", "data-v-b1ca79c7"]]), Ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SettingsForm: Oo,
  SettingsListWidget: pi,
  VariableWrapperWidget: Ti,
  adopt: hi,
  asModel: di,
  formFor: ga,
  isModelled: Ei,
  kindOf: Mr,
  labelOf: Br,
  loadUIModel: Si
}, Symbol.toStringTag, { value: "Module" })), ya = "org.eclipse.daanse.board.app.ui.vue.uimodel", Co = "0.0.1-next.1";
async function Go(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${ya}: tsm runtime is not initialized`);
  e.register(ya, Ao, Co, "ui.vue.uimodel"), await void 0;
}
async function Wo(s) {
  await void 0;
}
export {
  Oo as SettingsForm,
  pi as SettingsListWidget,
  Ti as VariableWrapperWidget,
  Go as activate,
  hi as adopt,
  di as asModel,
  Wo as deactivate,
  ga as formFor,
  Ei as isModelled,
  Mr as kindOf,
  Br as labelOf,
  Si as loadUIModel
};
