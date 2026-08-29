(function(){var i="ui.vue.uimodel",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".field-row[data-v-01463c81]{display:flex;align-items:flex-start;gap:6px}.field-row__control[data-v-01463c81]{flex:1 1 auto;min-width:0}.field-row--bound[data-v-01463c81]{border-left:2px solid var(--color-brand);padding-left:6px;margin-left:-8px}.bind[data-v-01463c81]{width:24px;height:26px;flex:none;margin-top:0;font-family:var(--font-mono);font-size:var(--text-xs);font-style:italic;color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.bind[data-v-01463c81]:hover{color:var(--color-fg);border-color:var(--color-outline)}.bind.armed[data-v-01463c81]{color:var(--color-accent);border-color:var(--color-accent)}.bind.on[data-v-01463c81]{color:var(--color-brand);border-color:var(--color-brand);background-color:color-mix(in srgb,var(--color-brand) 14%,transparent)}.bind[data-v-01463c81]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.settings-form[data-v-744c04d1]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.settings-form[data-v-744c04d1] .uim-c-GroupWidget{padding-top:10px;margin-top:10px;border-top:1px solid var(--color-divider)}.settings-form[data-v-744c04d1] .uim-c-GroupWidget:first-child{padding-top:0;margin-top:0;border-top:0}.settings-form__empty[data-v-744c04d1]{margin:0;padding:12px 0;font-size:var(--text-sm);color:var(--color-dim)}\n";})();
import { inject as nt, watchEffect as di, onScopeDispose as ta, ref as br, computed as m, watch as cr, toValue as Pe, defineComponent as he, createBlock as J, createCommentVNode as Er, openBlock as L, resolveDynamicComponent as sa, mergeProps as ra, createElementBlock as G, createElementVNode as ts, createTextVNode as pi, toDisplayString as aa, unref as fe, resolveComponent as Ti, Fragment as ss, renderList as hr, createVNode as lr, provide as pr, normalizeClass as ga, mergeModels as Si, useModel as fi, onMounted as Ii, shallowRef as da, markRaw as Vr } from "vue";
import { BasicEPackage as mi, BasicEClass as A, BasicEAttribute as p, BasicEReference as S, getEcorePackage as Ht, BasicEObject as Qe, BasicEFactory as Ni, EContentAdapter as Ca, URI as xr, EPackageRegistry as Lr, BasicResourceSet as Li, XMIResourceFactory as vi, registerEcorePackage as _i } from "@emfts/core";
import { identifier as Oi } from "org.eclipse.daanse.board.app.lib.api.variable";
import { DSelect as pa, DInput as Br, DCheckbox as Ai, DColorInput as Ci } from "org.eclipse.daanse.board.app.ui.vue.controls";
var Di = Object.defineProperty, yi = (s, e, t) => e in s ? Di(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, tr = (s, e, t) => yi(s, typeof e != "symbol" ? e + "" : e, t);
const jt = class a extends mi {
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
    const e = new A();
    e.setName("UIModel"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), a.Literals.U_I_MODEL = e;
    const t = new p();
    t.setName("name"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), a.Literals.U_I_MODEL__NAME = t;
    const r = new S();
    r.setContainment(!1), r.setName("targetClasses"), r.setLowerBound(0), r.setUpperBound(-1), e.getEStructuralFeatures().push(r), a.Literals.U_I_MODEL__TARGET_CLASSES = r;
    const i = new p();
    i.setName("priority"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), a.Literals.U_I_MODEL__PRIORITY = i;
    const u = new S();
    u.setContainment(!0), u.setName("filterExpression"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), a.Literals.U_I_MODEL__FILTER_EXPRESSION = u;
    const l = new S();
    l.setContainment(!0), l.setName("styles"), l.setLowerBound(0), l.setUpperBound(-1), e.getEStructuralFeatures().push(l), a.Literals.U_I_MODEL__STYLES = l;
    const n = new S();
    n.setContainment(!0), n.setName("templates"), n.setLowerBound(0), n.setUpperBound(-1), e.getEStructuralFeatures().push(n), a.Literals.U_I_MODEL__TEMPLATES = n;
    const g = new S();
    g.setContainment(!0), g.setName("components"), g.setLowerBound(1), g.setUpperBound(-1), e.getEStructuralFeatures().push(g), a.Literals.U_I_MODEL__COMPONENTS = g;
    const c = new A();
    c.setName("Component"), c.setAbstract(!0), c.setInterface(!1), this.getEClassifiers().push(c), c.setEPackage(this), a.Literals.COMPONENT = c;
    const h = new p();
    h.setName("name"), h.setLowerBound(1), h.setUpperBound(1), c.getEStructuralFeatures().push(h), a.Literals.COMPONENT__NAME = h;
    const E = new p();
    E.setName("group"), E.setLowerBound(0), E.setUpperBound(1), c.getEStructuralFeatures().push(E), a.Literals.COMPONENT__GROUP = E;
    const o = new S();
    o.setContainment(!1), o.setName("targetClasses"), o.setLowerBound(0), o.setUpperBound(-1), c.getEStructuralFeatures().push(o), a.Literals.COMPONENT__TARGET_CLASSES = o;
    const d = new S();
    d.setContainment(!1), d.setName("styles"), d.setLowerBound(0), d.setUpperBound(-1), c.getEStructuralFeatures().push(d), a.Literals.COMPONENT__STYLES = d;
    const R = new S();
    R.setContainment(!1), R.setName("children"), R.setLowerBound(0), R.setUpperBound(-1), c.getEStructuralFeatures().push(R), a.Literals.COMPONENT__CHILDREN = R;
    const B = new A();
    B.setName("FormView"), B.setAbstract(!1), B.setInterface(!1), this.getEClassifiers().push(B), B.setEPackage(this), a.Literals.FORM_VIEW = B;
    const X = new S();
    X.setContainment(!0), X.setName("fields"), X.setLowerBound(0), X.setUpperBound(-1), B.getEStructuralFeatures().push(X), a.Literals.FORM_VIEW__FIELDS = X;
    const U = new S();
    U.setContainment(!0), U.setName("validations"), U.setLowerBound(0), U.setUpperBound(-1), B.getEStructuralFeatures().push(U), a.Literals.FORM_VIEW__VALIDATIONS = U;
    const z = new S();
    z.setContainment(!0), z.setName("validationMappers"), z.setLowerBound(0), z.setUpperBound(-1), B.getEStructuralFeatures().push(z), a.Literals.FORM_VIEW__VALIDATION_MAPPERS = z;
    const K = new p();
    K.setName("mapperOrder"), K.setLowerBound(0), K.setUpperBound(1), B.getEStructuralFeatures().push(K), a.Literals.FORM_VIEW__MAPPER_ORDER = K;
    const te = new A();
    te.setName("TableView"), te.setAbstract(!1), te.setInterface(!1), this.getEClassifiers().push(te), te.setEPackage(this), a.Literals.TABLE_VIEW = te;
    const _ = new S();
    _.setContainment(!0), _.setName("tableStyle"), _.setLowerBound(1), _.setUpperBound(1), te.getEStructuralFeatures().push(_), a.Literals.TABLE_VIEW__TABLE_STYLE = _;
    const y = new A();
    y.setName("SectionView"), y.setAbstract(!1), y.setInterface(!1), this.getEClassifiers().push(y), y.setEPackage(this), a.Literals.SECTION_VIEW = y;
    const V = new S();
    V.setContainment(!0), V.setName("sections"), V.setLowerBound(1), V.setUpperBound(-1), y.getEStructuralFeatures().push(V), a.Literals.SECTION_VIEW__SECTIONS = V;
    const Je = new A();
    Je.setName("TabView"), Je.setAbstract(!1), Je.setInterface(!1), this.getEClassifiers().push(Je), Je.setEPackage(this), a.Literals.TAB_VIEW = Je;
    const Et = new S();
    Et.setContainment(!0), Et.setName("tabs"), Et.setLowerBound(1), Et.setUpperBound(-1), Je.getEStructuralFeatures().push(Et), a.Literals.TAB_VIEW__TABS = Et;
    const Ze = new A();
    Ze.setName("SummaryView"), Ze.setAbstract(!1), Ze.setInterface(!1), this.getEClassifiers().push(Ze), Ze.setEPackage(this), a.Literals.SUMMARY_VIEW = Ze;
    const ht = new S();
    ht.setContainment(!0), ht.setName("summaryFields"), ht.setLowerBound(1), ht.setUpperBound(-1), Ze.getEStructuralFeatures().push(ht), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS = ht;
    const be = new A();
    be.setName("MasterDetail"), be.setAbstract(!1), be.setInterface(!1), this.getEClassifiers().push(be), be.setEPackage(this), a.Literals.MASTER_DETAIL = be;
    const gt = new S();
    gt.setContainment(!0), gt.setName("master"), gt.setLowerBound(1), gt.setUpperBound(1), be.getEStructuralFeatures().push(gt), a.Literals.MASTER_DETAIL__MASTER = gt;
    const dt = new S();
    dt.setContainment(!0), dt.setName("detail"), dt.setLowerBound(1), dt.setUpperBound(1), be.getEStructuralFeatures().push(dt), a.Literals.MASTER_DETAIL__DETAIL = dt;
    const Q = new A();
    Q.setName("WidgetComponent"), Q.setAbstract(!0), Q.setInterface(!1), this.getEClassifiers().push(Q), Q.setEPackage(this), a.Literals.WIDGET_COMPONENT = Q;
    const pt = new S();
    pt.setContainment(!1), pt.setName("feature"), pt.setLowerBound(0), pt.setUpperBound(1), Q.getEStructuralFeatures().push(pt), a.Literals.WIDGET_COMPONENT__FEATURE = pt;
    const is = new p();
    is.setName("label"), is.setLowerBound(0), is.setUpperBound(1), Q.getEStructuralFeatures().push(is), a.Literals.WIDGET_COMPONENT__LABEL = is;
    const us = new p();
    us.setName("placeholder"), us.setLowerBound(0), us.setUpperBound(1), Q.getEStructuralFeatures().push(us), a.Literals.WIDGET_COMPONENT__PLACEHOLDER = us;
    const ls = new p();
    ls.setName("readOnly"), ls.setLowerBound(0), ls.setUpperBound(1), Q.getEStructuralFeatures().push(ls), a.Literals.WIDGET_COMPONENT__READ_ONLY = ls;
    const ns = new p();
    ns.setName("required"), ns.setLowerBound(0), ns.setUpperBound(1), Q.getEStructuralFeatures().push(ns), a.Literals.WIDGET_COMPONENT__REQUIRED = ns;
    const Tt = new S();
    Tt.setContainment(!0), Tt.setName("visibilityCondition"), Tt.setLowerBound(0), Tt.setUpperBound(1), Q.getEStructuralFeatures().push(Tt), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION = Tt;
    const St = new S();
    St.setContainment(!0), St.setName("validations"), St.setLowerBound(0), St.setUpperBound(-1), Q.getEStructuralFeatures().push(St), a.Literals.WIDGET_COMPONENT__VALIDATIONS = St;
    const ft = new S();
    ft.setContainment(!0), ft.setName("validationMappers"), ft.setLowerBound(0), ft.setUpperBound(-1), Q.getEStructuralFeatures().push(ft), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS = ft;
    const It = new S();
    It.setContainment(!0), It.setName("bindings"), It.setLowerBound(0), It.setUpperBound(-1), Q.getEStructuralFeatures().push(It), a.Literals.WIDGET_COMPONENT__BINDINGS = It;
    const Me = new A();
    Me.setName("PropertyBinding"), Me.setAbstract(!1), Me.setInterface(!1), this.getEClassifiers().push(Me), Me.setEPackage(this), a.Literals.PROPERTY_BINDING = Me;
    const os = new p();
    os.setName("property"), os.setLowerBound(1), os.setUpperBound(1), Me.getEStructuralFeatures().push(os), a.Literals.PROPERTY_BINDING__PROPERTY = os;
    const mt = new S();
    mt.setContainment(!0), mt.setName("expression"), mt.setLowerBound(1), mt.setUpperBound(1), Me.getEStructuralFeatures().push(mt), a.Literals.PROPERTY_BINDING__EXPRESSION = mt;
    const De = new A();
    De.setName("InputWidget"), De.setAbstract(!1), De.setInterface(!1), this.getEClassifiers().push(De), De.setEPackage(this), a.Literals.INPUT_WIDGET = De;
    const cs = new p();
    cs.setName("maxLength"), cs.setLowerBound(0), cs.setUpperBound(1), De.getEStructuralFeatures().push(cs), a.Literals.INPUT_WIDGET__MAX_LENGTH = cs;
    const Es = new p();
    Es.setName("value"), Es.setLowerBound(0), Es.setUpperBound(1), De.getEStructuralFeatures().push(Es), a.Literals.INPUT_WIDGET__VALUE = Es;
    const hs = new p();
    hs.setName("password"), hs.setLowerBound(0), hs.setUpperBound(1), De.getEStructuralFeatures().push(hs), a.Literals.INPUT_WIDGET__PASSWORD = hs;
    const ye = new A();
    ye.setName("TextAreaWidget"), ye.setAbstract(!1), ye.setInterface(!1), this.getEClassifiers().push(ye), ye.setEPackage(this), a.Literals.TEXT_AREA_WIDGET = ye;
    const gs = new p();
    gs.setName("rows"), gs.setLowerBound(0), gs.setUpperBound(1), ye.getEStructuralFeatures().push(gs), a.Literals.TEXT_AREA_WIDGET__ROWS = gs;
    const ds = new p();
    ds.setName("maxLength"), ds.setLowerBound(0), ds.setUpperBound(1), ye.getEStructuralFeatures().push(ds), a.Literals.TEXT_AREA_WIDGET__MAX_LENGTH = ds;
    const ps = new p();
    ps.setName("value"), ps.setLowerBound(0), ps.setUpperBound(1), ye.getEStructuralFeatures().push(ps), a.Literals.TEXT_AREA_WIDGET__VALUE = ps;
    const me = new A();
    me.setName("NumberWidget"), me.setAbstract(!1), me.setInterface(!1), this.getEClassifiers().push(me), me.setEPackage(this), a.Literals.NUMBER_WIDGET = me;
    const Ts = new p();
    Ts.setName("min"), Ts.setLowerBound(0), Ts.setUpperBound(1), me.getEStructuralFeatures().push(Ts), a.Literals.NUMBER_WIDGET__MIN = Ts;
    const Ss = new p();
    Ss.setName("max"), Ss.setLowerBound(0), Ss.setUpperBound(1), me.getEStructuralFeatures().push(Ss), a.Literals.NUMBER_WIDGET__MAX = Ss;
    const fs = new p();
    fs.setName("step"), fs.setLowerBound(0), fs.setUpperBound(1), me.getEStructuralFeatures().push(fs), a.Literals.NUMBER_WIDGET__STEP = fs;
    const Is = new p();
    Is.setName("value"), Is.setLowerBound(0), Is.setUpperBound(1), me.getEStructuralFeatures().push(Is), a.Literals.NUMBER_WIDGET__VALUE = Is;
    const Ue = new A();
    Ue.setName("CheckboxWidget"), Ue.setAbstract(!1), Ue.setInterface(!1), this.getEClassifiers().push(Ue), Ue.setEPackage(this), a.Literals.CHECKBOX_WIDGET = Ue;
    const ms = new p();
    ms.setName("asToggle"), ms.setLowerBound(0), ms.setUpperBound(1), Ue.getEStructuralFeatures().push(ms), a.Literals.CHECKBOX_WIDGET__AS_TOGGLE = ms;
    const Ns = new p();
    Ns.setName("value"), Ns.setLowerBound(0), Ns.setUpperBound(1), Ue.getEStructuralFeatures().push(Ns), a.Literals.CHECKBOX_WIDGET__VALUE = Ns;
    const Ne = new A();
    Ne.setName("DateWidget"), Ne.setAbstract(!1), Ne.setInterface(!1), this.getEClassifiers().push(Ne), Ne.setEPackage(this), a.Literals.DATE_WIDGET = Ne;
    const Ls = new p();
    Ls.setName("withTime"), Ls.setLowerBound(0), Ls.setUpperBound(1), Ne.getEStructuralFeatures().push(Ls), a.Literals.DATE_WIDGET__WITH_TIME = Ls;
    const vs = new p();
    vs.setName("format"), vs.setLowerBound(0), vs.setUpperBound(1), Ne.getEStructuralFeatures().push(vs), a.Literals.DATE_WIDGET__FORMAT = vs;
    const Nt = new S();
    Nt.setContainment(!1), Nt.setName("constrains"), Nt.setLowerBound(0), Nt.setUpperBound(1), Ne.getEStructuralFeatures().push(Nt), a.Literals.DATE_WIDGET__CONSTRAINS = Nt;
    const _s = new p();
    _s.setName("value"), _s.setLowerBound(0), _s.setUpperBound(1), Ne.getEStructuralFeatures().push(_s), a.Literals.DATE_WIDGET__VALUE = _s;
    const Re = new A();
    Re.setName("ComboboxWidget"), Re.setAbstract(!1), Re.setInterface(!1), this.getEClassifiers().push(Re), Re.setEPackage(this), a.Literals.COMBOBOX_WIDGET = Re;
    const Lt = new S();
    Lt.setContainment(!0), Lt.setName("optionLabel"), Lt.setLowerBound(0), Lt.setUpperBound(1), Re.getEStructuralFeatures().push(Lt), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL = Lt;
    const Os = new p();
    Os.setName("minSearchLength"), Os.setLowerBound(0), Os.setUpperBound(1), Re.getEStructuralFeatures().push(Os), a.Literals.COMBOBOX_WIDGET__MIN_SEARCH_LENGTH = Os;
    const As = new p();
    As.setName("multiSelect"), As.setLowerBound(0), As.setUpperBound(1), Re.getEStructuralFeatures().push(As), a.Literals.COMBOBOX_WIDGET__MULTI_SELECT = As;
    const Le = new A();
    Le.setName("SelectWidget"), Le.setAbstract(!1), Le.setInterface(!1), this.getEClassifiers().push(Le), Le.setEPackage(this), a.Literals.SELECT_WIDGET = Le;
    const vt = new S();
    vt.setContainment(!0), vt.setName("optionLabel"), vt.setLowerBound(0), vt.setUpperBound(1), Le.getEStructuralFeatures().push(vt), a.Literals.SELECT_WIDGET__OPTION_LABEL = vt;
    const Cs = new p();
    Cs.setName("multiSelect"), Cs.setLowerBound(0), Cs.setUpperBound(1), Le.getEStructuralFeatures().push(Cs), a.Literals.SELECT_WIDGET__MULTI_SELECT = Cs;
    const Ds = new p();
    Ds.setName("asButtonGroup"), Ds.setLowerBound(0), Ds.setUpperBound(1), Le.getEStructuralFeatures().push(Ds), a.Literals.SELECT_WIDGET__AS_BUTTON_GROUP = Ds;
    const ys = new p();
    ys.setName("values"), ys.setLowerBound(0), ys.setUpperBound(-1), Le.getEStructuralFeatures().push(ys), a.Literals.SELECT_WIDGET__VALUES = ys;
    const ge = new A();
    ge.setName("AllFeatures"), ge.setAbstract(!1), ge.setInterface(!1), this.getEClassifiers().push(ge), ge.setEPackage(this), a.Literals.ALL_FEATURES = ge;
    const _t = new S();
    _t.setContainment(!1), _t.setName("with"), _t.setLowerBound(0), _t.setUpperBound(-1), ge.getEStructuralFeatures().push(_t), a.Literals.ALL_FEATURES__WITH = _t;
    const Ot = new S();
    Ot.setContainment(!1), Ot.setName("eType"), Ot.setLowerBound(0), Ot.setUpperBound(-1), ge.getEStructuralFeatures().push(Ot), a.Literals.ALL_FEATURES__E_TYPE = Ot;
    const At = new S();
    At.setContainment(!0), At.setName("filter"), At.setLowerBound(0), At.setUpperBound(1), ge.getEStructuralFeatures().push(At), a.Literals.ALL_FEATURES__FILTER = At;
    const Ct = new S();
    Ct.setContainment(!1), Ct.setName("template"), Ct.setLowerBound(0), Ct.setUpperBound(1), ge.getEStructuralFeatures().push(Ct), a.Literals.ALL_FEATURES__TEMPLATE = Ct;
    const Dt = new S();
    Dt.setContainment(!0), Dt.setName("cases"), Dt.setLowerBound(0), Dt.setUpperBound(-1), ge.getEStructuralFeatures().push(Dt), a.Literals.ALL_FEATURES__CASES = Dt;
    const Rs = new p();
    Rs.setName("priority"), Rs.setLowerBound(0), Rs.setUpperBound(1), ge.getEStructuralFeatures().push(Rs), a.Literals.ALL_FEATURES__PRIORITY = Rs;
    const Ve = new A();
    Ve.setName("TemplateCase"), Ve.setAbstract(!1), Ve.setInterface(!1), this.getEClassifiers().push(Ve), Ve.setEPackage(this), a.Literals.TEMPLATE_CASE = Ve;
    const yt = new S();
    yt.setContainment(!0), yt.setName("when"), yt.setLowerBound(0), yt.setUpperBound(1), Ve.getEStructuralFeatures().push(yt), a.Literals.TEMPLATE_CASE__WHEN = yt;
    const Rt = new S();
    Rt.setContainment(!1), Rt.setName("widget"), Rt.setLowerBound(1), Rt.setUpperBound(1), Ve.getEStructuralFeatures().push(Rt), a.Literals.TEMPLATE_CASE__WIDGET = Rt;
    const Be = new A();
    Be.setName("GroupWidget"), Be.setAbstract(!1), Be.setInterface(!1), this.getEClassifiers().push(Be), Be.setEPackage(this), a.Literals.GROUP_WIDGET = Be;
    const wt = new S();
    wt.setContainment(!0), wt.setName("fields"), wt.setLowerBound(0), wt.setUpperBound(-1), Be.getEStructuralFeatures().push(wt), a.Literals.GROUP_WIDGET__FIELDS = wt;
    const ws = new p();
    ws.setName("layout"), ws.setLowerBound(0), ws.setUpperBound(1), Be.getEStructuralFeatures().push(ws), a.Literals.GROUP_WIDGET__LAYOUT = ws;
    const we = new A();
    we.setName("Conditional"), we.setAbstract(!1), we.setInterface(!1), this.getEClassifiers().push(we), we.setEPackage(this), a.Literals.CONDITIONAL = we;
    const Ft = new S();
    Ft.setContainment(!0), Ft.setName("condition"), Ft.setLowerBound(1), Ft.setUpperBound(1), we.getEStructuralFeatures().push(Ft), a.Literals.CONDITIONAL__CONDITION = Ft;
    const Pt = new S();
    Pt.setContainment(!0), Pt.setName("then"), Pt.setLowerBound(0), Pt.setUpperBound(-1), we.getEStructuralFeatures().push(Pt), a.Literals.CONDITIONAL__THEN = Pt;
    const bt = new S();
    bt.setContainment(!0), bt.setName("else"), bt.setLowerBound(0), bt.setUpperBound(-1), we.getEStructuralFeatures().push(bt), a.Literals.CONDITIONAL__ELSE = bt;
    const Fe = new A();
    Fe.setName("ForEach"), Fe.setAbstract(!1), Fe.setInterface(!1), this.getEClassifiers().push(Fe), Fe.setEPackage(this), a.Literals.FOR_EACH = Fe;
    const Mt = new S();
    Mt.setContainment(!0), Mt.setName("items"), Mt.setLowerBound(1), Mt.setUpperBound(1), Fe.getEStructuralFeatures().push(Mt), a.Literals.FOR_EACH__ITEMS = Mt;
    const Ut = new S();
    Ut.setContainment(!0), Ut.setName("body"), Ut.setLowerBound(0), Ut.setUpperBound(-1), Fe.getEStructuralFeatures().push(Ut), a.Literals.FOR_EACH__BODY = Ut;
    const Fs = new p();
    Fs.setName("emptyText"), Fs.setLowerBound(0), Fs.setUpperBound(1), Fe.getEStructuralFeatures().push(Fs), a.Literals.FOR_EACH__EMPTY_TEXT = Fs;
    const Ge = new A();
    Ge.setName("ReferenceLinkWidget"), Ge.setAbstract(!1), Ge.setInterface(!1), this.getEClassifiers().push(Ge), Ge.setEPackage(this), a.Literals.REFERENCE_LINK_WIDGET = Ge;
    const Vt = new S();
    Vt.setContainment(!0), Vt.setName("displayExpression"), Vt.setLowerBound(0), Vt.setUpperBound(1), Ge.getEStructuralFeatures().push(Vt), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION = Vt;
    const Ps = new p();
    Ps.setName("targetRoute"), Ps.setLowerBound(0), Ps.setUpperBound(1), Ge.getEStructuralFeatures().push(Ps), a.Literals.REFERENCE_LINK_WIDGET__TARGET_ROUTE = Ps;
    const ve = new A();
    ve.setName("UIModelOverlay"), ve.setAbstract(!1), ve.setInterface(!1), this.getEClassifiers().push(ve), ve.setEPackage(this), a.Literals.U_I_MODEL_OVERLAY = ve;
    const bs = new p();
    bs.setName("name"), bs.setLowerBound(0), bs.setUpperBound(1), ve.getEStructuralFeatures().push(bs), a.Literals.U_I_MODEL_OVERLAY__NAME = bs;
    const Ms = new p();
    Ms.setName("priority"), Ms.setLowerBound(0), Ms.setUpperBound(1), ve.getEStructuralFeatures().push(Ms), a.Literals.U_I_MODEL_OVERLAY__PRIORITY = Ms;
    const Bt = new S();
    Bt.setContainment(!0), Bt.setName("templates"), Bt.setLowerBound(0), Bt.setUpperBound(-1), ve.getEStructuralFeatures().push(Bt), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES = Bt;
    const Gt = new S();
    Gt.setContainment(!0), Gt.setName("cases"), Gt.setLowerBound(0), Gt.setUpperBound(-1), ve.getEStructuralFeatures().push(Gt), a.Literals.U_I_MODEL_OVERLAY__CASES = Gt;
    const We = new A();
    We.setName("Style"), We.setAbstract(!0), We.setInterface(!0), this.getEClassifiers().push(We), We.setEPackage(this), a.Literals.STYLE = We;
    const Us = new p();
    Us.setName("name"), Us.setLowerBound(0), Us.setUpperBound(1), We.getEStructuralFeatures().push(Us), a.Literals.STYLE__NAME = Us;
    const Vs = new p();
    Vs.setName("group"), Vs.setLowerBound(0), Vs.setUpperBound(1), We.getEStructuralFeatures().push(Vs), a.Literals.STYLE__GROUP = Vs;
    const _e = new A();
    _e.setName("BaseStyle"), _e.setAbstract(!0), _e.setInterface(!1), this.getEClassifiers().push(_e), _e.setEPackage(this), a.Literals.BASE_STYLE = _e;
    const Wt = new S();
    Wt.setContainment(!1), Wt.setName("extends"), Wt.setLowerBound(0), Wt.setUpperBound(1), _e.getEStructuralFeatures().push(Wt), a.Literals.BASE_STYLE__EXTENDS = Wt;
    const Bs = new p();
    Bs.setName("css"), Bs.setLowerBound(0), Bs.setUpperBound(1), _e.getEStructuralFeatures().push(Bs), a.Literals.BASE_STYLE__CSS = Bs;
    const Gs = new p();
    Gs.setName("vueComponent"), Gs.setLowerBound(0), Gs.setUpperBound(1), _e.getEStructuralFeatures().push(Gs), a.Literals.BASE_STYLE__VUE_COMPONENT = Gs;
    const Yt = new S();
    Yt.setContainment(!0), Yt.setName("visibilityCondition"), Yt.setLowerBound(0), Yt.setUpperBound(1), _e.getEStructuralFeatures().push(Yt), a.Literals.BASE_STYLE__VISIBILITY_CONDITION = Yt;
    const Ye = new A();
    Ye.setName("LayoutStyle"), Ye.setAbstract(!1), Ye.setInterface(!1), this.getEClassifiers().push(Ye), Ye.setEPackage(this), a.Literals.LAYOUT_STYLE = Ye;
    const Ws = new p();
    Ws.setName("layout"), Ws.setLowerBound(0), Ws.setUpperBound(1), Ye.getEStructuralFeatures().push(Ws), a.Literals.LAYOUT_STYLE__LAYOUT = Ws;
    const Ys = new p();
    Ys.setName("order"), Ys.setLowerBound(0), Ys.setUpperBound(1), Ye.getEStructuralFeatures().push(Ys), a.Literals.LAYOUT_STYLE__ORDER = Ys;
    const Se = new A();
    Se.setName("WidgetStyle"), Se.setAbstract(!1), Se.setInterface(!1), this.getEClassifiers().push(Se), Se.setEPackage(this), a.Literals.WIDGET_STYLE = Se;
    const $t = new S();
    $t.setContainment(!1), $t.setName("feature"), $t.setLowerBound(0), $t.setUpperBound(1), Se.getEStructuralFeatures().push($t), a.Literals.WIDGET_STYLE__FEATURE = $t;
    const $s = new p();
    $s.setName("widgetType"), $s.setLowerBound(0), $s.setUpperBound(1), Se.getEStructuralFeatures().push($s), a.Literals.WIDGET_STYLE__WIDGET_TYPE = $s;
    const xs = new p();
    xs.setName("label"), xs.setLowerBound(0), xs.setUpperBound(1), Se.getEStructuralFeatures().push(xs), a.Literals.WIDGET_STYLE__LABEL = xs;
    const ks = new p();
    ks.setName("readOnly"), ks.setLowerBound(0), ks.setUpperBound(1), Se.getEStructuralFeatures().push(ks), a.Literals.WIDGET_STYLE__READ_ONLY = ks;
    const Xs = new p();
    Xs.setName("order"), Xs.setLowerBound(0), Xs.setUpperBound(1), Se.getEStructuralFeatures().push(Xs), a.Literals.WIDGET_STYLE__ORDER = Xs;
    const et = new A();
    et.setName("TableStyle"), et.setAbstract(!1), et.setInterface(!1), this.getEClassifiers().push(et), et.setEPackage(this), a.Literals.TABLE_STYLE = et;
    const xt = new S();
    xt.setContainment(!0), xt.setName("columns"), xt.setLowerBound(1), xt.setUpperBound(-1), et.getEStructuralFeatures().push(xt), a.Literals.TABLE_STYLE__COLUMNS = xt;
    const $e = new A();
    $e.setName("Expression"), $e.setAbstract(!1), $e.setInterface(!1), this.getEClassifiers().push($e), $e.setEPackage(this), a.Literals.EXPRESSION = $e;
    const Hs = new p();
    Hs.setName("language"), Hs.setLowerBound(1), Hs.setUpperBound(1), $e.getEStructuralFeatures().push(Hs), a.Literals.EXPRESSION__LANGUAGE = Hs;
    const js = new p();
    js.setName("body"), js.setLowerBound(1), js.setUpperBound(1), $e.getEStructuralFeatures().push(js), a.Literals.EXPRESSION__BODY = js;
    const xe = new A();
    xe.setName("ValidationExpression"), xe.setAbstract(!1), xe.setInterface(!1), this.getEClassifiers().push(xe), xe.setEPackage(this), a.Literals.VALIDATION_EXPRESSION = xe;
    const qs = new p();
    qs.setName("defaultMessage"), qs.setLowerBound(0), qs.setUpperBound(1), xe.getEStructuralFeatures().push(qs), a.Literals.VALIDATION_EXPRESSION__DEFAULT_MESSAGE = qs;
    const Ks = new p();
    Ks.setName("severity"), Ks.setLowerBound(0), Ks.setUpperBound(1), xe.getEStructuralFeatures().push(Ks), a.Literals.VALIDATION_EXPRESSION__SEVERITY = Ks;
    const se = new A();
    se.setName("ValidationMessageMapper"), se.setAbstract(!1), se.setInterface(!1), this.getEClassifiers().push(se), se.setEPackage(this), a.Literals.VALIDATION_MESSAGE_MAPPER = se;
    const zs = new p();
    zs.setName("order"), zs.setLowerBound(0), zs.setUpperBound(1), se.getEStructuralFeatures().push(zs), a.Literals.VALIDATION_MESSAGE_MAPPER__ORDER = zs;
    const Qs = new p();
    Qs.setName("matchCode"), Qs.setLowerBound(0), Qs.setUpperBound(1), se.getEStructuralFeatures().push(Qs), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_CODE = Qs;
    const Js = new p();
    Js.setName("matchSeverity"), Js.setLowerBound(0), Js.setUpperBound(1), se.getEStructuralFeatures().push(Js), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_SEVERITY = Js;
    const kt = new S();
    kt.setContainment(!0), kt.setName("matchExpression"), kt.setLowerBound(0), kt.setUpperBound(1), se.getEStructuralFeatures().push(kt), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION = kt;
    const Zs = new p();
    Zs.setName("mappedText"), Zs.setLowerBound(0), Zs.setUpperBound(1), se.getEStructuralFeatures().push(Zs), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT = Zs;
    const Xt = new S();
    Xt.setContainment(!0), Xt.setName("mappedTextExpression"), Xt.setLowerBound(0), Xt.setUpperBound(1), se.getEStructuralFeatures().push(Xt), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION = Xt;
    const er = new p();
    er.setName("mappedSeverity"), er.setLowerBound(0), er.setUpperBound(1), se.getEStructuralFeatures().push(er), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_SEVERITY = er, a.Literals.FORM_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.TABLE_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.SECTION_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.TAB_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.SUMMARY_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.MASTER_DETAIL.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.WIDGET_COMPONENT.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.INPUT_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.TEXT_AREA_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.NUMBER_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.CHECKBOX_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.DATE_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.COMBOBOX_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.SELECT_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.ALL_FEATURES.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.GROUP_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.FOR_EACH.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.REFERENCE_LINK_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.BASE_STYLE.getESuperTypes().push(a.Literals.STYLE), a.Literals.LAYOUT_STYLE.getESuperTypes().push(a.Literals.BASE_STYLE), a.Literals.WIDGET_STYLE.getESuperTypes().push(a.Literals.BASE_STYLE), a.Literals.TABLE_STYLE.getESuperTypes().push(a.Literals.WIDGET_STYLE), a.Literals.VALIDATION_EXPRESSION.getESuperTypes().push(a.Literals.EXPRESSION), a.Literals.U_I_MODEL__TARGET_CLASSES.setEType(Ht().getEClassifier("EClass")), a.Literals.U_I_MODEL__FILTER_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.U_I_MODEL__STYLES.setEType(a.Literals.BASE_STYLE), a.Literals.U_I_MODEL__TEMPLATES.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.U_I_MODEL__COMPONENTS.setEType(a.Literals.COMPONENT), a.Literals.COMPONENT__TARGET_CLASSES.setEType(Ht().getEClassifier("EClass")), a.Literals.COMPONENT__STYLES.setEType(a.Literals.BASE_STYLE), a.Literals.COMPONENT__CHILDREN.setEType(a.Literals.COMPONENT), a.Literals.FORM_VIEW__FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.FORM_VIEW__VALIDATIONS.setEType(a.Literals.VALIDATION_EXPRESSION), a.Literals.FORM_VIEW__VALIDATION_MAPPERS.setEType(a.Literals.VALIDATION_MESSAGE_MAPPER), a.Literals.TABLE_VIEW__TABLE_STYLE.setEType(a.Literals.TABLE_STYLE), a.Literals.SECTION_VIEW__SECTIONS.setEType(a.Literals.FORM_VIEW), a.Literals.TAB_VIEW__TABS.setEType(a.Literals.COMPONENT), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.MASTER_DETAIL__MASTER.setEType(a.Literals.TABLE_VIEW), a.Literals.MASTER_DETAIL__DETAIL.setEType(a.Literals.COMPONENT), a.Literals.WIDGET_COMPONENT__FEATURE.setEType(Ht().getEClassifier("EStructuralFeature")), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.WIDGET_COMPONENT__VALIDATIONS.setEType(a.Literals.VALIDATION_EXPRESSION), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS.setEType(a.Literals.VALIDATION_MESSAGE_MAPPER), a.Literals.WIDGET_COMPONENT__BINDINGS.setEType(a.Literals.PROPERTY_BINDING), a.Literals.PROPERTY_BINDING__EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.DATE_WIDGET__CONSTRAINS.setEType(a.Literals.EXPRESSION), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL.setEType(a.Literals.EXPRESSION), a.Literals.SELECT_WIDGET__OPTION_LABEL.setEType(a.Literals.EXPRESSION), a.Literals.ALL_FEATURES__WITH.setEType(Ht().getEClassifier("EStructuralFeature")), a.Literals.ALL_FEATURES__E_TYPE.setEType(Ht().getEClassifier("EClassifier")), a.Literals.ALL_FEATURES__FILTER.setEType(a.Literals.EXPRESSION), a.Literals.ALL_FEATURES__TEMPLATE.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.ALL_FEATURES__CASES.setEType(a.Literals.TEMPLATE_CASE), a.Literals.TEMPLATE_CASE__WHEN.setEType(a.Literals.EXPRESSION), a.Literals.TEMPLATE_CASE__WIDGET.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.GROUP_WIDGET__FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL__CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.CONDITIONAL__THEN.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL__ELSE.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.FOR_EACH__ITEMS.setEType(a.Literals.EXPRESSION), a.Literals.FOR_EACH__BODY.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.U_I_MODEL_OVERLAY__CASES.setEType(a.Literals.TEMPLATE_CASE), a.Literals.BASE_STYLE__EXTENDS.setEType(a.Literals.BASE_STYLE), a.Literals.BASE_STYLE__VISIBILITY_CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.WIDGET_STYLE__FEATURE.setEType(Ht().getEClassifier("EStructuralFeature")), a.Literals.TABLE_STYLE__COLUMNS.setEType(a.Literals.WIDGET_STYLE), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION.setEType(a.Literals.EXPRESSION);
  }
};
tr(jt, "eNAME", "uimodel"), tr(jt, "eNS_URI", "http://uimodel/1.0"), tr(jt, "eNS_PREFIX", "uimodel"), // Singleton instance
tr(jt, "_instance"), /**
* Literals for quick access to metaclasses and features
*/
tr(jt, "Literals", {
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
let v = jt;
var Ri = Object.defineProperty, wi = (s, e, t) => e in s ? Ri(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Z = (s, e, t) => wi(s, typeof e != "symbol" ? e + "" : e, t);
const ke = class f extends Qe {
  constructor() {
    super(...arguments), Z(this, "_name"), Z(this, "_targetClasses", []), Z(this, "_priority", 0), Z(this, "_filterExpression"), Z(this, "_styles", []), Z(this, "_templates", []), Z(this, "_components", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.U_I_MODEL;
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
      getFeature: () => this.eClass().getEStructuralFeature(f.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(f.TARGET_CLASSES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.TARGET_CLASSES,
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
      getFeature: () => this.eClass().getEStructuralFeature(f.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.PRIORITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(f.FILTER_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.FILTER_EXPRESSION,
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
      getFeature: () => this.eClass().getEStructuralFeature(f.STYLES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.STYLES,
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
      getFeature: () => this.eClass().getEStructuralFeature(f.TEMPLATES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.TEMPLATES,
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
      getFeature: () => this.eClass().getEStructuralFeature(f.COMPONENTS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.COMPONENTS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case f.NAME:
        return this.name;
      case f.TARGET_CLASSES:
        return this.targetClasses;
      case f.PRIORITY:
        return this.priority;
      case f.FILTER_EXPRESSION:
        return this.filterExpression;
      case f.STYLES:
        return this.styles;
      case f.TEMPLATES:
        return this.templates;
      case f.COMPONENTS:
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
      case f.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case f.TARGET_CLASSES:
        this.targetClasses = t, super.eSet(e, t);
        break;
      case f.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case f.FILTER_EXPRESSION:
        this.filterExpression = t, super.eSet(e, t);
        break;
      case f.STYLES:
        this.styles = t, super.eSet(e, t);
        break;
      case f.TEMPLATES:
        this.templates = t, super.eSet(e, t);
        break;
      case f.COMPONENTS:
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
      case f.NAME:
        return this._name !== void 0;
      case f.TARGET_CLASSES:
        return this._targetClasses !== void 0 && this._targetClasses.length > 0;
      case f.PRIORITY:
        return this._priority !== 0;
      case f.FILTER_EXPRESSION:
        return this._filterExpression !== void 0;
      case f.STYLES:
        return this._styles !== void 0 && this._styles.length > 0;
      case f.TEMPLATES:
        return this._templates !== void 0 && this._templates.length > 0;
      case f.COMPONENTS:
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
      case f.NAME:
        this._name = void 0;
        return;
      case f.TARGET_CLASSES:
        this._targetClasses = [];
        return;
      case f.PRIORITY:
        this._priority = 0;
        return;
      case f.FILTER_EXPRESSION:
        this._filterExpression = void 0;
        return;
      case f.STYLES:
        this._styles = [];
        return;
      case f.TEMPLATES:
        this._templates = [];
        return;
      case f.COMPONENTS:
        this._components = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Z(ke, "NAME", 0), Z(ke, "TARGET_CLASSES", 1), Z(ke, "PRIORITY", 2), Z(ke, "FILTER_EXPRESSION", 3), Z(ke, "STYLES", 4), Z(ke, "TEMPLATES", 5), Z(ke, "COMPONENTS", 6);
let Fi = ke;
const Gr = {
  FIELD_THEN_FORM: "FIELD_THEN_FORM"
};
var Pi = Object.defineProperty, bi = (s, e, t) => e in s ? Pi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ae = (s, e, t) => bi(s, typeof e != "symbol" ? e + "" : e, t);
const qt = class C extends Qe {
  constructor() {
    super(...arguments), Ae(this, "_name", ""), Ae(this, "_group"), Ae(this, "_targetClasses", []), Ae(this, "_styles", []), Ae(this, "_children", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.COMPONENT;
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
      getFeature: () => this.eClass().getEStructuralFeature(C.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.GROUP,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.TARGET_CLASSES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.TARGET_CLASSES,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.STYLES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.STYLES,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.CHILDREN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.CHILDREN,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case C.NAME:
        return this.name;
      case C.GROUP:
        return this.group;
      case C.TARGET_CLASSES:
        return this.targetClasses;
      case C.STYLES:
        return this.styles;
      case C.CHILDREN:
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
      case C.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case C.GROUP:
        this.group = t, super.eSet(e, t);
        break;
      case C.TARGET_CLASSES:
        this.targetClasses = t, super.eSet(e, t);
        break;
      case C.STYLES:
        this.styles = t, super.eSet(e, t);
        break;
      case C.CHILDREN:
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
      case C.NAME:
        return this._name !== "";
      case C.GROUP:
        return this._group !== void 0;
      case C.TARGET_CLASSES:
        return this._targetClasses !== void 0 && this._targetClasses.length > 0;
      case C.STYLES:
        return this._styles !== void 0 && this._styles.length > 0;
      case C.CHILDREN:
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
      case C.NAME:
        this._name = "";
        return;
      case C.GROUP:
        this._group = void 0;
        return;
      case C.TARGET_CLASSES:
        this._targetClasses = [];
        return;
      case C.STYLES:
        this._styles = [];
        return;
      case C.CHILDREN:
        this._children = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ae(qt, "NAME", 0), Ae(qt, "GROUP", 1), Ae(qt, "TARGET_CLASSES", 2), Ae(qt, "STYLES", 3), Ae(qt, "CHILDREN", 4);
let ct = qt;
var Mi = Object.defineProperty, Ui = (s, e, t) => e in s ? Mi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, He = (s, e, t) => Ui(s, typeof e != "symbol" ? e + "" : e, t);
const sr = class w extends ct {
  constructor() {
    super(...arguments), He(this, "_fields", []), He(this, "_validations", []), He(this, "_validationMappers", []), He(this, "_mapperOrder", Gr.FIELD_THEN_FORM);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.FORM_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(w.FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.FIELDS,
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
      getFeature: () => this.eClass().getEStructuralFeature(w.VALIDATIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.VALIDATIONS,
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
      getFeature: () => this.eClass().getEStructuralFeature(w.VALIDATION_MAPPERS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.VALIDATION_MAPPERS,
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
      getFeature: () => this.eClass().getEStructuralFeature(w.MAPPER_ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.MAPPER_ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case w.FIELDS:
        return this.fields;
      case w.VALIDATIONS:
        return this.validations;
      case w.VALIDATION_MAPPERS:
        return this.validationMappers;
      case w.MAPPER_ORDER:
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
      case w.FIELDS:
        this.fields = t, super.eSet(e, t);
        break;
      case w.VALIDATIONS:
        this.validations = t, super.eSet(e, t);
        break;
      case w.VALIDATION_MAPPERS:
        this.validationMappers = t, super.eSet(e, t);
        break;
      case w.MAPPER_ORDER:
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
      case w.FIELDS:
        return this._fields !== void 0 && this._fields.length > 0;
      case w.VALIDATIONS:
        return this._validations !== void 0 && this._validations.length > 0;
      case w.VALIDATION_MAPPERS:
        return this._validationMappers !== void 0 && this._validationMappers.length > 0;
      case w.MAPPER_ORDER:
        return this._mapperOrder !== Gr.FIELD_THEN_FORM;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case w.FIELDS:
        this._fields = [];
        return;
      case w.VALIDATIONS:
        this._validations = [];
        return;
      case w.VALIDATION_MAPPERS:
        this._validationMappers = [];
        return;
      case w.MAPPER_ORDER:
        this._mapperOrder = Gr.FIELD_THEN_FORM;
        return;
      default:
        super.eUnset(e);
    }
  }
};
He(sr, "FIELDS", 5), He(sr, "VALIDATIONS", 6), He(sr, "VALIDATION_MAPPERS", 7), He(sr, "MAPPER_ORDER", 8);
let Vi = sr;
var Bi = Object.defineProperty, Gi = (s, e, t) => e in s ? Bi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Da = (s, e, t) => Gi(s, typeof e != "symbol" ? e + "" : e, t);
const ya = class tt extends ct {
  constructor() {
    super(...arguments), Da(this, "_tableStyle");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.TABLE_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(tt.TABLE_STYLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => tt.TABLE_STYLE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case tt.TABLE_STYLE:
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
      case tt.TABLE_STYLE:
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
      case tt.TABLE_STYLE:
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
      case tt.TABLE_STYLE:
        this._tableStyle = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Da(ya, "TABLE_STYLE", 5);
let Wi = ya;
var Yi = Object.defineProperty, $i = (s, e, t) => e in s ? Yi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ra = (s, e, t) => $i(s, typeof e != "symbol" ? e + "" : e, t);
const wa = class st extends ct {
  constructor() {
    super(...arguments), Ra(this, "_sections", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.SECTION_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(st.SECTIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => st.SECTIONS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case st.SECTIONS:
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
      case st.SECTIONS:
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
      case st.SECTIONS:
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
      case st.SECTIONS:
        this._sections = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ra(wa, "SECTIONS", 5);
let xi = wa;
var ki = Object.defineProperty, Xi = (s, e, t) => e in s ? ki(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Fa = (s, e, t) => Xi(s, typeof e != "symbol" ? e + "" : e, t);
const Pa = class rt extends ct {
  constructor() {
    super(...arguments), Fa(this, "_tabs", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.TAB_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(rt.TABS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => rt.TABS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case rt.TABS:
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
      case rt.TABS:
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
      case rt.TABS:
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
      case rt.TABS:
        this._tabs = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Fa(Pa, "TABS", 5);
let Hi = Pa;
var ji = Object.defineProperty, qi = (s, e, t) => e in s ? ji(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ba = (s, e, t) => qi(s, typeof e != "symbol" ? e + "" : e, t);
const Ma = class at extends ct {
  constructor() {
    super(...arguments), ba(this, "_summaryFields", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.SUMMARY_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(at.SUMMARY_FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => at.SUMMARY_FIELDS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case at.SUMMARY_FIELDS:
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
      case at.SUMMARY_FIELDS:
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
      case at.SUMMARY_FIELDS:
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
      case at.SUMMARY_FIELDS:
        this._summaryFields = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
ba(Ma, "SUMMARY_FIELDS", 5);
let Ki = Ma;
var zi = Object.defineProperty, Qi = (s, e, t) => e in s ? zi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, vr = (s, e, t) => Qi(s, typeof e != "symbol" ? e + "" : e, t);
const kr = class re extends ct {
  constructor() {
    super(...arguments), vr(this, "_master"), vr(this, "_detail");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.MASTER_DETAIL;
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
      getFeature: () => this.eClass().getEStructuralFeature(re.MASTER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => re.MASTER,
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
      getFeature: () => this.eClass().getEStructuralFeature(re.DETAIL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => re.DETAIL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case re.MASTER:
        return this.master;
      case re.DETAIL:
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
      case re.MASTER:
        this.master = t, super.eSet(e, t);
        break;
      case re.DETAIL:
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
      case re.MASTER:
        return this._master !== void 0;
      case re.DETAIL:
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
      case re.MASTER:
        this._master = void 0;
        return;
      case re.DETAIL:
        this._detail = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
vr(kr, "MASTER", 5), vr(kr, "DETAIL", 6);
let Ji = kr;
var Zi = Object.defineProperty, eu = (s, e, t) => e in s ? Zi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, _r = (s, e, t) => eu(s, typeof e != "symbol" ? e + "" : e, t);
const Xr = class ae extends Qe {
  constructor() {
    super(...arguments), _r(this, "_property", ""), _r(this, "_expression");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.PROPERTY_BINDING;
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
      getFeature: () => this.eClass().getEStructuralFeature(ae.PROPERTY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ae.PROPERTY,
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
      getFeature: () => this.eClass().getEStructuralFeature(ae.EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ae.EXPRESSION,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ae.PROPERTY:
        return this.property;
      case ae.EXPRESSION:
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
      case ae.PROPERTY:
        this.property = t, super.eSet(e, t);
        break;
      case ae.EXPRESSION:
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
      case ae.PROPERTY:
        return this._property !== "";
      case ae.EXPRESSION:
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
      case ae.PROPERTY:
        this._property = "";
        return;
      case ae.EXPRESSION:
        this._expression = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
_r(Xr, "PROPERTY", 0), _r(Xr, "EXPRESSION", 1);
let tu = Xr;
var su = Object.defineProperty, ru = (s, e, t) => e in s ? su(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, H = (s, e, t) => ru(s, typeof e != "symbol" ? e + "" : e, t);
const Oe = class T extends ct {
  constructor() {
    super(...arguments), H(this, "_feature"), H(this, "_label"), H(this, "_placeholder"), H(this, "_readOnly"), H(this, "_required"), H(this, "_visibilityCondition"), H(this, "_validations", []), H(this, "_validationMappers", []), H(this, "_bindings", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.WIDGET_COMPONENT;
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
H(Oe, "FEATURE", 5), H(Oe, "LABEL", 6), H(Oe, "PLACEHOLDER", 7), H(Oe, "READ_ONLY", 8), H(Oe, "REQUIRED", 9), H(Oe, "VISIBILITY_CONDITION", 10), H(Oe, "VALIDATIONS", 11), H(Oe, "VALIDATION_MAPPERS", 12), H(Oe, "BINDINGS", 13);
let Te = Oe;
var au = Object.defineProperty, iu = (s, e, t) => e in s ? au(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, zt = (s, e, t) => iu(s, typeof e != "symbol" ? e + "" : e, t);
const Tr = class W extends Te {
  constructor() {
    super(...arguments), zt(this, "_maxLength"), zt(this, "_value"), zt(this, "_password");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.INPUT_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(W.MAX_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.MAX_LENGTH,
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
  get password() {
    return this._password;
  }
  set password(e) {
    const t = this._password;
    this._password = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(W.PASSWORD),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.PASSWORD,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case W.MAX_LENGTH:
        return this.maxLength;
      case W.VALUE:
        return this.value;
      case W.PASSWORD:
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
      case W.MAX_LENGTH:
        this.maxLength = t, super.eSet(e, t);
        break;
      case W.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case W.PASSWORD:
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
      case W.MAX_LENGTH:
        return this._maxLength !== void 0;
      case W.VALUE:
        return this._value !== void 0;
      case W.PASSWORD:
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
      case W.MAX_LENGTH:
        this._maxLength = void 0;
        return;
      case W.VALUE:
        this._value = void 0;
        return;
      case W.PASSWORD:
        this._password = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
zt(Tr, "MAX_LENGTH", 14), zt(Tr, "VALUE", 15), zt(Tr, "PASSWORD", 16);
let uu = Tr;
var lu = Object.defineProperty, nu = (s, e, t) => e in s ? lu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Qt = (s, e, t) => nu(s, typeof e != "symbol" ? e + "" : e, t);
const Sr = class Y extends Te {
  constructor() {
    super(...arguments), Qt(this, "_rows", 4), Qt(this, "_maxLength"), Qt(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.TEXT_AREA_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(Y.ROWS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.ROWS,
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
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Y.ROWS:
        return this.rows;
      case Y.MAX_LENGTH:
        return this.maxLength;
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
      case Y.ROWS:
        this.rows = t, super.eSet(e, t);
        break;
      case Y.MAX_LENGTH:
        this.maxLength = t, super.eSet(e, t);
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
      case Y.ROWS:
        return this._rows !== 4;
      case Y.MAX_LENGTH:
        return this._maxLength !== void 0;
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
      case Y.ROWS:
        this._rows = 4;
        return;
      case Y.MAX_LENGTH:
        this._maxLength = void 0;
        return;
      case Y.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Qt(Sr, "ROWS", 14), Qt(Sr, "MAX_LENGTH", 15), Qt(Sr, "VALUE", 16);
let ou = Sr;
var cu = Object.defineProperty, Eu = (s, e, t) => e in s ? cu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, je = (s, e, t) => Eu(s, typeof e != "symbol" ? e + "" : e, t);
const rr = class F extends Te {
  constructor() {
    super(...arguments), je(this, "_min"), je(this, "_max"), je(this, "_step", 1), je(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.NUMBER_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(F.MIN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.MIN,
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
      getFeature: () => this.eClass().getEStructuralFeature(F.MAX),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.MAX,
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
      getFeature: () => this.eClass().getEStructuralFeature(F.STEP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.STEP,
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
      getFeature: () => this.eClass().getEStructuralFeature(F.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case F.MIN:
        return this.min;
      case F.MAX:
        return this.max;
      case F.STEP:
        return this.step;
      case F.VALUE:
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
      case F.MIN:
        this.min = t, super.eSet(e, t);
        break;
      case F.MAX:
        this.max = t, super.eSet(e, t);
        break;
      case F.STEP:
        this.step = t, super.eSet(e, t);
        break;
      case F.VALUE:
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
      case F.MIN:
        return this._min !== void 0;
      case F.MAX:
        return this._max !== void 0;
      case F.STEP:
        return this._step !== 1;
      case F.VALUE:
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
      case F.MIN:
        this._min = void 0;
        return;
      case F.MAX:
        this._max = void 0;
        return;
      case F.STEP:
        this._step = 1;
        return;
      case F.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
je(rr, "MIN", 14), je(rr, "MAX", 15), je(rr, "STEP", 16), je(rr, "VALUE", 17);
let hu = rr;
var gu = Object.defineProperty, du = (s, e, t) => e in s ? gu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Or = (s, e, t) => du(s, typeof e != "symbol" ? e + "" : e, t);
const Hr = class ie extends Te {
  constructor() {
    super(...arguments), Or(this, "_asToggle"), Or(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.CHECKBOX_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(ie.AS_TOGGLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ie.AS_TOGGLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(ie.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ie.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ie.AS_TOGGLE:
        return this.asToggle;
      case ie.VALUE:
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
      case ie.AS_TOGGLE:
        this.asToggle = t, super.eSet(e, t);
        break;
      case ie.VALUE:
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
      case ie.AS_TOGGLE:
        return this._asToggle !== void 0;
      case ie.VALUE:
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
      case ie.AS_TOGGLE:
        this._asToggle = void 0;
        return;
      case ie.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Or(Hr, "AS_TOGGLE", 14), Or(Hr, "VALUE", 15);
let pu = Hr;
var Tu = Object.defineProperty, Su = (s, e, t) => e in s ? Tu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, qe = (s, e, t) => Su(s, typeof e != "symbol" ? e + "" : e, t);
const ar = class P extends Te {
  constructor() {
    super(...arguments), qe(this, "_withTime"), qe(this, "_format", "DD.MM.YYYY"), qe(this, "_constrains"), qe(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.DATE_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(P.WITH_TIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.WITH_TIME,
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
      getFeature: () => this.eClass().getEStructuralFeature(P.FORMAT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.FORMAT,
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
      getFeature: () => this.eClass().getEStructuralFeature(P.CONSTRAINS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.CONSTRAINS,
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
      getFeature: () => this.eClass().getEStructuralFeature(P.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case P.WITH_TIME:
        return this.withTime;
      case P.FORMAT:
        return this.format;
      case P.CONSTRAINS:
        return this.constrains;
      case P.VALUE:
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
      case P.WITH_TIME:
        this.withTime = t, super.eSet(e, t);
        break;
      case P.FORMAT:
        this.format = t, super.eSet(e, t);
        break;
      case P.CONSTRAINS:
        this.constrains = t, super.eSet(e, t);
        break;
      case P.VALUE:
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
      case P.WITH_TIME:
        return this._withTime !== void 0;
      case P.FORMAT:
        return this._format !== "DD.MM.YYYY";
      case P.CONSTRAINS:
        return this._constrains !== void 0;
      case P.VALUE:
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
      case P.WITH_TIME:
        this._withTime = void 0;
        return;
      case P.FORMAT:
        this._format = "DD.MM.YYYY";
        return;
      case P.CONSTRAINS:
        this._constrains = void 0;
        return;
      case P.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
qe(ar, "WITH_TIME", 14), qe(ar, "FORMAT", 15), qe(ar, "CONSTRAINS", 16), qe(ar, "VALUE", 17);
let fu = ar;
var Iu = Object.defineProperty, mu = (s, e, t) => e in s ? Iu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Jt = (s, e, t) => mu(s, typeof e != "symbol" ? e + "" : e, t);
const fr = class $ extends Te {
  constructor() {
    super(...arguments), Jt(this, "_optionLabel"), Jt(this, "_minSearchLength", 2), Jt(this, "_multiSelect");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.COMBOBOX_WIDGET;
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
  get minSearchLength() {
    return this._minSearchLength;
  }
  set minSearchLength(e) {
    const t = this._minSearchLength;
    this._minSearchLength = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($.MIN_SEARCH_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.MIN_SEARCH_LENGTH,
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
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case $.OPTION_LABEL:
        return this.optionLabel;
      case $.MIN_SEARCH_LENGTH:
        return this.minSearchLength;
      case $.MULTI_SELECT:
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
      case $.OPTION_LABEL:
        this.optionLabel = t, super.eSet(e, t);
        break;
      case $.MIN_SEARCH_LENGTH:
        this.minSearchLength = t, super.eSet(e, t);
        break;
      case $.MULTI_SELECT:
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
      case $.OPTION_LABEL:
        return this._optionLabel !== void 0;
      case $.MIN_SEARCH_LENGTH:
        return this._minSearchLength !== 2;
      case $.MULTI_SELECT:
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
      case $.OPTION_LABEL:
        this._optionLabel = void 0;
        return;
      case $.MIN_SEARCH_LENGTH:
        this._minSearchLength = 2;
        return;
      case $.MULTI_SELECT:
        this._multiSelect = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Jt(fr, "OPTION_LABEL", 14), Jt(fr, "MIN_SEARCH_LENGTH", 15), Jt(fr, "MULTI_SELECT", 16);
let Nu = fr;
var Lu = Object.defineProperty, vu = (s, e, t) => e in s ? Lu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ke = (s, e, t) => vu(s, typeof e != "symbol" ? e + "" : e, t);
const ir = class b extends Te {
  constructor() {
    super(...arguments), Ke(this, "_optionLabel"), Ke(this, "_multiSelect"), Ke(this, "_asButtonGroup"), Ke(this, "_values", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.SELECT_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(b.OPTION_LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.OPTION_LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(b.MULTI_SELECT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.MULTI_SELECT,
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
      getFeature: () => this.eClass().getEStructuralFeature(b.AS_BUTTON_GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.AS_BUTTON_GROUP,
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
      getFeature: () => this.eClass().getEStructuralFeature(b.VALUES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.VALUES,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case b.OPTION_LABEL:
        return this.optionLabel;
      case b.MULTI_SELECT:
        return this.multiSelect;
      case b.AS_BUTTON_GROUP:
        return this.asButtonGroup;
      case b.VALUES:
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
      case b.OPTION_LABEL:
        this.optionLabel = t, super.eSet(e, t);
        break;
      case b.MULTI_SELECT:
        this.multiSelect = t, super.eSet(e, t);
        break;
      case b.AS_BUTTON_GROUP:
        this.asButtonGroup = t, super.eSet(e, t);
        break;
      case b.VALUES:
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
      case b.OPTION_LABEL:
        return this._optionLabel !== void 0;
      case b.MULTI_SELECT:
        return this._multiSelect !== void 0;
      case b.AS_BUTTON_GROUP:
        return this._asButtonGroup !== void 0;
      case b.VALUES:
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
      case b.OPTION_LABEL:
        this._optionLabel = void 0;
        return;
      case b.MULTI_SELECT:
        this._multiSelect = void 0;
        return;
      case b.AS_BUTTON_GROUP:
        this._asButtonGroup = void 0;
        return;
      case b.VALUES:
        this._values = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ke(ir, "OPTION_LABEL", 14), Ke(ir, "MULTI_SELECT", 15), Ke(ir, "AS_BUTTON_GROUP", 16), Ke(ir, "VALUES", 17);
let _u = ir;
var Ou = Object.defineProperty, Au = (s, e, t) => e in s ? Ou(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, de = (s, e, t) => Au(s, typeof e != "symbol" ? e + "" : e, t);
const it = class N extends Te {
  constructor() {
    super(...arguments), de(this, "_with", []), de(this, "_eType", []), de(this, "_filter"), de(this, "_template"), de(this, "_cases", []), de(this, "_priority", 0);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.ALL_FEATURES;
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
      getFeature: () => this.eClass().getEStructuralFeature(N.WITH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.WITH,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.E_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.E_TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.FILTER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.FILTER,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.TEMPLATE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.TEMPLATE,
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
      getFeature: () => this.eClass().getEStructuralFeature(N.CASES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.CASES,
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
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case N.WITH:
        return this.with;
      case N.E_TYPE:
        return this.eType;
      case N.FILTER:
        return this.filter;
      case N.TEMPLATE:
        return this.template;
      case N.CASES:
        return this.cases;
      case N.PRIORITY:
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
      case N.WITH:
        this.with = t, super.eSet(e, t);
        break;
      case N.E_TYPE:
        this.eType = t, super.eSet(e, t);
        break;
      case N.FILTER:
        this.filter = t, super.eSet(e, t);
        break;
      case N.TEMPLATE:
        this.template = t, super.eSet(e, t);
        break;
      case N.CASES:
        this.cases = t, super.eSet(e, t);
        break;
      case N.PRIORITY:
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
      case N.WITH:
        return this._with !== void 0 && this._with.length > 0;
      case N.E_TYPE:
        return this._eType !== void 0 && this._eType.length > 0;
      case N.FILTER:
        return this._filter !== void 0;
      case N.TEMPLATE:
        return this._template !== void 0;
      case N.CASES:
        return this._cases !== void 0 && this._cases.length > 0;
      case N.PRIORITY:
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
      case N.WITH:
        this._with = [];
        return;
      case N.E_TYPE:
        this._eType = [];
        return;
      case N.FILTER:
        this._filter = void 0;
        return;
      case N.TEMPLATE:
        this._template = void 0;
        return;
      case N.CASES:
        this._cases = [];
        return;
      case N.PRIORITY:
        this._priority = 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
de(it, "WITH", 14), de(it, "E_TYPE", 15), de(it, "FILTER", 16), de(it, "TEMPLATE", 17), de(it, "CASES", 18), de(it, "PRIORITY", 19);
let Cu = it;
var Du = Object.defineProperty, yu = (s, e, t) => e in s ? Du(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ar = (s, e, t) => yu(s, typeof e != "symbol" ? e + "" : e, t);
const jr = class ue extends Qe {
  constructor() {
    super(...arguments), Ar(this, "_when"), Ar(this, "_widget");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.TEMPLATE_CASE;
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
      getFeature: () => this.eClass().getEStructuralFeature(ue.WHEN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ue.WHEN,
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
      getFeature: () => this.eClass().getEStructuralFeature(ue.WIDGET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ue.WIDGET,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ue.WHEN:
        return this.when;
      case ue.WIDGET:
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
      case ue.WHEN:
        this.when = t, super.eSet(e, t);
        break;
      case ue.WIDGET:
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
      case ue.WHEN:
        return this._when !== void 0;
      case ue.WIDGET:
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
      case ue.WHEN:
        this._when = void 0;
        return;
      case ue.WIDGET:
        this._widget = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ar(jr, "WHEN", 0), Ar(jr, "WIDGET", 1);
let Ru = jr;
const Wr = {
  VERTICAL: "VERTICAL"
};
var wu = Object.defineProperty, Fu = (s, e, t) => e in s ? wu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Cr = (s, e, t) => Fu(s, typeof e != "symbol" ? e + "" : e, t);
const qr = class le extends Te {
  constructor() {
    super(...arguments), Cr(this, "_fields", []), Cr(this, "_layout", Wr.VERTICAL);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.GROUP_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(le.FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => le.FIELDS,
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
      getFeature: () => this.eClass().getEStructuralFeature(le.LAYOUT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => le.LAYOUT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case le.FIELDS:
        return this.fields;
      case le.LAYOUT:
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
      case le.FIELDS:
        this.fields = t, super.eSet(e, t);
        break;
      case le.LAYOUT:
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
      case le.FIELDS:
        return this._fields !== void 0 && this._fields.length > 0;
      case le.LAYOUT:
        return this._layout !== Wr.VERTICAL;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case le.FIELDS:
        this._fields = [];
        return;
      case le.LAYOUT:
        this._layout = Wr.VERTICAL;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Cr(qr, "FIELDS", 14), Cr(qr, "LAYOUT", 15);
let Pu = qr;
var bu = Object.defineProperty, Mu = (s, e, t) => e in s ? bu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Zt = (s, e, t) => Mu(s, typeof e != "symbol" ? e + "" : e, t);
const Ir = class x extends Te {
  constructor() {
    super(...arguments), Zt(this, "_condition"), Zt(this, "_then", []), Zt(this, "_else", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.CONDITIONAL;
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
Zt(Ir, "CONDITION", 14), Zt(Ir, "THEN", 15), Zt(Ir, "ELSE", 16);
let Uu = Ir;
var Vu = Object.defineProperty, Bu = (s, e, t) => e in s ? Vu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, es = (s, e, t) => Bu(s, typeof e != "symbol" ? e + "" : e, t);
const mr = class k extends Te {
  constructor() {
    super(...arguments), es(this, "_items"), es(this, "_body", []), es(this, "_emptyText");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.FOR_EACH;
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
      getFeature: () => this.eClass().getEStructuralFeature(k.ITEMS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.ITEMS,
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
      getFeature: () => this.eClass().getEStructuralFeature(k.BODY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.BODY,
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
      getFeature: () => this.eClass().getEStructuralFeature(k.EMPTY_TEXT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.EMPTY_TEXT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case k.ITEMS:
        return this.items;
      case k.BODY:
        return this.body;
      case k.EMPTY_TEXT:
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
      case k.ITEMS:
        this.items = t, super.eSet(e, t);
        break;
      case k.BODY:
        this.body = t, super.eSet(e, t);
        break;
      case k.EMPTY_TEXT:
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
      case k.ITEMS:
        return this._items !== void 0;
      case k.BODY:
        return this._body !== void 0 && this._body.length > 0;
      case k.EMPTY_TEXT:
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
      case k.ITEMS:
        this._items = void 0;
        return;
      case k.BODY:
        this._body = [];
        return;
      case k.EMPTY_TEXT:
        this._emptyText = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
es(mr, "ITEMS", 14), es(mr, "BODY", 15), es(mr, "EMPTY_TEXT", 16);
let Gu = mr;
var Wu = Object.defineProperty, Yu = (s, e, t) => e in s ? Wu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Dr = (s, e, t) => Yu(s, typeof e != "symbol" ? e + "" : e, t);
const Kr = class ne extends Te {
  constructor() {
    super(...arguments), Dr(this, "_displayExpression"), Dr(this, "_targetRoute");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.REFERENCE_LINK_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(ne.DISPLAY_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ne.DISPLAY_EXPRESSION,
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
      getFeature: () => this.eClass().getEStructuralFeature(ne.TARGET_ROUTE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ne.TARGET_ROUTE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ne.DISPLAY_EXPRESSION:
        return this.displayExpression;
      case ne.TARGET_ROUTE:
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
      case ne.DISPLAY_EXPRESSION:
        this.displayExpression = t, super.eSet(e, t);
        break;
      case ne.TARGET_ROUTE:
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
      case ne.DISPLAY_EXPRESSION:
        return this._displayExpression !== void 0;
      case ne.TARGET_ROUTE:
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
      case ne.DISPLAY_EXPRESSION:
        this._displayExpression = void 0;
        return;
      case ne.TARGET_ROUTE:
        this._targetRoute = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Dr(Kr, "DISPLAY_EXPRESSION", 14), Dr(Kr, "TARGET_ROUTE", 15);
let $u = Kr;
var xu = Object.defineProperty, ku = (s, e, t) => e in s ? xu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ze = (s, e, t) => ku(s, typeof e != "symbol" ? e + "" : e, t);
const ur = class M extends Qe {
  constructor() {
    super(...arguments), ze(this, "_name"), ze(this, "_priority", 0), ze(this, "_templates", []), ze(this, "_cases", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.U_I_MODEL_OVERLAY;
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
      getFeature: () => this.eClass().getEStructuralFeature(M.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => M.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(M.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => M.PRIORITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(M.TEMPLATES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => M.TEMPLATES,
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
      getFeature: () => this.eClass().getEStructuralFeature(M.CASES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => M.CASES,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case M.NAME:
        return this.name;
      case M.PRIORITY:
        return this.priority;
      case M.TEMPLATES:
        return this.templates;
      case M.CASES:
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
      case M.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case M.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case M.TEMPLATES:
        this.templates = t, super.eSet(e, t);
        break;
      case M.CASES:
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
      case M.NAME:
        return this._name !== void 0;
      case M.PRIORITY:
        return this._priority !== 0;
      case M.TEMPLATES:
        return this._templates !== void 0 && this._templates.length > 0;
      case M.CASES:
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
      case M.NAME:
        this._name = void 0;
        return;
      case M.PRIORITY:
        this._priority = 0;
        return;
      case M.TEMPLATES:
        this._templates = [];
        return;
      case M.CASES:
        this._cases = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
ze(ur, "NAME", 0), ze(ur, "PRIORITY", 1), ze(ur, "TEMPLATES", 2), ze(ur, "CASES", 3);
let Xu = ur;
var Hu = Object.defineProperty, ju = (s, e, t) => e in s ? Hu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, pe = (s, e, t) => ju(s, typeof e != "symbol" ? e + "" : e, t);
const ut = class O extends Qe {
  constructor() {
    super(...arguments), pe(this, "_extends"), pe(this, "_css"), pe(this, "_vueComponent"), pe(this, "_visibilityCondition"), pe(this, "_name"), pe(this, "_group");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.BASE_STYLE;
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
      getFeature: () => this.eClass().getEStructuralFeature(O.EXTENDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.EXTENDS,
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
      getFeature: () => this.eClass().getEStructuralFeature(O.CSS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.CSS,
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
      getFeature: () => this.eClass().getEStructuralFeature(O.VUE_COMPONENT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.VUE_COMPONENT,
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
      getFeature: () => this.eClass().getEStructuralFeature(O.VISIBILITY_CONDITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => O.VISIBILITY_CONDITION,
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
      case O.EXTENDS:
        return this.extends;
      case O.CSS:
        return this.css;
      case O.VUE_COMPONENT:
        return this.vueComponent;
      case O.VISIBILITY_CONDITION:
        return this.visibilityCondition;
      case O.NAME:
        return this.name;
      case O.GROUP:
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
      case O.EXTENDS:
        this.extends = t, super.eSet(e, t);
        break;
      case O.CSS:
        this.css = t, super.eSet(e, t);
        break;
      case O.VUE_COMPONENT:
        this.vueComponent = t, super.eSet(e, t);
        break;
      case O.VISIBILITY_CONDITION:
        this.visibilityCondition = t, super.eSet(e, t);
        break;
      case O.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case O.GROUP:
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
      case O.EXTENDS:
        return this._extends !== void 0;
      case O.CSS:
        return this._css !== void 0;
      case O.VUE_COMPONENT:
        return this._vueComponent !== void 0;
      case O.VISIBILITY_CONDITION:
        return this._visibilityCondition !== void 0;
      case O.NAME:
        return this._name !== void 0;
      case O.GROUP:
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
      case O.EXTENDS:
        this._extends = void 0;
        return;
      case O.CSS:
        this._css = void 0;
        return;
      case O.VUE_COMPONENT:
        this._vueComponent = void 0;
        return;
      case O.VISIBILITY_CONDITION:
        this._visibilityCondition = void 0;
        return;
      case O.NAME:
        this._name = void 0;
        return;
      case O.GROUP:
        this._group = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
pe(ut, "EXTENDS", 2), pe(ut, "CSS", 3), pe(ut, "VUE_COMPONENT", 4), pe(ut, "VISIBILITY_CONDITION", 5), pe(ut, "NAME", 0), pe(ut, "GROUP", 1);
let Ua = ut;
var qu = Object.defineProperty, Ku = (s, e, t) => e in s ? qu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, yr = (s, e, t) => Ku(s, typeof e != "symbol" ? e + "" : e, t);
const zr = class oe extends Ua {
  constructor() {
    super(...arguments), yr(this, "_layout"), yr(this, "_order");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.LAYOUT_STYLE;
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
  get order() {
    return this._order;
  }
  set order(e) {
    const t = this._order;
    this._order = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(oe.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => oe.ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case oe.LAYOUT:
        return this.layout;
      case oe.ORDER:
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
      case oe.LAYOUT:
        this.layout = t, super.eSet(e, t);
        break;
      case oe.ORDER:
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
      case oe.LAYOUT:
        return this._layout !== void 0;
      case oe.ORDER:
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
      case oe.LAYOUT:
        this._layout = void 0;
        return;
      case oe.ORDER:
        this._order = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
yr(zr, "LAYOUT", 6), yr(zr, "ORDER", 7);
let zu = zr;
var Qu = Object.defineProperty, Ju = (s, e, t) => e in s ? Qu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ce = (s, e, t) => Ju(s, typeof e != "symbol" ? e + "" : e, t);
const Kt = class D extends Ua {
  constructor() {
    super(...arguments), Ce(this, "_feature"), Ce(this, "_widgetType"), Ce(this, "_label"), Ce(this, "_readOnly"), Ce(this, "_order");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.WIDGET_STYLE;
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
      getFeature: () => this.eClass().getEStructuralFeature(D.FEATURE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.FEATURE,
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
      getFeature: () => this.eClass().getEStructuralFeature(D.WIDGET_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.WIDGET_TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(D.LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(D.READ_ONLY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.READ_ONLY,
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
      getFeature: () => this.eClass().getEStructuralFeature(D.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case D.FEATURE:
        return this.feature;
      case D.WIDGET_TYPE:
        return this.widgetType;
      case D.LABEL:
        return this.label;
      case D.READ_ONLY:
        return this.readOnly;
      case D.ORDER:
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
      case D.FEATURE:
        this.feature = t, super.eSet(e, t);
        break;
      case D.WIDGET_TYPE:
        this.widgetType = t, super.eSet(e, t);
        break;
      case D.LABEL:
        this.label = t, super.eSet(e, t);
        break;
      case D.READ_ONLY:
        this.readOnly = t, super.eSet(e, t);
        break;
      case D.ORDER:
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
      case D.FEATURE:
        return this._feature !== void 0;
      case D.WIDGET_TYPE:
        return this._widgetType !== void 0;
      case D.LABEL:
        return this._label !== void 0;
      case D.READ_ONLY:
        return this._readOnly !== void 0;
      case D.ORDER:
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
      case D.FEATURE:
        this._feature = void 0;
        return;
      case D.WIDGET_TYPE:
        this._widgetType = void 0;
        return;
      case D.LABEL:
        this._label = void 0;
        return;
      case D.READ_ONLY:
        this._readOnly = void 0;
        return;
      case D.ORDER:
        this._order = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ce(Kt, "FEATURE", 6), Ce(Kt, "WIDGET_TYPE", 7), Ce(Kt, "LABEL", 8), Ce(Kt, "READ_ONLY", 9), Ce(Kt, "ORDER", 10);
let Va = Kt;
var Zu = Object.defineProperty, el = (s, e, t) => e in s ? Zu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ba = (s, e, t) => el(s, typeof e != "symbol" ? e + "" : e, t);
const Ga = class lt extends Va {
  constructor() {
    super(...arguments), Ba(this, "_columns", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.TABLE_STYLE;
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
      getFeature: () => this.eClass().getEStructuralFeature(lt.COLUMNS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => lt.COLUMNS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case lt.COLUMNS:
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
      case lt.COLUMNS:
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
      case lt.COLUMNS:
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
      case lt.COLUMNS:
        this._columns = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ba(Ga, "COLUMNS", 11);
let tl = Ga;
var sl = Object.defineProperty, rl = (s, e, t) => e in s ? sl(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Rr = (s, e, t) => rl(s, typeof e != "symbol" ? e + "" : e, t);
const Qr = class ce extends Qe {
  constructor() {
    super(...arguments), Rr(this, "_language", "OCL"), Rr(this, "_body", "");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.EXPRESSION;
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
      getFeature: () => this.eClass().getEStructuralFeature(ce.LANGUAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ce.LANGUAGE,
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
      getFeature: () => this.eClass().getEStructuralFeature(ce.BODY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ce.BODY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ce.LANGUAGE:
        return this.language;
      case ce.BODY:
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
      case ce.LANGUAGE:
        this.language = t, super.eSet(e, t);
        break;
      case ce.BODY:
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
      case ce.LANGUAGE:
        return this._language !== "OCL";
      case ce.BODY:
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
      case ce.LANGUAGE:
        this._language = "OCL";
        return;
      case ce.BODY:
        this._body = "";
        return;
      default:
        super.eUnset(e);
    }
  }
};
Rr(Qr, "LANGUAGE", 0), Rr(Qr, "BODY", 1);
let Wa = Qr;
const Yr = {
  ERROR: "ERROR"
};
var al = Object.defineProperty, il = (s, e, t) => e in s ? al(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, wr = (s, e, t) => il(s, typeof e != "symbol" ? e + "" : e, t);
const Jr = class Ee extends Wa {
  constructor() {
    super(...arguments), wr(this, "_defaultMessage"), wr(this, "_severity", Yr.ERROR);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.VALIDATION_EXPRESSION;
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
      getFeature: () => this.eClass().getEStructuralFeature(Ee.DEFAULT_MESSAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ee.DEFAULT_MESSAGE,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ee.SEVERITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ee.SEVERITY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Ee.DEFAULT_MESSAGE:
        return this.defaultMessage;
      case Ee.SEVERITY:
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
      case Ee.DEFAULT_MESSAGE:
        this.defaultMessage = t, super.eSet(e, t);
        break;
      case Ee.SEVERITY:
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
      case Ee.DEFAULT_MESSAGE:
        return this._defaultMessage !== void 0;
      case Ee.SEVERITY:
        return this._severity !== Yr.ERROR;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Ee.DEFAULT_MESSAGE:
        this._defaultMessage = void 0;
        return;
      case Ee.SEVERITY:
        this._severity = Yr.ERROR;
        return;
      default:
        super.eUnset(e);
    }
  }
};
wr(Jr, "DEFAULT_MESSAGE", 2), wr(Jr, "SEVERITY", 3);
let ul = Jr;
var ll = Object.defineProperty, nl = (s, e, t) => e in s ? ll(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ee = (s, e, t) => nl(s, typeof e != "symbol" ? e + "" : e, t);
const Xe = class I extends Qe {
  constructor() {
    super(...arguments), ee(this, "_order"), ee(this, "_matchCode"), ee(this, "_matchSeverity"), ee(this, "_matchExpression"), ee(this, "_mappedText"), ee(this, "_mappedTextExpression"), ee(this, "_mappedSeverity");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return v.Literals.VALIDATION_MESSAGE_MAPPER;
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
      getFeature: () => this.eClass().getEStructuralFeature(I.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.ORDER,
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
      getFeature: () => this.eClass().getEStructuralFeature(I.MATCH_CODE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.MATCH_CODE,
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
      getFeature: () => this.eClass().getEStructuralFeature(I.MATCH_SEVERITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.MATCH_SEVERITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(I.MATCH_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.MATCH_EXPRESSION,
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
      getFeature: () => this.eClass().getEStructuralFeature(I.MAPPED_TEXT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.MAPPED_TEXT,
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
      getFeature: () => this.eClass().getEStructuralFeature(I.MAPPED_TEXT_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.MAPPED_TEXT_EXPRESSION,
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
      getFeature: () => this.eClass().getEStructuralFeature(I.MAPPED_SEVERITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => I.MAPPED_SEVERITY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case I.ORDER:
        return this.order;
      case I.MATCH_CODE:
        return this.matchCode;
      case I.MATCH_SEVERITY:
        return this.matchSeverity;
      case I.MATCH_EXPRESSION:
        return this.matchExpression;
      case I.MAPPED_TEXT:
        return this.mappedText;
      case I.MAPPED_TEXT_EXPRESSION:
        return this.mappedTextExpression;
      case I.MAPPED_SEVERITY:
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
      case I.ORDER:
        this.order = t, super.eSet(e, t);
        break;
      case I.MATCH_CODE:
        this.matchCode = t, super.eSet(e, t);
        break;
      case I.MATCH_SEVERITY:
        this.matchSeverity = t, super.eSet(e, t);
        break;
      case I.MATCH_EXPRESSION:
        this.matchExpression = t, super.eSet(e, t);
        break;
      case I.MAPPED_TEXT:
        this.mappedText = t, super.eSet(e, t);
        break;
      case I.MAPPED_TEXT_EXPRESSION:
        this.mappedTextExpression = t, super.eSet(e, t);
        break;
      case I.MAPPED_SEVERITY:
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
      case I.ORDER:
        return this._order !== void 0;
      case I.MATCH_CODE:
        return this._matchCode !== void 0;
      case I.MATCH_SEVERITY:
        return this._matchSeverity !== void 0;
      case I.MATCH_EXPRESSION:
        return this._matchExpression !== void 0;
      case I.MAPPED_TEXT:
        return this._mappedText !== void 0;
      case I.MAPPED_TEXT_EXPRESSION:
        return this._mappedTextExpression !== void 0;
      case I.MAPPED_SEVERITY:
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
      case I.ORDER:
        this._order = void 0;
        return;
      case I.MATCH_CODE:
        this._matchCode = void 0;
        return;
      case I.MATCH_SEVERITY:
        this._matchSeverity = void 0;
        return;
      case I.MATCH_EXPRESSION:
        this._matchExpression = void 0;
        return;
      case I.MAPPED_TEXT:
        this._mappedText = void 0;
        return;
      case I.MAPPED_TEXT_EXPRESSION:
        this._mappedTextExpression = void 0;
        return;
      case I.MAPPED_SEVERITY:
        this._mappedSeverity = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
ee(Xe, "ORDER", 0), ee(Xe, "MATCH_CODE", 1), ee(Xe, "MATCH_SEVERITY", 2), ee(Xe, "MATCH_EXPRESSION", 3), ee(Xe, "MAPPED_TEXT", 4), ee(Xe, "MAPPED_TEXT_EXPRESSION", 5), ee(Xe, "MAPPED_SEVERITY", 6);
let ol = Xe;
var cl = Object.defineProperty, El = (s, e, t) => e in s ? cl(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, hl = (s, e, t) => El(s, e + "", t);
const Ya = class $a extends Ni {
  static get eINSTANCE() {
    return this._instance || (this._instance = new $a()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(v.eINSTANCE);
  }
  /**
   * Create a new UIModel instance
   */
  createUIModel() {
    return new Fi();
  }
  /**
   * Create a new FormView instance
   */
  createFormView() {
    return new Vi();
  }
  /**
   * Create a new TableView instance
   */
  createTableView() {
    return new Wi();
  }
  /**
   * Create a new SectionView instance
   */
  createSectionView() {
    return new xi();
  }
  /**
   * Create a new TabView instance
   */
  createTabView() {
    return new Hi();
  }
  /**
   * Create a new SummaryView instance
   */
  createSummaryView() {
    return new Ki();
  }
  /**
   * Create a new MasterDetail instance
   */
  createMasterDetail() {
    return new Ji();
  }
  /**
   * Create a new PropertyBinding instance
   */
  createPropertyBinding() {
    return new tu();
  }
  /**
   * Create a new InputWidget instance
   */
  createInputWidget() {
    return new uu();
  }
  /**
   * Create a new TextAreaWidget instance
   */
  createTextAreaWidget() {
    return new ou();
  }
  /**
   * Create a new NumberWidget instance
   */
  createNumberWidget() {
    return new hu();
  }
  /**
   * Create a new CheckboxWidget instance
   */
  createCheckboxWidget() {
    return new pu();
  }
  /**
   * Create a new DateWidget instance
   */
  createDateWidget() {
    return new fu();
  }
  /**
   * Create a new ComboboxWidget instance
   */
  createComboboxWidget() {
    return new Nu();
  }
  /**
   * Create a new SelectWidget instance
   */
  createSelectWidget() {
    return new _u();
  }
  /**
   * Create a new AllFeatures instance
   */
  createAllFeatures() {
    return new Cu();
  }
  /**
   * Create a new TemplateCase instance
   */
  createTemplateCase() {
    return new Ru();
  }
  /**
   * Create a new GroupWidget instance
   */
  createGroupWidget() {
    return new Pu();
  }
  /**
   * Create a new Conditional instance
   */
  createConditional() {
    return new Uu();
  }
  /**
   * Create a new ForEach instance
   */
  createForEach() {
    return new Gu();
  }
  /**
   * Create a new ReferenceLinkWidget instance
   */
  createReferenceLinkWidget() {
    return new $u();
  }
  /**
   * Create a new UIModelOverlay instance
   */
  createUIModelOverlay() {
    return new Xu();
  }
  /**
   * Create a new LayoutStyle instance
   */
  createLayoutStyle() {
    return new zu();
  }
  /**
   * Create a new WidgetStyle instance
   */
  createWidgetStyle() {
    return new Va();
  }
  /**
   * Create a new TableStyle instance
   */
  createTableStyle() {
    return new tl();
  }
  /**
   * Create a new Expression instance
   */
  createExpression() {
    return new Wa();
  }
  /**
   * Create a new ValidationExpression instance
   */
  createValidationExpression() {
    return new ul();
  }
  /**
   * Create a new ValidationMessageMapper instance
   */
  createValidationMessageMapper() {
    return new ol();
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
hl(Ya, "_instance");
let ia = Ya;
const xa = Symbol("uimodelComposerRegistry");
function ka() {
  const s = nt(xa);
  if (!s)
    throw new Error(
      "[uimodel-composer] No ComposerRegistry provided. Make sure UIModelComposer is an ancestor of this component."
    );
  return s;
}
function gl(s) {
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
const dl = "uic";
function nr(s) {
  return s === !0 || s === "true";
}
function ot(s, e = 0) {
  if (typeof s == "number") return s;
  const t = Number(s);
  return Number.isFinite(t) ? t : e;
}
const pl = {
  HOVER: ":hover",
  FOCUS: ":focus",
  FOCUS_WITHIN: ":focus-within",
  ACTIVE: ":active",
  DISABLED: ".uim-s-disabled",
  READONLY: ".uim-s-readonly",
  INVALID: ".uim-s-invalid",
  REQUIRED: ".uim-s-required"
};
function Mr(s) {
  return s.trim().replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() || "unnamed";
}
function Zr(s) {
  return `--${dl}-${Mr(s)}`;
}
function Tl(s) {
  return s.replace(/token\(\s*([^)]+?)\s*\)/g, (e, t) => `var(${Zr(t)})`);
}
function Xa(s) {
  return `uic-${Mr(s)}`;
}
function Sl(s) {
  return `uicss-theme-${Mr(s)}`;
}
function Ha(s, e) {
  return `uicss-cond-${Mr(s.name ?? "sheet")}-${e}`;
}
function ja(s, e = "  ") {
  return s.filter((t) => t.property && t.value !== void 0).map((t) => `${e}${t.property.trim()}: ${Tl(t.value)}${nr(t.important) ? " !important" : ""};`).join(`
`);
}
function fl(s, e) {
  return e.filter((t) => t.declarations.length > 0).map((t) => {
    var r, i;
    const u = ((i = (r = t.state) == null ? void 0 : r.getName) == null ? void 0 : i.call(r)) ?? String(t.state), l = pl[u] ?? `:${u.toLowerCase()}`;
    return `${s}${l} {
${ja(t.declarations)}
}`;
  }).join(`
`);
}
function Ta(s, e, t, r) {
  const i = [];
  e.length > 0 && i.push(`${s} {
${ja(e)}
}`);
  const u = fl(s, t);
  if (u && i.push(u), i.length === 0) return "";
  const l = i.join(`
`);
  return r ? `@media ${r} {
${l}
}` : l;
}
function qa(s) {
  return s.includeSubtypes === void 0 || s.includeSubtypes === null ? !0 : nr(s.includeSubtypes);
}
function Il(s, e, t) {
  var r, i;
  let u;
  const l = (i = (r = e.targetClass) == null ? void 0 : r.getName) == null ? void 0 : i.call(r);
  return l ? u = qa(e) ? `.uim-c-${l}` : `.uim-component[data-uim-eclass="${l}"]` : u = ".uim-component", e.componentName && (u += `[data-uim-name="${e.componentName}"]`), e.group && (u += `[data-uim-group="${e.group}"]`), e.condition && (u += `.${Ha(s, t)}`), u;
}
function ml(s) {
  const e = new Set(s), t = [], r = /* @__PURE__ */ new Set();
  function i(u, l) {
    if (r.has(u) || l.has(u)) return;
    l.add(u);
    const n = u.extends;
    n && e.has(n) && i(n, l), l.delete(u), r.add(u), t.push(u);
  }
  for (const u of s) i(u, /* @__PURE__ */ new Set());
  return t;
}
function Nl(s) {
  const e = [];
  if (s.tokens.length > 0) {
    const r = s.tokens.filter((i) => i.name).map((i) => `  ${Zr(i.name)}: ${i.value ?? ""};`);
    e.push(`:root, .uicss-scope {
${r.join(`
`)}
}`);
  }
  for (const r of s.themes) {
    if (!r.name) continue;
    const i = r.overrides.filter((u) => {
      var l;
      return (l = u.token) == null ? void 0 : l.name;
    }).map((u) => `  ${Zr(u.token.name)}: ${u.value ?? ""};`);
    nr(r.dark) && i.push("  color-scheme: dark;"), i.length > 0 && e.push(`.${Sl(r.name)} {
${i.join(`
`)}
}`);
  }
  const t = s.rules.map((r, i) => ({ rule: r, index: i }));
  t.sort((r, i) => ot(r.rule.priority) - ot(i.rule.priority) || r.index - i.index);
  for (const { rule: r, index: i } of t) {
    const u = Ta(
      Il(s, r, i),
      r.declarations,
      r.states,
      r.media || void 0
    );
    u && e.push(u);
  }
  for (const r of ml(s.styles)) {
    if (!r.name) continue;
    const i = Ta(`.${Xa(r.name)}`, r.declarations, r.states);
    i && e.push(i);
  }
  return e.join(`

`);
}
function Ll(s) {
  return s.map(Nl).filter(Boolean).join(`

`);
}
const Ur = Symbol("uimodel-css:sheets");
let vl = 0;
function _l(s) {
  const e = br(0);
  class t extends Ca {
    notifyChanged(h) {
      var E;
      try {
        super.notifyChanged(h);
      } catch {
      }
      if (!((E = h.isTouch) != null && E.call(h))) {
        e.value++;
        for (const o of i) l(o);
      }
    }
  }
  const r = new t();
  let i = [];
  function u(c) {
    const h = c;
    h.eAdapters().includes(r) || (h.eAdapterAdd ? h.eAdapterAdd(r) : h.eAdapters().push(r));
  }
  function l(c) {
    u(c);
    for (const h of c.eAllContents()) u(h);
  }
  function n(c) {
    const h = c;
    if (h.eAdapterRemove)
      h.eAdapterRemove(r);
    else {
      const E = h.eAdapters(), o = E.indexOf(r);
      o >= 0 && E.splice(o, 1);
    }
  }
  function g() {
    for (const c of i) {
      n(c);
      for (const h of c.eAllContents()) n(h);
    }
    i = [];
  }
  return cr(
    () => [...Pe(s)],
    (c) => {
      g();
      for (const h of c)
        l(h), i.push(h);
      e.value++;
    },
    { immediate: !0 }
  ), ta(g), { css: m(() => (e.value, Ll([...Pe(s)]))), version: e };
}
function Ol(s) {
  const { css: e, version: t } = _l(s);
  if (typeof document < "u") {
    const r = document.createElement("style");
    r.id = `uimodel-css-${++vl}`, r.setAttribute("data-uimodel-css", ""), document.head.appendChild(r), di(() => {
      r.textContent = e.value;
    }), ta(() => {
      r.remove();
    });
  }
  return { css: e, version: t };
}
function dr(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? rs(e) : s;
}
function rs(s) {
  return new Proxy(s, {
    get(e, t) {
      var r, i, u;
      if (typeof t != "string") return e[t];
      if (t === "eGet")
        return (g) => {
          var c, h, E;
          if (typeof g == "string") {
            const o = (E = (h = (c = e.eClass) == null ? void 0 : c.call(e)) == null ? void 0 : h.getEStructuralFeature) == null ? void 0 : E.call(h, g);
            return o ? dr(e.eGet(o)) : void 0;
          }
          return dr(e.eGet(g));
        };
      if (t in e) return e[t];
      const l = t.charAt(0).toUpperCase() + t.slice(1);
      for (const g of [`get${l}`, `is${l}`])
        if (typeof e[g] == "function") return dr(e[g]());
      const n = (u = (i = (r = e.eClass) == null ? void 0 : r.call(e)) == null ? void 0 : i.getEStructuralFeature) == null ? void 0 : u.call(i, t);
      if (n) return dr(e.eGet(n));
    }
  });
}
function gr(s, e) {
  if (!s) return !0;
  try {
    switch (s.language) {
      case "OCL":
        return Al(s.body, e);
      case "AQL":
        return Cl(s.body, e);
      case "JS":
        return Dl(s.body, e);
      default:
        return console.warn(`[uimodel-composer] Unknown expression language: ${s.language}`), !0;
    }
  } catch (t) {
    return console.error(`[uimodel-composer] Expression evaluation failed (${s.language}):`, t), !0;
  }
}
function Al(s, e) {
  try {
    const { EMFOclValidator: t } = globalThis.__emftsOcl__ ?? {};
    return t ? new t().evaluateExpression(s, rs(e)) === !0 : (console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup."), !0);
  } catch {
    return !0;
  }
}
function Cl(s, e) {
  return console.warn("[uimodel-composer] AQL evaluation not yet implemented."), !0;
}
function Dl(s, e) {
  return !!new Function("self", `"use strict"; return (${s});`)(rs(e));
}
function yl(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? rs(e) : s;
}
function ua(s, e, t = {}) {
  if (s != null && s.body)
    try {
      switch (s.language) {
        case "JS": {
          const r = Object.keys(t);
          return new Function("self", ...r, `"use strict"; return (${s.body});`)(rs(e), ...r.map((i) => yl(t[i])));
        }
        case "OCL": {
          const { EMFOclValidator: r } = globalThis.__emftsOcl__ ?? {};
          if (!r) {
            console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup.");
            return;
          }
          return new r().evaluateExpression(s.body, rs(e));
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
function Rl(s) {
  return s.map((e, t) => ({ overlay: e, index: t })).sort((e, t) => ot(t.overlay.priority) - ot(e.overlay.priority) || e.index - t.index).flatMap(({ overlay: e }) => [...e.cases ?? []]);
}
function Ka(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "AllFeatures";
}
function wl(s) {
  var e;
  const t = (e = s.eClass) == null ? void 0 : e.call(s);
  return t ? t.getName() === "WidgetComponent" || t.getEAllSuperTypes().some((r) => r.getName() === "WidgetComponent") : !1;
}
function za(s) {
  return typeof s.isContainment == "function";
}
function Fl(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    Ka(i) ? e.push(i) : wl(i) && i.feature && t.add(i.feature);
    for (const u of i.eClass().getEAllStructuralFeatures()) {
      if (!za(u) || !u.isContainment()) continue;
      const l = i.eGet(u);
      if (!l) continue;
      const n = u.isMany() ? [...l] : [l];
      for (const g of n) r(g);
    }
  }
  return r(s), { blocks: e, boundFeatures: t };
}
function Nr(s) {
  var e;
  return (((e = s.with) == null ? void 0 : e.length) ?? 0) > 0;
}
function Pl(s, e) {
  var t;
  const r = s.getEAllStructuralFeatures();
  if (Nr(e)) {
    const u = new Set(r);
    return e.with.filter((l) => u.has(l));
  }
  let i = r;
  if ((((t = e.eType) == null ? void 0 : t.length) ?? 0) > 0) {
    const u = new Set(e.eType);
    i = i.filter((l) => {
      const n = l.getEType();
      return n != null && u.has(n);
    });
  }
  return e.filter && (i = i.filter(
    (u) => gr(e.filter, u)
  )), i;
}
function bl(s, e) {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const u of e.blocks)
    t.set(u, []), r.set(u, new Set(Pl(s, u)));
  const i = new Map(
    e.blocks.map((u, l) => [u, l])
  );
  for (const u of s.getEAllStructuralFeatures()) {
    if (e.boundFeatures.has(u)) continue;
    let l;
    for (const n of e.blocks) {
      if (!r.get(n).has(u)) continue;
      if (!l) {
        l = n;
        continue;
      }
      const g = ot(n.priority) - ot(l.priority), c = Number(Nr(n)) - Number(Nr(l)), h = i.get(l) - i.get(n);
      (g > 0 || g === 0 && (c > 0 || c === 0 && h > 0)) && (l = n);
    }
    l && t.get(l).push(u);
  }
  for (const [u, l] of t) {
    if (!Nr(u)) continue;
    const n = new Map(u.with.map((g, c) => [g, c]));
    l.sort((g, c) => (n.get(g) ?? 0) - (n.get(c) ?? 0));
  }
  return t;
}
function Sa(s, e) {
  for (const t of s ?? [])
    if (t.widget && (!t.when || ua(
      t.when,
      e
    )))
      return t.widget;
}
function Ml(s, e, t) {
  return Sa(t?.overlayCases, e) ?? Sa(s.cases, e) ?? s.template;
}
function Fr(s) {
  var e, t, r;
  const i = s.eClass(), u = (e = i.getEPackage()) == null ? void 0 : e.getEFactoryInstance();
  if (!u) throw new Error(`Keine Factory für ${i.getName()}`);
  const l = u.create(i);
  for (const n of i.getEAllStructuralFeatures()) {
    if ((t = n.isDerived) != null && t.call(n) || ((r = n.isChangeable) == null ? void 0 : r.call(n)) === !1) continue;
    const g = s.eGet(n);
    if (g == null) continue;
    const c = za(n) && n.isContainment();
    if (n.isMany()) {
      const h = [...g];
      if (h.length === 0) continue;
      l.eSet(
        n,
        c ? h.map((E) => Fr(E)) : h
      );
    } else
      l.eSet(n, c ? Fr(g) : g);
  }
  return l;
}
const Ul = /* @__PURE__ */ new Set(["AllFeatures", "Conditional", "ForEach"]);
function $r(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function Qa(s, e) {
  if ($r(s) !== "GroupWidget") {
    s.feature = e;
    return;
  }
  const t = s.fields ?? [];
  for (const r of t)
    Ul.has($r(r)) || ($r(r) === "GroupWidget" ? Qa(r, e) : !r.feature && !(r.bindings ?? []).some((i) => i.property === "feature") && (r.feature = e));
}
function Vl(s, e) {
  const t = ia.eINSTANCE.createValidationExpression();
  return t.language = "JS", t.body = `self.${s} !== null && self.${s} !== undefined && String(self.${s}).length > 0`, t.defaultMessage = `${e ?? s} ist erforderlich.`, t.severity = "ERROR", t;
}
function Bl(s) {
  const e = s.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Gl(s, e, t) {
  var r, i, u, l;
  const n = t ?? {
    blocks: [e],
    boundFeatures: /* @__PURE__ */ new Set()
  };
  n.blocks.includes(e) || n.blocks.push(e);
  const g = bl(s, n).get(e) ?? [], c = [];
  for (const h of g) {
    const E = Ml(e, h, n);
    if (!E) {
      console.error(
        `[uimodel-composer] AllFeatures "${e.name ?? "?"}": kein TemplateCase trifft auf Feature "${h.getName() ?? "?"}" und kein Default-Fall (template) gesetzt.`
      );
      continue;
    }
    const o = Fr(E);
    Qa(o, h);
    const d = h.getName() ?? "feature";
    o.name = d, o.label === void 0 && e.label !== void 0 && (o.label = e.label), o.placeholder === void 0 && e.placeholder !== void 0 && (o.placeholder = e.placeholder), o.readOnly === void 0 && e.readOnly !== void 0 && (o.readOnly = e.readOnly), o.required === void 0 && e.required !== void 0 && (o.required = e.required), (((r = o.styles) == null ? void 0 : r.length) ?? 0) === 0 && (((i = e.styles) == null ? void 0 : i.length) ?? 0) > 0 && (o.styles = [...e.styles]), o.label || (o.label = Bl(d)), !o.group && e.group && (o.group = e.group), o.required === void 0 && ot((u = h.getLowerBound) == null ? void 0 : u.call(h)) >= 1 && (o.required = !0, (((l = o.validations) == null ? void 0 : l.length) ?? 0) === 0 && (o.validations = [Vl(d, o.label)]));
    const R = e.bindings ?? [];
    if (R.length > 0) {
      const B = new Set((o.bindings ?? []).map((U) => U.property)), X = R.filter((U) => U.property && !B.has(U.property)).map((U) => Fr(U));
      X.length > 0 && (o.bindings = [...o.bindings ?? [], ...X]);
    }
    c.push(o);
  }
  return c;
}
const Ja = Symbol("uimodel:allfeatures-context"), Za = br(0);
function Wl() {
  Za.value++;
}
function as() {
  Za.value;
}
function Yl(s) {
  class e extends Ca {
    notifyChanged(n) {
      var g;
      try {
        super.notifyChanged(n);
      } catch {
      }
      if ((g = n.isTouch) != null && g.call(n)) return;
      Wl();
      const c = Pe(s);
      c && i(c);
    }
  }
  const t = new e();
  function r(l) {
    const n = l;
    n.eAdapters().includes(t) || (n.eAdapterAdd ? n.eAdapterAdd(t) : n.eAdapters().push(t));
  }
  function i(l) {
    r(l);
    for (const n of l.eAllContents()) r(n);
  }
  function u(l) {
    const n = (g) => {
      const c = g;
      if (c.eAdapterRemove)
        c.eAdapterRemove(t);
      else {
        const h = c.eAdapters(), E = h.indexOf(t);
        E >= 0 && h.splice(E, 1);
      }
    };
    n(l);
    for (const g of l.eAllContents()) n(g);
  }
  cr(
    () => Pe(s),
    (l, n) => {
      n && u(n), l && i(l);
    },
    { immediate: !0 }
  ), ta(() => {
    const l = Pe(s);
    l && u(l);
  });
}
function ei(s) {
  var e;
  if (!s) return [];
  const t = [], r = /* @__PURE__ */ new Set(), i = (u) => {
    var l;
    const n = (l = u.getName) == null ? void 0 : l.call(u);
    n && !r.has(n) && (r.add(n), t.push(n));
  };
  i(s);
  for (const u of ((e = s.getEAllSuperTypes) == null ? void 0 : e.call(s)) ?? []) i(u);
  return t;
}
function $l(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "CssStyle";
}
function xl(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    !i || t.has(i) || (t.add(i), r(i.extends), $l(i) && i.name && e.push(Xa(i.name)));
  }
  for (const i of s ?? []) r(i);
  return e;
}
function kl(s, e) {
  var t, r, i;
  const u = (r = (t = s.targetClass) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  if (u) {
    const l = ei((i = e.eClass) == null ? void 0 : i.call(e));
    if (qa(s)) {
      if (!l.includes(u)) return !1;
    } else if (l[0] !== u)
      return !1;
  }
  return !(s.componentName && e.name !== s.componentName || s.group && e.group !== s.group);
}
function la(s, e = {}) {
  var t;
  const r = ["uim-component"];
  for (const i of ei((t = s.eClass) == null ? void 0 : t.call(s)))
    r.push(`uim-c-${i}`);
  r.push(...xl(s.styles)), e.resolvedCss && r.push(...e.resolvedCss.split(/\s+/).filter(Boolean));
  for (const i of e.sheets ?? [])
    i.rules.forEach((u, l) => {
      u.condition && kl(u, s) && e.model && gr(u.condition, e.model) && r.push(Ha(i, l));
    });
  return [...new Set(r)];
}
function na(s) {
  var e, t, r;
  const i = {}, u = (r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  return u && (i["data-uim-eclass"] = u), s.name && (i["data-uim-name"] = s.name), s.group && (i["data-uim-group"] = s.group), i;
}
function Xl(s, e, t) {
  const r = [];
  return nr(t ?? s.required) && r.push("uim-s-required"), nr(e ?? s.readOnly) && r.push("uim-s-readonly"), r;
}
function ti(s, e = /* @__PURE__ */ new Set()) {
  if (!s) return {};
  if (e.has(s)) return {};
  e.add(s);
  const t = s.extends ? ti(s.extends, e) : {}, r = Hl(s);
  return si(t, r);
}
function oa(s) {
  return s.reduce(
    (e, t) => si(e, ti(t)),
    {}
  );
}
function Hl(s) {
  const e = {};
  s.css !== void 0 && (e.css = s.css), s.vueComponent !== void 0 && (e.vueComponent = s.vueComponent);
  const t = s;
  t.layout !== void 0 && (e.layout = t.layout), t.order !== void 0 && (e.order = t.order);
  const r = s;
  return r.widgetType !== void 0 && (e.widgetType = r.widgetType), r.label !== void 0 && (e.label = r.label), r.readOnly !== void 0 && (e.readOnly = r.readOnly), r.order !== void 0 && (e.order = r.order), e;
}
function si(s, e) {
  return {
    ...s,
    ...Object.fromEntries(
      Object.entries(e).filter(([, t]) => t !== void 0)
    ),
    // Merge CSS classes (append, not replace)
    css: [s.css, e.css].filter(Boolean).join(" ") || void 0
  };
}
const ca = /* @__PURE__ */ he({
  __name: "ComponentDispatcher",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = s, t = ka(), r = m(() => {
      var n, g, c, h;
      const E = ((h = (c = (g = (n = e.component).eClass) == null ? void 0 : g.call(n)) == null ? void 0 : c.getName) == null ? void 0 : h.call(c)) ?? "", o = t.getComposer(E);
      return o || console.warn(`[uimodel-composer] No composer registered for EClass "${E}"`), o ?? null;
    }), i = nt(Ur, void 0), u = m(() => (as(), i?.version.value, la(e.component, {
      model: e.model,
      sheets: i?.sheets.value,
      resolvedCss: oa(e.component.styles ?? []).css
    }))), l = m(() => na(e.component));
    return (n, g) => r.value ? (L(), J(sa(r.value), ra({
      key: 0,
      component: s.component,
      model: s.model,
      class: u.value
    }, l.value), null, 16, ["component", "model", "class"])) : Er("", !0);
  }
});
function Ea(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function jl(s) {
  return Ea(s) === "GroupWidget";
}
function ql(s) {
  return Ea(s) === "Conditional";
}
function Kl(s) {
  return Ea(s) === "ForEach";
}
function zl(s) {
  if (!s) return [];
  const e = typeof s == "object" && Symbol.iterator in s ? s : [s], t = [];
  for (const r of e)
    r && typeof r.eClass == "function" ? t.push(r) : r != null && console.warn("[uimodel-composer] ForEach: Element ist kein EObject und wird übersprungen:", r);
  return t;
}
function ea(s, e, t) {
  var r;
  const i = [];
  for (const u of s ?? [])
    if (Ka(u)) {
      const l = (r = e.eClass) == null ? void 0 : r.call(e);
      if (!l) continue;
      for (const n of Gl(l, u, t))
        i.push({ kind: "widget", widget: n, model: e });
    } else if (ql(u)) {
      const l = gr(u.condition, e) ? u.then : u.else;
      i.push(...ea(l, e, t));
    } else if (Kl(u)) {
      const l = zl(ua(u.items, e));
      if (l.length === 0) {
        u.emptyText && i.push({ kind: "note", text: u.emptyText });
        continue;
      }
      for (const n of l)
        i.push(...ea(u.body, n, t));
    } else jl(u) ? i.push({ kind: "group", widget: u, model: e }) : i.push({ kind: "widget", widget: u, model: e });
  return i;
}
function Ql(s, e) {
  return m(() => (as(), gr(Pe(s), Pe(e))));
}
const Jl = /* @__PURE__ */ new Set([
  "readOnly",
  "required",
  "password",
  "asToggle",
  "multiSelect",
  "asButtonGroup",
  "withTime"
]), Zl = /* @__PURE__ */ new Set([
  "maxLength",
  "rows",
  "min",
  "max",
  "step",
  "minSearchLength",
  "order"
]);
function en(s, e) {
  if (e === null) return s === "feature" ? null : void 0;
  if (s === "feature") return e;
  if (Jl.has(s)) return !!e;
  if (Zl.has(s)) {
    const t = Number(e);
    return Number.isFinite(t) ? t : void 0;
  }
  return String(e);
}
function tn(s, e) {
  var t;
  const r = { values: {}, featureSuppressed: !1 };
  for (const i of s.bindings ?? []) {
    const u = i.property;
    if (!u || !i.expression) continue;
    const l = ua(i.expression, e, {
      feature: s.feature,
      eClass: (t = e.eClass) == null ? void 0 : t.call(e)
    });
    if (l === void 0) continue;
    if (u === "feature") {
      l === null ? r.featureSuppressed = !0 : r.feature = l;
      continue;
    }
    const n = en(u, l);
    n !== void 0 && (r.values[u] = n);
  }
  return r;
}
function sn(s, e) {
  return m(() => {
    var t;
    as();
    const r = Pe(s), i = oa(r.styles), u = {
      ...r.label !== void 0 ? { label: r.label } : {},
      ...r.placeholder !== void 0 ? { placeholder: r.placeholder } : {},
      ...r.readOnly !== void 0 ? { readOnly: r.readOnly } : {},
      ...r.required !== void 0 ? { required: r.required } : {}
    }, l = e ? Pe(e) : void 0;
    if (!l || (((t = r.bindings) == null ? void 0 : t.length) ?? 0) === 0)
      return { ...i, ...u };
    const n = tn(r, l);
    return {
      ...i,
      ...u,
      ...n.values,
      boundFeature: n.feature,
      featureSuppressed: n.featureSuppressed
    };
  });
}
var j = /* @__PURE__ */ ((s) => (s[s.DEFAULT = 0] = "DEFAULT", s[s.DATA_TYPE = 100] = "DATA_TYPE", s[s.ECLASS = 200] = "ECLASS", s[s.FEATURE = 300] = "FEATURE", s[s.PACKAGE = 400] = "PACKAGE", s[s.INSTANCE = 500] = "INSTANCE", s[s.OVERRIDE = 1e3] = "OVERRIDE", s))(j || {});
function q() {
  return { matches: !1, priority: 0 };
}
function Ie(s) {
  return { matches: !0, priority: s };
}
let rn = class {
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
      return q();
    if (t === this.eClass)
      return Ie(j.ECLASS + 50);
    if (t.getName() === this.eClass.getName()) {
      const r = t.getEPackage(), i = this.eClass.getEPackage();
      if (r && i && r.getNsURI() === i.getNsURI())
        return Ie(j.ECLASS + 50);
    }
    return this.isSuperTypeOf(this.eClass, t) ? Ie(j.ECLASS) : q();
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
        const u = i.getEPackage(), l = e.getEPackage();
        if (u && l && u.getNsURI() === l.getNsURI())
          return !0;
      }
    }
    return !1;
  }
}, an = class {
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
      return q();
    const u = (t = i.getEType) == null ? void 0 : t.call(i);
    return u && ((r = u.getName) == null ? void 0 : r.call(u)) === this.dataTypeName ? Ie(j.DATA_TYPE) : q();
  }
  /**
   * Check if the feature is an EAttribute.
   */
  isEAttribute(e) {
    var t, r;
    return !e || typeof e != "object" ? !1 : "getEAttributeType" in e || "eClass" in e && typeof e.eClass == "function" && ((r = (t = e.eClass()) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "EAttribute";
  }
}, un = class {
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
    return q();
  }
  /**
   * Match against a specific enum.
   */
  matchEnum(e) {
    var t;
    return this.enumName ? ((t = e.getName) == null ? void 0 : t.call(e)) === this.enumName ? Ie(j.DATA_TYPE + 50) : q() : Ie(j.DATA_TYPE);
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
}, ln = class {
  constructor(e, t) {
    this.containment = e, this.targetClass = t;
  }
  /**
   * Match the context against reference criteria.
   */
  match(e) {
    var t, r, i, u, l;
    const n = e.feature || e.reference;
    if (!n || !this.isEReference(n))
      return q();
    const g = n;
    let c = j.DATA_TYPE;
    if (this.containment !== void 0) {
      if ((((t = g.isContainment) == null ? void 0 : t.call(g)) ?? !1) !== this.containment)
        return q();
      c += 25;
    }
    if (this.targetClass) {
      const h = (r = g.getEReferenceType) == null ? void 0 : r.call(g);
      if (!h)
        return q();
      const E = (i = h.getName) == null ? void 0 : i.call(h), o = (l = (u = this.targetClass).getName) == null ? void 0 : l.call(u);
      if (E !== o && !this.isSuperTypeOf(this.targetClass, h))
        return q();
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
    const l = (r = t.getEAllSuperTypes) == null ? void 0 : r.call(t);
    if (!l) return !1;
    for (const n of l)
      if (n === e || ((i = n.getName) == null ? void 0 : i.call(n)) === ((u = e.getName) == null ? void 0 : u.call(e)))
        return !0;
    return !1;
  }
};
class nn {
  constructor(e, t) {
    this.eClass = e, this.featureName = t;
  }
  /**
   * Match the context against this specific feature.
   */
  match(e) {
    var t, r, i, u, l, n, g, c, h, E;
    const o = e.feature || e.attribute || e.reference;
    if (!o || ((t = o.getName) == null ? void 0 : t.call(o)) !== this.featureName)
      return q();
    const d = (r = o.getEContainingClass) == null ? void 0 : r.call(o);
    if (!d)
      return q();
    if (d === this.eClass)
      return Ie(j.FEATURE);
    const R = (i = d.getName) == null ? void 0 : i.call(d), B = (l = (u = this.eClass).getName) == null ? void 0 : l.call(u);
    if (R === B) {
      const X = (n = d.getEPackage) == null ? void 0 : n.call(d), U = (c = (g = this.eClass).getEPackage) == null ? void 0 : c.call(g);
      if (X && U && ((h = X.getNsURI) == null ? void 0 : h.call(X)) === ((E = U.getNsURI) == null ? void 0 : E.call(U)))
        return Ie(j.FEATURE);
    }
    return this.isInheritedFrom(d, this.eClass) ? Ie(j.FEATURE - 10) : q();
  }
  /**
   * Check if subClass inherits from superClass.
   */
  isInheritedFrom(e, t) {
    var r, i, u, l, n, g, c;
    const h = (r = e.getEAllSuperTypes) == null ? void 0 : r.call(e);
    if (!h) return !1;
    for (const E of h) {
      if (E === t) return !0;
      if (((i = E.getName) == null ? void 0 : i.call(E)) === ((u = t.getName) == null ? void 0 : u.call(t))) {
        const o = (l = E.getEPackage) == null ? void 0 : l.call(E), d = (n = t.getEPackage) == null ? void 0 : n.call(t);
        if (o && d && ((g = o.getNsURI) == null ? void 0 : g.call(o)) === ((c = d.getNsURI) == null ? void 0 : c.call(d)))
          return !0;
      }
    }
    return !1;
  }
}
var on = Object.defineProperty, cn = (s, e, t) => e in s ? on(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, fa = (s, e, t) => cn(s, typeof e != "symbol" ? e + "" : e, t);
let En = 0;
function hn() {
  return `descriptor-${++En}`;
}
let gn = class {
  constructor() {
    fa(this, "entries", []), fa(this, "instanceOverrides", /* @__PURE__ */ new WeakMap());
  }
  /**
   * Register a component for a specific target.
   * @returns Unregister function
   */
  register(e, t, r = {}) {
    const i = this.createDescriptor(e, t, r), u = { descriptor: i, target: t, options: r };
    return r.replace && (this.entries = this.entries.filter((l) => !this.targetsEqual(l.target, t))), this.entries.push(u), () => this.unregister(i.id);
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
    const l = { feature: e, eObject: t };
    if (this.isEAttribute(e)) {
      l.attribute = e;
      const n = (r = e.getEType) == null ? void 0 : r.call(e);
      n && this.isEEnum(n) && (l.enumType = n);
    } else this.isEReference(e) && (l.reference = e);
    if (t)
      l.eClass = (i = t.eClass) == null ? void 0 : i.call(t);
    else {
      const n = (u = e.getEContainingClass) == null ? void 0 : u.call(e);
      n && (l.eClass = n);
    }
    return this.getComponent(l);
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
    const i = hn();
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
        const r = new rn(e.eClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "datatype": {
        const r = new an(e.dataTypeName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "enum": {
        const r = new un(e.enumName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "reference": {
        const r = new ln(e.containment, e.targetClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "feature": {
        const r = new nn(e.eClass, e.featureName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "instance":
        return (r) => r.eObject === e.eObject ? Ie(t ?? j.INSTANCE) : q();
      case "custom":
        return e.matcher;
      default:
        return () => q();
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
const or = new gn();
var dn = Object.defineProperty, pn = (s, e, t) => e in s ? dn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ia = (s, e, t) => pn(s, typeof e != "symbol" ? e + "" : e, t);
let Tn = class {
  constructor() {
    Ia(this, "lazyRegistrations", []), Ia(this, "resolvedPackages", /* @__PURE__ */ new Map());
  }
  /**
   * Register a decorated component immediately.
   */
  register(e, t, r) {
    or.register(e, t, r);
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
      r ? or.register(t.component, r, t.options) : e.push(t);
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
      const l = (r = u.getEClassifier) == null ? void 0 : r.call(u, e);
      if (l && this.isEClass(l))
        return { type: "eclass", eClass: l };
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
      const l = (r = u.getEClassifier) == null ? void 0 : r.call(u, e);
      if (l && this.isEEnum(l))
        return { type: "enum", enumType: l, enumName: e };
    }
    return null;
  }
  /**
   * Resolve a feature by class name and feature name.
   */
  resolveFeature(e, t, r) {
    var i;
    for (const [u, l] of this.resolvedPackages) {
      if (r && u !== r)
        continue;
      const n = (i = l.getEClassifier) == null ? void 0 : i.call(l, e);
      if (n && this.isEClass(n))
        return {
          type: "feature",
          eClass: n,
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
new Tn();
const ri = Symbol("componentRegistry");
function Sn() {
  const s = nt(ri) ?? or;
  function e(E) {
    return s.getComponent(E);
  }
  function t(E, o) {
    return s.getComponentForFeature(E, o);
  }
  function r(E, o) {
    return s.getComponentForEClass(E, o);
  }
  function i(E, o, d) {
    return s.register(E, o, d);
  }
  function u(E, o) {
    return s.registerForInstance(E, o);
  }
  function l(E, o, d) {
    return s.registerForEClass(E, o, d);
  }
  function n(E, o, d) {
    return s.registerForDataType(E, o, d);
  }
  function g(E, o, d) {
    return s.registerForEnum(E, o, d);
  }
  function c(E, o) {
    return s.registerForReference(E, o);
  }
  function h(E, o, d, R) {
    return s.registerForFeature(E, o, d, R);
  }
  return {
    registry: s,
    getComponent: e,
    getComponentForFeature: t,
    getComponentForEClass: r,
    register: i,
    registerForInstance: u,
    registerForEClass: l,
    registerForDataType: n,
    registerForEnum: g,
    registerForReference: c,
    registerForFeature: h
  };
}
const fn = { class: "uimodel-fallback-widget" }, In = { class: "uimodel-fallback-widget__label" }, mn = {
  key: 0,
  "aria-hidden": "true"
}, Nn = ["rows", "value", "placeholder", "readonly", "disabled"], Ln = /* @__PURE__ */ he({
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
    ), i = m(() => t.value.placeholder ?? ""), u = m(() => g(t.value.readOnly)), l = m(() => g(t.value.required)), n = m(() => {
      var o, d;
      const R = (d = (o = e.custom) == null ? void 0 : o.rawWidget) == null ? void 0 : d.rows, B = Number(R);
      return Number.isFinite(B) && B > 0 ? B : 3;
    });
    function g(o) {
      return o === !0 || o === "true";
    }
    const c = m(() => {
      var o;
      const d = (o = e.eObject) == null ? void 0 : o.eGet(e.feature);
      return d == null ? "" : String(d);
    }), h = br(c.value);
    cr(c, (o) => {
      h.value = o;
    });
    function E(o) {
      var d;
      const R = o.target.value;
      h.value = R, (d = e.eObject) == null || d.eSet(e.feature, R);
    }
    return (o, d) => (L(), G("div", fn, [
      ts("label", In, [
        pi(aa(r.value), 1),
        l.value ? (L(), G("span", mn, " *")) : Er("", !0)
      ]),
      ts("textarea", {
        class: "uimodel-fallback-widget__input",
        rows: n.value,
        value: h.value,
        placeholder: i.value,
        readonly: u.value,
        disabled: u.value,
        onInput: E
      }, null, 40, Nn)
    ]));
  }
}), vn = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, _n = /* @__PURE__ */ vn(Ln, [["__scopeId", "data-v-0237261a"]]), ai = /* @__PURE__ */ he({
  __name: "WidgetComposer",
  props: {
    widget: {},
    model: {}
  },
  setup(s) {
    const e = s, t = /* @__PURE__ */ new Set(), { getComponentForFeature: r } = Sn(), i = Ql(
      () => e.widget.visibilityCondition,
      () => e.model
    ), u = sn(
      () => e.widget,
      () => e.model
    ), l = m(
      () => u.value.boundFeature ?? e.widget.feature
    ), n = m(() => {
      var o, d, R, B, X, U, z, K;
      if (!l.value) return null;
      const te = r(l.value, e.model);
      if (te) return te;
      const _ = ((B = (R = (d = (o = e.widget).eClass) == null ? void 0 : d.call(o)) == null ? void 0 : R.getName) == null ? void 0 : B.call(R)) ?? "WidgetComponent", y = ((K = (z = (U = (X = l.value).getEType) == null ? void 0 : U.call(X)) == null ? void 0 : z.getName) == null ? void 0 : K.call(z)) ?? "?", V = `${_}/${y}`;
      return t.has(V) || (t.add(V), console.warn(
        `[uimodel-composer] Kein Renderer für Widget "${_}" auf Datentyp "${y}" registriert — Fallback als Plaintext-Editor. Host: Renderer über die @emfts/vue-registry registrieren.`
      )), _n;
    }), g = m(() => {
      var o, d;
      return {
        eObject: e.model,
        feature: l.value,
        eClass: (d = (o = e.model).eClass) == null ? void 0 : d.call(o),
        custom: {
          resolvedStyle: u.value,
          rawWidget: e.widget
        }
      };
    }), c = nt(Ur, void 0), h = m(() => (as(), c?.version.value, [
      ...la(e.widget, {
        model: e.model,
        sheets: c?.sheets.value,
        resolvedCss: u.value.css
      }),
      ...Xl(
        e.widget,
        u.value.readOnly,
        u.value.required
      )
    ])), E = m(() => na(e.widget));
    return (o, d) => fe(i) && n.value && !fe(u).featureSuppressed ? (L(), J(sa(n.value), ra({ key: 0 }, { ...g.value, ...E.value }, { class: h.value }), null, 16, ["class"])) : Er("", !0);
  }
}), On = {
  key: 0,
  class: "uimodel-foreach-empty"
}, An = /* @__PURE__ */ he({
  __name: "FieldsRenderer",
  props: {
    fields: {},
    model: {}
  },
  setup(s) {
    const e = s, t = nt(Ja, void 0), r = nt(Ur, void 0), i = m(() => (as(), r?.version.value, ea(e.fields, e.model, t?.value)));
    function u(g, c) {
      const h = String(
        g.layout ?? "VERTICAL"
      ).toLowerCase();
      return [
        ...la(g, {
          model: c,
          sheets: r?.sheets.value,
          resolvedCss: oa(g.styles ?? []).css
        }),
        "uimodel-group",
        `uimodel-group--${h}`
      ];
    }
    function l(g) {
      return g.fields ?? [];
    }
    const n = na;
    return (g, c) => {
      const h = Ti("FieldsRenderer", !0);
      return L(!0), G(ss, null, hr(i.value, (E, o) => (L(), G(ss, { key: o }, [
        E.kind === "note" ? (L(), G("p", On, aa(E.text), 1)) : E.kind === "group" ? (L(), G("div", ra({
          key: 1,
          class: u(E.widget, E.model)
        }, { ref_for: !0 }, fe(n)(E.widget)), [
          lr(h, {
            fields: l(E.widget),
            model: E.model
          }, null, 8, ["fields", "model"])
        ], 16)) : (L(), J(ai, {
          key: 2,
          widget: E.widget,
          model: E.model
        }, null, 8, ["widget", "model"]))
      ], 64))), 128);
    };
  }
}), Cn = { class: "uimodel-form-view" }, ii = /* @__PURE__ */ he({
  __name: "FormViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (L(), G("div", Cn, [
      lr(An, {
        fields: s.component.fields,
        model: s.model
      }, null, 8, ["fields", "model"])
    ]));
  }
}), Dn = { class: "uimodel-section-view" }, yn = /* @__PURE__ */ he({
  __name: "SectionViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (L(), G("div", Dn, [
      (L(!0), G(ss, null, hr(s.component.sections, (r) => (L(), J(ii, {
        key: r.name,
        component: r,
        model: s.model
      }, null, 8, ["component", "model"]))), 128))
    ]));
  }
}), Rn = { class: "uimodel-tab-view" }, wn = ["data-tab"], Fn = /* @__PURE__ */ he({
  __name: "TabViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (L(), G("div", Rn, [
      (L(!0), G(ss, null, hr(s.component.tabs, (r) => (L(), G("div", {
        key: r.name,
        class: "uimodel-tab-panel",
        "data-tab": r.name
      }, [
        lr(ca, {
          component: r,
          model: s.model
        }, null, 8, ["component", "model"])
      ], 8, wn))), 128))
    ]));
  }
}), Pn = { class: "uimodel-summary-view" }, bn = /* @__PURE__ */ he({
  __name: "SummaryViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (L(), G("div", Pn, [
      (L(!0), G(ss, null, hr(s.component.summaryFields, (r) => (L(), J(ai, {
        key: r.name,
        widget: r,
        model: s.model
      }, null, 8, ["widget", "model"]))), 128))
    ]));
  }
}), Mn = {
  key: 1,
  class: "uimodel-table-view-placeholder"
}, ui = /* @__PURE__ */ he({
  __name: "TableViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = ka(), t = m(() => e.getComposer("TableViewRenderer"));
    return (r, i) => t.value ? (L(), J(sa(t.value), {
      key: 0,
      component: s.component,
      model: s.model
    }, null, 8, ["component", "model"])) : (L(), G("div", Mn));
  }
}), Un = { class: "uimodel-master-detail" }, Vn = { class: "uimodel-master" }, Bn = { class: "uimodel-detail" }, Gn = /* @__PURE__ */ he({
  __name: "MasterDetailComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (L(), G("div", Un, [
      ts("div", Vn, [
        lr(ui, {
          component: s.component.master,
          model: s.model
        }, null, 8, ["component", "model"])
      ]),
      ts("div", Bn, [
        lr(ca, {
          component: s.component.detail,
          model: s.model
        }, null, 8, ["component", "model"])
      ])
    ]));
  }
}), Wn = /* @__PURE__ */ he({
  __name: "UIModelComposer",
  props: {
    uiModel: {},
    model: {},
    composerRegistry: {},
    styleSheets: {},
    overlays: {}
  },
  setup(s) {
    const e = s, t = m(() => e.styleSheets ?? []), { version: r } = Ol(t);
    pr(Ur, { sheets: t, version: r }), Yl(() => e.model), pr(
      Ja,
      m(() => (as(), {
        ...Fl(e.uiModel),
        overlayCases: Rl(e.overlays ?? [])
      }))
    );
    const i = e.composerRegistry ?? gl({
      FormView: ii,
      SectionView: yn,
      TabView: Fn,
      SummaryView: bn,
      TableView: ui,
      MasterDetail: Gn
    });
    pr(xa, i);
    function u() {
      return gr(e.uiModel.filterExpression, e.model);
    }
    return (l, n) => u() ? (L(!0), G(ss, { key: 0 }, hr(s.uiModel.components, (g) => (L(), J(ca, {
      key: g.name,
      component: g,
      model: s.model
    }, null, 8, ["component", "model"]))), 128)) : Er("", !0);
  }
});
function ma(s) {
  const e = s;
  return !!e && typeof e.eIsProxy == "function" && e.eIsProxy();
}
function Na(s, e) {
  const t = e.getResourceSet(), r = s.eProxyURI();
  if (!r) return s;
  const i = r.toString(), u = i.indexOf("#");
  if (u > 0) {
    const n = i.substring(0, u), g = i.substring(u + 1);
    if (!t) return s;
    const c = e.getURI(), h = [];
    c && !n.includes("://") && h.push(xr.createURI(n).resolve(c).toString()), h.push(n);
    for (const E of h) {
      const o = t.getResource(xr.createURI(E), !1), d = o?.getEObject(g);
      if (d) return d;
    }
    return s;
  }
  const l = u === 0 ? i.substring(1) : i;
  return e.getEObject(l) ?? s;
}
function La(s, e) {
  for (const t of s.eClass().getEAllReferences()) {
    const r = s.eGet(t);
    if (r) {
      if (t.isMany()) {
        const i = r;
        for (let u = 0; u < i.length; u++) {
          const l = i[u];
          if (ma(l)) {
            const n = Na(l, e);
            n !== l && (i[u] = n);
          }
        }
      } else if (ma(r)) {
        const i = Na(r, e);
        i !== r && s.eSet(t, i);
      }
    }
  }
}
function Yn(s) {
  for (const e of s.getContents()) {
    La(e, s);
    for (const t of e.eAllContents())
      La(t, s);
  }
}
function li(s) {
  return typeof s?.eClass == "function";
}
function ni(s, e) {
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
function oi(s, e) {
  return li(s) ? s : ni(e(), s);
}
const $n = /color|colour/i, xn = /size|width|height|radius|blur|padding|transparence|transparency|opacity|zoom|count|index/i, kn = /^(is|has|show|enable|fullscreen|visible)/i;
function Pr(s) {
  const e = s.getName?.() ?? "", t = s.getEType?.()?.getName?.() ?? "";
  return t === "EBoolean" || kn.test(e) ? "flag" : $n.test(e) ? "colour" : t === "EInt" || t === "EDouble" || xn.test(e) ? "number" : "text";
}
function ha(s) {
  const t = (s.getName?.() ?? "").replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function ci(s, e = s.getName?.() ?? "Settings") {
  const t = ia.eINSTANCE, r = t.createFormView();
  r.name = e;
  for (const u of s.getEStructuralFeatures()) {
    const l = Xn(t, u);
    l.feature = u, l.label = ha(u), r.fields.push(l);
  }
  const i = t.createUIModel();
  return i.name = e, i.targetClasses.push(s), i.components.push(r), i;
}
function Xn(s, e) {
  switch (Pr(e)) {
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
const Hn = { class: "field-row__control" }, jn = ["title", "aria-pressed"], qn = /* @__PURE__ */ he({
  __name: "VariableWrapperWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = nt(Oi), r = m(() => {
      const { eObject: _, feature: y } = e;
      if (!_ || !y) return;
      const V = y.getName?.();
      return V ? _[V] : void 0;
    }), i = m(() => r.value?.variable ?? ""), u = m(() => !!i.value), l = br(!1);
    cr(u, (_) => {
      _ && (l.value = !0);
    }, { immediate: !0 });
    const n = m(() => {
      try {
        return (t?.getAllVariables() ?? []).map(([_]) => _);
      } catch {
        return [];
      }
    }), g = m({
      get: () => i.value,
      set: (_) => {
        if (!r.value) return;
        if (!_) return c();
        const y = t?.getVariable(_);
        y && r.value.setTo(y);
      }
    });
    function c() {
      r.value && (r.value.value = r.value.value, l.value = !1);
    }
    function h() {
      u.value ? c() : l.value = !l.value;
    }
    const E = m(() => !e.custom?.resolvedStyle?.readOnly && !u.value), o = m({
      get: () => r.value?.value ?? "",
      set: (_) => {
        r.value && E.value && (r.value.value = _);
      }
    }), d = m({
      get: () => {
        const _ = Number(r.value?.value);
        return Number.isFinite(_) ? _ : 0;
      },
      set: (_) => {
        r.value && E.value && (r.value.value = String(_));
      }
    }), R = m({
      get: () => r.value?.value === !0 || r.value?.value === "true",
      set: (_) => {
        r.value && E.value && (r.value.value = _);
      }
    }), B = m(() => e.custom?.rawWidget?.eClass?.()?.getName?.() ?? ""), X = m(() => {
      const _ = e.custom?.rawWidget?.values;
      return _ && typeof _.map == "function" ? [..._] : [];
    }), U = m(() => ({
      min: e.custom?.rawWidget?.min,
      max: e.custom?.rawWidget?.max,
      step: e.custom?.rawWidget?.step
    })), z = m(() => {
      switch (B.value) {
        case "CheckboxWidget":
          return "flag";
        case "NumberWidget":
          return "number";
        case "SelectWidget":
        case "ComboboxWidget":
          return "choice";
        case "InputWidget":
          return e.feature && Pr(e.feature) === "colour" ? "colour" : "text";
        default:
          return e.feature ? Pr(e.feature) : "text";
      }
    }), K = m(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? ha(e.feature) : "")
    ), te = m(() => l.value && n.value.length === 0);
    return (_, y) => r.value ? (L(), G("div", {
      key: 0,
      class: ga(["field-row", { "field-row--bound": u.value }])
    }, [
      ts("div", Hn, [
        l.value && !te.value ? (L(), J(fe(pa), {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": y[0] || (y[0] = (V) => g.value = V),
          label: K.value,
          options: n.value,
          disabled: s.custom?.resolvedStyle?.readOnly,
          placeholder: "Keine Variable",
          clearable: ""
        }, null, 8, ["modelValue", "label", "options", "disabled"])) : te.value ? (L(), J(fe(Br), {
          key: 1,
          "model-value": "",
          label: K.value,
          disabled: "",
          hint: "Es sind noch keine Variablen angelegt."
        }, null, 8, ["label"])) : z.value === "flag" ? (L(), J(fe(Ai), {
          key: 2,
          modelValue: R.value,
          "onUpdate:modelValue": y[1] || (y[1] = (V) => R.value = V),
          label: K.value,
          disabled: !E.value
        }, null, 8, ["modelValue", "label", "disabled"])) : z.value === "choice" ? (L(), J(fe(pa), {
          key: 3,
          modelValue: o.value,
          "onUpdate:modelValue": y[2] || (y[2] = (V) => o.value = V),
          label: K.value,
          options: X.value,
          disabled: !E.value,
          clearable: ""
        }, null, 8, ["modelValue", "label", "options", "disabled"])) : z.value === "colour" ? (L(), J(fe(Ci), {
          key: 4,
          modelValue: o.value,
          "onUpdate:modelValue": y[3] || (y[3] = (V) => o.value = V),
          label: K.value,
          disabled: !E.value
        }, null, 8, ["modelValue", "label", "disabled"])) : z.value === "number" ? (L(), J(fe(Br), {
          key: 5,
          modelValue: d.value,
          "onUpdate:modelValue": y[4] || (y[4] = (V) => d.value = V),
          label: K.value,
          type: "number",
          min: U.value.min,
          max: U.value.max,
          step: U.value.step,
          disabled: !E.value
        }, null, 8, ["modelValue", "label", "min", "max", "step", "disabled"])) : (L(), J(fe(Br), {
          key: 6,
          modelValue: o.value,
          "onUpdate:modelValue": y[5] || (y[5] = (V) => o.value = V),
          label: K.value,
          placeholder: s.custom?.resolvedStyle?.placeholder,
          disabled: !E.value
        }, null, 8, ["modelValue", "label", "placeholder", "disabled"]))
      ]),
      ts("button", {
        type: "button",
        class: ga(["bind", { on: u.value, armed: l.value && !u.value }]),
        title: u.value ? `Bindung an „${i.value}“ lösen` : "An eine Variable binden",
        "aria-pressed": u.value,
        onClick: h
      }, " {x} ", 10, jn)
    ], 2)) : Er("", !0);
  }
}), Ei = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, hi = /* @__PURE__ */ Ei(qn, [["__scopeId", "data-v-01463c81"]]), Kn = "org.eclipse.daanse.board.app.ui.vue.composables";
let va = !1;
function zn() {
  if (va) return !0;
  const s = Lr.INSTANCE.getEPackage(Kn)?.getEClassifier(
    "VariableWrapper"
  );
  return s ? (or.registerForReference(hi, { targetClass: s }), va = !0, !0) : !1;
}
const _a = /* @__PURE__ */ new Map();
let Oa = !1;
function Qn() {
  if (Oa) return;
  _i();
  const s = v.eINSTANCE;
  s.setEFactoryInstance(ia.eINSTANCE), Lr.INSTANCE.set(s.getNsURI(), s), Oa = !0;
}
function gi(s, e, t = "/ui.xmi") {
  const r = _a.get(t);
  if (r) return r;
  try {
    Qn();
    const i = e.getNsURI();
    i && !Lr.INSTANCE.has(i) && Lr.INSTANCE.set(i, e);
    const u = new Li();
    u.getResourceFactoryRegistry().getExtensionToFactoryMap().set("xmi", new vi());
    const l = u.createResource(xr.createURI(t));
    if (l.loadFromString(s), l.getContents().size() === 0) return;
    Yn(l);
    const n = l.getContents().get(0);
    return _a.set(t, n), n;
  } catch (i) {
    console.warn("[ui.vue.uimodel] UI-Modell konnte nicht gelesen werden:", i);
    return;
  }
}
const Jn = { class: "settings-form" }, Zn = {
  key: 1,
  class: "settings-form__empty"
}, eo = /* @__PURE__ */ he({
  __name: "SettingsForm",
  props: /* @__PURE__ */ Si({
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
    v.eINSTANCE, pr(ri, or), zn();
    const e = fi(s, "modelValue"), t = s;
    function r() {
      const c = oi(e.value, t.create);
      c !== e.value && (e.value = c);
    }
    Ii(r), cr(e, r);
    const i = m(() => e.value), u = da(), l = da(), n = m(() => {
      if (t.uiModel) return Vr(t.uiModel);
      if (t.uiModelXmi && t.domainPackage) {
        const E = gi(t.uiModelXmi, t.domainPackage, t.uiModelUri);
        if (E) return Vr(E);
      }
      const h = i.value?.eClass?.();
      if (h)
        return l.value !== h && (l.value = h, u.value = Vr(ci(h))), u.value;
    }), g = m(() => (i.value?.eClass?.().getEStructuralFeatures().length ?? 0) > 0);
    return (c, h) => (L(), G("div", Jn, [
      n.value && i.value && g.value ? (L(), J(fe(Wn), {
        key: 0,
        "ui-model": n.value,
        model: i.value
      }, null, 8, ["ui-model", "model"])) : (L(), G("p", Zn, aa(s.emptyText ?? "Für dieses Widget sind keine Einstellungen modelliert."), 1))
    ]));
  }
}), to = /* @__PURE__ */ Ei(eo, [["__scopeId", "data-v-744c04d1"]]), so = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SettingsForm: to,
  VariableWrapperWidget: hi,
  adopt: ni,
  asModel: oi,
  formFor: ci,
  isModelled: li,
  kindOf: Pr,
  labelOf: ha,
  loadUIModel: gi
}, Symbol.toStringTag, { value: "Module" })), Aa = "org.eclipse.daanse.board.app.ui.vue.uimodel", ro = "0.0.1-next.1";
async function po(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${Aa}: tsm runtime is not initialized`);
  e.register(Aa, so, ro, "ui.vue.uimodel"), await void 0;
}
async function To(s) {
  await void 0;
}
export {
  to as SettingsForm,
  hi as VariableWrapperWidget,
  po as activate,
  ni as adopt,
  oi as asModel,
  To as deactivate,
  ci as formFor,
  li as isModelled,
  Pr as kindOf,
  ha as labelOf,
  gi as loadUIModel
};
