const inputHeight = document.querySelector('.altura');
const inputWeight = document.querySelector('.peso');
const inputAge = document.querySelector('.idade');
const inputGenre = document.querySelectorAll('input[name=genre]');
const button = document.querySelector('.btn');
const container = document.querySelector('.container');
const messageResult = document.querySelector('.messageResult');

function calculaTmb(genre, height, weight, age) {
  const formulaPartOne = parseFloat(`${genre === 'masculino' ? 66.5 : 665.1}`);
  const formulaPartTwo = (`${genre === 'masculino' ? 13.75 : 9.56}` * weight);
  const formulaPartThree = (`${genre === 'masculino' ? 5.0 : 1.8}` * height);
  const formulaPartFour = (`${genre === 'masculino' ? 6.8 : 4.7}` * age);

  const formulaResult = formulaPartOne + formulaPartTwo + formulaPartThree - formulaPartFour;

  return formulaResult;
}

function insertResult(genre, height, weight, age) {
  messageResult.innerHTML = '';
  messageResult.innerHTML =
    `<div class="alert alert-primary text-center" role="alert">
      Você precisa de ${calculaTmb(genre, height, weight, age)} calorias diária.
    </div>`;
}

function resultTMB() {
  const inputHeightValue = inputHeight.value;
  const inputWeightValue = inputWeight.value;
  const inputAgeValue = inputAge.value;
  
  const inputGenreValue =
    [...inputGenre].filter(input => input.checked)[0].value;
  insertResult(inputGenreValue, inputHeightValue, inputWeightValue, inputAgeValue);
}

button.addEventListener('click', resultTMB);