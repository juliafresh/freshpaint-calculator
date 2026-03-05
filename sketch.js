console.log("✅ sketch.js loaded");
{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let basePriceInput, calculateButtonForward, resultDivForward;\
let finalPriceInput, calculateButtonBackward, resultDivBackward;\
\
function setup() \{\
  createCanvas(windowWidth, windowHeight);\
  background(255);\
\
  injectStyles();\
  createTitle("\uc0\u1502 \u1495 \u1513 \u1489 \u1493 \u1503  \u1495 \u1502 \u1502 \u1514  \u1492 \u1488 \u1502 \u1504 \u1497 \u1501 ");\
\
  const wrapper = createDiv()\
    .addClass("fp-wrapper")\
    .position(0, 120);\
\
  // =========================\
  // Card 1: Forward calc\
  // =========================\
  const card1 = createDiv().parent(wrapper).addClass("fp-card");\
  createElement("div", "\uc0\u1495 \u1497 \u1513 \u1493 \u1489  \u1511 \u1491 \u1497 \u1502 \u1492 ").parent(card1).addClass("fp-card-title");\
  createElement("div", "\uc0\u1502 \u1495 \u1497 \u1512  \u1506 \u1489 \u1493 \u1491 \u1492  \u1500 \u1508 \u1504 \u1497  \u1502 \u1506 \u1524 \u1502 ").parent(card1).addClass("fp-label");\
\
  basePriceInput = createInput("")\
    .parent(card1)\
    .attribute("type", "number")\
    .addClass("fp-input");\
\
  calculateButtonForward = createButton("\uc0\u1495 \u1513 \u1489 ")\
    .parent(card1)\
    .addClass("fp-button");\
  calculateButtonForward.mousePressed(calculateForward);\
\
  // Result container (hidden initially)\
  resultDivForward = createDiv("")\
    .parent(card1)\
    .addClass("fp-result")\
    .style("display", "none");\
\
  // =========================\
  // Card 2: Backward calc\
  // =========================\
  const card2 = createDiv().parent(wrapper).addClass("fp-card");\
  createElement("div", "\uc0\u1495 \u1497 \u1513 \u1493 \u1489  \u1488 \u1495 \u1493 \u1512 \u1492 ").parent(card2).addClass("fp-card-title");\
  createElement("div", "\uc0\u1502 \u1495 \u1497 \u1512  \u1506 \u1489 \u1493 \u1491 \u1492  \u1505 \u1493 \u1508 \u1497 ").parent(card2).addClass("fp-label");\
\
  finalPriceInput = createInput("")\
    .parent(card2)\
    .attribute("type", "number")\
    .addClass("fp-input");\
\
  calculateButtonBackward = createButton("\uc0\u1495 \u1513 \u1489 ")\
    .parent(card2)\
    .addClass("fp-button");\
  calculateButtonBackward.mousePressed(calculateBackward);\
\
  resultDivBackward = createDiv("")\
    .parent(card2)\
    .addClass("fp-result")\
    .style("display", "none");\
\}\
\
function injectStyles() \{\
\
  // Import sleek Hebrew font\
  createElement("link")\
    .attribute("rel", "stylesheet")\
    .attribute("href", "https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700&display=swap");\
\
  createElement(\
    "style",\
    `\
    body\{\
      margin:0;\
      background:#fff;\
      font-family: 'Heebo', sans-serif;\
      color:#111;\
      -webkit-font-smoothing: antialiased;\
    \}\
\
    .fp-wrapper\{\
      width:min(980px, calc(100% - 32px));\
      margin:0 auto;\
      display:grid;\
      grid-template-columns:1fr 1fr;\
      gap:20px;\
      direction:rtl;\
    \}\
\
    @media (max-width:820px)\{\
      .fp-wrapper\{\
        grid-template-columns:1fr;\
        gap:16px;\
      \}\
    \}\
\
    .fp-card\{\
      background:#fff;\
      border:1px solid #ECECEC;\
      border-radius:18px;\
      box-shadow:0 12px 30px rgba(0,0,0,0.05);\
      padding:22px;\
    \}\
\
    .fp-card-title\{\
      font-size:16px;\
      font-weight:600;\
      margin-bottom:14px;\
    \}\
\
    .fp-label\{\
      font-size:14px;\
      color:#666;\
      margin-bottom:8px;\
    \}\
\
    .fp-input\{\
      width:100%;\
      padding:14px;\
      border-radius:14px;\
      border:1px solid #E5E5E5;\
      font-size:16px;\
      text-align:right;\
      transition:all .2s ease;\
    \}\
\
    .fp-input:focus\{\
      outline:none;\
      border-color:#CFCFCF;\
      box-shadow:0 0 0 4px rgba(0,0,0,0.04);\
    \}\
\
    .fp-button\{\
      margin-top:14px;\
      width:100%;\
      padding:14px;\
      border-radius:14px;\
      border:none;\
      background:#111;\
      color:#fff;\
      font-size:16px;\
      font-weight:500;\
      cursor:pointer;\
      transition:all .2s ease;\
    \}\
\
    .fp-button:hover\{\
      opacity:0.92;\
    \}\
\
    .fp-result\{\
      margin-top:18px;\
      background:#FAFAFA;\
      border:1px solid #ECECEC;\
      border-radius:14px;\
      padding:16px;\
      line-height:1.6;\
      font-size:14px;\
    \}\
\
    .fp-row\{\
      display:flex;\
      justify-content:space-between;\
      margin-bottom:6px;\
    \}\
\
    .fp-strong\{\
      font-weight:600;\
    \}\
    `\
  );\
\}\
\
function createTitle(titleText) \{\
  createElement("h1", titleText)\
    .position(0, 40)\
    .style("width", "100%")\
    .style("text-align", "center")\
    .style("font-family", "'Heebo', sans-serif")\
    .style("font-weight", "700")\
    .style("font-size", "26px");\
\}\
\
// =========================\
// Forward calculation\
// =========================\
function calculateForward() \{\
  const basePrice = parseFloat(basePriceInput.value());\
  if (isNaN(basePrice) || basePrice <= 0) \{\
    resultDivForward.style("display", "block").html("\uc0\u1488 \u1504 \u1488  \u1492 \u1494 \u1503  \u1502 \u1495 \u1497 \u1512  \u1506 \u1489 \u1493 \u1491 \u1492  \u1514 \u1511 \u1497 \u1503 .");\
    return;\
  \}\
\
  const shippingCost = basePrice <= 1500 ? 150 : 300;\
  const taxRate = 0.18;\
  const commissionRate = 0.25;\
\
  const subtotal = basePrice + shippingCost;\
  const vat = subtotal * taxRate;\
  const finalPrice = subtotal + vat;\
  const commission = basePrice * commissionRate;\
  const netIncome = basePrice - commission;\
\
  resultDivForward.style("display", "block").html(`\
    <div class="fp-row"><span>\uc0\u1502 \u1495 \u1497 \u1512  \u1506 \u1489 \u1493 \u1491 \u1492  \u1500 \u1508 \u1504 \u1497  \u1502 \u1506 \u1524 \u1502 </span><span>$\{money(basePrice)\}</span></div>\
    <div class="fp-row"><span>\uc0\u1491 \u1502 \u1497  \u1502 \u1513 \u1500 \u1493 \u1495 </span><span>$\{money(shippingCost)\}</span></div>\
    <div class="fp-row"><span>\uc0\u1502 \u1495 \u1497 \u1512  \u1500 \u1508 \u1504 \u1497  \u1502 \u1506 \u1524 \u1502 </span><span>$\{money(subtotal)\}</span></div>\
    <div class="fp-row"><span>\uc0\u1502 \u1506 \u1524 \u1502  (18%)</span><span>$\{money(vat)\}</span></div>\
    <div class="fp-row fp-strong"><span>\uc0\u1502 \u1495 \u1497 \u1512  \u1505 \u1493 \u1508 \u1497  \u1500 \u1500 \u1511 \u1493 \u1495 </span><span>$\{money(finalPrice)\}</span></div>\
    <br>\
    <div class="fp-row"><span>\uc0\u1491 \u1502 \u1497  \u1490 \u1489 \u1497 \u1497 \u1492  (25%)</span><span>$\{money(commission)\}</span></div>\
    <div class="fp-row fp-strong"><span>\uc0\u1492 \u1499 \u1504 \u1505 \u1492  \u1504 \u1496 \u1493 </span><span>$\{money(netIncome)\}</span></div>\
  `);\
\}\
\
// =========================\
// Backward calculation\
// =========================\
function calculateBackward() \{\
  const finalPrice = parseFloat(finalPriceInput.value());\
  if (isNaN(finalPrice) || finalPrice <= 0) \{\
    resultDivBackward.style("display", "block").html("\uc0\u1488 \u1504 \u1488  \u1492 \u1494 \u1503  \u1502 \u1495 \u1497 \u1512  \u1505 \u1493 \u1508 \u1497  \u1514 \u1511 \u1497 \u1503 .");\
    return;\
  \}\
\
  const taxRate = 0.18;\
  const commissionRate = 0.25;\
\
  const withoutVat = finalPrice / (1 + taxRate);\
  const shipping = withoutVat >= 1801 ? 300 : 150;\
  const base = withoutVat - shipping;\
  const commission = base * commissionRate;\
  const net = base - commission;\
\
  resultDivBackward.style("display", "block").html(`\
    <div class="fp-row fp-strong"><span>\uc0\u1502 \u1495 \u1497 \u1512  \u1505 \u1493 \u1508 \u1497 </span><span>$\{money(finalPrice)\}</span></div>\
    <div class="fp-row"><span>\uc0\u1502 \u1495 \u1497 \u1512  \u1500 \u1500 \u1488  \u1502 \u1506 \u1524 \u1502 </span><span>$\{money(withoutVat)\}</span></div>\
    <div class="fp-row"><span>\uc0\u1502 \u1495 \u1497 \u1512  \u1489 \u1505 \u1497 \u1505  \u1500 \u1500 \u1488  \u1513 \u1497 \u1504 \u1493 \u1506  \u1493 \u1500 \u1500 \u1488  \u1502 \u1506 \u1524 \u1502 </span><span>$\{money(base)\}</span></div>\
    <br>\
    <div class="fp-row"><span>\uc0\u1491 \u1502 \u1497  \u1490 \u1489 \u1497 \u1497 \u1492  (25%)</span><span>$\{money(commission)\}</span></div>\
    <div class="fp-row fp-strong"><span>\uc0\u1492 \u1499 \u1504 \u1505 \u1492  \u1504 \u1496 \u1493 </span><span>$\{money(net)\}</span></div>\
  `);\
\}\
\
function money(x)\{\
  return `$\{Number(x).toFixed(2)\} \uc0\u1513 "\u1495 `;\
\}\
\
function draw()\{\}\
function windowResized()\{ resizeCanvas(windowWidth, windowHeight); \}}
