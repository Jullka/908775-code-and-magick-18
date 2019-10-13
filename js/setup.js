'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var WIZARD_NUMBER = 4;
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardLastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyes = ['black', 'red', 'blue', 'yellow', 'green'];

var randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var createWizards = function () {
  var randonWizard = [];
  for (var i = 0; i < WIZARD_NUMBER; i++) {
    randonWizard.push({
      name: wizardNames[randomInt(0, wizardNames.length)] + ' ' + wizardLastnames[randomInt(0, wizardLastnames.length)],
      coatColor: wizardCoat[randomInt(0, wizardCoat.length)],
      eyesColor: wizardEyes[randomInt(0, wizardEyes.length)]
    });
  }
  return randonWizard;
};

var wizards = createWizards(WIZARD_NUMBER);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var init = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

  similarListElement.appendChild(fragment);

  document.querySelector('.setup-similar').classList.remove('hidden');
};

init ();




