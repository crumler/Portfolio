const slidingDivs = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
let timeout;
return function() {
	let context = this, args = arguments;
	let later = function() {
		timeout = null;
		if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
    };
};

function checkSlide(e) {
	slidingDivs.forEach(slidingDivs => {
	// half way through the image
	  const slideInAt = (window.scrollY + window.innerHeight) - slidingDivs.height / 2;
	// bottom of the image
	const imageBottom = sliderImage.offsetTop + slidingDivs.height;
	const isHalfShown = slideInAt > slidingDivs.offsetTop;
	const isNotScrolledPast = window.scrollY < imageBottom;
	if (isHalfShown && isNotScrolledPast) {
		slidingDivs.classList.add('active');
	} else {
		slidingDivs.classList.remove('active');
    }});
}

window.addEventListener('scroll', debounce(checkSlide));
