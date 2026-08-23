import { BaseDatasource as q } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY as B } from "org.eclipse.daanse.board.app.lib.api.connection";
import { inject as j } from "@eclipse-daanse/tsm";
const { serviceId: z } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), M = [];
for (let i = 0; i < 256; ++i)
  M.push((i + 256).toString(16).slice(1));
function G(i, e = 0) {
  return (M[i[e + 0]] + M[i[e + 1]] + M[i[e + 2]] + M[i[e + 3]] + "-" + M[i[e + 4]] + M[i[e + 5]] + "-" + M[i[e + 6]] + M[i[e + 7]] + "-" + M[i[e + 8]] + M[i[e + 9]] + "-" + M[i[e + 10]] + M[i[e + 11]] + M[i[e + 12]] + M[i[e + 13]] + M[i[e + 14]] + M[i[e + 15]]).toLowerCase();
}
const W = new Uint8Array(16);
function X() {
  return crypto.getRandomValues(W);
}
function L(i, e, t) {
  return crypto.randomUUID ? crypto.randomUUID() : K(i);
}
function K(i, e, t) {
  i = i || {};
  const o = i.random ?? i.rng?.() ?? X();
  if (o.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, G(o);
}
async function J(i, e, t, o) {
  const n = o;
  if (e) {
    const s = "id" + L(), r = `SET [Row_Dim_${s}] AS 'VisualTotals(Distinct(Hierarchize({Ascendants(${e.UName}), Descendants(${e.UName})})))'`, l = n.find(
      (a) => a.LEVEL_UNIQUE_NAME === e.LName
    ), d = n.filter((a) => a.HIERARCHY_UNIQUE_NAME === l?.HIERARCHY_UNIQUE_NAME && a.LEVEL_NUMBER <= l.LEVEL_NUMBER);
    let c = "";
    for (let a = 0; a < d.length; a++)
      c.length ? c = `
          DrilldownLevel({
            ${c}
            },
            ${d[a].LEVEL_UNIQUE_NAME}
          )
        ` : c = `
        DrilldownLevel({
          ${d[a].LEVEL_UNIQUE_NAME}
        })
        `;
    if (t) {
      const a = n.find((m) => m.HIERARCHY_UNIQUE_NAME === t[0]?.HIERARCHY_UNIQUE_NAME && m.LEVEL_NUMBER === "0");
      for (let m = 0; m < t.length; m++)
        c.length ? c = `
            DrilldownMember({{
              ${c}
            }}, {${t[m].UName}})
          ` : c = `DrilldownMember({{DrilldownLevel({${a?.LEVEL_UNIQUE_NAME}})}}, {${t[m].UName}})`;
    }
    return c = `
      Hierarchize(Intersect(AddCalculatedMembers({
        ${c}
      }), [Row_Dim_${s}]))
    `, {
      with: r,
      select: c
    };
  } else if (i.filters?.enabled) {
    const s = i.filters;
    let r = "", l = "";
    const d = [];
    s?.multipleChoise ? d.push(...s.selectedItems) : d.push(s.selectedItem);
    const c = [];
    d.forEach((E) => {
      const u = E.LNum;
      c[u] ? c[u].push(E) : c[u] = [E];
    });
    const m = n.filter((E) => E.HIERARCHY_UNIQUE_NAME === i.originalItem.HIERARCHY_UNIQUE_NAME).find((E) => E.LEVEL_NUMBER === "0");
    if (!m)
      return {
        select: "",
        with: ""
      };
    const R = `[FILTER_${"id" + L()}]`, N = d.map((E) => `Ascendants(${E.UName}), Descendants(${E.UName})`).join(","), I = [];
    s.deselectedItems && s.deselectedItems.forEach((E) => {
      const u = E.LNum;
      I[u] ? I[u].push(E) : I[u] = [E];
    });
    const U = Math.max(
      c.length,
      I.length
    ), h = [];
    if (t.forEach((E) => {
      if (E.HIERARCHY_UNIQUE_NAME !== i.originalItem.HIERARCHY_UNIQUE_NAME)
        return;
      const u = parseInt(E.LNum);
      h[u] ? h[u].push(E) : h[u] = [E];
    }), h.length) {
      for (let E = 0; E < h.length; E++) {
        const u = h[E].map((p) => p.UName).join(",");
        E === 0 ? l = `DrilldownMember({{${m.LEVEL_UNIQUE_NAME}.members}}, {${u}})` : l = `DrilldownMember({{${l}}}, {${u}})`;
      }
      l = `Intersect(AddCalculatedMembers(${l}), ${R})`;
    } else
      l = `Intersect(AddCalculatedMembers({${m.LEVEL_UNIQUE_NAME}.members}), ${R}))`;
    for (let E = 0; E < U; E++) {
      if (c[E]) {
        const u = c[E].map((p) => `Ascendants(${p.UName}), Descendants(${p.UName})`).join(",");
        r.length ? r = `Union({${u}}, {${r}})` : r = `{${u}}`;
      }
      if (I[E]) {
        const u = I[E].map((p) => `Descendants(${p.UName})`).join(",");
        r.length ? r = `Except({${r}}, {${u}})` : r = `{${u}}`;
      }
    }
    return l = `Hierarchize(${l})`, s.selectAll ? r = `SET ${R} AS 'VisualTotals(Distinct(Hierarchize(${r})))' ` : r = `SET ${R} AS 'VisualTotals(Distinct(Hierarchize(Intersect({${N}}, ${r}))))' `, {
      with: r,
      select: l
    };
  } else {
    let s = "";
    const r = n.find((l) => l.HIERARCHY_UNIQUE_NAME === t[0]?.HIERARCHY_UNIQUE_NAME && l.LEVEL_NUMBER === "0");
    for (let l = 0; l < t.length; l++)
      l === 0 ? t[l].LNum === "0" ? s = `
              DrilldownMember({{
                ${r?.LEVEL_UNIQUE_NAME}.members
              }}, {${t[l].UName}})
            ` : s = `DrilldownMember({{DrilldownLevel({${r?.LEVEL_UNIQUE_NAME}})}}, {${t[l].UName}})` : s = `
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
async function k(i, e, t, o) {
  const n = o;
  if (e) {
    const s = "id" + L(), r = `SET [Col_Dim_${s}] AS 'VisualTotals(Distinct(Hierarchize({Ascendants(${e.UName}), Descendants(${e.UName})})))'`, l = n.find(
      (a) => a.LEVEL_UNIQUE_NAME === e.LName
    ), d = n.filter((a) => a.HIERARCHY_UNIQUE_NAME === l?.HIERARCHY_UNIQUE_NAME && a.LEVEL_NUMBER <= l.LEVEL_NUMBER);
    let c = "";
    for (let a = 0; a < d.length; a++)
      c.length ? c = `
          DrilldownLevel({
            ${c}
            },
            ${d[a].LEVEL_UNIQUE_NAME}
          )
        ` : c = `
        DrilldownLevel({
          ${d[a].LEVEL_UNIQUE_NAME}
        })
        `;
    if (t) {
      const a = n.find((m) => m.HIERARCHY_UNIQUE_NAME === t[0]?.HIERARCHY_UNIQUE_NAME && m.LEVEL_NUMBER === "0");
      for (let m = 0; m < t.length; m++)
        c.length ? c = `
            DrilldownMember({{
              ${c}
            }}, {${t[m].UName}})
          ` : c = `DrilldownMember({{DrilldownLevel({${a?.LEVEL_UNIQUE_NAME}})}}, {${t[m].UName}})`;
    }
    return c = `
    Hierarchize(Intersect(AddCalculatedMembers({
      ${c}
    }), [Col_Dim_${s}]))
    `, {
      with: r,
      select: c
    };
  } else if (i.filters?.enabled) {
    const s = i.filters;
    let r = "", l = "";
    const d = [];
    s?.multipleChoise ? d.push(...s.selectedItems) : d.push(s.selectedItem);
    const c = [];
    d.forEach((E) => {
      const u = E.LNum;
      c[u] ? c[u].push(E) : c[u] = [E];
    });
    const m = n.filter((E) => E.HIERARCHY_UNIQUE_NAME === i.originalItem.HIERARCHY_UNIQUE_NAME).find((E) => E.LEVEL_NUMBER === "0");
    if (!m)
      return {
        select: "",
        with: ""
      };
    const R = `[FILTER_${"id" + L()}]`, N = d.map((E) => `Ascendants(${E.UName}), Descendants(${E.UName})`).join(","), I = [];
    s.deselectedItems && s.deselectedItems.forEach((E) => {
      const u = E.LNum;
      I[u] ? I[u].push(E) : I[u] = [E];
    });
    const U = Math.max(
      c.length,
      I.length
    ), h = [];
    if (t.forEach((E) => {
      if (E.HIERARCHY_UNIQUE_NAME !== i.originalItem.HIERARCHY_UNIQUE_NAME)
        return;
      const u = parseInt(E.LNum);
      h[u] ? h[u].push(E) : h[u] = [E];
    }), h.length) {
      for (let E = 0; E < h.length; E++) {
        const u = h[E].map((p) => p.UName).join(",");
        E === 0 ? l = `DrilldownMember({{${m.LEVEL_UNIQUE_NAME}.members}}, {${u}})` : l = `DrilldownMember({{${l}}}, {${u}})`;
      }
      l = `Intersect(AddCalculatedMembers(${l}), ${R})`;
    } else
      l = `Intersect(AddCalculatedMembers({${m.LEVEL_UNIQUE_NAME}.members}), ${R}))`;
    for (let E = 0; E < U; E++) {
      if (c[E]) {
        const u = c[E].map((p) => `Ascendants(${p.UName}), Descendants(${p.UName})`).join(",");
        r.length ? r = `Union({${u}}, {${r}})` : r = `{${u}}`;
      }
      if (I[E]) {
        const u = I[E].map((p) => `Descendants(${p.UName})`).join(",");
        r.length ? r = `Except({${r}}, {${u}})` : r = `{${u}}`;
      }
    }
    return l = `Hierarchize(${l})`, s.selectAll ? r = `SET ${R} AS 'VisualTotals(Distinct(Hierarchize(${r})))' ` : r = `SET ${R} AS 'VisualTotals(Distinct(Hierarchize(Intersect({${N}}, ${r}))))' `, {
      with: r,
      select: l
    };
  } else {
    let s = "";
    const r = n.find((l) => l.HIERARCHY_UNIQUE_NAME === t[0]?.HIERARCHY_UNIQUE_NAME && l.LEVEL_NUMBER === "0");
    for (let l = 0; l < t.length; l++)
      l === 0 ? t[l].LNum === "0" ? s = `
              DrilldownMember({{
                ${r?.LEVEL_UNIQUE_NAME}.members
              }}, {${t[l].UName}})
            ` : s = `DrilldownMember({{DrilldownLevel({${r?.LEVEL_UNIQUE_NAME}})}}, {${t[l].UName}})` : s = `
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
async function Z(i, e, t, o, n, s, r, l, d, c, a, m) {
  l.length === 1 && d?.showSingleMeasureHeader === !1 && (s = s.filter((R) => R.type !== "Values"), r = r.filter((R) => R.type !== "Values"));
  const _ = ie(a);
  if (!s.length || !r.length)
    return se(
      s,
      r,
      l,
      i,
      e,
      t,
      o,
      n,
      d,
      c,
      _,
      m
    );
  {
    let R = "WITH", N = "SELECT";
    const I = s.some((w) => w.type === "Values") || r.some((w) => w.type === "Values"), U = O(l, i, _.where, I);
    d.showEmpty || (N += " NON EMPTY");
    const h = Y(s, c), E = await y(
      s,
      e,
      o,
      l,
      m
    );
    E.with.length && (R = `${R} ${E.with}`), N = `${N}
${E.select} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${h} ON 1,
`, d.showEmpty || (N += " NON EMPTY");
    const u = v(r, c), p = await S(
      r,
      t,
      n,
      l,
      m
    );
    p.with.length && (R = `${R} ${p.with}`), N = `${N}
${p.select} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${u} ON 0
`;
    let f = "";
    return _.with && (R += _.with), R.length > 4 && (f += R), f += `
`, f += N, f += U, f;
  }
}
async function S(i, e, t, o, n) {
  let s = "", r = "";
  if (i.length >= 1)
    for (let l = 0; l < i.length; l++) {
      const d = i[l], c = await ee(
        d,
        e,
        t,
        o,
        n
      );
      l === 0 ? (s = c.select, r = c.with) : (r += c.with, s = `
          CrossJoin(
            ${s},
            ${c.select}
          )`);
    }
  else
    s = "";
  return {
    select: s,
    with: r
  };
}
async function ee(i, e, t, o, n) {
  if (i.type === "Values")
    return {
      select: `{${o.map((m) => m.originalItem.MEASURE_UNIQUE_NAME).join(",")}}`,
      with: ""
    };
  const s = await T(i, n), r = e.find((a) => a.HIERARCHY_UNIQUE_NAME === i.originalItem.HIERARCHY_UNIQUE_NAME), l = t.filter((a) => a.HIERARCHY_UNIQUE_NAME === i.originalItem.HIERARCHY_UNIQUE_NAME), d = l.some((a) => a.LNum === "0");
  if (r || l.length && d) {
    const a = await k(
      i,
      r,
      t,
      n
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
    select: `Hierarchize(AddCalculatedMembers({${n.find(
      (a) => a.HIERARCHY_UNIQUE_NAME === i.originalItem.HIERARCHY_UNIQUE_NAME && a.LEVEL_NUMBER === "0"
    )?.LEVEL_UNIQUE_NAME}.members}))`,
    with: ""
  };
}
async function y(i, e, t, o, n) {
  let s = "", r = "";
  if (i.length >= 1)
    for (let l = 0; l < i.length; l++) {
      const d = i[l], c = await te(
        d,
        e,
        t,
        o,
        n
      );
      l === 0 ? (s = c.select, r = c.with) : (r += c.with, s = `
          CrossJoin(
            ${s},
            ${c.select}
          )`);
    }
  else i.length === 1 ? s = `{ ${i[0].originalItem.HIERARCHY_UNIQUE_NAME}.Members }` : s = "";
  return {
    select: s,
    with: r
  };
}
async function te(i, e, t, o, n) {
  if (i.type === "Values")
    return {
      select: `{${o.map((m) => m.originalItem.MEASURE_UNIQUE_NAME).join(",")}}`,
      with: ""
    };
  const s = await T(i, n), r = e.find((a) => a.HIERARCHY_UNIQUE_NAME === i.originalItem.HIERARCHY_UNIQUE_NAME), l = t.filter((a) => a.HIERARCHY_UNIQUE_NAME === i.originalItem.HIERARCHY_UNIQUE_NAME), d = l.some((a) => a.LNum === "0");
  if (r || l.length && d) {
    const a = await J(
      i,
      r,
      l,
      n
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
    select: `Hierarchize(AddCalculatedMembers({${n.find(
      (a) => a.HIERARCHY_UNIQUE_NAME === i.originalItem.HIERARCHY_UNIQUE_NAME && a.LEVEL_NUMBER === "0"
    )?.LEVEL_UNIQUE_NAME}.members}))`,
    with: ""
  };
}
function Y(i, e) {
  const t = [];
  i.forEach((n) => {
    t.push(
      e.filter(
        (s) => s.HIERARCHY_UNIQUE_NAME === n.originalItem.HIERARCHY_UNIQUE_NAME
      )
    );
  });
  let o = t.flat(1).map((n) => `${n.LEVEL_UNIQUE_NAME}.[${n.PROPERTY_NAME}]`).join(",");
  return o && (o = `,${o}`), o;
}
function v(i, e) {
  const t = [];
  i.forEach((n) => {
    t.push(
      e.filter(
        (s) => s.HIERARCHY_UNIQUE_NAME === n.originalItem.HIERARCHY_UNIQUE_NAME
      )
    );
  });
  let o = t.flat(1).map((n) => `${n.LEVEL_UNIQUE_NAME}.[${n.PROPERTY_NAME}]`).join(",");
  return o && (o = `,${o}`), o;
}
async function se(i, e, t, o, n, s, r, l, d, c, a, m) {
  const _ = i.length === 0 && e.length === 0 && t.length > 0 && d?.showSingleMeasureHeader !== !1, R = i.some((U) => U.type === "Values") || e.some((U) => U.type === "Values") || _, N = ne(d), I = O(t, o, a.where, R);
  if (i.length) {
    const U = await y(
      i,
      n,
      r,
      t,
      m
    ), h = U.select;
    let E = U.with ? `WITH ${U.with}` : "";
    a.with && (E ? E += a.with : E = `WITH ${a.with}`);
    const u = Y(i, c);
    return `
      ${E}
      ${N}
      ${h}
      DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${u} ON 0
      ${I}
    `;
  } else if (e.length) {
    const U = await S(
      e,
      s,
      l,
      t,
      m
    ), h = U.select;
    let E = U.with ? `WITH ${U.with}` : "";
    a.with && (E ? E += a.with : E = `WITH ${a.with}`);
    const u = v(e, c);
    return `
      ${E}
      ${N}
      ${h}
      DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${u} ON 0
      ${I}
    `;
  } else if (t.length) {
    const U = t.map((h) => h.originalItem.MEASURE_UNIQUE_NAME).join(",");
    return `
      ${N}
      {${U}} ON 0
      ${I}
    `;
  }
  return "";
}
function ne(i) {
  let e = "SELECT";
  return i.showEmpty || (e += " NON EMPTY"), e;
}
function O(i, e, t, o = !1) {
  let n = "";
  i.length === 1 && !o && (n = `${i[0].originalItem.MEASURE_UNIQUE_NAME}`);
  let s = "";
  return t ? n ? s = `FROM [${e}] WHERE (${t},${n}) CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS` : s = `FROM [${e}] WHERE (${t}) CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS` : n ? s = `FROM [${e}] WHERE ${n} CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS` : s = `FROM [${e}] CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS`, s;
}
function ie(i) {
  let e = "", t = "";
  return i ? (i.map((n) => n.filters).forEach((n) => {
    if (n?.enabled)
      if (n.multipleChoise) {
        const s = "id" + L(), r = `${n.originalItem.DIMENSION_UNIQUE_NAME}.[FILTER_${s}]`, l = n.selectedItems.map((d) => d.UName).join(",");
        e += ` MEMBER ${r} AS 'Aggregate({${l}})'`, t.length && (t += ","), t += r;
      } else
        t.length && (t += ","), t += n.selectedItem.UName;
  }), {
    where: t,
    with: e
  }) : {
    where: null,
    with: null
  };
}
async function T(i, e) {
  const t = i.filters;
  let o = "", n = "";
  if (!t?.enabled) return null;
  const s = [];
  t.multipleChoise ? s.push(...t.selectedItems) : s.push(t.selectedItem);
  const r = [];
  s.forEach((c) => {
    const a = c.LNum;
    r[a] ? r[a].push(c) : r[a] = [c];
  });
  const l = [];
  t.deselectedItems && t.deselectedItems.forEach((c) => {
    const a = c.LNum;
    l[a] ? l[a].push(c) : l[a] = [c];
  });
  const d = Math.max(
    r.length,
    l.length
  );
  if (t.selectAll && !l.length) {
    const a = `[FILTER_${"id" + L()}]`, m = e.find(
      (_) => _.HIERARCHY_UNIQUE_NAME === i.originalItem.HIERARCHY_UNIQUE_NAME && _.LEVEL_NUMBER === "0"
    );
    o = `SET ${a} AS 'VisualTotals(Distinct(Hierarchize(AddCalculatedMembers({${m?.LEVEL_UNIQUE_NAME}.members}))))' `, n = `Hierarchize(AddCalculatedMembers({${m?.LEVEL_UNIQUE_NAME}.members}))`;
  } else {
    const a = e.filter((N) => N.HIERARCHY_UNIQUE_NAME === i.originalItem.HIERARCHY_UNIQUE_NAME).find((N) => N.LEVEL_NUMBER === "0");
    if (!a) return null;
    const _ = `[FILTER_${"id" + L()}]`, R = s.map((N) => `Ascendants(${N.UName}), Descendants(${N.UName})`).join(",");
    for (let N = 0; N < d; N++) {
      if (r[N]) {
        const I = r[N].map((U) => `Ascendants(${U.UName}), Descendants(${U.UName})`).join(",");
        o.length ? o = `Union({${I}}, {${o}})` : o = `{${I}}`;
      }
      if (l[N]) {
        const I = l[N].map((U) => `Descendants(${U.UName})`).join(",");
        o.length ? o = `Except({${o}}, {${I}})` : o = `{${I}}`;
      }
    }
    t.selectAll ? o = `SET ${_} AS 'VisualTotals(Distinct(Hierarchize(${o})))' ` : o = `SET ${_} AS 'VisualTotals(Distinct(Hierarchize(Intersect({${R}}, ${o}))))' `, n = `Hierarchize(Intersect(AddCalculatedMembers({${a.LEVEL_UNIQUE_NAME}.members}), ${_}))`;
  }
  return {
    with: o,
    select: n
  };
}
function A(i) {
  return Array.isArray(i) ? i : i ? [i] : [];
}
const re = (i, e) => {
  let t = [], o = [], n = [], s = [], r = [];
  if (!i.Body.ExecuteResponse) return null;
  const l = e.properties;
  console.log("properties in helper", l);
  let d = A(
    i.Body.ExecuteResponse.return?.root.Axes?.Axis
  )?.[0]?.Tuples;
  const c = Array.isArray(d) ? d.map((h) => h.Tuple) : A(
    d?.Tuple
  );
  d = A(
    i.Body.ExecuteResponse.return?.root?.Axes?.Axis
  )?.[1]?.Tuples;
  let a = [];
  i.Body.ExecuteResponse.return.root.Axes?.Axis?.[1]?.__attrs.name === "Axis1" ? a = Array.isArray(d) ? d.map((h) => h.Tuple) : A(
    d?.Tuple
  ) : i.Body.ExecuteResponse.return.root.Axes?.Axis?.[1]?.__attrs.name === "SlicerAxis" && (a = Array.isArray(d) ? d.map((h) => h.Tuple) : A(
    d?.Tuple
  ));
  const m = A(
    i.Body.ExecuteResponse.return.root.CellData?.Cell
  );
  !e.rows.length && !e.columns.length ? (t = c.map((h) => A(h.Member)), o = a.map((h) => A(h.Member)), n = b(m, t, o)) : e.columns.length ? (t = c.map((h) => A(h.Member)), o = a.map((h) => A(h.Member)), n = b(m, t, o)) : (t = a.map((h) => A(h.Member)), o = c.map((h) => A(h.Member)), n = b(m, t, o));
  const _ = [], R = [];
  console.log("Params in helper", e), t[0]?.forEach((h) => {
    if (!e.showColumnsProperties) return;
    console.log(h);
    const E = l.filter(
      (u) => u.HIERARCHY_UNIQUE_NAME === h.HIERARCHY_UNIQUE_NAME
    );
    _.push(...E);
  }), o[0]?.forEach((h) => {
    if (!e.showRowsProperties) return;
    const E = l.filter(
      (u) => u.HIERARCHY_UNIQUE_NAME === h.HIERARCHY_UNIQUE_NAME
    );
    R.push(...E);
  });
  const N = A(
    A(
      i.Body.ExecuteResponse.return.root.OlapInfo?.AxesInfo.AxisInfo
    )[0]?.HierarchyInfo
  );
  let I = [];
  e.columns.length ? I = A(
    A(
      i.Body.ExecuteResponse.return.root.OlapInfo?.AxesInfo.AxisInfo
    )[1]?.HierarchyInfo
  ) : I = A(
    A(
      i.Body.ExecuteResponse.return.root.OlapInfo?.AxesInfo.AxisInfo
    )[0]?.HierarchyInfo
  ), s = _.map((h) => ({
    ...h,
    isProperty: !0
  })), r = R.map((h) => ({
    ...h,
    isProperty: !0
  }));
  const U = s.map((h) => t.map((E) => {
    const u = E.find(
      (H) => H.HIERARCHY_UNIQUE_NAME === h.HIERARCHY_UNIQUE_NAME
    ), p = E.indexOf(u), f = N[p], w = `${h.HIERARCHY_UNIQUE_NAME}.[${h.PROPERTY_NAME}]`, g = Object.entries(f).find((H) => {
      if (Array.isArray(H[1])) {
        const C = H[1].find(($) => $.__attrs?.name === w);
        if (C) return C;
      } else
        return H[1]?.__attrs?.name === w;
    });
    return g ? {
      Value: u[g[0]]
    } : {
      Value: ""
    };
  }));
  return e.showColumnsProperties && (n = [...U, ...n]), n = n.map((h, E) => {
    const u = r.map((p) => {
      const f = o[E], w = f.find(
        (Q) => Q.HIERARCHY_UNIQUE_NAME === p.HIERARCHY_UNIQUE_NAME
      ), g = f.indexOf(w), H = I[g], C = `${p.HIERARCHY_UNIQUE_NAME}.[${p.PROPERTY_NAME}]`, $ = Object.entries(H)?.find((Q) => Q[1]?.__attrs?.name === C);
      return $ ? {
        Value: w[$[0]]
      } : {
        Value: ""
      };
    });
    return e.showRowsProperties ? [...u, ...h] : h;
  }), {
    columns: t,
    rows: o,
    cells: n,
    propertiesRows: s,
    propertiesCols: r
  };
}, b = (i, e, t) => {
  if (!i.length) return [];
  if (t.length) {
    if (!e.length)
      return i.map((r) => [r]);
  } else return [i];
  const o = [...i], n = [], s = e.length;
  for (; o.length; )
    n.push(o.splice(0, s));
  return n;
}, oe = (i, e = 0) => {
  let t = A(
    i.Body.ExecuteResponse.return?.root.Axes?.Axis
  )?.[0]?.Tuples;
  const o = Array.isArray(t) ? t.map((d) => d.Tuple) : A(
    t?.Tuple
  );
  t = A(
    i.Body.ExecuteResponse.return?.root?.Axes?.Axis
  )?.[1]?.Tuples;
  const n = Array.isArray(t) ? t.map((d) => d.Tuple) : A(
    t?.Tuple
  ), s = A(
    i.Body.ExecuteResponse.return.root.CellData?.Cell
  ), r = {
    rows: [],
    items: [],
    headers: ["Caption"],
    rowProperties: {}
  }, l = (d) => A(d).map((c) => c.Caption).join(" - ");
  return e === 0 ? (n.forEach((d, c) => {
    r.headers.push(l(d.Member));
  }), o.forEach((d, c) => {
    const a = l(d.Member);
    r.rows[c] = [a], r.rowProperties[a] = d.Member, n.forEach((m, _) => {
      r.rows[c].push(s[_ * o.length + c]?.Value);
    });
  })) : e === 1 && (o.forEach((d, c) => {
    r.headers.push(l(d.Member));
  }), n.forEach((d, c) => {
    const a = l(d.Member);
    r.items[c] = [a], r.rowProperties[a] = d.Member, o.forEach((m, _) => {
      r.items[c].push(s[c * o.length + _]?.Value);
    });
  })), r.items = r.rows.map((d, c) => {
    const a = {};
    return d.forEach((m, _) => {
      a[r.headers[_]] = m;
    }), a;
  }), r;
};
class le {
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
      (n) => n.UName === e.UName
    );
    t >= 0 && this.rowsExpandedMembers.splice(t, 1);
    const o = this.rowsDrilldownMembers.findIndex((n) => n.HIERARCHY_UNIQUE_NAME === e.HIERARCHY_UNIQUE_NAME);
    e.LNum === "0" ? this.rowsDrilldownMembers.splice(o, 1) : o >= 0 ? this.rowsDrilldownMembers.splice(o, 1, e) : this.rowsDrilldownMembers.push(e);
  }
  drilldownOnColumns(e) {
    const t = this.columnsExpandedMembers.findIndex(
      (n) => n.UName === e.UName
    );
    t >= 0 && this.columnsExpandedMembers.splice(t, 1);
    const o = this.columnsDrilldownMembers.findIndex(
      (n) => n.HIERARCHY_UNIQUE_NAME === e.HIERARCHY_UNIQUE_NAME
    );
    e.LNum === "0" ? this.columnsDrilldownMembers.splice(o, 1) : o >= 0 ? this.columnsDrilldownMembers.splice(o, 1, e) : this.columnsDrilldownMembers.push(e);
  }
  async drillupOnRows(e) {
    const t = await this.connection.getLevels(), o = t.find((n) => n.HIERARCHY_UNIQUE_NAME === e.HIERARCHY_UNIQUE_NAME && n.LEVEL_NUMBER === Math.max(parseInt(e.LNum) - 1, 0).toString());
    if (o) {
      const n = await this.connection.getMember(
        o,
        e.PARENT_UNIQUE_NAME
      ), s = t.find((r) => r.HIERARCHY_UNIQUE_NAME === n.HIERARCHY_UNIQUE_NAME && r.LEVEL_NUMBER === Math.max(parseInt(n.LEVEL_NUMBER) - 1, 0).toString());
      if (s) {
        const r = {
          UName: n.PARENT_UNIQUE_NAME,
          LName: s.LEVEL_UNIQUE_NAME,
          HIERARCHY_UNIQUE_NAME: s.HIERARCHY_UNIQUE_NAME,
          LNum: s.LEVEL_NUMBER
        };
        this.drilldownOnRows(r);
      }
    }
  }
  async drillupOnColumns(e) {
    const t = await this.connection.getLevels(), o = t.find((n) => n.HIERARCHY_UNIQUE_NAME === e.HIERARCHY_UNIQUE_NAME && n.LEVEL_NUMBER === Math.max(parseInt(e.LNum) - 1, 0).toString());
    if (o) {
      const n = await this.connection.getMember(
        o,
        e.PARENT_UNIQUE_NAME
      ), s = t.find((r) => r.HIERARCHY_UNIQUE_NAME === n.HIERARCHY_UNIQUE_NAME && r.LEVEL_NUMBER === Math.max(parseInt(n.LEVEL_NUMBER) - 1, 0).toString());
      if (s) {
        const r = {
          UName: n.PARENT_UNIQUE_NAME,
          LName: s.LEVEL_UNIQUE_NAME,
          HIERARCHY_UNIQUE_NAME: s.HIERARCHY_UNIQUE_NAME,
          LNum: s.LEVEL_NUMBER
        };
        this.drilldownOnColumns(r);
      }
    }
  }
  expandOnRows(e) {
    const t = this.rowsExpandedMembers.filter(
      (n) => n.HIERARCHY_UNIQUE_NAME === e.HIERARCHY_UNIQUE_NAME
    );
    t.push(e), t.sort(
      (n, s) => parseInt(n.LNum) - parseInt(s.LNum)
    );
    const o = t.indexOf(e);
    if (o === 0)
      if (t.length > 1) {
        const n = this.rowsExpandedMembers.findIndex(
          (s) => s.UName === t[1].UName
        );
        this.rowsExpandedMembers.splice(n, 0, e);
      } else
        this.rowsExpandedMembers.push(e);
    else {
      const n = this.rowsExpandedMembers.findIndex(
        (s) => s.UName === t[o - 1].UName
      );
      this.rowsExpandedMembers.splice(n + 1, 0, e);
    }
  }
  collapseOnRows(e) {
    const t = this.rowsExpandedMembers.findIndex(
      (o) => o.UName === e.UName
    );
    this.rowsExpandedMembers.splice(t, 1);
  }
  expandOnColumns(e) {
    const t = this.columnsExpandedMembers.filter((n) => n.HIERARCHY_UNIQUE_NAME === e.HIERARCHY_UNIQUE_NAME);
    t.push(e), t.sort(
      (n, s) => parseInt(n.LNum) - parseInt(s.LNum)
    );
    const o = t.indexOf(e);
    if (o === 0)
      if (t.length > 1) {
        const n = this.columnsExpandedMembers.findIndex(
          (s) => s.UName === t[1].UName
        );
        this.columnsExpandedMembers.splice(n, 0, e);
      } else
        this.columnsExpandedMembers.push(e);
    else {
      const n = this.columnsExpandedMembers.findIndex(
        (s) => s.UName === t[o - 1].UName
      );
      this.columnsExpandedMembers.splice(n + 1, 0, e);
    }
  }
  collapseOnColumns(e) {
    const t = this.columnsExpandedMembers.findIndex(
      (o) => o.UName === e.UName
    );
    this.columnsExpandedMembers.splice(t, 1);
  }
  flushExpands(e, t) {
    this.columnsExpandedMembers.filter((s) => !e.some((r) => r.originalItem.HIERARCHY_UNIQUE_NAME === s.HIERARCHY_UNIQUE_NAME)).forEach((s) => {
      const r = this.columnsExpandedMembers.findIndex((l) => l.HIERARCHY_UNIQUE_NAME === s.HIERARCHY_UNIQUE_NAME);
      this.columnsExpandedMembers.splice(r, 1);
    }), this.rowsExpandedMembers.filter(
      (s) => !t.some((r) => r.originalItem.HIERARCHY_UNIQUE_NAME === s.HIERARCHY_UNIQUE_NAME)
    ).forEach((s) => {
      const r = this.rowsExpandedMembers.findIndex((l) => l.HIERARCHY_UNIQUE_NAME === s.HIERARCHY_UNIQUE_NAME);
      this.rowsExpandedMembers.splice(r, 1);
    });
  }
  flushDrilldowns(e, t) {
    this.columnsDrilldownMembers.filter((s) => !e.some((r) => r.originalItem.HIERARCHY_UNIQUE_NAME === s.HIERARCHY_UNIQUE_NAME)).forEach((s) => {
      const r = this.columnsDrilldownMembers.findIndex((l) => l.HIERARCHY_UNIQUE_NAME === s.HIERARCHY_UNIQUE_NAME);
      this.columnsDrilldownMembers.splice(r, 1);
    }), this.rowsDrilldownMembers.filter(
      (s) => !t.some((r) => r.originalItem.HIERARCHY_UNIQUE_NAME === s.HIERARCHY_UNIQUE_NAME)
    ).forEach((s) => {
      const r = this.rowsDrilldownMembers.findIndex((l) => l.HIERARCHY_UNIQUE_NAME === s.HIERARCHY_UNIQUE_NAME);
      this.rowsDrilldownMembers.splice(r, 1);
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
class ae {
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
      n,
      s,
      r,
      l,
      d,
      c
    ] = await Promise.all([
      await this.api.getDimensions(e, t),
      await this.api.getHierarchies(e, t),
      await this.api.getLevels(e, t),
      await this.api.getMeasureGroups(e, t),
      await this.api.getMeasures(e, t),
      await this.api.getSets(e, t),
      await this.api.getProperties(e, t)
    ]);
    return this.storage.dimensions = o, this.storage.hierarchies = n, this.storage.levels = s, this.storage.measureGroups = r, this.storage.measures = l, this.storage.sets = d, this.storage.properties = c, this.initPromiseResolve(), this.initPromise;
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
var Ee = Object.defineProperty, ce = (i, e, t, o) => {
  for (var n = void 0, s = i.length - 1, r; s >= 0; s--)
    (r = i[s]) && (n = r(e, t, n) || n);
  return n && Ee(e, t, n), n;
};
class x extends q {
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
    this.drilldownHandler = new le(
      t,
      e.drilldownState
    ), e.useMdx && (this.useMdx = e.useMdx), e.mdx && (this.mdx = e.mdx), e.requestParams && (this.requestParams = e.requestParams), this.pollingInterval = e.pollingInterval ?? 5e3, this.pollingEnabled && this.startPolling(this.pollingInterval), this.initPromiseResolve?.();
  }
  async loadMetadata() {
    const e = this.connectionRepository.getConnection(
      this.connection
    );
    this.metadata = new ae();
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
    const n = await o.getApi(), { cubes: s } = await n.getCubes(o.catalogName);
    return s;
  }
  async setRequestParams(e) {
    this.requestParams = e, this.mdx = await this.getMdxRequest();
  }
  async getOriginalData() {
    throw new Error("Not Implemented");
  }
  async getData(e, t = {}) {
    let o, n = null;
    if (!this.connectionRepository)
      throw new Error("ConnectionRepository is not provided to Store Classes");
    const s = this.connectionRepository.getConnection(
      this.connection
    );
    this.useMdx ? o = this.mdx : o = await this.getMdxRequest(t), console.log("MDX Request in store:", o), console.log("Metadata in store:", this.metadata.getProperties()), console.log("Metadata in store:", this.metadata.getLevels());
    const r = await s.fetch({
      data: {
        mdx: o
      }
    });
    if (e === "PivotTable") {
      if (n = this.parseToPivotTable(r, t), console.log("Parsed responce in datasource", n), !n) return null;
      n.tableState = {
        rowsExpandedMembers: this.drilldownHandler?.rowsExpandedMembers || [],
        rowsDrilldownMembers: this.drilldownHandler?.rowsDrilldownMembers || [],
        columnsExpandedMembers: this.drilldownHandler?.columnsExpandedMembers || [],
        columnsDrilldownMembers: this.drilldownHandler?.columnsDrilldownMembers || []
      };
    } else if (e === "DataTable")
      n = this.parseToDataTable(r);
    else
      throw new Error("Invalid data type");
    return n;
  }
  async getMdxRequest(e = {}) {
    await this.loadMetadata();
    const t = this.metadata.getProperties(), o = this.metadata.getLevels();
    return await Z(
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
    return console.log(t), re(e, {
      rows: this.requestParams.rows,
      columns: this.requestParams.columns,
      measures: this.requestParams.measures,
      properties: o,
      showRowsProperties: t.showRowsProperties,
      showColumnsProperties: t.showColumnsProperties
    });
  }
  parseToDataTable(e) {
    return oe(e, 0);
  }
  destroy() {
    this.stopPolling();
  }
  static validateConfiguration(e) {
    return !(!e?.connection || !e?.cube);
  }
}
ce([
  j(B)
], x.prototype, "connectionRepository");
const P = z("XmlaStoreFactory"), de = Symbol.for(P);
function V({ services: i }) {
  i.register(P, (e) => {
    if (!x.validateConfiguration(e))
      throw new Error(
        "Invalid XmlaStore configuration. Please provide a valid configuration."
      );
    const t = i.construct(x);
    return t.init(e), t;
  });
}
function F({ services: i }) {
  i.unregister(P);
}
const ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  XMLA_STORE_FACTORY: P,
  XmlaStore: x,
  activate: V,
  deactivate: F,
  factorySymbol: de
}, Symbol.toStringTag, { value: "Module" })), D = "org.eclipse.daanse.board.app.lib.datasource.xmla", he = "0.0.1-next.1";
async function Re(i) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${D}: tsm runtime is not initialized`);
  e.register(D, ue, he, "lib.datasource.xmla"), await V?.(i);
}
async function Ue(i) {
  await F?.(i);
}
export {
  P as XMLA_STORE_FACTORY,
  x as XmlaStore,
  Re as activate,
  Ue as deactivate,
  de as factorySymbol
};
