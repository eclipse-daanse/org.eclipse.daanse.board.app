import { BaseDatasource as k, IBaseConnectionConfigurationImpl as X } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY as ee } from "org.eclipse.daanse.board.app.lib.api.connection";
import { inject as te } from "@eclipse-daanse/tsm";
import { BasicEObject as ie, createBasicEList as b, BasicEFactory as re, BasicEPackage as ne, EPackageRegistry as B, BasicEClass as V, BasicEAttribute as S, BasicEReference as oe, getEcorePackage as g } from "@emfts/core";
const { serviceId: se } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), p = [];
for (let n = 0; n < 256; ++n)
  p.push((n + 256).toString(16).slice(1));
function le(n, e = 0) {
  return (p[n[e + 0]] + p[n[e + 1]] + p[n[e + 2]] + p[n[e + 3]] + "-" + p[n[e + 4]] + p[n[e + 5]] + "-" + p[n[e + 6]] + p[n[e + 7]] + "-" + p[n[e + 8]] + p[n[e + 9]] + "-" + p[n[e + 10]] + p[n[e + 11]] + p[n[e + 12]] + p[n[e + 13]] + p[n[e + 14]] + p[n[e + 15]]).toLowerCase();
}
const ae = new Uint8Array(16);
function Ee() {
  return crypto.getRandomValues(ae);
}
function H(n, e, t) {
  return crypto.randomUUID ? crypto.randomUUID() : ce(n);
}
function ce(n, e, t) {
  n = n || {};
  const o = n.random ?? n.rng?.() ?? Ee();
  if (o.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, le(o);
}
async function ue(n, e, t, o) {
  const r = o;
  if (e) {
    const s = "id" + H(), i = `SET [Row_Dim_${s}] AS 'VisualTotals(Distinct(Hierarchize({Ascendants(${e.UName}), Descendants(${e.UName})})))'`, l = r.find(
      (a) => a.LEVEL_UNIQUE_NAME === e.LName
    ), u = r.filter((a) => a.HIERARCHY_UNIQUE_NAME === l?.HIERARCHY_UNIQUE_NAME && a.LEVEL_NUMBER <= l.LEVEL_NUMBER);
    let E = "";
    for (let a = 0; a < u.length; a++)
      E.length ? E = `
          DrilldownLevel({
            ${E}
            },
            ${u[a].LEVEL_UNIQUE_NAME}
          )
        ` : E = `
        DrilldownLevel({
          ${u[a].LEVEL_UNIQUE_NAME}
        })
        `;
    if (t) {
      const a = r.find((_) => _.HIERARCHY_UNIQUE_NAME === t[0]?.HIERARCHY_UNIQUE_NAME && _.LEVEL_NUMBER === "0");
      for (let _ = 0; _ < t.length; _++)
        E.length ? E = `
            DrilldownMember({{
              ${E}
            }}, {${t[_].UName}})
          ` : E = `DrilldownMember({{DrilldownLevel({${a?.LEVEL_UNIQUE_NAME}})}}, {${t[_].UName}})`;
    }
    return E = `
      Hierarchize(Intersect(AddCalculatedMembers({
        ${E}
      }), [Row_Dim_${s}]))
    `, {
      with: i,
      select: E
    };
  } else if (n.filters?.enabled) {
    const s = n.filters;
    let i = "", l = "";
    const u = [];
    s?.multipleChoise ? u.push(...s.selectedItems) : u.push(s.selectedItem);
    const E = [];
    u.forEach((c) => {
      const d = c.LNum;
      E[d] ? E[d].push(c) : E[d] = [c];
    });
    const _ = r.filter((c) => c.HIERARCHY_UNIQUE_NAME === n.originalItem.HIERARCHY_UNIQUE_NAME).find((c) => c.LEVEL_NUMBER === "0");
    if (!_)
      return {
        select: "",
        with: ""
      };
    const I = `[FILTER_${"id" + H()}]`, A = u.map((c) => `Ascendants(${c.UName}), Descendants(${c.UName})`).join(","), M = [];
    s.deselectedItems && s.deselectedItems.forEach((c) => {
      const d = c.LNum;
      M[d] ? M[d].push(c) : M[d] = [c];
    });
    const f = Math.max(
      E.length,
      M.length
    ), h = [];
    if (t.forEach((c) => {
      if (c.HIERARCHY_UNIQUE_NAME !== n.originalItem.HIERARCHY_UNIQUE_NAME)
        return;
      const d = parseInt(c.LNum);
      h[d] ? h[d].push(c) : h[d] = [c];
    }), h.length) {
      for (let c = 0; c < h.length; c++) {
        const d = h[c].map((w) => w.UName).join(",");
        c === 0 ? l = `DrilldownMember({{${_.LEVEL_UNIQUE_NAME}.members}}, {${d}})` : l = `DrilldownMember({{${l}}}, {${d}})`;
      }
      l = `Intersect(AddCalculatedMembers(${l}), ${I})`;
    } else
      l = `Intersect(AddCalculatedMembers({${_.LEVEL_UNIQUE_NAME}.members}), ${I}))`;
    for (let c = 0; c < f; c++) {
      if (E[c]) {
        const d = E[c].map((w) => `Ascendants(${w.UName}), Descendants(${w.UName})`).join(",");
        i.length ? i = `Union({${d}}, {${i}})` : i = `{${d}}`;
      }
      if (M[c]) {
        const d = M[c].map((w) => `Descendants(${w.UName})`).join(",");
        i.length ? i = `Except({${i}}, {${d}})` : i = `{${d}}`;
      }
    }
    return l = `Hierarchize(${l})`, s.selectAll ? i = `SET ${I} AS 'VisualTotals(Distinct(Hierarchize(${i})))' ` : i = `SET ${I} AS 'VisualTotals(Distinct(Hierarchize(Intersect({${A}}, ${i}))))' `, {
      with: i,
      select: l
    };
  } else {
    let s = "";
    const i = r.find((l) => l.HIERARCHY_UNIQUE_NAME === t[0]?.HIERARCHY_UNIQUE_NAME && l.LEVEL_NUMBER === "0");
    for (let l = 0; l < t.length; l++)
      l === 0 ? t[l].LNum === "0" ? s = `
              DrilldownMember({{
                ${i?.LEVEL_UNIQUE_NAME}.members
              }}, {${t[l].UName}})
            ` : s = `DrilldownMember({{DrilldownLevel({${i?.LEVEL_UNIQUE_NAME}})}}, {${t[l].UName}})` : s = `
            DrilldownMember({{
              ${s}
            }}, {${t[l].UName}})
          `;
    return s = `
        Hierarchize(
            ${s}
        )`, {
      with: "",
      select: s
    };
  }
}
async function de(n, e, t, o) {
  const r = o;
  if (e) {
    const s = "id" + H(), i = `SET [Col_Dim_${s}] AS 'VisualTotals(Distinct(Hierarchize({Ascendants(${e.UName}), Descendants(${e.UName})})))'`, l = r.find(
      (a) => a.LEVEL_UNIQUE_NAME === e.LName
    ), u = r.filter((a) => a.HIERARCHY_UNIQUE_NAME === l?.HIERARCHY_UNIQUE_NAME && a.LEVEL_NUMBER <= l.LEVEL_NUMBER);
    let E = "";
    for (let a = 0; a < u.length; a++)
      E.length ? E = `
          DrilldownLevel({
            ${E}
            },
            ${u[a].LEVEL_UNIQUE_NAME}
          )
        ` : E = `
        DrilldownLevel({
          ${u[a].LEVEL_UNIQUE_NAME}
        })
        `;
    if (t) {
      const a = r.find((_) => _.HIERARCHY_UNIQUE_NAME === t[0]?.HIERARCHY_UNIQUE_NAME && _.LEVEL_NUMBER === "0");
      for (let _ = 0; _ < t.length; _++)
        E.length ? E = `
            DrilldownMember({{
              ${E}
            }}, {${t[_].UName}})
          ` : E = `DrilldownMember({{DrilldownLevel({${a?.LEVEL_UNIQUE_NAME}})}}, {${t[_].UName}})`;
    }
    return E = `
    Hierarchize(Intersect(AddCalculatedMembers({
      ${E}
    }), [Col_Dim_${s}]))
    `, {
      with: i,
      select: E
    };
  } else if (n.filters?.enabled) {
    const s = n.filters;
    let i = "", l = "";
    const u = [];
    s?.multipleChoise ? u.push(...s.selectedItems) : u.push(s.selectedItem);
    const E = [];
    u.forEach((c) => {
      const d = c.LNum;
      E[d] ? E[d].push(c) : E[d] = [c];
    });
    const _ = r.filter((c) => c.HIERARCHY_UNIQUE_NAME === n.originalItem.HIERARCHY_UNIQUE_NAME).find((c) => c.LEVEL_NUMBER === "0");
    if (!_)
      return {
        select: "",
        with: ""
      };
    const I = `[FILTER_${"id" + H()}]`, A = u.map((c) => `Ascendants(${c.UName}), Descendants(${c.UName})`).join(","), M = [];
    s.deselectedItems && s.deselectedItems.forEach((c) => {
      const d = c.LNum;
      M[d] ? M[d].push(c) : M[d] = [c];
    });
    const f = Math.max(
      E.length,
      M.length
    ), h = [];
    if (t.forEach((c) => {
      if (c.HIERARCHY_UNIQUE_NAME !== n.originalItem.HIERARCHY_UNIQUE_NAME)
        return;
      const d = parseInt(c.LNum);
      h[d] ? h[d].push(c) : h[d] = [c];
    }), h.length) {
      for (let c = 0; c < h.length; c++) {
        const d = h[c].map((w) => w.UName).join(",");
        c === 0 ? l = `DrilldownMember({{${_.LEVEL_UNIQUE_NAME}.members}}, {${d}})` : l = `DrilldownMember({{${l}}}, {${d}})`;
      }
      l = `Intersect(AddCalculatedMembers(${l}), ${I})`;
    } else
      l = `Intersect(AddCalculatedMembers({${_.LEVEL_UNIQUE_NAME}.members}), ${I}))`;
    for (let c = 0; c < f; c++) {
      if (E[c]) {
        const d = E[c].map((w) => `Ascendants(${w.UName}), Descendants(${w.UName})`).join(",");
        i.length ? i = `Union({${d}}, {${i}})` : i = `{${d}}`;
      }
      if (M[c]) {
        const d = M[c].map((w) => `Descendants(${w.UName})`).join(",");
        i.length ? i = `Except({${i}}, {${d}})` : i = `{${d}}`;
      }
    }
    return l = `Hierarchize(${l})`, s.selectAll ? i = `SET ${I} AS 'VisualTotals(Distinct(Hierarchize(${i})))' ` : i = `SET ${I} AS 'VisualTotals(Distinct(Hierarchize(Intersect({${A}}, ${i}))))' `, {
      with: i,
      select: l
    };
  } else {
    let s = "";
    const i = r.find((l) => l.HIERARCHY_UNIQUE_NAME === t[0]?.HIERARCHY_UNIQUE_NAME && l.LEVEL_NUMBER === "0");
    for (let l = 0; l < t.length; l++)
      l === 0 ? t[l].LNum === "0" ? s = `
              DrilldownMember({{
                ${i?.LEVEL_UNIQUE_NAME}.members
              }}, {${t[l].UName}})
            ` : s = `DrilldownMember({{DrilldownLevel({${i?.LEVEL_UNIQUE_NAME}})}}, {${t[l].UName}})` : s = `
            DrilldownMember({{
              ${s}
            }}, {${t[l].UName}})
          `;
    return s = `
        Hierarchize(
          AddCalculatedMembers
          (
            ${s}
          )
        )`, {
      with: "",
      select: s
    };
  }
}
async function he(n, e, t, o, r, s, i, l, u, E, a, _) {
  l.length === 1 && u?.showSingleMeasureHeader === !1 && (s = s.filter((I) => I.type !== "Values"), i = i.filter((I) => I.type !== "Values"));
  const U = Ie(a);
  if (!s.length || !i.length)
    return Re(
      s,
      i,
      l,
      n,
      e,
      t,
      o,
      r,
      u,
      E,
      U,
      _
    );
  {
    let I = "WITH", A = "SELECT";
    const M = s.some((C) => C.type === "Values") || i.some((C) => C.type === "Values"), f = z(l, n, U.where, M);
    u.showEmpty || (A += " NON EMPTY");
    const h = j(s, E), c = await q(
      s,
      e,
      o,
      l,
      _
    );
    c.with.length && (I = `${I} ${c.with}`), A = `${A}
${c.select} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${h} ON 1,
`, u.showEmpty || (A += " NON EMPTY");
    const d = W(i, E), w = await G(
      i,
      t,
      r,
      l,
      _
    );
    w.with.length && (I = `${I} ${w.with}`), A = `${A}
${w.select} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${d} ON 0
`;
    let T = "";
    return U.with && (I += U.with), I.length > 4 && (T += I), T += `
`, T += A, T += f, T;
  }
}
async function G(n, e, t, o, r) {
  let s = "", i = "";
  if (n.length >= 1)
    for (let l = 0; l < n.length; l++) {
      const u = n[l], E = await _e(
        u,
        e,
        t,
        o,
        r
      );
      l === 0 ? (s = E.select, i = E.with) : (i += E.with, s = `
          CrossJoin(
            ${s},
            ${E.select}
          )`);
    }
  else
    s = "";
  return {
    select: s,
    with: i
  };
}
async function _e(n, e, t, o, r) {
  if (n.type === "Values")
    return {
      select: `{${o.map((_) => _.originalItem.MEASURE_UNIQUE_NAME).join(",")}}`,
      with: ""
    };
  const s = await J(n, r), i = e.find((a) => a.HIERARCHY_UNIQUE_NAME === n.originalItem.HIERARCHY_UNIQUE_NAME), l = t.filter((a) => a.HIERARCHY_UNIQUE_NAME === n.originalItem.HIERARCHY_UNIQUE_NAME), u = l.some((a) => a.LNum === "0");
  if (i || l.length && u) {
    const a = await de(
      n,
      i,
      t,
      r
    );
    return {
      with: a.with,
      select: a.select
    };
  }
  return s ? {
    select: s.select,
    with: s.with
  } : {
    select: `Hierarchize(AddCalculatedMembers({${r.find(
      (a) => a.HIERARCHY_UNIQUE_NAME === n.originalItem.HIERARCHY_UNIQUE_NAME && a.LEVEL_NUMBER === "0"
    )?.LEVEL_UNIQUE_NAME}.members}))`,
    with: ""
  };
}
async function q(n, e, t, o, r) {
  let s = "", i = "";
  if (n.length >= 1)
    for (let l = 0; l < n.length; l++) {
      const u = n[l], E = await Ne(
        u,
        e,
        t,
        o,
        r
      );
      l === 0 ? (s = E.select, i = E.with) : (i += E.with, s = `
          CrossJoin(
            ${s},
            ${E.select}
          )`);
    }
  else n.length === 1 ? s = `{ ${n[0].originalItem.HIERARCHY_UNIQUE_NAME}.Members }` : s = "";
  return {
    select: s,
    with: i
  };
}
async function Ne(n, e, t, o, r) {
  if (n.type === "Values")
    return {
      select: `{${o.map((_) => _.originalItem.MEASURE_UNIQUE_NAME).join(",")}}`,
      with: ""
    };
  const s = await J(n, r), i = e.find((a) => a.HIERARCHY_UNIQUE_NAME === n.originalItem.HIERARCHY_UNIQUE_NAME), l = t.filter((a) => a.HIERARCHY_UNIQUE_NAME === n.originalItem.HIERARCHY_UNIQUE_NAME), u = l.some((a) => a.LNum === "0");
  if (i || l.length && u) {
    const a = await ue(
      n,
      i,
      l,
      r
    );
    return {
      with: a.with,
      select: a.select
    };
  }
  return s ? {
    select: s.select,
    with: s.with
  } : {
    select: `Hierarchize(AddCalculatedMembers({${r.find(
      (a) => a.HIERARCHY_UNIQUE_NAME === n.originalItem.HIERARCHY_UNIQUE_NAME && a.LEVEL_NUMBER === "0"
    )?.LEVEL_UNIQUE_NAME}.members}))`,
    with: ""
  };
}
function j(n, e) {
  const t = [];
  n.forEach((r) => {
    t.push(
      e.filter(
        (s) => s.HIERARCHY_UNIQUE_NAME === r.originalItem.HIERARCHY_UNIQUE_NAME
      )
    );
  });
  let o = t.flat(1).map((r) => `${r.LEVEL_UNIQUE_NAME}.[${r.PROPERTY_NAME}]`).join(",");
  return o && (o = `,${o}`), o;
}
function W(n, e) {
  const t = [];
  n.forEach((r) => {
    t.push(
      e.filter(
        (s) => s.HIERARCHY_UNIQUE_NAME === r.originalItem.HIERARCHY_UNIQUE_NAME
      )
    );
  });
  let o = t.flat(1).map((r) => `${r.LEVEL_UNIQUE_NAME}.[${r.PROPERTY_NAME}]`).join(",");
  return o && (o = `,${o}`), o;
}
async function Re(n, e, t, o, r, s, i, l, u, E, a, _) {
  const U = n.length === 0 && e.length === 0 && t.length > 0 && u?.showSingleMeasureHeader !== !1, I = n.some((f) => f.type === "Values") || e.some((f) => f.type === "Values") || U, A = Ae(u), M = z(t, o, a.where, I);
  if (n.length) {
    const f = await q(
      n,
      r,
      i,
      t,
      _
    ), h = f.select;
    let c = f.with ? `WITH ${f.with}` : "";
    a.with && (c ? c += a.with : c = `WITH ${a.with}`);
    const d = j(n, E);
    return `
      ${c}
      ${A}
      ${h}
      DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${d} ON 0
      ${M}
    `;
  } else if (e.length) {
    const f = await G(
      e,
      s,
      l,
      t,
      _
    ), h = f.select;
    let c = f.with ? `WITH ${f.with}` : "";
    a.with && (c ? c += a.with : c = `WITH ${a.with}`);
    const d = W(e, E);
    return `
      ${c}
      ${A}
      ${h}
      DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${d} ON 0
      ${M}
    `;
  } else if (t.length) {
    const f = t.map((h) => h.originalItem.MEASURE_UNIQUE_NAME).join(",");
    return `
      ${A}
      {${f}} ON 0
      ${M}
    `;
  }
  return "";
}
function Ae(n) {
  let e = "SELECT";
  return n.showEmpty || (e += " NON EMPTY"), e;
}
function z(n, e, t, o = !1) {
  let r = "";
  n.length === 1 && !o && (r = `${n[0].originalItem.MEASURE_UNIQUE_NAME}`);
  let s = "";
  return t ? r ? s = `FROM [${e}] WHERE (${t},${r}) CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS` : s = `FROM [${e}] WHERE (${t}) CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS` : r ? s = `FROM [${e}] WHERE ${r} CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS` : s = `FROM [${e}] CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS`, s;
}
function Ie(n) {
  let e = "", t = "";
  return n ? (n.map((r) => r.filters).forEach((r) => {
    if (r?.enabled)
      if (r.multipleChoise) {
        const s = "id" + H(), i = `${r.originalItem.DIMENSION_UNIQUE_NAME}.[FILTER_${s}]`, l = r.selectedItems.map((u) => u.UName).join(",");
        e += ` MEMBER ${i} AS 'Aggregate({${l}})'`, t.length && (t += ","), t += i;
      } else
        t.length && (t += ","), t += r.selectedItem.UName;
  }), {
    where: t,
    with: e
  }) : {
    where: null,
    with: null
  };
}
async function J(n, e) {
  const t = n.filters;
  let o = "", r = "";
  if (!t?.enabled) return null;
  const s = [];
  t.multipleChoise ? s.push(...t.selectedItems) : s.push(t.selectedItem);
  const i = [];
  s.forEach((E) => {
    const a = E.LNum;
    i[a] ? i[a].push(E) : i[a] = [E];
  });
  const l = [];
  t.deselectedItems && t.deselectedItems.forEach((E) => {
    const a = E.LNum;
    l[a] ? l[a].push(E) : l[a] = [E];
  });
  const u = Math.max(
    i.length,
    l.length
  );
  if (t.selectAll && !l.length) {
    const a = `[FILTER_${"id" + H()}]`, _ = e.find(
      (U) => U.HIERARCHY_UNIQUE_NAME === n.originalItem.HIERARCHY_UNIQUE_NAME && U.LEVEL_NUMBER === "0"
    );
    o = `SET ${a} AS 'VisualTotals(Distinct(Hierarchize(AddCalculatedMembers({${_?.LEVEL_UNIQUE_NAME}.members}))))' `, r = `Hierarchize(AddCalculatedMembers({${_?.LEVEL_UNIQUE_NAME}.members}))`;
  } else {
    const a = e.filter((A) => A.HIERARCHY_UNIQUE_NAME === n.originalItem.HIERARCHY_UNIQUE_NAME).find((A) => A.LEVEL_NUMBER === "0");
    if (!a) return null;
    const U = `[FILTER_${"id" + H()}]`, I = s.map((A) => `Ascendants(${A.UName}), Descendants(${A.UName})`).join(",");
    for (let A = 0; A < u; A++) {
      if (i[A]) {
        const M = i[A].map((f) => `Ascendants(${f.UName}), Descendants(${f.UName})`).join(",");
        o.length ? o = `Union({${M}}, {${o}})` : o = `{${M}}`;
      }
      if (l[A]) {
        const M = l[A].map((f) => `Descendants(${f.UName})`).join(",");
        o.length ? o = `Except({${o}}, {${M}})` : o = `{${M}}`;
      }
    }
    t.selectAll ? o = `SET ${U} AS 'VisualTotals(Distinct(Hierarchize(${o})))' ` : o = `SET ${U} AS 'VisualTotals(Distinct(Hierarchize(Intersect({${I}}, ${o}))))' `, r = `Hierarchize(Intersect(AddCalculatedMembers({${a.LEVEL_UNIQUE_NAME}.members}), ${U}))`;
  }
  return {
    with: o,
    select: r
  };
}
function m(n) {
  return Array.isArray(n) ? n : n ? [n] : [];
}
const Ue = (n, e) => {
  let t = [], o = [], r = [], s = [], i = [];
  if (!n.Body.ExecuteResponse) return null;
  const l = e.properties;
  console.log("properties in helper", l);
  let u = m(
    n.Body.ExecuteResponse.return?.root.Axes?.Axis
  )?.[0]?.Tuples;
  const E = Array.isArray(u) ? u.map((h) => h.Tuple) : m(
    u?.Tuple
  );
  u = m(
    n.Body.ExecuteResponse.return?.root?.Axes?.Axis
  )?.[1]?.Tuples;
  let a = [];
  n.Body.ExecuteResponse.return.root.Axes?.Axis?.[1]?.__attrs.name === "Axis1" ? a = Array.isArray(u) ? u.map((h) => h.Tuple) : m(
    u?.Tuple
  ) : n.Body.ExecuteResponse.return.root.Axes?.Axis?.[1]?.__attrs.name === "SlicerAxis" && (a = Array.isArray(u) ? u.map((h) => h.Tuple) : m(
    u?.Tuple
  ));
  const _ = m(
    n.Body.ExecuteResponse.return.root.CellData?.Cell
  );
  !e.rows.length && !e.columns.length ? (t = E.map((h) => m(h.Member)), o = a.map((h) => m(h.Member)), r = F(_, t, o)) : e.columns.length ? (t = E.map((h) => m(h.Member)), o = a.map((h) => m(h.Member)), r = F(_, t, o)) : (t = a.map((h) => m(h.Member)), o = E.map((h) => m(h.Member)), r = F(_, t, o));
  const U = [], I = [];
  console.log("Params in helper", e), t[0]?.forEach((h) => {
    if (!e.showColumnsProperties) return;
    console.log(h);
    const c = l.filter(
      (d) => d.HIERARCHY_UNIQUE_NAME === h.HIERARCHY_UNIQUE_NAME
    );
    U.push(...c);
  }), o[0]?.forEach((h) => {
    if (!e.showRowsProperties) return;
    const c = l.filter(
      (d) => d.HIERARCHY_UNIQUE_NAME === h.HIERARCHY_UNIQUE_NAME
    );
    I.push(...c);
  });
  const A = m(
    m(
      n.Body.ExecuteResponse.return.root.OlapInfo?.AxesInfo.AxisInfo
    )[0]?.HierarchyInfo
  );
  let M = [];
  e.columns.length ? M = m(
    m(
      n.Body.ExecuteResponse.return.root.OlapInfo?.AxesInfo.AxisInfo
    )[1]?.HierarchyInfo
  ) : M = m(
    m(
      n.Body.ExecuteResponse.return.root.OlapInfo?.AxesInfo.AxisInfo
    )[0]?.HierarchyInfo
  ), s = U.map((h) => ({
    ...h,
    isProperty: !0
  })), i = I.map((h) => ({
    ...h,
    isProperty: !0
  }));
  const f = s.map((h) => t.map((c) => {
    const d = c.find(
      (O) => O.HIERARCHY_UNIQUE_NAME === h.HIERARCHY_UNIQUE_NAME
    ), w = c.indexOf(d), T = A[w], C = `${h.HIERARCHY_UNIQUE_NAME}.[${h.PROPERTY_NAME}]`, D = Object.entries(T).find((O) => {
      if (Array.isArray(O[1])) {
        const x = O[1].find(($) => $.__attrs?.name === C);
        if (x) return x;
      } else
        return O[1]?.__attrs?.name === C;
    });
    return D ? {
      Value: d[D[0]]
    } : {
      Value: ""
    };
  }));
  return e.showColumnsProperties && (r = [...f, ...r]), r = r.map((h, c) => {
    const d = i.map((w) => {
      const T = o[c], C = T.find(
        (y) => y.HIERARCHY_UNIQUE_NAME === w.HIERARCHY_UNIQUE_NAME
      ), D = T.indexOf(C), O = M[D], x = `${w.HIERARCHY_UNIQUE_NAME}.[${w.PROPERTY_NAME}]`, $ = Object.entries(O)?.find((y) => y[1]?.__attrs?.name === x);
      return $ ? {
        Value: C[$[0]]
      } : {
        Value: ""
      };
    });
    return e.showRowsProperties ? [...d, ...h] : h;
  }), {
    columns: t,
    rows: o,
    cells: r,
    propertiesRows: s,
    propertiesCols: i
  };
}, F = (n, e, t) => {
  if (!n.length) return [];
  if (t.length) {
    if (!e.length)
      return n.map((i) => [i]);
  } else return [n];
  const o = [...n], r = [], s = e.length;
  for (; o.length; )
    r.push(o.splice(0, s));
  return r;
}, Me = (n, e = 0) => {
  let t = m(
    n.Body.ExecuteResponse.return?.root.Axes?.Axis
  )?.[0]?.Tuples;
  const o = Array.isArray(t) ? t.map((u) => u.Tuple) : m(
    t?.Tuple
  );
  t = m(
    n.Body.ExecuteResponse.return?.root?.Axes?.Axis
  )?.[1]?.Tuples;
  const r = Array.isArray(t) ? t.map((u) => u.Tuple) : m(
    t?.Tuple
  ), s = m(
    n.Body.ExecuteResponse.return.root.CellData?.Cell
  ), i = {
    rows: [],
    items: [],
    headers: ["Caption"],
    rowProperties: {}
  }, l = (u) => m(u).map((E) => E.Caption).join(" - ");
  return e === 0 ? (r.forEach((u, E) => {
    i.headers.push(l(u.Member));
  }), o.forEach((u, E) => {
    const a = l(u.Member);
    i.rows[E] = [a], i.rowProperties[a] = u.Member, r.forEach((_, U) => {
      i.rows[E].push(s[U * o.length + E]?.Value);
    });
  })) : e === 1 && (o.forEach((u, E) => {
    i.headers.push(l(u.Member));
  }), r.forEach((u, E) => {
    const a = l(u.Member);
    i.items[E] = [a], i.rowProperties[a] = u.Member, o.forEach((_, U) => {
      i.items[E].push(s[E * o.length + U]?.Value);
    });
  })), i.items = i.rows.map((u, E) => {
    const a = {};
    return u.forEach((_, U) => {
      a[i.headers[U]] = _;
    }), a;
  }), i;
};
class fe {
  rowsExpandedMembers = [];
  rowsDrilldownMembers = [];
  columnsExpandedMembers = [];
  columnsDrilldownMembers = [];
  connection;
  constructor(e, t) {
    this.connection = e, t && (this.rowsDrilldownMembers = t.rowsDrilldownMembers || [], this.rowsExpandedMembers = t.rowsExpandedMembers || [], this.columnsDrilldownMembers = t.columnsDrilldownMembers || [], this.columnsExpandedMembers = t.columnsExpandedMembers || []);
  }
  getDrilldownState() {
    return {
      rowsExpandedMembers: this.rowsExpandedMembers,
      rowsDrilldownMembers: this.rowsDrilldownMembers,
      columnsExpandedMembers: this.columnsExpandedMembers,
      columnsDrilldownMembers: this.columnsDrilldownMembers
    };
  }
  drilldownOnRows(e) {
    const t = this.rowsExpandedMembers.findIndex(
      (r) => r.UName === e.UName
    );
    t >= 0 && this.rowsExpandedMembers.splice(t, 1);
    const o = this.rowsDrilldownMembers.findIndex((r) => r.HIERARCHY_UNIQUE_NAME === e.HIERARCHY_UNIQUE_NAME);
    e.LNum === "0" ? this.rowsDrilldownMembers.splice(o, 1) : o >= 0 ? this.rowsDrilldownMembers.splice(o, 1, e) : this.rowsDrilldownMembers.push(e);
  }
  drilldownOnColumns(e) {
    const t = this.columnsExpandedMembers.findIndex(
      (r) => r.UName === e.UName
    );
    t >= 0 && this.columnsExpandedMembers.splice(t, 1);
    const o = this.columnsDrilldownMembers.findIndex(
      (r) => r.HIERARCHY_UNIQUE_NAME === e.HIERARCHY_UNIQUE_NAME
    );
    e.LNum === "0" ? this.columnsDrilldownMembers.splice(o, 1) : o >= 0 ? this.columnsDrilldownMembers.splice(o, 1, e) : this.columnsDrilldownMembers.push(e);
  }
  async drillupOnRows(e) {
    const t = await this.connection.getLevels(), o = t.find((r) => r.HIERARCHY_UNIQUE_NAME === e.HIERARCHY_UNIQUE_NAME && r.LEVEL_NUMBER === Math.max(parseInt(e.LNum) - 1, 0).toString());
    if (o) {
      const r = await this.connection.getMember(
        o,
        e.PARENT_UNIQUE_NAME
      ), s = t.find((i) => i.HIERARCHY_UNIQUE_NAME === r.HIERARCHY_UNIQUE_NAME && i.LEVEL_NUMBER === Math.max(parseInt(r.LEVEL_NUMBER) - 1, 0).toString());
      if (s) {
        const i = {
          UName: r.PARENT_UNIQUE_NAME,
          LName: s.LEVEL_UNIQUE_NAME,
          HIERARCHY_UNIQUE_NAME: s.HIERARCHY_UNIQUE_NAME,
          LNum: s.LEVEL_NUMBER
        };
        this.drilldownOnRows(i);
      }
    }
  }
  async drillupOnColumns(e) {
    const t = await this.connection.getLevels(), o = t.find((r) => r.HIERARCHY_UNIQUE_NAME === e.HIERARCHY_UNIQUE_NAME && r.LEVEL_NUMBER === Math.max(parseInt(e.LNum) - 1, 0).toString());
    if (o) {
      const r = await this.connection.getMember(
        o,
        e.PARENT_UNIQUE_NAME
      ), s = t.find((i) => i.HIERARCHY_UNIQUE_NAME === r.HIERARCHY_UNIQUE_NAME && i.LEVEL_NUMBER === Math.max(parseInt(r.LEVEL_NUMBER) - 1, 0).toString());
      if (s) {
        const i = {
          UName: r.PARENT_UNIQUE_NAME,
          LName: s.LEVEL_UNIQUE_NAME,
          HIERARCHY_UNIQUE_NAME: s.HIERARCHY_UNIQUE_NAME,
          LNum: s.LEVEL_NUMBER
        };
        this.drilldownOnColumns(i);
      }
    }
  }
  expandOnRows(e) {
    const t = this.rowsExpandedMembers.filter(
      (r) => r.HIERARCHY_UNIQUE_NAME === e.HIERARCHY_UNIQUE_NAME
    );
    t.push(e), t.sort(
      (r, s) => parseInt(r.LNum) - parseInt(s.LNum)
    );
    const o = t.indexOf(e);
    if (o === 0)
      if (t.length > 1) {
        const r = this.rowsExpandedMembers.findIndex(
          (s) => s.UName === t[1].UName
        );
        this.rowsExpandedMembers.splice(r, 0, e);
      } else
        this.rowsExpandedMembers.push(e);
    else {
      const r = this.rowsExpandedMembers.findIndex(
        (s) => s.UName === t[o - 1].UName
      );
      this.rowsExpandedMembers.splice(r + 1, 0, e);
    }
  }
  collapseOnRows(e) {
    const t = this.rowsExpandedMembers.findIndex(
      (o) => o.UName === e.UName
    );
    this.rowsExpandedMembers.splice(t, 1);
  }
  expandOnColumns(e) {
    const t = this.columnsExpandedMembers.filter((r) => r.HIERARCHY_UNIQUE_NAME === e.HIERARCHY_UNIQUE_NAME);
    t.push(e), t.sort(
      (r, s) => parseInt(r.LNum) - parseInt(s.LNum)
    );
    const o = t.indexOf(e);
    if (o === 0)
      if (t.length > 1) {
        const r = this.columnsExpandedMembers.findIndex(
          (s) => s.UName === t[1].UName
        );
        this.columnsExpandedMembers.splice(r, 0, e);
      } else
        this.columnsExpandedMembers.push(e);
    else {
      const r = this.columnsExpandedMembers.findIndex(
        (s) => s.UName === t[o - 1].UName
      );
      this.columnsExpandedMembers.splice(r + 1, 0, e);
    }
  }
  collapseOnColumns(e) {
    const t = this.columnsExpandedMembers.findIndex(
      (o) => o.UName === e.UName
    );
    this.columnsExpandedMembers.splice(t, 1);
  }
  flushExpands(e, t) {
    this.columnsExpandedMembers.filter((s) => !e.some((i) => i.originalItem.HIERARCHY_UNIQUE_NAME === s.HIERARCHY_UNIQUE_NAME)).forEach((s) => {
      const i = this.columnsExpandedMembers.findIndex((l) => l.HIERARCHY_UNIQUE_NAME === s.HIERARCHY_UNIQUE_NAME);
      this.columnsExpandedMembers.splice(i, 1);
    }), this.rowsExpandedMembers.filter(
      (s) => !t.some((i) => i.originalItem.HIERARCHY_UNIQUE_NAME === s.HIERARCHY_UNIQUE_NAME)
    ).forEach((s) => {
      const i = this.rowsExpandedMembers.findIndex((l) => l.HIERARCHY_UNIQUE_NAME === s.HIERARCHY_UNIQUE_NAME);
      this.rowsExpandedMembers.splice(i, 1);
    });
  }
  flushDrilldowns(e, t) {
    this.columnsDrilldownMembers.filter((s) => !e.some((i) => i.originalItem.HIERARCHY_UNIQUE_NAME === s.HIERARCHY_UNIQUE_NAME)).forEach((s) => {
      const i = this.columnsDrilldownMembers.findIndex((l) => l.HIERARCHY_UNIQUE_NAME === s.HIERARCHY_UNIQUE_NAME);
      this.columnsDrilldownMembers.splice(i, 1);
    }), this.rowsDrilldownMembers.filter(
      (s) => !t.some((i) => i.originalItem.HIERARCHY_UNIQUE_NAME === s.HIERARCHY_UNIQUE_NAME)
    ).forEach((s) => {
      const i = this.rowsDrilldownMembers.findIndex((l) => l.HIERARCHY_UNIQUE_NAME === s.HIERARCHY_UNIQUE_NAME);
      this.rowsDrilldownMembers.splice(i, 1);
    });
  }
  handleDrilldown({ value: e, area: t }) {
    t === "rows" ? this.drilldownOnRows(e) : t === "columns" && this.drilldownOnColumns(e);
  }
  handleDrillup({ value: e, area: t }) {
    t === "rows" ? this.drillupOnRows(e) : t === "columns" && this.drillupOnColumns(e);
  }
  handleExpand({ value: e, area: t }) {
    t === "rows" ? this.expandOnRows(e) : t === "columns" && this.expandOnColumns(e);
  }
  handleCollapse({ value: e, area: t }) {
    t === "rows" ? this.collapseOnRows(e) : t === "columns" && this.collapseOnColumns(e);
  }
}
class me {
  storage = {
    hierarchies: [],
    dimensions: [],
    levels: [],
    measureGroups: [],
    measures: [],
    sets: [],
    properties: []
  };
  cache = {
    levelsState: /* @__PURE__ */ new Map(),
    membersState: /* @__PURE__ */ new Map(),
    levelMembers: /* @__PURE__ */ new Map(),
    childMembers: /* @__PURE__ */ new Map(),
    members: /* @__PURE__ */ new Map()
  };
  api = null;
  initPromiseResolve;
  initPromise = null;
  init(e) {
    this.api = e, this.initPromise = new Promise((t) => {
      this.initPromiseResolve = t;
    });
  }
  async waitForInit() {
    return this.initPromise;
  }
  async loadMetadata(e, t) {
    if (!this.api) throw new Error("API is not initialized");
    const [
      o,
      r,
      s,
      i,
      l,
      u,
      E
    ] = await Promise.all([
      await this.api.getDimensions(e, t),
      await this.api.getHierarchies(e, t),
      await this.api.getLevels(e, t),
      await this.api.getMeasureGroups(e, t),
      await this.api.getMeasures(e, t),
      await this.api.getSets(e, t),
      await this.api.getProperties(e, t)
    ]);
    return this.storage.dimensions = o, this.storage.hierarchies = r, this.storage.levels = s, this.storage.measureGroups = i, this.storage.measures = l, this.storage.sets = u, this.storage.properties = E, this.initPromiseResolve(), this.initPromise;
  }
  async getMetadataStorage() {
    return await this.initPromise, this.storage;
  }
  getHierarchies() {
    return this.storage.hierarchies;
  }
  getMeasures() {
    return this.storage.measures;
  }
  getProperties() {
    return this.storage.properties;
  }
  getLevels() {
    return this.storage.levels;
  }
}
var we = Object.defineProperty, Le = (n, e, t, o) => {
  for (var r = void 0, s = n.length - 1, i; s >= 0; s--)
    (i = n[s]) && (r = i(e, t, r) || r);
  return r && we(e, t, r), r;
};
class P extends k {
  connection;
  requestParams = {
    rows: [],
    columns: [],
    measures: [],
    filters: []
  };
  useMdx = !1;
  mdx = "";
  drilldownHandler = null;
  metadata = null;
  cube = "";
  initPromiseResolve;
  initPromise = null;
  metadataPromiseResolve;
  metadataPromise = null;
  connectionRepository;
  constructor() {
    super();
  }
  init(e) {
    if (super.init(e), console.log("state of store during creation", JSON.stringify(this.requestParams)), this.initPromise = new Promise((o) => {
      this.initPromiseResolve = o;
    }), this.metadataPromise = new Promise((o) => {
      this.metadataPromiseResolve = o;
    }), this.connection = e.connection, this.cube = e.cube, !this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    const t = this.connectionRepository.getConnection(
      this.connection
    );
    if (!t)
      throw new Error(`Connection ${this.connection} not found`);
    this.drilldownHandler = new fe(
      t,
      e.drilldownState
    ), e.useMdx && (this.useMdx = e.useMdx), e.mdx && (this.mdx = e.mdx), e.requestParams && (this.requestParams = e.requestParams), this.pollingInterval = e.pollingInterval ?? 5e3, this.pollingEnabled && this.startPolling(this.pollingInterval), this.initPromiseResolve?.();
  }
  async loadMetadata() {
    const e = this.connectionRepository.getConnection(
      this.connection
    );
    this.metadata = new me();
    const t = await e.getApi();
    return this.metadata.init(t), await this.metadata.loadMetadata(e.catalogName, this.cube), this.metadataPromiseResolve?.(this.metadata), this.metadataPromise;
  }
  /** The repository arrives as a parameter - callers inject it Vue-side. */
  static async fetchCubes(e, t) {
    if (!t)
      throw new Error("ConnectionRepository is required");
    const o = t.getConnection(e);
    if (!o)
      throw new Error(`Connection ${e} not found`);
    const r = await o.getApi(), { cubes: s } = await r.getCubes(o.catalogName);
    return s;
  }
  async setRequestParams(e) {
    this.requestParams = e, this.mdx = await this.getMdxRequest();
  }
  async getOriginalData() {
    throw new Error("Not Implemented");
  }
  async getData(e, t = {}) {
    let o, r = null;
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    const s = this.connectionRepository.getConnection(
      this.connection
    );
    this.useMdx ? o = this.mdx : o = await this.getMdxRequest(t), console.log("MDX Request in store:", o), console.log("Metadata in store:", this.metadata.getProperties()), console.log("Metadata in store:", this.metadata.getLevels());
    const i = await s.fetch({
      data: {
        mdx: o
      }
    });
    if (e === "PivotTable") {
      if (r = this.parseToPivotTable(i, t), console.log("Parsed responce in datasource", r), !r) return null;
      r.tableState = {
        rowsExpandedMembers: this.drilldownHandler?.rowsExpandedMembers || [],
        rowsDrilldownMembers: this.drilldownHandler?.rowsDrilldownMembers || [],
        columnsExpandedMembers: this.drilldownHandler?.columnsExpandedMembers || [],
        columnsDrilldownMembers: this.drilldownHandler?.columnsDrilldownMembers || []
      };
    } else if (e === "DataTable")
      r = this.parseToDataTable(i);
    else
      throw new Error("Invalid data type");
    return r;
  }
  async getMdxRequest(e = {}) {
    await this.loadMetadata();
    const t = this.metadata.getProperties(), o = this.metadata.getLevels();
    return await he(
      this.cube,
      this.drilldownHandler?.columnsDrilldownMembers || [],
      this.drilldownHandler?.rowsDrilldownMembers || [],
      this.drilldownHandler?.rowsExpandedMembers || [],
      this.drilldownHandler?.columnsExpandedMembers || [],
      this.requestParams.rows,
      this.requestParams.columns,
      this.requestParams.measures,
      e,
      t,
      this.requestParams.filters,
      o
    );
  }
  async getMetadata() {
    return await this.initPromise, await this.loadMetadata(), this.metadata;
  }
  expand(e) {
    return this.drilldownHandler?.handleExpand(e), this.drilldownHandler?.getDrilldownState();
  }
  collapse(e) {
    return this.drilldownHandler?.handleCollapse(e), this.drilldownHandler?.getDrilldownState();
  }
  getConnection() {
    return this.connectionRepository.getConnection(this.connection);
  }
  changeFilters(e) {
    console.log("event in the datasource", e);
    const t = this.requestParams[e.area].find(
      (o) => o.id === e.id
    );
    t && (t.filters = e.filters);
  }
  callEvent(e, t) {
    switch (e) {
      case "expand":
        this.expand(t);
        break;
      case "collapse":
        this.collapse(t);
        break;
      case "filterChange":
        this.changeFilters(t);
        break;
      default:
        console.warn("Event is not available for this type of store");
    }
    this.notify();
  }
  parseToPivotTable(e, t = {}) {
    const o = this.metadata.getProperties();
    return console.log(t), Ue(e, {
      rows: this.requestParams.rows,
      columns: this.requestParams.columns,
      measures: this.requestParams.measures,
      properties: o,
      showRowsProperties: t.showRowsProperties,
      showColumnsProperties: t.showColumnsProperties
    });
  }
  parseToDataTable(e) {
    return Me(e, 0);
  }
  destroy() {
    this.stopPolling();
  }
  static validateConfiguration(e) {
    return !(!e?.connection || !e?.cube);
  }
}
Le([
  te(ee)
], P.prototype, "connectionRepository");
class L extends ie {
  // Feature ID Constants (eLiterals)
  static ROWS = 0;
  static COLUMNS = 1;
  static MEASURES = 2;
  static FILTERS = 3;
  // Private fields
  _rows;
  _columns;
  _measures;
  _filters;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.X_M_L_A_REQUEST_PARAMS;
  }
  // Getters and Setters
  get rows() {
    return this._rows || (this._rows = b(this, this.eClass().getEStructuralFeature("rows"))), this._rows;
  }
  get columns() {
    return this._columns || (this._columns = b(this, this.eClass().getEStructuralFeature("columns"))), this._columns;
  }
  get measures() {
    return this._measures || (this._measures = b(this, this.eClass().getEStructuralFeature("measures"))), this._measures;
  }
  get filters() {
    return this._filters || (this._filters = b(this, this.eClass().getEStructuralFeature("filters"))), this._filters;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case L.ROWS:
        return this.rows;
      case L.COLUMNS:
        return this.columns;
      case L.MEASURES:
        return this.measures;
      case L.FILTERS:
        return this.filters;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case L.ROWS:
        this.rows.clear(), this.rows.addAll(t), super.eSet(e, t);
        break;
      case L.COLUMNS:
        this.columns.clear(), this.columns.addAll(t), super.eSet(e, t);
        break;
      case L.MEASURES:
        this.measures.clear(), this.measures.addAll(t), super.eSet(e, t);
        break;
      case L.FILTERS:
        this.filters.clear(), this.filters.addAll(t), super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case L.ROWS:
        return this._rows !== void 0 && !this._rows.isEmpty();
      case L.COLUMNS:
        return this._columns !== void 0 && !this._columns.isEmpty();
      case L.MEASURES:
        return this._measures !== void 0 && !this._measures.isEmpty();
      case L.FILTERS:
        return this._filters !== void 0 && !this._filters.isEmpty();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case L.ROWS:
        this._rows && this._rows.clear();
        return;
      case L.COLUMNS:
        this._columns && this._columns.clear();
        return;
      case L.MEASURES:
        this._measures && this._measures.clear();
        return;
      case L.FILTERS:
        this._filters && this._filters.clear();
        return;
      default:
        super.eUnset(e);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      rows: this.rows?.toArray?.() ?? this.rows,
      columns: this.columns?.toArray?.() ?? this.columns,
      measures: this.measures?.toArray?.() ?? this.measures,
      filters: this.filters?.toArray?.() ?? this.filters
    };
  }
}
class N extends X {
  // Feature ID Constants (eLiterals)
  static CONNECTION = 4;
  static REQUEST_PARAMS = 5;
  static USE_VISUAL_EDITOR = 6;
  static MDX = 7;
  static DRILLDOWN_STATE = 8;
  static POLLING_INTERVAL = 9;
  static CUBE = 10;
  static USE_MDX = 11;
  // Private fields
  _connection;
  _requestParams;
  _useVisualEditor;
  _mdx;
  _drilldownState;
  _pollingInterval;
  _cube;
  _useMdx;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.I_XMLA_STORE_CONFIGURATION;
  }
  // Getters and Setters
  get connection() {
    return this._connection;
  }
  set connection(e) {
    const t = this._connection;
    this._connection = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(N.CONNECTION),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.CONNECTION,
      merge: () => !1
    });
  }
  get requestParams() {
    return this._requestParams;
  }
  set requestParams(e) {
    const t = this._requestParams;
    this._requestParams = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(N.REQUEST_PARAMS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.REQUEST_PARAMS,
      merge: () => !1
    });
  }
  get useVisualEditor() {
    return this._useVisualEditor;
  }
  set useVisualEditor(e) {
    const t = this._useVisualEditor;
    this._useVisualEditor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(N.USE_VISUAL_EDITOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.USE_VISUAL_EDITOR,
      merge: () => !1
    });
  }
  get mdx() {
    return this._mdx;
  }
  set mdx(e) {
    const t = this._mdx;
    this._mdx = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(N.MDX),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.MDX,
      merge: () => !1
    });
  }
  get drilldownState() {
    return this._drilldownState;
  }
  set drilldownState(e) {
    const t = this._drilldownState;
    this._drilldownState = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(N.DRILLDOWN_STATE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.DRILLDOWN_STATE,
      merge: () => !1
    });
  }
  get pollingInterval() {
    return this._pollingInterval;
  }
  set pollingInterval(e) {
    const t = this._pollingInterval;
    this._pollingInterval = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(N.POLLING_INTERVAL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.POLLING_INTERVAL,
      merge: () => !1
    });
  }
  get cube() {
    return this._cube;
  }
  set cube(e) {
    const t = this._cube;
    this._cube = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(N.CUBE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.CUBE,
      merge: () => !1
    });
  }
  get useMdx() {
    return this._useMdx;
  }
  set useMdx(e) {
    const t = this._useMdx;
    this._useMdx = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(N.USE_MDX),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => N.USE_MDX,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case N.CONNECTION:
        return this.connection;
      case N.REQUEST_PARAMS:
        return this.requestParams;
      case N.USE_VISUAL_EDITOR:
        return this.useVisualEditor;
      case N.MDX:
        return this.mdx;
      case N.DRILLDOWN_STATE:
        return this.drilldownState;
      case N.POLLING_INTERVAL:
        return this.pollingInterval;
      case N.CUBE:
        return this.cube;
      case N.USE_MDX:
        return this.useMdx;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case N.CONNECTION:
        this.connection = t, super.eSet(e, t);
        break;
      case N.REQUEST_PARAMS:
        this.requestParams = t, super.eSet(e, t);
        break;
      case N.USE_VISUAL_EDITOR:
        this.useVisualEditor = t, super.eSet(e, t);
        break;
      case N.MDX:
        this.mdx = t, super.eSet(e, t);
        break;
      case N.DRILLDOWN_STATE:
        this.drilldownState = t, super.eSet(e, t);
        break;
      case N.POLLING_INTERVAL:
        this.pollingInterval = t, super.eSet(e, t);
        break;
      case N.CUBE:
        this.cube = t, super.eSet(e, t);
        break;
      case N.USE_MDX:
        this.useMdx = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case N.CONNECTION:
        return this._connection !== void 0;
      case N.REQUEST_PARAMS:
        return this._requestParams !== void 0;
      case N.USE_VISUAL_EDITOR:
        return this._useVisualEditor !== void 0;
      case N.MDX:
        return this._mdx !== void 0;
      case N.DRILLDOWN_STATE:
        return this._drilldownState !== void 0;
      case N.POLLING_INTERVAL:
        return this._pollingInterval !== void 0;
      case N.CUBE:
        return this._cube !== void 0;
      case N.USE_MDX:
        return this._useMdx !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case N.CONNECTION:
        this._connection = void 0;
        return;
      case N.REQUEST_PARAMS:
        this._requestParams = void 0;
        return;
      case N.USE_VISUAL_EDITOR:
        this._useVisualEditor = void 0;
        return;
      case N.MDX:
        this._mdx = void 0;
        return;
      case N.DRILLDOWN_STATE:
        this._drilldownState = void 0;
        return;
      case N.POLLING_INTERVAL:
        this._pollingInterval = void 0;
        return;
      case N.CUBE:
        this._cube = void 0;
        return;
      case N.USE_MDX:
        this._useMdx = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      connection: this.connection,
      requestParams: this.requestParams,
      useVisualEditor: this.useVisualEditor,
      mdx: this.mdx,
      drilldownState: this.drilldownState,
      pollingInterval: this.pollingInterval,
      cube: this.cube,
      useMdx: this.useMdx
    };
  }
}
class Q extends re {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new Q()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(R.eINSTANCE);
  }
  /**
   * Create a new XMLARequestParams instance
   */
  createXMLARequestParams() {
    return new L();
  }
  /**
   * Create a new IXmlaStoreConfiguration instance
   */
  createIXmlaStoreConfiguration() {
    return new N();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "XMLARequestParams":
        return this.createXMLARequestParams();
      case "IXmlaStoreConfiguration":
        return this.createIXmlaStoreConfiguration();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function pe(n) {
  const e = B.INSTANCE.getEPackage(n);
  if (!e)
    throw new Error(`EPackage '${n}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing XmlastorePackage.`);
  return e;
}
class R extends ne {
  static eNAME = "xmlastore";
  static eNS_URI = "http://org.eclipse.daanse.board.app.lib.datasource.xmla";
  static eNS_PREFIX = "xmlastore";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new R(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    X_M_L_A_REQUEST_PARAMS: null,
    X_M_L_A_REQUEST_PARAMS__ROWS: null,
    X_M_L_A_REQUEST_PARAMS__COLUMNS: null,
    X_M_L_A_REQUEST_PARAMS__MEASURES: null,
    X_M_L_A_REQUEST_PARAMS__FILTERS: null,
    I_XMLA_STORE_CONFIGURATION: null,
    I_XMLA_STORE_CONFIGURATION__CONNECTION: null,
    I_XMLA_STORE_CONFIGURATION__REQUEST_PARAMS: null,
    I_XMLA_STORE_CONFIGURATION__USE_VISUAL_EDITOR: null,
    I_XMLA_STORE_CONFIGURATION__MDX: null,
    I_XMLA_STORE_CONFIGURATION__DRILLDOWN_STATE: null,
    I_XMLA_STORE_CONFIGURATION__POLLING_INTERVAL: null,
    I_XMLA_STORE_CONFIGURATION__CUBE: null,
    I_XMLA_STORE_CONFIGURATION__USE_MDX: null
  };
  constructor() {
    super(), this.setName(R.eNAME), this.setNsURI(R.eNS_URI), this.setNsPrefix(R.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    B.INSTANCE.set(R.eNS_URI, this), this.setEFactoryInstance(Q.eINSTANCE);
    const e = new V();
    e.setName("XMLARequestParams"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), R.Literals.X_M_L_A_REQUEST_PARAMS = e;
    const t = new S();
    t.setName("rows"), t.setLowerBound(0), t.setUpperBound(-1), e.getEStructuralFeatures().push(t), R.Literals.X_M_L_A_REQUEST_PARAMS__ROWS = t;
    const o = new S();
    o.setName("columns"), o.setLowerBound(0), o.setUpperBound(-1), e.getEStructuralFeatures().push(o), R.Literals.X_M_L_A_REQUEST_PARAMS__COLUMNS = o;
    const r = new S();
    r.setName("measures"), r.setLowerBound(0), r.setUpperBound(-1), e.getEStructuralFeatures().push(r), R.Literals.X_M_L_A_REQUEST_PARAMS__MEASURES = r;
    const s = new S();
    s.setName("filters"), s.setLowerBound(0), s.setUpperBound(-1), e.getEStructuralFeatures().push(s), R.Literals.X_M_L_A_REQUEST_PARAMS__FILTERS = s;
    const i = new V();
    i.setName("IXmlaStoreConfiguration"), i.setAbstract(!1), i.setInterface(!1), this.getEClassifiers().push(i), i.setEPackage(this), R.Literals.I_XMLA_STORE_CONFIGURATION = i;
    const l = new S();
    l.setName("connection"), l.setLowerBound(0), l.setUpperBound(1), i.getEStructuralFeatures().push(l), R.Literals.I_XMLA_STORE_CONFIGURATION__CONNECTION = l;
    const u = new oe();
    u.setContainment(!0), u.setName("requestParams"), u.setLowerBound(1), u.setUpperBound(1), i.getEStructuralFeatures().push(u), R.Literals.I_XMLA_STORE_CONFIGURATION__REQUEST_PARAMS = u;
    const E = new S();
    E.setName("useVisualEditor"), E.setLowerBound(0), E.setUpperBound(1), i.getEStructuralFeatures().push(E), R.Literals.I_XMLA_STORE_CONFIGURATION__USE_VISUAL_EDITOR = E;
    const a = new S();
    a.setName("mdx"), a.setLowerBound(0), a.setUpperBound(1), i.getEStructuralFeatures().push(a), R.Literals.I_XMLA_STORE_CONFIGURATION__MDX = a;
    const _ = new S();
    _.setName("drilldownState"), _.setLowerBound(0), _.setUpperBound(1), i.getEStructuralFeatures().push(_), R.Literals.I_XMLA_STORE_CONFIGURATION__DRILLDOWN_STATE = _;
    const U = new S();
    U.setName("pollingInterval"), U.setLowerBound(0), U.setUpperBound(1), i.getEStructuralFeatures().push(U), R.Literals.I_XMLA_STORE_CONFIGURATION__POLLING_INTERVAL = U;
    const I = new S();
    I.setName("cube"), I.setLowerBound(0), I.setUpperBound(1), i.getEStructuralFeatures().push(I), R.Literals.I_XMLA_STORE_CONFIGURATION__CUBE = I;
    const A = new S();
    A.setName("useMdx"), A.setLowerBound(0), A.setUpperBound(1), i.getEStructuralFeatures().push(A), R.Literals.I_XMLA_STORE_CONFIGURATION__USE_MDX = A, R.Literals.I_XMLA_STORE_CONFIGURATION.getESuperTypes().push(pe("http://org.eclipse.daanse.board.app.lib.datasource.base").getEClassifier("IBaseConnectionConfiguration")), R.Literals.X_M_L_A_REQUEST_PARAMS__ROWS.setEType(g().getEClassifier("EJavaObject")), R.Literals.X_M_L_A_REQUEST_PARAMS__COLUMNS.setEType(g().getEClassifier("EJavaObject")), R.Literals.X_M_L_A_REQUEST_PARAMS__MEASURES.setEType(g().getEClassifier("EJavaObject")), R.Literals.X_M_L_A_REQUEST_PARAMS__FILTERS.setEType(g().getEClassifier("EJavaObject")), R.Literals.I_XMLA_STORE_CONFIGURATION__CONNECTION.setEType(g().getEClassifier("EString")), R.Literals.I_XMLA_STORE_CONFIGURATION__REQUEST_PARAMS.setEType(R.Literals.X_M_L_A_REQUEST_PARAMS), R.Literals.I_XMLA_STORE_CONFIGURATION__USE_VISUAL_EDITOR.setEType(g().getEClassifier("EBoolean")), R.Literals.I_XMLA_STORE_CONFIGURATION__MDX.setEType(g().getEClassifier("EString")), R.Literals.I_XMLA_STORE_CONFIGURATION__DRILLDOWN_STATE.setEType(g().getEClassifier("EJavaObject")), R.Literals.I_XMLA_STORE_CONFIGURATION__POLLING_INTERVAL.setEType(g().getEClassifier("EInt")), R.Literals.I_XMLA_STORE_CONFIGURATION__CUBE.setEType(g().getEClassifier("EString")), R.Literals.I_XMLA_STORE_CONFIGURATION__USE_MDX.setEType(g().getEClassifier("EBoolean"));
  }
}
R.eINSTANCE;
const v = se("XmlaStoreFactory"), Se = Symbol.for(v);
function K({ services: n }) {
  n.register(v, (e) => {
    if (!P.validateConfiguration(e))
      throw new Error(
        "Invalid XmlaStore configuration. Please provide a valid configuration."
      );
    const t = n.construct(P);
    return t.init(e), t;
  });
}
function Z({ services: n }) {
  n.unregister(v);
}
const ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IXmlaStoreConfigurationImpl: N,
  XMLARequestParamsImpl: L,
  XMLA_STORE_FACTORY: v,
  XmlaStore: P,
  XmlastoreFactory: Q,
  XmlastorePackage: R,
  activate: K,
  deactivate: Z,
  factorySymbol: Se
}, Symbol.toStringTag, { value: "Module" })), Y = "org.eclipse.daanse.board.app.lib.datasource.xmla", Te = "0.0.1-next.1";
async function xe(n) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${Y}: tsm runtime is not initialized`);
  e.register(Y, ge, Te, "lib.datasource.xmla"), await K?.(n);
}
async function $e(n) {
  await Z?.(n);
}
export {
  N as IXmlaStoreConfigurationImpl,
  L as XMLARequestParamsImpl,
  v as XMLA_STORE_FACTORY,
  P as XmlaStore,
  Q as XmlastoreFactory,
  R as XmlastorePackage,
  xe as activate,
  $e as deactivate,
  Se as factorySymbol
};
