let basePriceInput, calculateButtonForward, resultDivForward;
let finalPriceInput, calculateButtonBackward, resultDivBackward;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  injectStyles();
  createTitle("מחשבון חממת האמנים");

  const wrapper = createDiv()
    .addClass("fp-wrapper")
    .position(0, 120);

  // =========================
  // Card 1: Forward calc
  // =========================
  const card1 = createDiv().parent(wrapper).addClass("fp-card");
  createElement("div", "חישוב קדימה").parent(card1).addClass("fp-card-title");
  createElement("div", "מחיר עבודה לפני מע״מ").parent(card1).addClass("fp-label");

  basePriceInput = createInput("")
    .parent(card1)
    .attribute("type", "number")
    .addClass("fp-input");

  calculateButtonForward = createButton("חשב")
    .parent(card1)
    .addClass("fp-button");
  calculateButtonForward.mousePressed(calculateForward);

  // Result container (hidden initially)
  resultDivForward = createDiv("")
    .parent(card1)
    .addClass("fp-result")
    .style("display", "none");

  // =========================
  // Card 2: Backward calc
  // =========================
  const card2 = createDiv().parent(wrapper).addClass("fp-card");
  createElement("div", "חישוב אחורה").parent(card2).addClass("fp-card-title");
  createElement("div", "מחיר עבודה סופי ללקוח").parent(card2).addClass("fp-label");

  finalPriceInput = createInput("")
    .parent(card2)
    .attribute("type", "number")
    .addClass("fp-input");

  calculateButtonBackward = createButton("חשב")
    .parent(card2)
    .addClass("fp-button");
  calculateButtonBackward.mousePressed(calculateBackward);

  resultDivBackward = createDiv("")
    .parent(card2)
    .addClass("fp-result")
    .style("display", "none");
}

function injectStyles() {

  // Import sleek Hebrew font
  createElement("link")
    .attribute("rel", "stylesheet")
    .attribute("href", "https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700&display=swap");

  createElement(
    "style",
    `
    body{
      margin:0;
      background:#fff;
      font-family: 'Heebo', sans-serif;
      color:#111;
      -webkit-font-smoothing: antialiased;
    }

.fp-input{
  text-align: right;
  direction: rtl;
} 

.fp-wrapper{
  width: calc(100% - 32px);
  margin: 0 auto;                 /* centers the whole grid */
  display: grid;
  grid-template-columns: repeat(2, minmax(320px, 1fr));
  gap: 20px;
  direction: rtl;
  justify-content: center;        /* centers the grid when there’s extra space */
  align-items: start;
}

@media (max-width: 820px){
  .fp-wrapper{
    grid-template-columns: 1fr;
    gap: 16px;
    width: calc(100% - 24px);
  }
}

    .fp-card{
      background:#fff;
      border:1px solid #ECECEC;
      border-radius:18px;
      box-shadow:0 12px 30px rgba(0,0,0,0.05);
      padding:22px;
    }

    .fp-card-title{
      font-size:16px;
      font-weight:600;
      margin-bottom:14px;
    }

    .fp-label{
      font-size:14px;
      color:#666;
      margin-bottom:8px;
    }

    .fp-input{
      width:100%;
      padding:14px;
      border-radius:14px;
      border:1px solid #E5E5E5;
      font-size:16px;
      text-align:right;
      transition:all .2s ease;
    }

    .fp-input:focus{
      outline:none;
      border-color:#CFCFCF;
      box-shadow:0 0 0 4px rgba(0,0,0,0.04);
    }

    .fp-button{
      margin-top:14px;
      width:100%;
      padding:14px;
      border-radius:14px;
      border:none;
      background:#111;
      color:#fff;
      font-size:16px;
      font-weight:500;
      cursor:pointer;
      transition:all .2s ease;
    }

    .fp-button:hover{
      opacity:0.92;
    }

    .fp-result{
      margin-top:18px;
      background:#FAFAFA;
      border:1px solid #ECECEC;
      border-radius:14px;
      padding:16px;
      line-height:1.6;
      font-size:14px;
    }

    .fp-row{
      display:flex;
      justify-content:space-between;
      margin-bottom:6px;
    }

    .fp-strong{
      font-weight:600;
    }
.fp-highlight{
  background:#FFF7C2;
  border-radius:10px;
  padding:6px 10px;
  font-weight:600;
}

.fp-highlight small{
  display:block;
  font-size:12px;
  font-weight:500;
  color:#555;
  margin-top:2px;
}

/* Remove spinners in Chrome/Safari/Edge */
.fp-input::-webkit-outer-spin-button,
.fp-input::-webkit-inner-spin-button{
  -webkit-appearance: none;
  margin: 0;
}

/* Remove spinners in Firefox */
.fp-input[type="number"]{
  -moz-appearance: textfield;
  appearance: textfield;
}

.fp-input{
  text-align: right;
  direction: rtl;
}
    `
    
  );
}

function createTitle(titleText) {
  createElement("h1", titleText)
    .position(0, 40)
    .style("width", "100%")
    .style("text-align", "center")
    .style("font-family", "'Heebo', sans-serif")
    .style("font-weight", "700")
    .style("font-size", "26px");
}

// =========================
// Forward calculation
// =========================
function calculateForward() {
  const basePrice = parseFloat(basePriceInput.value());
  if (isNaN(basePrice) || basePrice <= 0) {
    resultDivForward.style("display", "block").html("אנא הזן מחיר עבודה תקין.");
    return;
  }

  const shippingCost = basePrice <= 1500 ? 150 : 300;
  const taxRate = 0.18;
  const commissionRate = 0.25;

  const subtotal = basePrice + shippingCost;
  const vat = subtotal * taxRate;
  const finalPrice = subtotal + vat;
  const commission = basePrice * commissionRate;
  const netIncome = basePrice - commission;

  resultDivForward.style("display", "block").html(`
    <div class="fp-row"><span>מחיר עבודה לפני מע״מ</span><span>${money(basePrice)}</span></div>
    <div class="fp-row"><span>דמי משלוח</span><span>${money(shippingCost)}</span></div>
    <div class="fp-row"><span>מחיר לפני מע״מ</span><span>${money(subtotal)}</span></div>
    <div class="fp-row"><span>מע״מ (18%)</span><span>${money(vat)}</span></div>
    <div class="fp-row fp-strong"><span>מחיר סופי ללקוח</span><span>${money(finalPrice)}</span></div>
    <br>
    <div class="fp-row"><span>דמי גבייה (25%)</span><span>${money(commission)}</span></div>
    <div class="fp-row fp-strong"><span>הכנסה נטו</span><span>${money(netIncome)}</span></div>
  `);
}

// =========================
// Backward calculation
// =========================
function calculateBackward() {
  const finalPrice = parseFloat(finalPriceInput.value());
  if (isNaN(finalPrice) || finalPrice <= 0) {
    resultDivBackward.style("display", "block").html("אנא הזן מחיר סופי תקין.");
    return;
  }

  const taxRate = 0.18;
  const commissionRate = 0.25;

  const withoutVat = finalPrice / (1 + taxRate);
  const shipping = withoutVat >= 1801 ? 300 : 150;
  const base = Math.round(withoutVat - shipping);
  const commission = base * commissionRate;
  const net = base - commission;

  resultDivBackward.style("display", "block").html(`
    <div class="fp-row fp-strong"><span>מחיר סופי</span><span>${money(finalPrice)}</span></div>
    <div class="fp-row"><span>מחיר ללא מע״מ</span><span>${money(withoutVat)}</span></div>
<div class="fp-row fp-highlight">
  <span>מחיר בסיס ללא שינוע וללא מע״מ<br><small>זה הסכום להזנה במערכת</small></span>
  <span>${money(base)}</span>
</div>
    <br>
    <div class="fp-row"><span>דמי גבייה (25%)</span><span>${money(commission)}</span></div>
    <div class="fp-row fp-strong"><span>הכנסה נטו</span><span>${money(net)}</span></div>
  `);
}

function money(x){
  const n = Number(x);
  const formatted = Number.isInteger(n) ? n : n.toFixed(2);
  return `${formatted} ש"ח`;
}

function draw(){}
function windowResized(){ resizeCanvas(windowWidth, windowHeight); }
