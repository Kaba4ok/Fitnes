'use strict';

(function () {

  const SLIDES_COUNT = 1;

  let slideIndex = 0;

  let showSlide = function (slides, add) {
    if (add) {
      slideIndex += SLIDES_COUNT;
    } else {
      slideIndex -= SLIDES_COUNT;
    }

    if (slideIndex < 0) {
      slideIndex = 0;
    } else if (slideIndex > (slides.length - SLIDES_COUNT)) {
      slideIndex = (slides.length - SLIDES_COUNT);
    }

    slides.forEach(function(slide) {
      slide.style.display = 'none';
    });

    for (let i = slideIndex; i < slides.length; i++) {
      slides[i].style.display = 'block';
    }
  }

  window.reviewSlider = {
    showSlide: showSlide,
  }

})();
