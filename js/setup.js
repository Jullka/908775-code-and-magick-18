'use strict';

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');


var keyCode = {
  ESC: 25,
  ENTER: 13
};
var WIZARD_NUMBER = 4;
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardLastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardFireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var createWizards = function () {
  var randonWizard = [];
  for (var i = 0; i < WIZARD_NUMBER; i++) {
    randonWizard.push({
      name: wizardNames[randomInt(0, wizardNames.length)] + ' ' + wizardLastnames[randomInt(0, wizardLastnames.length)],
      coatColor: wizardCoatColor[randomInt(0, wizardCoatColor.length)],
      eyesColor: wizardEyesColor[randomInt(0, wizardEyesColor.length)]
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

// 1. Открытие/закрытие окна настройки персонажа:

// Нажатие на элемент .setup-open удаляет класс hidden у блока setup
// Нажатие на элемент .setup-close, расположенный внутри блока setup возвращает ему класс hidden.

// Если диалог открыт, нажатие на кнопку «Сохранить» приводит к отправке формы
// Если диалог открыт и фокус находится на кнопке «Сохранить», нажатие на ENTER приводит к отправке формы

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userName = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === keyCode.ESC && userName !== document.activeElement) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === keyCode.ENTER) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === keyCode.ENTER) {
    closePopup();
  }
});

var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  var randomCoatColor = wizardCoatColor[randomInt(0, wizardCoatColor.length)];
  wizardCoat.style.fill = randomCoatColor;
  document.querySelector('input[name = coat-color]').value = randomCoatColor;
});

wizardEyes.addEventListener('click', function () {
  var randomEyesColor = randomInt(wizardEyesColor);
  wizardEyes.style.fill = randomEyesColor;
  document.querySelector('input[name = eyes-color]').value = randomEyesColor;
});

wizardFireball.addEventListener('click', function () {
  var randomFireballColor = randomInt(wizardFireballColor);
  wizardFireball.style.backgroundColor = randomFireballColor;
  document.querySelector('input[name = fireball-color]').value = randomFireballColor;
});
