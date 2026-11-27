// DAILY UPDATE: edit only this file
window.DAILY = {
  date: "Friday, 27 November 2026",
  updated: "12:05 Dubai time",
  telegram: "https://t.me/beasttrader03",
  mental: "Breakeven too early is still fear. Let the stop and the target make the decision, not the feeling.",
  focus: [
    { asset: "Bitcoin", bias: "Bullish",
      read: "BTC broke through 61,200 and is pushing towards the week's highs. The level to test now is the week high at 63,800. Claim above it and close the weekly above, and we're golden.",
      flip: "Losing 61,200 (old resistance, now support) puts 60,300 back on the table.",
      chart: "https://www.tradingview.com/chart/?symbol=BITSTAMP:BTCUSD" },
    { asset: "Gold", bias: "Bullish",
      read: "Gold held the 3,426–3,435 zone (low 3,446 on Wednesday) and bounced to around 3,650. It just needs to keep holding 3,500. There's no clear level above yet, so let it build.",
      flip: "Losing 3,500 cancels the bounce. Macro is still a headwind: hot PCE and a Fed hike priced for December.",
      chart: "https://www.tradingview.com/chart/?symbol=OANDA:XAUUSD" }
  ],
  levels: {
    "Bitcoin": [
      { level: "Week high (news candle high)", price: 63800, role: "Resistance", note: "The level to test. Claim it and close the weekly above = golden." },
      { level: "Old resistance, now support", price: 61200, role: "Bias line", note: "Must hold for the push to the week high." },
      { level: "Weekly open", price: 60300, role: "Support", note: "Next support if 61,200 goes." },
      { level: "58K reclaim", price: 58000, role: "Support", note: "Reclaimed with a huge reaction." }
    ],
    "Gold": [
      { level: "Pre-slide level (18 Nov)", price: 3742, role: "Resistance", note: "Reclaiming it would make the bounce real." },
      { level: "Thursday's close", price: 3567, role: "Support", note: "First support under price." },
      { level: "Hold level", price: 3500, role: "Bias line", note: "Gold just needs to keep holding this." },
      { level: "Wednesday's low", price: 3446, role: "Support", note: "15-month low. Held the 3,426–3,435 zone." }
    ]
  },
  news: [
    { day: "Fri 27 Nov", time: "22:00", event: "US stock markets close early (day after Thanksgiving)", note: "Thin liquidity. Expect fakeouts." }
  ]
};
