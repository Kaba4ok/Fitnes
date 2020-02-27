'use strict';

(function () {

  let coaches = document.querySelector('.coaches');
  let coachesList = coaches.querySelector('.coaches__list');
  let coachesSlides = coaches.querySelectorAll('.coach');
  let prevCoachesSlideBtn = coaches.querySelector('.coaches__btn-slide--prev');
  let nextCoachesSlideBtn = coaches.querySelector('.coaches__btn-slide--next');

  const SLIDES_COUNT_DESKTOP = 4;
  const SLIDES_COUNT_TABLET = 2;
  const SLIDES_COUNT_DEFAULT = 1;
  const DESKTOP_WIDTH = 1200;
  const TABLET_WIDTH = 768;

  let slideIndex = 0;

// --------------------------------------------------------------

  let showSlide = function (slidesCount, slides, drop) {
    if (drop) {
      slideIndex += slidesCount;
    } else {
      slideIndex -= slidesCount;
    }

    if (slideIndex < 0) {
      slideIndex = 0;
    } else if (slideIndex > (slides.length - slidesCount)) {
      slideIndex = (slides.length - slidesCount);
    }

    slides.forEach(function(slide) {
      slide.style.display = 'none';
    });

    for (let i = slideIndex; i < slides.length; i++) {
      slides[i].style.display = 'block';
    }
  }

// --------------------------------------------------------------

  let getSlidesCount = function () {
    let slidesCount = 0;

    if (window.innerWidth >= DESKTOP_WIDTH) {
      slidesCount = SLIDES_COUNT_DESKTOP;
    } else if (window.innerWidth >= TABLET_WIDTH) {
      slidesCount = SLIDES_COUNT_TABLET;
    } else {
      slidesCount = SLIDES_COUNT_DEFAULT;
    }

    return slidesCount;
  }

// --------------------------------------------------------------

  let changeSlide = function (slides, drop, screenWidth = false) {
    let slidesCount = SLIDES_COUNT_DEFAULT;

    if (screenWidth) {
      slidesCount = getSlidesCount();
    }

    showSlide(slidesCount, slides, drop);
  }

// --------------------------------------------------------------

  changeSlide(coachesSlides, false, true);

  prevCoachesSlideBtn.addEventListener('click', function () {
    changeSlide(coachesSlides, false, true);
  });

  nextCoachesSlideBtn.addEventListener('click', function () {
    changeSlide(coachesSlides, true, true);
  });

})();
