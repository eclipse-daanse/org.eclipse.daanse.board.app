(function(){var i="ui.vue.uimodel",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".list[data-v-6a541b41]{margin-bottom:12px}.list__head[data-v-6a541b41]{display:flex;align-items:center;gap:7px;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid var(--color-divider)}.list__label[data-v-6a541b41]{font-family:var(--font-sans);font-size:var(--text-sm);font-weight:600;color:var(--color-fg)}.list__count[data-v-6a541b41]{font-family:var(--font-mono);font-size:var(--text-xs);font-variant-numeric:tabular-nums;color:var(--color-dim)}.list__spacer[data-v-6a541b41]{flex:1 1 auto}.list__empty[data-v-6a541b41],.list__untyped[data-v-6a541b41]{margin:0 0 8px;font-size:var(--text-xs);line-height:1.5;color:var(--color-dim)}.entry[data-v-6a541b41]{position:relative;margin-bottom:3px;background-color:var(--color-bg);border:1px solid var(--color-divider);border-radius:var(--radius-xs)}.entry__head[data-v-6a541b41]{display:flex;align-items:center;gap:6px;width:100%;padding:5px 78px 5px 8px;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg);text-align:left;background:none;border:0;cursor:pointer}.entry__twist[data-v-6a541b41]{width:10px;font-size:var(--text-xs);color:var(--color-dim)}.entry__actions[data-v-6a541b41]{position:absolute;top:3px;right:5px;display:flex;gap:2px}.entry__actions button[data-v-6a541b41]{width:20px;height:20px;font-size:var(--text-xs);color:var(--color-dim);background:none;border:1px solid transparent;border-radius:var(--radius-xs);cursor:pointer}.entry__actions button[data-v-6a541b41]:hover:not(:disabled){color:var(--color-fg);border-color:var(--color-divider)}.entry__actions button[data-v-6a541b41]:disabled{opacity:.3;cursor:default}.entry__remove[data-v-6a541b41]:hover:not(:disabled){color:var(--color-err)}.entry__actions button[data-v-6a541b41]:focus-visible,.entry__head[data-v-6a541b41]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.entry__body[data-v-6a541b41]{padding:8px 10px 10px;border-top:1px solid var(--color-divider)}.object[data-v-fc101249]{margin-bottom:12px}.object__label[data-v-fc101249]{display:block;margin-bottom:6px;font-size:12px;font-weight:600;color:var(--d-text-muted, #6b7280)}.object__body[data-v-fc101249]{padding-left:10px;border-left:2px solid var(--d-border, #e5e7eb)}.object__untyped[data-v-fc101249]{margin:0;font-size:12px;color:var(--d-text-muted, #6b7280)}.set[data-v-2be1f1ee]{margin:0 0 7px;padding:0;border:0}.set__label[data-v-2be1f1ee]{padding:0;margin-bottom:4px;font-size:12px;color:var(--d-text-muted, #6b7280)}.field-row[data-v-2be1f1ee]{display:flex;align-items:flex-start;gap:6px}.field-row__control[data-v-2be1f1ee]{flex:1 1 auto;min-width:0}.field-row--bound[data-v-2be1f1ee]{border-left:2px solid var(--color-brand);padding-left:6px;margin-left:-8px}.bind[data-v-2be1f1ee]{width:24px;height:26px;flex:none;margin-top:0;font-family:var(--font-mono);font-size:var(--text-xs);font-style:italic;color:var(--color-dim);background-color:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-xs);cursor:pointer}.bind[data-v-2be1f1ee]:hover{color:var(--color-fg);border-color:var(--color-outline)}.bind.armed[data-v-2be1f1ee]{color:var(--color-accent);border-color:var(--color-accent)}.bind.on[data-v-2be1f1ee]{color:var(--color-brand);border-color:var(--color-brand);background-color:color-mix(in srgb,var(--color-brand) 14%,transparent)}.bind[data-v-2be1f1ee]:focus-visible{outline:2px solid var(--color-accent);outline-offset:1px}.settings-form[data-v-46f3758c]{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.settings-form[data-v-46f3758c] .uim-c-GroupWidget{padding-top:10px;margin-top:12px;border-top:1px solid var(--color-divider)}.settings-form[data-v-46f3758c] .uim-c-GroupWidget:first-child{padding-top:0;margin-top:0;border-top:0}.settings-form[data-v-46f3758c] .uim-group-label{display:block;margin-bottom:7px;font-family:var(--font-sans);font-size:var(--text-xs);font-weight:650;letter-spacing:.08em;text-transform:uppercase;color:var(--color-dim)}.settings-form__empty[data-v-46f3758c]{margin:0;padding:12px 0;font-size:var(--text-sm);color:var(--color-dim)}\n";})();
import { inject as Ct, watchEffect as Mi, onScopeDispose as pa, ref as pr, computed as S, watch as Dt, toValue as Ze, defineComponent as oe, createBlock as q, createCommentVNode as Oe, openBlock as N, resolveDynamicComponent as fa, mergeProps as Ta, createElementBlock as R, createElementVNode as le, createTextVNode as ka, toDisplayString as _e, unref as B, resolveComponent as Vi, Fragment as Tt, renderList as wt, createVNode as gr, provide as mr, withCtx as Ui, normalizeClass as Ca, mergeModels as Bi, useModel as Gi, onMounted as Wi, shallowRef as Da, markRaw as Hr } from "vue";
import { BasicEPackage as $i, BasicEClass as b, BasicEAttribute as m, BasicEReference as L, getEcorePackage as as, BasicEObject as St, BasicEFactory as Yi, EContentAdapter as xa, URI as Qr, EPackageRegistry as Ar, BasicResourceSet as ki, XMIResourceFactory as xi, registerEcorePackage as Xi } from "@emfts/core";
import { VariableWrapper as Zr, useTranslation as Gr } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DButton as Hi, DSelect as Ra, DInput as ur, DCheckbox as wa, DColorInput as ji } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { identifier as qi } from "org.eclipse.daanse.board.app.lib.api.variable";
import { component as Ki } from "@eclipse-daanse/tsm";
var zi = Object.defineProperty, Qi = (s, e, t) => e in s ? zi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, nr = (s, e, t) => Qi(s, typeof e != "symbol" ? e + "" : e, t);
const is = class a extends $i {
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
    const e = new b();
    e.setName("UIModel"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), a.Literals.U_I_MODEL = e;
    const t = new m();
    t.setName("name"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), a.Literals.U_I_MODEL__NAME = t;
    const r = new L();
    r.setContainment(!1), r.setName("targetClasses"), r.setLowerBound(0), r.setUpperBound(-1), e.getEStructuralFeatures().push(r), a.Literals.U_I_MODEL__TARGET_CLASSES = r;
    const i = new m();
    i.setName("priority"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), a.Literals.U_I_MODEL__PRIORITY = i;
    const u = new L();
    u.setContainment(!0), u.setName("filterExpression"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), a.Literals.U_I_MODEL__FILTER_EXPRESSION = u;
    const n = new L();
    n.setContainment(!0), n.setName("styles"), n.setLowerBound(0), n.setUpperBound(-1), e.getEStructuralFeatures().push(n), a.Literals.U_I_MODEL__STYLES = n;
    const l = new L();
    l.setContainment(!0), l.setName("templates"), l.setLowerBound(0), l.setUpperBound(-1), e.getEStructuralFeatures().push(l), a.Literals.U_I_MODEL__TEMPLATES = l;
    const g = new L();
    g.setContainment(!0), g.setName("components"), g.setLowerBound(1), g.setUpperBound(-1), e.getEStructuralFeatures().push(g), a.Literals.U_I_MODEL__COMPONENTS = g;
    const h = new b();
    h.setName("Component"), h.setAbstract(!0), h.setInterface(!1), this.getEClassifiers().push(h), h.setEPackage(this), a.Literals.COMPONENT = h;
    const c = new m();
    c.setName("name"), c.setLowerBound(1), c.setUpperBound(1), h.getEStructuralFeatures().push(c), a.Literals.COMPONENT__NAME = c;
    const E = new m();
    E.setName("group"), E.setLowerBound(0), E.setUpperBound(1), h.getEStructuralFeatures().push(E), a.Literals.COMPONENT__GROUP = E;
    const o = new L();
    o.setContainment(!1), o.setName("targetClasses"), o.setLowerBound(0), o.setUpperBound(-1), h.getEStructuralFeatures().push(o), a.Literals.COMPONENT__TARGET_CLASSES = o;
    const p = new L();
    p.setContainment(!1), p.setName("styles"), p.setLowerBound(0), p.setUpperBound(-1), h.getEStructuralFeatures().push(p), a.Literals.COMPONENT__STYLES = p;
    const D = new L();
    D.setContainment(!1), D.setName("children"), D.setLowerBound(0), D.setUpperBound(-1), h.getEStructuralFeatures().push(D), a.Literals.COMPONENT__CHILDREN = D;
    const G = new b();
    G.setName("FormView"), G.setAbstract(!1), G.setInterface(!1), this.getEClassifiers().push(G), G.setEPackage(this), a.Literals.FORM_VIEW = G;
    const H = new L();
    H.setContainment(!0), H.setName("fields"), H.setLowerBound(0), H.setUpperBound(-1), G.getEStructuralFeatures().push(H), a.Literals.FORM_VIEW__FIELDS = H;
    const f = new L();
    f.setContainment(!0), f.setName("validations"), f.setLowerBound(0), f.setUpperBound(-1), G.getEStructuralFeatures().push(f), a.Literals.FORM_VIEW__VALIDATIONS = f;
    const y = new L();
    y.setContainment(!0), y.setName("validationMappers"), y.setLowerBound(0), y.setUpperBound(-1), G.getEStructuralFeatures().push(y), a.Literals.FORM_VIEW__VALIDATION_MAPPERS = y;
    const W = new m();
    W.setName("mapperOrder"), W.setLowerBound(0), W.setUpperBound(1), G.getEStructuralFeatures().push(W), a.Literals.FORM_VIEW__MAPPER_ORDER = W;
    const A = new b();
    A.setName("TableView"), A.setAbstract(!1), A.setInterface(!1), this.getEClassifiers().push(A), A.setEPackage(this), a.Literals.TABLE_VIEW = A;
    const V = new L();
    V.setContainment(!0), V.setName("tableStyle"), V.setLowerBound(1), V.setUpperBound(1), A.getEStructuralFeatures().push(V), a.Literals.TABLE_VIEW__TABLE_STYLE = V;
    const K = new b();
    K.setName("SectionView"), K.setAbstract(!1), K.setInterface(!1), this.getEClassifiers().push(K), K.setEPackage(this), a.Literals.SECTION_VIEW = K;
    const U = new L();
    U.setContainment(!0), U.setName("sections"), U.setLowerBound(1), U.setUpperBound(-1), K.getEStructuralFeatures().push(U), a.Literals.SECTION_VIEW__SECTIONS = U;
    const Re = new b();
    Re.setName("TabView"), Re.setAbstract(!1), Re.setInterface(!1), this.getEClassifiers().push(Re), Re.setEPackage(this), a.Literals.TAB_VIEW = Re;
    const j = new L();
    j.setContainment(!0), j.setName("tabs"), j.setLowerBound(1), j.setUpperBound(-1), Re.getEStructuralFeatures().push(j), a.Literals.TAB_VIEW__TABS = j;
    const Pe = new b();
    Pe.setName("SummaryView"), Pe.setAbstract(!1), Pe.setInterface(!1), this.getEClassifiers().push(Pe), Pe.setEPackage(this), a.Literals.SUMMARY_VIEW = Pe;
    const Xe = new L();
    Xe.setContainment(!0), Xe.setName("summaryFields"), Xe.setLowerBound(1), Xe.setUpperBound(-1), Pe.getEStructuralFeatures().push(Xe), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS = Xe;
    const Me = new b();
    Me.setName("MasterDetail"), Me.setAbstract(!1), Me.setInterface(!1), this.getEClassifiers().push(Me), Me.setEPackage(this), a.Literals.MASTER_DETAIL = Me;
    const Je = new L();
    Je.setContainment(!0), Je.setName("master"), Je.setLowerBound(1), Je.setUpperBound(1), Me.getEStructuralFeatures().push(Je), a.Literals.MASTER_DETAIL__MASTER = Je;
    const He = new L();
    He.setContainment(!0), He.setName("detail"), He.setLowerBound(1), He.setUpperBound(1), Me.getEStructuralFeatures().push(He), a.Literals.MASTER_DETAIL__DETAIL = He;
    const ie = new b();
    ie.setName("WidgetComponent"), ie.setAbstract(!0), ie.setInterface(!1), this.getEClassifiers().push(ie), ie.setEPackage(this), a.Literals.WIDGET_COMPONENT = ie;
    const Ve = new L();
    Ve.setContainment(!1), Ve.setName("feature"), Ve.setLowerBound(0), Ve.setUpperBound(1), ie.getEStructuralFeatures().push(Ve), a.Literals.WIDGET_COMPONENT__FEATURE = Ve;
    const he = new m();
    he.setName("label"), he.setLowerBound(0), he.setUpperBound(1), ie.getEStructuralFeatures().push(he), a.Literals.WIDGET_COMPONENT__LABEL = he;
    const et = new m();
    et.setName("placeholder"), et.setLowerBound(0), et.setUpperBound(1), ie.getEStructuralFeatures().push(et), a.Literals.WIDGET_COMPONENT__PLACEHOLDER = et;
    const ne = new m();
    ne.setName("readOnly"), ne.setLowerBound(0), ne.setUpperBound(1), ie.getEStructuralFeatures().push(ne), a.Literals.WIDGET_COMPONENT__READ_ONLY = ne;
    const tt = new m();
    tt.setName("required"), tt.setLowerBound(0), tt.setUpperBound(1), ie.getEStructuralFeatures().push(tt), a.Literals.WIDGET_COMPONENT__REQUIRED = tt;
    const d = new L();
    d.setContainment(!0), d.setName("visibilityCondition"), d.setLowerBound(0), d.setUpperBound(1), ie.getEStructuralFeatures().push(d), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION = d;
    const T = new L();
    T.setContainment(!0), T.setName("validations"), T.setLowerBound(0), T.setUpperBound(-1), ie.getEStructuralFeatures().push(T), a.Literals.WIDGET_COMPONENT__VALIDATIONS = T;
    const v = new L();
    v.setContainment(!0), v.setName("validationMappers"), v.setLowerBound(0), v.setUpperBound(-1), ie.getEStructuralFeatures().push(v), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS = v;
    const z = new L();
    z.setContainment(!0), z.setName("bindings"), z.setLowerBound(0), z.setUpperBound(-1), ie.getEStructuralFeatures().push(z), a.Literals.WIDGET_COMPONENT__BINDINGS = z;
    const se = new b();
    se.setName("PropertyBinding"), se.setAbstract(!1), se.setInterface(!1), this.getEClassifiers().push(se), se.setEPackage(this), a.Literals.PROPERTY_BINDING = se;
    const mt = new m();
    mt.setName("property"), mt.setLowerBound(1), mt.setUpperBound(1), se.getEStructuralFeatures().push(mt), a.Literals.PROPERTY_BINDING__PROPERTY = mt;
    const we = new L();
    we.setContainment(!0), we.setName("expression"), we.setLowerBound(1), we.setUpperBound(1), se.getEStructuralFeatures().push(we), a.Literals.PROPERTY_BINDING__EXPRESSION = we;
    const ge = new b();
    ge.setName("InputWidget"), ge.setAbstract(!1), ge.setInterface(!1), this.getEClassifiers().push(ge), ge.setEPackage(this), a.Literals.INPUT_WIDGET = ge;
    const ps = new m();
    ps.setName("maxLength"), ps.setLowerBound(0), ps.setUpperBound(1), ge.getEStructuralFeatures().push(ps), a.Literals.INPUT_WIDGET__MAX_LENGTH = ps;
    const fs = new m();
    fs.setName("value"), fs.setLowerBound(0), fs.setUpperBound(1), ge.getEStructuralFeatures().push(fs), a.Literals.INPUT_WIDGET__VALUE = fs;
    const Ts = new m();
    Ts.setName("password"), Ts.setLowerBound(0), Ts.setUpperBound(1), ge.getEStructuralFeatures().push(Ts), a.Literals.INPUT_WIDGET__PASSWORD = Ts;
    const je = new b();
    je.setName("TextAreaWidget"), je.setAbstract(!1), je.setInterface(!1), this.getEClassifiers().push(je), je.setEPackage(this), a.Literals.TEXT_AREA_WIDGET = je;
    const Ss = new m();
    Ss.setName("rows"), Ss.setLowerBound(0), Ss.setUpperBound(1), je.getEStructuralFeatures().push(Ss), a.Literals.TEXT_AREA_WIDGET__ROWS = Ss;
    const ms = new m();
    ms.setName("maxLength"), ms.setLowerBound(0), ms.setUpperBound(1), je.getEStructuralFeatures().push(ms), a.Literals.TEXT_AREA_WIDGET__MAX_LENGTH = ms;
    const Is = new m();
    Is.setName("value"), Is.setLowerBound(0), Is.setUpperBound(1), je.getEStructuralFeatures().push(Is), a.Literals.TEXT_AREA_WIDGET__VALUE = Is;
    const Ue = new b();
    Ue.setName("NumberWidget"), Ue.setAbstract(!1), Ue.setInterface(!1), this.getEClassifiers().push(Ue), Ue.setEPackage(this), a.Literals.NUMBER_WIDGET = Ue;
    const Ns = new m();
    Ns.setName("min"), Ns.setLowerBound(0), Ns.setUpperBound(1), Ue.getEStructuralFeatures().push(Ns), a.Literals.NUMBER_WIDGET__MIN = Ns;
    const vs = new m();
    vs.setName("max"), vs.setLowerBound(0), vs.setUpperBound(1), Ue.getEStructuralFeatures().push(vs), a.Literals.NUMBER_WIDGET__MAX = vs;
    const Ls = new m();
    Ls.setName("step"), Ls.setLowerBound(0), Ls.setUpperBound(1), Ue.getEStructuralFeatures().push(Ls), a.Literals.NUMBER_WIDGET__STEP = Ls;
    const _s = new m();
    _s.setName("value"), _s.setLowerBound(0), _s.setUpperBound(1), Ue.getEStructuralFeatures().push(_s), a.Literals.NUMBER_WIDGET__VALUE = _s;
    const st = new b();
    st.setName("CheckboxWidget"), st.setAbstract(!1), st.setInterface(!1), this.getEClassifiers().push(st), st.setEPackage(this), a.Literals.CHECKBOX_WIDGET = st;
    const Os = new m();
    Os.setName("asToggle"), Os.setLowerBound(0), Os.setUpperBound(1), st.getEStructuralFeatures().push(Os), a.Literals.CHECKBOX_WIDGET__AS_TOGGLE = Os;
    const As = new m();
    As.setName("value"), As.setLowerBound(0), As.setUpperBound(1), st.getEStructuralFeatures().push(As), a.Literals.CHECKBOX_WIDGET__VALUE = As;
    const Be = new b();
    Be.setName("DateWidget"), Be.setAbstract(!1), Be.setInterface(!1), this.getEClassifiers().push(Be), Be.setEPackage(this), a.Literals.DATE_WIDGET = Be;
    const ys = new m();
    ys.setName("withTime"), ys.setLowerBound(0), ys.setUpperBound(1), Be.getEStructuralFeatures().push(ys), a.Literals.DATE_WIDGET__WITH_TIME = ys;
    const Cs = new m();
    Cs.setName("format"), Cs.setLowerBound(0), Cs.setUpperBound(1), Be.getEStructuralFeatures().push(Cs), a.Literals.DATE_WIDGET__FORMAT = Cs;
    const bt = new L();
    bt.setContainment(!1), bt.setName("constrains"), bt.setLowerBound(0), bt.setUpperBound(1), Be.getEStructuralFeatures().push(bt), a.Literals.DATE_WIDGET__CONSTRAINS = bt;
    const Ds = new m();
    Ds.setName("value"), Ds.setLowerBound(0), Ds.setUpperBound(1), Be.getEStructuralFeatures().push(Ds), a.Literals.DATE_WIDGET__VALUE = Ds;
    const qe = new b();
    qe.setName("ComboboxWidget"), qe.setAbstract(!1), qe.setInterface(!1), this.getEClassifiers().push(qe), qe.setEPackage(this), a.Literals.COMBOBOX_WIDGET = qe;
    const Pt = new L();
    Pt.setContainment(!0), Pt.setName("optionLabel"), Pt.setLowerBound(0), Pt.setUpperBound(1), qe.getEStructuralFeatures().push(Pt), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL = Pt;
    const Rs = new m();
    Rs.setName("minSearchLength"), Rs.setLowerBound(0), Rs.setUpperBound(1), qe.getEStructuralFeatures().push(Rs), a.Literals.COMBOBOX_WIDGET__MIN_SEARCH_LENGTH = Rs;
    const ws = new m();
    ws.setName("multiSelect"), ws.setLowerBound(0), ws.setUpperBound(1), qe.getEStructuralFeatures().push(ws), a.Literals.COMBOBOX_WIDGET__MULTI_SELECT = ws;
    const Ge = new b();
    Ge.setName("SelectWidget"), Ge.setAbstract(!1), Ge.setInterface(!1), this.getEClassifiers().push(Ge), Ge.setEPackage(this), a.Literals.SELECT_WIDGET = Ge;
    const Mt = new L();
    Mt.setContainment(!0), Mt.setName("optionLabel"), Mt.setLowerBound(0), Mt.setUpperBound(1), Ge.getEStructuralFeatures().push(Mt), a.Literals.SELECT_WIDGET__OPTION_LABEL = Mt;
    const Fs = new m();
    Fs.setName("multiSelect"), Fs.setLowerBound(0), Fs.setUpperBound(1), Ge.getEStructuralFeatures().push(Fs), a.Literals.SELECT_WIDGET__MULTI_SELECT = Fs;
    const bs = new m();
    bs.setName("asButtonGroup"), bs.setLowerBound(0), bs.setUpperBound(1), Ge.getEStructuralFeatures().push(bs), a.Literals.SELECT_WIDGET__AS_BUTTON_GROUP = bs;
    const Ps = new m();
    Ps.setName("values"), Ps.setLowerBound(0), Ps.setUpperBound(-1), Ge.getEStructuralFeatures().push(Ps), a.Literals.SELECT_WIDGET__VALUES = Ps;
    const Ae = new b();
    Ae.setName("AllFeatures"), Ae.setAbstract(!1), Ae.setInterface(!1), this.getEClassifiers().push(Ae), Ae.setEPackage(this), a.Literals.ALL_FEATURES = Ae;
    const Vt = new L();
    Vt.setContainment(!1), Vt.setName("with"), Vt.setLowerBound(0), Vt.setUpperBound(-1), Ae.getEStructuralFeatures().push(Vt), a.Literals.ALL_FEATURES__WITH = Vt;
    const Ut = new L();
    Ut.setContainment(!1), Ut.setName("eType"), Ut.setLowerBound(0), Ut.setUpperBound(-1), Ae.getEStructuralFeatures().push(Ut), a.Literals.ALL_FEATURES__E_TYPE = Ut;
    const Bt = new L();
    Bt.setContainment(!0), Bt.setName("filter"), Bt.setLowerBound(0), Bt.setUpperBound(1), Ae.getEStructuralFeatures().push(Bt), a.Literals.ALL_FEATURES__FILTER = Bt;
    const Gt = new L();
    Gt.setContainment(!1), Gt.setName("template"), Gt.setLowerBound(0), Gt.setUpperBound(1), Ae.getEStructuralFeatures().push(Gt), a.Literals.ALL_FEATURES__TEMPLATE = Gt;
    const Wt = new L();
    Wt.setContainment(!0), Wt.setName("cases"), Wt.setLowerBound(0), Wt.setUpperBound(-1), Ae.getEStructuralFeatures().push(Wt), a.Literals.ALL_FEATURES__CASES = Wt;
    const Ms = new m();
    Ms.setName("priority"), Ms.setLowerBound(0), Ms.setUpperBound(1), Ae.getEStructuralFeatures().push(Ms), a.Literals.ALL_FEATURES__PRIORITY = Ms;
    const rt = new b();
    rt.setName("TemplateCase"), rt.setAbstract(!1), rt.setInterface(!1), this.getEClassifiers().push(rt), rt.setEPackage(this), a.Literals.TEMPLATE_CASE = rt;
    const $t = new L();
    $t.setContainment(!0), $t.setName("when"), $t.setLowerBound(0), $t.setUpperBound(1), rt.getEStructuralFeatures().push($t), a.Literals.TEMPLATE_CASE__WHEN = $t;
    const Yt = new L();
    Yt.setContainment(!1), Yt.setName("widget"), Yt.setLowerBound(1), Yt.setUpperBound(1), rt.getEStructuralFeatures().push(Yt), a.Literals.TEMPLATE_CASE__WIDGET = Yt;
    const at = new b();
    at.setName("GroupWidget"), at.setAbstract(!1), at.setInterface(!1), this.getEClassifiers().push(at), at.setEPackage(this), a.Literals.GROUP_WIDGET = at;
    const kt = new L();
    kt.setContainment(!0), kt.setName("fields"), kt.setLowerBound(0), kt.setUpperBound(-1), at.getEStructuralFeatures().push(kt), a.Literals.GROUP_WIDGET__FIELDS = kt;
    const Vs = new m();
    Vs.setName("layout"), Vs.setLowerBound(0), Vs.setUpperBound(1), at.getEStructuralFeatures().push(Vs), a.Literals.GROUP_WIDGET__LAYOUT = Vs;
    const Ke = new b();
    Ke.setName("Conditional"), Ke.setAbstract(!1), Ke.setInterface(!1), this.getEClassifiers().push(Ke), Ke.setEPackage(this), a.Literals.CONDITIONAL = Ke;
    const xt = new L();
    xt.setContainment(!0), xt.setName("condition"), xt.setLowerBound(1), xt.setUpperBound(1), Ke.getEStructuralFeatures().push(xt), a.Literals.CONDITIONAL__CONDITION = xt;
    const Xt = new L();
    Xt.setContainment(!0), Xt.setName("then"), Xt.setLowerBound(0), Xt.setUpperBound(-1), Ke.getEStructuralFeatures().push(Xt), a.Literals.CONDITIONAL__THEN = Xt;
    const Ht = new L();
    Ht.setContainment(!0), Ht.setName("else"), Ht.setLowerBound(0), Ht.setUpperBound(-1), Ke.getEStructuralFeatures().push(Ht), a.Literals.CONDITIONAL__ELSE = Ht;
    const ze = new b();
    ze.setName("ForEach"), ze.setAbstract(!1), ze.setInterface(!1), this.getEClassifiers().push(ze), ze.setEPackage(this), a.Literals.FOR_EACH = ze;
    const jt = new L();
    jt.setContainment(!0), jt.setName("items"), jt.setLowerBound(1), jt.setUpperBound(1), ze.getEStructuralFeatures().push(jt), a.Literals.FOR_EACH__ITEMS = jt;
    const qt = new L();
    qt.setContainment(!0), qt.setName("body"), qt.setLowerBound(0), qt.setUpperBound(-1), ze.getEStructuralFeatures().push(qt), a.Literals.FOR_EACH__BODY = qt;
    const Us = new m();
    Us.setName("emptyText"), Us.setLowerBound(0), Us.setUpperBound(1), ze.getEStructuralFeatures().push(Us), a.Literals.FOR_EACH__EMPTY_TEXT = Us;
    const it = new b();
    it.setName("ReferenceLinkWidget"), it.setAbstract(!1), it.setInterface(!1), this.getEClassifiers().push(it), it.setEPackage(this), a.Literals.REFERENCE_LINK_WIDGET = it;
    const Kt = new L();
    Kt.setContainment(!0), Kt.setName("displayExpression"), Kt.setLowerBound(0), Kt.setUpperBound(1), it.getEStructuralFeatures().push(Kt), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION = Kt;
    const Bs = new m();
    Bs.setName("targetRoute"), Bs.setLowerBound(0), Bs.setUpperBound(1), it.getEStructuralFeatures().push(Bs), a.Literals.REFERENCE_LINK_WIDGET__TARGET_ROUTE = Bs;
    const We = new b();
    We.setName("UIModelOverlay"), We.setAbstract(!1), We.setInterface(!1), this.getEClassifiers().push(We), We.setEPackage(this), a.Literals.U_I_MODEL_OVERLAY = We;
    const Gs = new m();
    Gs.setName("name"), Gs.setLowerBound(0), Gs.setUpperBound(1), We.getEStructuralFeatures().push(Gs), a.Literals.U_I_MODEL_OVERLAY__NAME = Gs;
    const Ws = new m();
    Ws.setName("priority"), Ws.setLowerBound(0), Ws.setUpperBound(1), We.getEStructuralFeatures().push(Ws), a.Literals.U_I_MODEL_OVERLAY__PRIORITY = Ws;
    const zt = new L();
    zt.setContainment(!0), zt.setName("templates"), zt.setLowerBound(0), zt.setUpperBound(-1), We.getEStructuralFeatures().push(zt), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES = zt;
    const Qt = new L();
    Qt.setContainment(!0), Qt.setName("cases"), Qt.setLowerBound(0), Qt.setUpperBound(-1), We.getEStructuralFeatures().push(Qt), a.Literals.U_I_MODEL_OVERLAY__CASES = Qt;
    const ut = new b();
    ut.setName("Style"), ut.setAbstract(!0), ut.setInterface(!0), this.getEClassifiers().push(ut), ut.setEPackage(this), a.Literals.STYLE = ut;
    const $s = new m();
    $s.setName("name"), $s.setLowerBound(0), $s.setUpperBound(1), ut.getEStructuralFeatures().push($s), a.Literals.STYLE__NAME = $s;
    const Ys = new m();
    Ys.setName("group"), Ys.setLowerBound(0), Ys.setUpperBound(1), ut.getEStructuralFeatures().push(Ys), a.Literals.STYLE__GROUP = Ys;
    const $e = new b();
    $e.setName("BaseStyle"), $e.setAbstract(!0), $e.setInterface(!1), this.getEClassifiers().push($e), $e.setEPackage(this), a.Literals.BASE_STYLE = $e;
    const Zt = new L();
    Zt.setContainment(!1), Zt.setName("extends"), Zt.setLowerBound(0), Zt.setUpperBound(1), $e.getEStructuralFeatures().push(Zt), a.Literals.BASE_STYLE__EXTENDS = Zt;
    const ks = new m();
    ks.setName("css"), ks.setLowerBound(0), ks.setUpperBound(1), $e.getEStructuralFeatures().push(ks), a.Literals.BASE_STYLE__CSS = ks;
    const xs = new m();
    xs.setName("vueComponent"), xs.setLowerBound(0), xs.setUpperBound(1), $e.getEStructuralFeatures().push(xs), a.Literals.BASE_STYLE__VUE_COMPONENT = xs;
    const Jt = new L();
    Jt.setContainment(!0), Jt.setName("visibilityCondition"), Jt.setLowerBound(0), Jt.setUpperBound(1), $e.getEStructuralFeatures().push(Jt), a.Literals.BASE_STYLE__VISIBILITY_CONDITION = Jt;
    const nt = new b();
    nt.setName("LayoutStyle"), nt.setAbstract(!1), nt.setInterface(!1), this.getEClassifiers().push(nt), nt.setEPackage(this), a.Literals.LAYOUT_STYLE = nt;
    const Xs = new m();
    Xs.setName("layout"), Xs.setLowerBound(0), Xs.setUpperBound(1), nt.getEStructuralFeatures().push(Xs), a.Literals.LAYOUT_STYLE__LAYOUT = Xs;
    const Hs = new m();
    Hs.setName("order"), Hs.setLowerBound(0), Hs.setUpperBound(1), nt.getEStructuralFeatures().push(Hs), a.Literals.LAYOUT_STYLE__ORDER = Hs;
    const Fe = new b();
    Fe.setName("WidgetStyle"), Fe.setAbstract(!1), Fe.setInterface(!1), this.getEClassifiers().push(Fe), Fe.setEPackage(this), a.Literals.WIDGET_STYLE = Fe;
    const es = new L();
    es.setContainment(!1), es.setName("feature"), es.setLowerBound(0), es.setUpperBound(1), Fe.getEStructuralFeatures().push(es), a.Literals.WIDGET_STYLE__FEATURE = es;
    const js = new m();
    js.setName("widgetType"), js.setLowerBound(0), js.setUpperBound(1), Fe.getEStructuralFeatures().push(js), a.Literals.WIDGET_STYLE__WIDGET_TYPE = js;
    const qs = new m();
    qs.setName("label"), qs.setLowerBound(0), qs.setUpperBound(1), Fe.getEStructuralFeatures().push(qs), a.Literals.WIDGET_STYLE__LABEL = qs;
    const Ks = new m();
    Ks.setName("readOnly"), Ks.setLowerBound(0), Ks.setUpperBound(1), Fe.getEStructuralFeatures().push(Ks), a.Literals.WIDGET_STYLE__READ_ONLY = Ks;
    const zs = new m();
    zs.setName("order"), zs.setLowerBound(0), zs.setUpperBound(1), Fe.getEStructuralFeatures().push(zs), a.Literals.WIDGET_STYLE__ORDER = zs;
    const It = new b();
    It.setName("TableStyle"), It.setAbstract(!1), It.setInterface(!1), this.getEClassifiers().push(It), It.setEPackage(this), a.Literals.TABLE_STYLE = It;
    const ts = new L();
    ts.setContainment(!0), ts.setName("columns"), ts.setLowerBound(1), ts.setUpperBound(-1), It.getEStructuralFeatures().push(ts), a.Literals.TABLE_STYLE__COLUMNS = ts;
    const lt = new b();
    lt.setName("Expression"), lt.setAbstract(!1), lt.setInterface(!1), this.getEClassifiers().push(lt), lt.setEPackage(this), a.Literals.EXPRESSION = lt;
    const Qs = new m();
    Qs.setName("language"), Qs.setLowerBound(1), Qs.setUpperBound(1), lt.getEStructuralFeatures().push(Qs), a.Literals.EXPRESSION__LANGUAGE = Qs;
    const Zs = new m();
    Zs.setName("body"), Zs.setLowerBound(1), Zs.setUpperBound(1), lt.getEStructuralFeatures().push(Zs), a.Literals.EXPRESSION__BODY = Zs;
    const ot = new b();
    ot.setName("ValidationExpression"), ot.setAbstract(!1), ot.setInterface(!1), this.getEClassifiers().push(ot), ot.setEPackage(this), a.Literals.VALIDATION_EXPRESSION = ot;
    const Js = new m();
    Js.setName("defaultMessage"), Js.setLowerBound(0), Js.setUpperBound(1), ot.getEStructuralFeatures().push(Js), a.Literals.VALIDATION_EXPRESSION__DEFAULT_MESSAGE = Js;
    const er = new m();
    er.setName("severity"), er.setLowerBound(0), er.setUpperBound(1), ot.getEStructuralFeatures().push(er), a.Literals.VALIDATION_EXPRESSION__SEVERITY = er;
    const de = new b();
    de.setName("ValidationMessageMapper"), de.setAbstract(!1), de.setInterface(!1), this.getEClassifiers().push(de), de.setEPackage(this), a.Literals.VALIDATION_MESSAGE_MAPPER = de;
    const tr = new m();
    tr.setName("order"), tr.setLowerBound(0), tr.setUpperBound(1), de.getEStructuralFeatures().push(tr), a.Literals.VALIDATION_MESSAGE_MAPPER__ORDER = tr;
    const sr = new m();
    sr.setName("matchCode"), sr.setLowerBound(0), sr.setUpperBound(1), de.getEStructuralFeatures().push(sr), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_CODE = sr;
    const rr = new m();
    rr.setName("matchSeverity"), rr.setLowerBound(0), rr.setUpperBound(1), de.getEStructuralFeatures().push(rr), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_SEVERITY = rr;
    const ss = new L();
    ss.setContainment(!0), ss.setName("matchExpression"), ss.setLowerBound(0), ss.setUpperBound(1), de.getEStructuralFeatures().push(ss), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION = ss;
    const ar = new m();
    ar.setName("mappedText"), ar.setLowerBound(0), ar.setUpperBound(1), de.getEStructuralFeatures().push(ar), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT = ar;
    const rs = new L();
    rs.setContainment(!0), rs.setName("mappedTextExpression"), rs.setLowerBound(0), rs.setUpperBound(1), de.getEStructuralFeatures().push(rs), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION = rs;
    const ir = new m();
    ir.setName("mappedSeverity"), ir.setLowerBound(0), ir.setUpperBound(1), de.getEStructuralFeatures().push(ir), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_SEVERITY = ir, a.Literals.FORM_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.TABLE_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.SECTION_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.TAB_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.SUMMARY_VIEW.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.MASTER_DETAIL.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.WIDGET_COMPONENT.getESuperTypes().push(a.Literals.COMPONENT), a.Literals.INPUT_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.TEXT_AREA_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.NUMBER_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.CHECKBOX_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.DATE_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.COMBOBOX_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.SELECT_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.ALL_FEATURES.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.GROUP_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.FOR_EACH.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.REFERENCE_LINK_WIDGET.getESuperTypes().push(a.Literals.WIDGET_COMPONENT), a.Literals.BASE_STYLE.getESuperTypes().push(a.Literals.STYLE), a.Literals.LAYOUT_STYLE.getESuperTypes().push(a.Literals.BASE_STYLE), a.Literals.WIDGET_STYLE.getESuperTypes().push(a.Literals.BASE_STYLE), a.Literals.TABLE_STYLE.getESuperTypes().push(a.Literals.WIDGET_STYLE), a.Literals.VALIDATION_EXPRESSION.getESuperTypes().push(a.Literals.EXPRESSION), a.Literals.U_I_MODEL__TARGET_CLASSES.setEType(as().getEClassifier("EClass")), a.Literals.U_I_MODEL__FILTER_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.U_I_MODEL__STYLES.setEType(a.Literals.BASE_STYLE), a.Literals.U_I_MODEL__TEMPLATES.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.U_I_MODEL__COMPONENTS.setEType(a.Literals.COMPONENT), a.Literals.COMPONENT__TARGET_CLASSES.setEType(as().getEClassifier("EClass")), a.Literals.COMPONENT__STYLES.setEType(a.Literals.BASE_STYLE), a.Literals.COMPONENT__CHILDREN.setEType(a.Literals.COMPONENT), a.Literals.FORM_VIEW__FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.FORM_VIEW__VALIDATIONS.setEType(a.Literals.VALIDATION_EXPRESSION), a.Literals.FORM_VIEW__VALIDATION_MAPPERS.setEType(a.Literals.VALIDATION_MESSAGE_MAPPER), a.Literals.TABLE_VIEW__TABLE_STYLE.setEType(a.Literals.TABLE_STYLE), a.Literals.SECTION_VIEW__SECTIONS.setEType(a.Literals.FORM_VIEW), a.Literals.TAB_VIEW__TABS.setEType(a.Literals.COMPONENT), a.Literals.SUMMARY_VIEW__SUMMARY_FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.MASTER_DETAIL__MASTER.setEType(a.Literals.TABLE_VIEW), a.Literals.MASTER_DETAIL__DETAIL.setEType(a.Literals.COMPONENT), a.Literals.WIDGET_COMPONENT__FEATURE.setEType(as().getEClassifier("EStructuralFeature")), a.Literals.WIDGET_COMPONENT__VISIBILITY_CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.WIDGET_COMPONENT__VALIDATIONS.setEType(a.Literals.VALIDATION_EXPRESSION), a.Literals.WIDGET_COMPONENT__VALIDATION_MAPPERS.setEType(a.Literals.VALIDATION_MESSAGE_MAPPER), a.Literals.WIDGET_COMPONENT__BINDINGS.setEType(a.Literals.PROPERTY_BINDING), a.Literals.PROPERTY_BINDING__EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.DATE_WIDGET__CONSTRAINS.setEType(a.Literals.EXPRESSION), a.Literals.COMBOBOX_WIDGET__OPTION_LABEL.setEType(a.Literals.EXPRESSION), a.Literals.SELECT_WIDGET__OPTION_LABEL.setEType(a.Literals.EXPRESSION), a.Literals.ALL_FEATURES__WITH.setEType(as().getEClassifier("EStructuralFeature")), a.Literals.ALL_FEATURES__E_TYPE.setEType(as().getEClassifier("EClassifier")), a.Literals.ALL_FEATURES__FILTER.setEType(a.Literals.EXPRESSION), a.Literals.ALL_FEATURES__TEMPLATE.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.ALL_FEATURES__CASES.setEType(a.Literals.TEMPLATE_CASE), a.Literals.TEMPLATE_CASE__WHEN.setEType(a.Literals.EXPRESSION), a.Literals.TEMPLATE_CASE__WIDGET.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.GROUP_WIDGET__FIELDS.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL__CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.CONDITIONAL__THEN.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.CONDITIONAL__ELSE.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.FOR_EACH__ITEMS.setEType(a.Literals.EXPRESSION), a.Literals.FOR_EACH__BODY.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.REFERENCE_LINK_WIDGET__DISPLAY_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.U_I_MODEL_OVERLAY__TEMPLATES.setEType(a.Literals.WIDGET_COMPONENT), a.Literals.U_I_MODEL_OVERLAY__CASES.setEType(a.Literals.TEMPLATE_CASE), a.Literals.BASE_STYLE__EXTENDS.setEType(a.Literals.BASE_STYLE), a.Literals.BASE_STYLE__VISIBILITY_CONDITION.setEType(a.Literals.EXPRESSION), a.Literals.WIDGET_STYLE__FEATURE.setEType(as().getEClassifier("EStructuralFeature")), a.Literals.TABLE_STYLE__COLUMNS.setEType(a.Literals.WIDGET_STYLE), a.Literals.VALIDATION_MESSAGE_MAPPER__MATCH_EXPRESSION.setEType(a.Literals.EXPRESSION), a.Literals.VALIDATION_MESSAGE_MAPPER__MAPPED_TEXT_EXPRESSION.setEType(a.Literals.EXPRESSION);
  }
};
nr(is, "eNAME", "uimodel"), nr(is, "eNS_URI", "http://uimodel/1.0"), nr(is, "eNS_PREFIX", "uimodel"), // Singleton instance
nr(is, "_instance"), /**
* Literals for quick access to metaclasses and features
*/
nr(is, "Literals", {
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
let w = is;
var Zi = Object.defineProperty, Ji = (s, e, t) => e in s ? Zi(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ce = (s, e, t) => Ji(s, typeof e != "symbol" ? e + "" : e, t);
const ct = class _ extends St {
  constructor() {
    super(...arguments), ce(this, "_name"), ce(this, "_targetClasses", []), ce(this, "_priority", 0), ce(this, "_filterExpression"), ce(this, "_styles", []), ce(this, "_templates", []), ce(this, "_components", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.U_I_MODEL;
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
let eu = ct;
const jr = {
  FIELD_THEN_FORM: "FIELD_THEN_FORM"
};
var tu = Object.defineProperty, su = (s, e, t) => e in s ? tu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ke = (s, e, t) => su(s, typeof e != "symbol" ? e + "" : e, t);
const us = class P extends St {
  constructor() {
    super(...arguments), ke(this, "_name", ""), ke(this, "_group"), ke(this, "_targetClasses", []), ke(this, "_styles", []), ke(this, "_children", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.COMPONENT;
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
ke(us, "NAME", 0), ke(us, "GROUP", 1), ke(us, "TARGET_CLASSES", 2), ke(us, "STYLES", 3), ke(us, "CHILDREN", 4);
let Ft = us;
var ru = Object.defineProperty, au = (s, e, t) => e in s ? ru(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ht = (s, e, t) => au(s, typeof e != "symbol" ? e + "" : e, t);
const lr = class $ extends Ft {
  constructor() {
    super(...arguments), ht(this, "_fields", []), ht(this, "_validations", []), ht(this, "_validationMappers", []), ht(this, "_mapperOrder", jr.FIELD_THEN_FORM);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.FORM_VIEW;
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
      getFeature: () => this.eClass().getEStructuralFeature($.FIELDS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.FIELDS,
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
      getFeature: () => this.eClass().getEStructuralFeature($.VALIDATIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.VALIDATIONS,
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
      getFeature: () => this.eClass().getEStructuralFeature($.VALIDATION_MAPPERS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.VALIDATION_MAPPERS,
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
      getFeature: () => this.eClass().getEStructuralFeature($.MAPPER_ORDER),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $.MAPPER_ORDER,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case $.FIELDS:
        return this.fields;
      case $.VALIDATIONS:
        return this.validations;
      case $.VALIDATION_MAPPERS:
        return this.validationMappers;
      case $.MAPPER_ORDER:
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
      case $.FIELDS:
        this.fields = t, super.eSet(e, t);
        break;
      case $.VALIDATIONS:
        this.validations = t, super.eSet(e, t);
        break;
      case $.VALIDATION_MAPPERS:
        this.validationMappers = t, super.eSet(e, t);
        break;
      case $.MAPPER_ORDER:
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
      case $.FIELDS:
        return this._fields !== void 0 && this._fields.length > 0;
      case $.VALIDATIONS:
        return this._validations !== void 0 && this._validations.length > 0;
      case $.VALIDATION_MAPPERS:
        return this._validationMappers !== void 0 && this._validationMappers.length > 0;
      case $.MAPPER_ORDER:
        return this._mapperOrder !== jr.FIELD_THEN_FORM;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case $.FIELDS:
        this._fields = [];
        return;
      case $.VALIDATIONS:
        this._validations = [];
        return;
      case $.VALIDATION_MAPPERS:
        this._validationMappers = [];
        return;
      case $.MAPPER_ORDER:
        this._mapperOrder = jr.FIELD_THEN_FORM;
        return;
      default:
        super.eUnset(e);
    }
  }
};
ht(lr, "FIELDS", 5), ht(lr, "VALIDATIONS", 6), ht(lr, "VALIDATION_MAPPERS", 7), ht(lr, "MAPPER_ORDER", 8);
let iu = lr;
var uu = Object.defineProperty, nu = (s, e, t) => e in s ? uu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Xa = (s, e, t) => nu(s, typeof e != "symbol" ? e + "" : e, t);
const Ha = class Nt extends Ft {
  constructor() {
    super(...arguments), Xa(this, "_tableStyle");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.TABLE_VIEW;
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
Xa(Ha, "TABLE_STYLE", 5);
let lu = Ha;
var ou = Object.defineProperty, cu = (s, e, t) => e in s ? ou(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ja = (s, e, t) => cu(s, typeof e != "symbol" ? e + "" : e, t);
const qa = class vt extends Ft {
  constructor() {
    super(...arguments), ja(this, "_sections", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.SECTION_VIEW;
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
ja(qa, "SECTIONS", 5);
let Eu = qa;
var hu = Object.defineProperty, gu = (s, e, t) => e in s ? hu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ka = (s, e, t) => gu(s, typeof e != "symbol" ? e + "" : e, t);
const za = class Lt extends Ft {
  constructor() {
    super(...arguments), Ka(this, "_tabs", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.TAB_VIEW;
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
Ka(za, "TABS", 5);
let du = za;
var pu = Object.defineProperty, fu = (s, e, t) => e in s ? pu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Qa = (s, e, t) => fu(s, typeof e != "symbol" ? e + "" : e, t);
const Za = class _t extends Ft {
  constructor() {
    super(...arguments), Qa(this, "_summaryFields", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.SUMMARY_VIEW;
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
Qa(Za, "SUMMARY_FIELDS", 5);
let Tu = Za;
var Su = Object.defineProperty, mu = (s, e, t) => e in s ? Su(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, yr = (s, e, t) => mu(s, typeof e != "symbol" ? e + "" : e, t);
const Jr = class pe extends Ft {
  constructor() {
    super(...arguments), yr(this, "_master"), yr(this, "_detail");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.MASTER_DETAIL;
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
yr(Jr, "MASTER", 5), yr(Jr, "DETAIL", 6);
let Iu = Jr;
var Nu = Object.defineProperty, vu = (s, e, t) => e in s ? Nu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Cr = (s, e, t) => vu(s, typeof e != "symbol" ? e + "" : e, t);
const ea = class fe extends St {
  constructor() {
    super(...arguments), Cr(this, "_property", ""), Cr(this, "_expression");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.PROPERTY_BINDING;
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
Cr(ea, "PROPERTY", 0), Cr(ea, "EXPRESSION", 1);
let Lu = ea;
var _u = Object.defineProperty, Ou = (s, e, t) => e in s ? _u(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, re = (s, e, t) => Ou(s, typeof e != "symbol" ? e + "" : e, t);
const Ye = class I extends Ft {
  constructor() {
    super(...arguments), re(this, "_feature"), re(this, "_label"), re(this, "_placeholder"), re(this, "_readOnly"), re(this, "_required"), re(this, "_visibilityCondition"), re(this, "_validations", []), re(this, "_validationMappers", []), re(this, "_bindings", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.WIDGET_COMPONENT;
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
re(Ye, "FEATURE", 5), re(Ye, "LABEL", 6), re(Ye, "PLACEHOLDER", 7), re(Ye, "READ_ONLY", 8), re(Ye, "REQUIRED", 9), re(Ye, "VISIBILITY_CONDITION", 10), re(Ye, "VALIDATIONS", 11), re(Ye, "VALIDATION_MAPPERS", 12), re(Ye, "BINDINGS", 13);
let De = Ye;
var Au = Object.defineProperty, yu = (s, e, t) => e in s ? Au(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ls = (s, e, t) => yu(s, typeof e != "symbol" ? e + "" : e, t);
const Ir = class Q extends De {
  constructor() {
    super(...arguments), ls(this, "_maxLength"), ls(this, "_value"), ls(this, "_password");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.INPUT_WIDGET;
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
  get password() {
    return this._password;
  }
  set password(e) {
    const t = this._password;
    this._password = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Q.PASSWORD),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Q.PASSWORD,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Q.MAX_LENGTH:
        return this.maxLength;
      case Q.VALUE:
        return this.value;
      case Q.PASSWORD:
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
      case Q.MAX_LENGTH:
        this.maxLength = t, super.eSet(e, t);
        break;
      case Q.VALUE:
        this.value = t, super.eSet(e, t);
        break;
      case Q.PASSWORD:
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
      case Q.MAX_LENGTH:
        return this._maxLength !== void 0;
      case Q.VALUE:
        return this._value !== void 0;
      case Q.PASSWORD:
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
      case Q.MAX_LENGTH:
        this._maxLength = void 0;
        return;
      case Q.VALUE:
        this._value = void 0;
        return;
      case Q.PASSWORD:
        this._password = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
ls(Ir, "MAX_LENGTH", 14), ls(Ir, "VALUE", 15), ls(Ir, "PASSWORD", 16);
let Cu = Ir;
var Du = Object.defineProperty, Ru = (s, e, t) => e in s ? Du(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, os = (s, e, t) => Ru(s, typeof e != "symbol" ? e + "" : e, t);
const Nr = class Z extends De {
  constructor() {
    super(...arguments), os(this, "_rows", 4), os(this, "_maxLength"), os(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.TEXT_AREA_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(Z.ROWS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Z.ROWS,
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
      getFeature: () => this.eClass().getEStructuralFeature(Z.MAX_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Z.MAX_LENGTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(Z.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Z.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case Z.ROWS:
        return this.rows;
      case Z.MAX_LENGTH:
        return this.maxLength;
      case Z.VALUE:
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
      case Z.ROWS:
        this.rows = t, super.eSet(e, t);
        break;
      case Z.MAX_LENGTH:
        this.maxLength = t, super.eSet(e, t);
        break;
      case Z.VALUE:
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
      case Z.ROWS:
        return this._rows !== 4;
      case Z.MAX_LENGTH:
        return this._maxLength !== void 0;
      case Z.VALUE:
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
      case Z.ROWS:
        this._rows = 4;
        return;
      case Z.MAX_LENGTH:
        this._maxLength = void 0;
        return;
      case Z.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
os(Nr, "ROWS", 14), os(Nr, "MAX_LENGTH", 15), os(Nr, "VALUE", 16);
let wu = Nr;
var Fu = Object.defineProperty, bu = (s, e, t) => e in s ? Fu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, gt = (s, e, t) => bu(s, typeof e != "symbol" ? e + "" : e, t);
const or = class Y extends De {
  constructor() {
    super(...arguments), gt(this, "_min"), gt(this, "_max"), gt(this, "_step", 1), gt(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.NUMBER_WIDGET;
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
gt(or, "MIN", 14), gt(or, "MAX", 15), gt(or, "STEP", 16), gt(or, "VALUE", 17);
let Pu = or;
var Mu = Object.defineProperty, Vu = (s, e, t) => e in s ? Mu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Dr = (s, e, t) => Vu(s, typeof e != "symbol" ? e + "" : e, t);
const ta = class Te extends De {
  constructor() {
    super(...arguments), Dr(this, "_asToggle"), Dr(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.CHECKBOX_WIDGET;
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
Dr(ta, "AS_TOGGLE", 14), Dr(ta, "VALUE", 15);
let Uu = ta;
var Bu = Object.defineProperty, Gu = (s, e, t) => e in s ? Bu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, dt = (s, e, t) => Gu(s, typeof e != "symbol" ? e + "" : e, t);
const cr = class k extends De {
  constructor() {
    super(...arguments), dt(this, "_withTime"), dt(this, "_format", "DD.MM.YYYY"), dt(this, "_constrains"), dt(this, "_value");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.DATE_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(k.WITH_TIME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.WITH_TIME,
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
      getFeature: () => this.eClass().getEStructuralFeature(k.FORMAT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.FORMAT,
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
      getFeature: () => this.eClass().getEStructuralFeature(k.CONSTRAINS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => k.CONSTRAINS,
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
      case k.WITH_TIME:
        return this.withTime;
      case k.FORMAT:
        return this.format;
      case k.CONSTRAINS:
        return this.constrains;
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
      case k.WITH_TIME:
        this.withTime = t, super.eSet(e, t);
        break;
      case k.FORMAT:
        this.format = t, super.eSet(e, t);
        break;
      case k.CONSTRAINS:
        this.constrains = t, super.eSet(e, t);
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
      case k.WITH_TIME:
        return this._withTime !== void 0;
      case k.FORMAT:
        return this._format !== "DD.MM.YYYY";
      case k.CONSTRAINS:
        return this._constrains !== void 0;
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
      case k.WITH_TIME:
        this._withTime = void 0;
        return;
      case k.FORMAT:
        this._format = "DD.MM.YYYY";
        return;
      case k.CONSTRAINS:
        this._constrains = void 0;
        return;
      case k.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
dt(cr, "WITH_TIME", 14), dt(cr, "FORMAT", 15), dt(cr, "CONSTRAINS", 16), dt(cr, "VALUE", 17);
let Wu = cr;
var $u = Object.defineProperty, Yu = (s, e, t) => e in s ? $u(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, cs = (s, e, t) => Yu(s, typeof e != "symbol" ? e + "" : e, t);
const vr = class J extends De {
  constructor() {
    super(...arguments), cs(this, "_optionLabel"), cs(this, "_minSearchLength", 2), cs(this, "_multiSelect");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.COMBOBOX_WIDGET;
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
      getFeature: () => this.eClass().getEStructuralFeature(J.OPTION_LABEL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => J.OPTION_LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(J.MIN_SEARCH_LENGTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => J.MIN_SEARCH_LENGTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(J.MULTI_SELECT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => J.MULTI_SELECT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case J.OPTION_LABEL:
        return this.optionLabel;
      case J.MIN_SEARCH_LENGTH:
        return this.minSearchLength;
      case J.MULTI_SELECT:
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
      case J.OPTION_LABEL:
        this.optionLabel = t, super.eSet(e, t);
        break;
      case J.MIN_SEARCH_LENGTH:
        this.minSearchLength = t, super.eSet(e, t);
        break;
      case J.MULTI_SELECT:
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
      case J.OPTION_LABEL:
        return this._optionLabel !== void 0;
      case J.MIN_SEARCH_LENGTH:
        return this._minSearchLength !== 2;
      case J.MULTI_SELECT:
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
      case J.OPTION_LABEL:
        this._optionLabel = void 0;
        return;
      case J.MIN_SEARCH_LENGTH:
        this._minSearchLength = 2;
        return;
      case J.MULTI_SELECT:
        this._multiSelect = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
cs(vr, "OPTION_LABEL", 14), cs(vr, "MIN_SEARCH_LENGTH", 15), cs(vr, "MULTI_SELECT", 16);
let ku = vr;
var xu = Object.defineProperty, Xu = (s, e, t) => e in s ? xu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, pt = (s, e, t) => Xu(s, typeof e != "symbol" ? e + "" : e, t);
const Er = class x extends De {
  constructor() {
    super(...arguments), pt(this, "_optionLabel"), pt(this, "_multiSelect"), pt(this, "_asButtonGroup"), pt(this, "_values", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.SELECT_WIDGET;
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
  get asButtonGroup() {
    return this._asButtonGroup;
  }
  set asButtonGroup(e) {
    const t = this._asButtonGroup;
    this._asButtonGroup = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.AS_BUTTON_GROUP),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.AS_BUTTON_GROUP,
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
      getFeature: () => this.eClass().getEStructuralFeature(x.VALUES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.VALUES,
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
      case x.MULTI_SELECT:
        return this.multiSelect;
      case x.AS_BUTTON_GROUP:
        return this.asButtonGroup;
      case x.VALUES:
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
      case x.OPTION_LABEL:
        this.optionLabel = t, super.eSet(e, t);
        break;
      case x.MULTI_SELECT:
        this.multiSelect = t, super.eSet(e, t);
        break;
      case x.AS_BUTTON_GROUP:
        this.asButtonGroup = t, super.eSet(e, t);
        break;
      case x.VALUES:
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
      case x.OPTION_LABEL:
        return this._optionLabel !== void 0;
      case x.MULTI_SELECT:
        return this._multiSelect !== void 0;
      case x.AS_BUTTON_GROUP:
        return this._asButtonGroup !== void 0;
      case x.VALUES:
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
      case x.OPTION_LABEL:
        this._optionLabel = void 0;
        return;
      case x.MULTI_SELECT:
        this._multiSelect = void 0;
        return;
      case x.AS_BUTTON_GROUP:
        this._asButtonGroup = void 0;
        return;
      case x.VALUES:
        this._values = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
pt(Er, "OPTION_LABEL", 14), pt(Er, "MULTI_SELECT", 15), pt(Er, "AS_BUTTON_GROUP", 16), pt(Er, "VALUES", 17);
let Hu = Er;
var ju = Object.defineProperty, qu = (s, e, t) => e in s ? ju(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ye = (s, e, t) => qu(s, typeof e != "symbol" ? e + "" : e, t);
const Ot = class C extends De {
  constructor() {
    super(...arguments), ye(this, "_with", []), ye(this, "_eType", []), ye(this, "_filter"), ye(this, "_template"), ye(this, "_cases", []), ye(this, "_priority", 0);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.ALL_FEATURES;
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
ye(Ot, "WITH", 14), ye(Ot, "E_TYPE", 15), ye(Ot, "FILTER", 16), ye(Ot, "TEMPLATE", 17), ye(Ot, "CASES", 18), ye(Ot, "PRIORITY", 19);
let Ku = Ot;
var zu = Object.defineProperty, Qu = (s, e, t) => e in s ? zu(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Rr = (s, e, t) => Qu(s, typeof e != "symbol" ? e + "" : e, t);
const sa = class Se extends St {
  constructor() {
    super(...arguments), Rr(this, "_when"), Rr(this, "_widget");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.TEMPLATE_CASE;
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
Rr(sa, "WHEN", 0), Rr(sa, "WIDGET", 1);
let Zu = sa;
const qr = {
  VERTICAL: "VERTICAL"
};
var Ju = Object.defineProperty, en = (s, e, t) => e in s ? Ju(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, wr = (s, e, t) => en(s, typeof e != "symbol" ? e + "" : e, t);
const ra = class me extends De {
  constructor() {
    super(...arguments), wr(this, "_fields", []), wr(this, "_layout", qr.VERTICAL);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.GROUP_WIDGET;
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
        return this._layout !== qr.VERTICAL;
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
        this._layout = qr.VERTICAL;
        return;
      default:
        super.eUnset(e);
    }
  }
};
wr(ra, "FIELDS", 14), wr(ra, "LAYOUT", 15);
let tn = ra;
var sn = Object.defineProperty, rn = (s, e, t) => e in s ? sn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Es = (s, e, t) => rn(s, typeof e != "symbol" ? e + "" : e, t);
const Lr = class ee extends De {
  constructor() {
    super(...arguments), Es(this, "_condition"), Es(this, "_then", []), Es(this, "_else", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.CONDITIONAL;
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
      getFeature: () => this.eClass().getEStructuralFeature(ee.CONDITION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ee.CONDITION,
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
      getFeature: () => this.eClass().getEStructuralFeature(ee.THEN),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ee.THEN,
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
      getFeature: () => this.eClass().getEStructuralFeature(ee.ELSE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ee.ELSE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case ee.CONDITION:
        return this.condition;
      case ee.THEN:
        return this.then;
      case ee.ELSE:
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
      case ee.CONDITION:
        this.condition = t, super.eSet(e, t);
        break;
      case ee.THEN:
        this.then = t, super.eSet(e, t);
        break;
      case ee.ELSE:
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
      case ee.CONDITION:
        return this._condition !== void 0;
      case ee.THEN:
        return this._then !== void 0 && this._then.length > 0;
      case ee.ELSE:
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
      case ee.CONDITION:
        this._condition = void 0;
        return;
      case ee.THEN:
        this._then = [];
        return;
      case ee.ELSE:
        this._else = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
Es(Lr, "CONDITION", 14), Es(Lr, "THEN", 15), Es(Lr, "ELSE", 16);
let an = Lr;
var un = Object.defineProperty, nn = (s, e, t) => e in s ? un(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, hs = (s, e, t) => nn(s, typeof e != "symbol" ? e + "" : e, t);
const _r = class te extends De {
  constructor() {
    super(...arguments), hs(this, "_items"), hs(this, "_body", []), hs(this, "_emptyText");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.FOR_EACH;
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
      getFeature: () => this.eClass().getEStructuralFeature(te.ITEMS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => te.ITEMS,
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
      getFeature: () => this.eClass().getEStructuralFeature(te.BODY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => te.BODY,
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
      getFeature: () => this.eClass().getEStructuralFeature(te.EMPTY_TEXT),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => te.EMPTY_TEXT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case te.ITEMS:
        return this.items;
      case te.BODY:
        return this.body;
      case te.EMPTY_TEXT:
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
      case te.ITEMS:
        this.items = t, super.eSet(e, t);
        break;
      case te.BODY:
        this.body = t, super.eSet(e, t);
        break;
      case te.EMPTY_TEXT:
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
      case te.ITEMS:
        return this._items !== void 0;
      case te.BODY:
        return this._body !== void 0 && this._body.length > 0;
      case te.EMPTY_TEXT:
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
      case te.ITEMS:
        this._items = void 0;
        return;
      case te.BODY:
        this._body = [];
        return;
      case te.EMPTY_TEXT:
        this._emptyText = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
};
hs(_r, "ITEMS", 14), hs(_r, "BODY", 15), hs(_r, "EMPTY_TEXT", 16);
let ln = _r;
var on = Object.defineProperty, cn = (s, e, t) => e in s ? on(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Fr = (s, e, t) => cn(s, typeof e != "symbol" ? e + "" : e, t);
const aa = class Ie extends De {
  constructor() {
    super(...arguments), Fr(this, "_displayExpression"), Fr(this, "_targetRoute");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.REFERENCE_LINK_WIDGET;
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
Fr(aa, "DISPLAY_EXPRESSION", 14), Fr(aa, "TARGET_ROUTE", 15);
let En = aa;
var hn = Object.defineProperty, gn = (s, e, t) => e in s ? hn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ft = (s, e, t) => gn(s, typeof e != "symbol" ? e + "" : e, t);
const hr = class X extends St {
  constructor() {
    super(...arguments), ft(this, "_name"), ft(this, "_priority", 0), ft(this, "_templates", []), ft(this, "_cases", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.U_I_MODEL_OVERLAY;
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
      getFeature: () => this.eClass().getEStructuralFeature(X.NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => X.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(X.PRIORITY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => X.PRIORITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(X.TEMPLATES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => X.TEMPLATES,
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
      getFeature: () => this.eClass().getEStructuralFeature(X.CASES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => X.CASES,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case X.NAME:
        return this.name;
      case X.PRIORITY:
        return this.priority;
      case X.TEMPLATES:
        return this.templates;
      case X.CASES:
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
      case X.NAME:
        this.name = t, super.eSet(e, t);
        break;
      case X.PRIORITY:
        this.priority = t, super.eSet(e, t);
        break;
      case X.TEMPLATES:
        this.templates = t, super.eSet(e, t);
        break;
      case X.CASES:
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
      case X.NAME:
        return this._name !== void 0;
      case X.PRIORITY:
        return this._priority !== 0;
      case X.TEMPLATES:
        return this._templates !== void 0 && this._templates.length > 0;
      case X.CASES:
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
      case X.NAME:
        this._name = void 0;
        return;
      case X.PRIORITY:
        this._priority = 0;
        return;
      case X.TEMPLATES:
        this._templates = [];
        return;
      case X.CASES:
        this._cases = [];
        return;
      default:
        super.eUnset(e);
    }
  }
};
ft(hr, "NAME", 0), ft(hr, "PRIORITY", 1), ft(hr, "TEMPLATES", 2), ft(hr, "CASES", 3);
let dn = hr;
var pn = Object.defineProperty, fn = (s, e, t) => e in s ? pn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ce = (s, e, t) => fn(s, typeof e != "symbol" ? e + "" : e, t);
const At = class F extends St {
  constructor() {
    super(...arguments), Ce(this, "_extends"), Ce(this, "_css"), Ce(this, "_vueComponent"), Ce(this, "_visibilityCondition"), Ce(this, "_name"), Ce(this, "_group");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.BASE_STYLE;
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
Ce(At, "EXTENDS", 2), Ce(At, "CSS", 3), Ce(At, "VUE_COMPONENT", 4), Ce(At, "VISIBILITY_CONDITION", 5), Ce(At, "NAME", 0), Ce(At, "GROUP", 1);
let Ja = At;
var Tn = Object.defineProperty, Sn = (s, e, t) => e in s ? Tn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, br = (s, e, t) => Sn(s, typeof e != "symbol" ? e + "" : e, t);
const ia = class Ne extends Ja {
  constructor() {
    super(...arguments), br(this, "_layout"), br(this, "_order");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.LAYOUT_STYLE;
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
br(ia, "LAYOUT", 6), br(ia, "ORDER", 7);
let mn = ia;
var In = Object.defineProperty, Nn = (s, e, t) => e in s ? In(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, xe = (s, e, t) => Nn(s, typeof e != "symbol" ? e + "" : e, t);
const ns = class M extends Ja {
  constructor() {
    super(...arguments), xe(this, "_feature"), xe(this, "_widgetType"), xe(this, "_label"), xe(this, "_readOnly"), xe(this, "_order");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.WIDGET_STYLE;
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
xe(ns, "FEATURE", 6), xe(ns, "WIDGET_TYPE", 7), xe(ns, "LABEL", 8), xe(ns, "READ_ONLY", 9), xe(ns, "ORDER", 10);
let ei = ns;
var vn = Object.defineProperty, Ln = (s, e, t) => e in s ? vn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, ti = (s, e, t) => Ln(s, typeof e != "symbol" ? e + "" : e, t);
const si = class yt extends ei {
  constructor() {
    super(...arguments), ti(this, "_columns", []);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.TABLE_STYLE;
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
ti(si, "COLUMNS", 11);
let _n = si;
var On = Object.defineProperty, An = (s, e, t) => e in s ? On(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Pr = (s, e, t) => An(s, typeof e != "symbol" ? e + "" : e, t);
const ua = class ve extends St {
  constructor() {
    super(...arguments), Pr(this, "_language", "OCL"), Pr(this, "_body", "");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.EXPRESSION;
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
Pr(ua, "LANGUAGE", 0), Pr(ua, "BODY", 1);
let ri = ua;
const Kr = {
  ERROR: "ERROR"
};
var yn = Object.defineProperty, Cn = (s, e, t) => e in s ? yn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Mr = (s, e, t) => Cn(s, typeof e != "symbol" ? e + "" : e, t);
const na = class Le extends ri {
  constructor() {
    super(...arguments), Mr(this, "_defaultMessage"), Mr(this, "_severity", Kr.ERROR);
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.VALIDATION_EXPRESSION;
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
        return this._severity !== Kr.ERROR;
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
        this._severity = Kr.ERROR;
        return;
      default:
        super.eUnset(e);
    }
  }
};
Mr(na, "DEFAULT_MESSAGE", 2), Mr(na, "SEVERITY", 3);
let Dn = na;
var Rn = Object.defineProperty, wn = (s, e, t) => e in s ? Rn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ee = (s, e, t) => wn(s, typeof e != "symbol" ? e + "" : e, t);
const Et = class O extends St {
  constructor() {
    super(...arguments), Ee(this, "_order"), Ee(this, "_matchCode"), Ee(this, "_matchSeverity"), Ee(this, "_matchExpression"), Ee(this, "_mappedText"), Ee(this, "_mappedTextExpression"), Ee(this, "_mappedSeverity");
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.VALIDATION_MESSAGE_MAPPER;
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
let Fn = Et;
var bn = Object.defineProperty, Pn = (s, e, t) => e in s ? bn(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Mn = (s, e, t) => Pn(s, e + "", t);
const ai = class ii extends Yi {
  static get eINSTANCE() {
    return this._instance || (this._instance = new ii()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(w.eINSTANCE);
  }
  /**
   * Create a new UIModel instance
   */
  createUIModel() {
    return new eu();
  }
  /**
   * Create a new FormView instance
   */
  createFormView() {
    return new iu();
  }
  /**
   * Create a new TableView instance
   */
  createTableView() {
    return new lu();
  }
  /**
   * Create a new SectionView instance
   */
  createSectionView() {
    return new Eu();
  }
  /**
   * Create a new TabView instance
   */
  createTabView() {
    return new du();
  }
  /**
   * Create a new SummaryView instance
   */
  createSummaryView() {
    return new Tu();
  }
  /**
   * Create a new MasterDetail instance
   */
  createMasterDetail() {
    return new Iu();
  }
  /**
   * Create a new PropertyBinding instance
   */
  createPropertyBinding() {
    return new Lu();
  }
  /**
   * Create a new InputWidget instance
   */
  createInputWidget() {
    return new Cu();
  }
  /**
   * Create a new TextAreaWidget instance
   */
  createTextAreaWidget() {
    return new wu();
  }
  /**
   * Create a new NumberWidget instance
   */
  createNumberWidget() {
    return new Pu();
  }
  /**
   * Create a new CheckboxWidget instance
   */
  createCheckboxWidget() {
    return new Uu();
  }
  /**
   * Create a new DateWidget instance
   */
  createDateWidget() {
    return new Wu();
  }
  /**
   * Create a new ComboboxWidget instance
   */
  createComboboxWidget() {
    return new ku();
  }
  /**
   * Create a new SelectWidget instance
   */
  createSelectWidget() {
    return new Hu();
  }
  /**
   * Create a new AllFeatures instance
   */
  createAllFeatures() {
    return new Ku();
  }
  /**
   * Create a new TemplateCase instance
   */
  createTemplateCase() {
    return new Zu();
  }
  /**
   * Create a new GroupWidget instance
   */
  createGroupWidget() {
    return new tn();
  }
  /**
   * Create a new Conditional instance
   */
  createConditional() {
    return new an();
  }
  /**
   * Create a new ForEach instance
   */
  createForEach() {
    return new ln();
  }
  /**
   * Create a new ReferenceLinkWidget instance
   */
  createReferenceLinkWidget() {
    return new En();
  }
  /**
   * Create a new UIModelOverlay instance
   */
  createUIModelOverlay() {
    return new dn();
  }
  /**
   * Create a new LayoutStyle instance
   */
  createLayoutStyle() {
    return new mn();
  }
  /**
   * Create a new WidgetStyle instance
   */
  createWidgetStyle() {
    return new ei();
  }
  /**
   * Create a new TableStyle instance
   */
  createTableStyle() {
    return new _n();
  }
  /**
   * Create a new Expression instance
   */
  createExpression() {
    return new ri();
  }
  /**
   * Create a new ValidationExpression instance
   */
  createValidationExpression() {
    return new Dn();
  }
  /**
   * Create a new ValidationMessageMapper instance
   */
  createValidationMessageMapper() {
    return new Fn();
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
Mn(ai, "_instance");
let Sa = ai;
const ui = Symbol("uimodelComposerRegistry");
function ni() {
  const s = Ct(ui);
  if (!s)
    throw new Error(
      "[uimodel-composer] No ComposerRegistry provided. Make sure UIModelComposer is an ancestor of this component."
    );
  return s;
}
function Vn(s) {
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
const Un = "uic";
function dr(s) {
  return s === !0 || s === "true";
}
function Rt(s, e = 0) {
  if (typeof s == "number") return s;
  const t = Number(s);
  return Number.isFinite(t) ? t : e;
}
const Bn = {
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
function la(s) {
  return `--${Un}-${Wr(s)}`;
}
function Gn(s) {
  return s.replace(/token\(\s*([^)]+?)\s*\)/g, (e, t) => `var(${la(t)})`);
}
function li(s) {
  return `uic-${Wr(s)}`;
}
function Wn(s) {
  return `uicss-theme-${Wr(s)}`;
}
function oi(s, e) {
  return `uicss-cond-${Wr(s.name ?? "sheet")}-${e}`;
}
function ci(s, e = "  ") {
  return s.filter((t) => t.property && t.value !== void 0).map((t) => `${e}${t.property.trim()}: ${Gn(t.value)}${dr(t.important) ? " !important" : ""};`).join(`
`);
}
function $n(s, e) {
  return e.filter((t) => t.declarations.length > 0).map((t) => {
    var r, i;
    const u = ((i = (r = t.state) == null ? void 0 : r.getName) == null ? void 0 : i.call(r)) ?? String(t.state), n = Bn[u] ?? `:${u.toLowerCase()}`;
    return `${s}${n} {
${ci(t.declarations)}
}`;
  }).join(`
`);
}
function Fa(s, e, t, r) {
  const i = [];
  e.length > 0 && i.push(`${s} {
${ci(e)}
}`);
  const u = $n(s, t);
  if (u && i.push(u), i.length === 0) return "";
  const n = i.join(`
`);
  return r ? `@media ${r} {
${n}
}` : n;
}
function Ei(s) {
  return s.includeSubtypes === void 0 || s.includeSubtypes === null ? !0 : dr(s.includeSubtypes);
}
function Yn(s, e, t) {
  var r, i;
  let u;
  const n = (i = (r = e.targetClass) == null ? void 0 : r.getName) == null ? void 0 : i.call(r);
  return n ? u = Ei(e) ? `.uim-c-${n}` : `.uim-component[data-uim-eclass="${n}"]` : u = ".uim-component", e.componentName && (u += `[data-uim-name="${e.componentName}"]`), e.group && (u += `[data-uim-group="${e.group}"]`), e.condition && (u += `.${oi(s, t)}`), u;
}
function kn(s) {
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
function xn(s) {
  const e = [];
  if (s.tokens.length > 0) {
    const r = s.tokens.filter((i) => i.name).map((i) => `  ${la(i.name)}: ${i.value ?? ""};`);
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
    }).map((u) => `  ${la(u.token.name)}: ${u.value ?? ""};`);
    dr(r.dark) && i.push("  color-scheme: dark;"), i.length > 0 && e.push(`.${Wn(r.name)} {
${i.join(`
`)}
}`);
  }
  const t = s.rules.map((r, i) => ({ rule: r, index: i }));
  t.sort((r, i) => Rt(r.rule.priority) - Rt(i.rule.priority) || r.index - i.index);
  for (const { rule: r, index: i } of t) {
    const u = Fa(
      Yn(s, r, i),
      r.declarations,
      r.states,
      r.media || void 0
    );
    u && e.push(u);
  }
  for (const r of kn(s.styles)) {
    if (!r.name) continue;
    const i = Fa(`.${li(r.name)}`, r.declarations, r.states);
    i && e.push(i);
  }
  return e.join(`

`);
}
function Xn(s) {
  return s.map(xn).filter(Boolean).join(`

`);
}
const $r = Symbol("uimodel-css:sheets");
let Hn = 0;
function jn(s) {
  const e = pr(0);
  class t extends xa {
    notifyChanged(c) {
      var E;
      try {
        super.notifyChanged(c);
      } catch {
      }
      if (!((E = c.isTouch) != null && E.call(c))) {
        e.value++;
        for (const o of i) n(o);
      }
    }
  }
  const r = new t();
  let i = [];
  function u(h) {
    const c = h;
    c.eAdapters().includes(r) || (c.eAdapterAdd ? c.eAdapterAdd(r) : c.eAdapters().push(r));
  }
  function n(h) {
    u(h);
    for (const c of h.eAllContents()) u(c);
  }
  function l(h) {
    const c = h;
    if (c.eAdapterRemove)
      c.eAdapterRemove(r);
    else {
      const E = c.eAdapters(), o = E.indexOf(r);
      o >= 0 && E.splice(o, 1);
    }
  }
  function g() {
    for (const h of i) {
      l(h);
      for (const c of h.eAllContents()) l(c);
    }
    i = [];
  }
  return Dt(
    () => [...Ze(s)],
    (h) => {
      g();
      for (const c of h)
        n(c), i.push(c);
      e.value++;
    },
    { immediate: !0 }
  ), pa(g), { css: S(() => (e.value, Xn([...Ze(s)]))), version: e };
}
function qn(s) {
  const { css: e, version: t } = jn(s);
  if (typeof document < "u") {
    const r = document.createElement("style");
    r.id = `uimodel-css-${++Hn}`, r.setAttribute("data-uimodel-css", ""), document.head.appendChild(r), Mi(() => {
      r.textContent = e.value;
    }), pa(() => {
      r.remove();
    });
  }
  return { css: e, version: t };
}
function Sr(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? gs(e) : s;
}
function gs(s) {
  return new Proxy(s, {
    get(e, t) {
      var r, i, u;
      if (typeof t != "string") return e[t];
      if (t === "eGet")
        return (g) => {
          var h, c, E;
          if (typeof g == "string") {
            const o = (E = (c = (h = e.eClass) == null ? void 0 : h.call(e)) == null ? void 0 : c.getEStructuralFeature) == null ? void 0 : E.call(c, g);
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
function fr(s, e) {
  if (!s) return !0;
  try {
    switch (s.language) {
      case "OCL":
        return Kn(s.body, e);
      case "AQL":
        return zn(s.body, e);
      case "JS":
        return Qn(s.body, e);
      default:
        return console.warn(`[uimodel-composer] Unknown expression language: ${s.language}`), !0;
    }
  } catch (t) {
    return console.error(`[uimodel-composer] Expression evaluation failed (${s.language}):`, t), !0;
  }
}
function Kn(s, e) {
  try {
    const { EMFOclValidator: t } = globalThis.__emftsOcl__ ?? {};
    return t ? new t().evaluateExpression(s, gs(e)) === !0 : (console.warn("[uimodel-composer] @emfts/ocl not registered. Call registerOclEvaluator() during setup."), !0);
  } catch {
    return !0;
  }
}
function zn(s, e) {
  return console.warn("[uimodel-composer] AQL evaluation not yet implemented."), !0;
}
function Qn(s, e) {
  return !!new Function("self", `"use strict"; return (${s});`)(gs(e));
}
function Zn(s) {
  const e = s;
  return e && typeof e.eClass == "function" ? gs(e) : s;
}
function Yr(s, e, t = {}) {
  if (s != null && s.body)
    try {
      switch (s.language) {
        case "JS": {
          const r = Object.keys(t);
          return new Function("self", ...r, `"use strict"; return (${s.body});`)(gs(e), ...r.map((i) => Zn(t[i])));
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
function Jn(s) {
  return s.map((e, t) => ({ overlay: e, index: t })).sort((e, t) => Rt(t.overlay.priority) - Rt(e.overlay.priority) || e.index - t.index).flatMap(({ overlay: e }) => [...e.cases ?? []]);
}
function hi(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "AllFeatures";
}
function el(s) {
  var e;
  const t = (e = s.eClass) == null ? void 0 : e.call(s);
  return t ? t.getName() === "WidgetComponent" || t.getEAllSuperTypes().some((r) => r.getName() === "WidgetComponent") : !1;
}
function gi(s) {
  return typeof s.isContainment == "function";
}
function tl(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    hi(i) ? e.push(i) : el(i) && i.feature && t.add(i.feature);
    for (const u of i.eClass().getEAllStructuralFeatures()) {
      if (!gi(u) || !u.isContainment()) continue;
      const n = i.eGet(u);
      if (!n) continue;
      const l = u.isMany() ? [...n] : [n];
      for (const g of l) r(g);
    }
  }
  return r(s), { blocks: e, boundFeatures: t };
}
function Or(s) {
  var e;
  return (((e = s.with) == null ? void 0 : e.length) ?? 0) > 0;
}
function sl(s, e) {
  var t;
  const r = s.getEAllStructuralFeatures();
  if (Or(e)) {
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
function rl(s, e) {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const u of e.blocks)
    t.set(u, []), r.set(u, new Set(sl(s, u)));
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
      const g = Rt(l.priority) - Rt(n.priority), h = Number(Or(l)) - Number(Or(n)), c = i.get(n) - i.get(l);
      (g > 0 || g === 0 && (h > 0 || h === 0 && c > 0)) && (n = l);
    }
    n && t.get(n).push(u);
  }
  for (const [u, n] of t) {
    if (!Or(u)) continue;
    const l = new Map(u.with.map((g, h) => [g, h]));
    n.sort((g, h) => (l.get(g) ?? 0) - (l.get(h) ?? 0));
  }
  return t;
}
function ba(s, e) {
  for (const t of s ?? [])
    if (t.widget && (!t.when || Yr(
      t.when,
      e
    )))
      return t.widget;
}
function al(s, e, t) {
  return ba(t?.overlayCases, e) ?? ba(s.cases, e) ?? s.template;
}
function Vr(s) {
  var e, t, r;
  const i = s.eClass(), u = (e = i.getEPackage()) == null ? void 0 : e.getEFactoryInstance();
  if (!u) throw new Error(`Keine Factory für ${i.getName()}`);
  const n = u.create(i);
  for (const l of i.getEAllStructuralFeatures()) {
    if ((t = l.isDerived) != null && t.call(l) || ((r = l.isChangeable) == null ? void 0 : r.call(l)) === !1) continue;
    const g = s.eGet(l);
    if (g == null) continue;
    const h = gi(l) && l.isContainment();
    if (l.isMany()) {
      const c = [...g];
      if (c.length === 0) continue;
      n.eSet(
        l,
        h ? c.map((E) => Vr(E)) : c
      );
    } else
      n.eSet(l, h ? Vr(g) : g);
  }
  return n;
}
const il = /* @__PURE__ */ new Set(["AllFeatures", "Conditional", "ForEach"]);
function zr(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function di(s, e) {
  if (zr(s) !== "GroupWidget") {
    s.feature = e;
    return;
  }
  const t = s.fields ?? [];
  for (const r of t)
    il.has(zr(r)) || (zr(r) === "GroupWidget" ? di(r, e) : !r.feature && !(r.bindings ?? []).some((i) => i.property === "feature") && (r.feature = e));
}
function ul(s, e) {
  const t = Sa.eINSTANCE.createValidationExpression();
  return t.language = "JS", t.body = `self.${s} !== null && self.${s} !== undefined && String(self.${s}).length > 0`, t.defaultMessage = `${e ?? s} ist erforderlich.`, t.severity = "ERROR", t;
}
function nl(s) {
  const e = s.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ll(s, e, t) {
  var r, i, u, n;
  const l = t ?? {
    blocks: [e],
    boundFeatures: /* @__PURE__ */ new Set()
  };
  l.blocks.includes(e) || l.blocks.push(e);
  const g = rl(s, l).get(e) ?? [], h = [];
  for (const c of g) {
    const E = al(e, c, l);
    if (!E) {
      console.error(
        `[uimodel-composer] AllFeatures "${e.name ?? "?"}": kein TemplateCase trifft auf Feature "${c.getName() ?? "?"}" und kein Default-Fall (template) gesetzt.`
      );
      continue;
    }
    const o = Vr(E);
    di(o, c);
    const p = c.getName() ?? "feature";
    o.name = p, o.label === void 0 && e.label !== void 0 && (o.label = e.label), o.placeholder === void 0 && e.placeholder !== void 0 && (o.placeholder = e.placeholder), o.readOnly === void 0 && e.readOnly !== void 0 && (o.readOnly = e.readOnly), o.required === void 0 && e.required !== void 0 && (o.required = e.required), (((r = o.styles) == null ? void 0 : r.length) ?? 0) === 0 && (((i = e.styles) == null ? void 0 : i.length) ?? 0) > 0 && (o.styles = [...e.styles]), o.label || (o.label = nl(p)), !o.group && e.group && (o.group = e.group), o.required === void 0 && Rt((u = c.getLowerBound) == null ? void 0 : u.call(c)) >= 1 && (o.required = !0, (((n = o.validations) == null ? void 0 : n.length) ?? 0) === 0 && (o.validations = [ul(p, o.label)]));
    const D = e.bindings ?? [];
    if (D.length > 0) {
      const G = new Set((o.bindings ?? []).map((f) => f.property)), H = D.filter((f) => f.property && !G.has(f.property)).map((f) => Vr(f));
      H.length > 0 && (o.bindings = [...o.bindings ?? [], ...H]);
    }
    h.push(o);
  }
  return h;
}
const pi = Symbol("uimodel:allfeatures-context"), fi = pr(0);
function Ti() {
  fi.value++;
}
function ds() {
  fi.value;
}
function ol(s) {
  class e extends xa {
    notifyChanged(l) {
      var g;
      try {
        super.notifyChanged(l);
      } catch {
      }
      if ((g = l.isTouch) != null && g.call(l)) return;
      Ti();
      const h = Ze(s);
      h && i(h);
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
      const h = g;
      if (h.eAdapterRemove)
        h.eAdapterRemove(t);
      else {
        const c = h.eAdapters(), E = c.indexOf(t);
        E >= 0 && c.splice(E, 1);
      }
    };
    l(n);
    for (const g of n.eAllContents()) l(g);
  }
  Dt(
    () => Ze(s),
    (n, l) => {
      l && u(l), n && i(n);
    },
    { immediate: !0 }
  ), pa(() => {
    const n = Ze(s);
    n && u(n);
  });
}
function Si(s) {
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
function cl(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "CssStyle";
}
function El(s) {
  const e = [], t = /* @__PURE__ */ new Set();
  function r(i) {
    !i || t.has(i) || (t.add(i), r(i.extends), cl(i) && i.name && e.push(li(i.name)));
  }
  for (const i of s ?? []) r(i);
  return e;
}
function hl(s, e) {
  var t, r, i;
  const u = (r = (t = s.targetClass) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  if (u) {
    const n = Si((i = e.eClass) == null ? void 0 : i.call(e));
    if (Ei(s)) {
      if (!n.includes(u)) return !1;
    } else if (n[0] !== u)
      return !1;
  }
  return !(s.componentName && e.name !== s.componentName || s.group && e.group !== s.group);
}
function ma(s, e = {}) {
  var t;
  const r = ["uim-component"];
  for (const i of Si((t = s.eClass) == null ? void 0 : t.call(s)))
    r.push(`uim-c-${i}`);
  r.push(...El(s.styles)), e.resolvedCss && r.push(...e.resolvedCss.split(/\s+/).filter(Boolean));
  for (const i of e.sheets ?? [])
    i.rules.forEach((u, n) => {
      u.condition && hl(u, s) && e.model && fr(u.condition, e.model) && r.push(oi(i, n));
    });
  return [...new Set(r)];
}
function Ia(s) {
  var e, t, r;
  const i = {}, u = (r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t);
  return u && (i["data-uim-eclass"] = u), s.name && (i["data-uim-name"] = s.name), s.group && (i["data-uim-group"] = s.group), i;
}
function gl(s, e, t) {
  const r = [];
  return dr(t ?? s.required) && r.push("uim-s-required"), dr(e ?? s.readOnly) && r.push("uim-s-readonly"), r;
}
function mi(s, e = /* @__PURE__ */ new Set()) {
  if (!s) return {};
  if (e.has(s)) return {};
  e.add(s);
  const t = s.extends ? mi(s.extends, e) : {}, r = dl(s);
  return Ii(t, r);
}
function Na(s) {
  return s.reduce(
    (e, t) => Ii(e, mi(t)),
    {}
  );
}
function dl(s) {
  const e = {};
  s.css !== void 0 && (e.css = s.css), s.vueComponent !== void 0 && (e.vueComponent = s.vueComponent);
  const t = s;
  t.layout !== void 0 && (e.layout = t.layout), t.order !== void 0 && (e.order = t.order);
  const r = s;
  return r.widgetType !== void 0 && (e.widgetType = r.widgetType), r.label !== void 0 && (e.label = r.label), r.readOnly !== void 0 && (e.readOnly = r.readOnly), r.order !== void 0 && (e.order = r.order), e;
}
function Ii(s, e) {
  return {
    ...s,
    ...Object.fromEntries(
      Object.entries(e).filter(([, t]) => t !== void 0)
    ),
    // Merge CSS classes (append, not replace)
    css: [s.css, e.css].filter(Boolean).join(" ") || void 0
  };
}
const va = /* @__PURE__ */ oe({
  __name: "ComponentDispatcher",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = s, t = ni(), r = S(() => {
      var l, g, h, c;
      const E = ((c = (h = (g = (l = e.component).eClass) == null ? void 0 : g.call(l)) == null ? void 0 : h.getName) == null ? void 0 : c.call(h)) ?? "", o = t.getComposer(E);
      return o || console.warn(`[uimodel-composer] No composer registered for EClass "${E}"`), o ?? null;
    }), i = Ct($r, void 0), u = S(() => (ds(), i?.version.value, ma(e.component, {
      model: e.model,
      sheets: i?.sheets.value,
      resolvedCss: Na(e.component.styles ?? []).css
    }))), n = S(() => Ia(e.component));
    return (l, g) => r.value ? (N(), q(fa(r.value), Ta({
      key: 0,
      component: s.component,
      model: s.model,
      class: u.value
    }, n.value), null, 16, ["component", "model", "class"])) : Oe("", !0);
  }
});
function La(s) {
  var e, t, r;
  return ((r = (t = (e = s.eClass) == null ? void 0 : e.call(s)) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) ?? "";
}
function pl(s) {
  return La(s) === "GroupWidget";
}
function fl(s) {
  return La(s) === "Conditional";
}
function Tl(s) {
  return La(s) === "ForEach";
}
function Sl(s) {
  if (!s) return [];
  const e = typeof s == "object" && Symbol.iterator in s ? s : [s], t = [];
  for (const r of e)
    r && typeof r.eClass == "function" ? t.push(r) : r != null && console.warn("[uimodel-composer] ForEach: Element ist kein EObject und wird übersprungen:", r);
  return t;
}
function oa(s, e, t) {
  var r;
  const i = [];
  for (const u of s ?? [])
    if (hi(u)) {
      const n = (r = e.eClass) == null ? void 0 : r.call(e);
      if (!n) continue;
      for (const l of ll(n, u, t))
        i.push({ kind: "widget", widget: l, model: e });
    } else if (fl(u)) {
      const n = fr(u.condition, e) ? u.then : u.else;
      i.push(...oa(n, e, t));
    } else if (Tl(u)) {
      const n = Sl(Yr(u.items, e));
      if (n.length === 0) {
        u.emptyText && i.push({ kind: "note", text: u.emptyText });
        continue;
      }
      for (const l of n)
        i.push(...oa(u.body, l, t));
    } else pl(u) ? i.push({ kind: "group", widget: u, model: e }) : i.push({ kind: "widget", widget: u, model: e });
  return i;
}
function ml(s, e) {
  return S(() => (ds(), fr(Ze(s), Ze(e))));
}
const Il = /* @__PURE__ */ new Set([
  "readOnly",
  "required",
  "password",
  "asToggle",
  "multiSelect",
  "asButtonGroup",
  "withTime"
]), Nl = /* @__PURE__ */ new Set([
  "maxLength",
  "rows",
  "min",
  "max",
  "step",
  "minSearchLength",
  "order"
]);
function vl(s, e) {
  if (e === null) return s === "feature" ? null : void 0;
  if (s === "feature") return e;
  if (Il.has(s)) return !!e;
  if (Nl.has(s)) {
    const t = Number(e);
    return Number.isFinite(t) ? t : void 0;
  }
  return String(e);
}
function Ll(s, e) {
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
    const l = vl(u, n);
    l !== void 0 && (r.values[u] = l);
  }
  return r;
}
function _l(s, e) {
  return S(() => {
    var t;
    ds();
    const r = Ze(s), i = Na(r.styles), u = {
      ...r.label !== void 0 ? { label: r.label } : {},
      ...r.placeholder !== void 0 ? { placeholder: r.placeholder } : {},
      ...r.readOnly !== void 0 ? { readOnly: r.readOnly } : {},
      ...r.required !== void 0 ? { required: r.required } : {}
    }, n = e ? Ze(e) : void 0;
    if (!n || (((t = r.bindings) == null ? void 0 : t.length) ?? 0) === 0)
      return { ...i, ...u };
    const l = Ll(r, n);
    return {
      ...i,
      ...u,
      ...l.values,
      boundFeature: l.feature,
      featureSuppressed: l.featureSuppressed
    };
  });
}
var ae = /* @__PURE__ */ ((s) => (s[s.DEFAULT = 0] = "DEFAULT", s[s.DATA_TYPE = 100] = "DATA_TYPE", s[s.ECLASS = 200] = "ECLASS", s[s.FEATURE = 300] = "FEATURE", s[s.PACKAGE = 400] = "PACKAGE", s[s.INSTANCE = 500] = "INSTANCE", s[s.OVERRIDE = 1e3] = "OVERRIDE", s))(ae || {});
function ue() {
  return { matches: !1, priority: 0 };
}
function be(s) {
  return { matches: !0, priority: s };
}
let Ol = class {
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
      return ue();
    if (t === this.eClass)
      return be(ae.ECLASS + 50);
    if (t.getName() === this.eClass.getName()) {
      const r = t.getEPackage(), i = this.eClass.getEPackage();
      if (r && i && r.getNsURI() === i.getNsURI())
        return be(ae.ECLASS + 50);
    }
    return this.isSuperTypeOf(this.eClass, t) ? be(ae.ECLASS) : ue();
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
}, Al = class {
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
      return ue();
    const u = (t = i.getEType) == null ? void 0 : t.call(i);
    return u && ((r = u.getName) == null ? void 0 : r.call(u)) === this.dataTypeName ? be(ae.DATA_TYPE) : ue();
  }
  /**
   * Check if the feature is an EAttribute.
   */
  isEAttribute(e) {
    var t, r;
    return !e || typeof e != "object" ? !1 : "getEAttributeType" in e || "eClass" in e && typeof e.eClass == "function" && ((r = (t = e.eClass()) == null ? void 0 : t.getName) == null ? void 0 : r.call(t)) === "EAttribute";
  }
}, yl = class {
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
    return ue();
  }
  /**
   * Match against a specific enum.
   */
  matchEnum(e) {
    var t;
    return this.enumName ? ((t = e.getName) == null ? void 0 : t.call(e)) === this.enumName ? be(ae.DATA_TYPE + 50) : ue() : be(ae.DATA_TYPE);
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
}, Cl = class {
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
      return ue();
    const g = l;
    let h = ae.DATA_TYPE;
    if (this.containment !== void 0) {
      if ((((t = g.isContainment) == null ? void 0 : t.call(g)) ?? !1) !== this.containment)
        return ue();
      h += 25;
    }
    if (this.targetClass) {
      const c = (r = g.getEReferenceType) == null ? void 0 : r.call(g);
      if (!c)
        return ue();
      const E = (i = c.getName) == null ? void 0 : i.call(c), o = (n = (u = this.targetClass).getName) == null ? void 0 : n.call(u);
      if (E !== o && !this.isSuperTypeOf(this.targetClass, c))
        return ue();
      h += 25;
    }
    return be(h);
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
class Dl {
  constructor(e, t) {
    this.eClass = e, this.featureName = t;
  }
  /**
   * Match the context against this specific feature.
   */
  match(e) {
    var t, r, i, u, n, l, g, h, c, E;
    const o = e.feature || e.attribute || e.reference;
    if (!o || ((t = o.getName) == null ? void 0 : t.call(o)) !== this.featureName)
      return ue();
    const p = (r = o.getEContainingClass) == null ? void 0 : r.call(o);
    if (!p)
      return ue();
    if (p === this.eClass)
      return be(ae.FEATURE);
    const D = (i = p.getName) == null ? void 0 : i.call(p), G = (n = (u = this.eClass).getName) == null ? void 0 : n.call(u);
    if (D === G) {
      const H = (l = p.getEPackage) == null ? void 0 : l.call(p), f = (h = (g = this.eClass).getEPackage) == null ? void 0 : h.call(g);
      if (H && f && ((c = H.getNsURI) == null ? void 0 : c.call(H)) === ((E = f.getNsURI) == null ? void 0 : E.call(f)))
        return be(ae.FEATURE);
    }
    return this.isInheritedFrom(p, this.eClass) ? be(ae.FEATURE - 10) : ue();
  }
  /**
   * Check if subClass inherits from superClass.
   */
  isInheritedFrom(e, t) {
    var r, i, u, n, l, g, h;
    const c = (r = e.getEAllSuperTypes) == null ? void 0 : r.call(e);
    if (!c) return !1;
    for (const E of c) {
      if (E === t) return !0;
      if (((i = E.getName) == null ? void 0 : i.call(E)) === ((u = t.getName) == null ? void 0 : u.call(t))) {
        const o = (n = E.getEPackage) == null ? void 0 : n.call(E), p = (l = t.getEPackage) == null ? void 0 : l.call(t);
        if (o && p && ((g = o.getNsURI) == null ? void 0 : g.call(o)) === ((h = p.getNsURI) == null ? void 0 : h.call(p)))
          return !0;
      }
    }
    return !1;
  }
}
var Rl = Object.defineProperty, wl = (s, e, t) => e in s ? Rl(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Pa = (s, e, t) => wl(s, typeof e != "symbol" ? e + "" : e, t);
let Fl = 0;
function bl() {
  return `descriptor-${++Fl}`;
}
let Pl = class {
  constructor() {
    Pa(this, "entries", []), Pa(this, "instanceOverrides", /* @__PURE__ */ new WeakMap());
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
      { priority: ae.INSTANCE }
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
      { priority: ae.ECLASS, ...r }
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
      { priority: ae.DATA_TYPE, ...r }
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
      { priority: ae.DATA_TYPE, ...r }
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
      { priority: ae.DATA_TYPE, ...t }
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
      { priority: ae.FEATURE, ...i }
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
    const i = bl();
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
        const r = new Ol(e.eClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "datatype": {
        const r = new Al(e.dataTypeName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "enum": {
        const r = new yl(e.enumName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "reference": {
        const r = new Cl(e.containment, e.targetClass);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "feature": {
        const r = new Dl(e.eClass, e.featureName);
        return (i) => {
          const u = r.match(i);
          return u.matches && t !== void 0 ? { matches: !0, priority: t } : u;
        };
      }
      case "instance":
        return (r) => r.eObject === e.eObject ? be(t ?? ae.INSTANCE) : ue();
      case "custom":
        return e.matcher;
      default:
        return () => ue();
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
const Qe = new Pl();
var Ml = Object.defineProperty, Vl = (s, e, t) => e in s ? Ml(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, Ma = (s, e, t) => Vl(s, typeof e != "symbol" ? e + "" : e, t);
let Ul = class {
  constructor() {
    Ma(this, "lazyRegistrations", []), Ma(this, "resolvedPackages", /* @__PURE__ */ new Map());
  }
  /**
   * Register a decorated component immediately.
   */
  register(e, t, r) {
    Qe.register(e, t, r);
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
      r ? Qe.register(t.component, r, t.options) : e.push(t);
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
new Ul();
const Ni = Symbol("componentRegistry");
function Bl() {
  const s = Ct(Ni) ?? Qe;
  function e(E) {
    return s.getComponent(E);
  }
  function t(E, o) {
    return s.getComponentForFeature(E, o);
  }
  function r(E, o) {
    return s.getComponentForEClass(E, o);
  }
  function i(E, o, p) {
    return s.register(E, o, p);
  }
  function u(E, o) {
    return s.registerForInstance(E, o);
  }
  function n(E, o, p) {
    return s.registerForEClass(E, o, p);
  }
  function l(E, o, p) {
    return s.registerForDataType(E, o, p);
  }
  function g(E, o, p) {
    return s.registerForEnum(E, o, p);
  }
  function h(E, o) {
    return s.registerForReference(E, o);
  }
  function c(E, o, p, D) {
    return s.registerForFeature(E, o, p, D);
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
    registerForReference: h,
    registerForFeature: c
  };
}
const Gl = { class: "uimodel-fallback-widget" }, Wl = { class: "uimodel-fallback-widget__label" }, $l = {
  key: 0,
  "aria-hidden": "true"
}, Yl = ["rows", "value", "placeholder", "readonly", "disabled"], kl = /* @__PURE__ */ oe({
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
        var o, p;
        return t.value.label ?? ((p = (o = e.feature) == null ? void 0 : o.getName) == null ? void 0 : p.call(o)) ?? "";
      }
    ), i = S(() => t.value.placeholder ?? ""), u = S(() => g(t.value.readOnly)), n = S(() => g(t.value.required)), l = S(() => {
      var o, p;
      const D = (p = (o = e.custom) == null ? void 0 : o.rawWidget) == null ? void 0 : p.rows, G = Number(D);
      return Number.isFinite(G) && G > 0 ? G : 3;
    });
    function g(o) {
      return o === !0 || o === "true";
    }
    const h = S(() => {
      var o;
      const p = (o = e.eObject) == null ? void 0 : o.eGet(e.feature);
      return p == null ? "" : String(p);
    }), c = pr(h.value);
    Dt(h, (o) => {
      c.value = o;
    });
    function E(o) {
      var p;
      const D = o.target.value;
      c.value = D, (p = e.eObject) == null || p.eSet(e.feature, D);
    }
    return (o, p) => (N(), R("div", Gl, [
      le("label", Wl, [
        ka(_e(r.value), 1),
        n.value ? (N(), R("span", $l, " *")) : Oe("", !0)
      ]),
      le("textarea", {
        class: "uimodel-fallback-widget__input",
        rows: l.value,
        value: c.value,
        placeholder: i.value,
        readonly: u.value,
        disabled: u.value,
        onInput: E
      }, null, 40, Yl)
    ]));
  }
}), xl = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, Xl = /* @__PURE__ */ xl(kl, [["__scopeId", "data-v-0237261a"]]), vi = /* @__PURE__ */ oe({
  __name: "WidgetComposer",
  props: {
    widget: {},
    model: {}
  },
  setup(s) {
    const e = s, t = /* @__PURE__ */ new Set(), { getComponentForFeature: r } = Bl(), i = ml(
      () => e.widget.visibilityCondition,
      () => e.model
    ), u = _l(
      () => e.widget,
      () => e.model
    ), n = S(
      () => u.value.boundFeature ?? e.widget.feature
    ), l = S(() => {
      var o, p, D, G, H, f, y, W;
      if (!n.value) return null;
      const A = r(n.value, e.model);
      if (A) return A;
      const V = ((G = (D = (p = (o = e.widget).eClass) == null ? void 0 : p.call(o)) == null ? void 0 : D.getName) == null ? void 0 : G.call(D)) ?? "WidgetComponent", K = ((W = (y = (f = (H = n.value).getEType) == null ? void 0 : f.call(H)) == null ? void 0 : y.getName) == null ? void 0 : W.call(y)) ?? "?", U = `${V}/${K}`;
      return t.has(U) || (t.add(U), console.warn(
        `[uimodel-composer] Kein Renderer für Widget "${V}" auf Datentyp "${K}" registriert — Fallback als Plaintext-Editor. Host: Renderer über die @emfts/vue-registry registrieren.`
      )), Xl;
    }), g = S(() => {
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
    }), h = Ct($r, void 0), c = S(() => (ds(), h?.version.value, [
      ...ma(e.widget, {
        model: e.model,
        sheets: h?.sheets.value,
        resolvedCss: u.value.css
      }),
      ...gl(
        e.widget,
        u.value.readOnly,
        u.value.required
      )
    ])), E = S(() => Ia(e.widget));
    return (o, p) => B(i) && l.value && !B(u).featureSuppressed ? (N(), q(fa(l.value), Ta({ key: 0 }, { ...g.value, ...E.value }, { class: c.value }), null, 16, ["class"])) : Oe("", !0);
  }
}), Hl = {
  key: 0,
  class: "uimodel-foreach-empty"
}, jl = /* @__PURE__ */ oe({
  __name: "FieldsRenderer",
  props: {
    fields: {},
    model: {}
  },
  setup(s) {
    const e = s, t = Ct(pi, void 0), r = Ct($r, void 0), i = S(() => (ds(), r?.version.value, oa(e.fields, e.model, t?.value)));
    function u(g, h) {
      const c = String(
        g.layout ?? "VERTICAL"
      ).toLowerCase();
      return [
        ...ma(g, {
          model: h,
          sheets: r?.sheets.value,
          resolvedCss: Na(g.styles ?? []).css
        }),
        "uimodel-group",
        `uimodel-group--${c}`
      ];
    }
    function n(g) {
      return g.fields ?? [];
    }
    const l = Ia;
    return (g, h) => {
      const c = Vi("FieldsRenderer", !0);
      return N(!0), R(Tt, null, wt(i.value, (E, o) => (N(), R(Tt, { key: o }, [
        E.kind === "note" ? (N(), R("p", Hl, _e(E.text), 1)) : E.kind === "group" ? (N(), R("div", Ta({
          key: 1,
          class: u(E.widget, E.model)
        }, { ref_for: !0 }, B(l)(E.widget)), [
          gr(c, {
            fields: n(E.widget),
            model: E.model
          }, null, 8, ["fields", "model"])
        ], 16)) : (N(), q(vi, {
          key: 2,
          widget: E.widget,
          model: E.model
        }, null, 8, ["widget", "model"]))
      ], 64))), 128);
    };
  }
}), ql = { class: "uimodel-form-view" }, Li = /* @__PURE__ */ oe({
  __name: "FormViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (N(), R("div", ql, [
      gr(jl, {
        fields: s.component.fields,
        model: s.model
      }, null, 8, ["fields", "model"])
    ]));
  }
}), Kl = { class: "uimodel-section-view" }, zl = /* @__PURE__ */ oe({
  __name: "SectionViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (N(), R("div", Kl, [
      (N(!0), R(Tt, null, wt(s.component.sections, (r) => (N(), q(Li, {
        key: r.name,
        component: r,
        model: s.model
      }, null, 8, ["component", "model"]))), 128))
    ]));
  }
}), Ql = { class: "uimodel-tab-view" }, Zl = ["data-tab"], Jl = /* @__PURE__ */ oe({
  __name: "TabViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (N(), R("div", Ql, [
      (N(!0), R(Tt, null, wt(s.component.tabs, (r) => (N(), R("div", {
        key: r.name,
        class: "uimodel-tab-panel",
        "data-tab": r.name
      }, [
        gr(va, {
          component: r,
          model: s.model
        }, null, 8, ["component", "model"])
      ], 8, Zl))), 128))
    ]));
  }
}), eo = { class: "uimodel-summary-view" }, to = /* @__PURE__ */ oe({
  __name: "SummaryViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (N(), R("div", eo, [
      (N(!0), R(Tt, null, wt(s.component.summaryFields, (r) => (N(), q(vi, {
        key: r.name,
        widget: r,
        model: s.model
      }, null, 8, ["widget", "model"]))), 128))
    ]));
  }
}), so = {
  key: 1,
  class: "uimodel-table-view-placeholder"
}, _i = /* @__PURE__ */ oe({
  __name: "TableViewComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    const e = ni(), t = S(() => e.getComposer("TableViewRenderer"));
    return (r, i) => t.value ? (N(), q(fa(t.value), {
      key: 0,
      component: s.component,
      model: s.model
    }, null, 8, ["component", "model"])) : (N(), R("div", so));
  }
}), ro = { class: "uimodel-master-detail" }, ao = { class: "uimodel-master" }, io = { class: "uimodel-detail" }, uo = /* @__PURE__ */ oe({
  __name: "MasterDetailComposer",
  props: {
    component: {},
    model: {}
  },
  setup(s) {
    return (e, t) => (N(), R("div", ro, [
      le("div", ao, [
        gr(_i, {
          component: s.component.master,
          model: s.model
        }, null, 8, ["component", "model"])
      ]),
      le("div", io, [
        gr(va, {
          component: s.component.detail,
          model: s.model
        }, null, 8, ["component", "model"])
      ])
    ]));
  }
}), _a = /* @__PURE__ */ oe({
  __name: "UIModelComposer",
  props: {
    uiModel: {},
    model: {},
    composerRegistry: {},
    styleSheets: {},
    overlays: {}
  },
  setup(s) {
    const e = s, t = S(() => e.styleSheets ?? []), { version: r } = qn(t);
    mr($r, { sheets: t, version: r }), ol(() => e.model), mr(
      pi,
      S(() => (ds(), {
        ...tl(e.uiModel),
        overlayCases: Jn(e.overlays ?? [])
      }))
    );
    const i = e.composerRegistry ?? Vn({
      FormView: Li,
      SectionView: zl,
      TabView: Jl,
      SummaryView: to,
      TableView: _i,
      MasterDetail: uo
    });
    mr(ui, i);
    function u() {
      return fr(e.uiModel.filterExpression, e.model);
    }
    return (n, l) => u() ? (N(!0), R(Tt, { key: 0 }, wt(s.uiModel.components, (g) => (N(), q(va, {
      key: g.name,
      component: g,
      model: s.model
    }, null, 8, ["component", "model"]))), 128)) : Oe("", !0);
  }
});
function Va(s) {
  const e = s;
  return !!e && typeof e.eIsProxy == "function" && e.eIsProxy();
}
function Ua(s, e) {
  const t = e.getResourceSet(), r = s.eProxyURI();
  if (!r) return s;
  const i = r.toString(), u = i.indexOf("#");
  if (u > 0) {
    const l = i.substring(0, u), g = i.substring(u + 1);
    if (!t) return s;
    const h = e.getURI(), c = [];
    h && !l.includes("://") && c.push(Qr.createURI(l).resolve(h).toString()), c.push(l);
    for (const E of c) {
      const o = t.getResource(Qr.createURI(E), !1), p = o?.getEObject(g);
      if (p) return p;
    }
    return s;
  }
  const n = u === 0 ? i.substring(1) : i;
  return e.getEObject(n) ?? s;
}
function Ba(s, e) {
  for (const t of s.eClass().getEAllReferences()) {
    const r = s.eGet(t);
    if (r) {
      if (t.isMany()) {
        const i = r;
        for (let u = 0; u < i.length; u++) {
          const n = i[u];
          if (Va(n)) {
            const l = Ua(n, e);
            l !== n && (i[u] = l);
          }
        }
      } else if (Va(r)) {
        const i = Ua(r, e);
        i !== r && s.eSet(t, i);
      }
    }
  }
}
function no(s) {
  for (const e of s.getContents()) {
    Ba(e, s);
    for (const t of e.eAllContents())
      Ba(t, s);
  }
}
const lo = "VariableWrapper", oo = "VARIABLEWRAPPER";
function Oi(s) {
  return typeof s?.eClass == "function";
}
const co = /* @__PURE__ */ new Set([
  "_eResource",
  "_eContainer",
  "_eContainerFeature",
  "_eProxyURI",
  "_eAdapters",
  "_eDeliver",
  "eSettings"
]);
function Eo(s) {
  if (!co.has(s))
    return s.startsWith("_") ? s.slice(1) : s;
}
function ho(s) {
  if (!s || typeof s != "object") return;
  const e = s;
  if (e.type !== oo) return;
  const t = new Zr(e._value);
  return typeof e.variable == "string" && (t.variable = e.variable), t;
}
function Ai(s, e) {
  if (!e || typeof e != "object") return s;
  const t = e, r = s;
  for (const [i, u] of Object.entries(t)) {
    const n = Eo(i);
    if (n && !(i.startsWith("_") && n in t))
      try {
        r[n] = ho(u) ?? u;
      } catch {
      }
  }
  return s;
}
function Oa(s) {
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
    if (i !== lo) continue;
    const u = e[r];
    if (!(u instanceof Zr))
      try {
        e[r] = new Zr(u);
      } catch {
      }
  }
  return s;
}
function yi(s, e) {
  return Oa(Oi(s) ? s : Ai(e(), s));
}
const go = /color|colour|background|^fill$|^stroke$/i, po = /size|width|height|radius|blur|padding|transparence|transparency|opacity|zoom|count|index/i, fo = /^(is|has|show|enable|fullscreen|visible)/i, To = /datetime|timestamp|^moment$/i;
function Ur(s) {
  const e = s.getName?.() ?? "", t = s.getEType?.()?.getName?.() ?? "";
  return t === "EBoolean" || fo.test(e) ? "flag" : t === "EInt" || t === "EDouble" || po.test(e) ? "number" : go.test(e) ? "colour" : To.test(e) ? "moment" : "text";
}
function Tr(s) {
  const t = (s.getName?.() ?? "").replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ");
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function kr(s, e = s.getName?.() ?? "Settings") {
  const t = Sa.eINSTANCE, r = t.createFormView();
  r.name = e;
  for (const u of s.getEStructuralFeatures()) {
    const n = So(t, u);
    n.feature = u, n.label = Tr(u), r.fields.push(n);
  }
  const i = t.createUIModel();
  return i.name = e, i.targetClasses.push(s), i.components.push(r), i;
}
function So(s, e) {
  switch (Ur(e)) {
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
const Ci = /^[a-z][\w-]*:[A-Za-z][\w.]*$/, Aa = /* @__PURE__ */ new WeakMap();
function mo(s) {
  const e = [];
  for (const t of [s.fields, s.components]) {
    if (!t) continue;
    const r = Array.isArray(t) ? t : t.toArray?.() ?? [];
    e.push(...r);
  }
  return e;
}
function ya(s) {
  const e = [s];
  for (let t = 0; t < e.length; t += 1) e.push(...mo(e[t]));
  return e;
}
function Io(s) {
  if (s)
    for (const e of ya(s)) {
      const t = e.label;
      typeof t == "string" && Ci.test(t) && Aa.set(e, t);
    }
}
function No(s, e) {
  if (s)
    for (const t of ya(s)) {
      const r = Aa.get(t);
      if (!r) continue;
      const i = e(r);
      t.label = i === r ? r.split(".").pop() ?? r : i;
    }
}
function vo(s) {
  return typeof s == "string" && Ci.test(s);
}
function Lo(s) {
  return s ? ya(s).some((e) => Aa.has(e)) : !1;
}
const ca = /* @__PURE__ */ new Map();
let Ea;
function Di(s) {
  Ea = s, xr();
}
function xr() {
  if (Ea)
    for (const s of ca.values()) No(s, Ea);
}
const Ri = /* @__PURE__ */ new Map();
function wi(s) {
  return Ri.get(s);
}
function _o(s) {
  for (const e of s.targetClasses ?? [])
    e && Ri.set(e, s);
}
let Ga = !1;
function Oo() {
  if (Ga) return;
  Xi();
  const s = w.eINSTANCE;
  s.setEFactoryInstance(Sa.eINSTANCE), Ar.INSTANCE.set(s.getNsURI(), s), Ga = !0;
}
function ha(s, e, t = "/ui.xmi") {
  const r = ca.get(t);
  if (r) return r;
  try {
    Oo();
    const i = e.getNsURI();
    i && !Ar.INSTANCE.has(i) && Ar.INSTANCE.set(i, e);
    const u = new ki();
    u.getResourceFactoryRegistry().getExtensionToFactoryMap().set("xmi", new xi());
    const n = u.createResource(Qr.createURI(t));
    if (n.loadFromString(s), n.getContents().size() === 0) return;
    no(n);
    const l = n.getContents().get(0);
    return ca.set(t, l), _o(l), Io(l), xr(), l;
  } catch (i) {
    console.warn("[ui.vue.uimodel] UI-Modell konnte nicht gelesen werden:", i);
    return;
  }
}
const Ao = { class: "list" }, yo = { class: "list__head" }, Co = { class: "list__label" }, Do = { class: "list__count" }, Ro = {
  key: 0,
  class: "list__untyped"
}, wo = {
  key: 1,
  class: "list__empty"
}, Fo = ["aria-expanded", "onClick"], bo = { class: "entry__twist" }, Po = { class: "entry__title" }, Mo = {
  key: 0,
  class: "entry__actions"
}, Vo = ["title", "disabled", "onClick"], Uo = ["title", "disabled", "onClick"], Bo = ["title", "onClick"], Go = {
  key: 1,
  class: "entry__body"
}, Wo = /* @__PURE__ */ oe({
  __name: "SettingsListWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, { t } = Gr("uimodel"), r = S(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? Tr(e.feature) : "")
    ), i = S(() => e.custom?.resolvedStyle?.readOnly === !0);
    function u() {
      const f = e.feature?.getName?.();
      if (!(!f || !e.eObject))
        return e.eObject[f];
    }
    const n = S(() => {
      const f = u();
      return f ? typeof f.toArray == "function" ? f.toArray() : Array.isArray(f) ? f : [] : [];
    }), l = S(() => {
      try {
        return e.feature?.getEReferenceType?.() ?? void 0;
      } catch {
        return;
      }
    }), g = /* @__PURE__ */ new Map(), h = S(() => {
      const f = l.value;
      if (!f) return;
      const y = wi(f);
      return y || (g.has(f) || g.set(f, kr(f, f.getName?.() ?? "Eintrag")), g.get(f));
    }), c = pr(0), E = ["label", "name", "title", "key", "className", "id"];
    function o(f, y) {
      return p(f) ?? `${l.value?.getName?.() ?? t("List.entry")} ${y + 1}`;
    }
    function p(f, y = 1) {
      if (typeof f?.eClass != "function") return;
      const W = f;
      let A;
      try {
        A = [...f.eClass().getEStructuralFeatures()];
      } catch {
        return;
      }
      for (const V of E) {
        if (!A.some((Re) => Re.getName?.() === V)) continue;
        const K = W[V], U = K && typeof K == "object" ? K.value : K;
        if (U != null && String(U) !== "") return String(U);
      }
      if (!(y < 1))
        for (const V of A) {
          const K = V.getName?.(), U = K ? p(W[K], y - 1) : void 0;
          if (U) return U;
        }
    }
    function D() {
      const f = l.value, y = e.feature?.getName?.();
      if (!f || !y || !e.eObject) return;
      const A = f.getEPackage?.()?.getEFactoryInstance?.()?.create(f);
      if (!A) return;
      Oa(A);
      const V = u();
      if (V) {
        if (typeof V.add == "function") V.add(A);
        else if (Array.isArray(V)) V.push(A);
        else return;
        c.value = n.value.length - 1;
      }
    }
    function G(f) {
      const y = u();
      if (y) {
        if (typeof y.removeAt == "function") y.removeAt(f);
        else if (Array.isArray(y)) y.splice(f, 1);
        else return;
        c.value = Math.min(c.value, Math.max(n.value.length - 1, 0));
      }
    }
    function H(f, y) {
      const W = u();
      if (!W) return;
      const A = f + y;
      if (!(A < 0 || A >= n.value.length)) {
        if (typeof W.move == "function") W.move(A, f);
        else if (Array.isArray(W)) {
          const [V] = W.splice(f, 1);
          W.splice(A, 0, V);
        } else return;
        c.value = A;
      }
    }
    return (f, y) => (N(), R("section", Ao, [
      le("header", yo, [
        le("span", Co, _e(r.value), 1),
        le("span", Do, _e(n.value.length), 1),
        y[0] || (y[0] = le("span", { class: "list__spacer" }, null, -1)),
        l.value && !i.value ? (N(), q(B(Hi), {
          key: 0,
          size: "sm",
          onClick: D
        }, {
          default: Ui(() => [
            ka(_e(B(t)("List.add")), 1)
          ]),
          _: 1
        })) : Oe("", !0)
      ]),
      l.value ? n.value.length ? Oe("", !0) : (N(), R("p", wo, _e(B(t)("List.empty")), 1)) : (N(), R("p", Ro, _e(B(t)("List.untyped")), 1)),
      (N(!0), R(Tt, null, wt(n.value, (W, A) => (N(), R("div", {
        key: A,
        class: "entry"
      }, [
        le("button", {
          type: "button",
          class: "entry__head",
          "aria-expanded": c.value === A,
          onClick: (V) => c.value = c.value === A ? -1 : A
        }, [
          le("span", bo, _e(c.value === A ? "▾" : "▸"), 1),
          le("span", Po, _e(o(W, A)), 1)
        ], 8, Fo),
        i.value ? Oe("", !0) : (N(), R("span", Mo, [
          le("button", {
            type: "button",
            title: B(t)("List.up"),
            disabled: A === 0,
            onClick: (V) => H(A, -1)
          }, "↑", 8, Vo),
          le("button", {
            type: "button",
            title: B(t)("List.down"),
            disabled: A === n.value.length - 1,
            onClick: (V) => H(A, 1)
          }, " ↓ ", 8, Uo),
          le("button", {
            type: "button",
            title: B(t)("List.remove"),
            class: "entry__remove",
            onClick: (V) => G(A)
          }, "✕", 8, Bo)
        ])),
        c.value === A ? (N(), R("div", Go, [
          h.value ? (N(), q(B(_a), {
            key: 0,
            "ui-model": h.value,
            model: W
          }, null, 8, ["ui-model", "model"])) : Oe("", !0)
        ])) : Oe("", !0)
      ]))), 128))
    ]));
  }
}), Xr = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, Fi = /* @__PURE__ */ Xr(Wo, [["__scopeId", "data-v-6a541b41"]]), $o = { class: "object" }, Yo = {
  key: 0,
  class: "object__label"
}, ko = {
  key: 1,
  class: "object__untyped"
}, xo = {
  key: 2,
  class: "object__body"
}, Xo = /* @__PURE__ */ oe({
  __name: "SettingsObjectWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, { t } = Gr("uimodel"), r = S(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? Tr(e.feature) : "")
    ), i = S(() => {
      try {
        return e.feature?.getEReferenceType?.() ?? void 0;
      } catch {
        return;
      }
    });
    function u() {
      const c = e.feature?.getName?.();
      if (!(!c || !e.eObject))
        return e.eObject[c];
    }
    function n() {
      const c = i.value, E = e.feature?.getName?.();
      if (!c || !E || !e.eObject || u()) return;
      const p = c.getEPackage?.()?.getEFactoryInstance?.()?.create(c);
      p && (Oa(p), e.eObject[E] = p);
    }
    Dt(() => [e.eObject, e.feature], n, { immediate: !0 });
    const l = S(() => u()), g = /* @__PURE__ */ new Map(), h = S(() => {
      const c = i.value;
      if (!c) return;
      const E = wi(c);
      return E || (g.has(c) || g.set(c, kr(c, c.getName?.() ?? "Eintrag")), g.get(c));
    });
    return (c, E) => (N(), R("section", $o, [
      r.value ? (N(), R("span", Yo, _e(r.value), 1)) : Oe("", !0),
      i.value ? (N(), R("div", xo, [
        h.value && l.value ? (N(), q(B(_a), {
          key: 0,
          "ui-model": h.value,
          model: l.value
        }, null, 8, ["ui-model", "model"])) : Oe("", !0)
      ])) : (N(), R("p", ko, _e(B(t)("Object.untyped")), 1))
    ]));
  }
}), bi = /* @__PURE__ */ Xr(Xo, [["__scopeId", "data-v-fc101249"]]), Ho = { class: "field-row__control" }, jo = {
  key: 2,
  class: "set"
}, qo = { class: "set__label" }, Ko = ["title", "aria-pressed"], zo = /* @__PURE__ */ oe({
  __name: "SettingsFieldWidget",
  props: {
    eObject: {},
    feature: {},
    custom: {}
  },
  setup(s) {
    const e = s, t = Ct(qi), { t: r } = Gr("uimodel"), i = S(() => {
      const d = u();
      return n(d) ? d : void 0;
    });
    function u() {
      const { eObject: d, feature: T } = e;
      if (!d || !T) return;
      const v = T.getName?.();
      return v ? d[v] : void 0;
    }
    function n(d) {
      return typeof d?.setTo == "function";
    }
    const l = S(() => e.feature != null && g(e.feature));
    function g(d) {
      try {
        return d.getEReferenceType?.()?.getName?.() === "VariableWrapper";
      } catch {
        return !1;
      }
    }
    const h = S(() => {
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
    const E = S(() => {
      const d = c();
      return d ? typeof d.toArray == "function" ? d.toArray() : Array.isArray(d) ? d : [] : [];
    });
    function o(d) {
      return E.value.some((T) => T === d);
    }
    function p(d, T) {
      const v = c();
      if (!v || !U.value) return;
      if (T) {
        if (o(d)) return;
        typeof v.add == "function" ? v.add(d) : Array.isArray(v) && v.push(d);
        return;
      }
      const z = E.value.findIndex((se) => se === d);
      z < 0 || (typeof v.removeAt == "function" ? v.removeAt(z) : Array.isArray(v) && v.splice(z, 1));
    }
    const D = S({
      get: () => {
        const d = u();
        return G(d) ? d.value : d;
      },
      set: (d) => {
        const { eObject: T, feature: v } = e, z = v?.getName?.();
        if (!T || !z) return;
        const se = u();
        if (G(se)) {
          se.value = d;
          return;
        }
        T[z] = d;
      }
    });
    function G(d) {
      return !!d && typeof d == "object" && "value" in d;
    }
    const H = S(() => l.value ? i.value?.variable ?? "" : ""), f = S(() => !!H.value), y = pr(!1);
    Dt(f, (d) => {
      d && (y.value = !0);
    }, { immediate: !0 });
    const W = S(() => {
      try {
        return (t?.getAllVariables() ?? []).map(([d]) => d);
      } catch {
        return [];
      }
    }), A = S({
      get: () => H.value,
      set: (d) => {
        if (!i.value) return;
        if (!d) return V();
        const T = t?.getVariable(d);
        T && i.value.setTo(T);
      }
    });
    function V() {
      i.value && (i.value.value = i.value.value, y.value = !1);
    }
    function K() {
      f.value ? V() : y.value = !y.value;
    }
    const U = S(() => !e.custom?.resolvedStyle?.readOnly && !f.value), Re = S(() => f.value ? r("Field.boundFrom", { name: H.value }) : void 0), j = S({
      get: () => (l.value ? i.value?.value : D.value) ?? "",
      set: (d) => {
        U.value && (l.value ? i.value && (i.value.value = d) : D.value = d);
      }
    }), Pe = S({
      get: () => {
        const d = l.value ? i.value?.value : D.value;
        if (d == null || d === "") return "";
        const T = Number(d);
        return Number.isFinite(T) ? T : "";
      },
      set: (d) => {
        if (!U.value) return;
        const T = d === "" || d === null ? void 0 : Number(d);
        j.value = T !== void 0 && Number.isFinite(T) ? T : void 0;
      }
    }), Xe = S({
      get: () => j.value === !0 || j.value === "true",
      set: (d) => {
        j.value = d;
      }
    }), Me = S(() => e.custom?.rawWidget?.eClass?.()?.getName?.() ?? ""), Je = S(() => {
      const d = e.feature?.getEType?.()?.getName?.();
      return d === "EInt" || d === "EDouble" || d === "ELong" || d === "EFloat";
    }), He = S(() => {
      const d = e.custom?.rawWidget, T = d?.values, v = T && typeof T.map == "function" ? [...T] : [], z = d?.optionLabel;
      return v.map((se) => {
        const mt = Je.value ? Number(se) : se;
        let we = se;
        if (z?.body && e.eObject)
          try {
            const ge = Yr(z, e.eObject, { option: se });
            ge != null && ge !== "" && (we = String(ge));
          } catch {
          }
        return { value: mt, text: vo(we) ? r(we) : we };
      });
    }), ie = S(() => Number(e.custom?.rawWidget?.rows) || 6), Ve = S(() => ({
      min: e.custom?.rawWidget?.min,
      max: e.custom?.rawWidget?.max,
      step: e.custom?.rawWidget?.step
    })), he = S(() => {
      if (h.value) return "set";
      switch (Me.value) {
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
          const d = e.feature ? Ur(e.feature) : "text";
          return d === "colour" || d === "moment" ? d : "text";
        }
        default:
          return e.feature ? Ur(e.feature) : "text";
      }
    }), et = S({
      get() {
        const d = j.value;
        if (!d) return "";
        const T = new Date(String(d));
        if (Number.isNaN(T.getTime())) return "";
        const v = (z) => String(z).padStart(2, "0");
        return `${T.getFullYear()}-${v(T.getMonth() + 1)}-${v(T.getDate())}T${v(T.getHours())}:${v(T.getMinutes())}`;
      },
      set(d) {
        if (!d) {
          j.value = "";
          return;
        }
        const T = new Date(d);
        j.value = Number.isNaN(T.getTime()) ? "" : T.toISOString();
      }
    }), ne = S(
      () => e.custom?.resolvedStyle?.label ?? (e.feature ? Tr(e.feature) : "")
    ), tt = S(() => y.value && W.value.length === 0);
    return (d, T) => i.value || !l.value ? (N(), R("div", {
      key: 0,
      class: Ca(["field-row", { "field-row--bound": f.value }])
    }, [
      le("div", Ho, [
        y.value && !tt.value ? (N(), q(B(Ra), {
          key: 0,
          modelValue: A.value,
          "onUpdate:modelValue": T[0] || (T[0] = (v) => A.value = v),
          label: ne.value,
          options: W.value,
          disabled: s.custom?.resolvedStyle?.readOnly,
          placeholder: B(r)("Field.noVariable"),
          clearable: ""
        }, null, 8, ["modelValue", "label", "options", "disabled", "placeholder"])) : tt.value ? (N(), q(B(ur), {
          key: 1,
          "model-value": "",
          label: ne.value,
          disabled: "",
          hint: B(r)("Field.noVariables")
        }, null, 8, ["label", "hint"])) : he.value === "set" ? (N(), R("fieldset", jo, [
          le("legend", qo, _e(ne.value), 1),
          (N(!0), R(Tt, null, wt(He.value, (v) => (N(), q(B(wa), {
            key: String(v.value),
            "model-value": o(v.value),
            label: v.text,
            disabled: !U.value,
            "onUpdate:modelValue": (z) => p(v.value, z)
          }, null, 8, ["model-value", "label", "disabled", "onUpdate:modelValue"]))), 128))
        ])) : he.value === "flag" ? (N(), q(B(wa), {
          key: 3,
          modelValue: Xe.value,
          "onUpdate:modelValue": T[1] || (T[1] = (v) => Xe.value = v),
          label: ne.value,
          disabled: !U.value
        }, null, 8, ["modelValue", "label", "disabled"])) : he.value === "choice" ? (N(), q(B(Ra), {
          key: 4,
          modelValue: j.value,
          "onUpdate:modelValue": T[2] || (T[2] = (v) => j.value = v),
          label: ne.value,
          options: He.value,
          "value-key": "value",
          "label-key": "text",
          disabled: !U.value,
          clearable: ""
        }, null, 8, ["modelValue", "label", "options", "disabled"])) : he.value === "colour" ? (N(), q(B(ji), {
          key: 5,
          modelValue: j.value,
          "onUpdate:modelValue": T[3] || (T[3] = (v) => j.value = v),
          label: ne.value,
          disabled: !U.value,
          hint: Re.value ?? s.custom?.resolvedStyle?.placeholder
        }, null, 8, ["modelValue", "label", "disabled", "hint"])) : he.value === "lines" ? (N(), q(B(ur), {
          key: 6,
          modelValue: j.value,
          "onUpdate:modelValue": T[4] || (T[4] = (v) => j.value = v),
          label: ne.value,
          rows: ie.value,
          placeholder: s.custom?.resolvedStyle?.placeholder,
          disabled: !U.value
        }, null, 8, ["modelValue", "label", "rows", "placeholder", "disabled"])) : he.value === "number" ? (N(), q(B(ur), {
          key: 7,
          modelValue: Pe.value,
          "onUpdate:modelValue": T[5] || (T[5] = (v) => Pe.value = v),
          label: ne.value,
          type: "number",
          min: Ve.value.min,
          max: Ve.value.max,
          step: Ve.value.step,
          disabled: !U.value
        }, null, 8, ["modelValue", "label", "min", "max", "step", "disabled"])) : he.value === "moment" ? (N(), q(B(ur), {
          key: 8,
          modelValue: et.value,
          "onUpdate:modelValue": T[6] || (T[6] = (v) => et.value = v),
          label: ne.value,
          type: "datetime-local",
          disabled: !U.value
        }, null, 8, ["modelValue", "label", "disabled"])) : (N(), q(B(ur), {
          key: 9,
          modelValue: j.value,
          "onUpdate:modelValue": T[7] || (T[7] = (v) => j.value = v),
          label: ne.value,
          placeholder: s.custom?.resolvedStyle?.placeholder,
          disabled: !U.value
        }, null, 8, ["modelValue", "label", "placeholder", "disabled"]))
      ]),
      l.value ? (N(), R("button", {
        key: 0,
        type: "button",
        class: Ca(["bind", { on: f.value, armed: y.value && !f.value }]),
        title: f.value ? B(r)("Field.unbind", { name: H.value }) : B(r)("Field.bind"),
        "aria-pressed": f.value,
        onClick: K
      }, " {x} ", 10, Ko)) : Oe("", !0)
    ], 2)) : Oe("", !0);
  }
}), Br = /* @__PURE__ */ Xr(zo, [["__scopeId", "data-v-2be1f1ee"]]), Qo = "org.eclipse.daanse.board.app.ui.vue.composables";
let Wa = !1;
function Zo() {
  if (Wa) return !0;
  const s = Ar.INSTANCE.getEPackage(Qo)?.getEClassifier(
    "VariableWrapper"
  );
  return s ? (Qe.registerForReference(Br, { targetClass: s }), Wa = !0, !0) : !1;
}
function ga(s, e = /* @__PURE__ */ new Set()) {
  if (!e.has(s)) {
    e.add(s);
    for (const t of s.getEStructuralFeatures()) {
      if (ec(t)) {
        if ($a(t)) {
          Qe.registerForFeature(
            s,
            t.getName?.() ?? "",
            Br
          );
          continue;
        }
        Qe.registerForFeature(
          s,
          t.getName?.() ?? "",
          Fi
        );
        const r = t.getEReferenceType?.();
        r && ga(r, e);
        continue;
      }
      if (Jo(t)) {
        Qe.registerForFeature(
          s,
          t.getName?.() ?? "",
          bi
        );
        const r = t.getEReferenceType?.();
        r && ga(r, e);
        continue;
      }
      $a(t) && Qe.registerForFeature(
        s,
        t.getName?.() ?? "",
        Br
      );
    }
  }
}
function $a(s) {
  try {
    return s.getEReferenceType?.() == null;
  } catch {
    return !0;
  }
}
function Jo(s) {
  try {
    const e = s.getEReferenceType?.();
    return e ? e.getName?.() !== "VariableWrapper" : !1;
  } catch {
    return !1;
  }
}
function ec(s) {
  try {
    return s.isMany?.() === !0 || (s.getUpperBound?.() ?? 1) !== 1;
  } catch {
    return !1;
  }
}
const tc = { class: "settings-form" }, sc = {
  key: 1,
  class: "settings-form__empty"
}, rc = /* @__PURE__ */ oe({
  __name: "SettingsForm",
  props: /* @__PURE__ */ Bi({
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
    const { t: e, revision: t } = Gr();
    Di(e), Dt(t, () => {
      xr(), Ti();
    }), w.eINSTANCE, mr(Ni, Qe), Zo();
    const r = Gi(s, "modelValue"), i = s;
    function u() {
      const E = yi(r.value, i.create);
      E !== r.value && (r.value = E);
    }
    Wi(u), Dt(r, u);
    const n = S(() => r.value), l = Da(), g = Da(), h = S(() => {
      const E = r.value?.eClass?.();
      if (E && ga(E), i.uiModel) return Hr(i.uiModel);
      if (i.domainPackage)
        for (const D of i.entryForms ?? [])
          ha(D.xmi, i.domainPackage, D.uri);
      if (i.uiModelXmi && i.domainPackage) {
        const D = ha(i.uiModelXmi, i.domainPackage, i.uiModelUri);
        if (D) return Hr(D);
      }
      const p = n.value?.eClass?.();
      if (p)
        return g.value !== p && (g.value = p, l.value = Hr(kr(p))), l.value;
    }), c = S(() => (n.value?.eClass?.().getEStructuralFeatures().length ?? 0) > 0);
    return (E, o) => (N(), R("div", tc, [
      h.value && n.value && c.value ? (N(), q(B(_a), {
        key: 0,
        "ui-model": h.value,
        model: n.value
      }, null, 8, ["ui-model", "model"])) : (N(), R("p", sc, _e(s.emptyText ?? B(e)("uimodel:Form.empty")), 1))
    ]));
  }
}), ac = /* @__PURE__ */ Xr(rc, [["__scopeId", "data-v-46f3758c"]]), ic = { empty: "Für dieses Widget sind keine Einstellungen modelliert." }, uc = { boundFrom: "Von „{{name}}“", noVariable: "Keine Variable", noVariables: "Es sind noch keine Variablen angelegt.", unbind: "Bindung an „{{name}}“ lösen", bind: "An eine Variable binden" }, nc = { entry: "Eintrag", add: "Hinzufügen", untyped: "Diese Liste ist im Modell ohne Typ angegeben - es steht dort nur, dass es mehrere sind, nicht wovon. Solange das so ist, lässt sich hier nichts zeigen.", empty: "Noch nichts angelegt.", up: "Nach oben", down: "Nach unten", remove: "Entfernen" }, lc = {
  Form: ic,
  Field: uc,
  List: nc,
  Object: { untyped: "Diese Einstellung ist im Modell ohne Typ angegeben - es steht dort nur, dass etwas enthalten ist, nicht was. Solange das so ist, lässt sich hier nichts zeigen." }
}, oc = { empty: "No settings are modelled for this widget." }, cc = { boundFrom: "From “{{name}}”", noVariable: "No variable", noVariables: "No variables have been created yet.", unbind: "Unbind from “{{name}}”", bind: "Bind to a variable" }, Ec = { entry: "Entry", add: "Add", untyped: "This list has no type in the model - it only says there are several, not of what. As long as that is so, nothing can be shown here.", empty: "Nothing created yet.", up: "Move up", down: "Move down", remove: "Remove" }, hc = {
  Form: oc,
  Field: cc,
  List: Ec,
  Object: { untyped: "This setting has no type in the model - it only says something is contained, not what. As long as that is so, nothing can be shown here." }
};
var gc = Object.getOwnPropertyDescriptor, dc = (s, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? gc(e, t) : e, u = s.length - 1, n; u >= 0; u--)
    (n = s[u]) && (i = n(i) || i);
  return i;
};
const Pi = "uimodel";
let da = class {
  namespace = Pi;
  resources = {
    de: lc,
    en: hc
  };
};
da = dc([
  Ki({
    service: ["Translations"],
    properties: { "i18n.namespace": Pi }
  })
], da);
const pc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SettingsFieldWidget: Br,
  SettingsForm: ac,
  SettingsListWidget: Fi,
  SettingsObjectWidget: bi,
  get UimodelTranslations() {
    return da;
  },
  adopt: Ai,
  asModel: yi,
  formFor: kr,
  hasLabelKeys: Lo,
  isModelled: Oi,
  kindOf: Ur,
  labelOf: Tr,
  loadUIModel: ha,
  retranslate: xr,
  useLabelTranslator: Di
}, Symbol.toStringTag, { value: "Module" })), Ya = "org.eclipse.daanse.board.app.ui.vue.uimodel", fc = "0.0.1-next.1";
async function Dc(s) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${Ya}: tsm runtime is not initialized`);
  e.register(Ya, pc, fc, "ui.vue.uimodel"), await void 0;
}
async function Rc(s) {
  await void 0;
}
export {
  Br as SettingsFieldWidget,
  ac as SettingsForm,
  Fi as SettingsListWidget,
  bi as SettingsObjectWidget,
  da as UimodelTranslations,
  Dc as activate,
  Ai as adopt,
  yi as asModel,
  Rc as deactivate,
  kr as formFor,
  Lo as hasLabelKeys,
  Oi as isModelled,
  Ur as kindOf,
  Tr as labelOf,
  ha as loadUIModel,
  xr as retranslate,
  Di as useLabelTranslator
};
