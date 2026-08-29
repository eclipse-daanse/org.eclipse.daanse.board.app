(function(){var i="ui.vue.uimodel",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".bound-field--variable[data-v-3a8850bb]{border-left:2px solid var(--color-brand);padding-left:6px;margin-left:-8px}.settings-form[data-v-744c04d1]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.settings-form[data-v-744c04d1] .uim-c-GroupWidget{padding-top:10px;margin-top:10px;border-top:1px solid var(--color-divider)}.settings-form[data-v-744c04d1] .uim-c-GroupWidget:first-child{padding-top:0;margin-top:0;border-top:0}.settings-form__empty[data-v-744c04d1]{margin:0;padding:12px 0;font-size:var(--text-sm);color:var(--color-dim)}\n";})();
import { inject as es, watchEffect as hi, onScopeDispose as Zr, ref as ea, computed as L, watch as Pr, toValue as Fe, defineComponent as ue, createBlock as ie, createCommentVNode as or, openBlock as A, resolveDynamicComponent as ta, mergeProps as sa, createElementBlock as U, createElementVNode as mr, createTextVNode as gi, toDisplayString as ra, unref as we, resolveComponent as pi, Fragment as ts, renderList as cr, createVNode as ur, provide as gr, normalizeClass as di, mergeModels as Ti, useModel as Si, onMounted as fi, shallowRef as ha, markRaw as Ur } from "vue";
import { BasicEPackage as Ii, BasicEClass as C, BasicEAttribute as d, BasicEReference as S, getEcorePackage as Xt, BasicEObject as Qe, BasicEFactory as mi, EContentAdapter as Oa, URI as Yr, EPackageRegistry as Nr, BasicResourceSet as Ni, XMIResourceFactory as Li, registerEcorePackage as _i } from "@emfts/core";
import { DCheckbox as vi, DSelect as Oi, DColorInput as Ai, DInput as ga } from "org.eclipse.daanse.board.app.ui.vue.controls";
var Ci = Object.defineProperty, Di = (s, e, t) => e in s ? Ci(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, er = (s, e, t) => Di(s, typeof e != "symbol" ? e + "" : e, t);
const Ht = class a extends Ii {
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
    const e = new C();
    e.setName("UIModel"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), a.Literals.U_I_MODEL = e;
    const t = new d();
    t.setName("name"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), a.Literals.U_I_MODEL__NAME = t;
    const r = new S();
    r.setContainment(!1), r.setName("targetClasses"), r.setLowerBound(0), r.setUpperBound(-1), e.getEStructuralFeatures().push(r), a.Literals.U_I_MODEL__TARGET_CLASSES = r;
    const i = new d();
    i.setName("priority"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), a.Literals.U_I_MODEL__PRIORITY = i;
    const u = new S();
    u.setContainment(!0), u.setName("filterExpression"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), a.Literals.U_I_MODEL__FILTER_EXPRESSION = u;
    const n = new S();
    n.setContainment(!0), n.setName("styles"), n.setLowerBound(0), n.setUpperBound(-1), e.getEStructuralFeatures().push(n), a.Literals.U_I_MODEL__STYLES = n;
    const l = new S();
    l.setContainment(!0), l.setName("templates"), l.setLowerBound(0), l.setUpperBound(-1), e.getEStructuralFeatures().push(l), a.Literals.U_I_MODEL__TEMPLATES = l;
    const g = new S();
    g.setContainment(!0), g.setName("components"), g.setLowerBound(1), g.setUpperBound(-1), e.getEStructuralFeatures().push(g), a.Literals.U_I_MODEL__COMPONENTS = g;
    const c = new C();
    c.setName("Component"), c.setAbstract(!0), c.setInterface(!1), this.getEClassifiers().push(c), c.setEPackage(this), a.Literals.COMPONENT = c;
    const E = new d();
    E.setName("name"), E.setLowerBound(1), E.setUpperBound(1), c.getEStructuralFeatures().push(E), a.Literals.COMPONENT__NAME = E;
    const h = new d();
    h.setName("group"), h.setLowerBound(0), h.setUpperBound(1), c.getEStructuralFeatures().push(h), a.Literals.COMPONENT__GROUP = h;
    const o = new S();
    o.setContainment(!1), o.setName("targetClasses"), o.setLowerBound(0), o.setUpperBound(-1), c.getEStructuralFeatures().push(o), a.Literals.COMPONENT__TARGET_CLASSES = o;
    const p = new S();
    p.setContainment(!1), p.setName("styles"), p.setLowerBound(0), p.setUpperBound(-1), c.getEStructuralFeatures().push(p), a.Literals.COMPONENT__STYLES = p;
    const N = new S();
    N.setContainment(!1), N.setName("children"), N.setLowerBound(0), N.setUpperBound(-1), c.getEStructuralFeatures().push(N), a.Literals.COMPONENT__CHILDREN = N;
    const _ = new C();
    _.setName("FormView"), _.setAbstract(!1), _.setInterface(!1), this.getEClassifiers().push(_), _.setEPackage(this), a.Literals.FORM_VIEW = _;
    const X = new S();
    X.setContainment(!0), X.setName("fields"), X.setLowerBound(0), X.setUpperBound(-1), _.getEStructuralFeatures().push(X), a.Literals.FORM_VIEW__FIELDS = X;
    const M = new S();
    M.setContainment(!0), M.setName("validations"), M.setLowerBound(0), M.setUpperBound(-1), _.getEStructuralFeatures().push(M), a.Literals.FORM_VIEW__VALIDATIONS = M;
    const ge = new S();
    ge.setContainment(!0), ge.setName("validationMappers"), ge.setLowerBound(0), ge.setUpperBound(-1), _.getEStructuralFeatures().push(ge), a.Literals.FORM_VIEW__VALIDATION_MAPPERS = ge;
    const Pe = new d();
    Pe.setName("mapperOrder"), Pe.setLowerBound(0), Pe.setUpperBound(1), _.getEStructuralFeatures().push(Pe), a.Literals.FORM_VIEW__MAPPER_ORDER = Pe;
    const pe = new C();
    pe.setName("TableView"), pe.setAbstract(!1), pe.setInterface(!1), this.getEClassifiers().push(pe), pe.setEPackage(this), a.Literals.TABLE_VIEW = pe;
    const ve = new S();
    ve.setContainment(!0), ve.setName("tableStyle"), ve.setLowerBound(1), ve.setUpperBound(1), pe.getEStructuralFeatures().push(ve), a.Literals.TABLE_VIEW__TABLE_STYLE = ve;
    const de = new C();
    de.setName("SectionView"), de.setAbstract(!1), de.setInterface(!1), this.getEClassifiers().push(de), de.setEPackage(this), a.Literals.SECTION_VIEW = de;
    const Oe = new S();
    Oe.setContainment(!0), Oe.setName("sections"), Oe.setLowerBound(1), Oe.setUpperBound(-1), de.getEStructuralFeatures().push(Oe), a.Literals.SECTION_VIEW__SECTIONS = Oe;
    const Je = new C();
    Je.setName("TabView"), Je.setAbstract(!1), Je.setInterface(!1), this.getEClassifiers().push(Je), Je.setEPackage(this), a.Literals.TAB_VIEW = Je;
    const ct = new S();
    ct.setContainment(!0), ct.setName("tabs"), ct.setLowerBound(1), ct.setUpperBound(-1), Je.getEStructuralFeatures().push(ct), a.Literals.TAB_VIEW__TABS = ct;
    const Ze = new C();
    Ze.setName("SummaryView"), Ze.setAbstract(!1), Ze.setInterface(!1), this.getEClassifiers().push(Ze), Ze.setEPackage(this), a.Literals.SUMMARY_VIEW = Ze;
    const Et = new S();
    Et.setContainment(!0), Et.setName("summaryFields"), Et.setLowerBound(1), Et.setUpperBound(-1), Ze.getEStructuralFeatures().push(Et), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS = Et;
    const be = new C();
    be.setName("MasterDetail"), be.setAbstract(!1), be.setInterface(!1), this.getEClassifiers().push(be), be.setEPackage(this), a.Literals.MASTER_DETAIL = be;
    const ht = new S();
    ht.setContainment(!0), ht.setName("master"), ht.setLowerBound(1), ht.setUpperBound(1), be.getEStructuralFeatures().push(ht), a.Literals.MASTER_DETAIL__MASTER = ht;
    const gt = new S();
    gt.setContainment(!0), gt.setName("detail"), gt.setLowerBound(1), gt.setUpperBound(1), be.getEStructuralFeatures().push(gt), a.Literals.MASTER_DETAIL__DETAIL = gt;
    const H = new C();
    H.setName("WidgetComponent"), H.setAbstract(!0), H.setInterface(!1), this.getEClassifiers().push(H), H.setEPackage(this), a.Literals.WIDGET_COMPONENT = H;
    const pt = new S();
    pt.setContainment(!1), pt.setName("feature"), pt.setLowerBound(0), pt.setUpperBound(1), H.getEStructuralFeatures().push(pt), a.Literals.WIDGET_COMPONENT__FEATURE = pt;
    const as = new d();
    as.setName("label"), as.setLowerBound(0), as.setUpperBound(1), H.getEStructuralFeatures().push(as), a.Literals.WIDGET_COMPONENT__LABEL = as;
    const is = new d();
    is.setName("placeholder"), is.setLowerBound(0), is.setUpperBound(1), H.getEStructuralFeatures().push(is), a.Literals.WIDGET_COMPONENT__PLACEHOLDER = is;
    const us = new d();
    us.setName("readOnly"), us.setLowerBound(0), us.setUpperBound(1), H.getEStructuralFeatures().push(us), a.Literals.WIDGET_COMPONENT__READ_ONLY = us;
    const ns = new d();
    ns.setName("required"), ns.setLowerBound(0), ns.setUpperBound(1), H.getEStructuralFeatures().push(ns), a.Literals.WIDGET_COMPONENT__REQUIRED = ns;
    const dt = new S();
    dt.setContainment(!0), dt.setName("visibilityCondition"), dt.setLowerBound(0), dt.setUpperBound(1), H.getEStructuralFeatures().push(dt), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION = dt;
    const Tt = new S();
    Tt.setContainment(!0), Tt.setName("validations"), Tt.setLowerBound(0), Tt.setUpperBound(-1), H.getEStructuralFeatures().push(Tt), a.Literals.WIDGET_COMPONENT__VALIDATIONS = Tt;
    const St = new S();
    St.setContainment(!0), St.setName("validationMappers"), St.setLowerBound(0), St.setUpperBound(-1), H.getEStructuralFeatures().push(St), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS = St;
    const ft = new S();
    ft.setContainment(!0), ft.setName("bindings"), ft.setLowerBound(0), ft.setUpperBound(-1), H.getEStructuralFeatures().push(ft), a.Literals.WIDGET_COMPONENT__BINDINGS = ft;
    const Me = new C();
    Me.setName("PropertyBinding"), Me.setAbstract(!1), Me.setInterface(!1), this.getEClassifiers().push(Me), Me.setEPackage(this), a.Literals.PROPERTY_BINDING = Me;
    const ls = new d();
    ls.setName("property"), ls.setLowerBound(1), ls.setUpperBound(1), Me.getEStructuralFeatures().push(ls), a.Literals.PROPERTY_BINDING__PROPERTY = ls;
    const It = new S();
    It.setContainment(!0), It.setName("expression"), It.setLowerBound(1), It.setUpperBound(1), Me.getEStructuralFeatures().push(It), a.Literals.PROPERTY_BINDING__EXPRESSION = It;
    const Ae = new C();
    Ae.setName("InputWidget"), Ae.setAbstract(!1), Ae.setInterface(!1), this.getEClassifiers().push(Ae), Ae.setEPackage(this), a.Literals.INPUT_WIDGET = Ae;
    const os = new d();
    os.setName("maxLength"), os.setLowerBound(0), os.setUpperBound(1), Ae.getEStructuralFeatures().push(os), a.Literals.INPUT_WIDGET__MAX_LENGTH = os;
    const cs = new d();
    cs.setName("value"), cs.setLowerBound(0), cs.setUpperBound(1), Ae.getEStructuralFeatures().push(cs), a.Literals.INPUT_WIDGET__VALUE = cs;
    const Es = new d();
    Es.setName("password"), Es.setLowerBound(0), Es.setUpperBound(1), Ae.getEStructuralFeatures().push(Es), a.Literals.INPUT_WIDGET__PASSWORD = Es;
    const Ce = new C();
    Ce.setName("TextAreaWidget"), Ce.setAbstract(!1), Ce.setInterface(!1), this.getEClassifiers().push(Ce), Ce.setEPackage(this), a.Literals.TEXT_AREA_WIDGET = Ce;
    const hs = new d();
    hs.setName("rows"), hs.setLowerBound(0), hs.setUpperBound(1), Ce.getEStructuralFeatures().push(hs), a.Literals.TEXT_AREA_WIDGET__ROWS = hs;
    const gs = new d();
    gs.setName("maxLength"), gs.setLowerBound(0), gs.setUpperBound(1), Ce.getEStructuralFeatures().push(gs), a.Literals.TEXT_AREA_WIDGET__MAX_LENGTH = gs;
    const ps = new d();
    ps.setName("value"), ps.setLowerBound(0), ps.setUpperBound(1), Ce.getEStructuralFeatures().push(ps), a.Literals.TEXT_AREA_WIDGET__VALUE = ps;
    const Te = new C();
    Te.setName("NumberWidget"), Te.setAbstract(!1), Te.setInterface(!1), this.getEClassifiers().push(Te), Te.setEPackage(this), a.Literals.NUMBER_WIDGET = Te;
    const ds = new d();
    ds.setName("min"), ds.setLowerBound(0), ds.setUpperBound(1), Te.getEStructuralFeatures().push(ds), a.Literals.NUMBER_WIDGET__MIN = ds;
    const Ts = new d();
    Ts.setName("max"), Ts.setLowerBound(0), Ts.setUpperBound(1), Te.getEStructuralFeatures().push(Ts), a.Literals.NUMBER_WIDGET__MAX = Ts;
    const Ss = new d();
    Ss.setName("step"), Ss.setLowerBound(0), Ss.setUpperBound(1), Te.getEStructuralFeatures().push(Ss), a.Literals.NUMBER_WIDGET__STEP = Ss;
    const fs = new d();
    fs.setName("value"), fs.setLowerBound(0), fs.setUpperBound(1), Te.getEStructuralFeatures().push(fs), a.Literals.NUMBER_WIDGET__VALUE = fs;
    const Ue = new C();
    Ue.setName("CheckboxWidget"), Ue.setAbstract(!1), Ue.setInterface(!1), this.getEClassifiers().push(Ue), Ue.setEPackage(this), a.Literals.CHECKBOX_WIDGET = Ue;
    const Is = new d();
    Is.setName("asToggle"), Is.setLowerBound(0), Is.setUpperBound(1), Ue.getEStructuralFeatures().push(Is), a.Literals.CHECKBOX_WIDGET__AS_TOGGLE = Is;
    const ms = new d();
    ms.setName("value"), ms.setLowerBound(0), ms.setUpperBound(1), Ue.getEStructuralFeatures().push(ms), a.Literals.CHECKBOX_WIDGET__VALUE = ms;
    const Se = new C();
    Se.setName("DateWidget"), Se.setAbstract(!1), Se.setInterface(!1), this.getEClassifiers().push(Se), Se.setEPackage(this), a.Literals.DATE_WIDGET = Se;
    const Ns = new d();
    Ns.setName("withTime"), Ns.setLowerBound(0), Ns.setUpperBound(1), Se.getEStructuralFeatures().push(Ns), a.Literals.DATE_WIDGET__WITH_TIME = Ns;
    const Ls = new d();
    Ls.setName("format"), Ls.setLowerBound(0), Ls.setUpperBound(1), Se.getEStructuralFeatures().push(Ls), a.Literals.DATE_WIDGET__FORMAT = Ls;
    const mt = new S();
    mt.setContainment(!1), mt.setName("constrains"), mt.setLowerBound(0), mt.setUpperBound(1), Se.getEStructuralFeatures().push(mt), a.Literals.DATE_WIDGET__CONSTRAINS = mt;
    const _s = new d();
    _s.setName("value"), _s.setLowerBound(0), _s.setUpperBound(1), Se.getEStructuralFeatures().push(_s), a.Literals.DATE_WIDGET__VALUE = _s;
    const De = new C();
    De.setName("ComboboxWidget"), De.setAbstract(!1), De.setInterface(!1), this.getEClassifiers().push(De), De.setEPackage(this), a.Literals.COMBOBOX_WIDGET = De;
    const Nt = new S();
    Nt.setContainment(!0), Nt.setName("optionLabel"), Nt.setLowerBound(0), Nt.setUpperBound(1), De.getEStructuralFeatures().push(Nt), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL = Nt;
    const vs = new d();
    vs.setName("minSearchLength"), vs.setLowerBound(0), vs.setUpperBound(1), De.getEStructuralFeatures().push(vs), a.Literals.COMBOBOX_WIDGET__MIN_SEARCH_LENGTH = vs;
    const Os = new d();
    Os.setName("multiSelect"), Os.setLowerBound(0), Os.setUpperBound(1), De.getEStructuralFeatures().push(Os), a.Literals.COMBOBOX_WIDGET__MULTI_SELECT = Os;
    const fe = new C();
    fe.setName("SelectWidget"), fe.setAbstract(!1), fe.setInterface(!1), this.getEClassifiers().push(fe), fe.setEPackage(this), a.Literals.SELECT_WIDGET = fe;
    const Lt = new S();
    Lt.setContainment(!0), Lt.setName("optionLabel"), Lt.setLowerBound(0), Lt.setUpperBound(1), fe.getEStructuralFeatures().push(Lt), a.Literals.SELECT_WIDGET__OPTION_LABEL = Lt;
    const As = new d();
    As.setName("multiSelect"), As.setLowerBound(0), As.setUpperBound(1), fe.getEStructuralFeatures().push(As), a.Literals.SELECT_WIDGET__MULTI_SELECT = As;
    const Cs = new d();
    Cs.setName("asButtonGroup"), Cs.setLowerBound(0), Cs.setUpperBound(1), fe.getEStructuralFeatures().push(Cs), a.Literals.SELECT_WIDGET__AS_BUTTON_GROUP = Cs;
    const Ds = new d();
    Ds.setName("values"), Ds.setLowerBound(0), Ds.setUpperBound(-1), fe.getEStructuralFeatures().push(Ds), a.Literals.SELECT_WIDGET__VALUES = Ds;
    const ne = new C();
    ne.setName("AllFeatures"), ne.setAbstract(!1), ne.setInterface(!1), this.getEClassifiers().push(ne), ne.setEPackage(this), a.Literals.ALL_FEATURES = ne;
    const _t = new S();
    _t.setContainment(!1), _t.setName("with"), _t.setLowerBound(0), _t.setUpperBound(-1), ne.getEStructuralFeatures().push(_t), a.Literals.ALL_FEATURES__WITH = _t;
    const vt = new S();
    vt.setContainment(!1), vt.setName("eType"), vt.setLowerBound(0), vt.setUpperBound(-1), ne.getEStructuralFeatures().push(vt), a.Literals.ALL_FEATURES__E_TYPE = vt;
    const Ot = new S();
    Ot.setContainment(!0), Ot.setName("filter"), Ot.setLowerBound(0), Ot.setUpperBound(1), ne.getEStructuralFeatures().push(Ot), a.Literals.ALL_FEATURES__FILTER = Ot;
    const At = new S();
    At.setContainment(!1), At.setName("template"), At.setLowerBound(0), At.setUpperBound(1), ne.getEStructuralFeatures().push(At), a.Literals.ALL_FEATURES__TEMPLATE = At;
    const Ct = new S();
    Ct.setContainment(!0), Ct.setName("cases"), Ct.setLowerBound(0), Ct.setUpperBound(-1), ne.getEStructuralFeatures().push(Ct), a.Literals.ALL_FEATURES__CASES = Ct;
    const ys = new d();
    ys.setName("priority"), ys.setLowerBound(0), ys.setUpperBound(1), ne.getEStructuralFeatures().push(ys), a.Literals.ALL_FEATURES__PRIORITY = ys;
    const Ve = new C();
    Ve.setName("TemplateCase"), Ve.setAbstract(!1), Ve.setInterface(!1), this.getEClassifiers().push(Ve), Ve.setEPackage(this), a.Literals.TEMPLATE_CASE = Ve;
    const Dt = new S();
    Dt.setContainment(!0), Dt.setName("when"), Dt.setLowerBound(0), Dt.setUpperBound(1), Ve.getEStructuralFeatures().push(Dt), a.Literals.TEMPLATE_CASE__WHEN = Dt;
    const yt = new S();
    yt.setContainment(!1), yt.setName("widget"), yt.setLowerBound(1), yt.setUpperBound(1), Ve.getEStructuralFeatures().push(yt), a.Literals.TEMPLATE_CASE__WIDGET = yt;
    const Be = new C();
    Be.setName("GroupWidget"), Be.setAbstract(!1), Be.setInterface(!1), this.getEClassifiers().push(Be), Be.setEPackage(this), a.Literals.GROUP_WIDGET = Be;
    const Rt = new S();
    Rt.setContainment(!0), Rt.setName("fields"), Rt.setLowerBound(0), Rt.setUpperBound(-1), Be.getEStructuralFeatures().push(Rt), a.Literals.GROUP_WIDGET__FIELDS = Rt;
    const Rs = new d();
    Rs.setName("layout"), Rs.setLowerBound(0), Rs.setUpperBound(1), Be.getEStructuralFeatures().push(Rs), a.Literals.GROUP_WIDGET__LAYOUT = Rs;
    const ye = new C();
    ye.setName("Conditional"), ye.setAbstract(!1), ye.setInterface(!1), this.getEClassifiers().push(ye), ye.setEPackage(this), a.Literals.CONDITIONAL = ye;
    const wt = new S();
    wt.setContainment(!0), wt.setName("condition"), wt.setLowerBound(1), wt.setUpperBound(1), ye.getEStructuralFeatures().push(wt), a.Literals.CONDITIONAL__CONDITION = wt;
    const Ft = new S();
    Ft.setContainment(!0), Ft.setName("then"), Ft.setLowerBound(0), Ft.setUpperBound(-1), ye.getEStructuralFeatures().push(Ft), a.Literals.CONDITIONAL__THEN = Ft;
    const Pt = new S();
    Pt.setContainment(!0), Pt.setName("else"), Pt.setLowerBound(0), Pt.setUpperBound(-1), ye.getEStructuralFeatures().push(Pt), a.Literals.CONDITIONAL__ELSE = Pt;
    const Re = new C();
    Re.setName("ForEach"), Re.setAbstract(!1), Re.setInterface(!1), this.getEClassifiers().push(Re), Re.setEPackage(this), a.Literals.FOR_EACH = Re;
    const bt = new S();
    bt.setContainment(!0), bt.setName("items"), bt.setLowerBound(1), bt.setUpperBound(1), Re.getEStructuralFeatures().push(bt), a.Literals.FOR_EACH__ITEMS = bt;
    const Mt = new S();
    Mt.setContainment(!0), Mt.setName("body"), Mt.setLowerBound(0), Mt.setUpperBound(-1), Re.getEStructuralFeatures().push(Mt), a.Literals.FOR_EACH__BODY = Mt;
    const ws = new d();
    ws.setName("emptyText"), ws.setLowerBound(0), ws.setUpperBound(1), Re.getEStructuralFeatures().push(ws), a.Literals.FOR_EACH__EMPTY_TEXT = ws;
    const Ge = new C();
    Ge.setName("ReferenceLinkWidget"), Ge.setAbstract(!1), Ge.setInterface(!1), this.getEClassifiers().push(Ge), Ge.setEPackage(this), a.Literals.REFERENCE_LINK_WIDGET = Ge;
    const Ut = new S();
    Ut.setContainment(!0), Ut.setName("displayExpression"), Ut.setLowerBound(0), Ut.setUpperBound(1), Ge.getEStructuralFeatures().push(Ut), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION = Ut;
    const Fs = new d();
    Fs.setName("targetRoute"), Fs.setLowerBound(0), Fs.setUpperBound(1), Ge.getEStructuralFeatures().push(Fs), a.Literals.REFERENCE_LINK_WIDGET__TARGET_ROUTE = Fs;
    const Ie = new C();
    Ie.setName("UIModelOverlay"), Ie.setAbstract(!1), Ie.setInterface(!1), this.getEClassifiers().push(Ie), Ie.setEPackage(this), a.Literals.U_I_MODEL_OVERLAY = Ie;
    const Ps = new d();
    Ps.setName("name"), Ps.setLowerBound(0), Ps.setUpperBound(1), Ie.getEStructuralFeatures().push(Ps), a.Literals.U_I_MODEL_OVERLAY__NAME = Ps;
    const bs = new d();
    bs.setName("priority"), bs.setLowerBound(0), bs.setUpperBound(1), Ie.getEStructuralFeatures().push(bs), a.Literals.U_I_MODEL_OVERLAY__PRIORITY = bs;
    const Vt = new S();
    Vt.setContainment(!0), Vt.setName("templates"), Vt.setLowerBound(0), Vt.setUpperBound(-1), Ie.getEStructuralFeatures().push(Vt), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES = Vt;
    const Bt = new S();
    Bt.setContainment(!0), Bt.setName("cases"), Bt.setLowerBound(0), Bt.setUpperBound(-1), Ie.getEStructuralFeatures().push(Bt), a.Literals.U_I_MODEL_OVERLAY__CASES = Bt;
    const We = new C();
    We.setName("Style"), We.setAbstract(!0), We.setInterface(!0), this.getEClassifiers().push(We), We.setEPackage(this), a.Literals.STYLE = We;
    const Ms = new d();
    Ms.setName("name"), Ms.setLowerBound(0), Ms.setUpperBound(1), We.getEStructuralFeatures().push(Ms), a.Literals.STYLE__NAME = Ms;
    const Us = new d();
    Us.setName("group"), Us.setLowerBound(0), Us.setUpperBound(1), We.getEStructuralFeatures().push(Us), a.Literals.STYLE__GROUP = Us;
    const me = new C();
    me.setName("BaseStyle"), me.setAbstract(!0), me.setInterface(!1), this.getEClassifiers().push(me), me.setEPackage(this), a.Literals.BASE_STYLE = me;
    const Gt = new S();
    Gt.setContainment(!1), Gt.setName("extends"), Gt.setLowerBound(0), Gt.setUpperBound(1), me.getEStructuralFeatures().push(Gt), a.Literals.BASE_STYLE__EXTENDS = Gt;
    const Vs = new d();
    Vs.setName("css"), Vs.setLowerBound(0), Vs.setUpperBound(1), me.getEStructuralFeatures().push(Vs), a.Literals.BASE_STYLE__CSS = Vs;
    const Bs = new d();
    Bs.setName("vueComponent"), Bs.setLowerBound(0), Bs.setUpperBound(1), me.getEStructuralFeatures().push(Bs), a.Literals.BASE_STYLE__VUE_COMPONENT = Bs;
    const Wt = new S();
    Wt.setContainment(!0), Wt.setName("visibilityCondition"), Wt.setLowerBound(0), Wt.setUpperBound(1), me.getEStructuralFeatures().push(Wt), a.Literals.BASE_STYLE__VISIBILITY_CONDITION = Wt;
    const Ye = new C();
    Ye.setName("LayoutStyle"), Ye.setAbstract(!1), Ye.setInterface(!1), this.getEClassifiers().push(Ye), Ye.setEPackage(this), a.Literals.LAYOUT_STYLE = Ye;
    const Gs = new d();
    Gs.setName("layout"), Gs.setLowerBound(0), Gs.setUpperBound(1), Ye.getEStructuralFeatures().push(Gs), a.Literals.LAYOUT_STYLE__LAYOUT = Gs;
    const Ws = new d();
    Ws.setName("order"), Ws.setLowerBound(0), Ws.setUpperBound(1), Ye.getEStructuralFeatures().push(Ws), a.Literals.LAYOUT_STYLE__ORDER = Ws;
    const Ee = new C();
    Ee.setName("WidgetStyle"), Ee.setAbstract(!1), Ee.setInterface(!1), this.getEClassifiers().push(Ee), Ee.setEPackage(this), a.Literals.WIDGET_STYLE = Ee;
    const Yt = new S();
    Yt.setContainment(!1), Yt.setName("feature"), Yt.setLowerBound(0), Yt.setUpperBound(1), Ee.getEStructuralFeatures().push(Yt), a.Literals.WIDGET_STYLE__FEATURE = Yt;
    const Ys = new d();
    Ys.setName("widgetType"), Ys.setLowerBound(0), Ys.setUpperBound(1), Ee.getEStructuralFeatures().push(Ys), a.Literals.WIDGET_STYLE__WIDGET_TYPE = Ys;
    const $s = new d();
    $s.setName("label"), $s.setLowerBound(0), $s.setUpperBound(1), Ee.getEStructuralFeatures().push($s), a.Literals.WIDGET_STYLE__LABEL = $s;
    const xs = new d();
    xs.setName("readOnly"), xs.setLowerBound(0), xs.setUpperBound(1), Ee.getEStructuralFeatures().push(xs), a.Literals.WIDGET_STYLE__READ_ONLY = xs;
    const ks = new d();
    ks.setName("order"), ks.setLowerBound(0), ks.setUpperBound(1), Ee.getEStructuralFeatures().push(ks), a.Literals.WIDGET_STYLE__ORDER = ks;
    const et = new C();
    et.setName("TableStyle"), et.setAbstract(!1), et.setInterface(!1), this.getEClassifiers().push(et), et.setEPackage(this), a.Literals.TABLE_STYLE = et;
    const $t = new S();
    $t.setContainment(!0), $t.setName("columns"), $t.setLowerBound(1), $t.setUpperBound(-1), et.getEStructuralFeatures().push($t), a.Literals.TABLE_STYLE__COLUMNS = $t;
    const $e = new C();
    $e.setName("Expression"), $e.setAbstract(!1), $e.setInterface(!1), this.getEClassifiers().push($e), $e.setEPackage(this), a.Literals.EXPRESSION = $e;
    const Xs = new d();
    Xs.setName("language"), Xs.setLowerBound(1), Xs.setUpperBound(1), $e.getEStructuralFeatures().push(Xs), a.Literals.EXPRESSION__LANGUAGE = Xs;
    const Hs = new d();
    Hs.setName("body"), Hs.setLowerBound(1), Hs.setUpperBound(1), $e.getEStructuralFeatures().push(Hs), a.Literals.EXPRESSION__BODY = Hs;
    const xe = new C();
    xe.setName("ValidationExpression"), xe.setAbstract(!1), xe.setInterface(!1), this.getEClassifiers().push(xe), xe.setEPackage(this), a.Literals.VALIDATION_EXPRESSION = xe;
    const js = new d();
    js.setName("defaultMessage"), js.setLowerBound(0), js.setUpperBound(1), xe.getEStructuralFeatures().push(js), a.Literals.VALIDATION_EXPRESSION__DEFAULT_MESSAGE = js;
    const qs = new d();
    qs.setName("severity"), qs.setLowerBound(0), qs.setUpperBound(1), xe.getEStructuralFeatures().push(qs), a.Literals.VALIDATION_EXPRESSION__SEVERITY = qs;
    const K = new C();
    K.setName("ValidationMessageMapper"), K.setAbstract(!1), K.setInterface(!1), this.getEClassifiers().push(K), K.setEPackage(this), a.Literals.VALIDATION_MESSAGE_MAPPER = K;
    const Ks = new d();
    Ks.setName("order"), Ks.setLowerBound(0), Ks.setUpperBound(1), K.getEStructuralFeatures().push(Ks), a.Literals.VALIDATION_MESSAGE_MAPPER__ORDER = Ks;
    const zs = new d();
    zs.setName("matchCode"), zs.setLowerBound(0), zs.setUpperBound(1), K.getEStructuralFeatures().push(zs), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_CODE = zs;
    const Qs = new d();
    Qs.setName("matchSeverity"), Qs.setLowerBound(0), Qs.setUpperBound(1), K.getEStructuralFeatures().push(Qs), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_SEVERITY = Qs;
    const xt = new S();
    xt.setContainment(!0), xt.setName("matchExpression"), xt.setLowerBound(0), xt.setUpperBound(1), K.getEStructuralFeatures().push(xt), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION = xt;
    const Js = new d();
    Js.setName("mappedText"), Js.setLowerBound(0), Js.setUpperBound(1), K.getEStructuralFeatures().push(Js), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT = Js;
    const kt = new S();
    kt.setContainment(!0), kt.setName("mappedTextExpression"), kt.setLowerBound(0), kt.setUpperBound(1), K.getEStructuralFeatures().push(kt), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION = kt;
    const Zs = new d();
    Zs.setName("mappedSeverity"), Zs.setLowerBound(0), Zs.setUpperBound(1), K.getEStructuralFeatures().push(Zs), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_SEVERITY = Zs, a.Literals.FORM_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.TABLE_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.SECTION_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.TAB_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.SUMMARY_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.MASTER_DETAIL.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.WIDGET_COMPONENT.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.INPUT_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.TEXT_AREA_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.NUMBER_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.CHECKBOX_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.DATE_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.COMBOBOX_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.SELECT_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.ALL_FEATURES.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.GROUP_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.FOR_EACH.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.REFERENCE_LINK_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.BASE_STYLE.getESuperTypes().push(a.Literals.STYLE), a.Literals.LAYOUT_STYLE.getESuperTypes().push(a.Literals.BASE_STYLE), a.Literals.WIDGET_STYLE.getESuperTypes().push(a.Literals.BASE_STYLE), a.Literals.TABLE_STYLE.getESuperTypes().push(a.Literals.WIDGET_STYLE), a.Literals.VALIDATION_EXPRESSION.getESuperTypes().push(a.Literals.EXPRESSION), a.Literals.U_I_MODEL__TARGET_CLASSES.setEType(Xt().getEClassifier("EClass")), a.Literals.U_I_MODEL__FILTER_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.U_I_MODEL__STYLES.setEType(a.Literals.BASE_STYLE), a.Literals.U_I_MODEL__TEMPLATES.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.U_I_MODEL__COMPONENTS.setEType(a.Literals.COMPONENT), a.Literals.COMPONENT__TARGET_CLASSES.setEType(Xt().getEClassifier("EClass")), a.Literals.COMPONENT__STYLES.setEType(a.Literals.BASE_STYLE), a.Literals.COMPONENT__CHILDREN.setEType(a.Literals.COMPONENT), a.Literals.FORM_VIEW__FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.FORM_VIEW__VALIDATIONS.setEType(a.Literals.VALIDATION_EXPRESSION), a.Literals.FORM_VIEW__VALIDATION_MAPPERS.setEType(a.Literals.VALIDATION_MESSAGE_MAPPER), a.Literals.TABLE_VIEW__TABLE_STYLE.setEType(a.Literals.TABLE_STYLE), a.Literals.SECTION_VIEW__SECTIONS.setEType(a.Literals.FORM_VIEW), a.Literals.TAB_VIEW__TABS.setEType(a.Literals.COMPONENT), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.MASTER_DETAIL__MASTER.setEType(a.Literals.TABLE_VIEW), a.Literals.MASTER_DETAIL__DETAIL.setEType(a.Literals.COMPONENT), a.Literals.WIDGET_COMPONENT__FEATURE.setEType(Xt().getEClassifier("EStructuralFeature")), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.WIDGET_COMPONENT__VALIDATIONS.setEType(a.Literals.VALIDATION_EXPRESSION), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS.setEType(a.Literals.VALIDATION_MESSAGE_MAPPER), a.Literals.WIDGET_COMPONENT__BINDINGS.setEType(a.Literals.PROPERTY_BINDING), a.Literals.PROPERTY_BINDING__EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.DATE_WIDGET__CONSTRAINS.setEType(a.Literals.EXPRESSION), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL.setEType(a.Literals.EXPRESSION), a.Literals.SELECT_WIDGET__OPTION_LABEL.setEType(a.Literals.EXPRESSION), a.Literals.ALL_FEATURES__WITH.setEType(Xt().getEClassifier("EStructuralFeature")), a.Literals.ALL_FEATURES__E_TYPE.setEType(Xt().getEClassifier("EClassifier")), a.Literals.ALL_FEATURES__FILTER.setEType(a.Literals.EXPRESSION), a.Literals.ALL_FEATURES__TEMPLATE.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.ALL_FEATURES__CASES.setEType(a.Literals.TEMPLATE_CASE), a.Literals.TEMPLATE_CASE__WHEN.setEType(a.Literals.EXPRESSION), a.Literals.TEMPLATE_CASE__WIDGET.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.GROUP_WIDGET__FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL__CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.CONDITIONAL__THEN.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL__ELSE.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.FOR_EACH__ITEMS.setEType(a.Literals.EXPRESSION), a.Literals.FOR_EACH__BODY.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.U_I_MODEL_OVERLAY__CASES.setEType(a.Literals.TEMPLATE_CASE), a.Literals.BASE_STYLE__EXTENDS.setEType(a.Literals.BASE_STYLE), a.Literals.BASE_STYLE__VISIBILITY_CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.WIDGET_STYLE__FEATURE.setEType(Xt().getEClassifier("EStructuralFeature")), a.Literals.TABLE_STYLE__COLUMNS.setEType(a.Literals.WIDGET_STYLE), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION.setEType(a.Literals.EXPRESSION);
  }
};
er(Ht, "eNAME", "uimodel"), er(Ht, "eNS_URI", "http://uimodel/1.0"), er(Ht, "eNS_PREFIX", "uimodel"), // Singleton instance
er(Ht, "_instance"), /**
* Literals for quick access to metaclasses and features
*/
er(Ht, "Literals", {
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
let v = Ht;
var yi = Object.defineProperty, Ri = (s, e, t) => e in s ? yi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, j = (s, e, t) => Ri(s, typeof e != "symbol" ? e + "" : e, t);
const ke = class f extends Qe {
  constructor() {
    super(...arguments), j(this, "_name"), j(this, "_targetClasses", []), j(this, "_priority", 0), j(this, "_filterExpression"), j(this, "_styles", []), j(this, "_templates", []), j(this, "_components", []);
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
j(ke, "NAME", 0), j(ke, "TARGET_CLASSES", 1), j(ke, "PRIORITY", 2), j(ke, "FILTER_EXPRESSION", 3), j(ke, "STYLES", 4), j(ke, "TEMPLATES", 5), j(ke, "COMPONENTS", 6);
let wi = ke;
const Vr = {
  FIELD_THEN_FORM: "FIELD_THEN_FORM"
};
var Fi = Object.defineProperty, Pi = (s, e, t) => e in s ? Fi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Le = (s, e, t) => Pi(s, typeof e != "symbol" ? e + "" : e, t);
const jt = class D extends Qe {
  constructor() {
    super(...arguments), Le(this, "_name", ""), Le(this, "_group"), Le(this, "_targetClasses", []), Le(this, "_styles", []), Le(this, "_children", []);
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
      getFeature: () => this.eClass().getEStructuralFeature(D.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(D.GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.GROUP,
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
      getFeature: () => this.eClass().getEStructuralFeature(D.TARGET_CLASSES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.TARGET_CLASSES,
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
      getFeature: () => this.eClass().getEStructuralFeature(D.STYLES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.STYLES,
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
      getFeature: () => this.eClass().getEStructuralFeature(D.CHILDREN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.CHILDREN,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case D.NAME:
        return this.name;
      case D.GROUP:
        return this.group;
      case D.TARGET_CLASSES:
        return this.targetClasses;
      case D.STYLES:
        return this.styles;
      case D.CHILDREN:
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
      case D.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case D.GROUP:
        this.group = t, super.eSet(e, t);
        break;
      case D.TARGET_CLASSES:
        this.targetClasses = t, super.eSet(e, t);
        break;
      case D.STYLES:
        this.styles = t, super.eSet(e, t);
        break;
      case D.CHILDREN:
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
      case D.NAME:
        return this._name !== "";
      case D.GROUP:
        return this._group !== void 0;
      case D.TARGET_CLASSES:
        return this._targetClasses !== void 0 && this._targetClasses.length > 0;
      case D.STYLES:
        return this._styles !== void 0 && this._styles.length > 0;
      case D.CHILDREN:
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
      case D.NAME:
        this._name = "";
        return;
      case D.GROUP:
        this._group = void 0;
        return;
      case D.TARGET_CLASSES:
        this._targetClasses = [];
        return;
      case D.STYLES:
        this._styles = [];
        return;
      case D.CHILDREN:
        this._children = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Le(jt, "NAME", 0), Le(jt, "GROUP", 1), Le(jt, "TARGET_CLASSES", 2), Le(jt, "STYLES", 3), Le(jt, "CHILDREN", 4);
let ot = jt;
var bi = Object.defineProperty, Mi = (s, e, t) => e in s ? bi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, He = (s, e, t) => Mi(s, typeof e != "symbol" ? e + "" : e, t);
const tr = class R extends ot {
  constructor() {
    super(...arguments), He(this, "_fields", []), He(this, "_validations", []), He(this, "_validationMappers", []), He(this, "_mapperOrder", Vr.FIELD_THEN_FORM);
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
      getFeature: () => this.eClass().getEStructuralFeature(R.FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.FIELDS,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.VALIDATIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.VALIDATIONS,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.VALIDATION_MAPPERS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.VALIDATION_MAPPERS,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.MAPPER_ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.MAPPER_ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case R.FIELDS:
        return this.fields;
      case R.VALIDATIONS:
        return this.validations;
      case R.VALIDATION_MAPPERS:
        return this.validationMappers;
      case R.MAPPER_ORDER:
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
      case R.FIELDS:
        this.fields = t, super.eSet(e, t);
        break;
      case R.VALIDATIONS:
        this.validations = t, super.eSet(e, t);
        break;
      case R.VALIDATION_MAPPERS:
        this.validationMappers = t, super.eSet(e, t);
        break;
      case R.MAPPER_ORDER:
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
      case R.FIELDS:
        return this._fields !== void 0 && this._fields.length > 0;
      case R.VALIDATIONS:
        return this._validations !== void 0 && this._validations.length > 0;
      case R.VALIDATION_MAPPERS:
        return this._validationMappers !== void 0 && this._validationMappers.length > 0;
      case R.MAPPER_ORDER:
        return this._mapperOrder !== Vr.FIELD_THEN_FORM;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case R.FIELDS:
        this._fields = [];
        return;
      case R.VALIDATIONS:
        this._validations = [];
        return;
      case R.VALIDATION_MAPPERS:
        this._validationMappers = [];
        return;
      case R.MAPPER_ORDER:
        this._mapperOrder = Vr.FIELD_THEN_FORM;
        return;
      default:
        super.eUnset(e);
    }
  }
};
He(tr, "FIELDS", 5), He(tr, "VALIDATIONS", 6), He(tr, "VALIDATION_MAPPERS", 7), He(tr, "MAPPER_ORDER", 8);
let Ui = tr;
var Vi = Object.defineProperty, Bi = (s, e, t) => e in s ? Vi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Aa = (s, e, t) => Bi(s, typeof e != "symbol" ? e + "" : e, t);
const Ca = class tt extends ot {
  constructor() {
    super(...arguments), Aa(this, "_tableStyle");
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
Aa(Ca, "TABLE_STYLE", 5);
let Gi = Ca;
var Wi = Object.defineProperty, Yi = (s, e, t) => e in s ? Wi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Da = (s, e, t) => Yi(s, typeof e != "symbol" ? e + "" : e, t);
const ya = class st extends ot {
  constructor() {
    super(...arguments), Da(this, "_sections", []);
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
Da(ya, "SECTIONS", 5);
let $i = ya;
var xi = Object.defineProperty, ki = (s, e, t) => e in s ? xi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ra = (s, e, t) => ki(s, typeof e != "symbol" ? e + "" : e, t);
const wa = class rt extends ot {
  constructor() {
    super(...arguments), Ra(this, "_tabs", []);
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
Ra(wa, "TABS", 5);
let Xi = wa;
var Hi = Object.defineProperty, ji = (s, e, t) => e in s ? Hi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Fa = (s, e, t) => ji(s, typeof e != "symbol" ? e + "" : e, t);
const Pa = class at extends ot {
  constructor() {
    super(...arguments), Fa(this, "_summaryFields", []);
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
Fa(Pa, "SUMMARY_FIELDS", 5);
let qi = Pa;
var Ki = Object.defineProperty, zi = (s, e, t) => e in s ? Ki(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Lr = (s, e, t) => zi(s, typeof e != "symbol" ? e + "" : e, t);
const $r = class z extends ot {
  constructor() {
    super(...arguments), Lr(this, "_master"), Lr(this, "_detail");
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
      getFeature: () => this.eClass().getEStructuralFeature(z.MASTER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => z.MASTER,
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
      getFeature: () => this.eClass().getEStructuralFeature(z.DETAIL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => z.DETAIL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case z.MASTER:
        return this.master;
      case z.DETAIL:
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
      case z.MASTER:
        this.master = t, super.eSet(e, t);
        break;
      case z.DETAIL:
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
      case z.MASTER:
        return this._master !== void 0;
      case z.DETAIL:
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
      case z.MASTER:
        this._master = void 0;
        return;
      case z.DETAIL:
        this._detail = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Lr($r, "MASTER", 5), Lr($r, "DETAIL", 6);
let Qi = $r;
var Ji = Object.defineProperty, Zi = (s, e, t) => e in s ? Ji(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, _r = (s, e, t) => Zi(s, typeof e != "symbol" ? e + "" : e, t);
const xr = class Q extends Qe {
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
      getFeature: () => this.eClass().getEStructuralFeature(Q.PROPERTY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Q.PROPERTY,
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
      getFeature: () => this.eClass().getEStructuralFeature(Q.EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Q.EXPRESSION,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Q.PROPERTY:
        return this.property;
      case Q.EXPRESSION:
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
      case Q.PROPERTY:
        this.property = t, super.eSet(e, t);
        break;
      case Q.EXPRESSION:
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
      case Q.PROPERTY:
        return this._property !== "";
      case Q.EXPRESSION:
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
      case Q.PROPERTY:
        this._property = "";
        return;
      case Q.EXPRESSION:
        this._expression = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
_r(xr, "PROPERTY", 0), _r(xr, "EXPRESSION", 1);
let eu = xr;
var tu = Object.defineProperty, su = (s, e, t) => e in s ? tu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, $ = (s, e, t) => su(s, typeof e != "symbol" ? e + "" : e, t);
const Ne = class T extends ot {
  constructor() {
    super(...arguments), $(this, "_feature"), $(this, "_label"), $(this, "_placeholder"), $(this, "_readOnly"), $(this, "_required"), $(this, "_visibilityCondition"), $(this, "_validations", []), $(this, "_validationMappers", []), $(this, "_bindings", []);
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
$(Ne, "FEATURE", 5), $(Ne, "LABEL", 6), $(Ne, "PLACEHOLDER", 7), $(Ne, "READ_ONLY", 8), $(Ne, "REQUIRED", 9), $(Ne, "VISIBILITY_CONDITION", 10), $(Ne, "VALIDATIONS", 11), $(Ne, "VALIDATION_MAPPERS", 12), $(Ne, "BINDINGS", 13);
let ce = Ne;
var ru = Object.defineProperty, au = (s, e, t) => e in s ? ru(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Kt = (s, e, t) => au(s, typeof e != "symbol" ? e + "" : e, t);
const pr = class V extends ce {
  constructor() {
    super(...arguments), Kt(this, "_maxLength"), Kt(this, "_value"), Kt(this, "_password");
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
      getFeature: () => this.eClass().getEStructuralFeature(V.MAX_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => V.MAX_LENGTH,
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
  get password() {
    return this._password;
  }
  set password(e) {
    const t = this._password;
    this._password = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(V.PASSWORD),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => V.PASSWORD,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case V.MAX_LENGTH:
        return this.maxLength;
      case V.VALUE:
        return this.value;
      case V.PASSWORD:
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
      case V.MAX_LENGTH:
        this.maxLength = t, super.eSet(e, t);
        break;
      case V.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case V.PASSWORD:
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
      case V.MAX_LENGTH:
        return this._maxLength !== void 0;
      case V.VALUE:
        return this._value !== void 0;
      case V.PASSWORD:
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
      case V.MAX_LENGTH:
        this._maxLength = void 0;
        return;
      case V.VALUE:
        this._value = void 0;
        return;
      case V.PASSWORD:
        this._password = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Kt(pr, "MAX_LENGTH", 14), Kt(pr, "VALUE", 15), Kt(pr, "PASSWORD", 16);
let iu = pr;
var uu = Object.defineProperty, nu = (s, e, t) => e in s ? uu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, zt = (s, e, t) => nu(s, typeof e != "symbol" ? e + "" : e, t);
const dr = class B extends ce {
  constructor() {
    super(...arguments), zt(this, "_rows", 4), zt(this, "_maxLength"), zt(this, "_value");
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
      getFeature: () => this.eClass().getEStructuralFeature(B.ROWS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => B.ROWS,
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
      getFeature: () => this.eClass().getEStructuralFeature(B.MAX_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => B.MAX_LENGTH,
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
      case B.ROWS:
        return this.rows;
      case B.MAX_LENGTH:
        return this.maxLength;
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
      case B.ROWS:
        this.rows = t, super.eSet(e, t);
        break;
      case B.MAX_LENGTH:
        this.maxLength = t, super.eSet(e, t);
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
      case B.ROWS:
        return this._rows !== 4;
      case B.MAX_LENGTH:
        return this._maxLength !== void 0;
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
      case B.ROWS:
        this._rows = 4;
        return;
      case B.MAX_LENGTH:
        this._maxLength = void 0;
        return;
      case B.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
zt(dr, "ROWS", 14), zt(dr, "MAX_LENGTH", 15), zt(dr, "VALUE", 16);
let lu = dr;
var ou = Object.defineProperty, cu = (s, e, t) => e in s ? ou(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, je = (s, e, t) => cu(s, typeof e != "symbol" ? e + "" : e, t);
const sr = class w extends ce {
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
      getFeature: () => this.eClass().getEStructuralFeature(w.MIN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.MIN,
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
      getFeature: () => this.eClass().getEStructuralFeature(w.MAX),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.MAX,
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
      getFeature: () => this.eClass().getEStructuralFeature(w.STEP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.STEP,
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
      getFeature: () => this.eClass().getEStructuralFeature(w.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case w.MIN:
        return this.min;
      case w.MAX:
        return this.max;
      case w.STEP:
        return this.step;
      case w.VALUE:
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
      case w.MIN:
        this.min = t, super.eSet(e, t);
        break;
      case w.MAX:
        this.max = t, super.eSet(e, t);
        break;
      case w.STEP:
        this.step = t, super.eSet(e, t);
        break;
      case w.VALUE:
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
      case w.MIN:
        return this._min !== void 0;
      case w.MAX:
        return this._max !== void 0;
      case w.STEP:
        return this._step !== 1;
      case w.VALUE:
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
      case w.MIN:
        this._min = void 0;
        return;
      case w.MAX:
        this._max = void 0;
        return;
      case w.STEP:
        this._step = 1;
        return;
      case w.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
je(sr, "MIN", 14), je(sr, "MAX", 15), je(sr, "STEP", 16), je(sr, "VALUE", 17);
let Eu = sr;
var hu = Object.defineProperty, gu = (s, e, t) => e in s ? hu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, vr = (s, e, t) => gu(s, typeof e != "symbol" ? e + "" : e, t);
const kr = class J extends ce {
  constructor() {
    super(...arguments), vr(this, "_asToggle"), vr(this, "_value");
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
      getFeature: () => this.eClass().getEStructuralFeature(J.AS_TOGGLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => J.AS_TOGGLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(J.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => J.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case J.AS_TOGGLE:
        return this.asToggle;
      case J.VALUE:
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
      case J.AS_TOGGLE:
        this.asToggle = t, super.eSet(e, t);
        break;
      case J.VALUE:
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
      case J.AS_TOGGLE:
        return this._asToggle !== void 0;
      case J.VALUE:
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
      case J.AS_TOGGLE:
        this._asToggle = void 0;
        return;
      case J.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
vr(kr, "AS_TOGGLE", 14), vr(kr, "VALUE", 15);
let pu = kr;
var du = Object.defineProperty, Tu = (s, e, t) => e in s ? du(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, qe = (s, e, t) => Tu(s, typeof e != "symbol" ? e + "" : e, t);
const rr = class F extends ce {
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
      getFeature: () => this.eClass().getEStructuralFeature(F.WITH_TIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.WITH_TIME,
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
      getFeature: () => this.eClass().getEStructuralFeature(F.FORMAT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.FORMAT,
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
      getFeature: () => this.eClass().getEStructuralFeature(F.CONSTRAINS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.CONSTRAINS,
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
      case F.WITH_TIME:
        return this.withTime;
      case F.FORMAT:
        return this.format;
      case F.CONSTRAINS:
        return this.constrains;
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
      case F.WITH_TIME:
        this.withTime = t, super.eSet(e, t);
        break;
      case F.FORMAT:
        this.format = t, super.eSet(e, t);
        break;
      case F.CONSTRAINS:
        this.constrains = t, super.eSet(e, t);
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
      case F.WITH_TIME:
        return this._withTime !== void 0;
      case F.FORMAT:
        return this._format !== "DD.MM.YYYY";
      case F.CONSTRAINS:
        return this._constrains !== void 0;
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
      case F.WITH_TIME:
        this._withTime = void 0;
        return;
      case F.FORMAT:
        this._format = "DD.MM.YYYY";
        return;
      case F.CONSTRAINS:
        this._constrains = void 0;
        return;
      case F.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
qe(rr, "WITH_TIME", 14), qe(rr, "FORMAT", 15), qe(rr, "CONSTRAINS", 16), qe(rr, "VALUE", 17);
let Su = rr;
var fu = Object.defineProperty, Iu = (s, e, t) => e in s ? fu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Qt = (s, e, t) => Iu(s, typeof e != "symbol" ? e + "" : e, t);
const Tr = class G extends ce {
  constructor() {
    super(...arguments), Qt(this, "_optionLabel"), Qt(this, "_minSearchLength", 2), Qt(this, "_multiSelect");
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
  get minSearchLength() {
    return this._minSearchLength;
  }
  set minSearchLength(e) {
    const t = this._minSearchLength;
    this._minSearchLength = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(G.MIN_SEARCH_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => G.MIN_SEARCH_LENGTH,
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
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case G.OPTION_LABEL:
        return this.optionLabel;
      case G.MIN_SEARCH_LENGTH:
        return this.minSearchLength;
      case G.MULTI_SELECT:
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
      case G.OPTION_LABEL:
        this.optionLabel = t, super.eSet(e, t);
        break;
      case G.MIN_SEARCH_LENGTH:
        this.minSearchLength = t, super.eSet(e, t);
        break;
      case G.MULTI_SELECT:
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
      case G.OPTION_LABEL:
        return this._optionLabel !== void 0;
      case G.MIN_SEARCH_LENGTH:
        return this._minSearchLength !== 2;
      case G.MULTI_SELECT:
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
      case G.OPTION_LABEL:
        this._optionLabel = void 0;
        return;
      case G.MIN_SEARCH_LENGTH:
        this._minSearchLength = 2;
        return;
      case G.MULTI_SELECT:
        this._multiSelect = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Qt(Tr, "OPTION_LABEL", 14), Qt(Tr, "MIN_SEARCH_LENGTH", 15), Qt(Tr, "MULTI_SELECT", 16);
let mu = Tr;
var Nu = Object.defineProperty, Lu = (s, e, t) => e in s ? Nu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ke = (s, e, t) => Lu(s, typeof e != "symbol" ? e + "" : e, t);
const ar = class P extends ce {
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
      getFeature: () => this.eClass().getEStructuralFeature(P.OPTION_LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.OPTION_LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(P.MULTI_SELECT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.MULTI_SELECT,
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
      getFeature: () => this.eClass().getEStructuralFeature(P.AS_BUTTON_GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.AS_BUTTON_GROUP,
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
      getFeature: () => this.eClass().getEStructuralFeature(P.VALUES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => P.VALUES,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case P.OPTION_LABEL:
        return this.optionLabel;
      case P.MULTI_SELECT:
        return this.multiSelect;
      case P.AS_BUTTON_GROUP:
        return this.asButtonGroup;
      case P.VALUES:
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
      case P.OPTION_LABEL:
        this.optionLabel = t, super.eSet(e, t);
        break;
      case P.MULTI_SELECT:
        this.multiSelect = t, super.eSet(e, t);
        break;
      case P.AS_BUTTON_GROUP:
        this.asButtonGroup = t, super.eSet(e, t);
        break;
      case P.VALUES:
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
      case P.OPTION_LABEL:
        return this._optionLabel !== void 0;
      case P.MULTI_SELECT:
        return this._multiSelect !== void 0;
      case P.AS_BUTTON_GROUP:
        return this._asButtonGroup !== void 0;
      case P.VALUES:
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
      case P.OPTION_LABEL:
        this._optionLabel = void 0;
        return;
      case P.MULTI_SELECT:
        this._multiSelect = void 0;
        return;
      case P.AS_BUTTON_GROUP:
        this._asButtonGroup = void 0;
        return;
      case P.VALUES:
        this._values = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ke(ar, "OPTION_LABEL", 14), Ke(ar, "MULTI_SELECT", 15), Ke(ar, "AS_BUTTON_GROUP", 16), Ke(ar, "VALUES", 17);
let _u = ar;
var vu = Object.defineProperty, Ou = (s, e, t) => e in s ? vu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, le = (s, e, t) => Ou(s, typeof e != "symbol" ? e + "" : e, t);
const it = class m extends ce {
  constructor() {
    super(...arguments), le(this, "_with", []), le(this, "_eType", []), le(this, "_filter"), le(this, "_template"), le(this, "_cases", []), le(this, "_priority", 0);
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
      getFeature: () => this.eClass().getEStructuralFeature(m.WITH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => m.WITH,
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
      getFeature: () => this.eClass().getEStructuralFeature(m.E_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => m.E_TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(m.FILTER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => m.FILTER,
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
      getFeature: () => this.eClass().getEStructuralFeature(m.TEMPLATE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => m.TEMPLATE,
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
      getFeature: () => this.eClass().getEStructuralFeature(m.CASES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => m.CASES,
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
      getFeature: () => this.eClass().getEStructuralFeature(m.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => m.PRIORITY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case m.WITH:
        return this.with;
      case m.E_TYPE:
        return this.eType;
      case m.FILTER:
        return this.filter;
      case m.TEMPLATE:
        return this.template;
      case m.CASES:
        return this.cases;
      case m.PRIORITY:
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
      case m.WITH:
        this.with = t, super.eSet(e, t);
        break;
      case m.E_TYPE:
        this.eType = t, super.eSet(e, t);
        break;
      case m.FILTER:
        this.filter = t, super.eSet(e, t);
        break;
      case m.TEMPLATE:
        this.template = t, super.eSet(e, t);
        break;
      case m.CASES:
        this.cases = t, super.eSet(e, t);
        break;
      case m.PRIORITY:
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
      case m.WITH:
        return this._with !== void 0 && this._with.length > 0;
      case m.E_TYPE:
        return this._eType !== void 0 && this._eType.length > 0;
      case m.FILTER:
        return this._filter !== void 0;
      case m.TEMPLATE:
        return this._template !== void 0;
      case m.CASES:
        return this._cases !== void 0 && this._cases.length > 0;
      case m.PRIORITY:
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
      case m.WITH:
        this._with = [];
        return;
      case m.E_TYPE:
        this._eType = [];
        return;
      case m.FILTER:
        this._filter = void 0;
        return;
      case m.TEMPLATE:
        this._template = void 0;
        return;
      case m.CASES:
        this._cases = [];
        return;
      case m.PRIORITY:
        this._priority = 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
le(it, "WITH", 14), le(it, "E_TYPE", 15), le(it, "FILTER", 16), le(it, "TEMPLATE", 17), le(it, "CASES", 18), le(it, "PRIORITY", 19);
let Au = it;
var Cu = Object.defineProperty, Du = (s, e, t) => e in s ? Cu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Or = (s, e, t) => Du(s, typeof e != "symbol" ? e + "" : e, t);
const Xr = class Z extends Qe {
  constructor() {
    super(...arguments), Or(this, "_when"), Or(this, "_widget");
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
      getFeature: () => this.eClass().getEStructuralFeature(Z.WHEN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Z.WHEN,
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
      getFeature: () => this.eClass().getEStructuralFeature(Z.WIDGET),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Z.WIDGET,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Z.WHEN:
        return this.when;
      case Z.WIDGET:
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
      case Z.WHEN:
        this.when = t, super.eSet(e, t);
        break;
      case Z.WIDGET:
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
      case Z.WHEN:
        return this._when !== void 0;
      case Z.WIDGET:
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
      case Z.WHEN:
        this._when = void 0;
        return;
      case Z.WIDGET:
        this._widget = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Or(Xr, "WHEN", 0), Or(Xr, "WIDGET", 1);
let yu = Xr;
const Br = {
  VERTICAL: "VERTICAL"
};
var Ru = Object.defineProperty, wu = (s, e, t) => e in s ? Ru(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ar = (s, e, t) => wu(s, typeof e != "symbol" ? e + "" : e, t);
const Hr = class ee extends ce {
  constructor() {
    super(...arguments), Ar(this, "_fields", []), Ar(this, "_layout", Br.VERTICAL);
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
      getFeature: () => this.eClass().getEStructuralFeature(ee.FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ee.FIELDS,
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
      getFeature: () => this.eClass().getEStructuralFeature(ee.LAYOUT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ee.LAYOUT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ee.FIELDS:
        return this.fields;
      case ee.LAYOUT:
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
      case ee.FIELDS:
        this.fields = t, super.eSet(e, t);
        break;
      case ee.LAYOUT:
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
      case ee.FIELDS:
        return this._fields !== void 0 && this._fields.length > 0;
      case ee.LAYOUT:
        return this._layout !== Br.VERTICAL;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ee.FIELDS:
        this._fields = [];
        return;
      case ee.LAYOUT:
        this._layout = Br.VERTICAL;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ar(Hr, "FIELDS", 14), Ar(Hr, "LAYOUT", 15);
let Fu = Hr;
var Pu = Object.defineProperty, bu = (s, e, t) => e in s ? Pu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Jt = (s, e, t) => bu(s, typeof e != "symbol" ? e + "" : e, t);
const Sr = class W extends ce {
  constructor() {
    super(...arguments), Jt(this, "_condition"), Jt(this, "_then", []), Jt(this, "_else", []);
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
      getFeature: () => this.eClass().getEStructuralFeature(W.CONDITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.CONDITION,
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
      getFeature: () => this.eClass().getEStructuralFeature(W.THEN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.THEN,
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
      getFeature: () => this.eClass().getEStructuralFeature(W.ELSE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => W.ELSE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case W.CONDITION:
        return this.condition;
      case W.THEN:
        return this.then;
      case W.ELSE:
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
      case W.CONDITION:
        this.condition = t, super.eSet(e, t);
        break;
      case W.THEN:
        this.then = t, super.eSet(e, t);
        break;
      case W.ELSE:
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
      case W.CONDITION:
        return this._condition !== void 0;
      case W.THEN:
        return this._then !== void 0 && this._then.length > 0;
      case W.ELSE:
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
      case W.CONDITION:
        this._condition = void 0;
        return;
      case W.THEN:
        this._then = [];
        return;
      case W.ELSE:
        this._else = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Jt(Sr, "CONDITION", 14), Jt(Sr, "THEN", 15), Jt(Sr, "ELSE", 16);
let Mu = Sr;
var Uu = Object.defineProperty, Vu = (s, e, t) => e in s ? Uu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Zt = (s, e, t) => Vu(s, typeof e != "symbol" ? e + "" : e, t);
const fr = class Y extends ce {
  constructor() {
    super(...arguments), Zt(this, "_items"), Zt(this, "_body", []), Zt(this, "_emptyText");
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
      getFeature: () => this.eClass().getEStructuralFeature(Y.ITEMS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.ITEMS,
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
      getFeature: () => this.eClass().getEStructuralFeature(Y.BODY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.BODY,
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
      getFeature: () => this.eClass().getEStructuralFeature(Y.EMPTY_TEXT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Y.EMPTY_TEXT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Y.ITEMS:
        return this.items;
      case Y.BODY:
        return this.body;
      case Y.EMPTY_TEXT:
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
      case Y.ITEMS:
        this.items = t, super.eSet(e, t);
        break;
      case Y.BODY:
        this.body = t, super.eSet(e, t);
        break;
      case Y.EMPTY_TEXT:
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
      case Y.ITEMS:
        return this._items !== void 0;
      case Y.BODY:
        return this._body !== void 0 && this._body.length > 0;
      case Y.EMPTY_TEXT:
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
      case Y.ITEMS:
        this._items = void 0;
        return;
      case Y.BODY:
        this._body = [];
        return;
      case Y.EMPTY_TEXT:
        this._emptyText = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Zt(fr, "ITEMS", 14), Zt(fr, "BODY", 15), Zt(fr, "EMPTY_TEXT", 16);
let Bu = fr;
var Gu = Object.defineProperty, Wu = (s, e, t) => e in s ? Gu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Cr = (s, e, t) => Wu(s, typeof e != "symbol" ? e + "" : e, t);
const jr = class te extends ce {
  constructor() {
    super(...arguments), Cr(this, "_displayExpression"), Cr(this, "_targetRoute");
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
      getFeature: () => this.eClass().getEStructuralFeature(te.DISPLAY_EXPRESSION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => te.DISPLAY_EXPRESSION,
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
      getFeature: () => this.eClass().getEStructuralFeature(te.TARGET_ROUTE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => te.TARGET_ROUTE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case te.DISPLAY_EXPRESSION:
        return this.displayExpression;
      case te.TARGET_ROUTE:
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
      case te.DISPLAY_EXPRESSION:
        this.displayExpression = t, super.eSet(e, t);
        break;
      case te.TARGET_ROUTE:
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
      case te.DISPLAY_EXPRESSION:
        return this._displayExpression !== void 0;
      case te.TARGET_ROUTE:
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
      case te.DISPLAY_EXPRESSION:
        this._displayExpression = void 0;
        return;
      case te.TARGET_ROUTE:
        this._targetRoute = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Cr(jr, "DISPLAY_EXPRESSION", 14), Cr(jr, "TARGET_ROUTE", 15);
let Yu = jr;
var $u = Object.defineProperty, xu = (s, e, t) => e in s ? $u(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ze = (s, e, t) => xu(s, typeof e != "symbol" ? e + "" : e, t);
const ir = class b extends Qe {
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
  get priority() {
    return this._priority;
  }
  set priority(e) {
    const t = this._priority;
    this._priority = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(b.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.PRIORITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(b.TEMPLATES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.TEMPLATES,
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
      getFeature: () => this.eClass().getEStructuralFeature(b.CASES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => b.CASES,
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
      case b.PRIORITY:
        return this.priority;
      case b.TEMPLATES:
        return this.templates;
      case b.CASES:
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
      case b.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case b.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case b.TEMPLATES:
        this.templates = t, super.eSet(e, t);
        break;
      case b.CASES:
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
      case b.NAME:
        return this._name !== void 0;
      case b.PRIORITY:
        return this._priority !== 0;
      case b.TEMPLATES:
        return this._templates !== void 0 && this._templates.length > 0;
      case b.CASES:
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
      case b.NAME:
        this._name = void 0;
        return;
      case b.PRIORITY:
        this._priority = 0;
        return;
      case b.TEMPLATES:
        this._templates = [];
        return;
      case b.CASES:
        this._cases = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
ze(ir, "NAME", 0), ze(ir, "PRIORITY", 1), ze(ir, "TEMPLATES", 2), ze(ir, "CASES", 3);
let ku = ir;
var Xu = Object.defineProperty, Hu = (s, e, t) => e in s ? Xu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, oe = (s, e, t) => Hu(s, typeof e != "symbol" ? e + "" : e, t);
const ut = class O extends Qe {
  constructor() {
    super(...arguments), oe(this, "_extends"), oe(this, "_css"), oe(this, "_vueComponent"), oe(this, "_visibilityCondition"), oe(this, "_name"), oe(this, "_group");
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
oe(ut, "EXTENDS", 2), oe(ut, "CSS", 3), oe(ut, "VUE_COMPONENT", 4), oe(ut, "VISIBILITY_CONDITION", 5), oe(ut, "NAME", 0), oe(ut, "GROUP", 1);
let ba = ut;
var ju = Object.defineProperty, qu = (s, e, t) => e in s ? ju(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Dr = (s, e, t) => qu(s, typeof e != "symbol" ? e + "" : e, t);
const qr = class se extends ba {
  constructor() {
    super(...arguments), Dr(this, "_layout"), Dr(this, "_order");
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
      getFeature: () => this.eClass().getEStructuralFeature(se.LAYOUT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => se.LAYOUT,
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
      getFeature: () => this.eClass().getEStructuralFeature(se.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => se.ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case se.LAYOUT:
        return this.layout;
      case se.ORDER:
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
      case se.LAYOUT:
        this.layout = t, super.eSet(e, t);
        break;
      case se.ORDER:
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
      case se.LAYOUT:
        return this._layout !== void 0;
      case se.ORDER:
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
      case se.LAYOUT:
        this._layout = void 0;
        return;
      case se.ORDER:
        this._order = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Dr(qr, "LAYOUT", 6), Dr(qr, "ORDER", 7);
let Ku = qr;
var zu = Object.defineProperty, Qu = (s, e, t) => e in s ? zu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, _e = (s, e, t) => Qu(s, typeof e != "symbol" ? e + "" : e, t);
const qt = class y extends ba {
  constructor() {
    super(...arguments), _e(this, "_feature"), _e(this, "_widgetType"), _e(this, "_label"), _e(this, "_readOnly"), _e(this, "_order");
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
      getFeature: () => this.eClass().getEStructuralFeature(y.FEATURE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.FEATURE,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.WIDGET_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.WIDGET_TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.READ_ONLY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.READ_ONLY,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case y.FEATURE:
        return this.feature;
      case y.WIDGET_TYPE:
        return this.widgetType;
      case y.LABEL:
        return this.label;
      case y.READ_ONLY:
        return this.readOnly;
      case y.ORDER:
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
      case y.FEATURE:
        this.feature = t, super.eSet(e, t);
        break;
      case y.WIDGET_TYPE:
        this.widgetType = t, super.eSet(e, t);
        break;
      case y.LABEL:
        this.label = t, super.eSet(e, t);
        break;
      case y.READ_ONLY:
        this.readOnly = t, super.eSet(e, t);
        break;
      case y.ORDER:
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
      case y.FEATURE:
        return this._feature !== void 0;
      case y.WIDGET_TYPE:
        return this._widgetType !== void 0;
      case y.LABEL:
        return this._label !== void 0;
      case y.READ_ONLY:
        return this._readOnly !== void 0;
      case y.ORDER:
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
      case y.FEATURE:
        this._feature = void 0;
        return;
      case y.WIDGET_TYPE:
        this._widgetType = void 0;
        return;
      case y.LABEL:
        this._label = void 0;
        return;
      case y.READ_ONLY:
        this._readOnly = void 0;
        return;
      case y.ORDER:
        this._order = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
_e(qt, "FEATURE", 6), _e(qt, "WIDGET_TYPE", 7), _e(qt, "LABEL", 8), _e(qt, "READ_ONLY", 9), _e(qt, "ORDER", 10);
let Ma = qt;
var Ju = Object.defineProperty, Zu = (s, e, t) => e in s ? Ju(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ua = (s, e, t) => Zu(s, typeof e != "symbol" ? e + "" : e, t);
const Va = class nt extends Ma {
  constructor() {
    super(...arguments), Ua(this, "_columns", []);
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
      getFeature: () => this.eClass().getEStructuralFeature(nt.COLUMNS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => nt.COLUMNS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case nt.COLUMNS:
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
      case nt.COLUMNS:
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
      case nt.COLUMNS:
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
      case nt.COLUMNS:
        this._columns = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ua(Va, "COLUMNS", 11);
let en = Va;
var tn = Object.defineProperty, sn = (s, e, t) => e in s ? tn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, yr = (s, e, t) => sn(s, typeof e != "symbol" ? e + "" : e, t);
const Kr = class re extends Qe {
  constructor() {
    super(...arguments), yr(this, "_language", "OCL"), yr(this, "_body", "");
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
      getFeature: () => this.eClass().getEStructuralFeature(re.LANGUAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => re.LANGUAGE,
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
      getFeature: () => this.eClass().getEStructuralFeature(re.BODY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => re.BODY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case re.LANGUAGE:
        return this.language;
      case re.BODY:
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
      case re.LANGUAGE:
        this.language = t, super.eSet(e, t);
        break;
      case re.BODY:
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
      case re.LANGUAGE:
        return this._language !== "OCL";
      case re.BODY:
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
      case re.LANGUAGE:
        this._language = "OCL";
        return;
      case re.BODY:
        this._body = "";
        return;
      default:
        super.eUnset(e);
    }
  }
};
yr(Kr, "LANGUAGE", 0), yr(Kr, "BODY", 1);
let Ba = Kr;
const Gr = {
  ERROR: "ERROR"
};
var rn = Object.defineProperty, an = (s, e, t) => e in s ? rn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Rr = (s, e, t) => an(s, typeof e != "symbol" ? e + "" : e, t);
const zr = class ae extends Ba {
  constructor() {
    super(...arguments), Rr(this, "_defaultMessage"), Rr(this, "_severity", Gr.ERROR);
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
      getFeature: () => this.eClass().getEStructuralFeature(ae.DEFAULT_MESSAGE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ae.DEFAULT_MESSAGE,
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
      getFeature: () => this.eClass().getEStructuralFeature(ae.SEVERITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ae.SEVERITY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ae.DEFAULT_MESSAGE:
        return this.defaultMessage;
      case ae.SEVERITY:
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
      case ae.DEFAULT_MESSAGE:
        this.defaultMessage = t, super.eSet(e, t);
        break;
      case ae.SEVERITY:
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
      case ae.DEFAULT_MESSAGE:
        return this._defaultMessage !== void 0;
      case ae.SEVERITY:
        return this._severity !== Gr.ERROR;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ae.DEFAULT_MESSAGE:
        this._defaultMessage = void 0;
        return;
      case ae.SEVERITY:
        this._severity = Gr.ERROR;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Rr(zr, "DEFAULT_MESSAGE", 2), Rr(zr, "SEVERITY", 3);
let un = zr;
var nn = Object.defineProperty, ln = (s, e, t) => e in s ? nn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, q = (s, e, t) => ln(s, typeof e != "symbol" ? e + "" : e, t);
const Xe = class I extends Qe {
  constructor() {
    super(...arguments), q(this, "_order"), q(this, "_matchCode"), q(this, "_matchSeverity"), q(this, "_matchExpression"), q(this, "_mappedText"), q(this, "_mappedTextExpression"), q(this, "_mappedSeverity");
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
q(Xe, "ORDER", 0), q(Xe, "MATCH_CODE", 1), q(Xe, "MATCH_SEVERITY", 2), q(Xe, "MATCH_EXPRESSION", 3), q(Xe, "MAPPED_TEXT", 4), q(Xe, "MAPPED_TEXT_EXPRESSION", 5), q(Xe, "MAPPED_SEVERITY", 6);
let on = Xe;
var cn = Object.defineProperty, En = (s, e, t) => e in s ? cn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, hn = (s, e, t) => En(s, e + "", t);
const Ga = class Wa extends mi {
  static get eINSTANCE() {
    return this._instance || (this._instance = new Wa()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(v.eINSTANCE);
  }
  /**
   * Create a new UIModel instance
   */
  createUIModel() {
    return new wi();
  }
  /**
   * Create a new FormView instance
   */
  createFormView() {
    return new Ui();
  }
  /**
   * Create a new TableView instance
   */
  createTableView() {
    return new Gi();
  }
  /**
   * Create a new SectionView instance
   */
  createSectionView() {
    return new $i();
  }
  /**
   * Create a new TabView instance
   */
  createTabView() {
    return new Xi();
  }
  /**
   * Create a new SummaryView instance
   */
  createSummaryView() {
    return new qi();
  }
  /**
   * Create a new MasterDetail instance
   */
  createMasterDetail() {
    return new Qi();
  }
  /**
   * Create a new PropertyBinding instance
   */
  createPropertyBinding() {
    return new eu();
  }
  /**
   * Create a new InputWidget instance
   */
  createInputWidget() {
    return new iu();
  }
  /**
   * Create a new TextAreaWidget instance
   */
  createTextAreaWidget() {
    return new lu();
  }
  /**
   * Create a new NumberWidget instance
   */
  createNumberWidget() {
    return new Eu();
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
    return new Su();
  }
  /**
   * Create a new ComboboxWidget instance
   */
  createComboboxWidget() {
    return new mu();
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
    return new Au();
  }
  /**
   * Create a new TemplateCase instance
   */
  createTemplateCase() {
    return new yu();
  }
  /**
   * Create a new GroupWidget instance
   */
  createGroupWidget() {
    return new Fu();
  }
  /**
   * Create a new Conditional instance
   */
  createConditional() {
    return new Mu();
  }
  /**
   * Create a new ForEach instance
   */
  createForEach() {
    return new Bu();
  }
  /**
   * Create a new ReferenceLinkWidget instance
   */
  createReferenceLinkWidget() {
    return new Yu();
  }
  /**
   * Create a new UIModelOverlay instance
   */
  createUIModelOverlay() {
    return new ku();
  }
  /**
   * Create a new LayoutStyle instance
   */
  createLayoutStyle() {
    return new Ku();
  }
  /**
   * Create a new WidgetStyle instance
   */
  createWidgetStyle() {
    return new Ma();
  }
  /**
   * Create a new TableStyle instance
   */
  createTableStyle() {
    return new en();
  }
  /**
   * Create a new Expression instance
   */
  createExpression() {
    return new Ba();
  }
  /**
   * Create a new ValidationExpression instance
   */
  createValidationExpression() {
    return new un();
  }
  /**
   * Create a new ValidationMessageMapper instance
   */
  createValidationMessageMapper() {
    return new on();
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
hn(Ga, "_instance");
let aa = Ga;
const Ya = Symbol("uimodelComposerRegistry");
function $a() {
  const s = es(Ya);
  if (!s)
    throw new Error(
      "[uimodel-composer] No ComposerRegistry provided. Make sure UIModelComposer is an ancestor of this component."
    );
  return s;
}
function gn(s) {
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
const pn = "uic";
function nr(s) {
  return s === !0 || s === "true";
}
function lt(s, e = 0) {
  if (typeof s == "number") return s;
  const t = Number(s);
  return Number.isFinite(t) ? t : e;
}
const dn = {
  HOVER: ":hover",
  FOCUS: ":focus",
  FOCUS_WITHIN: ":focus-within",
  ACTIVE: ":active",
  DISABLED: ".uim-s-disabled",
  READONLY: ".uim-s-readonly",
  INVALID: ".uim-s-invalid",
  REQUIRED: ".uim-s-required"
};
function br(s) {
  return s.trim().replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() || "unnamed";
}
function Qr(s) {
  return `--${pn}-${br(s)}`;
}
function Tn(s) {
  return s.replace(/token\(\s*([^)]+?)\s*\)/g, (e, t) => `var(${Qr(t)})`);
}
function xa(s) {
  return `uic-${br(s)}`;
}
function Sn(s) {
  return `uicss-theme-${br(s)}`;
}
function ka(s, e) {
  return `uicss-cond-${br(s.name ?? "sheet")}-${e}`;
}
function Xa(s, e = "  ") {
  return s.filter((t) => t.property && t.value !== void 0).map((t) => `${e}${t.property.trim()}: ${Tn(t.value)}${nr(t.important) ? " !important" : ""};`).join(`
`);
}
function fn(s, e) {
  return e.filter((t) => t.declarations.length > 0).map((t) => {
    var r, i;
    const u = ((i = (r = t.state) == null ? void 0 : r.getName) == null ? void 0 : i.call(r)) ?? String(t.state), n = dn[u] ?? `:${u.toLowerCase()}`;
    return `${s}${n} {
${Xa(t.declarations)}
}`;
  }).join(`
`);
}
function pa(s, e, t, r) {
  const i = [];
  e.length > 0 && i.push(`${s} {
${Xa(e)}
}`);
  const u = fn(s, t);
  if (u && i.push(u), i.length === 0) return "";
  const n = i.join(`
`);
  return r ? `@media ${r} {
${n}
}` : n;
}
function Ha(s) {
  return s.includeSubtypes === void 0 || s.includeSubtypes === null ? !0 : nr(s.includeSubtypes);
}
function In(s, e, t) {
  var r, i;
  let u;
  const n = (i = (r = e.targetClass) == null ? void 0 : r.getName) == null ? void 0 : i.call(r);
  return n ? u = Ha(e) ? `.uim-c-${n}` : `.uim-component[data-uim-eclass="${n}"]` : u = ".uim-component", e.componentName && (u += `[data-uim-name="${e.componentName}"]`), e.group && (u += `[data-uim-group="${e.group}"]`), e.condition && (u += `.${ka(s, t)}`), u;
}
function mn(s) {
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
function Nn(s) {
  const e = [];
  if (s.tokens.length > 0) {
    const r = s.tokens.filter((i) => i.name).map((i) => `  ${Qr(i.name)}: ${i.value ?? ""};`);
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
    }).map((u) => `  ${Qr(u.token.name)}: ${u.value ?? ""};`);
    nr(r.dark) && i.push("  color-scheme: dark;"), i.length > 0 && e.push(`.${Sn(r.name)} {
${i.join(`
`)}
}`);
  }
  const t = s.rules.map((r, i) => ({ rule: r, index: i }));
  t.sort((r, i) => lt(r.rule.priority) - lt(i.rule.priority) || r.index - i.index);
  for (const { rule: r, index: i } of t) {
    const u = pa(
      In(s, r, i),
      r.declarations,
      r.states,
      r.media || void 0
    );
    u && e.push(u);
  }
  for (const r of mn(s.styles)) {
    if (!r.name) continue;
    const i = pa(`.${xa(r.name)}`, r.declarations, r.states);
    i && e.push(i);
  }
  return e.join(`

`);
}
function Ln(s) {
  return s.map(Nn).filter(Boolean).join(`

`);
}
const Mr = Symbol("uimodel-css:sheets");
let _n = 0;
function vn(s) {
  const e = ea(0);
  class t extends Oa {
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
  return Pr(
    () => [...Fe(s)],
    (c) => {
      g();
      for (const E of c)
        n(E), i.push(E);
      e.value++;
    },
    { immediate: !0 }
  ), Zr(g), { css: L(() => (e.value, Ln([...Fe(s)]))), version: e };
}
function On(s) {
  const { css: e, version: t } = vn(s);
  if (typeof document < "u") {
    const r = document.createElement("style");
    r.id = `uimodel-css-${++_n}`, r.setAttribute("data-uimodel-css", ""), document.head.appendChild(r), hi(() => {
      r.textContent = e.value;
    }), Zr(() => {
      r.remove();
    });
  }
  return { css: e, version: t };
}
function hr(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? ss(e) : s;
}
function ss(s) {
  return new Proxy(s, {
    get(e, t) {
      var r, i, u;
      if (typeof t != "string") return e[t];
      if (t === "eGet")
        return (g) => {
          var c, E, h;
          if (typeof g == "string") {
            const o = (h = (E = (c = e.eClass) == null ? void 0 : c.call(e)) == null ? void 0 : E.getEStructuralFeature) == null ? void 0 : h.call(E, g);
            return o ? hr(e.eGet(o)) : void 0;
          }
          return hr(e.eGet(g));
        };
      if (t in e) return e[t];
      const n = t.charAt(0).toUpperCase() + t.slice(1);
      for (const g of [`get${n}`, `is${n}`])
        if (typeof e[g] == "function") return hr(e[g]());
      const l = (u = (i = (r = e.eClass) == null ? void 0 : r.call(e)) == null ? void 0 : i.getEStructuralFeature) == null ? void 0 : u.call(i, t);
      if (l) return hr(e.eGet(l));
    }
  });
}
function Er(s, e) {
  if (!s) return !0;
  try {
    switch (s.language) {
      case "OCL":
        return An(s.body, e);
      case "AQL":
        return Cn(s.body, e);
      case "JS":
        return Dn(s.body, e);
      default:
        return console.warn(`[uimodel-composer] Unknown expression language: ${s.language}`), !0;
    }
  } catch (t) {
    return console.error(`[uimodel-composer] Expression evaluation failed (${s.language}):`, t), !0;
  }
}
function An(s, e) {
  try {
    const { EMFOclValidator: t } = globalThis.__emftsOcl__ ?? {};
    return t ? new t().evaluateExpression(s, ss(e)) === !0 : (console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup."), !0);
  } catch {
    return !0;
  }
}
function Cn(s, e) {
  return console.warn("[uimodel-composer] AQL evaluation not yet implemented."), !0;
}
function Dn(s, e) {
  return !!new Function("self", `"use strict"; return (${s});`)(ss(e));
}
function yn(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? ss(e) : s;
}
function ia(s, e, t = {}) {
  if (s != null && s.body)
    try {
      switch (s.language) {
        case "JS": {
          const r = Object.keys(t);
          return new Function("self", ...r, `"use strict"; return (${s.body});`)(ss(e), ...r.map((i) => yn(t[i])));
        }
        case "OCL": {
          const { EMFOclValidator: r } = globalThis.__emftsOcl__ ?? {};
          if (!r) {
            console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup.");
            return;
          }
          return new r().evaluateExpression(s.body, ss(e));
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
function Rn(s) {
  return s.map((e, t) => ({ overlay: e, index: t })).sort((e, t) => lt(t.overlay.priority) - lt(e.overlay.priority) || e.index - t.index).flatMap(({ overlay: e }) => [...e.cases ?? []]);
}
function ja(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "AllFeatures";
}
function wn(s) {
  var e;
  const t = (e = s.eClass) == null ? void 0 : e.call(s);
  return t ? t.getName() === "WidgetComponent" || t.getEAllSuperTypes().some((r) => r.getName() === "WidgetComponent") : !1;
}
function qa(s) {
  return typeof s.isContainment == "function";
}
function Fn(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    ja(i) ? e.push(i) : wn(i) && i.feature && t.add(i.feature);
    for (const u of i.eClass().getEAllStructuralFeatures()) {
      if (!qa(u) || !u.isContainment()) continue;
      const n = i.eGet(u);
      if (!n) continue;
      const l = u.isMany() ? [...n] : [n];
      for (const g of l) r(g);
    }
  }
  return r(s), { blocks: e, boundFeatures: t };
}
function Ir(s) {
  var e;
  return (((e = s.with) == null ? void 0 : e.length) ?? 0) > 0;
}
function Pn(s, e) {
  var t;
  const r = s.getEAllStructuralFeatures();
  if (Ir(e)) {
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
    (u) => Er(e.filter, u)
  )), i;
}
function bn(s, e) {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const u of e.blocks)
    t.set(u, []), r.set(u, new Set(Pn(s, u)));
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
      const g = lt(l.priority) - lt(n.priority), c = Number(Ir(l)) - Number(Ir(n)), E = i.get(n) - i.get(l);
      (g > 0 || g === 0 && (c > 0 || c === 0 && E > 0)) && (n = l);
    }
    n && t.get(n).push(u);
  }
  for (const [u, n] of t) {
    if (!Ir(u)) continue;
    const l = new Map(u.with.map((g, c) => [g, c]));
    n.sort((g, c) => (l.get(g) ?? 0) - (l.get(c) ?? 0));
  }
  return t;
}
function da(s, e) {
  for (const t of s ?? [])
    if (t.widget && (!t.when || ia(
      t.when,
      e
    )))
      return t.widget;
}
function Mn(s, e, t) {
  return da(t?.overlayCases, e) ?? da(s.cases, e) ?? s.template;
}
function wr(s) {
  var e, t, r;
  const i = s.eClass(), u = (e = i.getEPackage()) == null ? void 0 : e.getEFactoryInstance();
  if (!u) throw new Error(`Keine Factory für ${i.getName()}`);
  const n = u.create(i);
  for (const l of i.getEAllStructuralFeatures()) {
    if ((t = l.isDerived) != null && t.call(l) || ((r = l.isChangeable) == null ? void 0 : r.call(l)) === !1) continue;
    const g = s.eGet(l);
    if (g == null) continue;
    const c = qa(l) && l.isContainment();
    if (l.isMany()) {
      const E = [...g];
      if (E.length === 0) continue;
      n.eSet(
        l,
        c ? E.map((h) => wr(h)) : E
      );
    } else
      n.eSet(l, c ? wr(g) : g);
  }
  return n;
}
const Un = /* @__PURE__ */ new Set(["AllFeatures", "Conditional", "ForEach"]);
function Wr(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function Ka(s, e) {
  if (Wr(s) !== "GroupWidget") {
    s.feature = e;
    return;
  }
  const t = s.fields ?? [];
  for (const r of t)
    Un.has(Wr(r)) || (Wr(r) === "GroupWidget" ? Ka(r, e) : !r.feature && !(r.bindings ?? []).some((i) => i.property === "feature") && (r.feature = e));
}
function Vn(s, e) {
  const t = aa.eINSTANCE.createValidationExpression();
  return t.language = "JS", t.body = `self.${s} !== null && self.${s} !== undefined && String(self.${s}).length > 0`, t.defaultMessage = `${e ?? s} ist erforderlich.`, t.severity = "ERROR", t;
}
function Bn(s) {
  const e = s.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Gn(s, e, t) {
  var r, i, u, n;
  const l = t ?? {
    blocks: [e],
    boundFeatures: /* @__PURE__ */ new Set()
  };
  l.blocks.includes(e) || l.blocks.push(e);
  const g = bn(s, l).get(e) ?? [], c = [];
  for (const E of g) {
    const h = Mn(e, E, l);
    if (!h) {
      console.error(
        `[uimodel-composer] AllFeatures "${e.name ?? "?"}": kein TemplateCase trifft auf Feature "${E.getName() ?? "?"}" und kein Default-Fall (template) gesetzt.`
      );
      continue;
    }
    const o = wr(h);
    Ka(o, E);
    const p = E.getName() ?? "feature";
    o.name = p, o.label === void 0 && e.label !== void 0 && (o.label = e.label), o.placeholder === void 0 && e.placeholder !== void 0 && (o.placeholder = e.placeholder), o.readOnly === void 0 && e.readOnly !== void 0 && (o.readOnly = e.readOnly), o.required === void 0 && e.required !== void 0 && (o.required = e.required), (((r = o.styles) == null ? void 0 : r.length) ?? 0) === 0 && (((i = e.styles) == null ? void 0 : i.length) ?? 0) > 0 && (o.styles = [...e.styles]), o.label || (o.label = Bn(p)), !o.group && e.group && (o.group = e.group), o.required === void 0 && lt((u = E.getLowerBound) == null ? void 0 : u.call(E)) >= 1 && (o.required = !0, (((n = o.validations) == null ? void 0 : n.length) ?? 0) === 0 && (o.validations = [Vn(p, o.label)]));
    const N = e.bindings ?? [];
    if (N.length > 0) {
      const _ = new Set((o.bindings ?? []).map((M) => M.property)), X = N.filter((M) => M.property && !_.has(M.property)).map((M) => wr(M));
      X.length > 0 && (o.bindings = [...o.bindings ?? [], ...X]);
    }
    c.push(o);
  }
  return c;
}
const za = Symbol("uimodel:allfeatures-context"), Qa = ea(0);
function Wn() {
  Qa.value++;
}
function rs() {
  Qa.value;
}
function Yn(s) {
  class e extends Oa {
    notifyChanged(l) {
      var g;
      try {
        super.notifyChanged(l);
      } catch {
      }
      if ((g = l.isTouch) != null && g.call(l)) return;
      Wn();
      const c = Fe(s);
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
  Pr(
    () => Fe(s),
    (n, l) => {
      l && u(l), n && i(n);
    },
    { immediate: !0 }
  ), Zr(() => {
    const n = Fe(s);
    n && u(n);
  });
}
function Ja(s) {
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
function $n(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "CssStyle";
}
function xn(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    !i || t.has(i) || (t.add(i), r(i.extends), $n(i) && i.name && e.push(xa(i.name)));
  }
  for (const i of s ?? []) r(i);
  return e;
}
function kn(s, e) {
  var t, r, i;
  const u = (r = (t = s.targetClass) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  if (u) {
    const n = Ja((i = e.eClass) == null ? void 0 : i.call(e));
    if (Ha(s)) {
      if (!n.includes(u)) return !1;
    } else if (n[0] !== u)
      return !1;
  }
  return !(s.componentName && e.name !== s.componentName || s.group && e.group !== s.group);
}
function ua(s, e = {}) {
  var t;
  const r = ["uim-component"];
  for (const i of Ja((t = s.eClass) == null ? void 0 : t.call(s)))
    r.push(`uim-c-${i}`);
  r.push(...xn(s.styles)), e.resolvedCss && r.push(...e.resolvedCss.split(/\s+/).filter(Boolean));
  for (const i of e.sheets ?? [])
    i.rules.forEach((u, n) => {
      u.condition && kn(u, s) && e.model && Er(u.condition, e.model) && r.push(ka(i, n));
    });
  return [...new Set(r)];
}
function na(s) {
  var e, t, r;
  const i = {}, u = (r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  return u && (i["data-uim-eclass"] = u), s.name && (i["data-uim-name"] = s.name), s.group && (i["data-uim-group"] = s.group), i;
}
function Xn(s, e, t) {
  const r = [];
  return nr(t ?? s.required) && r.push("uim-s-required"), nr(e ?? s.readOnly) && r.push("uim-s-readonly"), r;
}
function Za(s, e = /* @__PURE__ */ new Set()) {
  if (!s) return {};
  if (e.has(s)) return {};
  e.add(s);
  const t = s.extends ? Za(s.extends, e) : {}, r = Hn(s);
  return ei(t, r);
}
function la(s) {
  return s.reduce(
    (e, t) => ei(e, Za(t)),
    {}
  );
}
function Hn(s) {
  const e = {};
  s.css !== void 0 && (e.css = s.css), s.vueComponent !== void 0 && (e.vueComponent = s.vueComponent);
  const t = s;
  t.layout !== void 0 && (e.layout = t.layout), t.order !== void 0 && (e.order = t.order);
  const r = s;
  return r.widgetType !== void 0 && (e.widgetType = r.widgetType), r.label !== void 0 && (e.label = r.label), r.readOnly !== void 0 && (e.readOnly = r.readOnly), r.order !== void 0 && (e.order = r.order), e;
}
function ei(s, e) {
  return {
    ...s,
    ...Object.fromEntries(
      Object.entries(e).filter(([, t]) => t !== void 0)
    ),
    // Merge CSS classes (append, not replace)
    css: [s.css, e.css].filter(Boolean).join(" ") || void 0
  };
}
const oa = /* @__PURE__ */ ue({
  __name: "ComponentDispatcher",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = s, t = $a(), r = L(() => {
      var l, g, c, E;
      const h = ((E = (c = (g = (l = e.component).eClass) == null ? void 0 : g.call(l)) == null ? void 0 : c.getName) == null ? void 0 : E.call(c)) ?? "", o = t.getComposer(h);
      return o || console.warn(`[uimodel-composer] No composer registered for EClass "${h}"`), o ?? null;
    }), i = es(Mr, void 0), u = L(() => (rs(), i?.version.value, ua(e.component, {
      model: e.model,
      sheets: i?.sheets.value,
      resolvedCss: la(e.component.styles ?? []).css
    }))), n = L(() => na(e.component));
    return (l, g) => r.value ? (A(), ie(ta(r.value), sa({
      key: 0,
      component: s.component,
      model: s.model,
      class: u.value
    }, n.value), null, 16, ["component", "model", "class"])) : or("", !0);
  }
});
function ca(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function jn(s) {
  return ca(s) === "GroupWidget";
}
function qn(s) {
  return ca(s) === "Conditional";
}
function Kn(s) {
  return ca(s) === "ForEach";
}
function zn(s) {
  if (!s) return [];
  const e = typeof s == "object" && Symbol.iterator in s ? s : [s], t = [];
  for (const r of e)
    r && typeof r.eClass == "function" ? t.push(r) : r != null && console.warn("[uimodel-composer] ForEach: Element ist kein EObject und wird übersprungen:", r);
  return t;
}
function Jr(s, e, t) {
  var r;
  const i = [];
  for (const u of s ?? [])
    if (ja(u)) {
      const n = (r = e.eClass) == null ? void 0 : r.call(e);
      if (!n) continue;
      for (const l of Gn(n, u, t))
        i.push({ kind: "widget", widget: l, model: e });
    } else if (qn(u)) {
      const n = Er(u.condition, e) ? u.then : u.else;
      i.push(...Jr(n, e, t));
    } else if (Kn(u)) {
      const n = zn(ia(u.items, e));
      if (n.length === 0) {
        u.emptyText && i.push({ kind: "note", text: u.emptyText });
        continue;
      }
      for (const l of n)
        i.push(...Jr(u.body, l, t));
    } else jn(u) ? i.push({ kind: "group", widget: u, model: e }) : i.push({ kind: "widget", widget: u, model: e });
  return i;
}
function Qn(s, e) {
  return L(() => (rs(), Er(Fe(s), Fe(e))));
}
const Jn = /* @__PURE__ */ new Set([
  "readOnly",
  "required",
  "password",
  "asToggle",
  "multiSelect",
  "asButtonGroup",
  "withTime"
]), Zn = /* @__PURE__ */ new Set([
  "maxLength",
  "rows",
  "min",
  "max",
  "step",
  "minSearchLength",
  "order"
]);
function el(s, e) {
  if (e === null) return s === "feature" ? null : void 0;
  if (s === "feature") return e;
  if (Jn.has(s)) return !!e;
  if (Zn.has(s)) {
    const t = Number(e);
    return Number.isFinite(t) ? t : void 0;
  }
  return String(e);
}
function tl(s, e) {
  var t;
  const r = { values: {}, featureSuppressed: !1 };
  for (const i of s.bindings ?? []) {
    const u = i.property;
    if (!u || !i.expression) continue;
    const n = ia(i.expression, e, {
      feature: s.feature,
      eClass: (t = e.eClass) == null ? void 0 : t.call(e)
    });
    if (n === void 0) continue;
    if (u === "feature") {
      n === null ? r.featureSuppressed = !0 : r.feature = n;
      continue;
    }
    const l = el(u, n);
    l !== void 0 && (r.values[u] = l);
  }
  return r;
}
function sl(s, e) {
  return L(() => {
    var t;
    rs();
    const r = Fe(s), i = la(r.styles), u = {
      ...r.label !== void 0 ? { label: r.label } : {},
      ...r.placeholder !== void 0 ? { placeholder: r.placeholder } : {},
      ...r.readOnly !== void 0 ? { readOnly: r.readOnly } : {},
      ...r.required !== void 0 ? { required: r.required } : {}
    }, n = e ? Fe(e) : void 0;
    if (!n || (((t = r.bindings) == null ? void 0 : t.length) ?? 0) === 0)
      return { ...i, ...u };
    const l = tl(r, n);
    return {
      ...i,
      ...u,
      ...l.values,
      boundFeature: l.feature,
      featureSuppressed: l.featureSuppressed
    };
  });
}
var x = /* @__PURE__ */ ((s) => (s[s.DEFAULT = 0] = "DEFAULT", s[s.DATA_TYPE = 100] = "DATA_TYPE", s[s.ECLASS = 200] = "ECLASS", s[s.FEATURE = 300] = "FEATURE", s[s.PACKAGE = 400] = "PACKAGE", s[s.INSTANCE = 500] = "INSTANCE", s[s.OVERRIDE = 1e3] = "OVERRIDE", s))(x || {});
function k() {
  return { matches: !1, priority: 0 };
}
function he(s) {
  return { matches: !0, priority: s };
}
let rl = class {
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
      return k();
    if (t === this.eClass)
      return he(x.ECLASS + 50);
    if (t.getName() === this.eClass.getName()) {
      const r = t.getEPackage(), i = this.eClass.getEPackage();
      if (r && i && r.getNsURI() === i.getNsURI())
        return he(x.ECLASS + 50);
    }
    return this.isSuperTypeOf(this.eClass, t) ? he(x.ECLASS) : k();
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
}, al = class {
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
      return k();
    const u = (t = i.getEType) == null ? void 0 : t.call(i);
    return u && ((r = u.getName) == null ? void 0 : r.call(u)) === this.dataTypeName ? he(x.DATA_TYPE) : k();
  }
  /**
   * Check if the feature is an EAttribute.
   */
  isEAttribute(e) {
    var t, r;
    return !e || typeof e != "object" ? !1 : "getEAttributeType" in e || "eClass" in e && typeof e.eClass == "function" && ((r = (t = e.eClass()) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "EAttribute";
  }
}, il = class {
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
    return k();
  }
  /**
   * Match against a specific enum.
   */
  matchEnum(e) {
    var t;
    return this.enumName ? ((t = e.getName) == null ? void 0 : t.call(e)) === this.enumName ? he(x.DATA_TYPE + 50) : k() : he(x.DATA_TYPE);
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
}, ul = class {
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
      return k();
    const g = l;
    let c = x.DATA_TYPE;
    if (this.containment !== void 0) {
      if ((((t = g.isContainment) == null ? void 0 : t.call(g)) ?? !1) !== this.containment)
        return k();
      c += 25;
    }
    if (this.targetClass) {
      const E = (r = g.getEReferenceType) == null ? void 0 : r.call(g);
      if (!E)
        return k();
      const h = (i = E.getName) == null ? void 0 : i.call(E), o = (n = (u = this.targetClass).getName) == null ? void 0 : n.call(u);
      if (h !== o && !this.isSuperTypeOf(this.targetClass, E))
        return k();
      c += 25;
    }
    return he(c);
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
class nl {
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
      return k();
    const p = (r = o.getEContainingClass) == null ? void 0 : r.call(o);
    if (!p)
      return k();
    if (p === this.eClass)
      return he(x.FEATURE);
    const N = (i = p.getName) == null ? void 0 : i.call(p), _ = (n = (u = this.eClass).getName) == null ? void 0 : n.call(u);
    if (N === _) {
      const X = (l = p.getEPackage) == null ? void 0 : l.call(p), M = (c = (g = this.eClass).getEPackage) == null ? void 0 : c.call(g);
      if (X && M && ((E = X.getNsURI) == null ? void 0 : E.call(X)) === ((h = M.getNsURI) == null ? void 0 : h.call(M)))
        return he(x.FEATURE);
    }
    return this.isInheritedFrom(p, this.eClass) ? he(x.FEATURE - 10) : k();
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
        const o = (n = h.getEPackage) == null ? void 0 : n.call(h), p = (l = t.getEPackage) == null ? void 0 : l.call(t);
        if (o && p && ((g = o.getNsURI) == null ? void 0 : g.call(o)) === ((c = p.getNsURI) == null ? void 0 : c.call(p)))
          return !0;
      }
    }
    return !1;
  }
}
var ll = Object.defineProperty, ol = (s, e, t) => e in s ? ll(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ta = (s, e, t) => ol(s, typeof e != "symbol" ? e + "" : e, t);
let cl = 0;
function El() {
  return `descriptor-${++cl}`;
}
let hl = class {
  constructor() {
    Ta(this, "entries", []), Ta(this, "instanceOverrides", /* @__PURE__ */ new WeakMap());
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
      { priority: x.INSTANCE }
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
      { priority: x.ECLASS, ...r }
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
      { priority: x.DATA_TYPE, ...r }
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
      { priority: x.DATA_TYPE, ...r }
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
      { priority: x.DATA_TYPE, ...t }
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
      { priority: x.FEATURE, ...i }
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
    const i = El();
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
        const r = new rl(e.eClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "datatype": {
        const r = new al(e.dataTypeName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "enum": {
        const r = new il(e.enumName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "reference": {
        const r = new ul(e.containment, e.targetClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "feature": {
        const r = new nl(e.eClass, e.featureName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "instance":
        return (r) => r.eObject === e.eObject ? he(t ?? x.INSTANCE) : k();
      case "custom":
        return e.matcher;
      default:
        return () => k();
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
const lr = new hl();
var gl = Object.defineProperty, pl = (s, e, t) => e in s ? gl(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Sa = (s, e, t) => pl(s, typeof e != "symbol" ? e + "" : e, t);
let dl = class {
  constructor() {
    Sa(this, "lazyRegistrations", []), Sa(this, "resolvedPackages", /* @__PURE__ */ new Map());
  }
  /**
   * Register a decorated component immediately.
   */
  register(e, t, r) {
    lr.register(e, t, r);
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
      r ? lr.register(t.component, r, t.options) : e.push(t);
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
new dl();
const ti = Symbol("componentRegistry");
function Tl() {
  const s = es(ti) ?? lr;
  function e(h) {
    return s.getComponent(h);
  }
  function t(h, o) {
    return s.getComponentForFeature(h, o);
  }
  function r(h, o) {
    return s.getComponentForEClass(h, o);
  }
  function i(h, o, p) {
    return s.register(h, o, p);
  }
  function u(h, o) {
    return s.registerForInstance(h, o);
  }
  function n(h, o, p) {
    return s.registerForEClass(h, o, p);
  }
  function l(h, o, p) {
    return s.registerForDataType(h, o, p);
  }
  function g(h, o, p) {
    return s.registerForEnum(h, o, p);
  }
  function c(h, o) {
    return s.registerForReference(h, o);
  }
  function E(h, o, p, N) {
    return s.registerForFeature(h, o, p, N);
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
const Sl = { class: "uimodel-fallback-widget" }, fl = { class: "uimodel-fallback-widget__label" }, Il = {
  key: 0,
  "aria-hidden": "true"
}, ml = ["rows", "value", "placeholder", "readonly", "disabled"], Nl = /* @__PURE__ */ ue({
  __name: "FallbackWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = L(() => {
      var o;
      return ((o = e.custom) == null ? void 0 : o.resolvedStyle) ?? {};
    }), r = L(
      () => {
        var o, p;
        return t.value.label ?? ((p = (o = e.feature) == null ? void 0 : o.getName) == null ? void 0 : p.call(o)) ?? "";
      }
    ), i = L(() => t.value.placeholder ?? ""), u = L(() => g(t.value.readOnly)), n = L(() => g(t.value.required)), l = L(() => {
      var o, p;
      const N = (p = (o = e.custom) == null ? void 0 : o.rawWidget) == null ? void 0 : p.rows, _ = Number(N);
      return Number.isFinite(_) && _ > 0 ? _ : 3;
    });
    function g(o) {
      return o === !0 || o === "true";
    }
    const c = L(() => {
      var o;
      const p = (o = e.eObject) == null ? void 0 : o.eGet(e.feature);
      return p == null ? "" : String(p);
    }), E = ea(c.value);
    Pr(c, (o) => {
      E.value = o;
    });
    function h(o) {
      var p;
      const N = o.target.value;
      E.value = N, (p = e.eObject) == null || p.eSet(e.feature, N);
    }
    return (o, p) => (A(), U("div", Sl, [
      mr("label", fl, [
        gi(ra(r.value), 1),
        n.value ? (A(), U("span", Il, " *")) : or("", !0)
      ]),
      mr("textarea", {
        class: "uimodel-fallback-widget__input",
        rows: l.value,
        value: E.value,
        placeholder: i.value,
        readonly: u.value,
        disabled: u.value,
        onInput: h
      }, null, 40, ml)
    ]));
  }
}), Ll = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, _l = /* @__PURE__ */ Ll(Nl, [["__scopeId", "data-v-0237261a"]]), si = /* @__PURE__ */ ue({
  __name: "WidgetComposer",
  props: {
    widget: {},
    model: {}
  },
  setup(s) {
    const e = s, t = /* @__PURE__ */ new Set(), { getComponentForFeature: r } = Tl(), i = Qn(
      () => e.widget.visibilityCondition,
      () => e.model
    ), u = sl(
      () => e.widget,
      () => e.model
    ), n = L(
      () => u.value.boundFeature ?? e.widget.feature
    ), l = L(() => {
      var o, p, N, _, X, M, ge, Pe;
      if (!n.value) return null;
      const pe = r(n.value, e.model);
      if (pe) return pe;
      const ve = ((_ = (N = (p = (o = e.widget).eClass) == null ? void 0 : p.call(o)) == null ? void 0 : N.getName) == null ? void 0 : _.call(N)) ?? "WidgetComponent", de = ((Pe = (ge = (M = (X = n.value).getEType) == null ? void 0 : M.call(X)) == null ? void 0 : ge.getName) == null ? void 0 : Pe.call(ge)) ?? "?", Oe = `${ve}/${de}`;
      return t.has(Oe) || (t.add(Oe), console.warn(
        `[uimodel-composer] Kein Renderer für Widget "${ve}" auf Datentyp "${de}" registriert — Fallback als Plaintext-Editor. Host: Renderer über die @emfts/vue-registry registrieren.`
      )), _l;
    }), g = L(() => {
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
    }), c = es(Mr, void 0), E = L(() => (rs(), c?.version.value, [
      ...ua(e.widget, {
        model: e.model,
        sheets: c?.sheets.value,
        resolvedCss: u.value.css
      }),
      ...Xn(
        e.widget,
        u.value.readOnly,
        u.value.required
      )
    ])), h = L(() => na(e.widget));
    return (o, p) => we(i) && l.value && !we(u).featureSuppressed ? (A(), ie(ta(l.value), sa({ key: 0 }, { ...g.value, ...h.value }, { class: E.value }), null, 16, ["class"])) : or("", !0);
  }
}), vl = {
  key: 0,
  class: "uimodel-foreach-empty"
}, Ol = /* @__PURE__ */ ue({
  __name: "FieldsRenderer",
  props: {
    fields: {},
    model: {}
  },
  setup(s) {
    const e = s, t = es(za, void 0), r = es(Mr, void 0), i = L(() => (rs(), r?.version.value, Jr(e.fields, e.model, t?.value)));
    function u(g, c) {
      const E = String(
        g.layout ?? "VERTICAL"
      ).toLowerCase();
      return [
        ...ua(g, {
          model: c,
          sheets: r?.sheets.value,
          resolvedCss: la(g.styles ?? []).css
        }),
        "uimodel-group",
        `uimodel-group--${E}`
      ];
    }
    function n(g) {
      return g.fields ?? [];
    }
    const l = na;
    return (g, c) => {
      const E = pi("FieldsRenderer", !0);
      return A(!0), U(ts, null, cr(i.value, (h, o) => (A(), U(ts, { key: o }, [
        h.kind === "note" ? (A(), U("p", vl, ra(h.text), 1)) : h.kind === "group" ? (A(), U("div", sa({
          key: 1,
          class: u(h.widget, h.model)
        }, { ref_for: !0 }, we(l)(h.widget)), [
          ur(E, {
            fields: n(h.widget),
            model: h.model
          }, null, 8, ["fields", "model"])
        ], 16)) : (A(), ie(si, {
          key: 2,
          widget: h.widget,
          model: h.model
        }, null, 8, ["widget", "model"]))
      ], 64))), 128);
    };
  }
}), Al = { class: "uimodel-form-view" }, ri = /* @__PURE__ */ ue({
  __name: "FormViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (A(), U("div", Al, [
      ur(Ol, {
        fields: s.component.fields,
        model: s.model
      }, null, 8, ["fields", "model"])
    ]));
  }
}), Cl = { class: "uimodel-section-view" }, Dl = /* @__PURE__ */ ue({
  __name: "SectionViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (A(), U("div", Cl, [
      (A(!0), U(ts, null, cr(s.component.sections, (r) => (A(), ie(ri, {
        key: r.name,
        component: r,
        model: s.model
      }, null, 8, ["component", "model"]))), 128))
    ]));
  }
}), yl = { class: "uimodel-tab-view" }, Rl = ["data-tab"], wl = /* @__PURE__ */ ue({
  __name: "TabViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (A(), U("div", yl, [
      (A(!0), U(ts, null, cr(s.component.tabs, (r) => (A(), U("div", {
        key: r.name,
        class: "uimodel-tab-panel",
        "data-tab": r.name
      }, [
        ur(oa, {
          component: r,
          model: s.model
        }, null, 8, ["component", "model"])
      ], 8, Rl))), 128))
    ]));
  }
}), Fl = { class: "uimodel-summary-view" }, Pl = /* @__PURE__ */ ue({
  __name: "SummaryViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (A(), U("div", Fl, [
      (A(!0), U(ts, null, cr(s.component.summaryFields, (r) => (A(), ie(si, {
        key: r.name,
        widget: r,
        model: s.model
      }, null, 8, ["widget", "model"]))), 128))
    ]));
  }
}), bl = {
  key: 1,
  class: "uimodel-table-view-placeholder"
}, ai = /* @__PURE__ */ ue({
  __name: "TableViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = $a(), t = L(() => e.getComposer("TableViewRenderer"));
    return (r, i) => t.value ? (A(), ie(ta(t.value), {
      key: 0,
      component: s.component,
      model: s.model
    }, null, 8, ["component", "model"])) : (A(), U("div", bl));
  }
}), Ml = { class: "uimodel-master-detail" }, Ul = { class: "uimodel-master" }, Vl = { class: "uimodel-detail" }, Bl = /* @__PURE__ */ ue({
  __name: "MasterDetailComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (A(), U("div", Ml, [
      mr("div", Ul, [
        ur(ai, {
          component: s.component.master,
          model: s.model
        }, null, 8, ["component", "model"])
      ]),
      mr("div", Vl, [
        ur(oa, {
          component: s.component.detail,
          model: s.model
        }, null, 8, ["component", "model"])
      ])
    ]));
  }
}), Gl = /* @__PURE__ */ ue({
  __name: "UIModelComposer",
  props: {
    uiModel: {},
    model: {},
    composerRegistry: {},
    styleSheets: {},
    overlays: {}
  },
  setup(s) {
    const e = s, t = L(() => e.styleSheets ?? []), { version: r } = On(t);
    gr(Mr, { sheets: t, version: r }), Yn(() => e.model), gr(
      za,
      L(() => (rs(), {
        ...Fn(e.uiModel),
        overlayCases: Rn(e.overlays ?? [])
      }))
    );
    const i = e.composerRegistry ?? gn({
      FormView: ri,
      SectionView: Dl,
      TabView: wl,
      SummaryView: Pl,
      TableView: ai,
      MasterDetail: Bl
    });
    gr(Ya, i);
    function u() {
      return Er(e.uiModel.filterExpression, e.model);
    }
    return (n, l) => u() ? (A(!0), U(ts, { key: 0 }, cr(s.uiModel.components, (g) => (A(), ie(oa, {
      key: g.name,
      component: g,
      model: s.model
    }, null, 8, ["component", "model"]))), 128)) : or("", !0);
  }
});
function fa(s) {
  const e = s;
  return !!e && typeof e.eIsProxy == "function" && e.eIsProxy();
}
function Ia(s, e) {
  const t = e.getResourceSet(), r = s.eProxyURI();
  if (!r) return s;
  const i = r.toString(), u = i.indexOf("#");
  if (u > 0) {
    const l = i.substring(0, u), g = i.substring(u + 1);
    if (!t) return s;
    const c = e.getURI(), E = [];
    c && !l.includes("://") && E.push(Yr.createURI(l).resolve(c).toString()), E.push(l);
    for (const h of E) {
      const o = t.getResource(Yr.createURI(h), !1), p = o?.getEObject(g);
      if (p) return p;
    }
    return s;
  }
  const n = u === 0 ? i.substring(1) : i;
  return e.getEObject(n) ?? s;
}
function ma(s, e) {
  for (const t of s.eClass().getEAllReferences()) {
    const r = s.eGet(t);
    if (r) {
      if (t.isMany()) {
        const i = r;
        for (let u = 0; u < i.length; u++) {
          const n = i[u];
          if (fa(n)) {
            const l = Ia(n, e);
            l !== n && (i[u] = l);
          }
        }
      } else if (fa(r)) {
        const i = Ia(r, e);
        i !== r && s.eSet(t, i);
      }
    }
  }
}
function Wl(s) {
  for (const e of s.getContents()) {
    ma(e, s);
    for (const t of e.eAllContents())
      ma(t, s);
  }
}
function ii(s) {
  return typeof s?.eClass == "function";
}
function ui(s, e) {
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
function ni(s, e) {
  return ii(s) ? s : ui(e(), s);
}
const Yl = /color|colour/i, $l = /size|width|height|radius|blur|padding|transparence|transparency|opacity|zoom|count|index/i, xl = /^(is|has|show|enable|fullscreen|visible)/i;
function Fr(s) {
  const e = s.getName?.() ?? "", t = s.getEType?.()?.getName?.() ?? "";
  return t === "EBoolean" || xl.test(e) ? "flag" : Yl.test(e) ? "colour" : t === "EInt" || t === "EDouble" || $l.test(e) ? "number" : "text";
}
function Ea(s) {
  const t = (s.getName?.() ?? "").replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function li(s, e = s.getName?.() ?? "Settings") {
  const t = aa.eINSTANCE, r = t.createFormView();
  r.name = e;
  for (const u of s.getEStructuralFeatures()) {
    const n = kl(t, u);
    n.feature = u, n.label = Ea(u), r.fields.push(n);
  }
  const i = t.createUIModel();
  return i.name = e, i.targetClasses.push(s), i.components.push(r), i;
}
function kl(s, e) {
  switch (Fr(e)) {
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
const Xl = /* @__PURE__ */ ue({
  __name: "VariableWrapperWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = L(() => {
      const { eObject: p, feature: N } = e;
      if (!p || !N) return;
      const _ = N.getName?.();
      return _ ? p[_] : void 0;
    }), r = L(() => !!t.value?.variable), i = L({
      get: () => t.value?.value ?? "",
      set: (p) => {
        t.value && !r.value && (t.value.value = p);
      }
    }), u = L({
      get: () => {
        const p = Number(t.value?.value);
        return Number.isFinite(p) ? p : 0;
      },
      set: (p) => {
        t.value && !r.value && (t.value.value = String(p));
      }
    }), n = L({
      get: () => t.value?.value === !0 || t.value?.value === "true",
      set: (p) => {
        t.value && !r.value && (t.value.value = p);
      }
    }), l = L(() => e.custom?.rawWidget?.eClass?.()?.getName?.() ?? ""), g = L(() => {
      const p = e.custom?.rawWidget?.values;
      return p ? typeof p.map == "function" ? [...p] : [] : [];
    }), c = L(() => {
      switch (l.value) {
        case "CheckboxWidget":
          return "flag";
        case "NumberWidget":
          return "number";
        case "SelectWidget":
        case "ComboboxWidget":
          return "choice";
        case "InputWidget":
          return e.feature && Fr(e.feature) === "colour" ? "colour" : "text";
        default:
          return e.feature ? Fr(e.feature) : "text";
      }
    }), E = L(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? Ea(e.feature) : "")
    ), h = L(() => e.custom?.resolvedStyle?.readOnly || r.value), o = L(
      () => r.value ? `Kommt aus der Variablen „${t.value?.variable?.name ?? t.value?.variable}“` : void 0
    );
    return (p, N) => t.value ? (A(), U("div", {
      key: 0,
      class: di(["bound-field", { "bound-field--variable": r.value }])
    }, [
      c.value === "flag" ? (A(), ie(we(vi), {
        key: 0,
        modelValue: n.value,
        "onUpdate:modelValue": N[0] || (N[0] = (_) => n.value = _),
        label: E.value,
        disabled: h.value
      }, null, 8, ["modelValue", "label", "disabled"])) : c.value === "choice" ? (A(), ie(we(Oi), {
        key: 1,
        modelValue: i.value,
        "onUpdate:modelValue": N[1] || (N[1] = (_) => i.value = _),
        label: E.value,
        options: g.value,
        disabled: h.value,
        hint: o.value,
        clearable: ""
      }, null, 8, ["modelValue", "label", "options", "disabled", "hint"])) : c.value === "colour" ? (A(), ie(we(Ai), {
        key: 2,
        modelValue: i.value,
        "onUpdate:modelValue": N[2] || (N[2] = (_) => i.value = _),
        label: E.value,
        disabled: h.value,
        hint: o.value
      }, null, 8, ["modelValue", "label", "disabled", "hint"])) : c.value === "number" ? (A(), ie(we(ga), {
        key: 3,
        modelValue: u.value,
        "onUpdate:modelValue": N[3] || (N[3] = (_) => u.value = _),
        label: E.value,
        type: "number",
        disabled: h.value,
        hint: o.value
      }, null, 8, ["modelValue", "label", "disabled", "hint"])) : (A(), ie(we(ga), {
        key: 4,
        modelValue: i.value,
        "onUpdate:modelValue": N[4] || (N[4] = (_) => i.value = _),
        label: E.value,
        disabled: h.value,
        placeholder: s.custom?.resolvedStyle?.placeholder,
        hint: o.value
      }, null, 8, ["modelValue", "label", "disabled", "placeholder", "hint"]))
    ], 2)) : or("", !0);
  }
}), oi = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, ci = /* @__PURE__ */ oi(Xl, [["__scopeId", "data-v-3a8850bb"]]), Hl = "org.eclipse.daanse.board.app.ui.vue.composables";
let Na = !1;
function jl() {
  if (Na) return !0;
  const s = Nr.INSTANCE.getEPackage(Hl)?.getEClassifier(
    "VariableWrapper"
  );
  return s ? (lr.registerForReference(ci, { targetClass: s }), Na = !0, !0) : !1;
}
const La = /* @__PURE__ */ new Map();
let _a = !1;
function ql() {
  if (_a) return;
  _i();
  const s = v.eINSTANCE;
  s.setEFactoryInstance(aa.eINSTANCE), Nr.INSTANCE.set(s.getNsURI(), s), _a = !0;
}
function Ei(s, e, t = "/ui.xmi") {
  const r = La.get(t);
  if (r) return r;
  try {
    ql();
    const i = e.getNsURI();
    i && !Nr.INSTANCE.has(i) && Nr.INSTANCE.set(i, e);
    const u = new Ni();
    u.getResourceFactoryRegistry().getExtensionToFactoryMap().set("xmi", new Li());
    const n = u.createResource(Yr.createURI(t));
    if (n.loadFromString(s), n.getContents().size() === 0) return;
    Wl(n);
    const l = n.getContents().get(0);
    return La.set(t, l), l;
  } catch (i) {
    console.warn("[ui.vue.uimodel] UI-Modell konnte nicht gelesen werden:", i);
    return;
  }
}
const Kl = { class: "settings-form" }, zl = {
  key: 1,
  class: "settings-form__empty"
}, Ql = /* @__PURE__ */ ue({
  __name: "SettingsForm",
  props: /* @__PURE__ */ Ti({
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
    v.eINSTANCE, gr(ti, lr), jl();
    const e = Si(s, "modelValue"), t = s;
    function r() {
      const c = ni(e.value, t.create);
      c !== e.value && (e.value = c);
    }
    fi(r), Pr(e, r);
    const i = L(() => e.value), u = ha(), n = ha(), l = L(() => {
      if (t.uiModel) return Ur(t.uiModel);
      if (t.uiModelXmi && t.domainPackage) {
        const h = Ei(t.uiModelXmi, t.domainPackage, t.uiModelUri);
        if (h) return Ur(h);
      }
      const E = i.value?.eClass?.();
      if (E)
        return n.value !== E && (n.value = E, u.value = Ur(li(E))), u.value;
    }), g = L(() => (i.value?.eClass?.().getEStructuralFeatures().length ?? 0) > 0);
    return (c, E) => (A(), U("div", Kl, [
      l.value && i.value && g.value ? (A(), ie(we(Gl), {
        key: 0,
        "ui-model": l.value,
        model: i.value
      }, null, 8, ["ui-model", "model"])) : (A(), U("p", zl, ra(s.emptyText ?? "Für dieses Widget sind keine Einstellungen modelliert."), 1))
    ]));
  }
}), Jl = /* @__PURE__ */ oi(Ql, [["__scopeId", "data-v-744c04d1"]]), Zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SettingsForm: Jl,
  VariableWrapperWidget: ci,
  adopt: ui,
  asModel: ni,
  formFor: li,
  isModelled: ii,
  kindOf: Fr,
  labelOf: Ea,
  loadUIModel: Ei
}, Symbol.toStringTag, { value: "Module" })), va = "org.eclipse.daanse.board.app.ui.vue.uimodel", eo = "0.0.1-next.1";
async function co(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${va}: tsm runtime is not initialized`);
  e.register(va, Zl, eo, "ui.vue.uimodel"), await void 0;
}
async function Eo(s) {
  await void 0;
}
export {
  Jl as SettingsForm,
  ci as VariableWrapperWidget,
  co as activate,
  ui as adopt,
  ni as asModel,
  Eo as deactivate,
  li as formFor,
  ii as isModelled,
  Fr as kindOf,
  Ea as labelOf,
  Ei as loadUIModel
};
