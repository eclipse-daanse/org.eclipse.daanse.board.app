(function(){var i="ui.vue.uimodel",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".bound-field--variable[data-v-6de4ea58]{border-left:2px solid var(--color-brand);padding-left:6px;margin-left:-8px}.settings-form[data-v-c1d43fb9]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.settings-form__empty[data-v-c1d43fb9]{margin:0;padding:12px 0;font-size:var(--text-sm);color:var(--color-dim)}\n";})();
import { inject as es, watchEffect as ai, onScopeDispose as Kr, ref as zr, computed as N, watch as ur, toValue as we, defineComponent as ie, createBlock as oe, createCommentVNode as cr, openBlock as O, resolveDynamicComponent as Qr, mergeProps as Jr, createElementBlock as U, createElementVNode as Nr, createTextVNode as ii, toDisplayString as Zr, unref as Xe, resolveComponent as ui, Fragment as ts, renderList as Er, createVNode as lr, provide as pr, normalizeClass as li, mergeModels as ni, useModel as oi, onMounted as na, shallowRef as oa, markRaw as ca } from "vue";
import { BasicEPackage as ci, BasicEClass as v, BasicEAttribute as d, BasicEReference as S, getEcorePackage as Xt, BasicEObject as Qe, BasicEFactory as Ei, EContentAdapter as Sa } from "@emfts/core";
import { DCheckbox as hi, DColorInput as gi, DInput as Ea } from "org.eclipse.daanse.board.app.ui.vue.controls";
var pi = Object.defineProperty, di = (s, e, t) => e in s ? pi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, er = (s, e, t) => di(s, typeof e != "symbol" ? e + "" : e, t);
const Ht = class a extends ci {
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
    const e = new v();
    e.setName("UIModel"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), a.Literals.U_I_MODEL = e;
    const t = new d();
    t.setName("name"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), a.Literals.U_I_MODEL__NAME = t;
    const r = new S();
    r.setContainment(!1), r.setName("targetClasses"), r.setLowerBound(0), r.setUpperBound(-1), e.getEStructuralFeatures().push(r), a.Literals.U_I_MODEL__TARGET_CLASSES = r;
    const i = new d();
    i.setName("priority"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), a.Literals.U_I_MODEL__PRIORITY = i;
    const u = new S();
    u.setContainment(!0), u.setName("filterExpression"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), a.Literals.U_I_MODEL__FILTER_EXPRESSION = u;
    const l = new S();
    l.setContainment(!0), l.setName("styles"), l.setLowerBound(0), l.setUpperBound(-1), e.getEStructuralFeatures().push(l), a.Literals.U_I_MODEL__STYLES = l;
    const n = new S();
    n.setContainment(!0), n.setName("templates"), n.setLowerBound(0), n.setUpperBound(-1), e.getEStructuralFeatures().push(n), a.Literals.U_I_MODEL__TEMPLATES = n;
    const h = new S();
    h.setContainment(!0), h.setName("components"), h.setLowerBound(1), h.setUpperBound(-1), e.getEStructuralFeatures().push(h), a.Literals.U_I_MODEL__COMPONENTS = h;
    const E = new v();
    E.setName("Component"), E.setAbstract(!0), E.setInterface(!1), this.getEClassifiers().push(E), E.setEPackage(this), a.Literals.COMPONENT = E;
    const g = new d();
    g.setName("name"), g.setLowerBound(1), g.setUpperBound(1), E.getEStructuralFeatures().push(g), a.Literals.COMPONENT__NAME = g;
    const c = new d();
    c.setName("group"), c.setLowerBound(0), c.setUpperBound(1), E.getEStructuralFeatures().push(c), a.Literals.COMPONENT__GROUP = c;
    const o = new S();
    o.setContainment(!1), o.setName("targetClasses"), o.setLowerBound(0), o.setUpperBound(-1), E.getEStructuralFeatures().push(o), a.Literals.COMPONENT__TARGET_CLASSES = o;
    const p = new S();
    p.setContainment(!1), p.setName("styles"), p.setLowerBound(0), p.setUpperBound(-1), E.getEStructuralFeatures().push(p), a.Literals.COMPONENT__STYLES = p;
    const P = new S();
    P.setContainment(!1), P.setName("children"), P.setLowerBound(0), P.setUpperBound(-1), E.getEStructuralFeatures().push(P), a.Literals.COMPONENT__CHILDREN = P;
    const b = new v();
    b.setName("FormView"), b.setAbstract(!1), b.setInterface(!1), this.getEClassifiers().push(b), b.setEPackage(this), a.Literals.FORM_VIEW = b;
    const X = new S();
    X.setContainment(!0), X.setName("fields"), X.setLowerBound(0), X.setUpperBound(-1), b.getEStructuralFeatures().push(X), a.Literals.FORM_VIEW__FIELDS = X;
    const M = new S();
    M.setContainment(!0), M.setName("validations"), M.setLowerBound(0), M.setUpperBound(-1), b.getEStructuralFeatures().push(M), a.Literals.FORM_VIEW__VALIDATIONS = M;
    const ge = new S();
    ge.setContainment(!0), ge.setName("validationMappers"), ge.setLowerBound(0), ge.setUpperBound(-1), b.getEStructuralFeatures().push(ge), a.Literals.FORM_VIEW__VALIDATION_MAPPERS = ge;
    const Fe = new d();
    Fe.setName("mapperOrder"), Fe.setLowerBound(0), Fe.setUpperBound(1), b.getEStructuralFeatures().push(Fe), a.Literals.FORM_VIEW__MAPPER_ORDER = Fe;
    const pe = new v();
    pe.setName("TableView"), pe.setAbstract(!1), pe.setInterface(!1), this.getEClassifiers().push(pe), pe.setEPackage(this), a.Literals.TABLE_VIEW = pe;
    const ve = new S();
    ve.setContainment(!0), ve.setName("tableStyle"), ve.setLowerBound(1), ve.setUpperBound(1), pe.getEStructuralFeatures().push(ve), a.Literals.TABLE_VIEW__TABLE_STYLE = ve;
    const de = new v();
    de.setName("SectionView"), de.setAbstract(!1), de.setInterface(!1), this.getEClassifiers().push(de), de.setEPackage(this), a.Literals.SECTION_VIEW = de;
    const Oe = new S();
    Oe.setContainment(!0), Oe.setName("sections"), Oe.setLowerBound(1), Oe.setUpperBound(-1), de.getEStructuralFeatures().push(Oe), a.Literals.SECTION_VIEW__SECTIONS = Oe;
    const Je = new v();
    Je.setName("TabView"), Je.setAbstract(!1), Je.setInterface(!1), this.getEClassifiers().push(Je), Je.setEPackage(this), a.Literals.TAB_VIEW = Je;
    const ct = new S();
    ct.setContainment(!0), ct.setName("tabs"), ct.setLowerBound(1), ct.setUpperBound(-1), Je.getEStructuralFeatures().push(ct), a.Literals.TAB_VIEW__TABS = ct;
    const Ze = new v();
    Ze.setName("SummaryView"), Ze.setAbstract(!1), Ze.setInterface(!1), this.getEClassifiers().push(Ze), Ze.setEPackage(this), a.Literals.SUMMARY_VIEW = Ze;
    const Et = new S();
    Et.setContainment(!0), Et.setName("summaryFields"), Et.setLowerBound(1), Et.setUpperBound(-1), Ze.getEStructuralFeatures().push(Et), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS = Et;
    const Pe = new v();
    Pe.setName("MasterDetail"), Pe.setAbstract(!1), Pe.setInterface(!1), this.getEClassifiers().push(Pe), Pe.setEPackage(this), a.Literals.MASTER_DETAIL = Pe;
    const ht = new S();
    ht.setContainment(!0), ht.setName("master"), ht.setLowerBound(1), ht.setUpperBound(1), Pe.getEStructuralFeatures().push(ht), a.Literals.MASTER_DETAIL__MASTER = ht;
    const gt = new S();
    gt.setContainment(!0), gt.setName("detail"), gt.setLowerBound(1), gt.setUpperBound(1), Pe.getEStructuralFeatures().push(gt), a.Literals.MASTER_DETAIL__DETAIL = gt;
    const H = new v();
    H.setName("WidgetComponent"), H.setAbstract(!0), H.setInterface(!1), this.getEClassifiers().push(H), H.setEPackage(this), a.Literals.WIDGET_COMPONENT = H;
    const pt = new S();
    pt.setContainment(!1), pt.setName("feature"), pt.setLowerBound(0), pt.setUpperBound(1), H.getEStructuralFeatures().push(pt), a.Literals.WIDGET_COMPONENT__FEATURE = pt;
    const as = new d();
    as.setName("label"), as.setLowerBound(0), as.setUpperBound(1), H.getEStructuralFeatures().push(as), a.Literals.WIDGET_COMPONENT__LABEL = as;
    const is = new d();
    is.setName("placeholder"), is.setLowerBound(0), is.setUpperBound(1), H.getEStructuralFeatures().push(is), a.Literals.WIDGET_COMPONENT__PLACEHOLDER = is;
    const us = new d();
    us.setName("readOnly"), us.setLowerBound(0), us.setUpperBound(1), H.getEStructuralFeatures().push(us), a.Literals.WIDGET_COMPONENT__READ_ONLY = us;
    const ls = new d();
    ls.setName("required"), ls.setLowerBound(0), ls.setUpperBound(1), H.getEStructuralFeatures().push(ls), a.Literals.WIDGET_COMPONENT__REQUIRED = ls;
    const dt = new S();
    dt.setContainment(!0), dt.setName("visibilityCondition"), dt.setLowerBound(0), dt.setUpperBound(1), H.getEStructuralFeatures().push(dt), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION = dt;
    const Tt = new S();
    Tt.setContainment(!0), Tt.setName("validations"), Tt.setLowerBound(0), Tt.setUpperBound(-1), H.getEStructuralFeatures().push(Tt), a.Literals.WIDGET_COMPONENT__VALIDATIONS = Tt;
    const St = new S();
    St.setContainment(!0), St.setName("validationMappers"), St.setLowerBound(0), St.setUpperBound(-1), H.getEStructuralFeatures().push(St), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS = St;
    const ft = new S();
    ft.setContainment(!0), ft.setName("bindings"), ft.setLowerBound(0), ft.setUpperBound(-1), H.getEStructuralFeatures().push(ft), a.Literals.WIDGET_COMPONENT__BINDINGS = ft;
    const be = new v();
    be.setName("PropertyBinding"), be.setAbstract(!1), be.setInterface(!1), this.getEClassifiers().push(be), be.setEPackage(this), a.Literals.PROPERTY_BINDING = be;
    const ns = new d();
    ns.setName("property"), ns.setLowerBound(1), ns.setUpperBound(1), be.getEStructuralFeatures().push(ns), a.Literals.PROPERTY_BINDING__PROPERTY = ns;
    const It = new S();
    It.setContainment(!0), It.setName("expression"), It.setLowerBound(1), It.setUpperBound(1), be.getEStructuralFeatures().push(It), a.Literals.PROPERTY_BINDING__EXPRESSION = It;
    const Ae = new v();
    Ae.setName("InputWidget"), Ae.setAbstract(!1), Ae.setInterface(!1), this.getEClassifiers().push(Ae), Ae.setEPackage(this), a.Literals.INPUT_WIDGET = Ae;
    const os = new d();
    os.setName("maxLength"), os.setLowerBound(0), os.setUpperBound(1), Ae.getEStructuralFeatures().push(os), a.Literals.INPUT_WIDGET__MAX_LENGTH = os;
    const cs = new d();
    cs.setName("value"), cs.setLowerBound(0), cs.setUpperBound(1), Ae.getEStructuralFeatures().push(cs), a.Literals.INPUT_WIDGET__VALUE = cs;
    const Es = new d();
    Es.setName("password"), Es.setLowerBound(0), Es.setUpperBound(1), Ae.getEStructuralFeatures().push(Es), a.Literals.INPUT_WIDGET__PASSWORD = Es;
    const Ce = new v();
    Ce.setName("TextAreaWidget"), Ce.setAbstract(!1), Ce.setInterface(!1), this.getEClassifiers().push(Ce), Ce.setEPackage(this), a.Literals.TEXT_AREA_WIDGET = Ce;
    const hs = new d();
    hs.setName("rows"), hs.setLowerBound(0), hs.setUpperBound(1), Ce.getEStructuralFeatures().push(hs), a.Literals.TEXT_AREA_WIDGET__ROWS = hs;
    const gs = new d();
    gs.setName("maxLength"), gs.setLowerBound(0), gs.setUpperBound(1), Ce.getEStructuralFeatures().push(gs), a.Literals.TEXT_AREA_WIDGET__MAX_LENGTH = gs;
    const ps = new d();
    ps.setName("value"), ps.setLowerBound(0), ps.setUpperBound(1), Ce.getEStructuralFeatures().push(ps), a.Literals.TEXT_AREA_WIDGET__VALUE = ps;
    const Te = new v();
    Te.setName("NumberWidget"), Te.setAbstract(!1), Te.setInterface(!1), this.getEClassifiers().push(Te), Te.setEPackage(this), a.Literals.NUMBER_WIDGET = Te;
    const ds = new d();
    ds.setName("min"), ds.setLowerBound(0), ds.setUpperBound(1), Te.getEStructuralFeatures().push(ds), a.Literals.NUMBER_WIDGET__MIN = ds;
    const Ts = new d();
    Ts.setName("max"), Ts.setLowerBound(0), Ts.setUpperBound(1), Te.getEStructuralFeatures().push(Ts), a.Literals.NUMBER_WIDGET__MAX = Ts;
    const Ss = new d();
    Ss.setName("step"), Ss.setLowerBound(0), Ss.setUpperBound(1), Te.getEStructuralFeatures().push(Ss), a.Literals.NUMBER_WIDGET__STEP = Ss;
    const fs = new d();
    fs.setName("value"), fs.setLowerBound(0), fs.setUpperBound(1), Te.getEStructuralFeatures().push(fs), a.Literals.NUMBER_WIDGET__VALUE = fs;
    const Me = new v();
    Me.setName("CheckboxWidget"), Me.setAbstract(!1), Me.setInterface(!1), this.getEClassifiers().push(Me), Me.setEPackage(this), a.Literals.CHECKBOX_WIDGET = Me;
    const Is = new d();
    Is.setName("asToggle"), Is.setLowerBound(0), Is.setUpperBound(1), Me.getEStructuralFeatures().push(Is), a.Literals.CHECKBOX_WIDGET__AS_TOGGLE = Is;
    const ms = new d();
    ms.setName("value"), ms.setLowerBound(0), ms.setUpperBound(1), Me.getEStructuralFeatures().push(ms), a.Literals.CHECKBOX_WIDGET__VALUE = ms;
    const Se = new v();
    Se.setName("DateWidget"), Se.setAbstract(!1), Se.setInterface(!1), this.getEClassifiers().push(Se), Se.setEPackage(this), a.Literals.DATE_WIDGET = Se;
    const Ns = new d();
    Ns.setName("withTime"), Ns.setLowerBound(0), Ns.setUpperBound(1), Se.getEStructuralFeatures().push(Ns), a.Literals.DATE_WIDGET__WITH_TIME = Ns;
    const Ls = new d();
    Ls.setName("format"), Ls.setLowerBound(0), Ls.setUpperBound(1), Se.getEStructuralFeatures().push(Ls), a.Literals.DATE_WIDGET__FORMAT = Ls;
    const mt = new S();
    mt.setContainment(!1), mt.setName("constrains"), mt.setLowerBound(0), mt.setUpperBound(1), Se.getEStructuralFeatures().push(mt), a.Literals.DATE_WIDGET__CONSTRAINS = mt;
    const _s = new d();
    _s.setName("value"), _s.setLowerBound(0), _s.setUpperBound(1), Se.getEStructuralFeatures().push(_s), a.Literals.DATE_WIDGET__VALUE = _s;
    const De = new v();
    De.setName("ComboboxWidget"), De.setAbstract(!1), De.setInterface(!1), this.getEClassifiers().push(De), De.setEPackage(this), a.Literals.COMBOBOX_WIDGET = De;
    const Nt = new S();
    Nt.setContainment(!0), Nt.setName("optionLabel"), Nt.setLowerBound(0), Nt.setUpperBound(1), De.getEStructuralFeatures().push(Nt), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL = Nt;
    const vs = new d();
    vs.setName("minSearchLength"), vs.setLowerBound(0), vs.setUpperBound(1), De.getEStructuralFeatures().push(vs), a.Literals.COMBOBOX_WIDGET__MIN_SEARCH_LENGTH = vs;
    const Os = new d();
    Os.setName("multiSelect"), Os.setLowerBound(0), Os.setUpperBound(1), De.getEStructuralFeatures().push(Os), a.Literals.COMBOBOX_WIDGET__MULTI_SELECT = Os;
    const fe = new v();
    fe.setName("SelectWidget"), fe.setAbstract(!1), fe.setInterface(!1), this.getEClassifiers().push(fe), fe.setEPackage(this), a.Literals.SELECT_WIDGET = fe;
    const Lt = new S();
    Lt.setContainment(!0), Lt.setName("optionLabel"), Lt.setLowerBound(0), Lt.setUpperBound(1), fe.getEStructuralFeatures().push(Lt), a.Literals.SELECT_WIDGET__OPTION_LABEL = Lt;
    const As = new d();
    As.setName("multiSelect"), As.setLowerBound(0), As.setUpperBound(1), fe.getEStructuralFeatures().push(As), a.Literals.SELECT_WIDGET__MULTI_SELECT = As;
    const Cs = new d();
    Cs.setName("asButtonGroup"), Cs.setLowerBound(0), Cs.setUpperBound(1), fe.getEStructuralFeatures().push(Cs), a.Literals.SELECT_WIDGET__AS_BUTTON_GROUP = Cs;
    const Ds = new d();
    Ds.setName("values"), Ds.setLowerBound(0), Ds.setUpperBound(-1), fe.getEStructuralFeatures().push(Ds), a.Literals.SELECT_WIDGET__VALUES = Ds;
    const ue = new v();
    ue.setName("AllFeatures"), ue.setAbstract(!1), ue.setInterface(!1), this.getEClassifiers().push(ue), ue.setEPackage(this), a.Literals.ALL_FEATURES = ue;
    const _t = new S();
    _t.setContainment(!1), _t.setName("with"), _t.setLowerBound(0), _t.setUpperBound(-1), ue.getEStructuralFeatures().push(_t), a.Literals.ALL_FEATURES__WITH = _t;
    const vt = new S();
    vt.setContainment(!1), vt.setName("eType"), vt.setLowerBound(0), vt.setUpperBound(-1), ue.getEStructuralFeatures().push(vt), a.Literals.ALL_FEATURES__E_TYPE = vt;
    const Ot = new S();
    Ot.setContainment(!0), Ot.setName("filter"), Ot.setLowerBound(0), Ot.setUpperBound(1), ue.getEStructuralFeatures().push(Ot), a.Literals.ALL_FEATURES__FILTER = Ot;
    const At = new S();
    At.setContainment(!1), At.setName("template"), At.setLowerBound(0), At.setUpperBound(1), ue.getEStructuralFeatures().push(At), a.Literals.ALL_FEATURES__TEMPLATE = At;
    const Ct = new S();
    Ct.setContainment(!0), Ct.setName("cases"), Ct.setLowerBound(0), Ct.setUpperBound(-1), ue.getEStructuralFeatures().push(Ct), a.Literals.ALL_FEATURES__CASES = Ct;
    const ys = new d();
    ys.setName("priority"), ys.setLowerBound(0), ys.setUpperBound(1), ue.getEStructuralFeatures().push(ys), a.Literals.ALL_FEATURES__PRIORITY = ys;
    const Ue = new v();
    Ue.setName("TemplateCase"), Ue.setAbstract(!1), Ue.setInterface(!1), this.getEClassifiers().push(Ue), Ue.setEPackage(this), a.Literals.TEMPLATE_CASE = Ue;
    const Dt = new S();
    Dt.setContainment(!0), Dt.setName("when"), Dt.setLowerBound(0), Dt.setUpperBound(1), Ue.getEStructuralFeatures().push(Dt), a.Literals.TEMPLATE_CASE__WHEN = Dt;
    const yt = new S();
    yt.setContainment(!1), yt.setName("widget"), yt.setLowerBound(1), yt.setUpperBound(1), Ue.getEStructuralFeatures().push(yt), a.Literals.TEMPLATE_CASE__WIDGET = yt;
    const Ve = new v();
    Ve.setName("GroupWidget"), Ve.setAbstract(!1), Ve.setInterface(!1), this.getEClassifiers().push(Ve), Ve.setEPackage(this), a.Literals.GROUP_WIDGET = Ve;
    const Rt = new S();
    Rt.setContainment(!0), Rt.setName("fields"), Rt.setLowerBound(0), Rt.setUpperBound(-1), Ve.getEStructuralFeatures().push(Rt), a.Literals.GROUP_WIDGET__FIELDS = Rt;
    const Rs = new d();
    Rs.setName("layout"), Rs.setLowerBound(0), Rs.setUpperBound(1), Ve.getEStructuralFeatures().push(Rs), a.Literals.GROUP_WIDGET__LAYOUT = Rs;
    const ye = new v();
    ye.setName("Conditional"), ye.setAbstract(!1), ye.setInterface(!1), this.getEClassifiers().push(ye), ye.setEPackage(this), a.Literals.CONDITIONAL = ye;
    const wt = new S();
    wt.setContainment(!0), wt.setName("condition"), wt.setLowerBound(1), wt.setUpperBound(1), ye.getEStructuralFeatures().push(wt), a.Literals.CONDITIONAL__CONDITION = wt;
    const Ft = new S();
    Ft.setContainment(!0), Ft.setName("then"), Ft.setLowerBound(0), Ft.setUpperBound(-1), ye.getEStructuralFeatures().push(Ft), a.Literals.CONDITIONAL__THEN = Ft;
    const Pt = new S();
    Pt.setContainment(!0), Pt.setName("else"), Pt.setLowerBound(0), Pt.setUpperBound(-1), ye.getEStructuralFeatures().push(Pt), a.Literals.CONDITIONAL__ELSE = Pt;
    const Re = new v();
    Re.setName("ForEach"), Re.setAbstract(!1), Re.setInterface(!1), this.getEClassifiers().push(Re), Re.setEPackage(this), a.Literals.FOR_EACH = Re;
    const bt = new S();
    bt.setContainment(!0), bt.setName("items"), bt.setLowerBound(1), bt.setUpperBound(1), Re.getEStructuralFeatures().push(bt), a.Literals.FOR_EACH__ITEMS = bt;
    const Mt = new S();
    Mt.setContainment(!0), Mt.setName("body"), Mt.setLowerBound(0), Mt.setUpperBound(-1), Re.getEStructuralFeatures().push(Mt), a.Literals.FOR_EACH__BODY = Mt;
    const ws = new d();
    ws.setName("emptyText"), ws.setLowerBound(0), ws.setUpperBound(1), Re.getEStructuralFeatures().push(ws), a.Literals.FOR_EACH__EMPTY_TEXT = ws;
    const Be = new v();
    Be.setName("ReferenceLinkWidget"), Be.setAbstract(!1), Be.setInterface(!1), this.getEClassifiers().push(Be), Be.setEPackage(this), a.Literals.REFERENCE_LINK_WIDGET = Be;
    const Ut = new S();
    Ut.setContainment(!0), Ut.setName("displayExpression"), Ut.setLowerBound(0), Ut.setUpperBound(1), Be.getEStructuralFeatures().push(Ut), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION = Ut;
    const Fs = new d();
    Fs.setName("targetRoute"), Fs.setLowerBound(0), Fs.setUpperBound(1), Be.getEStructuralFeatures().push(Fs), a.Literals.REFERENCE_LINK_WIDGET__TARGET_ROUTE = Fs;
    const Ie = new v();
    Ie.setName("UIModelOverlay"), Ie.setAbstract(!1), Ie.setInterface(!1), this.getEClassifiers().push(Ie), Ie.setEPackage(this), a.Literals.U_I_MODEL_OVERLAY = Ie;
    const Ps = new d();
    Ps.setName("name"), Ps.setLowerBound(0), Ps.setUpperBound(1), Ie.getEStructuralFeatures().push(Ps), a.Literals.U_I_MODEL_OVERLAY__NAME = Ps;
    const bs = new d();
    bs.setName("priority"), bs.setLowerBound(0), bs.setUpperBound(1), Ie.getEStructuralFeatures().push(bs), a.Literals.U_I_MODEL_OVERLAY__PRIORITY = bs;
    const Vt = new S();
    Vt.setContainment(!0), Vt.setName("templates"), Vt.setLowerBound(0), Vt.setUpperBound(-1), Ie.getEStructuralFeatures().push(Vt), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES = Vt;
    const Bt = new S();
    Bt.setContainment(!0), Bt.setName("cases"), Bt.setLowerBound(0), Bt.setUpperBound(-1), Ie.getEStructuralFeatures().push(Bt), a.Literals.U_I_MODEL_OVERLAY__CASES = Bt;
    const Ge = new v();
    Ge.setName("Style"), Ge.setAbstract(!0), Ge.setInterface(!0), this.getEClassifiers().push(Ge), Ge.setEPackage(this), a.Literals.STYLE = Ge;
    const Ms = new d();
    Ms.setName("name"), Ms.setLowerBound(0), Ms.setUpperBound(1), Ge.getEStructuralFeatures().push(Ms), a.Literals.STYLE__NAME = Ms;
    const Us = new d();
    Us.setName("group"), Us.setLowerBound(0), Us.setUpperBound(1), Ge.getEStructuralFeatures().push(Us), a.Literals.STYLE__GROUP = Us;
    const me = new v();
    me.setName("BaseStyle"), me.setAbstract(!0), me.setInterface(!1), this.getEClassifiers().push(me), me.setEPackage(this), a.Literals.BASE_STYLE = me;
    const Gt = new S();
    Gt.setContainment(!1), Gt.setName("extends"), Gt.setLowerBound(0), Gt.setUpperBound(1), me.getEStructuralFeatures().push(Gt), a.Literals.BASE_STYLE__EXTENDS = Gt;
    const Vs = new d();
    Vs.setName("css"), Vs.setLowerBound(0), Vs.setUpperBound(1), me.getEStructuralFeatures().push(Vs), a.Literals.BASE_STYLE__CSS = Vs;
    const Bs = new d();
    Bs.setName("vueComponent"), Bs.setLowerBound(0), Bs.setUpperBound(1), me.getEStructuralFeatures().push(Bs), a.Literals.BASE_STYLE__VUE_COMPONENT = Bs;
    const Wt = new S();
    Wt.setContainment(!0), Wt.setName("visibilityCondition"), Wt.setLowerBound(0), Wt.setUpperBound(1), me.getEStructuralFeatures().push(Wt), a.Literals.BASE_STYLE__VISIBILITY_CONDITION = Wt;
    const We = new v();
    We.setName("LayoutStyle"), We.setAbstract(!1), We.setInterface(!1), this.getEClassifiers().push(We), We.setEPackage(this), a.Literals.LAYOUT_STYLE = We;
    const Gs = new d();
    Gs.setName("layout"), Gs.setLowerBound(0), Gs.setUpperBound(1), We.getEStructuralFeatures().push(Gs), a.Literals.LAYOUT_STYLE__LAYOUT = Gs;
    const Ws = new d();
    Ws.setName("order"), Ws.setLowerBound(0), Ws.setUpperBound(1), We.getEStructuralFeatures().push(Ws), a.Literals.LAYOUT_STYLE__ORDER = Ws;
    const Ee = new v();
    Ee.setName("WidgetStyle"), Ee.setAbstract(!1), Ee.setInterface(!1), this.getEClassifiers().push(Ee), Ee.setEPackage(this), a.Literals.WIDGET_STYLE = Ee;
    const Yt = new S();
    Yt.setContainment(!1), Yt.setName("feature"), Yt.setLowerBound(0), Yt.setUpperBound(1), Ee.getEStructuralFeatures().push(Yt), a.Literals.WIDGET_STYLE__FEATURE = Yt;
    const Ys = new d();
    Ys.setName("widgetType"), Ys.setLowerBound(0), Ys.setUpperBound(1), Ee.getEStructuralFeatures().push(Ys), a.Literals.WIDGET_STYLE__WIDGET_TYPE = Ys;
    const $s = new d();
    $s.setName("label"), $s.setLowerBound(0), $s.setUpperBound(1), Ee.getEStructuralFeatures().push($s), a.Literals.WIDGET_STYLE__LABEL = $s;
    const ks = new d();
    ks.setName("readOnly"), ks.setLowerBound(0), ks.setUpperBound(1), Ee.getEStructuralFeatures().push(ks), a.Literals.WIDGET_STYLE__READ_ONLY = ks;
    const xs = new d();
    xs.setName("order"), xs.setLowerBound(0), xs.setUpperBound(1), Ee.getEStructuralFeatures().push(xs), a.Literals.WIDGET_STYLE__ORDER = xs;
    const et = new v();
    et.setName("TableStyle"), et.setAbstract(!1), et.setInterface(!1), this.getEClassifiers().push(et), et.setEPackage(this), a.Literals.TABLE_STYLE = et;
    const $t = new S();
    $t.setContainment(!0), $t.setName("columns"), $t.setLowerBound(1), $t.setUpperBound(-1), et.getEStructuralFeatures().push($t), a.Literals.TABLE_STYLE__COLUMNS = $t;
    const Ye = new v();
    Ye.setName("Expression"), Ye.setAbstract(!1), Ye.setInterface(!1), this.getEClassifiers().push(Ye), Ye.setEPackage(this), a.Literals.EXPRESSION = Ye;
    const Xs = new d();
    Xs.setName("language"), Xs.setLowerBound(1), Xs.setUpperBound(1), Ye.getEStructuralFeatures().push(Xs), a.Literals.EXPRESSION__LANGUAGE = Xs;
    const Hs = new d();
    Hs.setName("body"), Hs.setLowerBound(1), Hs.setUpperBound(1), Ye.getEStructuralFeatures().push(Hs), a.Literals.EXPRESSION__BODY = Hs;
    const $e = new v();
    $e.setName("ValidationExpression"), $e.setAbstract(!1), $e.setInterface(!1), this.getEClassifiers().push($e), $e.setEPackage(this), a.Literals.VALIDATION_EXPRESSION = $e;
    const js = new d();
    js.setName("defaultMessage"), js.setLowerBound(0), js.setUpperBound(1), $e.getEStructuralFeatures().push(js), a.Literals.VALIDATION_EXPRESSION__DEFAULT_MESSAGE = js;
    const qs = new d();
    qs.setName("severity"), qs.setLowerBound(0), qs.setUpperBound(1), $e.getEStructuralFeatures().push(qs), a.Literals.VALIDATION_EXPRESSION__SEVERITY = qs;
    const K = new v();
    K.setName("ValidationMessageMapper"), K.setAbstract(!1), K.setInterface(!1), this.getEClassifiers().push(K), K.setEPackage(this), a.Literals.VALIDATION_MESSAGE_MAPPER = K;
    const Ks = new d();
    Ks.setName("order"), Ks.setLowerBound(0), Ks.setUpperBound(1), K.getEStructuralFeatures().push(Ks), a.Literals.VALIDATION_MESSAGE_MAPPER__ORDER = Ks;
    const zs = new d();
    zs.setName("matchCode"), zs.setLowerBound(0), zs.setUpperBound(1), K.getEStructuralFeatures().push(zs), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_CODE = zs;
    const Qs = new d();
    Qs.setName("matchSeverity"), Qs.setLowerBound(0), Qs.setUpperBound(1), K.getEStructuralFeatures().push(Qs), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_SEVERITY = Qs;
    const kt = new S();
    kt.setContainment(!0), kt.setName("matchExpression"), kt.setLowerBound(0), kt.setUpperBound(1), K.getEStructuralFeatures().push(kt), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION = kt;
    const Js = new d();
    Js.setName("mappedText"), Js.setLowerBound(0), Js.setUpperBound(1), K.getEStructuralFeatures().push(Js), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT = Js;
    const xt = new S();
    xt.setContainment(!0), xt.setName("mappedTextExpression"), xt.setLowerBound(0), xt.setUpperBound(1), K.getEStructuralFeatures().push(xt), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION = xt;
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
let _ = Ht;
var Ti = Object.defineProperty, Si = (s, e, t) => e in s ? Ti(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, j = (s, e, t) => Si(s, typeof e != "symbol" ? e + "" : e, t);
const ke = class f extends Qe {
  constructor() {
    super(...arguments), j(this, "_name"), j(this, "_targetClasses", []), j(this, "_priority", 0), j(this, "_filterExpression"), j(this, "_styles", []), j(this, "_templates", []), j(this, "_components", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.U_I_MODEL;
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
let fi = ke;
const br = {
  FIELD_THEN_FORM: "FIELD_THEN_FORM"
};
var Ii = Object.defineProperty, mi = (s, e, t) => e in s ? Ii(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Le = (s, e, t) => mi(s, typeof e != "symbol" ? e + "" : e, t);
const jt = class A extends Qe {
  constructor() {
    super(...arguments), Le(this, "_name", ""), Le(this, "_group"), Le(this, "_targetClasses", []), Le(this, "_styles", []), Le(this, "_children", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.COMPONENT;
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
      getFeature: () => this.eClass().getEStructuralFeature(A.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.GROUP,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.TARGET_CLASSES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.TARGET_CLASSES,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.STYLES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.STYLES,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.CHILDREN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.CHILDREN,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case A.NAME:
        return this.name;
      case A.GROUP:
        return this.group;
      case A.TARGET_CLASSES:
        return this.targetClasses;
      case A.STYLES:
        return this.styles;
      case A.CHILDREN:
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
      case A.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case A.GROUP:
        this.group = t, super.eSet(e, t);
        break;
      case A.TARGET_CLASSES:
        this.targetClasses = t, super.eSet(e, t);
        break;
      case A.STYLES:
        this.styles = t, super.eSet(e, t);
        break;
      case A.CHILDREN:
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
      case A.NAME:
        return this._name !== "";
      case A.GROUP:
        return this._group !== void 0;
      case A.TARGET_CLASSES:
        return this._targetClasses !== void 0 && this._targetClasses.length > 0;
      case A.STYLES:
        return this._styles !== void 0 && this._styles.length > 0;
      case A.CHILDREN:
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
      case A.NAME:
        this._name = "";
        return;
      case A.GROUP:
        this._group = void 0;
        return;
      case A.TARGET_CLASSES:
        this._targetClasses = [];
        return;
      case A.STYLES:
        this._styles = [];
        return;
      case A.CHILDREN:
        this._children = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Le(jt, "NAME", 0), Le(jt, "GROUP", 1), Le(jt, "TARGET_CLASSES", 2), Le(jt, "STYLES", 3), Le(jt, "CHILDREN", 4);
let ot = jt;
var Ni = Object.defineProperty, Li = (s, e, t) => e in s ? Ni(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, He = (s, e, t) => Li(s, typeof e != "symbol" ? e + "" : e, t);
const tr = class D extends ot {
  constructor() {
    super(...arguments), He(this, "_fields", []), He(this, "_validations", []), He(this, "_validationMappers", []), He(this, "_mapperOrder", br.FIELD_THEN_FORM);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.FORM_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature(D.FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.FIELDS,
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
      getFeature: () => this.eClass().getEStructuralFeature(D.VALIDATIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.VALIDATIONS,
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
      getFeature: () => this.eClass().getEStructuralFeature(D.VALIDATION_MAPPERS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.VALIDATION_MAPPERS,
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
      getFeature: () => this.eClass().getEStructuralFeature(D.MAPPER_ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.MAPPER_ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case D.FIELDS:
        return this.fields;
      case D.VALIDATIONS:
        return this.validations;
      case D.VALIDATION_MAPPERS:
        return this.validationMappers;
      case D.MAPPER_ORDER:
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
      case D.FIELDS:
        this.fields = t, super.eSet(e, t);
        break;
      case D.VALIDATIONS:
        this.validations = t, super.eSet(e, t);
        break;
      case D.VALIDATION_MAPPERS:
        this.validationMappers = t, super.eSet(e, t);
        break;
      case D.MAPPER_ORDER:
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
      case D.FIELDS:
        return this._fields !== void 0 && this._fields.length > 0;
      case D.VALIDATIONS:
        return this._validations !== void 0 && this._validations.length > 0;
      case D.VALIDATION_MAPPERS:
        return this._validationMappers !== void 0 && this._validationMappers.length > 0;
      case D.MAPPER_ORDER:
        return this._mapperOrder !== br.FIELD_THEN_FORM;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case D.FIELDS:
        this._fields = [];
        return;
      case D.VALIDATIONS:
        this._validations = [];
        return;
      case D.VALIDATION_MAPPERS:
        this._validationMappers = [];
        return;
      case D.MAPPER_ORDER:
        this._mapperOrder = br.FIELD_THEN_FORM;
        return;
      default:
        super.eUnset(e);
    }
  }
};
He(tr, "FIELDS", 5), He(tr, "VALIDATIONS", 6), He(tr, "VALIDATION_MAPPERS", 7), He(tr, "MAPPER_ORDER", 8);
let _i = tr;
var vi = Object.defineProperty, Oi = (s, e, t) => e in s ? vi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, fa = (s, e, t) => Oi(s, typeof e != "symbol" ? e + "" : e, t);
const Ia = class tt extends ot {
  constructor() {
    super(...arguments), fa(this, "_tableStyle");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.TABLE_VIEW;
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
fa(Ia, "TABLE_STYLE", 5);
let Ai = Ia;
var Ci = Object.defineProperty, Di = (s, e, t) => e in s ? Ci(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ma = (s, e, t) => Di(s, typeof e != "symbol" ? e + "" : e, t);
const Na = class st extends ot {
  constructor() {
    super(...arguments), ma(this, "_sections", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.SECTION_VIEW;
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
ma(Na, "SECTIONS", 5);
let yi = Na;
var Ri = Object.defineProperty, wi = (s, e, t) => e in s ? Ri(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, La = (s, e, t) => wi(s, typeof e != "symbol" ? e + "" : e, t);
const _a = class rt extends ot {
  constructor() {
    super(...arguments), La(this, "_tabs", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.TAB_VIEW;
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
La(_a, "TABS", 5);
let Fi = _a;
var Pi = Object.defineProperty, bi = (s, e, t) => e in s ? Pi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, va = (s, e, t) => bi(s, typeof e != "symbol" ? e + "" : e, t);
const Oa = class at extends ot {
  constructor() {
    super(...arguments), va(this, "_summaryFields", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.SUMMARY_VIEW;
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
va(Oa, "SUMMARY_FIELDS", 5);
let Mi = Oa;
var Ui = Object.defineProperty, Vi = (s, e, t) => e in s ? Ui(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Lr = (s, e, t) => Vi(s, typeof e != "symbol" ? e + "" : e, t);
const Br = class z extends ot {
  constructor() {
    super(...arguments), Lr(this, "_master"), Lr(this, "_detail");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.MASTER_DETAIL;
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
Lr(Br, "MASTER", 5), Lr(Br, "DETAIL", 6);
let Bi = Br;
var Gi = Object.defineProperty, Wi = (s, e, t) => e in s ? Gi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, _r = (s, e, t) => Wi(s, typeof e != "symbol" ? e + "" : e, t);
const Gr = class Q extends Qe {
  constructor() {
    super(...arguments), _r(this, "_property", ""), _r(this, "_expression");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.PROPERTY_BINDING;
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
_r(Gr, "PROPERTY", 0), _r(Gr, "EXPRESSION", 1);
let Yi = Gr;
var $i = Object.defineProperty, ki = (s, e, t) => e in s ? $i(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, $ = (s, e, t) => ki(s, typeof e != "symbol" ? e + "" : e, t);
const Ne = class T extends ot {
  constructor() {
    super(...arguments), $(this, "_feature"), $(this, "_label"), $(this, "_placeholder"), $(this, "_readOnly"), $(this, "_required"), $(this, "_visibilityCondition"), $(this, "_validations", []), $(this, "_validationMappers", []), $(this, "_bindings", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.WIDGET_COMPONENT;
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
var xi = Object.defineProperty, Xi = (s, e, t) => e in s ? xi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Kt = (s, e, t) => Xi(s, typeof e != "symbol" ? e + "" : e, t);
const dr = class V extends ce {
  constructor() {
    super(...arguments), Kt(this, "_maxLength"), Kt(this, "_value"), Kt(this, "_password");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.INPUT_WIDGET;
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
Kt(dr, "MAX_LENGTH", 14), Kt(dr, "VALUE", 15), Kt(dr, "PASSWORD", 16);
let Hi = dr;
var ji = Object.defineProperty, qi = (s, e, t) => e in s ? ji(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, zt = (s, e, t) => qi(s, typeof e != "symbol" ? e + "" : e, t);
const Tr = class B extends ce {
  constructor() {
    super(...arguments), zt(this, "_rows", 4), zt(this, "_maxLength"), zt(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.TEXT_AREA_WIDGET;
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
zt(Tr, "ROWS", 14), zt(Tr, "MAX_LENGTH", 15), zt(Tr, "VALUE", 16);
let Ki = Tr;
var zi = Object.defineProperty, Qi = (s, e, t) => e in s ? zi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, je = (s, e, t) => Qi(s, typeof e != "symbol" ? e + "" : e, t);
const sr = class y extends ce {
  constructor() {
    super(...arguments), je(this, "_min"), je(this, "_max"), je(this, "_step", 1), je(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.NUMBER_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(y.MIN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.MIN,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.MAX),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.MAX,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.STEP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.STEP,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case y.MIN:
        return this.min;
      case y.MAX:
        return this.max;
      case y.STEP:
        return this.step;
      case y.VALUE:
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
      case y.MIN:
        this.min = t, super.eSet(e, t);
        break;
      case y.MAX:
        this.max = t, super.eSet(e, t);
        break;
      case y.STEP:
        this.step = t, super.eSet(e, t);
        break;
      case y.VALUE:
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
      case y.MIN:
        return this._min !== void 0;
      case y.MAX:
        return this._max !== void 0;
      case y.STEP:
        return this._step !== 1;
      case y.VALUE:
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
      case y.MIN:
        this._min = void 0;
        return;
      case y.MAX:
        this._max = void 0;
        return;
      case y.STEP:
        this._step = 1;
        return;
      case y.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
je(sr, "MIN", 14), je(sr, "MAX", 15), je(sr, "STEP", 16), je(sr, "VALUE", 17);
let Ji = sr;
var Zi = Object.defineProperty, eu = (s, e, t) => e in s ? Zi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, vr = (s, e, t) => eu(s, typeof e != "symbol" ? e + "" : e, t);
const Wr = class J extends ce {
  constructor() {
    super(...arguments), vr(this, "_asToggle"), vr(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.CHECKBOX_WIDGET;
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
vr(Wr, "AS_TOGGLE", 14), vr(Wr, "VALUE", 15);
let tu = Wr;
var su = Object.defineProperty, ru = (s, e, t) => e in s ? su(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, qe = (s, e, t) => ru(s, typeof e != "symbol" ? e + "" : e, t);
const rr = class R extends ce {
  constructor() {
    super(...arguments), qe(this, "_withTime"), qe(this, "_format", "DD.MM.YYYY"), qe(this, "_constrains"), qe(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.DATE_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(R.WITH_TIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.WITH_TIME,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.FORMAT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.FORMAT,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.CONSTRAINS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.CONSTRAINS,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case R.WITH_TIME:
        return this.withTime;
      case R.FORMAT:
        return this.format;
      case R.CONSTRAINS:
        return this.constrains;
      case R.VALUE:
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
      case R.WITH_TIME:
        this.withTime = t, super.eSet(e, t);
        break;
      case R.FORMAT:
        this.format = t, super.eSet(e, t);
        break;
      case R.CONSTRAINS:
        this.constrains = t, super.eSet(e, t);
        break;
      case R.VALUE:
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
      case R.WITH_TIME:
        return this._withTime !== void 0;
      case R.FORMAT:
        return this._format !== "DD.MM.YYYY";
      case R.CONSTRAINS:
        return this._constrains !== void 0;
      case R.VALUE:
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
      case R.WITH_TIME:
        this._withTime = void 0;
        return;
      case R.FORMAT:
        this._format = "DD.MM.YYYY";
        return;
      case R.CONSTRAINS:
        this._constrains = void 0;
        return;
      case R.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
qe(rr, "WITH_TIME", 14), qe(rr, "FORMAT", 15), qe(rr, "CONSTRAINS", 16), qe(rr, "VALUE", 17);
let au = rr;
var iu = Object.defineProperty, uu = (s, e, t) => e in s ? iu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Qt = (s, e, t) => uu(s, typeof e != "symbol" ? e + "" : e, t);
const Sr = class G extends ce {
  constructor() {
    super(...arguments), Qt(this, "_optionLabel"), Qt(this, "_minSearchLength", 2), Qt(this, "_multiSelect");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.COMBOBOX_WIDGET;
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
Qt(Sr, "OPTION_LABEL", 14), Qt(Sr, "MIN_SEARCH_LENGTH", 15), Qt(Sr, "MULTI_SELECT", 16);
let lu = Sr;
var nu = Object.defineProperty, ou = (s, e, t) => e in s ? nu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ke = (s, e, t) => ou(s, typeof e != "symbol" ? e + "" : e, t);
const ar = class w extends ce {
  constructor() {
    super(...arguments), Ke(this, "_optionLabel"), Ke(this, "_multiSelect"), Ke(this, "_asButtonGroup"), Ke(this, "_values", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.SELECT_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(w.OPTION_LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.OPTION_LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(w.MULTI_SELECT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.MULTI_SELECT,
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
      getFeature: () => this.eClass().getEStructuralFeature(w.AS_BUTTON_GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.AS_BUTTON_GROUP,
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
      getFeature: () => this.eClass().getEStructuralFeature(w.VALUES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => w.VALUES,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case w.OPTION_LABEL:
        return this.optionLabel;
      case w.MULTI_SELECT:
        return this.multiSelect;
      case w.AS_BUTTON_GROUP:
        return this.asButtonGroup;
      case w.VALUES:
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
      case w.OPTION_LABEL:
        this.optionLabel = t, super.eSet(e, t);
        break;
      case w.MULTI_SELECT:
        this.multiSelect = t, super.eSet(e, t);
        break;
      case w.AS_BUTTON_GROUP:
        this.asButtonGroup = t, super.eSet(e, t);
        break;
      case w.VALUES:
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
      case w.OPTION_LABEL:
        return this._optionLabel !== void 0;
      case w.MULTI_SELECT:
        return this._multiSelect !== void 0;
      case w.AS_BUTTON_GROUP:
        return this._asButtonGroup !== void 0;
      case w.VALUES:
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
      case w.OPTION_LABEL:
        this._optionLabel = void 0;
        return;
      case w.MULTI_SELECT:
        this._multiSelect = void 0;
        return;
      case w.AS_BUTTON_GROUP:
        this._asButtonGroup = void 0;
        return;
      case w.VALUES:
        this._values = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ke(ar, "OPTION_LABEL", 14), Ke(ar, "MULTI_SELECT", 15), Ke(ar, "AS_BUTTON_GROUP", 16), Ke(ar, "VALUES", 17);
let cu = ar;
var Eu = Object.defineProperty, hu = (s, e, t) => e in s ? Eu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, le = (s, e, t) => hu(s, typeof e != "symbol" ? e + "" : e, t);
const it = class m extends ce {
  constructor() {
    super(...arguments), le(this, "_with", []), le(this, "_eType", []), le(this, "_filter"), le(this, "_template"), le(this, "_cases", []), le(this, "_priority", 0);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.ALL_FEATURES;
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
let gu = it;
var pu = Object.defineProperty, du = (s, e, t) => e in s ? pu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Or = (s, e, t) => du(s, typeof e != "symbol" ? e + "" : e, t);
const Yr = class Z extends Qe {
  constructor() {
    super(...arguments), Or(this, "_when"), Or(this, "_widget");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.TEMPLATE_CASE;
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
Or(Yr, "WHEN", 0), Or(Yr, "WIDGET", 1);
let Tu = Yr;
const Mr = {
  VERTICAL: "VERTICAL"
};
var Su = Object.defineProperty, fu = (s, e, t) => e in s ? Su(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ar = (s, e, t) => fu(s, typeof e != "symbol" ? e + "" : e, t);
const $r = class ee extends ce {
  constructor() {
    super(...arguments), Ar(this, "_fields", []), Ar(this, "_layout", Mr.VERTICAL);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.GROUP_WIDGET;
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
        return this._layout !== Mr.VERTICAL;
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
        this._layout = Mr.VERTICAL;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Ar($r, "FIELDS", 14), Ar($r, "LAYOUT", 15);
let Iu = $r;
var mu = Object.defineProperty, Nu = (s, e, t) => e in s ? mu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Jt = (s, e, t) => Nu(s, typeof e != "symbol" ? e + "" : e, t);
const fr = class W extends ce {
  constructor() {
    super(...arguments), Jt(this, "_condition"), Jt(this, "_then", []), Jt(this, "_else", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.CONDITIONAL;
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
Jt(fr, "CONDITION", 14), Jt(fr, "THEN", 15), Jt(fr, "ELSE", 16);
let Lu = fr;
var _u = Object.defineProperty, vu = (s, e, t) => e in s ? _u(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Zt = (s, e, t) => vu(s, typeof e != "symbol" ? e + "" : e, t);
const Ir = class Y extends ce {
  constructor() {
    super(...arguments), Zt(this, "_items"), Zt(this, "_body", []), Zt(this, "_emptyText");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.FOR_EACH;
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
Zt(Ir, "ITEMS", 14), Zt(Ir, "BODY", 15), Zt(Ir, "EMPTY_TEXT", 16);
let Ou = Ir;
var Au = Object.defineProperty, Cu = (s, e, t) => e in s ? Au(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Cr = (s, e, t) => Cu(s, typeof e != "symbol" ? e + "" : e, t);
const kr = class te extends ce {
  constructor() {
    super(...arguments), Cr(this, "_displayExpression"), Cr(this, "_targetRoute");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.REFERENCE_LINK_WIDGET;
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
Cr(kr, "DISPLAY_EXPRESSION", 14), Cr(kr, "TARGET_ROUTE", 15);
let Du = kr;
var yu = Object.defineProperty, Ru = (s, e, t) => e in s ? yu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ze = (s, e, t) => Ru(s, typeof e != "symbol" ? e + "" : e, t);
const ir = class F extends Qe {
  constructor() {
    super(...arguments), ze(this, "_name"), ze(this, "_priority", 0), ze(this, "_templates", []), ze(this, "_cases", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.U_I_MODEL_OVERLAY;
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
  get priority() {
    return this._priority;
  }
  set priority(e) {
    const t = this._priority;
    this._priority = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(F.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.PRIORITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(F.TEMPLATES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.TEMPLATES,
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
      getFeature: () => this.eClass().getEStructuralFeature(F.CASES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => F.CASES,
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
      case F.PRIORITY:
        return this.priority;
      case F.TEMPLATES:
        return this.templates;
      case F.CASES:
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
      case F.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case F.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case F.TEMPLATES:
        this.templates = t, super.eSet(e, t);
        break;
      case F.CASES:
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
      case F.NAME:
        return this._name !== void 0;
      case F.PRIORITY:
        return this._priority !== 0;
      case F.TEMPLATES:
        return this._templates !== void 0 && this._templates.length > 0;
      case F.CASES:
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
      case F.NAME:
        this._name = void 0;
        return;
      case F.PRIORITY:
        this._priority = 0;
        return;
      case F.TEMPLATES:
        this._templates = [];
        return;
      case F.CASES:
        this._cases = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
ze(ir, "NAME", 0), ze(ir, "PRIORITY", 1), ze(ir, "TEMPLATES", 2), ze(ir, "CASES", 3);
let wu = ir;
var Fu = Object.defineProperty, Pu = (s, e, t) => e in s ? Fu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ne = (s, e, t) => Pu(s, typeof e != "symbol" ? e + "" : e, t);
const ut = class L extends Qe {
  constructor() {
    super(...arguments), ne(this, "_extends"), ne(this, "_css"), ne(this, "_vueComponent"), ne(this, "_visibilityCondition"), ne(this, "_name"), ne(this, "_group");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.BASE_STYLE;
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
      getFeature: () => this.eClass().getEStructuralFeature(L.EXTENDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => L.EXTENDS,
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
      getFeature: () => this.eClass().getEStructuralFeature(L.CSS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => L.CSS,
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
      getFeature: () => this.eClass().getEStructuralFeature(L.VUE_COMPONENT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => L.VUE_COMPONENT,
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
      getFeature: () => this.eClass().getEStructuralFeature(L.VISIBILITY_CONDITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => L.VISIBILITY_CONDITION,
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
      case L.EXTENDS:
        return this.extends;
      case L.CSS:
        return this.css;
      case L.VUE_COMPONENT:
        return this.vueComponent;
      case L.VISIBILITY_CONDITION:
        return this.visibilityCondition;
      case L.NAME:
        return this.name;
      case L.GROUP:
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
      case L.EXTENDS:
        this.extends = t, super.eSet(e, t);
        break;
      case L.CSS:
        this.css = t, super.eSet(e, t);
        break;
      case L.VUE_COMPONENT:
        this.vueComponent = t, super.eSet(e, t);
        break;
      case L.VISIBILITY_CONDITION:
        this.visibilityCondition = t, super.eSet(e, t);
        break;
      case L.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case L.GROUP:
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
      case L.EXTENDS:
        return this._extends !== void 0;
      case L.CSS:
        return this._css !== void 0;
      case L.VUE_COMPONENT:
        return this._vueComponent !== void 0;
      case L.VISIBILITY_CONDITION:
        return this._visibilityCondition !== void 0;
      case L.NAME:
        return this._name !== void 0;
      case L.GROUP:
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
      case L.EXTENDS:
        this._extends = void 0;
        return;
      case L.CSS:
        this._css = void 0;
        return;
      case L.VUE_COMPONENT:
        this._vueComponent = void 0;
        return;
      case L.VISIBILITY_CONDITION:
        this._visibilityCondition = void 0;
        return;
      case L.NAME:
        this._name = void 0;
        return;
      case L.GROUP:
        this._group = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
ne(ut, "EXTENDS", 2), ne(ut, "CSS", 3), ne(ut, "VUE_COMPONENT", 4), ne(ut, "VISIBILITY_CONDITION", 5), ne(ut, "NAME", 0), ne(ut, "GROUP", 1);
let Aa = ut;
var bu = Object.defineProperty, Mu = (s, e, t) => e in s ? bu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Dr = (s, e, t) => Mu(s, typeof e != "symbol" ? e + "" : e, t);
const xr = class se extends Aa {
  constructor() {
    super(...arguments), Dr(this, "_layout"), Dr(this, "_order");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.LAYOUT_STYLE;
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
Dr(xr, "LAYOUT", 6), Dr(xr, "ORDER", 7);
let Uu = xr;
var Vu = Object.defineProperty, Bu = (s, e, t) => e in s ? Vu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, _e = (s, e, t) => Bu(s, typeof e != "symbol" ? e + "" : e, t);
const qt = class C extends Aa {
  constructor() {
    super(...arguments), _e(this, "_feature"), _e(this, "_widgetType"), _e(this, "_label"), _e(this, "_readOnly"), _e(this, "_order");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.WIDGET_STYLE;
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
      getFeature: () => this.eClass().getEStructuralFeature(C.FEATURE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.FEATURE,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.WIDGET_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.WIDGET_TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.READ_ONLY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.READ_ONLY,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case C.FEATURE:
        return this.feature;
      case C.WIDGET_TYPE:
        return this.widgetType;
      case C.LABEL:
        return this.label;
      case C.READ_ONLY:
        return this.readOnly;
      case C.ORDER:
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
      case C.FEATURE:
        this.feature = t, super.eSet(e, t);
        break;
      case C.WIDGET_TYPE:
        this.widgetType = t, super.eSet(e, t);
        break;
      case C.LABEL:
        this.label = t, super.eSet(e, t);
        break;
      case C.READ_ONLY:
        this.readOnly = t, super.eSet(e, t);
        break;
      case C.ORDER:
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
      case C.FEATURE:
        return this._feature !== void 0;
      case C.WIDGET_TYPE:
        return this._widgetType !== void 0;
      case C.LABEL:
        return this._label !== void 0;
      case C.READ_ONLY:
        return this._readOnly !== void 0;
      case C.ORDER:
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
      case C.FEATURE:
        this._feature = void 0;
        return;
      case C.WIDGET_TYPE:
        this._widgetType = void 0;
        return;
      case C.LABEL:
        this._label = void 0;
        return;
      case C.READ_ONLY:
        this._readOnly = void 0;
        return;
      case C.ORDER:
        this._order = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
_e(qt, "FEATURE", 6), _e(qt, "WIDGET_TYPE", 7), _e(qt, "LABEL", 8), _e(qt, "READ_ONLY", 9), _e(qt, "ORDER", 10);
let Ca = qt;
var Gu = Object.defineProperty, Wu = (s, e, t) => e in s ? Gu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Da = (s, e, t) => Wu(s, typeof e != "symbol" ? e + "" : e, t);
const ya = class lt extends Ca {
  constructor() {
    super(...arguments), Da(this, "_columns", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.TABLE_STYLE;
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
Da(ya, "COLUMNS", 11);
let Yu = ya;
var $u = Object.defineProperty, ku = (s, e, t) => e in s ? $u(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, yr = (s, e, t) => ku(s, typeof e != "symbol" ? e + "" : e, t);
const Xr = class re extends Qe {
  constructor() {
    super(...arguments), yr(this, "_language", "OCL"), yr(this, "_body", "");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.EXPRESSION;
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
yr(Xr, "LANGUAGE", 0), yr(Xr, "BODY", 1);
let Ra = Xr;
const Ur = {
  ERROR: "ERROR"
};
var xu = Object.defineProperty, Xu = (s, e, t) => e in s ? xu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Rr = (s, e, t) => Xu(s, typeof e != "symbol" ? e + "" : e, t);
const Hr = class ae extends Ra {
  constructor() {
    super(...arguments), Rr(this, "_defaultMessage"), Rr(this, "_severity", Ur.ERROR);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.VALIDATION_EXPRESSION;
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
        return this._severity !== Ur.ERROR;
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
        this._severity = Ur.ERROR;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Rr(Hr, "DEFAULT_MESSAGE", 2), Rr(Hr, "SEVERITY", 3);
let Hu = Hr;
var ju = Object.defineProperty, qu = (s, e, t) => e in s ? ju(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, q = (s, e, t) => qu(s, typeof e != "symbol" ? e + "" : e, t);
const xe = class I extends Qe {
  constructor() {
    super(...arguments), q(this, "_order"), q(this, "_matchCode"), q(this, "_matchSeverity"), q(this, "_matchExpression"), q(this, "_mappedText"), q(this, "_mappedTextExpression"), q(this, "_mappedSeverity");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return _.Literals.VALIDATION_MESSAGE_MAPPER;
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
q(xe, "ORDER", 0), q(xe, "MATCH_CODE", 1), q(xe, "MATCH_SEVERITY", 2), q(xe, "MATCH_EXPRESSION", 3), q(xe, "MAPPED_TEXT", 4), q(xe, "MAPPED_TEXT_EXPRESSION", 5), q(xe, "MAPPED_SEVERITY", 6);
let Ku = xe;
var zu = Object.defineProperty, Qu = (s, e, t) => e in s ? zu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ju = (s, e, t) => Qu(s, e + "", t);
const wa = class Fa extends Ei {
  static get eINSTANCE() {
    return this._instance || (this._instance = new Fa()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(_.eINSTANCE);
  }
  /**
   * Create a new UIModel instance
   */
  createUIModel() {
    return new fi();
  }
  /**
   * Create a new FormView instance
   */
  createFormView() {
    return new _i();
  }
  /**
   * Create a new TableView instance
   */
  createTableView() {
    return new Ai();
  }
  /**
   * Create a new SectionView instance
   */
  createSectionView() {
    return new yi();
  }
  /**
   * Create a new TabView instance
   */
  createTabView() {
    return new Fi();
  }
  /**
   * Create a new SummaryView instance
   */
  createSummaryView() {
    return new Mi();
  }
  /**
   * Create a new MasterDetail instance
   */
  createMasterDetail() {
    return new Bi();
  }
  /**
   * Create a new PropertyBinding instance
   */
  createPropertyBinding() {
    return new Yi();
  }
  /**
   * Create a new InputWidget instance
   */
  createInputWidget() {
    return new Hi();
  }
  /**
   * Create a new TextAreaWidget instance
   */
  createTextAreaWidget() {
    return new Ki();
  }
  /**
   * Create a new NumberWidget instance
   */
  createNumberWidget() {
    return new Ji();
  }
  /**
   * Create a new CheckboxWidget instance
   */
  createCheckboxWidget() {
    return new tu();
  }
  /**
   * Create a new DateWidget instance
   */
  createDateWidget() {
    return new au();
  }
  /**
   * Create a new ComboboxWidget instance
   */
  createComboboxWidget() {
    return new lu();
  }
  /**
   * Create a new SelectWidget instance
   */
  createSelectWidget() {
    return new cu();
  }
  /**
   * Create a new AllFeatures instance
   */
  createAllFeatures() {
    return new gu();
  }
  /**
   * Create a new TemplateCase instance
   */
  createTemplateCase() {
    return new Tu();
  }
  /**
   * Create a new GroupWidget instance
   */
  createGroupWidget() {
    return new Iu();
  }
  /**
   * Create a new Conditional instance
   */
  createConditional() {
    return new Lu();
  }
  /**
   * Create a new ForEach instance
   */
  createForEach() {
    return new Ou();
  }
  /**
   * Create a new ReferenceLinkWidget instance
   */
  createReferenceLinkWidget() {
    return new Du();
  }
  /**
   * Create a new UIModelOverlay instance
   */
  createUIModelOverlay() {
    return new wu();
  }
  /**
   * Create a new LayoutStyle instance
   */
  createLayoutStyle() {
    return new Uu();
  }
  /**
   * Create a new WidgetStyle instance
   */
  createWidgetStyle() {
    return new Ca();
  }
  /**
   * Create a new TableStyle instance
   */
  createTableStyle() {
    return new Yu();
  }
  /**
   * Create a new Expression instance
   */
  createExpression() {
    return new Ra();
  }
  /**
   * Create a new ValidationExpression instance
   */
  createValidationExpression() {
    return new Hu();
  }
  /**
   * Create a new ValidationMessageMapper instance
   */
  createValidationMessageMapper() {
    return new Ku();
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
Ju(wa, "_instance");
let Pa = wa;
const ba = Symbol("uimodelComposerRegistry");
function Ma() {
  const s = es(ba);
  if (!s)
    throw new Error(
      "[uimodel-composer] No ComposerRegistry provided. Make sure UIModelComposer is an ancestor of this component."
    );
  return s;
}
function Zu(s) {
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
const el = "uic";
function nr(s) {
  return s === !0 || s === "true";
}
function nt(s, e = 0) {
  if (typeof s == "number") return s;
  const t = Number(s);
  return Number.isFinite(t) ? t : e;
}
const tl = {
  HOVER: ":hover",
  FOCUS: ":focus",
  FOCUS_WITHIN: ":focus-within",
  ACTIVE: ":active",
  DISABLED: ".uim-s-disabled",
  READONLY: ".uim-s-readonly",
  INVALID: ".uim-s-invalid",
  REQUIRED: ".uim-s-required"
};
function Fr(s) {
  return s.trim().replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() || "unnamed";
}
function jr(s) {
  return `--${el}-${Fr(s)}`;
}
function sl(s) {
  return s.replace(/token\(\s*([^)]+?)\s*\)/g, (e, t) => `var(${jr(t)})`);
}
function Ua(s) {
  return `uic-${Fr(s)}`;
}
function rl(s) {
  return `uicss-theme-${Fr(s)}`;
}
function Va(s, e) {
  return `uicss-cond-${Fr(s.name ?? "sheet")}-${e}`;
}
function Ba(s, e = "  ") {
  return s.filter((t) => t.property && t.value !== void 0).map((t) => `${e}${t.property.trim()}: ${sl(t.value)}${nr(t.important) ? " !important" : ""};`).join(`
`);
}
function al(s, e) {
  return e.filter((t) => t.declarations.length > 0).map((t) => {
    var r, i;
    const u = ((i = (r = t.state) == null ? void 0 : r.getName) == null ? void 0 : i.call(r)) ?? String(t.state), l = tl[u] ?? `:${u.toLowerCase()}`;
    return `${s}${l} {
${Ba(t.declarations)}
}`;
  }).join(`
`);
}
function ha(s, e, t, r) {
  const i = [];
  e.length > 0 && i.push(`${s} {
${Ba(e)}
}`);
  const u = al(s, t);
  if (u && i.push(u), i.length === 0) return "";
  const l = i.join(`
`);
  return r ? `@media ${r} {
${l}
}` : l;
}
function Ga(s) {
  return s.includeSubtypes === void 0 || s.includeSubtypes === null ? !0 : nr(s.includeSubtypes);
}
function il(s, e, t) {
  var r, i;
  let u;
  const l = (i = (r = e.targetClass) == null ? void 0 : r.getName) == null ? void 0 : i.call(r);
  return l ? u = Ga(e) ? `.uim-c-${l}` : `.uim-component[data-uim-eclass="${l}"]` : u = ".uim-component", e.componentName && (u += `[data-uim-name="${e.componentName}"]`), e.group && (u += `[data-uim-group="${e.group}"]`), e.condition && (u += `.${Va(s, t)}`), u;
}
function ul(s) {
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
function ll(s) {
  const e = [];
  if (s.tokens.length > 0) {
    const r = s.tokens.filter((i) => i.name).map((i) => `  ${jr(i.name)}: ${i.value ?? ""};`);
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
    }).map((u) => `  ${jr(u.token.name)}: ${u.value ?? ""};`);
    nr(r.dark) && i.push("  color-scheme: dark;"), i.length > 0 && e.push(`.${rl(r.name)} {
${i.join(`
`)}
}`);
  }
  const t = s.rules.map((r, i) => ({ rule: r, index: i }));
  t.sort((r, i) => nt(r.rule.priority) - nt(i.rule.priority) || r.index - i.index);
  for (const { rule: r, index: i } of t) {
    const u = ha(
      il(s, r, i),
      r.declarations,
      r.states,
      r.media || void 0
    );
    u && e.push(u);
  }
  for (const r of ul(s.styles)) {
    if (!r.name) continue;
    const i = ha(`.${Ua(r.name)}`, r.declarations, r.states);
    i && e.push(i);
  }
  return e.join(`

`);
}
function nl(s) {
  return s.map(ll).filter(Boolean).join(`

`);
}
const Pr = Symbol("uimodel-css:sheets");
let ol = 0;
function cl(s) {
  const e = zr(0);
  class t extends Sa {
    notifyChanged(g) {
      var c;
      try {
        super.notifyChanged(g);
      } catch {
      }
      if (!((c = g.isTouch) != null && c.call(g))) {
        e.value++;
        for (const o of i) l(o);
      }
    }
  }
  const r = new t();
  let i = [];
  function u(E) {
    const g = E;
    g.eAdapters().includes(r) || (g.eAdapterAdd ? g.eAdapterAdd(r) : g.eAdapters().push(r));
  }
  function l(E) {
    u(E);
    for (const g of E.eAllContents()) u(g);
  }
  function n(E) {
    const g = E;
    if (g.eAdapterRemove)
      g.eAdapterRemove(r);
    else {
      const c = g.eAdapters(), o = c.indexOf(r);
      o >= 0 && c.splice(o, 1);
    }
  }
  function h() {
    for (const E of i) {
      n(E);
      for (const g of E.eAllContents()) n(g);
    }
    i = [];
  }
  return ur(
    () => [...we(s)],
    (E) => {
      h();
      for (const g of E)
        l(g), i.push(g);
      e.value++;
    },
    { immediate: !0 }
  ), Kr(h), { css: N(() => (e.value, nl([...we(s)]))), version: e };
}
function El(s) {
  const { css: e, version: t } = cl(s);
  if (typeof document < "u") {
    const r = document.createElement("style");
    r.id = `uimodel-css-${++ol}`, r.setAttribute("data-uimodel-css", ""), document.head.appendChild(r), ai(() => {
      r.textContent = e.value;
    }), Kr(() => {
      r.remove();
    });
  }
  return { css: e, version: t };
}
function gr(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? ss(e) : s;
}
function ss(s) {
  return new Proxy(s, {
    get(e, t) {
      var r, i, u;
      if (typeof t != "string") return e[t];
      if (t === "eGet")
        return (h) => {
          var E, g, c;
          if (typeof h == "string") {
            const o = (c = (g = (E = e.eClass) == null ? void 0 : E.call(e)) == null ? void 0 : g.getEStructuralFeature) == null ? void 0 : c.call(g, h);
            return o ? gr(e.eGet(o)) : void 0;
          }
          return gr(e.eGet(h));
        };
      if (t in e) return e[t];
      const l = t.charAt(0).toUpperCase() + t.slice(1);
      for (const h of [`get${l}`, `is${l}`])
        if (typeof e[h] == "function") return gr(e[h]());
      const n = (u = (i = (r = e.eClass) == null ? void 0 : r.call(e)) == null ? void 0 : i.getEStructuralFeature) == null ? void 0 : u.call(i, t);
      if (n) return gr(e.eGet(n));
    }
  });
}
function hr(s, e) {
  if (!s) return !0;
  try {
    switch (s.language) {
      case "OCL":
        return hl(s.body, e);
      case "AQL":
        return gl(s.body, e);
      case "JS":
        return pl(s.body, e);
      default:
        return console.warn(`[uimodel-composer] Unknown expression language: ${s.language}`), !0;
    }
  } catch (t) {
    return console.error(`[uimodel-composer] Expression evaluation failed (${s.language}):`, t), !0;
  }
}
function hl(s, e) {
  try {
    const { EMFOclValidator: t } = globalThis.__emftsOcl__ ?? {};
    return t ? new t().evaluateExpression(s, ss(e)) === !0 : (console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup."), !0);
  } catch {
    return !0;
  }
}
function gl(s, e) {
  return console.warn("[uimodel-composer] AQL evaluation not yet implemented."), !0;
}
function pl(s, e) {
  return !!new Function("self", `"use strict"; return (${s});`)(ss(e));
}
function dl(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? ss(e) : s;
}
function ea(s, e, t = {}) {
  if (s != null && s.body)
    try {
      switch (s.language) {
        case "JS": {
          const r = Object.keys(t);
          return new Function("self", ...r, `"use strict"; return (${s.body});`)(ss(e), ...r.map((i) => dl(t[i])));
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
function Tl(s) {
  return s.map((e, t) => ({ overlay: e, index: t })).sort((e, t) => nt(t.overlay.priority) - nt(e.overlay.priority) || e.index - t.index).flatMap(({ overlay: e }) => [...e.cases ?? []]);
}
function Wa(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "AllFeatures";
}
function Sl(s) {
  var e;
  const t = (e = s.eClass) == null ? void 0 : e.call(s);
  return t ? t.getName() === "WidgetComponent" || t.getEAllSuperTypes().some((r) => r.getName() === "WidgetComponent") : !1;
}
function Ya(s) {
  return typeof s.isContainment == "function";
}
function fl(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    Wa(i) ? e.push(i) : Sl(i) && i.feature && t.add(i.feature);
    for (const u of i.eClass().getEAllStructuralFeatures()) {
      if (!Ya(u) || !u.isContainment()) continue;
      const l = i.eGet(u);
      if (!l) continue;
      const n = u.isMany() ? [...l] : [l];
      for (const h of n) r(h);
    }
  }
  return r(s), { blocks: e, boundFeatures: t };
}
function mr(s) {
  var e;
  return (((e = s.with) == null ? void 0 : e.length) ?? 0) > 0;
}
function Il(s, e) {
  var t;
  const r = s.getEAllStructuralFeatures();
  if (mr(e)) {
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
    (u) => hr(e.filter, u)
  )), i;
}
function ml(s, e) {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const u of e.blocks)
    t.set(u, []), r.set(u, new Set(Il(s, u)));
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
      const h = nt(n.priority) - nt(l.priority), E = Number(mr(n)) - Number(mr(l)), g = i.get(l) - i.get(n);
      (h > 0 || h === 0 && (E > 0 || E === 0 && g > 0)) && (l = n);
    }
    l && t.get(l).push(u);
  }
  for (const [u, l] of t) {
    if (!mr(u)) continue;
    const n = new Map(u.with.map((h, E) => [h, E]));
    l.sort((h, E) => (n.get(h) ?? 0) - (n.get(E) ?? 0));
  }
  return t;
}
function ga(s, e) {
  for (const t of s ?? [])
    if (t.widget && (!t.when || ea(
      t.when,
      e
    )))
      return t.widget;
}
function Nl(s, e, t) {
  return ga(t?.overlayCases, e) ?? ga(s.cases, e) ?? s.template;
}
function wr(s) {
  var e, t, r;
  const i = s.eClass(), u = (e = i.getEPackage()) == null ? void 0 : e.getEFactoryInstance();
  if (!u) throw new Error(`Keine Factory für ${i.getName()}`);
  const l = u.create(i);
  for (const n of i.getEAllStructuralFeatures()) {
    if ((t = n.isDerived) != null && t.call(n) || ((r = n.isChangeable) == null ? void 0 : r.call(n)) === !1) continue;
    const h = s.eGet(n);
    if (h == null) continue;
    const E = Ya(n) && n.isContainment();
    if (n.isMany()) {
      const g = [...h];
      if (g.length === 0) continue;
      l.eSet(
        n,
        E ? g.map((c) => wr(c)) : g
      );
    } else
      l.eSet(n, E ? wr(h) : h);
  }
  return l;
}
const Ll = /* @__PURE__ */ new Set(["AllFeatures", "Conditional", "ForEach"]);
function Vr(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function $a(s, e) {
  if (Vr(s) !== "GroupWidget") {
    s.feature = e;
    return;
  }
  const t = s.fields ?? [];
  for (const r of t)
    Ll.has(Vr(r)) || (Vr(r) === "GroupWidget" ? $a(r, e) : !r.feature && !(r.bindings ?? []).some((i) => i.property === "feature") && (r.feature = e));
}
function _l(s, e) {
  const t = Pa.eINSTANCE.createValidationExpression();
  return t.language = "JS", t.body = `self.${s} !== null && self.${s} !== undefined && String(self.${s}).length > 0`, t.defaultMessage = `${e ?? s} ist erforderlich.`, t.severity = "ERROR", t;
}
function vl(s) {
  const e = s.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ol(s, e, t) {
  var r, i, u, l;
  const n = t ?? {
    blocks: [e],
    boundFeatures: /* @__PURE__ */ new Set()
  };
  n.blocks.includes(e) || n.blocks.push(e);
  const h = ml(s, n).get(e) ?? [], E = [];
  for (const g of h) {
    const c = Nl(e, g, n);
    if (!c) {
      console.error(
        `[uimodel-composer] AllFeatures "${e.name ?? "?"}": kein TemplateCase trifft auf Feature "${g.getName() ?? "?"}" und kein Default-Fall (template) gesetzt.`
      );
      continue;
    }
    const o = wr(c);
    $a(o, g);
    const p = g.getName() ?? "feature";
    o.name = p, o.label === void 0 && e.label !== void 0 && (o.label = e.label), o.placeholder === void 0 && e.placeholder !== void 0 && (o.placeholder = e.placeholder), o.readOnly === void 0 && e.readOnly !== void 0 && (o.readOnly = e.readOnly), o.required === void 0 && e.required !== void 0 && (o.required = e.required), (((r = o.styles) == null ? void 0 : r.length) ?? 0) === 0 && (((i = e.styles) == null ? void 0 : i.length) ?? 0) > 0 && (o.styles = [...e.styles]), o.label || (o.label = vl(p)), !o.group && e.group && (o.group = e.group), o.required === void 0 && nt((u = g.getLowerBound) == null ? void 0 : u.call(g)) >= 1 && (o.required = !0, (((l = o.validations) == null ? void 0 : l.length) ?? 0) === 0 && (o.validations = [_l(p, o.label)]));
    const P = e.bindings ?? [];
    if (P.length > 0) {
      const b = new Set((o.bindings ?? []).map((M) => M.property)), X = P.filter((M) => M.property && !b.has(M.property)).map((M) => wr(M));
      X.length > 0 && (o.bindings = [...o.bindings ?? [], ...X]);
    }
    E.push(o);
  }
  return E;
}
const ka = Symbol("uimodel:allfeatures-context"), xa = zr(0);
function Al() {
  xa.value++;
}
function rs() {
  xa.value;
}
function Cl(s) {
  class e extends Sa {
    notifyChanged(n) {
      var h;
      try {
        super.notifyChanged(n);
      } catch {
      }
      if ((h = n.isTouch) != null && h.call(n)) return;
      Al();
      const E = we(s);
      E && i(E);
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
    const n = (h) => {
      const E = h;
      if (E.eAdapterRemove)
        E.eAdapterRemove(t);
      else {
        const g = E.eAdapters(), c = g.indexOf(t);
        c >= 0 && g.splice(c, 1);
      }
    };
    n(l);
    for (const h of l.eAllContents()) n(h);
  }
  ur(
    () => we(s),
    (l, n) => {
      n && u(n), l && i(l);
    },
    { immediate: !0 }
  ), Kr(() => {
    const l = we(s);
    l && u(l);
  });
}
function Xa(s) {
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
function Dl(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "CssStyle";
}
function yl(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    !i || t.has(i) || (t.add(i), r(i.extends), Dl(i) && i.name && e.push(Ua(i.name)));
  }
  for (const i of s ?? []) r(i);
  return e;
}
function Rl(s, e) {
  var t, r, i;
  const u = (r = (t = s.targetClass) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  if (u) {
    const l = Xa((i = e.eClass) == null ? void 0 : i.call(e));
    if (Ga(s)) {
      if (!l.includes(u)) return !1;
    } else if (l[0] !== u)
      return !1;
  }
  return !(s.componentName && e.name !== s.componentName || s.group && e.group !== s.group);
}
function ta(s, e = {}) {
  var t;
  const r = ["uim-component"];
  for (const i of Xa((t = s.eClass) == null ? void 0 : t.call(s)))
    r.push(`uim-c-${i}`);
  r.push(...yl(s.styles)), e.resolvedCss && r.push(...e.resolvedCss.split(/\s+/).filter(Boolean));
  for (const i of e.sheets ?? [])
    i.rules.forEach((u, l) => {
      u.condition && Rl(u, s) && e.model && hr(u.condition, e.model) && r.push(Va(i, l));
    });
  return [...new Set(r)];
}
function sa(s) {
  var e, t, r;
  const i = {}, u = (r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  return u && (i["data-uim-eclass"] = u), s.name && (i["data-uim-name"] = s.name), s.group && (i["data-uim-group"] = s.group), i;
}
function wl(s, e, t) {
  const r = [];
  return nr(t ?? s.required) && r.push("uim-s-required"), nr(e ?? s.readOnly) && r.push("uim-s-readonly"), r;
}
function Ha(s, e = /* @__PURE__ */ new Set()) {
  if (!s) return {};
  if (e.has(s)) return {};
  e.add(s);
  const t = s.extends ? Ha(s.extends, e) : {}, r = Fl(s);
  return ja(t, r);
}
function ra(s) {
  return s.reduce(
    (e, t) => ja(e, Ha(t)),
    {}
  );
}
function Fl(s) {
  const e = {};
  s.css !== void 0 && (e.css = s.css), s.vueComponent !== void 0 && (e.vueComponent = s.vueComponent);
  const t = s;
  t.layout !== void 0 && (e.layout = t.layout), t.order !== void 0 && (e.order = t.order);
  const r = s;
  return r.widgetType !== void 0 && (e.widgetType = r.widgetType), r.label !== void 0 && (e.label = r.label), r.readOnly !== void 0 && (e.readOnly = r.readOnly), r.order !== void 0 && (e.order = r.order), e;
}
function ja(s, e) {
  return {
    ...s,
    ...Object.fromEntries(
      Object.entries(e).filter(([, t]) => t !== void 0)
    ),
    // Merge CSS classes (append, not replace)
    css: [s.css, e.css].filter(Boolean).join(" ") || void 0
  };
}
const aa = /* @__PURE__ */ ie({
  __name: "ComponentDispatcher",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = s, t = Ma(), r = N(() => {
      var n, h, E, g;
      const c = ((g = (E = (h = (n = e.component).eClass) == null ? void 0 : h.call(n)) == null ? void 0 : E.getName) == null ? void 0 : g.call(E)) ?? "", o = t.getComposer(c);
      return o || console.warn(`[uimodel-composer] No composer registered for EClass "${c}"`), o ?? null;
    }), i = es(Pr, void 0), u = N(() => (rs(), i?.version.value, ta(e.component, {
      model: e.model,
      sheets: i?.sheets.value,
      resolvedCss: ra(e.component.styles ?? []).css
    }))), l = N(() => sa(e.component));
    return (n, h) => r.value ? (O(), oe(Qr(r.value), Jr({
      key: 0,
      component: s.component,
      model: s.model,
      class: u.value
    }, l.value), null, 16, ["component", "model", "class"])) : cr("", !0);
  }
});
function ia(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function Pl(s) {
  return ia(s) === "GroupWidget";
}
function bl(s) {
  return ia(s) === "Conditional";
}
function Ml(s) {
  return ia(s) === "ForEach";
}
function Ul(s) {
  if (!s) return [];
  const e = typeof s == "object" && Symbol.iterator in s ? s : [s], t = [];
  for (const r of e)
    r && typeof r.eClass == "function" ? t.push(r) : r != null && console.warn("[uimodel-composer] ForEach: Element ist kein EObject und wird übersprungen:", r);
  return t;
}
function qr(s, e, t) {
  var r;
  const i = [];
  for (const u of s ?? [])
    if (Wa(u)) {
      const l = (r = e.eClass) == null ? void 0 : r.call(e);
      if (!l) continue;
      for (const n of Ol(l, u, t))
        i.push({ kind: "widget", widget: n, model: e });
    } else if (bl(u)) {
      const l = hr(u.condition, e) ? u.then : u.else;
      i.push(...qr(l, e, t));
    } else if (Ml(u)) {
      const l = Ul(ea(u.items, e));
      if (l.length === 0) {
        u.emptyText && i.push({ kind: "note", text: u.emptyText });
        continue;
      }
      for (const n of l)
        i.push(...qr(u.body, n, t));
    } else Pl(u) ? i.push({ kind: "group", widget: u, model: e }) : i.push({ kind: "widget", widget: u, model: e });
  return i;
}
function Vl(s, e) {
  return N(() => (rs(), hr(we(s), we(e))));
}
const Bl = /* @__PURE__ */ new Set([
  "readOnly",
  "required",
  "password",
  "asToggle",
  "multiSelect",
  "asButtonGroup",
  "withTime"
]), Gl = /* @__PURE__ */ new Set([
  "maxLength",
  "rows",
  "min",
  "max",
  "step",
  "minSearchLength",
  "order"
]);
function Wl(s, e) {
  if (e === null) return s === "feature" ? null : void 0;
  if (s === "feature") return e;
  if (Bl.has(s)) return !!e;
  if (Gl.has(s)) {
    const t = Number(e);
    return Number.isFinite(t) ? t : void 0;
  }
  return String(e);
}
function Yl(s, e) {
  var t;
  const r = { values: {}, featureSuppressed: !1 };
  for (const i of s.bindings ?? []) {
    const u = i.property;
    if (!u || !i.expression) continue;
    const l = ea(i.expression, e, {
      feature: s.feature,
      eClass: (t = e.eClass) == null ? void 0 : t.call(e)
    });
    if (l === void 0) continue;
    if (u === "feature") {
      l === null ? r.featureSuppressed = !0 : r.feature = l;
      continue;
    }
    const n = Wl(u, l);
    n !== void 0 && (r.values[u] = n);
  }
  return r;
}
function $l(s, e) {
  return N(() => {
    var t;
    rs();
    const r = we(s), i = ra(r.styles), u = {
      ...r.label !== void 0 ? { label: r.label } : {},
      ...r.placeholder !== void 0 ? { placeholder: r.placeholder } : {},
      ...r.readOnly !== void 0 ? { readOnly: r.readOnly } : {},
      ...r.required !== void 0 ? { required: r.required } : {}
    }, l = e ? we(e) : void 0;
    if (!l || (((t = r.bindings) == null ? void 0 : t.length) ?? 0) === 0)
      return { ...i, ...u };
    const n = Yl(r, l);
    return {
      ...i,
      ...u,
      ...n.values,
      boundFeature: n.feature,
      featureSuppressed: n.featureSuppressed
    };
  });
}
var k = /* @__PURE__ */ ((s) => (s[s.DEFAULT = 0] = "DEFAULT", s[s.DATA_TYPE = 100] = "DATA_TYPE", s[s.ECLASS = 200] = "ECLASS", s[s.FEATURE = 300] = "FEATURE", s[s.PACKAGE = 400] = "PACKAGE", s[s.INSTANCE = 500] = "INSTANCE", s[s.OVERRIDE = 1e3] = "OVERRIDE", s))(k || {});
function x() {
  return { matches: !1, priority: 0 };
}
function he(s) {
  return { matches: !0, priority: s };
}
let kl = class {
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
      return x();
    if (t === this.eClass)
      return he(k.ECLASS + 50);
    if (t.getName() === this.eClass.getName()) {
      const r = t.getEPackage(), i = this.eClass.getEPackage();
      if (r && i && r.getNsURI() === i.getNsURI())
        return he(k.ECLASS + 50);
    }
    return this.isSuperTypeOf(this.eClass, t) ? he(k.ECLASS) : x();
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
}, xl = class {
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
      return x();
    const u = (t = i.getEType) == null ? void 0 : t.call(i);
    return u && ((r = u.getName) == null ? void 0 : r.call(u)) === this.dataTypeName ? he(k.DATA_TYPE) : x();
  }
  /**
   * Check if the feature is an EAttribute.
   */
  isEAttribute(e) {
    var t, r;
    return !e || typeof e != "object" ? !1 : "getEAttributeType" in e || "eClass" in e && typeof e.eClass == "function" && ((r = (t = e.eClass()) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "EAttribute";
  }
}, Xl = class {
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
    return x();
  }
  /**
   * Match against a specific enum.
   */
  matchEnum(e) {
    var t;
    return this.enumName ? ((t = e.getName) == null ? void 0 : t.call(e)) === this.enumName ? he(k.DATA_TYPE + 50) : x() : he(k.DATA_TYPE);
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
};
class Hl {
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
      return x();
    const h = n;
    let E = k.DATA_TYPE;
    if (this.containment !== void 0) {
      if ((((t = h.isContainment) == null ? void 0 : t.call(h)) ?? !1) !== this.containment)
        return x();
      E += 25;
    }
    if (this.targetClass) {
      const g = (r = h.getEReferenceType) == null ? void 0 : r.call(h);
      if (!g)
        return x();
      const c = (i = g.getName) == null ? void 0 : i.call(g), o = (l = (u = this.targetClass).getName) == null ? void 0 : l.call(u);
      if (c !== o && !this.isSuperTypeOf(this.targetClass, g))
        return x();
      E += 25;
    }
    return he(E);
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
}
class jl {
  constructor(e, t) {
    this.eClass = e, this.featureName = t;
  }
  /**
   * Match the context against this specific feature.
   */
  match(e) {
    var t, r, i, u, l, n, h, E, g, c;
    const o = e.feature || e.attribute || e.reference;
    if (!o || ((t = o.getName) == null ? void 0 : t.call(o)) !== this.featureName)
      return x();
    const p = (r = o.getEContainingClass) == null ? void 0 : r.call(o);
    if (!p)
      return x();
    if (p === this.eClass)
      return he(k.FEATURE);
    const P = (i = p.getName) == null ? void 0 : i.call(p), b = (l = (u = this.eClass).getName) == null ? void 0 : l.call(u);
    if (P === b) {
      const X = (n = p.getEPackage) == null ? void 0 : n.call(p), M = (E = (h = this.eClass).getEPackage) == null ? void 0 : E.call(h);
      if (X && M && ((g = X.getNsURI) == null ? void 0 : g.call(X)) === ((c = M.getNsURI) == null ? void 0 : c.call(M)))
        return he(k.FEATURE);
    }
    return this.isInheritedFrom(p, this.eClass) ? he(k.FEATURE - 10) : x();
  }
  /**
   * Check if subClass inherits from superClass.
   */
  isInheritedFrom(e, t) {
    var r, i, u, l, n, h, E;
    const g = (r = e.getEAllSuperTypes) == null ? void 0 : r.call(e);
    if (!g) return !1;
    for (const c of g) {
      if (c === t) return !0;
      if (((i = c.getName) == null ? void 0 : i.call(c)) === ((u = t.getName) == null ? void 0 : u.call(t))) {
        const o = (l = c.getEPackage) == null ? void 0 : l.call(c), p = (n = t.getEPackage) == null ? void 0 : n.call(t);
        if (o && p && ((h = o.getNsURI) == null ? void 0 : h.call(o)) === ((E = p.getNsURI) == null ? void 0 : E.call(p)))
          return !0;
      }
    }
    return !1;
  }
}
var ql = Object.defineProperty, Kl = (s, e, t) => e in s ? ql(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, pa = (s, e, t) => Kl(s, typeof e != "symbol" ? e + "" : e, t);
let zl = 0;
function Ql() {
  return `descriptor-${++zl}`;
}
let Jl = class {
  constructor() {
    pa(this, "entries", []), pa(this, "instanceOverrides", /* @__PURE__ */ new WeakMap());
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
      { priority: k.INSTANCE }
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
      { priority: k.ECLASS, ...r }
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
      { priority: k.DATA_TYPE, ...r }
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
      { priority: k.DATA_TYPE, ...r }
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
      { priority: k.DATA_TYPE, ...t }
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
      { priority: k.FEATURE, ...i }
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
    const i = Ql();
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
        const r = new kl(e.eClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "datatype": {
        const r = new xl(e.dataTypeName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "enum": {
        const r = new Xl(e.enumName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "reference": {
        const r = new Hl(e.containment, e.targetClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "feature": {
        const r = new jl(e.eClass, e.featureName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "instance":
        return (r) => r.eObject === e.eObject ? he(t ?? k.INSTANCE) : x();
      case "custom":
        return e.matcher;
      default:
        return () => x();
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
const or = new Jl();
var Zl = Object.defineProperty, en = (s, e, t) => e in s ? Zl(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, da = (s, e, t) => en(s, typeof e != "symbol" ? e + "" : e, t);
let tn = class {
  constructor() {
    da(this, "lazyRegistrations", []), da(this, "resolvedPackages", /* @__PURE__ */ new Map());
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
new tn();
const qa = Symbol("componentRegistry");
function sn() {
  const s = es(qa) ?? or;
  function e(c) {
    return s.getComponent(c);
  }
  function t(c, o) {
    return s.getComponentForFeature(c, o);
  }
  function r(c, o) {
    return s.getComponentForEClass(c, o);
  }
  function i(c, o, p) {
    return s.register(c, o, p);
  }
  function u(c, o) {
    return s.registerForInstance(c, o);
  }
  function l(c, o, p) {
    return s.registerForEClass(c, o, p);
  }
  function n(c, o, p) {
    return s.registerForDataType(c, o, p);
  }
  function h(c, o, p) {
    return s.registerForEnum(c, o, p);
  }
  function E(c, o) {
    return s.registerForReference(c, o);
  }
  function g(c, o, p, P) {
    return s.registerForFeature(c, o, p, P);
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
    registerForEnum: h,
    registerForReference: E,
    registerForFeature: g
  };
}
const rn = { class: "uimodel-fallback-widget" }, an = { class: "uimodel-fallback-widget__label" }, un = {
  key: 0,
  "aria-hidden": "true"
}, ln = ["rows", "value", "placeholder", "readonly", "disabled"], nn = /* @__PURE__ */ ie({
  __name: "FallbackWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = N(() => {
      var o;
      return ((o = e.custom) == null ? void 0 : o.resolvedStyle) ?? {};
    }), r = N(
      () => {
        var o, p;
        return t.value.label ?? ((p = (o = e.feature) == null ? void 0 : o.getName) == null ? void 0 : p.call(o)) ?? "";
      }
    ), i = N(() => t.value.placeholder ?? ""), u = N(() => h(t.value.readOnly)), l = N(() => h(t.value.required)), n = N(() => {
      var o, p;
      const P = (p = (o = e.custom) == null ? void 0 : o.rawWidget) == null ? void 0 : p.rows, b = Number(P);
      return Number.isFinite(b) && b > 0 ? b : 3;
    });
    function h(o) {
      return o === !0 || o === "true";
    }
    const E = N(() => {
      var o;
      const p = (o = e.eObject) == null ? void 0 : o.eGet(e.feature);
      return p == null ? "" : String(p);
    }), g = zr(E.value);
    ur(E, (o) => {
      g.value = o;
    });
    function c(o) {
      var p;
      const P = o.target.value;
      g.value = P, (p = e.eObject) == null || p.eSet(e.feature, P);
    }
    return (o, p) => (O(), U("div", rn, [
      Nr("label", an, [
        ii(Zr(r.value), 1),
        l.value ? (O(), U("span", un, " *")) : cr("", !0)
      ]),
      Nr("textarea", {
        class: "uimodel-fallback-widget__input",
        rows: n.value,
        value: g.value,
        placeholder: i.value,
        readonly: u.value,
        disabled: u.value,
        onInput: c
      }, null, 40, ln)
    ]));
  }
}), on = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, cn = /* @__PURE__ */ on(nn, [["__scopeId", "data-v-0237261a"]]), Ka = /* @__PURE__ */ ie({
  __name: "WidgetComposer",
  props: {
    widget: {},
    model: {}
  },
  setup(s) {
    const e = s, t = /* @__PURE__ */ new Set(), { getComponentForFeature: r } = sn(), i = Vl(
      () => e.widget.visibilityCondition,
      () => e.model
    ), u = $l(
      () => e.widget,
      () => e.model
    ), l = N(
      () => u.value.boundFeature ?? e.widget.feature
    ), n = N(() => {
      var o, p, P, b, X, M, ge, Fe;
      if (!l.value) return null;
      const pe = r(l.value, e.model);
      if (pe) return pe;
      const ve = ((b = (P = (p = (o = e.widget).eClass) == null ? void 0 : p.call(o)) == null ? void 0 : P.getName) == null ? void 0 : b.call(P)) ?? "WidgetComponent", de = ((Fe = (ge = (M = (X = l.value).getEType) == null ? void 0 : M.call(X)) == null ? void 0 : ge.getName) == null ? void 0 : Fe.call(ge)) ?? "?", Oe = `${ve}/${de}`;
      return t.has(Oe) || (t.add(Oe), console.warn(
        `[uimodel-composer] Kein Renderer für Widget "${ve}" auf Datentyp "${de}" registriert — Fallback als Plaintext-Editor. Host: Renderer über die @emfts/vue-registry registrieren.`
      )), cn;
    }), h = N(() => {
      var o, p;
      return {
        eObject: e.model,
        feature: l.value,
        eClass: (p = (o = e.model).eClass) == null ? void 0 : p.call(o),
        custom: {
          resolvedStyle: u.value,
          rawWidget: e.widget
        }
      };
    }), E = es(Pr, void 0), g = N(() => (rs(), E?.version.value, [
      ...ta(e.widget, {
        model: e.model,
        sheets: E?.sheets.value,
        resolvedCss: u.value.css
      }),
      ...wl(
        e.widget,
        u.value.readOnly,
        u.value.required
      )
    ])), c = N(() => sa(e.widget));
    return (o, p) => Xe(i) && n.value && !Xe(u).featureSuppressed ? (O(), oe(Qr(n.value), Jr({ key: 0 }, { ...h.value, ...c.value }, { class: g.value }), null, 16, ["class"])) : cr("", !0);
  }
}), En = {
  key: 0,
  class: "uimodel-foreach-empty"
}, hn = /* @__PURE__ */ ie({
  __name: "FieldsRenderer",
  props: {
    fields: {},
    model: {}
  },
  setup(s) {
    const e = s, t = es(ka, void 0), r = es(Pr, void 0), i = N(() => (rs(), r?.version.value, qr(e.fields, e.model, t?.value)));
    function u(h, E) {
      const g = String(
        h.layout ?? "VERTICAL"
      ).toLowerCase();
      return [
        ...ta(h, {
          model: E,
          sheets: r?.sheets.value,
          resolvedCss: ra(h.styles ?? []).css
        }),
        "uimodel-group",
        `uimodel-group--${g}`
      ];
    }
    function l(h) {
      return h.fields ?? [];
    }
    const n = sa;
    return (h, E) => {
      const g = ui("FieldsRenderer", !0);
      return O(!0), U(ts, null, Er(i.value, (c, o) => (O(), U(ts, { key: o }, [
        c.kind === "note" ? (O(), U("p", En, Zr(c.text), 1)) : c.kind === "group" ? (O(), U("div", Jr({
          key: 1,
          class: u(c.widget, c.model)
        }, { ref_for: !0 }, Xe(n)(c.widget)), [
          lr(g, {
            fields: l(c.widget),
            model: c.model
          }, null, 8, ["fields", "model"])
        ], 16)) : (O(), oe(Ka, {
          key: 2,
          widget: c.widget,
          model: c.model
        }, null, 8, ["widget", "model"]))
      ], 64))), 128);
    };
  }
}), gn = { class: "uimodel-form-view" }, za = /* @__PURE__ */ ie({
  __name: "FormViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (O(), U("div", gn, [
      lr(hn, {
        fields: s.component.fields,
        model: s.model
      }, null, 8, ["fields", "model"])
    ]));
  }
}), pn = { class: "uimodel-section-view" }, dn = /* @__PURE__ */ ie({
  __name: "SectionViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (O(), U("div", pn, [
      (O(!0), U(ts, null, Er(s.component.sections, (r) => (O(), oe(za, {
        key: r.name,
        component: r,
        model: s.model
      }, null, 8, ["component", "model"]))), 128))
    ]));
  }
}), Tn = { class: "uimodel-tab-view" }, Sn = ["data-tab"], fn = /* @__PURE__ */ ie({
  __name: "TabViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (O(), U("div", Tn, [
      (O(!0), U(ts, null, Er(s.component.tabs, (r) => (O(), U("div", {
        key: r.name,
        class: "uimodel-tab-panel",
        "data-tab": r.name
      }, [
        lr(aa, {
          component: r,
          model: s.model
        }, null, 8, ["component", "model"])
      ], 8, Sn))), 128))
    ]));
  }
}), In = { class: "uimodel-summary-view" }, mn = /* @__PURE__ */ ie({
  __name: "SummaryViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (O(), U("div", In, [
      (O(!0), U(ts, null, Er(s.component.summaryFields, (r) => (O(), oe(Ka, {
        key: r.name,
        widget: r,
        model: s.model
      }, null, 8, ["widget", "model"]))), 128))
    ]));
  }
}), Nn = {
  key: 1,
  class: "uimodel-table-view-placeholder"
}, Qa = /* @__PURE__ */ ie({
  __name: "TableViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = Ma(), t = N(() => e.getComposer("TableViewRenderer"));
    return (r, i) => t.value ? (O(), oe(Qr(t.value), {
      key: 0,
      component: s.component,
      model: s.model
    }, null, 8, ["component", "model"])) : (O(), U("div", Nn));
  }
}), Ln = { class: "uimodel-master-detail" }, _n = { class: "uimodel-master" }, vn = { class: "uimodel-detail" }, On = /* @__PURE__ */ ie({
  __name: "MasterDetailComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (O(), U("div", Ln, [
      Nr("div", _n, [
        lr(Qa, {
          component: s.component.master,
          model: s.model
        }, null, 8, ["component", "model"])
      ]),
      Nr("div", vn, [
        lr(aa, {
          component: s.component.detail,
          model: s.model
        }, null, 8, ["component", "model"])
      ])
    ]));
  }
}), An = /* @__PURE__ */ ie({
  __name: "UIModelComposer",
  props: {
    uiModel: {},
    model: {},
    composerRegistry: {},
    styleSheets: {},
    overlays: {}
  },
  setup(s) {
    const e = s, t = N(() => e.styleSheets ?? []), { version: r } = El(t);
    pr(Pr, { sheets: t, version: r }), Cl(() => e.model), pr(
      ka,
      N(() => (rs(), {
        ...fl(e.uiModel),
        overlayCases: Tl(e.overlays ?? [])
      }))
    );
    const i = e.composerRegistry ?? Zu({
      FormView: za,
      SectionView: dn,
      TabView: fn,
      SummaryView: mn,
      TableView: Qa,
      MasterDetail: On
    });
    pr(ba, i);
    function u() {
      return hr(e.uiModel.filterExpression, e.model);
    }
    return (l, n) => u() ? (O(!0), U(ts, { key: 0 }, Er(s.uiModel.components, (h) => (O(), oe(aa, {
      key: h.name,
      component: h,
      model: s.model
    }, null, 8, ["component", "model"]))), 128)) : cr("", !0);
  }
});
function Ja(s) {
  return typeof s?.eClass == "function";
}
function Za(s, e) {
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
function ei(s, e) {
  return Ja(s) ? s : Za(e(), s);
}
const Cn = /color|colour/i, Dn = /size|width|height|radius|blur|padding|transparence|transparency|opacity|zoom|count|index/i, yn = /^(is|has|show|enable|fullscreen|visible)/i;
function ua(s) {
  const e = s.getName?.() ?? "", t = s.getEType?.()?.getName?.() ?? "";
  return t === "EBoolean" || yn.test(e) ? "flag" : Cn.test(e) ? "colour" : t === "EInt" || t === "EDouble" || Dn.test(e) ? "number" : "text";
}
function la(s) {
  const t = (s.getName?.() ?? "").replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function ti(s, e = s.getName?.() ?? "Settings") {
  const t = Pa.eINSTANCE, r = t.createFormView();
  r.name = e;
  for (const u of s.getEStructuralFeatures()) {
    const l = Rn(t, u);
    l.feature = u, l.label = la(u), r.fields.push(l);
  }
  const i = t.createUIModel();
  return i.name = e, i.targetClasses.push(s), i.components.push(r), i;
}
function Rn(s, e) {
  switch (ua(e)) {
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
const wn = /* @__PURE__ */ ie({
  __name: "VariableWrapperWidget",
  props: {
    custom: {}
  },
  setup(s) {
    const e = s, t = N(() => {
      const { eObject: c, feature: o } = e.custom ?? {};
      if (!c || !o) return;
      const p = o.getName?.();
      return p ? c[p] : void 0;
    }), r = N(() => !!t.value?.variable), i = N({
      get: () => t.value?.value ?? "",
      set: (c) => {
        t.value && !r.value && (t.value.value = c);
      }
    }), u = N({
      get: () => {
        const c = Number(t.value?.value);
        return Number.isFinite(c) ? c : 0;
      },
      set: (c) => {
        t.value && !r.value && (t.value.value = String(c));
      }
    }), l = N({
      get: () => t.value?.value === !0 || t.value?.value === "true",
      set: (c) => {
        t.value && !r.value && (t.value.value = c);
      }
    }), n = N(() => e.custom?.feature ? ua(e.custom.feature) : "text"), h = N(
      () => e.custom?.resolvedStyle?.label ?? (e.custom?.feature ? la(e.custom.feature) : "")
    ), E = N(() => e.custom?.resolvedStyle?.readOnly || r.value), g = N(
      () => r.value ? `Kommt aus der Variablen „${t.value?.variable?.name ?? t.value?.variable}“` : void 0
    );
    return (c, o) => t.value ? (O(), U("div", {
      key: 0,
      class: li(["bound-field", { "bound-field--variable": r.value }])
    }, [
      n.value === "flag" ? (O(), oe(Xe(hi), {
        key: 0,
        modelValue: l.value,
        "onUpdate:modelValue": o[0] || (o[0] = (p) => l.value = p),
        label: h.value,
        disabled: E.value
      }, null, 8, ["modelValue", "label", "disabled"])) : n.value === "colour" ? (O(), oe(Xe(gi), {
        key: 1,
        modelValue: i.value,
        "onUpdate:modelValue": o[1] || (o[1] = (p) => i.value = p),
        label: h.value,
        disabled: E.value,
        hint: g.value
      }, null, 8, ["modelValue", "label", "disabled", "hint"])) : n.value === "number" ? (O(), oe(Xe(Ea), {
        key: 2,
        modelValue: u.value,
        "onUpdate:modelValue": o[2] || (o[2] = (p) => u.value = p),
        label: h.value,
        type: "number",
        disabled: E.value,
        hint: g.value
      }, null, 8, ["modelValue", "label", "disabled", "hint"])) : (O(), oe(Xe(Ea), {
        key: 3,
        modelValue: i.value,
        "onUpdate:modelValue": o[3] || (o[3] = (p) => i.value = p),
        label: h.value,
        disabled: E.value,
        placeholder: s.custom?.resolvedStyle?.placeholder,
        hint: g.value
      }, null, 8, ["modelValue", "label", "disabled", "placeholder", "hint"]))
    ], 2)) : cr("", !0);
  }
}), si = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, ri = /* @__PURE__ */ si(wn, [["__scopeId", "data-v-6de4ea58"]]), Fn = { class: "settings-form" }, Pn = {
  key: 1,
  class: "settings-form__empty"
}, bn = /* @__PURE__ */ ie({
  __name: "SettingsForm",
  props: /* @__PURE__ */ ni({
    create: { type: Function },
    uiModel: {},
    emptyText: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    _.eINSTANCE, pr(qa, or);
    const e = oi(s, "modelValue"), t = s;
    function r() {
      const c = ei(e.value, t.create);
      c !== e.value && (e.value = c);
    }
    na(r), ur(e, r);
    const i = N(() => e.value), u = oa(), l = oa(), n = N(() => {
      if (t.uiModel) return ca(t.uiModel);
      const o = i.value?.eClass?.();
      if (o)
        return l.value !== o && (l.value = o, u.value = ca(ti(o))), u.value;
    }), h = N(() => (i.value?.eClass?.().getEStructuralFeatures().length ?? 0) > 0);
    let E = !1;
    function g() {
      if (E) return;
      const c = i.value;
      if (c?.eClass) {
        for (const o of c.eClass().getEStructuralFeatures())
          or.registerForFeature(c.eClass(), o.getName?.() ?? "", ri);
        E = !0;
      }
    }
    return na(g), ur(i, g), (c, o) => (O(), U("div", Fn, [
      n.value && i.value && h.value ? (O(), oe(Xe(An), {
        key: 0,
        "ui-model": n.value,
        model: i.value
      }, null, 8, ["ui-model", "model"])) : (O(), U("p", Pn, Zr(s.emptyText ?? "Für dieses Widget sind keine Einstellungen modelliert."), 1))
    ]));
  }
}), Mn = /* @__PURE__ */ si(bn, [["__scopeId", "data-v-c1d43fb9"]]), Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SettingsForm: Mn,
  VariableWrapperWidget: ri,
  adopt: Za,
  asModel: ei,
  formFor: ti,
  isModelled: Ja,
  kindOf: ua,
  labelOf: la
}, Symbol.toStringTag, { value: "Module" })), Ta = "org.eclipse.daanse.board.app.ui.vue.uimodel", Vn = "0.0.1-next.1";
async function Hn(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${Ta}: tsm runtime is not initialized`);
  e.register(Ta, Un, Vn, "ui.vue.uimodel"), await void 0;
}
async function jn(s) {
  await void 0;
}
export {
  Mn as SettingsForm,
  ri as VariableWrapperWidget,
  Hn as activate,
  Za as adopt,
  ei as asModel,
  jn as deactivate,
  ti as formFor,
  Ja as isModelled,
  ua as kindOf,
  la as labelOf
};
