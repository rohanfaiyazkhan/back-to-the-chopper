import { init, Sprite, GameLoop, initKeys, keyPressed } from "kontra";

let { canvas } = init();

let constants = {
  gravity: 2,
  jumpSpeed: 20,
  height: 40,
  width: 20
};

let player = Sprite({
  x: 0,
  y: 360,
  color: "red",
  width: constants.width,
  height: constants.height,
  dx: 5,
  dy: 0
});

function isOverlapping(player, obstacle) {
  return (
    player.x + player.width + player.dx >= obstacle.x &&
    player.x <= obstacle.x + obstacle.width &&
    player.y + player.height + player.dy >= obstacle.y &&
    player.y + player.height + player.dy <= obstacle.y + obstacle.height
  );
}

let obstacle = Sprite({
  x: canvas.width / 2,
  y: 360,
  height: constants.height,
  width: 100,
  color: "green"
});

initKeys();

let loop = GameLoop({
  // create the main game loop
  update: function() {
    // update the game state
    player.update();
    obstacle.update();
    // wrap the sprites position when it reaches
    // the edge of the screen
    if (player.x + player.width + player.dx > canvas.width || player.x < 0) {
      player.dx *= -1;
    }

    if (isOverlapping(player, obstacle)) {
      player.dx *= -1;
    }

    if (player.y < 360 && !isOverlapping(player, obstacle)) {
      player.dy += constants.gravity;
    } else {
      player.dy = 0;
    }

    if (keyPressed("space") && player.y === 360) {
      player.dy = -constants.jumpSpeed;
    }
  },
  render: function() {
    // render the game state
    player.render();
    obstacle.render();
  }
});

loop.start(); // start the game
