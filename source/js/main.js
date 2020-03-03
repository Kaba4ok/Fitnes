'use strict';

(function () {

  let coaches = document.querySelector('.coaches');
  let coachesSlides = coaches.querySelectorAll('.coach');
  let prevCoachesSlideBtn = coaches.querySelector('.coaches__btn-slide--prev');
  let nextCoachesSlideBtn = coaches.querySelector('.coaches__btn-slide--next');

  let reviews = document.querySelector('.reviews');
  let reviewsSlides = reviews.querySelectorAll('.reviews__item');
  let prevReviewsSlideBtn = reviews.querySelector('.reviews__btn--prev');
  let nextReviewsSlideBtn = reviews.querySelector('.reviews__btn--next');

  let scrollToTicketsBtn = document.querySelector('.page-header__ticket-btn');
  let tickets = document.querySelector('.tickets');

  scrollToTicketsBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    tickets.scrollIntoView({block: "start", behavior: "smooth"});
  });

  window.coachesSlider.startSlideShow(coachesSlides);
  window.reviewSlider.showSlide(reviewsSlides, false);

  prevCoachesSlideBtn.addEventListener('click', function () {
    window.coachesSlider.changeSlide(coachesSlides, false, true);
  });

  nextCoachesSlideBtn.addEventListener('click', function () {
    window.coachesSlider.changeSlide(coachesSlides, true, true);
  });

  prevReviewsSlideBtn.addEventListener('click', function () {
    window.reviewSlider.showSlide(reviewsSlides, false);
  });

  nextReviewsSlideBtn.addEventListener('click', function () {
    window.reviewSlider.showSlide(reviewsSlides, true);
  });

})();
