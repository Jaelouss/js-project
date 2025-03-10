import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Keyboard } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	const swiper = new Swiper('.swiper', {
		modules: [Navigation, Keyboard],
		loop: false,
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
		on: {
			init: function () {
				updateButtons(this);
			},
			slideChange: function () {
				updateButtons(this);
			},
		},
	});

	function updateButtons(swiper) {
		document
			.querySelector('.slider-prev')
			.classList.toggle('disabled', swiper.isBeginning);
		document
			.querySelector('.slider-next')
			.classList.toggle('disabled', swiper.isEnd);
	}
});
