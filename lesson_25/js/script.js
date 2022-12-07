"use strict";

const fieldSearch = document.querySelector('.search');

document.addEventListener("click", search);

function search(i) {
	if (i.target.closest('.search__button')) {
		fieldSearch.classList.toggle('_active');
	}
	if (!i.target.closest('.search')) {
		fieldSearch.classList.remove('_active');
	}
}

const fieldLetter = document.querySelector('.search__input');
const fieldLetterLimit = fieldLetter.getAttribute('maxlength');
const letterLimit = document.querySelector('.search__limit span');
letterLimit.innerHTML = fieldLetterLimit;

fieldLetter.addEventListener('keyup', letter);
fieldLetter.addEventListener('keydown', function (event) {
	if (event.repeat) letter();
});

function letter() {
	const letterResult = fieldLetterLimit - fieldLetter.value.length;
	letterLimit.innerHTML = letterResult;
}

document.addEventListener('keyup', function (i) {
	if (i.code === 'Escape') {
		fieldSearch.classList.remove('_active');
	}
})