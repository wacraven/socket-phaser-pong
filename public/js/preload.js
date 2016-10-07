'use strict'

let preloadState = {
  preload: function() {
    game.load.image('paddle', '../assets/paddle.png');
    game.load.image('ball', '../assets/ball.png');
    game.load.image('edge', '../assets/edge.png');
  },
  create: function() {
		game.state.start('menu');
	}
}
let menu = {
  create: function() {
    let text = game.add.text(225, 250, "Start Game", { font: "65px Arial", fill:'#fff', align: "center" });
    text.inputEnabled = true;
    text.events.onInputUp.add(menu.up);
  },
  up: function(item) {
    game.state.start('main');
  }
}
