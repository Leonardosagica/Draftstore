//! Navbar change color on scroll
window.addEventListener('scroll', (event) => {
	if (window.scrollY >= 60) {
		document.querySelector('nav').classList.add('active');
	} else {
		document.querySelector('nav').classList.remove('active');
	}
});

//! Menu Mobile
const hamburger = document.querySelector('.navbar__hamburger');
const mobileMenu = document.querySelector('.navbar__menu');
const links = document.querySelectorAll('.navbar__menu li a');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobileMenu.classList.toggle('active');
});

links.forEach((link) =>
	link.addEventListener('click', () => {
		hamburger.classList.remove('active');
		mobileMenu.classList.remove('active');
	})
);

//! Hero Slider
const slides = document.querySelectorAll('.slider__item');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

/* autoplay */
const auto = true
const intervalTime = 5000
let slideInterval;

/* functions */
const nextSlide = () => {
    let active = document.querySelector('.active');

    active.classList.remove('active');

    if (active.nextElementSibling) active = active.nextElementSibling;
    else active = slides[0];

    active.classList.add('active');
}

if (auto) {
    clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide, intervalTime);
}

const prevSlide = () => {
    let active = document.querySelector('.active');
    active.classList.remove('active');

    if (active.previousElementSibling) active = active.previousElementSibling;
    else active = slides[slides.length - 1];
    

    active.classList.add('active');
} 



/* Eventlisteners */

prevBtn.addEventListener('click', () => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(prevSlide, intervalTime);
    }
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

//! Cart Button

document.querySelectorAll('.cart-add-button').forEach(button =>
	button.addEventListener('click', e => {
		if (!button.classList.contains('loading')) {
			button.classList.add('loading');
			setTimeout(() => button.classList.remove('loading'), 3700);
		}
		e.preventDefault();
	}),
);

