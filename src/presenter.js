import sumar from './sumador';
import multiplicar from './multiplicador';

const first = document.querySelector('#primer-numero');
const second = document.querySelector('#segundo-numero');
const form = document.querySelector('#sumar-form');
const div = document.querySelector('#resultado-div');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = '<p>' + sumar(firstNumber, secondNumber) + '</p>';
});
const mulFirst = document.querySelector('#pri-numero');
const mulSecond = document.querySelector('#seg-numero');
const mulForm = document.querySelector('#multiplicar-form');
const mulDiv = document.querySelector('#resultado-mul');

mulForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(mulFirst.value);
  const secondNumber = Number.parseInt(mulSecond.value);

  mulDiv.innerHTML = '<p>' + multiplicar(firstNumber, secondNumber) + '</p>';
});