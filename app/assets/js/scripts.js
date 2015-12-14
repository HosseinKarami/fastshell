/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2015. MIT licensed.
 */
(function (window, document, undefined) {

  'use strict';

  var input = document.querySelector('[data-select]');
  var select = function () {
    this.select();
  };
  input.addEventListener('click', select);

})(window, document);