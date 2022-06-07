let chosenOption = [];

/*output for chosen services*/
const optionsList = document.getElementById("options-list");

/*Wash Car Btn*/
const washCarBtn = document.getElementById("washcar");

/*Mown Lawn Btn*/
const mownLawnBtn = document.getElementById("mownlawn");

/*Pull Weeds*/
const pullWeedsBtn = document.getElementById("pullweeds");

/*Total 4 services*/
const totalOutput = document.getElementById("total-calculated");

/*Send Invoice BTN*/
const sendInvoice = document.getElementById("invoice-sent");

let totalCost = 0;

let carWashChosen = false;

let mownLawnChosen = false;

let pullWeedsChosen = false;

washCarBtn.addEventListener("click", function () {
  if (!carWashChosen) {
    chosenOption.push({ name: "Wash Car", price: 10, id: "carWashEl" });
    totalCost += 10;
    carWashChosen = true;
    carWashEl = document.getElementById("carWashEl");
  }
  renderOptionsList();
});

mownLawnBtn.addEventListener("click", function () {
  if (!mownLawnChosen) {
    chosenOption.push({ name: "Mown Lawn", price: 20, id: "mownLawnEl" });
    totalCost += 20;
    mownLawnChosen = true;
  }
  renderOptionsList();
});

pullWeedsBtn.addEventListener("click", function () {
  if (!pullWeedsChosen) {
    chosenOption.push({ name: "Pull Weeds", price: 30, id: "pullWeedsEl" });
    totalCost += 30;
    pullWeedsChosen = true;
  }
  renderOptionsList();
});

function renderOptionsList() {
  optionsList.innerHTML = "";
  for (let i = 0; i < chosenOption.length; i++) {
    optionsList.innerHTML += `<li><span class="service-name">${chosenOption[i].name}</span>
                             <span class="service-price">$${chosenOption[i].price}</span></li>`;
  }
  totalOutput.textContent = "$" + totalCost;
}

/*send invoice button js*/
sendInvoice.addEventListener("click", function () {
  chosenOption = [];
  optionsList.innerHTML = "";
  totalCost = 0;
  totalOutput.innerHTML = "$0";
  carWashChosen = false;
  mownLawnChosen = false;
  pullWeedsChosen = false;
});
