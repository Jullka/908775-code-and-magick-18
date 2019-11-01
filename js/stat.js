'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 15;
  var SPACE_BETWEEN = 50;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT_MAX = 150;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.font = '16px PT Mono';
    ctx.textBaseLine = 'handing';
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText('Ура вы победили!', CLOUD_X + SPACE_BETWEEN, CLOUD_Y + GAP * 2);
    ctx.fillText('Список результатов:', CLOUD_X + SPACE_BETWEEN, CLOUD_Y + SPACE_BETWEEN);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = 'rgb(0, 0, 0)';

      var barHeight = BAR_HEIGHT_MAX * times[i] / maxTime;

      var positionX = CLOUD_X + SPACE_BETWEEN + (GAP + BAR_WIDTH + SPACE_BETWEEN) * i;

      ctx.fillText(players[i], positionX, CLOUD_Y + CLOUD_HEIGHT - GAP);
      ctx.fillText(Math.ceil(times[i]), positionX, CLOUD_HEIGHT - barHeight - GAP);

      var colorBar = 'rgba(255, 0, 0, 1)';

      ctx.fillStyle = (players[i] === 'Вы') ? colorBar : 'hsl(240,' + Math.floor(Math.random() * 100) + '% , 50%)';

      ctx.fillRect(positionX, CLOUD_Y + BAR_HEIGHT_MAX - barHeight + SPACE_BETWEEN + GAP, BAR_WIDTH, barHeight);
    }
  };
})();
