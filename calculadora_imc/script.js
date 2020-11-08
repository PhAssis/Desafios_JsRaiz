const inputHeight = document.querySelector('.altura');
const inputWeight = document.querySelector('.peso');
const button = document.querySelector('.btn');
const container = document.querySelector('.container');
const messageResult = document.querySelector('.messageResult');

const informationsImc = [
  [valor => valor < 18.5, 'Abaixo do peso'],
  [valor => valor > 18.5 && valor < 24.9, 'Peso Normal'],
  [valor => valor >= 25 && valor < 29.9, 'Sobrepeso'],
  [valor => valor >= 30 && valor < 34.9, 'Obesidade grau 1'],
  [valor => valor >= 35 && valor < 39.9, 'Obesidade grau 2'],
  [valor => valor >= 40, 'Obesidade grau 3']
];

const alertMessage = {
  danger: ['Abaixo do peso', 'Obesidade grau 2', 'Obesidade grau 3'],
  warning: ['Sobrepeso', 'Obesidade grau 1']
}

function calculationImc() {
  const inputHeightValue = inputHeight.value;
  const inputWeightValue = inputWeight.value;
  const calculatedImc = inputWeightValue / (inputHeightValue * inputHeightValue)
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
  messageResult.innerHTML = `<div class="alert alert-${result === 'Peso Normal' ? 'primary' : typeMessage(result)} text-center" role="alert">
      ${result}
    </div>`;
}

button.addEventListener('click', calculationImc)




