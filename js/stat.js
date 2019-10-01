'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var SPACE_BETWEEN = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT_MAX = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = "16px PT Mono";
  ctx.fillText('Ура вы победили!', CLOUD_X + SPACE_BETWEEN, CLOUD_Y + SPACE_BETWEEN);
  ctx.fillText('Список результатов:', CLOUD_X + SPACE_BETWEEN, CLOUD_Y + SPACE_BETWEEN + GAP * 2);





  var maxTime = getMaxElement(times);

  var players = ['Вы', 'Саша', 'Маша', 'Паша'];

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + SPACE_BETWEEN + GAP + (GAP + BAR_WIDTH + SPACE_BETWEEN) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillRect(CLOUD_X + GAP + SPACE_BETWEEN + (GAP + BAR_WIDTH + SPACE_BETWEEN) * i, CLOUD_Y + BAR_HEIGHT_MAX - SPACE_BETWEEN - GAP,  BAR_WIDTH, BAR_HEIGHT_MAX * times[i] / maxTime);
  }
};



