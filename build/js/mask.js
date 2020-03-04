'use strict';

(function () {

  let inputPhone = document.querySelector('.trial__input--phone');

  let setMask = function (element) {
    let maskOptions = {
      mask: '+{7(}000)000-00-00'
    };

    let mask = IMask(element, maskOptions);

    if (element.value.length === 0) {
      element.value = '+7(';
      element.setCustomValidity('Заполните это поле');
    }

    element.selectionStart = element.value.length;

    mask.updateValue();
  }

  inputPhone.addEventListener('focus', function () {
    setMask(inputPhone);
  });
})();
