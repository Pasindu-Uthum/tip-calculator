// Bill value and no of people input
const bill = document.getElementById("bill");
const people = document.getElementById("people");

// Invisible btn which hold the calculate function of whole programme and return output when enter key pressed
const btn = document.getElementById("btn");

// Tip buttons
const tips = document.getElementsByClassName("tip");

// Custom tip value input
const customTip = document.querySelector(".custom-tip");

// Output containers
const tipOutput = document.getElementById("tip-output");
const totalOutput = document.getElementById("total-output");

// Warning messages
const billWarn = document.getElementById("bill-warning");
const peopleWarn = document.getElementById("people-warning");
const tipWarn = document.getElementById("tip-warning");

// The Reset button
const reset = document.querySelector(".reset");

// Calculate the tip value from buttons
let tipValue = 0;
for (let i = 0; i < tips.length; i++) {
  tips[i].onclick = function () {
    tipValue = Number(tips[i].dataset.tip);
    customTip.value = "";
  };
}

// Calculate the tip value by the custom input field
customTip.onkeyup = function () {
  tipValue = Number(customTip.value / 100);
};

// Evaluate all the function when the invisible btn clicked
btn.onclick = function () {
  // Checking the input values
  if (bill.value === "" || bill.value == 0) {
    billWarn.style.display = "block";
  } else if (tipValue == 0) {
    tipWarn.style.display = "block";
  } else if (people.value === "" || people.value == 0) {
    peopleWarn.style.display = "block";
  } else {
    // Set the warnings display:none; again
    billWarn.style.display = "none";
    tipWarn.style.display = "none";
    peopleWarn.style.display = "none";

    const netTip = Number(bill.value) * tipValue;
    const tipAmount = (Number(bill.value) * tipValue) / Number(people.value);
    const totalAmount = (Number(bill.value) + netTip) / Number(people.value);

    // Return the output with only 2 decimals
    tipOutput.innerHTML = tipAmount.toFixed(2);
    totalOutput.innerHTML = totalAmount.toFixed(2);

    // console.log(bill.value, tipValue, netTip, tipAmount, totalAmount);
  }
};

// Reset all the things on the page as reloaded
reset.onclick = function () {
  bill.value = "";
  people.value = "";
  customTip.value = "";
  tipOutput.innerHTML = "0.00";
  totalOutput.innerHTML = "0.00";
  billWarn.style.display = "none";
  tipWarn.style.display = "none";
  peopleWarn.style.display = "none";
};

// As the button is set to display: none; function carried out by the input of enter key
bill.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btn.onclick();
  }
});
people.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btn.onclick();
  }
});
customTip.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btn.onclick();
  }
});
