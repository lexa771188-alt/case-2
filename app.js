let counter = 0;

const valueElement = document.getElementById("counter-value");
const minusButton = document.getElementById("minus-button");
const plusButton = document.getElementById("plus-button");
const messageElement = document.getElementById("limit-message");


function updateInterface() {
  valueElement.textContent = counter;

  valueElement.classList.remove("zero", "positive", "negative");

  if (counter > 0) {
    valueElement.classList.add("positive");
  } else if (counter < 0) {
    valueElement.classList.add("negative");
  } else {
    valueElement.classList.add("zero");
  }

  minusButton.disabled = counter === MIN_VALUE;
  plusButton.disabled = counter === MAX_VALUE;

  if (counter === MIN_VALUE || counter === MAX_VALUE) {
    messageElement.hidden = false;
  } else {
    messageElement.hidden = true;
  }
}


minusButton.addEventListener("click", function () {
  counter = changeValue(counter, -1);
  updateInterface();
});


plusButton.addEventListener("click", function () {
  counter = changeValue(counter, 1);
  updateInterface();
});


updateInterface();
