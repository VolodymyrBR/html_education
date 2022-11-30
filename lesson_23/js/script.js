"use strict";

console.log(`Домашнє завдання. 
Рядки в JAVASCRIPT.Тип даних string.Типи лапок, пошук, регістр та отримання підрядка.
`);

let text = "Фрілансер";
console.log(text.slice(5, 6));

let textTwo = text.toUpperCase();
console.log(textTwo);

console.log(text.slice(3, 6));

console.log('=============================================================');

console.log('Числа в JAVASCRIPT. Тип даних number. Робота з числами. Проблема неточних обчислень.');

let num = 1.005 + Number.EPSILON;
let numOne = Math.round(num * 100) / 100;
console.log(numOne);

let value = '135.58px';
console.log(parseFloat(value));

let date = 58 + 'Фрілансер';
if (isNaN(date)) {
	console.log('Результат NaN');
};

let maxNum = Math.max(10, 58, 39, -150, 0);
console.log(maxNum);

let someNum = 58.858;
console.log(Math.floor(someNum));


console.log('================================================================');
console.log('Цикли FOR и WHILE в JavaScript. Директиви break і continue.');

let someNumber = 1;
while (someNumber < 6) {
	console.log(someNumber);
	++someNumber;
}

console.log('================================================================');

let someNumTwo = 6
for (let n = 1; n < someNumTwo; ++n) {
	console.log(n);
}

console.log('================================================================');

for (let i = 0; i < 3; ++i) {
	console.log(i);
}

let someNumThree = 0;
while (someNumThree < 3) {
	console.log(someNumThree);
	someNumThree++;
}

console.log('================================================================');

stopSize: for (let someNumFour = 0; someNumFour < 2; someNumFour++) {
	for (let size = 0; size < 3; size++) {
		if (size === 1) {
			break stopSize
		}
		console.log(size);
	}
}
