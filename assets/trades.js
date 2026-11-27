// Renders the trade log for one type ("scalp" or "day") from data/trades.json
window.renderTrades = async function (type) {
  const statsEl = document.getElementById("stats"), body = document.getElementById("log"), empty = document.getElementById("log-empty"), noteEl = document.getElementById("log-note");
  let data;
  try { data = await (await fetch("data/trades.json", { cache: "no-store" })).json(); }
  catch (e) { empty.textContent = "The trade log could not load. Refresh to try again."; empty.hidden = false; return; }
  const all = (data.trades || []).filter(t => t.type === type).sort((a, b) => (b.date + (b.time || "")).localeCompare(a.date + (a.time || "")));
  if (noteEl && data.note && type === "scalp") { noteEl.textContent = data.note; noteEl.hidden = false; }
  const closed = all.filter(t => t.result !== "open" && t.result !== "pending");
  const wins = closed.filter(t => t.result === "win").length;
  const totalR = closed.reduce((s, t) => s + (Number(t.r) || 0), 0);
  const stats = [
    ["Trades logged", all.length],
    ["Win rate", closed.length ? Math.round(wins / closed.length * 100) + "%" : "—"],
    ["Total R", closed.length ? (totalR > 0 ? "+" : "") + totalR.toFixed(1) + "R" : "—"],
    ["Avg R per trade", closed.length ? (totalR / closed.length).toFixed(2) + "R" : "—"]
  ];
  statsEl.replaceChildren(...stats.map(([l, v]) => {
    const d = document.createElement("div"); d.className = "stat";
    const vv = document.createElement("div"); vv.className = "v"; vv.textContent = v;
    if (l === "Total R" && closed.length) vv.classList.add(totalR >= 0 ? "up" : "down");
    const ll = document.createElement("div"); ll.className = "l"; ll.textContent = l;
    d.append(vv, ll); return d;
  }));
  if (!all.length) { empty.hidden = false; return; }
  body.replaceChildren(...all.map(t => {
    const tr = document.createElement("tr");
    const cell = (txt, cls) => { const td = document.createElement("td"); if (cls) td.className = cls; td.textContent = txt; return td; };
    const res = t.result === "win" ? "Win" : t.result === "loss" ? "Loss" : t.result === "be" ? "Breakeven" : t.result === "pending" ? "Win (R pending)" : "Open";
    const rTxt = (t.result === "open" || t.result === "pending" || t.r == null) ? "—" : ((Number(t.r) > 0 ? "+" : "") + Number(t.r).toFixed(1) + "R");
    const setup = document.createElement("td");
    const s1 = document.createElement("div"); s1.textContent = t.setup || "";
    setup.append(s1);
    if (t.notes) { const s2 = document.createElement("div"); s2.className = "muted"; s2.style.fontSize = "12px"; s2.textContent = t.notes; setup.append(s2); }
    if (t.entry && t.stop && t.exit) { const s3 = document.createElement("div"); s3.className = "muted"; s3.style.fontSize = "12px"; s3.textContent = "Entry " + Number(t.entry).toLocaleString("en-US") + " · Stop " + Number(t.stop).toLocaleString("en-US") + " · Exit " + Number(t.exit).toLocaleString("en-US"); setup.append(s3); }
    if (/^assets\//.test(t.chart || "")) { const a = document.createElement("a"); a.href = t.chart; a.target = "_blank"; a.rel = "noopener"; a.textContent = "View chart ↗"; a.style.fontSize = "12px"; setup.append(a); }
    tr.append(cell(t.date + (t.time ? " " + t.time : "")), cell(t.asset + " " + (t.direction || "")), setup,
      cell(res, (t.result === "win" || t.result === "pending") ? "up" : t.result === "loss" ? "down" : "muted"), cell(rTxt, "num " + (Number(t.r) > 0 ? "up" : Number(t.r) < 0 ? "down" : "")));
    return tr;
  }));
};
