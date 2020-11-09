const inputHeight = document.querySelector('.altura');
const inputWeight = document.querySelector('.peso');
const inputAge = document.querySelector('.idade');
const inputGenre = document.querySelector('input[name=genero]:checked');
const button = document.querySelector('.btn');
const container = document.querySelector('.container');

const inputHeightValue = inputHeight.value;
const inputWeightValue = inputWeight.value;
const inputAgeValue = inputAge.value;
const inputGenreId = inputGenre.id;

function calculaTmb(genero) {
  const formulaPartOne = `${genero === 'masculino' ? 66.5 : 665.1}`;
  const formulaPartTwo = (`${genero === 'masculino' ? 13.75 : 9.56}` * inputWeightValue);
  const formulaPartThree = (`${genero === 'masculino' ? 5.0 : 1.8}` * inputHeightValue);
  const formulaPartFour = (`${genero === 'masculino' ? 6.8 : 4.7}` * inputAgeValue);
  
   
  }

button.addEventListener('click', () => {

  if (inputGenreId === 'masculino') {
    
  }


  
})