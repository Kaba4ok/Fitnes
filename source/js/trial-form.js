'use strict';

(function () {

  let form = document.querySelector('.trial__form');
  let inputName = form.querySelector('.trial__input--user');
  let inputPhone = form.querySelector('.trial__input--phone');
  let btnSubmit = form.querySelector('.trial__btn');

  const PHONE_NUMBER_COUNT = 14;

  let recordsStorage = function () {
    let isStorageSupport = true;
    let storage = '';

    try {
      storage = localStorage.getItem('test');
    } catch (err) {
      isStorageSupport = false;
    }

    if (isStorageSupport) {
      localStorage.setItem('userName', inputName.value);
      localStorage.setItem('userPhone', inputPhone.value);
    }
  }

  let onFormSubmit = function (evt) {
    recordsStorage();
  }

  inputPhone.addEventListener('blur', function () {
    if (inputPhone.value.length < PHONE_NUMBER_COUNT) {
      inputPhone.setCustomValidity('Номер телефона должен состоять из 10 цифр');
    } else {
      inputPhone.setCustomValidity('');
    }
  });

  form.addEventListener('submit', onFormSubmit);

})();
