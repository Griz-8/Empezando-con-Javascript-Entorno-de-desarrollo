/* eslint-disable no-unused-vars */
import sumar from './sumador';
import multiplicar from './multiplicador';
import saludar from './bot';

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


const nom = document.querySelector('#nombre');
const genSelect = document.querySelector('#genero');
const edadH = document.querySelector('#edadD');
const saluForm = document.querySelector('#saludar-form');
const saluDiv = document.querySelector('#resultado-saludo');

saluForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const edad = edadH.value;
  const nombre = nom.value;
  const genero = genSelect.value;
  saluDiv.innerHTML = '<p>' + saludar(nombre, genero, edad) + '</p>';
});
