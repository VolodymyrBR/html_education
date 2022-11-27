"use strict";

console.log('Домашка: Змінні в JAVASCRIPT. Константи. Ключові слова LET CONST VAR.');

let userEyesColor;
let user;
let userName;
userName = 'Вася';
user = userName;
console.log(user);

console.log('====================================');

console.log('Пропрацювання теми уроку');

console.log(typeof userEyesColor);
console.log(typeof user);
console.log(typeof userName);

console.log('====================================');

let data = 100;
console.log(data);
console.log(typeof data);
data = String(data)
console.log(data);
console.log(typeof data);


console.log('====================================');


let textLine;
console.log(typeof textLine);
textLine = 'lorem';
console.log(textLine);
console.log(typeof textLine);
textLine = Number(textLine);
console.log(textLine);
console.log(typeof textLine);

console.log('====================================');


const userAuto = {
	auto: 'Audi',
	model: 'Q5'
};
console.log(userAuto);
userAuto.auto = 'VW';
userAuto.model = 'Passat';
console.log(userAuto);

console.log('====================================');


let myCar;
let myCarBrend;
let myCarModel;
myCarBrend = 'Volkswagen';
myCarModel = 'Passat B6';
console.log(`Мій автомобіль: ${myCarBrend} ${myCarModel}`);

console.log('====================================');

let value = 5 < 8;
console.log(value);
console.log(typeof value);

value = 5 > 8;
console.log(value);
console.log(typeof value);