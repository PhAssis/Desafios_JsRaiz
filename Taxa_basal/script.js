const inputHeight = document.querySelector('.altura');
const inputWeight = document.querySelector('.peso');
const inputAge = document.querySelector('.idade');
const inputGenre = document.querySelectorAll('input[name=genre]');
const button = document.querySelector('.btn');
const container = document.querySelector('.container');
const messageResult = document.querySelector('.messageResult');

factorValues = {
  "masculino": {
    "genre": 66.5,
    "weight": 13.75,
    "height": 5.0,
    "age": 6.8,
  },
  "feminino": {
    "genre": 665.1,
    "weight": 9.56,
    "height": 1.8,
    "age": 4.7,
  }
}

function calculaTmb(genre, height, weight, age) {
  const genreFactor = factorValues[genre]['genre']
  const weightFactor = ((factorValues[genre]['weight']) * weight);
  const heightFactor = ((factorValues[genre]['height']) * height);
  const ageFactor = ((factorValues[genre]['age']) * age);
  return genreFactor + weightFactor + heightFactor - ageFactor;
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