const headerRefs = {
	btn: {
		box: document.querySelector('.header__btns'),
		menu: document.querySelector('[data-btn="menu"]'),
		modal: document.querySelector('[data-btn="modal"]'),
		firstLine: document.querySelector('[data-line="first"]'),
		secondLine: document.querySelector('[data-line="second"]'),
	},
	nav: document.querySelector('.header__nav'),
	menu: document.querySelector('.header__menu-list'),
	order: document.querySelector('.header__order'),
};

const { btn, nav, menu, order } = headerRefs;

function menuVisibility() {
	const workOverlay = document.querySelector('.work__overlay');
	const isWorkModalOpen =
		workOverlay && !workOverlay.classList.contains('visually-hidden');

	if (!nav.classList.contains('header__open-modal')) {
		if (window.innerWidth < 768) {
			menu.classList.add('visually-hidden');
		}
	} else {
		if (window.innerWidth > 768) {
			menu.classList.add('visually-hidden');
		}
	}
	if (window.innerWidth > 768) {
		nav.classList.remove('header__open-modal');
		if (!isWorkModalOpen) {
			document.documentElement.classList.remove('is-lock');
		}
		btn.firstLine.classList.remove('rotate');
		btn.secondLine.classList.remove('rotate');
	}
}

menuVisibility();

window.addEventListener('resize', menuVisibility);

btn.box.addEventListener('click', event => {
	const clickedMenuBtn = event.target.closest('[data-btn="menu"]');
	const clickedModalBtn = event.target.closest('[data-btn="modal"]');

	if (clickedMenuBtn) {
		menu.classList.toggle('visually-hidden');
	}
	if (clickedModalBtn) {
		nav.classList.toggle('header__open-modal');
		menu.classList.toggle('visually-hidden');
		btn.firstLine.classList.toggle('rotate');
		btn.secondLine.classList.toggle('rotate');
		document.documentElement.classList.toggle('is-lock');
	}
});

menu.addEventListener('click', event => {
	if (event.target.tagName === 'A') {
		nav.classList.remove('header__open-modal');
		menu.classList.add('visually-hidden');
		btn.firstLine.classList.remove('rotate');
		btn.secondLine.classList.remove('rotate');
		document.documentElement.classList.remove('is-lock');
	}
});
