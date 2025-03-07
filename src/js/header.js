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
	}
}

menuVisibility();

window.addEventListener('resize', menuVisibility);

btn.box.addEventListener('click', event => {
	if (event.target === btn.menu) {
		menu.classList.toggle('visually-hidden');
	}
	if (event.target === btn.modal) {
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
