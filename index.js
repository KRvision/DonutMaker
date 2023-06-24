//ITERATION 1 FEATURE 1

let donutCount = 0;

//Add donut to donut count
function addDonut(amount) {
  donutCount = donutCount + amount;
  document.getElementById("click-btn").innerText = donutCount;
  if (donutCount >= autoClickerCost) {
    enableBtn();
  } else {
    disableBtn();
  }
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
  document.getElementById("auto-count").innerText = autoClickerCount;
}

//Retrieve Auto Clicker count
function getAutoClickerCount() {
  return autoClickerCount;
}

//Subtract Auto Clicker cost from donut count
function subtractFromDonutCount(amount) {
  donutCount = donutCount - amount;
  document.getElementById("click-btn").innerText = donutCount;
  if (donutCount >= autoClickerCost) {
    enableBtn();
  } else {
    disableBtn();
  }
}

//ITERATION 1 FEATURE 3

let autoClickerCost = 10;

function autoClickerCostIncrease() {
  autoClickerCost = autoClickerCost * 1.1;
  autoClickerCost = Math.round(autoClickerCost);
}

// ITERATION 1 FEATURE 4
function purchaseAutoClicker() {
  if (donutCount >= autoClickerCost) {
    subtractFromDonutCount(autoClickerCost);
    addAutoClicker(1);
    autoClickerCostIncrease();
    document.getElementById("remaining-clicks").innerText = autoClickerCost;
  }
}

//ITERATION 1 FEATURE 5
function countUp() {
  addDonut(autoClickerCount);
}

setInterval(countUp, 1000);

//Get the donut button element
const btn = document.getElementById("donuts");

//Add a click event listener to our donut button

btn.addEventListener("click", function () {
  addDonut(1);
});

//Get the auto_donut button element
const auto_btn = document.getElementById("auto-btn");

auto_btn.addEventListener("click", function () {
  purchaseAutoClicker(1);
});

function disableBtn() {
  document.getElementById("auto-btn").disabled = true;
}

function enableBtn() {
  document.getElementById("auto-btn").disabled = false;
}

function reset() {
  autoClickerCount = 0;
  donutCount = 0;
  autoClickerCost = 100;

  document.getElementById("auto-count").innerText = autoClickerCount;
  document.getElementById("click-btn").innerText = donutCount;
  document.getElementById("remaining-clicks").innerText = autoClickerCost;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var popup = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
popup.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
