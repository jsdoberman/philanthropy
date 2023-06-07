'use strict'

const burger = document.querySelector('.hamburger'),
		hideMenu = document.querySelector('.header'),
		menuLink = document.querySelectorAll('.menu__item');


		burger.addEventListener('click', function() {
			hideMenu.classList.toggle('header_active');
			burger.classList.toggle('hamburger_close');

		});



		menuLink.forEach(function(item) {
			item.addEventListener('click', function() {
				hideMenu.classList.toggle('header_active');
				burger.classList.toggle('hamburger_close');
				document.body.style.overflow = '';
			});
		});




function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('move');
		} else change.target.classList.remove('move');

		
	});
}

let options = {
		threshold: [0.5] 
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.move_dote'); //1. Получаем все метки для анимации

for (let elm of elements) { //2. Перебираем каждый элемент псевдомасива меток для анимации
	observer.observe(elm); // 3. 
}

/* ______________________________________________ */


function onEntryTwo(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('rotate');
		} /* else change.target.classList.remove('rotate'); */

		
	});
}

let optionsTwo = {
		threshold: [0.5] 
};

let observerTwo = new IntersectionObserver(onEntryTwo, optionsTwo);
let elementsTwo = document.querySelectorAll('.rotate_dote'); 

for (let elm of elementsTwo) { 
	observerTwo.observe(elm); 
}

/* ______________________________________________ */


function onEntry3(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('to-top');
		} /* else change.target.classList.remove('to-top'); 
 */
		
	});
}

let options3 = {
		threshold: [0.01] 
};

let observer3 = new IntersectionObserver(onEntry3, options3);
let elements3 = document.querySelectorAll('.to-top_dote'); 

for (let elm of elements3) { 
	observer3.observe(elm); 
}













// =================================================Модуль анімація цифрового лічильника
//Цифри котрі мають анимуватись обгортаємо тегом з атрибутом data-digits-counter
window.addEventListener('load', windowLoad);

function windowLoad() { 

	// Функція ініціалізації
	function digitsCountersInit(digitsCountersItems) {
		let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
		if (digitsCounters.length) {
			digitsCounters.forEach(digitsCounter => {
				digitsCountersAnimate(digitsCounter);
			});
		}
	}

	// Функція анімації
	function digitsCountersAnimate(digitsCounter) {
		let startTimestamp = null;
		const duration = parseInt(digitsCounter.dataset.digitsCounterSpeed) ? parseInt(digitsCounter.dataset.digitsCounterSpeed) : 1000; //Час анімації
		const startValue = parseInt(digitsCounter.innerHTML);
		const startPosition = 0;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}

	/* Пуск при завантажені сторінки */
	//digitsCountersInit();

	//--------Пуск при скролі до блока:
		let options = {
			threshold: 0.5
		};

		let observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if(entry.isIntersecting) {
					const targetElement = entry.target;
					const digitsCountersItems = targetElement.querySelectorAll('[data-digits-counter]');
					if (digitsCountersItems.length) {
						digitsCountersInit(digitsCountersItems);
					}
					//Вимкнути після спрацювання
					//observer.unobserve(targetElement);
				}
			});
		}, options);

		let sections = document.querySelectorAll('.observer-dote') //Батьківський єлемент, який з'являється на екрані
		if(sections.length) {
			sections.forEach(section => {
				observer.observe(section);
			});
		}
 } 
// =====================================================================================