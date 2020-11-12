const inputHeight = document.querySelector('.altura');
const inputWeight = document.querySelector('.peso');
const button = document.querySelector('.btn');
const container = document.querySelector('.container');
const messageResult = document.querySelector('.messageResult');

const optionsMessage = {
  alertDangerMessage: {
    underWeight: 'Abaixo do peso',
    gradeObesityTwo: 'Obesidade grau 2',
    gradeObesityThree: 'Obesidade grau 3'
  },
  normalWeight: 'Peso normal',
  overweight: 'Sobrepeso',
  gradeObesityOne: 'Obesidade grau 1',
}

const { alertDangerMessage,
  alertDangerMessage: { underWeight, gradeObesityTwo, gradeObesityThree },
  normalWeight,
  overweight,
  gradeObesityOne
} = optionsMessage;

const informationsImc = [
  [valor => valor < 18.5, underWeight],
  [valor => valor > 18.5 && valor < 24.9, normalWeight],
  [valor => valor >= 25 && valor < 29.9, overweight],
  [valor => valor >= 30 && valor < 34.9, gradeObesityOne],
  [valor => valor >= 35 && valor < 39.9, gradeObesityTwo],
  [valor => valor >= 40, gradeObesityThree]
];

function calculationImc(weight, height) {
  const calculatedImc = weight / (height * height)
  const resultImc = informationsImc.find(fn => fn[0](calculatedImc))[1]
  return resultImc;
}

const typeMessage = (resultImc) =>
  Object.values(alertDangerMessage).includes(resultImc)
    ? 'danger'
    : 'warning';

function insertResultIntoDom(resultImc) {
  messageResult.innerHTML = '';
  messageResult.innerHTML =
    `<div class="alert alert-${resultImc === normalWeight ? 'primary' : typeMessage(resultImc)} text-center" role="alert">
      ${resultImc}
    `;
}

function resultImc() {
  const inputHeightValue = inputHeight.value;
  const inputWeightValue = inputWeight.value;
  insertResultIntoDom(calculationImc(inputWeightValue, inputHeightValue));
}

button.addEventListener('click', resultImc)




