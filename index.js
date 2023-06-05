//ITERATION 1

let donutCount = 0;

//Get our button element
const btn = document.querySelector("button");

function addToDonutCount(amountToAdd) {
  donutCount = donutCount + amountToAdd;
}

//Retrieve donut count
function getDonutCount() {
  return donutCount;
}

// Purchase Auto Clicks
let autoClickCount = 0;

function addToAutoClickCount(amountToAdd) {
  autoClickCount = autoClickCount + amountToAdd;
}

//Retrieve autoClick count
function addToAutoClickCount() {
  return autoClickCount;
}
function subtractFromDonutCount(amountToSubtract) {
  donutCount = donutCount - amountToSubtract;
}

//Cost of second Auto Clicker increase
let autoClickCost = 100;

function autoClickCostIncrease() {
  autoClickCost = autoClickCost * 1.1;
}

//Add a click event listener to our donut button
btn.addEventListener(
  "click",
  function () {
    donutCount++;
    document.getElementById("nav-menu").innerText = donutCount;
  },
  1000
);
