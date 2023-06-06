//ITERATION 1 FEATURE 1

let donutCount = 0;

//Add donut to donut count
function addDonut(amount) {
  donutCount = donutCount + amount;
}

//Retrieve donut count
function getDonutCount() {
  return donutCount;
}

//ITERATION 1 FEATURE 2

let autoClickerCount = 0;

//Add to Auto Clicker
function addAutoClicker(amount) {
  autoClickerCount = autoClickerCount + amount;
}

//Retrieve Auto Clicker count
function addToAutoClickerCount() {
  return autoClickerCount;
}

//Subtract Auto Clicker cost from donut count
function subtractFromDonutCount(amount) {
  donutCount = donutCount - amount;
}

//ITERATION 1 FEATURE 3

let autoClickerCost = 100;

function autoClickerCostIncrease() {
  autoClickerCost = autoClickerCost * 1.1;
}

// ITERATION 1 FEATURE 4
function purchaseAutoClicker() {
  if (donutCount >= autoClickerCost) {
    subtractFromDonutCount(autoClickerCost);
    addAutoClicker(1);
    autoClickerCostIncrease();
  }
}

//ITERATION 1 FEATURE 5
function countUp() {
  donutCount = donutCount + autoClickerCount;
  console.log(donutCount);
}

setInterval(countUp, 1000);

//Add a click event listener to activate Auto Clickers

//Get the button element
const btn = document.querySelector("button");

btn.addEventListener(
  "click",
  function () {
    donutCount++;
  },
  1000
);

/*Add a click event listener to our donut button


btn.addEventListener(
  "click",
  function () {
    donutCount++;
    document.getElementById("nav-menu").innerText = donutCount;
  },
  1000
);


*/
