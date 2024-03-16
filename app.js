const numberLabel = document.getElementById("random-number");
const rollBtn = document.getElementById("roll-btn");
const min = 1;
const max = 6;
let randomNumber;

rollBtn.onclick = function () {
  randomNumber = Math.floor(Math.random() * max) + min;
  numberLabel.textContent = randomNumber;
};
