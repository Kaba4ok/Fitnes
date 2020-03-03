'use strict';

(function () {

  const SLIDES_COUNT_DESKTOP = 4;
  const SLIDES_COUNT_TABLET = 2;
  const SLIDES_COUNT_DEFAULT = 1;
  const DESKTOP_WIDTH = 1200;
  const TABLET_WIDTH = 768;

  let slideIndex = 0;

  let startSlideShow = function (slides) {

    if (window.innerWidth < DESKTOP_WIDTH) {
      slideIndex = 2;
    }

    slides.forEach(function(slide) {
      slide.style.display = 'none';
    });

    for (let i = slideIndex; i < slides.length; i++) {
      slides[i].style.display = 'block';
    }
  }

  let showSlide = function (slidesCount, slides, add) {
    if (add) {
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

  let changeSlide = function (slides, add, screenWidth = false) {
    let slidesCount = SLIDES_COUNT_DEFAULT;

    if (screenWidth) {
      slidesCount = getSlidesCount();
    }

    showSlide(slidesCount, slides, add);
  }

  window.coachesSlider = {
    startSlideShow: startSlideShow,
    changeSlide: changeSlide,
  }

})();
