import * as flsFunctions from "./modules/functions.js";

const leftEl = document.querySelector('.left');
const leftWr = leftEl.querySelector('.text-wrapper');
const rightEl = document.querySelector('.right');
const rightWr = rightEl.querySelector('.text-wrapper');


leftEl.addEventListener('scroll', () => {
  //соотношение прокруток будет равно соотношению высот внутренних элементов
  //за вычетом высоты родителя
  //отсюда получаем формулу расчета прокрутки правого блока в зависимости от левого
  rightEl.scrollTop = leftEl.scrollTop * (rightWr.clientHeight - rightEl.clientHeight) / (leftWr.clientHeight - leftEl.clientHeight);
});


jQuery(document).ready(function($) {
  $('.popup-content').magnificPopup({
      type: 'inline'
  });
});