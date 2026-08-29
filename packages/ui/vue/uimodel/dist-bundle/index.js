(function(){var i="ui.vue.uimodel",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".list[data-v-87b9cfb7]{margin-bottom:12px}.list__head[data-v-87b9cfb7]{display:flex;align-items:center;gap:7px;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid var(--color-divider)}.list__label[data-v-87b9cfb7]{font-family:var(--font-sans);font-size:var(--text-sm);font-weight:600;color:var(--color-fg)}.list__count[data-v-87b9cfb7]{font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.list__spacer[data-v-87b9cfb7]{flex:1 1 auto}.list__empty[data-v-87b9cfb7],.list__untyped[data-v-87b9cfb7]{margin:0 0 8px;font-size:var(--text-xs);line-height:1.5;color:var(--color-dim)}.entry[data-v-87b9cfb7]{position:relative;margin-bottom:3px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.entry__head[data-v-87b9cfb7]{display:flex;align-items:center;gap:6px;width:100%;padding:5px 78px 5px 8px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);text-align:left;background:none;border:0;cursor:pointer}.entry__twist[data-v-87b9cfb7]{width:10px;font-size:var(--text-xs);color:var(--color-dim)}.entry__actions[data-v-87b9cfb7]{position:absolute;top:3px;right:5px;display:flex;gap:2px}.entry__actions button[data-v-87b9cfb7]{width:20px;height:20px;font-size:var(--text-xs);color:var(--color-dim);background:none;border:1px solid transparent;border-radius:var(--radius-xs);cursor:pointer}.entry__actions button[data-v-87b9cfb7]:hover:not(:disabled){color:var(--color-fg);border-color:var(--color-divider)}.entry__actions button[data-v-87b9cfb7]:disabled{opacity:.3;cursor:default}.entry__remove[data-v-87b9cfb7]:hover:not(:disabled){color:var(--color-err)}.entry__actions button[data-v-87b9cfb7]:focus-visible,.entry__head[data-v-87b9cfb7]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.entry__body[data-v-87b9cfb7]{padding:8px 10px 10px;border-top:1px solid var(--color-divider)}.field-row[data-v-01463c81]{display:flex;align-items:flex-start;gap:6px}.field-row__control[data-v-01463c81]{flex:1 1 auto;min-width:0}.field-row--bound[data-v-01463c81]{border-left:2px solid var(--color-brand);padding-left:6px;margin-left:-8px}.bind[data-v-01463c81]{width:24px;height:26px;flex:none;margin-top:0;font-family:var(--font-mono);font-size:var(--text-xs);font-style:italic;color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.bind[data-v-01463c81]:hover{color:var(--color-fg);border-color:var(--color-outline)}.bind.armed[data-v-01463c81]{color:var(--color-accent);border-color:var(--color-accent)}.bind.on[data-v-01463c81]{color:var(--color-brand);border-color:var(--color-brand);background-color:color-mix(in srgb,var(--color-brand) 14%,transparent)}.bind[data-v-01463c81]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.settings-form[data-v-6b299ad4]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.settings-form[data-v-6b299ad4] .uim-c-GroupWidget{padding-top:10px;margin-top:12px;border-top:1px solid var(--color-divider)}.settings-form[data-v-6b299ad4] .uim-c-GroupWidget:first-child{padding-top:0;margin-top:0;border-top:0}.settings-form[data-v-6b299ad4] .uim-group-label{display:block;margin-bottom:7px;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:650;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim)}.settings-form__empty[data-v-6b299ad4]{margin:0;padding:12px 0;font-size:var(--text-sm);color:var(--color-dim)}\n";})();
import { inject as et, watchEffect as Ni, onScopeDispose as ra, ref as gr, computed as S, watch as dr, toValue as Me, defineComponent as ee, createBlock as j, createCommentVNode as fe, openBlock as m, resolveDynamicComponent as aa, mergeProps as ia, createElementBlock as b, createElementVNode as Q, createTextVNode as ya, toDisplayString as qe, unref as de, createVNode as Er, Fragment as ht, renderList as ls, provide as fr, withCtx as Li, normalizeClass as da, mergeModels as vi, useModel as _i, onMounted as Oi, shallowRef as pa, markRaw as Gr } from "vue";
import { BasicEPackage as Ai, BasicEClass as R, BasicEAttribute as p, BasicEReference as f, getEcorePackage as Qt, BasicEObject as tt, BasicEFactory as Ci, EContentAdapter as Da, URI as Xr, EPackageRegistry as Or, BasicResourceSet as yi, XMIResourceFactory as Di, registerEcorePackage as Ri } from "@emfts/core";
import { VariableWrapper as wi } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DButton as Fi, DSelect as Ta, DInput as Wr, DCheckbox as Pi, DColorInput as bi } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { identifier as Mi } from "org.eclipse.daanse.board.app.lib.api.variable";
var Ui = Object.defineProperty, Vi = (s, e, t) => e in s ? Ui(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ir = (s, e, t) => Vi(s, typeof e != "symbol" ? e + "" : e, t);
const Jt = class a extends Ai {
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
    const r = new f();
    r.setContainment(!1), r.setName("targetClasses"), r.setLowerBound(0), r.setUpperBound(-1), e.getEStructuralFeatures().push(r), a.Literals.U_I_MODEL__TARGET_CLASSES = r;
    const i = new p();
    i.setName("priority"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), a.Literals.U_I_MODEL__PRIORITY = i;
    const u = new f();
    u.setContainment(!0), u.setName("filterExpression"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), a.Literals.U_I_MODEL__FILTER_EXPRESSION = u;
    const n = new f();
    n.setContainment(!0), n.setName("styles"), n.setLowerBound(0), n.setUpperBound(-1), e.getEStructuralFeatures().push(n), a.Literals.U_I_MODEL__STYLES = n;
    const l = new f();
    l.setContainment(!0), l.setName("templates"), l.setLowerBound(0), l.setUpperBound(-1), e.getEStructuralFeatures().push(l), a.Literals.U_I_MODEL__TEMPLATES = l;
    const E = new f();
    E.setContainment(!0), E.setName("components"), E.setLowerBound(1), E.setUpperBound(-1), e.getEStructuralFeatures().push(E), a.Literals.U_I_MODEL__COMPONENTS = E;
    const c = new R();
    c.setName("Component"), c.setAbstract(!0), c.setInterface(!1), this.getEClassifiers().push(c), c.setEPackage(this), a.Literals.COMPONENT = c;
    const g = new p();
    g.setName("name"), g.setLowerBound(1), g.setUpperBound(1), c.getEStructuralFeatures().push(g), a.Literals.COMPONENT__NAME = g;
    const d = new p();
    d.setName("group"), d.setLowerBound(0), d.setUpperBound(1), c.getEStructuralFeatures().push(d), a.Literals.COMPONENT__GROUP = d;
    const o = new f();
    o.setContainment(!1), o.setName("targetClasses"), o.setLowerBound(0), o.setUpperBound(-1), c.getEStructuralFeatures().push(o), a.Literals.COMPONENT__TARGET_CLASSES = o;
    const h = new f();
    h.setContainment(!1), h.setName("styles"), h.setLowerBound(0), h.setUpperBound(-1), c.getEStructuralFeatures().push(h), a.Literals.COMPONENT__STYLES = h;
    const v = new f();
    v.setContainment(!1), v.setName("children"), v.setLowerBound(0), v.setUpperBound(-1), c.getEStructuralFeatures().push(v), a.Literals.COMPONENT__CHILDREN = v;
    const _ = new R();
    _.setName("FormView"), _.setAbstract(!1), _.setInterface(!1), this.getEClassifiers().push(_), _.setEPackage(this), a.Literals.FORM_VIEW = _;
    const I = new f();
    I.setContainment(!0), I.setName("fields"), I.setLowerBound(0), I.setUpperBound(-1), _.getEStructuralFeatures().push(I), a.Literals.FORM_VIEW__FIELDS = I;
    const A = new f();
    A.setContainment(!0), A.setName("validations"), A.setLowerBound(0), A.setUpperBound(-1), _.getEStructuralFeatures().push(A), a.Literals.FORM_VIEW__VALIDATIONS = A;
    const J = new f();
    J.setContainment(!0), J.setName("validationMappers"), J.setLowerBound(0), J.setUpperBound(-1), _.getEStructuralFeatures().push(J), a.Literals.FORM_VIEW__VALIDATION_MAPPERS = J;
    const K = new p();
    K.setName("mapperOrder"), K.setLowerBound(0), K.setUpperBound(1), _.getEStructuralFeatures().push(K), a.Literals.FORM_VIEW__MAPPER_ORDER = K;
    const re = new R();
    re.setName("TableView"), re.setAbstract(!1), re.setInterface(!1), this.getEClassifiers().push(re), re.setEPackage(this), a.Literals.TABLE_VIEW = re;
    const y = new f();
    y.setContainment(!0), y.setName("tableStyle"), y.setLowerBound(1), y.setUpperBound(1), re.getEStructuralFeatures().push(y), a.Literals.TABLE_VIEW__TABLE_STYLE = y;
    const P = new R();
    P.setName("SectionView"), P.setAbstract(!1), P.setInterface(!1), this.getEClassifiers().push(P), P.setEPackage(this), a.Literals.SECTION_VIEW = P;
    const W = new f();
    W.setContainment(!0), W.setName("sections"), W.setLowerBound(1), W.setUpperBound(-1), P.getEStructuralFeatures().push(W), a.Literals.SECTION_VIEW__SECTIONS = W;
    const st = new R();
    st.setName("TabView"), st.setAbstract(!1), st.setInterface(!1), this.getEClassifiers().push(st), st.setEPackage(this), a.Literals.TAB_VIEW = st;
    const Tt = new f();
    Tt.setContainment(!0), Tt.setName("tabs"), Tt.setLowerBound(1), Tt.setUpperBound(-1), st.getEStructuralFeatures().push(Tt), a.Literals.TAB_VIEW__TABS = Tt;
    const rt = new R();
    rt.setName("SummaryView"), rt.setAbstract(!1), rt.setInterface(!1), this.getEClassifiers().push(rt), rt.setEPackage(this), a.Literals.SUMMARY_VIEW = rt;
    const St = new f();
    St.setContainment(!0), St.setName("summaryFields"), St.setLowerBound(1), St.setUpperBound(-1), rt.getEStructuralFeatures().push(St), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS = St;
    const Ue = new R();
    Ue.setName("MasterDetail"), Ue.setAbstract(!1), Ue.setInterface(!1), this.getEClassifiers().push(Ue), Ue.setEPackage(this), a.Literals.MASTER_DETAIL = Ue;
    const ft = new f();
    ft.setContainment(!0), ft.setName("master"), ft.setLowerBound(1), ft.setUpperBound(1), Ue.getEStructuralFeatures().push(ft), a.Literals.MASTER_DETAIL__MASTER = ft;
    const mt = new f();
    mt.setContainment(!0), mt.setName("detail"), mt.setLowerBound(1), mt.setUpperBound(1), Ue.getEStructuralFeatures().push(mt), a.Literals.MASTER_DETAIL__DETAIL = mt;
    const Z = new R();
    Z.setName("WidgetComponent"), Z.setAbstract(!0), Z.setInterface(!1), this.getEClassifiers().push(Z), Z.setEPackage(this), a.Literals.WIDGET_COMPONENT = Z;
    const It = new f();
    It.setContainment(!1), It.setName("feature"), It.setLowerBound(0), It.setUpperBound(1), Z.getEStructuralFeatures().push(It), a.Literals.WIDGET_COMPONENT__FEATURE = It;
    const os = new p();
    os.setName("label"), os.setLowerBound(0), os.setUpperBound(1), Z.getEStructuralFeatures().push(os), a.Literals.WIDGET_COMPONENT__LABEL = os;
    const cs = new p();
    cs.setName("placeholder"), cs.setLowerBound(0), cs.setUpperBound(1), Z.getEStructuralFeatures().push(cs), a.Literals.WIDGET_COMPONENT__PLACEHOLDER = cs;
    const Es = new p();
    Es.setName("readOnly"), Es.setLowerBound(0), Es.setUpperBound(1), Z.getEStructuralFeatures().push(Es), a.Literals.WIDGET_COMPONENT__READ_ONLY = Es;
    const hs = new p();
    hs.setName("required"), hs.setLowerBound(0), hs.setUpperBound(1), Z.getEStructuralFeatures().push(hs), a.Literals.WIDGET_COMPONENT__REQUIRED = hs;
    const Nt = new f();
    Nt.setContainment(!0), Nt.setName("visibilityCondition"), Nt.setLowerBound(0), Nt.setUpperBound(1), Z.getEStructuralFeatures().push(Nt), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION = Nt;
    const Lt = new f();
    Lt.setContainment(!0), Lt.setName("validations"), Lt.setLowerBound(0), Lt.setUpperBound(-1), Z.getEStructuralFeatures().push(Lt), a.Literals.WIDGET_COMPONENT__VALIDATIONS = Lt;
    const vt = new f();
    vt.setContainment(!0), vt.setName("validationMappers"), vt.setLowerBound(0), vt.setUpperBound(-1), Z.getEStructuralFeatures().push(vt), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS = vt;
    const _t = new f();
    _t.setContainment(!0), _t.setName("bindings"), _t.setLowerBound(0), _t.setUpperBound(-1), Z.getEStructuralFeatures().push(_t), a.Literals.WIDGET_COMPONENT__BINDINGS = _t;
    const Ve = new R();
    Ve.setName("PropertyBinding"), Ve.setAbstract(!1), Ve.setInterface(!1), this.getEClassifiers().push(Ve), Ve.setEPackage(this), a.Literals.PROPERTY_BINDING = Ve;
    const gs = new p();
    gs.setName("property"), gs.setLowerBound(1), gs.setUpperBound(1), Ve.getEStructuralFeatures().push(gs), a.Literals.PROPERTY_BINDING__PROPERTY = gs;
    const Ot = new f();
    Ot.setContainment(!0), Ot.setName("expression"), Ot.setLowerBound(1), Ot.setUpperBound(1), Ve.getEStructuralFeatures().push(Ot), a.Literals.PROPERTY_BINDING__EXPRESSION = Ot;
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
    const Le = new R();
    Le.setName("NumberWidget"), Le.setAbstract(!1), Le.setInterface(!1), this.getEClassifiers().push(Le), Le.setEPackage(this), a.Literals.NUMBER_WIDGET = Le;
    const Is = new p();
    Is.setName("min"), Is.setLowerBound(0), Is.setUpperBound(1), Le.getEStructuralFeatures().push(Is), a.Literals.NUMBER_WIDGET__MIN = Is;
    const Ns = new p();
    Ns.setName("max"), Ns.setLowerBound(0), Ns.setUpperBound(1), Le.getEStructuralFeatures().push(Ns), a.Literals.NUMBER_WIDGET__MAX = Ns;
    const Ls = new p();
    Ls.setName("step"), Ls.setLowerBound(0), Ls.setUpperBound(1), Le.getEStructuralFeatures().push(Ls), a.Literals.NUMBER_WIDGET__STEP = Ls;
    const vs = new p();
    vs.setName("value"), vs.setLowerBound(0), vs.setUpperBound(1), Le.getEStructuralFeatures().push(vs), a.Literals.NUMBER_WIDGET__VALUE = vs;
    const Be = new R();
    Be.setName("CheckboxWidget"), Be.setAbstract(!1), Be.setInterface(!1), this.getEClassifiers().push(Be), Be.setEPackage(this), a.Literals.CHECKBOX_WIDGET = Be;
    const _s = new p();
    _s.setName("asToggle"), _s.setLowerBound(0), _s.setUpperBound(1), Be.getEStructuralFeatures().push(_s), a.Literals.CHECKBOX_WIDGET__AS_TOGGLE = _s;
    const Os = new p();
    Os.setName("value"), Os.setLowerBound(0), Os.setUpperBound(1), Be.getEStructuralFeatures().push(Os), a.Literals.CHECKBOX_WIDGET__VALUE = Os;
    const ve = new R();
    ve.setName("DateWidget"), ve.setAbstract(!1), ve.setInterface(!1), this.getEClassifiers().push(ve), ve.setEPackage(this), a.Literals.DATE_WIDGET = ve;
    const As = new p();
    As.setName("withTime"), As.setLowerBound(0), As.setUpperBound(1), ve.getEStructuralFeatures().push(As), a.Literals.DATE_WIDGET__WITH_TIME = As;
    const Cs = new p();
    Cs.setName("format"), Cs.setLowerBound(0), Cs.setUpperBound(1), ve.getEStructuralFeatures().push(Cs), a.Literals.DATE_WIDGET__FORMAT = Cs;
    const At = new f();
    At.setContainment(!1), At.setName("constrains"), At.setLowerBound(0), At.setUpperBound(1), ve.getEStructuralFeatures().push(At), a.Literals.DATE_WIDGET__CONSTRAINS = At;
    const ys = new p();
    ys.setName("value"), ys.setLowerBound(0), ys.setUpperBound(1), ve.getEStructuralFeatures().push(ys), a.Literals.DATE_WIDGET__VALUE = ys;
    const Fe = new R();
    Fe.setName("ComboboxWidget"), Fe.setAbstract(!1), Fe.setInterface(!1), this.getEClassifiers().push(Fe), Fe.setEPackage(this), a.Literals.COMBOBOX_WIDGET = Fe;
    const Ct = new f();
    Ct.setContainment(!0), Ct.setName("optionLabel"), Ct.setLowerBound(0), Ct.setUpperBound(1), Fe.getEStructuralFeatures().push(Ct), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL = Ct;
    const Ds = new p();
    Ds.setName("minSearchLength"), Ds.setLowerBound(0), Ds.setUpperBound(1), Fe.getEStructuralFeatures().push(Ds), a.Literals.COMBOBOX_WIDGET__MIN_SEARCH_LENGTH = Ds;
    const Rs = new p();
    Rs.setName("multiSelect"), Rs.setLowerBound(0), Rs.setUpperBound(1), Fe.getEStructuralFeatures().push(Rs), a.Literals.COMBOBOX_WIDGET__MULTI_SELECT = Rs;
    const _e = new R();
    _e.setName("SelectWidget"), _e.setAbstract(!1), _e.setInterface(!1), this.getEClassifiers().push(_e), _e.setEPackage(this), a.Literals.SELECT_WIDGET = _e;
    const yt = new f();
    yt.setContainment(!0), yt.setName("optionLabel"), yt.setLowerBound(0), yt.setUpperBound(1), _e.getEStructuralFeatures().push(yt), a.Literals.SELECT_WIDGET__OPTION_LABEL = yt;
    const ws = new p();
    ws.setName("multiSelect"), ws.setLowerBound(0), ws.setUpperBound(1), _e.getEStructuralFeatures().push(ws), a.Literals.SELECT_WIDGET__MULTI_SELECT = ws;
    const Fs = new p();
    Fs.setName("asButtonGroup"), Fs.setLowerBound(0), Fs.setUpperBound(1), _e.getEStructuralFeatures().push(Fs), a.Literals.SELECT_WIDGET__AS_BUTTON_GROUP = Fs;
    const Ps = new p();
    Ps.setName("values"), Ps.setLowerBound(0), Ps.setUpperBound(-1), _e.getEStructuralFeatures().push(Ps), a.Literals.SELECT_WIDGET__VALUES = Ps;
    const pe = new R();
    pe.setName("AllFeatures"), pe.setAbstract(!1), pe.setInterface(!1), this.getEClassifiers().push(pe), pe.setEPackage(this), a.Literals.ALL_FEATURES = pe;
    const Dt = new f();
    Dt.setContainment(!1), Dt.setName("with"), Dt.setLowerBound(0), Dt.setUpperBound(-1), pe.getEStructuralFeatures().push(Dt), a.Literals.ALL_FEATURES__WITH = Dt;
    const Rt = new f();
    Rt.setContainment(!1), Rt.setName("eType"), Rt.setLowerBound(0), Rt.setUpperBound(-1), pe.getEStructuralFeatures().push(Rt), a.Literals.ALL_FEATURES__E_TYPE = Rt;
    const wt = new f();
    wt.setContainment(!0), wt.setName("filter"), wt.setLowerBound(0), wt.setUpperBound(1), pe.getEStructuralFeatures().push(wt), a.Literals.ALL_FEATURES__FILTER = wt;
    const Ft = new f();
    Ft.setContainment(!1), Ft.setName("template"), Ft.setLowerBound(0), Ft.setUpperBound(1), pe.getEStructuralFeatures().push(Ft), a.Literals.ALL_FEATURES__TEMPLATE = Ft;
    const Pt = new f();
    Pt.setContainment(!0), Pt.setName("cases"), Pt.setLowerBound(0), Pt.setUpperBound(-1), pe.getEStructuralFeatures().push(Pt), a.Literals.ALL_FEATURES__CASES = Pt;
    const bs = new p();
    bs.setName("priority"), bs.setLowerBound(0), bs.setUpperBound(1), pe.getEStructuralFeatures().push(bs), a.Literals.ALL_FEATURES__PRIORITY = bs;
    const Ge = new R();
    Ge.setName("TemplateCase"), Ge.setAbstract(!1), Ge.setInterface(!1), this.getEClassifiers().push(Ge), Ge.setEPackage(this), a.Literals.TEMPLATE_CASE = Ge;
    const bt = new f();
    bt.setContainment(!0), bt.setName("when"), bt.setLowerBound(0), bt.setUpperBound(1), Ge.getEStructuralFeatures().push(bt), a.Literals.TEMPLATE_CASE__WHEN = bt;
    const Mt = new f();
    Mt.setContainment(!1), Mt.setName("widget"), Mt.setLowerBound(1), Mt.setUpperBound(1), Ge.getEStructuralFeatures().push(Mt), a.Literals.TEMPLATE_CASE__WIDGET = Mt;
    const We = new R();
    We.setName("GroupWidget"), We.setAbstract(!1), We.setInterface(!1), this.getEClassifiers().push(We), We.setEPackage(this), a.Literals.GROUP_WIDGET = We;
    const Ut = new f();
    Ut.setContainment(!0), Ut.setName("fields"), Ut.setLowerBound(0), Ut.setUpperBound(-1), We.getEStructuralFeatures().push(Ut), a.Literals.GROUP_WIDGET__FIELDS = Ut;
    const Ms = new p();
    Ms.setName("layout"), Ms.setLowerBound(0), Ms.setUpperBound(1), We.getEStructuralFeatures().push(Ms), a.Literals.GROUP_WIDGET__LAYOUT = Ms;
    const Pe = new R();
    Pe.setName("Conditional"), Pe.setAbstract(!1), Pe.setInterface(!1), this.getEClassifiers().push(Pe), Pe.setEPackage(this), a.Literals.CONDITIONAL = Pe;
    const Vt = new f();
    Vt.setContainment(!0), Vt.setName("condition"), Vt.setLowerBound(1), Vt.setUpperBound(1), Pe.getEStructuralFeatures().push(Vt), a.Literals.CONDITIONAL__CONDITION = Vt;
    const Bt = new f();
    Bt.setContainment(!0), Bt.setName("then"), Bt.setLowerBound(0), Bt.setUpperBound(-1), Pe.getEStructuralFeatures().push(Bt), a.Literals.CONDITIONAL__THEN = Bt;
    const Gt = new f();
    Gt.setContainment(!0), Gt.setName("else"), Gt.setLowerBound(0), Gt.setUpperBound(-1), Pe.getEStructuralFeatures().push(Gt), a.Literals.CONDITIONAL__ELSE = Gt;
    const be = new R();
    be.setName("ForEach"), be.setAbstract(!1), be.setInterface(!1), this.getEClassifiers().push(be), be.setEPackage(this), a.Literals.FOR_EACH = be;
    const Wt = new f();
    Wt.setContainment(!0), Wt.setName("items"), Wt.setLowerBound(1), Wt.setUpperBound(1), be.getEStructuralFeatures().push(Wt), a.Literals.FOR_EACH__ITEMS = Wt;
    const Yt = new f();
    Yt.setContainment(!0), Yt.setName("body"), Yt.setLowerBound(0), Yt.setUpperBound(-1), be.getEStructuralFeatures().push(Yt), a.Literals.FOR_EACH__BODY = Yt;
    const Us = new p();
    Us.setName("emptyText"), Us.setLowerBound(0), Us.setUpperBound(1), be.getEStructuralFeatures().push(Us), a.Literals.FOR_EACH__EMPTY_TEXT = Us;
    const Ye = new R();
    Ye.setName("ReferenceLinkWidget"), Ye.setAbstract(!1), Ye.setInterface(!1), this.getEClassifiers().push(Ye), Ye.setEPackage(this), a.Literals.REFERENCE_LINK_WIDGET = Ye;
    const $t = new f();
    $t.setContainment(!0), $t.setName("displayExpression"), $t.setLowerBound(0), $t.setUpperBound(1), Ye.getEStructuralFeatures().push($t), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION = $t;
    const Vs = new p();
    Vs.setName("targetRoute"), Vs.setLowerBound(0), Vs.setUpperBound(1), Ye.getEStructuralFeatures().push(Vs), a.Literals.REFERENCE_LINK_WIDGET__TARGET_ROUTE = Vs;
    const Oe = new R();
    Oe.setName("UIModelOverlay"), Oe.setAbstract(!1), Oe.setInterface(!1), this.getEClassifiers().push(Oe), Oe.setEPackage(this), a.Literals.U_I_MODEL_OVERLAY = Oe;
    const Bs = new p();
    Bs.setName("name"), Bs.setLowerBound(0), Bs.setUpperBound(1), Oe.getEStructuralFeatures().push(Bs), a.Literals.U_I_MODEL_OVERLAY__NAME = Bs;
    const Gs = new p();
    Gs.setName("priority"), Gs.setLowerBound(0), Gs.setUpperBound(1), Oe.getEStructuralFeatures().push(Gs), a.Literals.U_I_MODEL_OVERLAY__PRIORITY = Gs;
    const kt = new f();
    kt.setContainment(!0), kt.setName("templates"), kt.setLowerBound(0), kt.setUpperBound(-1), Oe.getEStructuralFeatures().push(kt), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES = kt;
    const xt = new f();
    xt.setContainment(!0), xt.setName("cases"), xt.setLowerBound(0), xt.setUpperBound(-1), Oe.getEStructuralFeatures().push(xt), a.Literals.U_I_MODEL_OVERLAY__CASES = xt;
    const $e = new R();
    $e.setName("Style"), $e.setAbstract(!0), $e.setInterface(!0), this.getEClassifiers().push($e), $e.setEPackage(this), a.Literals.STYLE = $e;
    const Ws = new p();
    Ws.setName("name"), Ws.setLowerBound(0), Ws.setUpperBound(1), $e.getEStructuralFeatures().push(Ws), a.Literals.STYLE__NAME = Ws;
    const Ys = new p();
    Ys.setName("group"), Ys.setLowerBound(0), Ys.setUpperBound(1), $e.getEStructuralFeatures().push(Ys), a.Literals.STYLE__GROUP = Ys;
    const Ae = new R();
    Ae.setName("BaseStyle"), Ae.setAbstract(!0), Ae.setInterface(!1), this.getEClassifiers().push(Ae), Ae.setEPackage(this), a.Literals.BASE_STYLE = Ae;
    const Xt = new f();
    Xt.setContainment(!1), Xt.setName("extends"), Xt.setLowerBound(0), Xt.setUpperBound(1), Ae.getEStructuralFeatures().push(Xt), a.Literals.BASE_STYLE__EXTENDS = Xt;
    const $s = new p();
    $s.setName("css"), $s.setLowerBound(0), $s.setUpperBound(1), Ae.getEStructuralFeatures().push($s), a.Literals.BASE_STYLE__CSS = $s;
    const ks = new p();
    ks.setName("vueComponent"), ks.setLowerBound(0), ks.setUpperBound(1), Ae.getEStructuralFeatures().push(ks), a.Literals.BASE_STYLE__VUE_COMPONENT = ks;
    const Ht = new f();
    Ht.setContainment(!0), Ht.setName("visibilityCondition"), Ht.setLowerBound(0), Ht.setUpperBound(1), Ae.getEStructuralFeatures().push(Ht), a.Literals.BASE_STYLE__VISIBILITY_CONDITION = Ht;
    const ke = new R();
    ke.setName("LayoutStyle"), ke.setAbstract(!1), ke.setInterface(!1), this.getEClassifiers().push(ke), ke.setEPackage(this), a.Literals.LAYOUT_STYLE = ke;
    const xs = new p();
    xs.setName("layout"), xs.setLowerBound(0), xs.setUpperBound(1), ke.getEStructuralFeatures().push(xs), a.Literals.LAYOUT_STYLE__LAYOUT = xs;
    const Xs = new p();
    Xs.setName("order"), Xs.setLowerBound(0), Xs.setUpperBound(1), ke.getEStructuralFeatures().push(Xs), a.Literals.LAYOUT_STYLE__ORDER = Xs;
    const Ie = new R();
    Ie.setName("WidgetStyle"), Ie.setAbstract(!1), Ie.setInterface(!1), this.getEClassifiers().push(Ie), Ie.setEPackage(this), a.Literals.WIDGET_STYLE = Ie;
    const jt = new f();
    jt.setContainment(!1), jt.setName("feature"), jt.setLowerBound(0), jt.setUpperBound(1), Ie.getEStructuralFeatures().push(jt), a.Literals.WIDGET_STYLE__FEATURE = jt;
    const Hs = new p();
    Hs.setName("widgetType"), Hs.setLowerBound(0), Hs.setUpperBound(1), Ie.getEStructuralFeatures().push(Hs), a.Literals.WIDGET_STYLE__WIDGET_TYPE = Hs;
    const js = new p();
    js.setName("label"), js.setLowerBound(0), js.setUpperBound(1), Ie.getEStructuralFeatures().push(js), a.Literals.WIDGET_STYLE__LABEL = js;
    const qs = new p();
    qs.setName("readOnly"), qs.setLowerBound(0), qs.setUpperBound(1), Ie.getEStructuralFeatures().push(qs), a.Literals.WIDGET_STYLE__READ_ONLY = qs;
    const zs = new p();
    zs.setName("order"), zs.setLowerBound(0), zs.setUpperBound(1), Ie.getEStructuralFeatures().push(zs), a.Literals.WIDGET_STYLE__ORDER = zs;
    const at = new R();
    at.setName("TableStyle"), at.setAbstract(!1), at.setInterface(!1), this.getEClassifiers().push(at), at.setEPackage(this), a.Literals.TABLE_STYLE = at;
    const qt = new f();
    qt.setContainment(!0), qt.setName("columns"), qt.setLowerBound(1), qt.setUpperBound(-1), at.getEStructuralFeatures().push(qt), a.Literals.TABLE_STYLE__COLUMNS = qt;
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
    const zt = new f();
    zt.setContainment(!0), zt.setName("matchExpression"), zt.setLowerBound(0), zt.setUpperBound(1), ae.getEStructuralFeatures().push(zt), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION = zt;
    const rr = new p();
    rr.setName("mappedText"), rr.setLowerBound(0), rr.setUpperBound(1), ae.getEStructuralFeatures().push(rr), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT = rr;
    const Kt = new f();
    Kt.setContainment(!0), Kt.setName("mappedTextExpression"), Kt.setLowerBound(0), Kt.setUpperBound(1), ae.getEStructuralFeatures().push(Kt), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION = Kt;
    const ar = new p();
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
let C = Jt;
var Bi = Object.defineProperty, Gi = (s, e, t) => e in s ? Bi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, te = (s, e, t) => Gi(s, typeof e != "symbol" ? e + "" : e, t);
const He = class N extends tt {
  constructor() {
    super(...arguments), te(this, "_name"), te(this, "_targetClasses", []), te(this, "_priority", 0), te(this, "_filterExpression"), te(this, "_styles", []), te(this, "_templates", []), te(this, "_components", []);
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
te(He, "NAME", 0), te(He, "TARGET_CLASSES", 1), te(He, "PRIORITY", 2), te(He, "FILTER_EXPRESSION", 3), te(He, "STYLES", 4), te(He, "TEMPLATES", 5), te(He, "COMPONENTS", 6);
let Wi = He;
const Yr = {
  FIELD_THEN_FORM: "FIELD_THEN_FORM"
};
var Yi = Object.defineProperty, $i = (s, e, t) => e in s ? Yi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ye = (s, e, t) => $i(s, typeof e != "symbol" ? e + "" : e, t);
const Zt = class w extends tt {
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
ye(Zt, "NAME", 0), ye(Zt, "GROUP", 1), ye(Zt, "TARGET_CLASSES", 2), ye(Zt, "STYLES", 3), ye(Zt, "CHILDREN", 4);
let dt = Zt;
var ki = Object.defineProperty, xi = (s, e, t) => e in s ? ki(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ze = (s, e, t) => xi(s, typeof e != "symbol" ? e + "" : e, t);
const ur = class M extends dt {
  constructor() {
    super(...arguments), ze(this, "_fields", []), ze(this, "_validations", []), ze(this, "_validationMappers", []), ze(this, "_mapperOrder", Yr.FIELD_THEN_FORM);
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
ze(ur, "FIELDS", 5), ze(ur, "VALIDATIONS", 6), ze(ur, "VALIDATION_MAPPERS", 7), ze(ur, "MAPPER_ORDER", 8);
let Xi = ur;
var Hi = Object.defineProperty, ji = (s, e, t) => e in s ? Hi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ra = (s, e, t) => ji(s, typeof e != "symbol" ? e + "" : e, t);
const wa = class it extends dt {
  constructor() {
    super(...arguments), Ra(this, "_tableStyle");
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
Ra(wa, "TABLE_STYLE", 5);
let qi = wa;
var zi = Object.defineProperty, Ki = (s, e, t) => e in s ? zi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Fa = (s, e, t) => Ki(s, typeof e != "symbol" ? e + "" : e, t);
const Pa = class ut extends dt {
  constructor() {
    super(...arguments), Fa(this, "_sections", []);
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
Fa(Pa, "SECTIONS", 5);
let Qi = Pa;
var Ji = Object.defineProperty, Zi = (s, e, t) => e in s ? Ji(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ba = (s, e, t) => Zi(s, typeof e != "symbol" ? e + "" : e, t);
const Ma = class nt extends dt {
  constructor() {
    super(...arguments), ba(this, "_tabs", []);
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
ba(Ma, "TABS", 5);
let eu = Ma;
var tu = Object.defineProperty, su = (s, e, t) => e in s ? tu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ua = (s, e, t) => su(s, typeof e != "symbol" ? e + "" : e, t);
const Va = class lt extends dt {
  constructor() {
    super(...arguments), Ua(this, "_summaryFields", []);
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
Ua(Va, "SUMMARY_FIELDS", 5);
let ru = Va;
var au = Object.defineProperty, iu = (s, e, t) => e in s ? au(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ar = (s, e, t) => iu(s, typeof e != "symbol" ? e + "" : e, t);
const Hr = class ie extends dt {
  constructor() {
    super(...arguments), Ar(this, "_master"), Ar(this, "_detail");
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
Ar(Hr, "MASTER", 5), Ar(Hr, "DETAIL", 6);
let uu = Hr;
var nu = Object.defineProperty, lu = (s, e, t) => e in s ? nu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Cr = (s, e, t) => lu(s, typeof e != "symbol" ? e + "" : e, t);
const jr = class ue extends tt {
  constructor() {
    super(...arguments), Cr(this, "_property", ""), Cr(this, "_expression");
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
Cr(jr, "PROPERTY", 0), Cr(jr, "EXPRESSION", 1);
let ou = jr;
var cu = Object.defineProperty, Eu = (s, e, t) => e in s ? cu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, H = (s, e, t) => Eu(s, typeof e != "symbol" ? e + "" : e, t);
const Ce = class T extends dt {
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
H(Ce, "FEATURE", 5), H(Ce, "LABEL", 6), H(Ce, "PLACEHOLDER", 7), H(Ce, "READ_ONLY", 8), H(Ce, "REQUIRED", 9), H(Ce, "VISIBILITY_CONDITION", 10), H(Ce, "VALIDATIONS", 11), H(Ce, "VALIDATION_MAPPERS", 12), H(Ce, "BINDINGS", 13);
let me = Ce;
var hu = Object.defineProperty, gu = (s, e, t) => e in s ? hu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ts = (s, e, t) => gu(s, typeof e != "symbol" ? e + "" : e, t);
const mr = class Y extends me {
  constructor() {
    super(...arguments), ts(this, "_maxLength"), ts(this, "_value"), ts(this, "_password");
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
ts(mr, "MAX_LENGTH", 14), ts(mr, "VALUE", 15), ts(mr, "PASSWORD", 16);
let du = mr;
var pu = Object.defineProperty, Tu = (s, e, t) => e in s ? pu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ss = (s, e, t) => Tu(s, typeof e != "symbol" ? e + "" : e, t);
const Ir = class $ extends me {
  constructor() {
    super(...arguments), ss(this, "_rows", 4), ss(this, "_maxLength"), ss(this, "_value");
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
ss(Ir, "ROWS", 14), ss(Ir, "MAX_LENGTH", 15), ss(Ir, "VALUE", 16);
let Su = Ir;
var fu = Object.defineProperty, mu = (s, e, t) => e in s ? fu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ke = (s, e, t) => mu(s, typeof e != "symbol" ? e + "" : e, t);
const nr = class U extends me {
  constructor() {
    super(...arguments), Ke(this, "_min"), Ke(this, "_max"), Ke(this, "_step", 1), Ke(this, "_value");
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
Ke(nr, "MIN", 14), Ke(nr, "MAX", 15), Ke(nr, "STEP", 16), Ke(nr, "VALUE", 17);
let Iu = nr;
var Nu = Object.defineProperty, Lu = (s, e, t) => e in s ? Nu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, yr = (s, e, t) => Lu(s, typeof e != "symbol" ? e + "" : e, t);
const qr = class ne extends me {
  constructor() {
    super(...arguments), yr(this, "_asToggle"), yr(this, "_value");
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
yr(qr, "AS_TOGGLE", 14), yr(qr, "VALUE", 15);
let vu = qr;
var _u = Object.defineProperty, Ou = (s, e, t) => e in s ? _u(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Qe = (s, e, t) => Ou(s, typeof e != "symbol" ? e + "" : e, t);
const lr = class V extends me {
  constructor() {
    super(...arguments), Qe(this, "_withTime"), Qe(this, "_format", "DD.MM.YYYY"), Qe(this, "_constrains"), Qe(this, "_value");
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
Qe(lr, "WITH_TIME", 14), Qe(lr, "FORMAT", 15), Qe(lr, "CONSTRAINS", 16), Qe(lr, "VALUE", 17);
let Au = lr;
var Cu = Object.defineProperty, yu = (s, e, t) => e in s ? Cu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, rs = (s, e, t) => yu(s, typeof e != "symbol" ? e + "" : e, t);
const Nr = class k extends me {
  constructor() {
    super(...arguments), rs(this, "_optionLabel"), rs(this, "_minSearchLength", 2), rs(this, "_multiSelect");
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
rs(Nr, "OPTION_LABEL", 14), rs(Nr, "MIN_SEARCH_LENGTH", 15), rs(Nr, "MULTI_SELECT", 16);
let Du = Nr;
var Ru = Object.defineProperty, wu = (s, e, t) => e in s ? Ru(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Je = (s, e, t) => wu(s, typeof e != "symbol" ? e + "" : e, t);
const or = class B extends me {
  constructor() {
    super(...arguments), Je(this, "_optionLabel"), Je(this, "_multiSelect"), Je(this, "_asButtonGroup"), Je(this, "_values", []);
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
Je(or, "OPTION_LABEL", 14), Je(or, "MULTI_SELECT", 15), Je(or, "AS_BUTTON_GROUP", 16), Je(or, "VALUES", 17);
let Fu = or;
var Pu = Object.defineProperty, bu = (s, e, t) => e in s ? Pu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Te = (s, e, t) => bu(s, typeof e != "symbol" ? e + "" : e, t);
const ot = class O extends me {
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
Te(ot, "WITH", 14), Te(ot, "E_TYPE", 15), Te(ot, "FILTER", 16), Te(ot, "TEMPLATE", 17), Te(ot, "CASES", 18), Te(ot, "PRIORITY", 19);
let Mu = ot;
var Uu = Object.defineProperty, Vu = (s, e, t) => e in s ? Uu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Dr = (s, e, t) => Vu(s, typeof e != "symbol" ? e + "" : e, t);
const zr = class le extends tt {
  constructor() {
    super(...arguments), Dr(this, "_when"), Dr(this, "_widget");
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
Dr(zr, "WHEN", 0), Dr(zr, "WIDGET", 1);
let Bu = zr;
const $r = {
  VERTICAL: "VERTICAL"
};
var Gu = Object.defineProperty, Wu = (s, e, t) => e in s ? Gu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Rr = (s, e, t) => Wu(s, typeof e != "symbol" ? e + "" : e, t);
const Kr = class oe extends me {
  constructor() {
    super(...arguments), Rr(this, "_fields", []), Rr(this, "_layout", $r.VERTICAL);
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
Rr(Kr, "FIELDS", 14), Rr(Kr, "LAYOUT", 15);
let Yu = Kr;
var $u = Object.defineProperty, ku = (s, e, t) => e in s ? $u(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, as = (s, e, t) => ku(s, typeof e != "symbol" ? e + "" : e, t);
const Lr = class x extends me {
  constructor() {
    super(...arguments), as(this, "_condition"), as(this, "_then", []), as(this, "_else", []);
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
as(Lr, "CONDITION", 14), as(Lr, "THEN", 15), as(Lr, "ELSE", 16);
let xu = Lr;
var Xu = Object.defineProperty, Hu = (s, e, t) => e in s ? Xu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, is = (s, e, t) => Hu(s, typeof e != "symbol" ? e + "" : e, t);
const vr = class X extends me {
  constructor() {
    super(...arguments), is(this, "_items"), is(this, "_body", []), is(this, "_emptyText");
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
is(vr, "ITEMS", 14), is(vr, "BODY", 15), is(vr, "EMPTY_TEXT", 16);
let ju = vr;
var qu = Object.defineProperty, zu = (s, e, t) => e in s ? qu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, wr = (s, e, t) => zu(s, typeof e != "symbol" ? e + "" : e, t);
const Qr = class ce extends me {
  constructor() {
    super(...arguments), wr(this, "_displayExpression"), wr(this, "_targetRoute");
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
wr(Qr, "DISPLAY_EXPRESSION", 14), wr(Qr, "TARGET_ROUTE", 15);
let Ku = Qr;
var Qu = Object.defineProperty, Ju = (s, e, t) => e in s ? Qu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ze = (s, e, t) => Ju(s, typeof e != "symbol" ? e + "" : e, t);
const cr = class G extends tt {
  constructor() {
    super(...arguments), Ze(this, "_name"), Ze(this, "_priority", 0), Ze(this, "_templates", []), Ze(this, "_cases", []);
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
Ze(cr, "NAME", 0), Ze(cr, "PRIORITY", 1), Ze(cr, "TEMPLATES", 2), Ze(cr, "CASES", 3);
let Zu = cr;
var en = Object.defineProperty, tn = (s, e, t) => e in s ? en(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Se = (s, e, t) => tn(s, typeof e != "symbol" ? e + "" : e, t);
const ct = class D extends tt {
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
Se(ct, "EXTENDS", 2), Se(ct, "CSS", 3), Se(ct, "VUE_COMPONENT", 4), Se(ct, "VISIBILITY_CONDITION", 5), Se(ct, "NAME", 0), Se(ct, "GROUP", 1);
let Ba = ct;
var sn = Object.defineProperty, rn = (s, e, t) => e in s ? sn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Fr = (s, e, t) => rn(s, typeof e != "symbol" ? e + "" : e, t);
const Jr = class Ee extends Ba {
  constructor() {
    super(...arguments), Fr(this, "_layout"), Fr(this, "_order");
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
Fr(Jr, "LAYOUT", 6), Fr(Jr, "ORDER", 7);
let an = Jr;
var un = Object.defineProperty, nn = (s, e, t) => e in s ? un(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, De = (s, e, t) => nn(s, typeof e != "symbol" ? e + "" : e, t);
const es = class F extends Ba {
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
De(es, "FEATURE", 6), De(es, "WIDGET_TYPE", 7), De(es, "LABEL", 8), De(es, "READ_ONLY", 9), De(es, "ORDER", 10);
let Ga = es;
var ln = Object.defineProperty, on = (s, e, t) => e in s ? ln(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Wa = (s, e, t) => on(s, typeof e != "symbol" ? e + "" : e, t);
const Ya = class Et extends Ga {
  constructor() {
    super(...arguments), Wa(this, "_columns", []);
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
Wa(Ya, "COLUMNS", 11);
let cn = Ya;
var En = Object.defineProperty, hn = (s, e, t) => e in s ? En(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Pr = (s, e, t) => hn(s, typeof e != "symbol" ? e + "" : e, t);
const Zr = class he extends tt {
  constructor() {
    super(...arguments), Pr(this, "_language", "OCL"), Pr(this, "_body", "");
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
Pr(Zr, "LANGUAGE", 0), Pr(Zr, "BODY", 1);
let $a = Zr;
const kr = {
  ERROR: "ERROR"
};
var gn = Object.defineProperty, dn = (s, e, t) => e in s ? gn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, br = (s, e, t) => dn(s, typeof e != "symbol" ? e + "" : e, t);
const ea = class ge extends $a {
  constructor() {
    super(...arguments), br(this, "_defaultMessage"), br(this, "_severity", kr.ERROR);
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
br(ea, "DEFAULT_MESSAGE", 2), br(ea, "SEVERITY", 3);
let pn = ea;
var Tn = Object.defineProperty, Sn = (s, e, t) => e in s ? Tn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, se = (s, e, t) => Sn(s, typeof e != "symbol" ? e + "" : e, t);
const je = class L extends tt {
  constructor() {
    super(...arguments), se(this, "_order"), se(this, "_matchCode"), se(this, "_matchSeverity"), se(this, "_matchExpression"), se(this, "_mappedText"), se(this, "_mappedTextExpression"), se(this, "_mappedSeverity");
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
se(je, "ORDER", 0), se(je, "MATCH_CODE", 1), se(je, "MATCH_SEVERITY", 2), se(je, "MATCH_EXPRESSION", 3), se(je, "MAPPED_TEXT", 4), se(je, "MAPPED_TEXT_EXPRESSION", 5), se(je, "MAPPED_SEVERITY", 6);
let fn = je;
var mn = Object.defineProperty, In = (s, e, t) => e in s ? mn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Nn = (s, e, t) => In(s, e + "", t);
const ka = class xa extends Ci {
  static get eINSTANCE() {
    return this._instance || (this._instance = new xa()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(C.eINSTANCE);
  }
  /**
   * Create a new UIModel instance
   */
  createUIModel() {
    return new Wi();
  }
  /**
   * Create a new FormView instance
   */
  createFormView() {
    return new Xi();
  }
  /**
   * Create a new TableView instance
   */
  createTableView() {
    return new qi();
  }
  /**
   * Create a new SectionView instance
   */
  createSectionView() {
    return new Qi();
  }
  /**
   * Create a new TabView instance
   */
  createTabView() {
    return new eu();
  }
  /**
   * Create a new SummaryView instance
   */
  createSummaryView() {
    return new ru();
  }
  /**
   * Create a new MasterDetail instance
   */
  createMasterDetail() {
    return new uu();
  }
  /**
   * Create a new PropertyBinding instance
   */
  createPropertyBinding() {
    return new ou();
  }
  /**
   * Create a new InputWidget instance
   */
  createInputWidget() {
    return new du();
  }
  /**
   * Create a new TextAreaWidget instance
   */
  createTextAreaWidget() {
    return new Su();
  }
  /**
   * Create a new NumberWidget instance
   */
  createNumberWidget() {
    return new Iu();
  }
  /**
   * Create a new CheckboxWidget instance
   */
  createCheckboxWidget() {
    return new vu();
  }
  /**
   * Create a new DateWidget instance
   */
  createDateWidget() {
    return new Au();
  }
  /**
   * Create a new ComboboxWidget instance
   */
  createComboboxWidget() {
    return new Du();
  }
  /**
   * Create a new SelectWidget instance
   */
  createSelectWidget() {
    return new Fu();
  }
  /**
   * Create a new AllFeatures instance
   */
  createAllFeatures() {
    return new Mu();
  }
  /**
   * Create a new TemplateCase instance
   */
  createTemplateCase() {
    return new Bu();
  }
  /**
   * Create a new GroupWidget instance
   */
  createGroupWidget() {
    return new Yu();
  }
  /**
   * Create a new Conditional instance
   */
  createConditional() {
    return new xu();
  }
  /**
   * Create a new ForEach instance
   */
  createForEach() {
    return new ju();
  }
  /**
   * Create a new ReferenceLinkWidget instance
   */
  createReferenceLinkWidget() {
    return new Ku();
  }
  /**
   * Create a new UIModelOverlay instance
   */
  createUIModelOverlay() {
    return new Zu();
  }
  /**
   * Create a new LayoutStyle instance
   */
  createLayoutStyle() {
    return new an();
  }
  /**
   * Create a new WidgetStyle instance
   */
  createWidgetStyle() {
    return new Ga();
  }
  /**
   * Create a new TableStyle instance
   */
  createTableStyle() {
    return new cn();
  }
  /**
   * Create a new Expression instance
   */
  createExpression() {
    return new $a();
  }
  /**
   * Create a new ValidationExpression instance
   */
  createValidationExpression() {
    return new pn();
  }
  /**
   * Create a new ValidationMessageMapper instance
   */
  createValidationMessageMapper() {
    return new fn();
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
Nn(ka, "_instance");
let ua = ka;
const Xa = Symbol("uimodelComposerRegistry");
function Ha() {
  const s = et(Xa);
  if (!s)
    throw new Error(
      "[uimodel-composer] No ComposerRegistry provided. Make sure UIModelComposer is an ancestor of this component."
    );
  return s;
}
function Ln(s) {
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
const vn = "uic";
function hr(s) {
  return s === !0 || s === "true";
}
function gt(s, e = 0) {
  if (typeof s == "number") return s;
  const t = Number(s);
  return Number.isFinite(t) ? t : e;
}
const _n = {
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
  return `--${vn}-${Vr(s)}`;
}
function On(s) {
  return s.replace(/token\(\s*([^)]+?)\s*\)/g, (e, t) => `var(${ta(t)})`);
}
function ja(s) {
  return `uic-${Vr(s)}`;
}
function An(s) {
  return `uicss-theme-${Vr(s)}`;
}
function qa(s, e) {
  return `uicss-cond-${Vr(s.name ?? "sheet")}-${e}`;
}
function za(s, e = "  ") {
  return s.filter((t) => t.property && t.value !== void 0).map((t) => `${e}${t.property.trim()}: ${On(t.value)}${hr(t.important) ? " !important" : ""};`).join(`
`);
}
function Cn(s, e) {
  return e.filter((t) => t.declarations.length > 0).map((t) => {
    var r, i;
    const u = ((i = (r = t.state) == null ? void 0 : r.getName) == null ? void 0 : i.call(r)) ?? String(t.state), n = _n[u] ?? `:${u.toLowerCase()}`;
    return `${s}${n} {
${za(t.declarations)}
}`;
  }).join(`
`);
}
function Sa(s, e, t, r) {
  const i = [];
  e.length > 0 && i.push(`${s} {
${za(e)}
}`);
  const u = Cn(s, t);
  if (u && i.push(u), i.length === 0) return "";
  const n = i.join(`
`);
  return r ? `@media ${r} {
${n}
}` : n;
}
function Ka(s) {
  return s.includeSubtypes === void 0 || s.includeSubtypes === null ? !0 : hr(s.includeSubtypes);
}
function yn(s, e, t) {
  var r, i;
  let u;
  const n = (i = (r = e.targetClass) == null ? void 0 : r.getName) == null ? void 0 : i.call(r);
  return n ? u = Ka(e) ? `.uim-c-${n}` : `.uim-component[data-uim-eclass="${n}"]` : u = ".uim-component", e.componentName && (u += `[data-uim-name="${e.componentName}"]`), e.group && (u += `[data-uim-group="${e.group}"]`), e.condition && (u += `.${qa(s, t)}`), u;
}
function Dn(s) {
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
function Rn(s) {
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
    hr(r.dark) && i.push("  color-scheme: dark;"), i.length > 0 && e.push(`.${An(r.name)} {
${i.join(`
`)}
}`);
  }
  const t = s.rules.map((r, i) => ({ rule: r, index: i }));
  t.sort((r, i) => gt(r.rule.priority) - gt(i.rule.priority) || r.index - i.index);
  for (const { rule: r, index: i } of t) {
    const u = Sa(
      yn(s, r, i),
      r.declarations,
      r.states,
      r.media || void 0
    );
    u && e.push(u);
  }
  for (const r of Dn(s.styles)) {
    if (!r.name) continue;
    const i = Sa(`.${ja(r.name)}`, r.declarations, r.states);
    i && e.push(i);
  }
  return e.join(`

`);
}
function wn(s) {
  return s.map(Rn).filter(Boolean).join(`

`);
}
const pr = Symbol("uimodel-css:sheets");
let Fn = 0;
function Pn(s) {
  const e = gr(0);
  class t extends Da {
    notifyChanged(g) {
      var d;
      try {
        super.notifyChanged(g);
      } catch {
      }
      if (!((d = g.isTouch) != null && d.call(g))) {
        e.value++;
        for (const o of i) n(o);
      }
    }
  }
  const r = new t();
  let i = [];
  function u(c) {
    const g = c;
    g.eAdapters().includes(r) || (g.eAdapterAdd ? g.eAdapterAdd(r) : g.eAdapters().push(r));
  }
  function n(c) {
    u(c);
    for (const g of c.eAllContents()) u(g);
  }
  function l(c) {
    const g = c;
    if (g.eAdapterRemove)
      g.eAdapterRemove(r);
    else {
      const d = g.eAdapters(), o = d.indexOf(r);
      o >= 0 && d.splice(o, 1);
    }
  }
  function E() {
    for (const c of i) {
      l(c);
      for (const g of c.eAllContents()) l(g);
    }
    i = [];
  }
  return dr(
    () => [...Me(s)],
    (c) => {
      E();
      for (const g of c)
        n(g), i.push(g);
      e.value++;
    },
    { immediate: !0 }
  ), ra(E), { css: S(() => (e.value, wn([...Me(s)]))), version: e };
}
function bn(s) {
  const { css: e, version: t } = Pn(s);
  if (typeof document < "u") {
    const r = document.createElement("style");
    r.id = `uimodel-css-${++Fn}`, r.setAttribute("data-uimodel-css", ""), document.head.appendChild(r), Ni(() => {
      r.textContent = e.value;
    }), ra(() => {
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
        return (E) => {
          var c, g, d;
          if (typeof E == "string") {
            const o = (d = (g = (c = e.eClass) == null ? void 0 : c.call(e)) == null ? void 0 : g.getEStructuralFeature) == null ? void 0 : d.call(g, E);
            return o ? Sr(e.eGet(o)) : void 0;
          }
          return Sr(e.eGet(E));
        };
      if (t in e) return e[t];
      const n = t.charAt(0).toUpperCase() + t.slice(1);
      for (const E of [`get${n}`, `is${n}`])
        if (typeof e[E] == "function") return Sr(e[E]());
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
        return Mn(s.body, e);
      case "AQL":
        return Un(s.body, e);
      case "JS":
        return Vn(s.body, e);
      default:
        return console.warn(`[uimodel-composer] Unknown expression language: ${s.language}`), !0;
    }
  } catch (t) {
    return console.error(`[uimodel-composer] Expression evaluation failed (${s.language}):`, t), !0;
  }
}
function Mn(s, e) {
  try {
    const { EMFOclValidator: t } = globalThis.__emftsOcl__ ?? {};
    return t ? new t().evaluateExpression(s, us(e)) === !0 : (console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup."), !0);
  } catch {
    return !0;
  }
}
function Un(s, e) {
  return console.warn("[uimodel-composer] AQL evaluation not yet implemented."), !0;
}
function Vn(s, e) {
  return !!new Function("self", `"use strict"; return (${s});`)(us(e));
}
function Bn(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? us(e) : s;
}
function na(s, e, t = {}) {
  if (s != null && s.body)
    try {
      switch (s.language) {
        case "JS": {
          const r = Object.keys(t);
          return new Function("self", ...r, `"use strict"; return (${s.body});`)(us(e), ...r.map((i) => Bn(t[i])));
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
function Gn(s) {
  return s.map((e, t) => ({ overlay: e, index: t })).sort((e, t) => gt(t.overlay.priority) - gt(e.overlay.priority) || e.index - t.index).flatMap(({ overlay: e }) => [...e.cases ?? []]);
}
function Qa(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "AllFeatures";
}
function Wn(s) {
  var e;
  const t = (e = s.eClass) == null ? void 0 : e.call(s);
  return t ? t.getName() === "WidgetComponent" || t.getEAllSuperTypes().some((r) => r.getName() === "WidgetComponent") : !1;
}
function Ja(s) {
  return typeof s.isContainment == "function";
}
function Yn(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    Qa(i) ? e.push(i) : Wn(i) && i.feature && t.add(i.feature);
    for (const u of i.eClass().getEAllStructuralFeatures()) {
      if (!Ja(u) || !u.isContainment()) continue;
      const n = i.eGet(u);
      if (!n) continue;
      const l = u.isMany() ? [...n] : [n];
      for (const E of l) r(E);
    }
  }
  return r(s), { blocks: e, boundFeatures: t };
}
function _r(s) {
  var e;
  return (((e = s.with) == null ? void 0 : e.length) ?? 0) > 0;
}
function $n(s, e) {
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
function kn(s, e) {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const u of e.blocks)
    t.set(u, []), r.set(u, new Set($n(s, u)));
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
      const E = gt(l.priority) - gt(n.priority), c = Number(_r(l)) - Number(_r(n)), g = i.get(n) - i.get(l);
      (E > 0 || E === 0 && (c > 0 || c === 0 && g > 0)) && (n = l);
    }
    n && t.get(n).push(u);
  }
  for (const [u, n] of t) {
    if (!_r(u)) continue;
    const l = new Map(u.with.map((E, c) => [E, c]));
    n.sort((E, c) => (l.get(E) ?? 0) - (l.get(c) ?? 0));
  }
  return t;
}
function fa(s, e) {
  for (const t of s ?? [])
    if (t.widget && (!t.when || na(
      t.when,
      e
    )))
      return t.widget;
}
function xn(s, e, t) {
  return fa(t?.overlayCases, e) ?? fa(s.cases, e) ?? s.template;
}
function Mr(s) {
  var e, t, r;
  const i = s.eClass(), u = (e = i.getEPackage()) == null ? void 0 : e.getEFactoryInstance();
  if (!u) throw new Error(`Keine Factory für ${i.getName()}`);
  const n = u.create(i);
  for (const l of i.getEAllStructuralFeatures()) {
    if ((t = l.isDerived) != null && t.call(l) || ((r = l.isChangeable) == null ? void 0 : r.call(l)) === !1) continue;
    const E = s.eGet(l);
    if (E == null) continue;
    const c = Ja(l) && l.isContainment();
    if (l.isMany()) {
      const g = [...E];
      if (g.length === 0) continue;
      n.eSet(
        l,
        c ? g.map((d) => Mr(d)) : g
      );
    } else
      n.eSet(l, c ? Mr(E) : E);
  }
  return n;
}
const Xn = /* @__PURE__ */ new Set(["AllFeatures", "Conditional", "ForEach"]);
function xr(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function Za(s, e) {
  if (xr(s) !== "GroupWidget") {
    s.feature = e;
    return;
  }
  const t = s.fields ?? [];
  for (const r of t)
    Xn.has(xr(r)) || (xr(r) === "GroupWidget" ? Za(r, e) : !r.feature && !(r.bindings ?? []).some((i) => i.property === "feature") && (r.feature = e));
}
function Hn(s, e) {
  const t = ua.eINSTANCE.createValidationExpression();
  return t.language = "JS", t.body = `self.${s} !== null && self.${s} !== undefined && String(self.${s}).length > 0`, t.defaultMessage = `${e ?? s} ist erforderlich.`, t.severity = "ERROR", t;
}
function jn(s) {
  const e = s.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function qn(s, e, t) {
  var r, i, u, n;
  const l = t ?? {
    blocks: [e],
    boundFeatures: /* @__PURE__ */ new Set()
  };
  l.blocks.includes(e) || l.blocks.push(e);
  const E = kn(s, l).get(e) ?? [], c = [];
  for (const g of E) {
    const d = xn(e, g, l);
    if (!d) {
      console.error(
        `[uimodel-composer] AllFeatures "${e.name ?? "?"}": kein TemplateCase trifft auf Feature "${g.getName() ?? "?"}" und kein Default-Fall (template) gesetzt.`
      );
      continue;
    }
    const o = Mr(d);
    Za(o, g);
    const h = g.getName() ?? "feature";
    o.name = h, o.label === void 0 && e.label !== void 0 && (o.label = e.label), o.placeholder === void 0 && e.placeholder !== void 0 && (o.placeholder = e.placeholder), o.readOnly === void 0 && e.readOnly !== void 0 && (o.readOnly = e.readOnly), o.required === void 0 && e.required !== void 0 && (o.required = e.required), (((r = o.styles) == null ? void 0 : r.length) ?? 0) === 0 && (((i = e.styles) == null ? void 0 : i.length) ?? 0) > 0 && (o.styles = [...e.styles]), o.label || (o.label = jn(h)), !o.group && e.group && (o.group = e.group), o.required === void 0 && gt((u = g.getLowerBound) == null ? void 0 : u.call(g)) >= 1 && (o.required = !0, (((n = o.validations) == null ? void 0 : n.length) ?? 0) === 0 && (o.validations = [Hn(h, o.label)]));
    const v = e.bindings ?? [];
    if (v.length > 0) {
      const _ = new Set((o.bindings ?? []).map((A) => A.property)), I = v.filter((A) => A.property && !_.has(A.property)).map((A) => Mr(A));
      I.length > 0 && (o.bindings = [...o.bindings ?? [], ...I]);
    }
    c.push(o);
  }
  return c;
}
const ei = Symbol("uimodel:allfeatures-context"), ti = gr(0);
function zn() {
  ti.value++;
}
function pt() {
  ti.value;
}
function Kn(s) {
  class e extends Da {
    notifyChanged(l) {
      var E;
      try {
        super.notifyChanged(l);
      } catch {
      }
      if ((E = l.isTouch) != null && E.call(l)) return;
      zn();
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
    const l = (E) => {
      const c = E;
      if (c.eAdapterRemove)
        c.eAdapterRemove(t);
      else {
        const g = c.eAdapters(), d = g.indexOf(t);
        d >= 0 && g.splice(d, 1);
      }
    };
    l(n);
    for (const E of n.eAllContents()) l(E);
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
function si(s) {
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
function Qn(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "CssStyle";
}
function Jn(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    !i || t.has(i) || (t.add(i), r(i.extends), Qn(i) && i.name && e.push(ja(i.name)));
  }
  for (const i of s ?? []) r(i);
  return e;
}
function Zn(s, e) {
  var t, r, i;
  const u = (r = (t = s.targetClass) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  if (u) {
    const n = si((i = e.eClass) == null ? void 0 : i.call(e));
    if (Ka(s)) {
      if (!n.includes(u)) return !1;
    } else if (n[0] !== u)
      return !1;
  }
  return !(s.componentName && e.name !== s.componentName || s.group && e.group !== s.group);
}
function la(s, e = {}) {
  var t;
  const r = ["uim-component"];
  for (const i of si((t = s.eClass) == null ? void 0 : t.call(s)))
    r.push(`uim-c-${i}`);
  r.push(...Jn(s.styles)), e.resolvedCss && r.push(...e.resolvedCss.split(/\s+/).filter(Boolean));
  for (const i of e.sheets ?? [])
    i.rules.forEach((u, n) => {
      u.condition && Zn(u, s) && e.model && Tr(u.condition, e.model) && r.push(qa(i, n));
    });
  return [...new Set(r)];
}
function oa(s) {
  var e, t, r;
  const i = {}, u = (r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  return u && (i["data-uim-eclass"] = u), s.name && (i["data-uim-name"] = s.name), s.group && (i["data-uim-group"] = s.group), i;
}
function el(s, e, t) {
  const r = [];
  return hr(t ?? s.required) && r.push("uim-s-required"), hr(e ?? s.readOnly) && r.push("uim-s-readonly"), r;
}
function ri(s, e = /* @__PURE__ */ new Set()) {
  if (!s) return {};
  if (e.has(s)) return {};
  e.add(s);
  const t = s.extends ? ri(s.extends, e) : {}, r = tl(s);
  return ii(t, r);
}
function ai(s) {
  return s.reduce(
    (e, t) => ii(e, ri(t)),
    {}
  );
}
function tl(s) {
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
const ca = /* @__PURE__ */ ee({
  __name: "ComponentDispatcher",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = s, t = Ha(), r = S(() => {
      var l, E, c, g;
      const d = ((g = (c = (E = (l = e.component).eClass) == null ? void 0 : E.call(l)) == null ? void 0 : c.getName) == null ? void 0 : g.call(c)) ?? "", o = t.getComposer(d);
      return o || console.warn(`[uimodel-composer] No composer registered for EClass "${d}"`), o ?? null;
    }), i = et(pr, void 0), u = S(() => (pt(), i?.version.value, la(e.component, {
      model: e.model,
      sheets: i?.sheets.value,
      resolvedCss: ai(e.component.styles ?? []).css
    }))), n = S(() => oa(e.component));
    return (l, E) => r.value ? (m(), j(aa(r.value), ia({
      key: 0,
      component: s.component,
      model: s.model,
      class: u.value
    }, n.value), null, 16, ["component", "model", "class"])) : fe("", !0);
  }
});
function Ea(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function sl(s) {
  return Ea(s) === "GroupWidget";
}
function rl(s) {
  return Ea(s) === "Conditional";
}
function al(s) {
  return Ea(s) === "ForEach";
}
function il(s) {
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
    if (Qa(u)) {
      const n = (r = e.eClass) == null ? void 0 : r.call(e);
      if (!n) continue;
      for (const l of qn(n, u, t))
        i.push({ kind: "widget", widget: l, model: e });
    } else if (rl(u)) {
      const n = Tr(u.condition, e) ? u.then : u.else;
      i.push(...sa(n, e, t));
    } else if (al(u)) {
      const n = il(na(u.items, e));
      if (n.length === 0) {
        u.emptyText && i.push({ kind: "note", text: u.emptyText });
        continue;
      }
      for (const l of n)
        i.push(...sa(u.body, l, t));
    } else sl(u) ? i.push({ kind: "group", widget: u, model: e }) : i.push({ kind: "widget", widget: u, model: e });
  return i;
}
function ui(s, e) {
  return S(() => (pt(), Tr(Me(s), Me(e))));
}
const ul = /* @__PURE__ */ new Set([
  "readOnly",
  "required",
  "password",
  "asToggle",
  "multiSelect",
  "asButtonGroup",
  "withTime"
]), nl = /* @__PURE__ */ new Set([
  "maxLength",
  "rows",
  "min",
  "max",
  "step",
  "minSearchLength",
  "order"
]);
function ll(s, e) {
  if (e === null) return s === "feature" ? null : void 0;
  if (s === "feature") return e;
  if (ul.has(s)) return !!e;
  if (nl.has(s)) {
    const t = Number(e);
    return Number.isFinite(t) ? t : void 0;
  }
  return String(e);
}
function ol(s, e) {
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
    const l = ll(u, n);
    l !== void 0 && (r.values[u] = l);
  }
  return r;
}
function ni(s, e) {
  return S(() => {
    var t;
    pt();
    const r = Me(s), i = ai(r.styles), u = {
      ...r.label !== void 0 ? { label: r.label } : {},
      ...r.placeholder !== void 0 ? { placeholder: r.placeholder } : {},
      ...r.readOnly !== void 0 ? { readOnly: r.readOnly } : {},
      ...r.required !== void 0 ? { required: r.required } : {}
    }, n = e ? Me(e) : void 0;
    if (!n || (((t = r.bindings) == null ? void 0 : t.length) ?? 0) === 0)
      return { ...i, ...u };
    const l = ol(r, n);
    return {
      ...i,
      ...u,
      ...l.values,
      boundFeature: l.feature,
      featureSuppressed: l.featureSuppressed
    };
  });
}
var q = /* @__PURE__ */ ((s) => (s[s.DEFAULT = 0] = "DEFAULT", s[s.DATA_TYPE = 100] = "DATA_TYPE", s[s.ECLASS = 200] = "ECLASS", s[s.FEATURE = 300] = "FEATURE", s[s.PACKAGE = 400] = "PACKAGE", s[s.INSTANCE = 500] = "INSTANCE", s[s.OVERRIDE = 1e3] = "OVERRIDE", s))(q || {});
function z() {
  return { matches: !1, priority: 0 };
}
function Ne(s) {
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
      return Ne(q.ECLASS + 50);
    if (t.getName() === this.eClass.getName()) {
      const r = t.getEPackage(), i = this.eClass.getEPackage();
      if (r && i && r.getNsURI() === i.getNsURI())
        return Ne(q.ECLASS + 50);
    }
    return this.isSuperTypeOf(this.eClass, t) ? Ne(q.ECLASS) : z();
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
    return u && ((r = u.getName) == null ? void 0 : r.call(u)) === this.dataTypeName ? Ne(q.DATA_TYPE) : z();
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
    return this.enumName ? ((t = e.getName) == null ? void 0 : t.call(e)) === this.enumName ? Ne(q.DATA_TYPE + 50) : z() : Ne(q.DATA_TYPE);
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
    const E = l;
    let c = q.DATA_TYPE;
    if (this.containment !== void 0) {
      if ((((t = E.isContainment) == null ? void 0 : t.call(E)) ?? !1) !== this.containment)
        return z();
      c += 25;
    }
    if (this.targetClass) {
      const g = (r = E.getEReferenceType) == null ? void 0 : r.call(E);
      if (!g)
        return z();
      const d = (i = g.getName) == null ? void 0 : i.call(g), o = (n = (u = this.targetClass).getName) == null ? void 0 : n.call(u);
      if (d !== o && !this.isSuperTypeOf(this.targetClass, g))
        return z();
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
class dl {
  constructor(e, t) {
    this.eClass = e, this.featureName = t;
  }
  /**
   * Match the context against this specific feature.
   */
  match(e) {
    var t, r, i, u, n, l, E, c, g, d;
    const o = e.feature || e.attribute || e.reference;
    if (!o || ((t = o.getName) == null ? void 0 : t.call(o)) !== this.featureName)
      return z();
    const h = (r = o.getEContainingClass) == null ? void 0 : r.call(o);
    if (!h)
      return z();
    if (h === this.eClass)
      return Ne(q.FEATURE);
    const v = (i = h.getName) == null ? void 0 : i.call(h), _ = (n = (u = this.eClass).getName) == null ? void 0 : n.call(u);
    if (v === _) {
      const I = (l = h.getEPackage) == null ? void 0 : l.call(h), A = (c = (E = this.eClass).getEPackage) == null ? void 0 : c.call(E);
      if (I && A && ((g = I.getNsURI) == null ? void 0 : g.call(I)) === ((d = A.getNsURI) == null ? void 0 : d.call(A)))
        return Ne(q.FEATURE);
    }
    return this.isInheritedFrom(h, this.eClass) ? Ne(q.FEATURE - 10) : z();
  }
  /**
   * Check if subClass inherits from superClass.
   */
  isInheritedFrom(e, t) {
    var r, i, u, n, l, E, c;
    const g = (r = e.getEAllSuperTypes) == null ? void 0 : r.call(e);
    if (!g) return !1;
    for (const d of g) {
      if (d === t) return !0;
      if (((i = d.getName) == null ? void 0 : i.call(d)) === ((u = t.getName) == null ? void 0 : u.call(t))) {
        const o = (n = d.getEPackage) == null ? void 0 : n.call(d), h = (l = t.getEPackage) == null ? void 0 : l.call(t);
        if (o && h && ((E = o.getNsURI) == null ? void 0 : E.call(o)) === ((c = h.getNsURI) == null ? void 0 : c.call(h)))
          return !0;
      }
    }
    return !1;
  }
}
var pl = Object.defineProperty, Tl = (s, e, t) => e in s ? pl(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ma = (s, e, t) => Tl(s, typeof e != "symbol" ? e + "" : e, t);
let Sl = 0;
function fl() {
  return `descriptor-${++Sl}`;
}
let ml = class {
  constructor() {
    ma(this, "entries", []), ma(this, "instanceOverrides", /* @__PURE__ */ new WeakMap());
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
      { priority: q.INSTANCE }
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
      { priority: q.ECLASS, ...r }
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
      { priority: q.DATA_TYPE, ...r }
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
      { priority: q.DATA_TYPE, ...r }
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
      { priority: q.DATA_TYPE, ...t }
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
      { priority: q.FEATURE, ...i }
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
        return (r) => r.eObject === e.eObject ? Ne(t ?? q.INSTANCE) : z();
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
const ns = new ml();
var Il = Object.defineProperty, Nl = (s, e, t) => e in s ? Il(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ia = (s, e, t) => Nl(s, typeof e != "symbol" ? e + "" : e, t);
let Ll = class {
  constructor() {
    Ia(this, "lazyRegistrations", []), Ia(this, "resolvedPackages", /* @__PURE__ */ new Map());
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
new Ll();
const li = Symbol("componentRegistry");
function vl() {
  const s = et(li) ?? ns;
  function e(d) {
    return s.getComponent(d);
  }
  function t(d, o) {
    return s.getComponentForFeature(d, o);
  }
  function r(d, o) {
    return s.getComponentForEClass(d, o);
  }
  function i(d, o, h) {
    return s.register(d, o, h);
  }
  function u(d, o) {
    return s.registerForInstance(d, o);
  }
  function n(d, o, h) {
    return s.registerForEClass(d, o, h);
  }
  function l(d, o, h) {
    return s.registerForDataType(d, o, h);
  }
  function E(d, o, h) {
    return s.registerForEnum(d, o, h);
  }
  function c(d, o) {
    return s.registerForReference(d, o);
  }
  function g(d, o, h, v) {
    return s.registerForFeature(d, o, h, v);
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
    registerForEnum: E,
    registerForReference: c,
    registerForFeature: g
  };
}
const _l = { class: "uimodel-fallback-widget" }, Ol = { class: "uimodel-fallback-widget__label" }, Al = {
  key: 0,
  "aria-hidden": "true"
}, Cl = ["rows", "value", "placeholder", "readonly", "disabled"], yl = /* @__PURE__ */ ee({
  __name: "FallbackWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = S(() => {
      var o;
      return ((o = e.custom) == null ? void 0 : o.resolvedStyle) ?? {};
    }), r = S(
      () => {
        var o, h;
        return t.value.label ?? ((h = (o = e.feature) == null ? void 0 : o.getName) == null ? void 0 : h.call(o)) ?? "";
      }
    ), i = S(() => t.value.placeholder ?? ""), u = S(() => E(t.value.readOnly)), n = S(() => E(t.value.required)), l = S(() => {
      var o, h;
      const v = (h = (o = e.custom) == null ? void 0 : o.rawWidget) == null ? void 0 : h.rows, _ = Number(v);
      return Number.isFinite(_) && _ > 0 ? _ : 3;
    });
    function E(o) {
      return o === !0 || o === "true";
    }
    const c = S(() => {
      var o;
      const h = (o = e.eObject) == null ? void 0 : o.eGet(e.feature);
      return h == null ? "" : String(h);
    }), g = gr(c.value);
    dr(c, (o) => {
      g.value = o;
    });
    function d(o) {
      var h;
      const v = o.target.value;
      g.value = v, (h = e.eObject) == null || h.eSet(e.feature, v);
    }
    return (o, h) => (m(), b("div", _l, [
      Q("label", Ol, [
        ya(qe(r.value), 1),
        n.value ? (m(), b("span", Al, " *")) : fe("", !0)
      ]),
      Q("textarea", {
        class: "uimodel-fallback-widget__input",
        rows: l.value,
        value: g.value,
        placeholder: i.value,
        readonly: u.value,
        disabled: u.value,
        onInput: d
      }, null, 40, Cl)
    ]));
  }
}), Dl = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, Rl = /* @__PURE__ */ Dl(yl, [["__scopeId", "data-v-0237261a"]]), oi = /* @__PURE__ */ ee({
  __name: "WidgetComposer",
  props: {
    widget: {},
    model: {}
  },
  setup(s) {
    const e = s, t = /* @__PURE__ */ new Set(), { getComponentForFeature: r } = vl(), i = ui(
      () => e.widget.visibilityCondition,
      () => e.model
    ), u = ni(
      () => e.widget,
      () => e.model
    ), n = S(
      () => u.value.boundFeature ?? e.widget.feature
    ), l = S(() => {
      var o, h, v, _, I, A, J, K;
      if (!n.value) return null;
      const re = r(n.value, e.model);
      if (re) return re;
      const y = ((_ = (v = (h = (o = e.widget).eClass) == null ? void 0 : h.call(o)) == null ? void 0 : v.getName) == null ? void 0 : _.call(v)) ?? "WidgetComponent", P = ((K = (J = (A = (I = n.value).getEType) == null ? void 0 : A.call(I)) == null ? void 0 : J.getName) == null ? void 0 : K.call(J)) ?? "?", W = `${y}/${P}`;
      return t.has(W) || (t.add(W), console.warn(
        `[uimodel-composer] Kein Renderer für Widget "${y}" auf Datentyp "${P}" registriert — Fallback als Plaintext-Editor. Host: Renderer über die @emfts/vue-registry registrieren.`
      )), Rl;
    }), E = S(() => {
      var o, h;
      return {
        eObject: e.model,
        feature: n.value,
        eClass: (h = (o = e.model).eClass) == null ? void 0 : h.call(o),
        custom: {
          resolvedStyle: u.value,
          rawWidget: e.widget
        }
      };
    }), c = et(pr, void 0), g = S(() => (pt(), c?.version.value, [
      ...la(e.widget, {
        model: e.model,
        sheets: c?.sheets.value,
        resolvedCss: u.value.css
      }),
      ...el(
        e.widget,
        u.value.readOnly,
        u.value.required
      )
    ])), d = S(() => oa(e.widget));
    return (o, h) => de(i) && l.value && !de(u).featureSuppressed ? (m(), j(aa(l.value), ia({ key: 0 }, { ...E.value, ...d.value }, { class: g.value }), null, 16, ["class"])) : fe("", !0);
  }
}), wl = {
  key: 0,
  class: "uim-group-label"
}, Fl = /* @__PURE__ */ ee({
  __name: "GroupComposer",
  props: {
    widget: {},
    model: {}
  },
  setup(s) {
    const e = s, t = et(pr, void 0), r = ui(
      () => e.widget.visibilityCondition,
      () => e.model
    ), i = ni(
      () => e.widget,
      () => e.model
    ), u = S(() => {
      const g = i.value.label;
      return g == null ? "" : String(g);
    }), n = S(
      () => String(e.widget.layout ?? "VERTICAL").toLowerCase()
    ), l = S(() => (pt(), t?.version.value, [
      ...la(e.widget, {
        model: e.model,
        sheets: t?.sheets.value,
        resolvedCss: i.value.css
      }),
      "uimodel-group",
      `uimodel-group--${n.value}`
    ])), E = S(
      () => oa(e.widget)
    ), c = S(() => e.widget.fields ?? []);
    return (g, d) => de(r) ? (m(), b("div", ia({
      key: 0,
      class: l.value
    }, E.value), [
      u.value ? (m(), b("div", wl, qe(u.value), 1)) : fe("", !0),
      Er(ci, {
        fields: c.value,
        model: s.model
      }, null, 8, ["fields", "model"])
    ], 16)) : fe("", !0);
  }
}), Pl = {
  key: 0,
  class: "uimodel-foreach-empty"
}, ci = /* @__PURE__ */ ee({
  __name: "FieldsRenderer",
  props: {
    fields: {},
    model: {}
  },
  setup(s) {
    const e = s, t = et(ei, void 0), r = et(pr, void 0), i = S(() => (pt(), r?.version.value, sa(e.fields, e.model, t?.value)));
    return (u, n) => (m(!0), b(ht, null, ls(i.value, (l, E) => (m(), b(ht, { key: E }, [
      l.kind === "note" ? (m(), b("p", Pl, qe(l.text), 1)) : l.kind === "group" ? (m(), j(Fl, {
        key: 1,
        widget: l.widget,
        model: l.model
      }, null, 8, ["widget", "model"])) : (m(), j(oi, {
        key: 2,
        widget: l.widget,
        model: l.model
      }, null, 8, ["widget", "model"]))
    ], 64))), 128));
  }
}), bl = { class: "uimodel-form-view" }, Ei = /* @__PURE__ */ ee({
  __name: "FormViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (m(), b("div", bl, [
      Er(ci, {
        fields: s.component.fields,
        model: s.model
      }, null, 8, ["fields", "model"])
    ]));
  }
}), Ml = { class: "uimodel-section-view" }, Ul = /* @__PURE__ */ ee({
  __name: "SectionViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (m(), b("div", Ml, [
      (m(!0), b(ht, null, ls(s.component.sections, (r) => (m(), j(Ei, {
        key: r.name,
        component: r,
        model: s.model
      }, null, 8, ["component", "model"]))), 128))
    ]));
  }
}), Vl = { class: "uimodel-tab-view" }, Bl = ["data-tab"], Gl = /* @__PURE__ */ ee({
  __name: "TabViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (m(), b("div", Vl, [
      (m(!0), b(ht, null, ls(s.component.tabs, (r) => (m(), b("div", {
        key: r.name,
        class: "uimodel-tab-panel",
        "data-tab": r.name
      }, [
        Er(ca, {
          component: r,
          model: s.model
        }, null, 8, ["component", "model"])
      ], 8, Bl))), 128))
    ]));
  }
}), Wl = { class: "uimodel-summary-view" }, Yl = /* @__PURE__ */ ee({
  __name: "SummaryViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (m(), b("div", Wl, [
      (m(!0), b(ht, null, ls(s.component.summaryFields, (r) => (m(), j(oi, {
        key: r.name,
        widget: r,
        model: s.model
      }, null, 8, ["widget", "model"]))), 128))
    ]));
  }
}), $l = {
  key: 1,
  class: "uimodel-table-view-placeholder"
}, hi = /* @__PURE__ */ ee({
  __name: "TableViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = Ha(), t = S(() => e.getComposer("TableViewRenderer"));
    return (r, i) => t.value ? (m(), j(aa(t.value), {
      key: 0,
      component: s.component,
      model: s.model
    }, null, 8, ["component", "model"])) : (m(), b("div", $l));
  }
}), kl = { class: "uimodel-master-detail" }, xl = { class: "uimodel-master" }, Xl = { class: "uimodel-detail" }, Hl = /* @__PURE__ */ ee({
  __name: "MasterDetailComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (m(), b("div", kl, [
      Q("div", xl, [
        Er(hi, {
          component: s.component.master,
          model: s.model
        }, null, 8, ["component", "model"])
      ]),
      Q("div", Xl, [
        Er(ca, {
          component: s.component.detail,
          model: s.model
        }, null, 8, ["component", "model"])
      ])
    ]));
  }
}), gi = /* @__PURE__ */ ee({
  __name: "UIModelComposer",
  props: {
    uiModel: {},
    model: {},
    composerRegistry: {},
    styleSheets: {},
    overlays: {}
  },
  setup(s) {
    const e = s, t = S(() => e.styleSheets ?? []), { version: r } = bn(t);
    fr(pr, { sheets: t, version: r }), Kn(() => e.model), fr(
      ei,
      S(() => (pt(), {
        ...Yn(e.uiModel),
        overlayCases: Gn(e.overlays ?? [])
      }))
    );
    const i = e.composerRegistry ?? Ln({
      FormView: Ei,
      SectionView: Ul,
      TabView: Gl,
      SummaryView: Yl,
      TableView: hi,
      MasterDetail: Hl
    });
    fr(Xa, i);
    function u() {
      return Tr(e.uiModel.filterExpression, e.model);
    }
    return (n, l) => u() ? (m(!0), b(ht, { key: 0 }, ls(s.uiModel.components, (E) => (m(), j(ca, {
      key: E.name,
      component: E,
      model: s.model
    }, null, 8, ["component", "model"]))), 128)) : fe("", !0);
  }
});
function Na(s) {
  const e = s;
  return !!e && typeof e.eIsProxy == "function" && e.eIsProxy();
}
function La(s, e) {
  const t = e.getResourceSet(), r = s.eProxyURI();
  if (!r) return s;
  const i = r.toString(), u = i.indexOf("#");
  if (u > 0) {
    const l = i.substring(0, u), E = i.substring(u + 1);
    if (!t) return s;
    const c = e.getURI(), g = [];
    c && !l.includes("://") && g.push(Xr.createURI(l).resolve(c).toString()), g.push(l);
    for (const d of g) {
      const o = t.getResource(Xr.createURI(d), !1), h = o?.getEObject(E);
      if (h) return h;
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
          if (Na(n)) {
            const l = La(n, e);
            l !== n && (i[u] = l);
          }
        }
      } else if (Na(r)) {
        const i = La(r, e);
        i !== r && s.eSet(t, i);
      }
    }
  }
}
function jl(s) {
  for (const e of s.getContents()) {
    va(e, s);
    for (const t of e.eAllContents())
      va(t, s);
  }
}
const ql = "VariableWrapper";
function di(s) {
  return typeof s?.eClass == "function";
}
function pi(s, e) {
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
function Ti(s) {
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
    if (i === ql)
      try {
        e[r] = new wi();
      } catch {
      }
  }
  return s;
}
function Si(s, e) {
  return Ti(di(s) ? s : pi(e(), s));
}
const zl = /color|colour/i, Kl = /size|width|height|radius|blur|padding|transparence|transparency|opacity|zoom|count|index/i, Ql = /^(is|has|show|enable|fullscreen|visible)/i;
function Ur(s) {
  const e = s.getName?.() ?? "", t = s.getEType?.()?.getName?.() ?? "";
  return t === "EBoolean" || Ql.test(e) ? "flag" : zl.test(e) ? "colour" : t === "EInt" || t === "EDouble" || Kl.test(e) ? "number" : "text";
}
function Br(s) {
  const t = (s.getName?.() ?? "").replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function ha(s, e = s.getName?.() ?? "Settings") {
  const t = ua.eINSTANCE, r = t.createFormView();
  r.name = e;
  for (const u of s.getEStructuralFeatures()) {
    const n = Jl(t, u);
    n.feature = u, n.label = Br(u), r.fields.push(n);
  }
  const i = t.createUIModel();
  return i.name = e, i.targetClasses.push(s), i.components.push(r), i;
}
function Jl(s, e) {
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
const Zl = { class: "list" }, eo = { class: "list__head" }, to = { class: "list__label" }, so = { class: "list__count" }, ro = {
  key: 0,
  class: "list__untyped"
}, ao = {
  key: 1,
  class: "list__empty"
}, io = ["aria-expanded", "onClick"], uo = { class: "entry__twist" }, no = { class: "entry__title" }, lo = {
  key: 0,
  class: "entry__actions"
}, oo = ["disabled", "onClick"], co = ["disabled", "onClick"], Eo = ["onClick"], ho = {
  key: 1,
  class: "entry__body"
}, go = /* @__PURE__ */ ee({
  __name: "SettingsListWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = S(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? Br(e.feature) : "")
    ), r = S(() => e.custom?.resolvedStyle?.readOnly === !0);
    function i() {
      const h = e.feature?.getName?.();
      if (!(!h || !e.eObject))
        return e.eObject[h];
    }
    const u = S(() => {
      const h = i();
      return h ? typeof h.toArray == "function" ? h.toArray() : Array.isArray(h) ? h : [] : [];
    }), n = S(() => {
      try {
        return e.feature?.getEReferenceType?.() ?? void 0;
      } catch {
        return;
      }
    }), l = S(() => {
      const h = n.value;
      return h ? ha(h, h.getName?.() ?? "Eintrag") : void 0;
    }), E = gr(0);
    function c(h, v) {
      const _ = h, I = _.label?.value ?? _.name?.value ?? _.title?.value;
      return I ? String(I) : `${n.value?.getName?.() ?? "Eintrag"} ${v + 1}`;
    }
    function g() {
      const h = n.value, v = e.feature?.getName?.();
      if (!h || !v || !e.eObject) return;
      const I = h.getEPackage?.()?.getEFactoryInstance?.()?.create(h);
      if (!I) return;
      Ti(I);
      const A = i();
      if (A) {
        if (typeof A.add == "function") A.add(I);
        else if (Array.isArray(A)) A.push(I);
        else return;
        E.value = u.value.length - 1;
      }
    }
    function d(h) {
      const v = i();
      if (v) {
        if (typeof v.removeAt == "function") v.removeAt(h);
        else if (Array.isArray(v)) v.splice(h, 1);
        else return;
        E.value = Math.min(E.value, Math.max(u.value.length - 1, 0));
      }
    }
    function o(h, v) {
      const _ = i();
      if (!_) return;
      const I = h + v;
      if (!(I < 0 || I >= u.value.length)) {
        if (typeof _.move == "function") _.move(I, h);
        else if (Array.isArray(_)) {
          const [A] = _.splice(h, 1);
          _.splice(I, 0, A);
        } else return;
        E.value = I;
      }
    }
    return (h, v) => (m(), b("section", Zl, [
      Q("header", eo, [
        Q("span", to, qe(t.value), 1),
        Q("span", so, qe(u.value.length), 1),
        v[1] || (v[1] = Q("span", { class: "list__spacer" }, null, -1)),
        n.value && !r.value ? (m(), j(de(Fi), {
          key: 0,
          size: "sm",
          onClick: g
        }, {
          default: Li(() => [...v[0] || (v[0] = [
            ya("Hinzufügen", -1)
          ])]),
          _: 1
        })) : fe("", !0)
      ]),
      n.value ? u.value.length ? fe("", !0) : (m(), b("p", ao, "Noch nichts angelegt.")) : (m(), b("p", ro, " Diese Liste ist im Modell ohne Typ angegeben - es steht dort nur, dass es mehrere sind, nicht wovon. Solange das so ist, lässt sich hier nichts zeigen. ")),
      (m(!0), b(ht, null, ls(u.value, (_, I) => (m(), b("div", {
        key: I,
        class: "entry"
      }, [
        Q("button", {
          type: "button",
          class: "entry__head",
          "aria-expanded": E.value === I,
          onClick: (A) => E.value = E.value === I ? -1 : I
        }, [
          Q("span", uo, qe(E.value === I ? "▾" : "▸"), 1),
          Q("span", no, qe(c(_, I)), 1)
        ], 8, io),
        r.value ? fe("", !0) : (m(), b("span", lo, [
          Q("button", {
            type: "button",
            title: "Nach oben",
            disabled: I === 0,
            onClick: (A) => o(I, -1)
          }, "↑", 8, oo),
          Q("button", {
            type: "button",
            title: "Nach unten",
            disabled: I === u.value.length - 1,
            onClick: (A) => o(I, 1)
          }, " ↓ ", 8, co),
          Q("button", {
            type: "button",
            title: "Entfernen",
            class: "entry__remove",
            onClick: (A) => d(I)
          }, "✕", 8, Eo)
        ])),
        E.value === I ? (m(), b("div", ho, [
          l.value ? (m(), j(de(gi), {
            key: 0,
            "ui-model": l.value,
            model: _
          }, null, 8, ["ui-model", "model"])) : fe("", !0)
        ])) : fe("", !0)
      ]))), 128))
    ]));
  }
}), ga = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, fi = /* @__PURE__ */ ga(go, [["__scopeId", "data-v-87b9cfb7"]]), po = { class: "field-row__control" }, To = ["title", "aria-pressed"], So = /* @__PURE__ */ ee({
  __name: "VariableWrapperWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = et(Mi), r = S(() => {
      const { eObject: y, feature: P } = e;
      if (!y || !P) return;
      const W = P.getName?.();
      return W ? y[W] : void 0;
    }), i = S(() => r.value?.variable ?? ""), u = S(() => !!i.value), n = gr(!1);
    dr(u, (y) => {
      y && (n.value = !0);
    }, { immediate: !0 });
    const l = S(() => {
      try {
        return (t?.getAllVariables() ?? []).map(([y]) => y);
      } catch {
        return [];
      }
    }), E = S({
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
    function g() {
      u.value ? c() : n.value = !n.value;
    }
    const d = S(() => !e.custom?.resolvedStyle?.readOnly && !u.value), o = S({
      get: () => r.value?.value ?? "",
      set: (y) => {
        r.value && d.value && (r.value.value = y);
      }
    }), h = S({
      get: () => {
        const y = Number(r.value?.value);
        return Number.isFinite(y) ? y : 0;
      },
      set: (y) => {
        r.value && d.value && (r.value.value = String(y));
      }
    }), v = S({
      get: () => r.value?.value === !0 || r.value?.value === "true",
      set: (y) => {
        r.value && d.value && (r.value.value = y);
      }
    }), _ = S(() => e.custom?.rawWidget?.eClass?.()?.getName?.() ?? ""), I = S(() => {
      const y = e.custom?.rawWidget?.values;
      return y && typeof y.map == "function" ? [...y] : [];
    }), A = S(() => ({
      min: e.custom?.rawWidget?.min,
      max: e.custom?.rawWidget?.max,
      step: e.custom?.rawWidget?.step
    })), J = S(() => {
      switch (_.value) {
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
    }), K = S(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? Br(e.feature) : "")
    ), re = S(() => n.value && l.value.length === 0);
    return (y, P) => r.value ? (m(), b("div", {
      key: 0,
      class: da(["field-row", { "field-row--bound": u.value }])
    }, [
      Q("div", po, [
        n.value && !re.value ? (m(), j(de(Ta), {
          key: 0,
          modelValue: E.value,
          "onUpdate:modelValue": P[0] || (P[0] = (W) => E.value = W),
          label: K.value,
          options: l.value,
          disabled: s.custom?.resolvedStyle?.readOnly,
          placeholder: "Keine Variable",
          clearable: ""
        }, null, 8, ["modelValue", "label", "options", "disabled"])) : re.value ? (m(), j(de(Wr), {
          key: 1,
          "model-value": "",
          label: K.value,
          disabled: "",
          hint: "Es sind noch keine Variablen angelegt."
        }, null, 8, ["label"])) : J.value === "flag" ? (m(), j(de(Pi), {
          key: 2,
          modelValue: v.value,
          "onUpdate:modelValue": P[1] || (P[1] = (W) => v.value = W),
          label: K.value,
          disabled: !d.value
        }, null, 8, ["modelValue", "label", "disabled"])) : J.value === "choice" ? (m(), j(de(Ta), {
          key: 3,
          modelValue: o.value,
          "onUpdate:modelValue": P[2] || (P[2] = (W) => o.value = W),
          label: K.value,
          options: I.value,
          disabled: !d.value,
          clearable: ""
        }, null, 8, ["modelValue", "label", "options", "disabled"])) : J.value === "colour" ? (m(), j(de(bi), {
          key: 4,
          modelValue: o.value,
          "onUpdate:modelValue": P[3] || (P[3] = (W) => o.value = W),
          label: K.value,
          disabled: !d.value
        }, null, 8, ["modelValue", "label", "disabled"])) : J.value === "number" ? (m(), j(de(Wr), {
          key: 5,
          modelValue: h.value,
          "onUpdate:modelValue": P[4] || (P[4] = (W) => h.value = W),
          label: K.value,
          type: "number",
          min: A.value.min,
          max: A.value.max,
          step: A.value.step,
          disabled: !d.value
        }, null, 8, ["modelValue", "label", "min", "max", "step", "disabled"])) : (m(), j(de(Wr), {
          key: 6,
          modelValue: o.value,
          "onUpdate:modelValue": P[5] || (P[5] = (W) => o.value = W),
          label: K.value,
          placeholder: s.custom?.resolvedStyle?.placeholder,
          disabled: !d.value
        }, null, 8, ["modelValue", "label", "placeholder", "disabled"]))
      ]),
      Q("button", {
        type: "button",
        class: da(["bind", { on: u.value, armed: n.value && !u.value }]),
        title: u.value ? `Bindung an „${i.value}“ lösen` : "An eine Variable binden",
        "aria-pressed": u.value,
        onClick: g
      }, " {x} ", 10, To)
    ], 2)) : fe("", !0);
  }
}), mi = /* @__PURE__ */ ga(So, [["__scopeId", "data-v-01463c81"]]), fo = "org.eclipse.daanse.board.app.ui.vue.composables";
let _a = !1;
function mo() {
  if (_a) return !0;
  const s = Or.INSTANCE.getEPackage(fo)?.getEClassifier(
    "VariableWrapper"
  );
  return s ? (ns.registerForReference(mi, { targetClass: s }), _a = !0, !0) : !1;
}
function Io(s) {
  for (const e of s.getEStructuralFeatures())
    No(e) && ns.registerForFeature(
      s,
      e.getName?.() ?? "",
      fi
    );
}
function No(s) {
  try {
    return s.isMany?.() === !0 || (s.getUpperBound?.() ?? 1) !== 1;
  } catch {
    return !1;
  }
}
const Oa = /* @__PURE__ */ new Map();
let Aa = !1;
function Lo() {
  if (Aa) return;
  Ri();
  const s = C.eINSTANCE;
  s.setEFactoryInstance(ua.eINSTANCE), Or.INSTANCE.set(s.getNsURI(), s), Aa = !0;
}
function Ii(s, e, t = "/ui.xmi") {
  const r = Oa.get(t);
  if (r) return r;
  try {
    Lo();
    const i = e.getNsURI();
    i && !Or.INSTANCE.has(i) && Or.INSTANCE.set(i, e);
    const u = new yi();
    u.getResourceFactoryRegistry().getExtensionToFactoryMap().set("xmi", new Di());
    const n = u.createResource(Xr.createURI(t));
    if (n.loadFromString(s), n.getContents().size() === 0) return;
    jl(n);
    const l = n.getContents().get(0);
    return Oa.set(t, l), l;
  } catch (i) {
    console.warn("[ui.vue.uimodel] UI-Modell konnte nicht gelesen werden:", i);
    return;
  }
}
const vo = { class: "settings-form" }, _o = {
  key: 1,
  class: "settings-form__empty"
}, Oo = /* @__PURE__ */ ee({
  __name: "SettingsForm",
  props: /* @__PURE__ */ vi({
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
    C.eINSTANCE, fr(li, ns), mo();
    const e = _i(s, "modelValue"), t = s;
    function r() {
      const c = Si(e.value, t.create);
      c !== e.value && (e.value = c);
    }
    Oi(r), dr(e, r);
    const i = S(() => e.value), u = pa(), n = pa(), l = S(() => {
      const c = e.value?.eClass?.();
      if (c && Io(c), t.uiModel) return Gr(t.uiModel);
      if (t.uiModelXmi && t.domainPackage) {
        const o = Ii(t.uiModelXmi, t.domainPackage, t.uiModelUri);
        if (o) return Gr(o);
      }
      const d = i.value?.eClass?.();
      if (d)
        return n.value !== d && (n.value = d, u.value = Gr(ha(d))), u.value;
    }), E = S(() => (i.value?.eClass?.().getEStructuralFeatures().length ?? 0) > 0);
    return (c, g) => (m(), b("div", vo, [
      l.value && i.value && E.value ? (m(), j(de(gi), {
        key: 0,
        "ui-model": l.value,
        model: i.value
      }, null, 8, ["ui-model", "model"])) : (m(), b("p", _o, qe(s.emptyText ?? "Für dieses Widget sind keine Einstellungen modelliert."), 1))
    ]));
  }
}), Ao = /* @__PURE__ */ ga(Oo, [["__scopeId", "data-v-6b299ad4"]]), Co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SettingsForm: Ao,
  SettingsListWidget: fi,
  VariableWrapperWidget: mi,
  adopt: pi,
  asModel: Si,
  formFor: ha,
  isModelled: di,
  kindOf: Ur,
  labelOf: Br,
  loadUIModel: Ii
}, Symbol.toStringTag, { value: "Module" })), Ca = "org.eclipse.daanse.board.app.ui.vue.uimodel", yo = "0.0.1-next.1";
async function Wo(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${Ca}: tsm runtime is not initialized`);
  e.register(Ca, Co, yo, "ui.vue.uimodel"), await void 0;
}
async function Yo(s) {
  await void 0;
}
export {
  Ao as SettingsForm,
  fi as SettingsListWidget,
  mi as VariableWrapperWidget,
  Wo as activate,
  pi as adopt,
  Si as asModel,
  Yo as deactivate,
  ha as formFor,
  di as isModelled,
  Ur as kindOf,
  Br as labelOf,
  Ii as loadUIModel
};
