'use strict';

(function () {

  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.wizardCoatColor = wizardCoatColor;
  var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  window.wizardEyesColor = wizardEyesColor;
  var wizardFireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
  window.randomInt = randomInt;

  wizardCoat.addEventListener('click', function () {
    var randomCoatColor = wizardCoatColor[randomInt(0, wizardCoatColor.length)];
    wizardCoat.style.fill = randomCoatColor;
    document.querySelector('input[name = coat-color]').value = randomCoatColor;
  });

  wizardEyes.addEventListener('click', function () {
    var randomEyesColor = wizardEyesColor[randomInt(0, wizardEyesColor.length)];
    wizardEyes.style.fill = randomEyesColor;
    document.querySelector('input[name = eyes-color]').value = randomEyesColor;
  });

  wizardFireball.addEventListener('click', function () {
    var randomFireballColor = wizardFireballColor[randomInt(0, wizardFireballColor.length)];
    wizardFireball.style.backgroundColor = randomFireballColor;
    document.querySelector('input[name = fireball-color]').value = randomFireballColor;
  });

})();
