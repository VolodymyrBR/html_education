"use strict";

console.log(`Домашнє завдання. 
Функції в JAVASCRIPT. Стрілочні функції, рекурсія, планування: setTimeout и setInterval.
`);

let showMassage;
if (2 > 1) {
	showMassage = function () {
		console.log('Повідомлення');
	}
}
showMassage()

console.log('=======================================');
console.log('Масиви в JAVASCRIPT. Методи масивів. Редагування, пошук, сортування.');

let user = ['Ваня', "Іштван",];
user.push("Оля");
user.splice(1, 1, "Петя")
let delUser = user.splice(0, 1);
console.log(delUser);
user.splice(0, 0, "Маша", "Паша");
console.log(user);


console.log('=======================================');

let arr = ['Ваня', "Іштван", "Оля"];
let delArr = arr.splice(1, 1);
console.log(delArr);

console.log('=======================================');

let str = 'Ваня,Іштван,Оля';
let arrTwo = str.split(',');
console.log(arrTwo);

console.log('=======================================');
console.log('JavaScript Document object model (DOM) за годину. Зміна HTML CSS. Атрибути і властивості. Оточення.');

const dataVar = document.querySelector('[data-say-hi]');
console.log(dataVar.dataset.sayHi);

console.log('=======================================');

const listText = document.querySelector('ul li');
console.log(listText);

console.log('=======================================');

const tagLike = document.querySelectorAll('.like');
console.log(tagLike);

console.log('=======================================');
console.log('JavaScript рoзміри, прокрутка та координати елементsв на сторінці та у вікна браузера.');

const mainDocument = document.documentElement;
const windowWidht = mainDocument.clientWidth;
const windowFullWidht = window.innerWidth;
const scrollWidht = windowFullWidht - windowWidht;
console.log(scrollWidht);

console.log('=======================================');

function setScrollBy() {
	window.scrollBy(0, 100);
	const scrollTop = window.pageYOffset;
	console.log(scrollTop);
}
setTimeout(setScrollBy, 1000);

console.log('=======================================');

const itemOne = document.querySelector('.task__one');
const getItemOne = itemOne.getBoundingClientRect();
console.log(getItemOne);

console.log('=======================================');

const itemTwo = document.querySelector('.task__two h2');
const getItemTwoTop = itemTwo.getBoundingClientRect().top;
const getItemTwoDocumCoordinates = getItemTwoTop + window.pageYOffset;
console.log(`Координати відносно вікна браузера: ${getItemTwoTop}`);
console.log(`Координати відносно документа: ${getItemTwoDocumCoordinates}`);

console.log('=======================================');

const itemThree = document.elementFromPoint(200, 250);
console.log(itemThree);

console.log('=======================================');