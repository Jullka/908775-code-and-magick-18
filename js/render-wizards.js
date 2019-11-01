'use strict';
(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var WIZARD_NUMBER = 4;
  var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardLastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var createWizards = function () {
    var randonWizard = [];
    for (var i = 0; i < WIZARD_NUMBER; i++) {
      randonWizard.push({
        name: wizardNames[window.randomInt(0, wizardNames.length)] + ' ' + wizardLastnames[window.randomInt(0, wizardLastnames.length)],
        coatColor: window.wizardCoatColor[window.randomInt(0, window.wizardCoatColor.length)],
        eyesColor: window.wizardEyesColor[window.randomInt(0, window.wizardEyesColor.length)]
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
  }; init();

})();
