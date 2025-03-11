import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';

import axios from 'axios';

const sendButton = document.querySelector('.button-send');
const overlay = document.querySelector('.work__overlay');
const closeBtn = document.querySelector('.work__modal-btn');

function openModal() {
	overlay.classList.remove('visually-hidden');
	document.documentElement.classList.add('is-lock');
}

function closeModal() {
	overlay.classList.add('visually-hidden');
	document.documentElement.classList.remove('is-lock');
}

closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', event => {
	if (event.target === overlay) {
		closeModal();
	}
});

document.addEventListener('keydown', event => {
	if (
		event.key === 'Escape' &&
		!overlay.classList.contains('visually-hidden')
	) {
		closeModal();
	}
});

document
	.getElementById('work-form')
	.addEventListener('submit', async function (event) {
		event.preventDefault();

		const emailInput = document.querySelector('.work__form-email');
		const commentInput = document.querySelector('.work__form-comment');

		const formData = {
			email: emailInput.value,
			comment: commentInput.value,
		};

		try {
			const response = await axios.post(
				'https://portfolio-js.b.goit.study/api/requests',
				formData,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			openModal();
			this.reset();
		} catch (error) {
			let errorMessage =
				'Error sending application. Please check the entered data and try again.';
			if (error.response) {
				errorMessage += ` Error code: ${error.response.status}`;
			} else if (error.request) {
				errorMessage += ' Network problem.';
			}
			alert(errorMessage);
			console.error('Error:', error);
		}
	});
