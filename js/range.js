// range
const rangeInput = document.querySelector("#rangeSlider");
const rangeLabel = document.querySelector(".rangeLabel");

rangeInput.addEventListener("input", event => {
  const value = Number(rangeInput.value) / 100;
  rangeLabel.innerHTML = Math.round(value * 250);
});

const rangeInputTwo = document.querySelector("#rangeSliderTwo");
const rangeLabelTwo = document.querySelector(".rangeLabelTwo");

rangeInputTwo.addEventListener("input", event => {
  const value = Number(rangeInputTwo.value) / 100;
  rangeLabelTwo.innerHTML = Math.round(value * 150);
});