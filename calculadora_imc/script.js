const inputHeight = document.querySelector('.altura');
const inputWeight = document.querySelector('.peso');
const button = document.querySelector('.btn');
const container = document.querySelector('.container');
const messageResult = document.querySelector('.messageResult');



const optionsMessage = {
  underWeight: 'Abaixo do peso',
  normalWeight: 'Peso normal',
  overweight: 'Sobrepeso',
  gradeObesityOne: 'Obesidade grau 1',
  gradeObesityTwo: 'Obesidade grau 2',
  gradeObesityThree: 'Obesidade grau 3'
}

const { underWeight, normalWeight, overweight, gradeObesityOne, gradeObesityTwo, gradeObesityThree } = optionsMessage;

const informationsImc = [
  [valor => valor < 18.5, underWeight],
  [valor => valor > 18.5 && valor < 24.9, normalWeight],
  [valor => valor >= 25 && valor < 29.9, overweight],
  [valor => valor >= 30 && valor < 34.9, gradeObesityOne],
  [valor => valor >= 35 && valor < 39.9, gradeObesityTwo],
  [valor => valor >= 40, gradeObesityThree]
];

const alertMessage = {
  danger: [underWeight, gradeObesityTwo, gradeObesityThree],
  warning: [overweight, gradeObesityOne]
}

function calculationImc(weight, height) {
  const calculatedImc = weight / (height * height)
  const result = informationsImc.find(fn => fn[0](calculatedImc))[1]
  insertResultIntoDom(result)
}

function typeMessage(result) {
  if (alertMessage.danger.includes(result)) {
    return 'danger'
  }
  if (alertMessage.warning.includes(result)) {
    return 'warning'
  }
}

function insertResultIntoDom(result) {
  messageResult.innerHTML = '';
  messageResult.innerHTML = `<div class="alert alert-${result === normalWeight ? 'primary' : typeMessage(result)} text-center" role="alert">
  ${result}
  `;
}

button.addEventListener('click', () => {
  const inputHeightValue = inputHeight.value;
  const inputWeightValue = inputWeight.value;
  calculationImc(inputWeightValue, inputHeightValue);
})




