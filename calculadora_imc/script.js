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

const getValueOfUnderWeight = valueIndexImc =>
  calculatedValueImc => calculatedValueImc < valueIndexImc;

const getValueOfGradeObesityThree = valueIndexImc =>
  calculatedValueImc => calculatedValueImc < valueIndexImc;

const getBetweenValues = (valueIndexImcOne, valueIndexImcTwo) =>
  calculatedValueImc => calculatedValueImc >= valueIndexImcOne && calculatedValueImc < valueIndexImcTwo;

const informationsImc = [
  [getValueOfUnderWeight(18.5), underWeight],
  [getBetweenValues(18.5, 24.9), normalWeight],
  [getBetweenValues(25, 29.9), overweight],
  [getBetweenValues(30, 34.9), gradeObesityOne],
  [getBetweenValues(35, 39.9), gradeObesityTwo],
  [getValueOfGradeObesityThree(40), gradeObesityThree]
];

const calculationImc = (weight, height) => weight / (height * height);

const selectTheMessage = (weight, height) => informationsImc.find(([fn]) => fn(calculationImc(weight, height)));

const typeMessage = resultImc =>
  Object.values(alertDangerMessage).includes(resultImc)
    ? 'danger'
    : 'warning';

const resultMessage = resultImc =>
  `<div class="alert alert-${resultImc === normalWeight ? 'primary' : typeMessage(resultImc)} text-center" role="alert">
    ${resultImc}
   `;

function insertResultMessageIntoDom(resultImc) {
  messageResult.innerHTML = '';
  messageResult.innerHTML = resultMessage(resultImc)
}

function resultImc() {
  const inputHeightValue = inputHeight.value;
  const inputWeightValue = inputWeight.value;
  insertResultMessageIntoDom(selectTheMessage(inputWeightValue, inputHeightValue));
}

button.addEventListener('click', resultImc);




