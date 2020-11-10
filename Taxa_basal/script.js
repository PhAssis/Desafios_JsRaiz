const inputHeight = document.querySelector('.altura');
const inputWeight = document.querySelector('.peso');
const inputAge = document.querySelector('.idade');
const inputGenre = document.querySelectorAll('input[name=genero]');
const button = document.querySelector('.btn');
const container = document.querySelector('.container');
const messageResult = document.querySelector('.messageResult');

const inputHeightValue = inputHeight.value;
const inputWeightValue = inputWeight.value;
const inputAgeValue = inputAge.value;




function calculaTmb(genero) {
  
  const formulaPartOne = `${genero === 'masculino' ? 66.5 : 665.1}`;
  const formulaPartTwo = (`${genero === 'masculino' ? 13.75 : 9.56}` * inputWeightValue);
  const formulaPartThree = (`${genero === 'masculino' ? 5.0 : 1.8}` * inputHeightValue);
  const formulaPartFour = (`${genero === 'masculino' ? 6.8 : 4.7}` * inputAgeValue);

  const formulaResult = formulaPartOne + formulaPartTwo + formulaPartThree - formulaPartFour;
  
  return formulaResult;  
}

  
function insertResult() {
  messageResult.innerHTML = '';
  messageResult.innerHTML = 
  `<div class="alert alert-primary text-center" role="alert">
      Você precisa de ${calculaTmb(inputGenreValue)} calorias diária.
    </div>`;
}

button.addEventListener('click', () => {
  const inputGenreValue =
    [...inputGenre].filter(input => input.checked ? input.name: '');
  console.log(inputGenreValue)
})